// Cloudflare-style motion engine — GSAP + ScrollTrigger.
// Progressive enhancement: every animated element is visible by default if JS
// or motion is unavailable. All effects respect prefers-reduced-motion.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function reveals() {
  // Single elements: fade + rise as they scroll into view.
  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    const delay = parseFloat(el.dataset.revealDelay || '0');
    gsap.fromTo(
      el,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 86%', toggleActions: 'play none none none' },
      },
    );
  });

  // Groups: children stagger in together (Cloudflare's batched card reveal).
  gsap.utils.toArray<HTMLElement>('[data-reveal-group]').forEach((group) => {
    const kids = Array.from(group.children) as HTMLElement[];
    gsap.fromTo(
      kids,
      { opacity: 0, y: 34 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.09,
        scrollTrigger: { trigger: group, start: 'top 82%', toggleActions: 'play none none none' },
      },
    );
  });
}

function sequences() {
  // Terminal/list "boot" effect: rows reveal one after another, on first view.
  gsap.utils.toArray<HTMLElement>('[data-seq]').forEach((container) => {
    const rows = gsap.utils.toArray<HTMLElement>('[data-seq-item]', container);
    if (!rows.length) return;
    gsap.set(rows, { opacity: 0, x: -10 });
    ScrollTrigger.create({
      trigger: container,
      start: 'top 78%',
      once: true,
      onEnter: () => {
        gsap.to(rows, {
          opacity: 1,
          x: 0,
          duration: 0.4,
          ease: 'power2.out',
          stagger: 0.22,
        });
      },
    });
  });
}

function counters() {
  gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
    const target = parseFloat(el.dataset.count || '0');
    const suffix = el.dataset.countSuffix || '';
    const obj = { v: 0 };
    gsap.to(obj, {
      v: target,
      duration: 1.4,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 92%', once: true },
      onUpdate: () => {
        el.textContent = `${Math.round(obj.v)}${suffix}`;
      },
    });
  });
}

function floats() {
  // Continuous gentle bob/rotate for decorative tiles & node bubbles.
  gsap.utils.toArray<HTMLElement>('[data-float]').forEach((el, i) => {
    const dist = parseFloat(el.dataset.floatDist || '10');
    const rot = parseFloat(el.dataset.floatRot || '0');
    gsap.to(el, {
      y: `+=${dist}`,
      rotation: `+=${rot}`,
      duration: 2.6 + (i % 4) * 0.5,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      delay: (i % 5) * 0.25,
    });
  });
}

function popIns() {
  // Node bubbles pop in with a slight overshoot when the globe enters view.
  gsap.utils.toArray<HTMLElement>('[data-pop-group]').forEach((group) => {
    const kids = Array.from(group.querySelectorAll<HTMLElement>('[data-pop]'));
    if (!kids.length) return;
    gsap.set(kids, { scale: 0, opacity: 0 });
    ScrollTrigger.create({
      trigger: group,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(kids, {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: 'back.out(2)',
          stagger: 0.1,
        });
      },
    });
  });
}

function flareCards() {
  gsap.utils.toArray<HTMLElement>('.flare-card').forEach((card) => {
    ScrollTrigger.create({
      trigger: card,
      start: 'top 82%',
      once: true,
      onEnter: () => card.classList.add('is-lit'),
    });
  });
}

function spotlight() {
  // Pointer-tracking sheen on cards (sets --mx/--my CSS vars).
  const cards = document.querySelectorAll<HTMLElement>('[data-spotlight]');
  cards.forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });
}

function init() {
  if (prefersReduced) {
    // Reveal everything statically; skip motion.
    gsap.set('[data-reveal]', { opacity: 1, y: 0 });
    document
      .querySelectorAll<HTMLElement>('[data-reveal-group] > *, [data-seq-item], [data-pop]')
      .forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
    document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
      el.textContent = `${el.dataset.count || ''}${el.dataset.countSuffix || ''}`;
    });
    document.querySelectorAll<HTMLElement>('.flare-card').forEach((el) => {
      el.classList.add('is-lit');
    });
    spotlight();
    return;
  }

  reveals();
  sequences();
  counters();
  floats();
  popIns();
  flareCards();
  spotlight();
}

if (document.readyState !== 'loading') {
  init();
} else {
  document.addEventListener('DOMContentLoaded', init);
}
