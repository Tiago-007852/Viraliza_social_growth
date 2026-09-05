import { PackageItem, Platform } from '../types';

export const WHATSAPP_CONFIG = {
  phoneNumber: '244924445652',
  displayNumber: '+244 924445652',
};

export const PLATFORMS: Platform[] = [
  {
    id: 'instagram',
    name: 'Instagram',
    tagline: 'Seguidores + Likes',
    description: 'Cresce no Instagram e aumenta a tua presença digital com alcance consistente e autoridade no teu nicho.',
    accentColor: 'from-pink-500 via-purple-500 to-amber-500',
    glowColor: 'rgba(236, 72, 153, 0.4)',
    badge: 'Rede Visual',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    tagline: 'Seguidores + Likes',
    description: 'Amplia a tua audiência no TikTok e potencia o algoritmo dos teus vídeos para atingir a página For You.',
    accentColor: 'from-cyan-400 via-rose-500 to-neutral-900',
    glowColor: 'rgba(6, 182, 212, 0.4)',
    badge: 'Vídeos Curtos',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    tagline: 'Seguidores + Likes',
    description: 'Fortalece o teu canal de YouTube com mais subscritores e interação nos teus vídeos de longa duração e Shorts.',
    accentColor: 'from-red-600 to-rose-700',
    glowColor: 'rgba(239, 68, 68, 0.4)',
    badge: 'Vídeo & Shorts',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    tagline: 'Seguidores + Likes',
    description: 'Expande a presença da tua página de Facebook e ganha maior relevância e credibilidade para a tua marca.',
    accentColor: 'from-blue-600 to-indigo-700',
    glowColor: 'rgba(59, 130, 246, 0.4)',
    badge: 'Comunidade & Páginas',
  },
];

export const PACKAGES: PackageItem[] = [
  {
    id: 'basic',
    name: 'Básico',
    followers: 500,
    likes: 50,
    price: 7.90,
  },
  {
    id: 'standard',
    name: 'Standard',
    followers: 1500,
    likes: 100,
    price: 14.90,
  },
  {
    id: 'premium',
    name: 'Premium',
    followers: 3000,
    likes: 200,
    price: 24.90,
  },
  {
    id: 'gold',
    name: 'Gold',
    followers: 7000,
    likes: 400,
    price: 39.90,
    popular: true,
    highlightText: '🔥 MAIS ESCOLHIDO',
  },
  {
    id: 'platinum',
    name: 'Platina',
    followers: 15000,
    likes: 800,
    price: 69.90,
  },
];
