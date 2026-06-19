import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Cloudflare "Region: Earth" globe: orange halftone dot-sphere on a
 * transparent white background, slowly rotating, with faint great-circle
 * arcs pulsing between nodes. Raw Three.js. Cleans up on unmount.
 */
export default function Globe() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = mount.clientWidth;
    let height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.4);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    group.rotation.z = 0.36; // tilt like the reference
    scene.add(group);

    const RADIUS = 2.6;

    // ---- dot-sphere (Fibonacci) in two tones for a halftone feel ----
    const DOTS = 2600;
    const pos: number[] = [];
    const nodePoints: THREE.Vector3[] = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < DOTS; i++) {
      const y = 1 - (i / (DOTS - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      const v = new THREE.Vector3(
        Math.cos(theta) * r * RADIUS,
        y * RADIUS,
        Math.sin(theta) * r * RADIUS,
      );
      pos.push(v.x, v.y, v.z);
      if (i % 90 === 0) nodePoints.push(v);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({
      color: 0x14a8d0,
      size: 0.05,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.9,
    });
    const dots = new THREE.Points(geo, mat);
    group.add(dots);

    // ---- arcs ----
    interface Arc { line: THREE.Line; mat: THREE.LineBasicMaterial; life: number; ttl: number; }
    const arcs: Arc[] = [];
    const MAX_ARCS = 10;

    function spawnArc() {
      const a = nodePoints[(Math.random() * nodePoints.length) | 0];
      const b = nodePoints[(Math.random() * nodePoints.length) | 0];
      if (!a || !b || a.distanceTo(b) < RADIUS) return;
      const mid = a.clone().add(b).multiplyScalar(0.5);
      mid.normalize().multiplyScalar(RADIUS * (1 + a.distanceTo(b) * 0.32));
      const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
      const g = new THREE.BufferGeometry().setFromPoints(curve.getPoints(36));
      const m = new THREE.LineBasicMaterial({ color: 0x22ccdf, transparent: true, opacity: 0 });
      const line = new THREE.Line(g, m);
      group.add(line);
      arcs.push({ line, mat: m, life: 0, ttl: 1.8 + Math.random() * 1.6 });
    }

    let raf = 0;
    let acc = 0;
    let lastT = performance.now();

    function animate(now: number) {
      raf = requestAnimationFrame(animate);
      const dt = Math.min((now - lastT) / 1000, 0.05);
      lastT = now;

      group.rotation.y += dt * (prefersReduced ? 0 : 0.1);

      acc += dt;
      if (!prefersReduced && acc > 0.4 && arcs.length < MAX_ARCS) {
        acc = 0;
        spawnArc();
      }
      for (let i = arcs.length - 1; i >= 0; i--) {
        const arc = arcs[i];
        arc.life += dt;
        const t = arc.life / arc.ttl;
        arc.mat.opacity = Math.sin(Math.min(t, 1) * Math.PI) * 0.85;
        if (t >= 1) {
          group.remove(arc.line);
          arc.line.geometry.dispose();
          arc.mat.dispose();
          arcs.splice(i, 1);
        }
      }
      renderer.render(scene, camera);
    }
    animate(performance.now());

    function onResize() {
      if (!mount) return;
      width = mount.clientWidth;
      height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
    const ro = new ResizeObserver(onResize);
    ro.observe(mount);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      arcs.forEach((a) => { a.line.geometry.dispose(); a.mat.dispose(); });
      geo.dispose();
      mat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="h-full w-full" aria-hidden="true" />;
}
