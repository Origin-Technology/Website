// Origin Technology content — mirrors the live www.origin.pw catalogue.
import type { LucideIcon } from 'lucide-react';
import {
  KeyRound,
  ShieldCheck,
  Zap,
  Boxes,
  Radio,
  Globe,
} from 'lucide-react';

export const solideUrl = 'https://solide.origin.pw';
export const passUrl = 'https://pass.origin.pw';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  href: string;
  category: 'Authenticate' | 'Protect' | 'Accelerate' | 'Network';
  icon: LucideIcon;
}

export const products: Product[] = [
  {
    id: 'xenon-auth',
    name: 'Origin XenonAuth™',
    tagline: 'OAuth, done right',
    description:
      'Provide authentication for your application through our OAuth service. Drop-in sign-in, token management, and identity for any platform.',
    href: '/xenon-auth.html',
    category: 'Authenticate',
    icon: KeyRound,
  },
  {
    id: 'shield',
    name: 'Origin Shield™',
    tagline: 'Defense in depth',
    description:
      'Protect your applications with Origin Solide™ technology through multiple layered security checks, from integrity to runtime tampering.',
    href: '/shield.html',
    category: 'Protect',
    icon: ShieldCheck,
  },
  {
    id: 're-sync',
    name: 'Origin Re-Sync™',
    tagline: 'Lower latency, higher FPS',
    description:
      'Enhance your game performance and reduce screen input latency. Supports OpenGL, Vulkan and DirectX out of the box.',
    href: '/re-sync.html',
    category: 'Accelerate',
    icon: Zap,
  },
  {
    id: 'solide',
    name: 'Origin Solide™',
    tagline: 'JVM obfuscation',
    description:
      'Protect your JVM application with lightweight or heavy-duty obfuscation features. Ship bytecode that resists reverse engineering.',
    href: solideUrl,
    category: 'Protect',
    icon: Boxes,
  },
  {
    id: 'beacon',
    name: 'Origin Beacon™',
    tagline: 'Telemetry at scale',
    description:
      'Powerful, secure and stable multi-dimensional user data collection services. Understand your users without compromising trust.',
    href: '/beacon.html',
    category: 'Network',
    icon: Radio,
  },
  {
    id: 'network',
    name: 'Origin Network™',
    tagline: 'Powered by Origin Cloud',
    description:
      'All of our cloud services are powered by Origin Cloud and its powerful network service partners for global, reliable delivery.',
    href: '/network.html',
    category: 'Network',
    icon: Globe,
  },
];

export interface Pillar {
  key: string;
  title: string;
  blurb: string;
  points: string[];
  accent: string;
  icon: LucideIcon;
}

export const pillars: Pillar[] = [
  {
    key: 'authenticate',
    title: 'Authenticate',
    blurb: 'Give every application a secure front door with managed OAuth and identity.',
    points: ['XenonAuth™ OAuth service', 'Token & session management', 'Origin Pass identity'],
    accent: '#14a8d0',
    icon: KeyRound,
  },
  {
    key: 'protect',
    title: 'Protect',
    blurb: 'Harden apps end to end — from JVM bytecode to runtime integrity checks.',
    points: ['Shield™ layered checks', 'Solide™ obfuscation', 'Tamper & integrity monitoring'],
    accent: '#0e7ba6',
    icon: ShieldCheck,
  },
  {
    key: 'accelerate',
    title: 'Accelerate',
    blurb: 'Cut latency and lift performance across graphics APIs and the network edge.',
    points: ['Re-Sync™ input latency', 'OpenGL · Vulkan · DirectX', 'Origin Network™ edge'],
    accent: '#22ccdf',
    icon: Zap,
  },
];

export interface Member {
  name: string;
  role: string;
  github: string;
}

export const team: Member[] = [
  { name: 'CuteMic', role: 'Leader', github: 'MicIsHere' },
  { name: 'Xiguajerry', role: 'Member', github: 'Xiguajerry' },
  { name: 'jiyun233', role: 'Member', github: 'jiyun233' },
];

export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: '6', label: 'Production-grade services' },
  { value: '3', label: 'Graphics APIs accelerated' },
  { value: '24/7', label: 'Origin Cloud availability' },
  { value: '2022', label: 'Building since' },
];

export const announcement =
  'Origin is actively maintaining most services recently, which may cause temporary instability. Thanks for your understanding.';
