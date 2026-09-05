export type PlatformId = 'instagram' | 'tiktok' | 'youtube' | 'facebook';

export interface Platform {
  id: PlatformId;
  name: string;
  tagline: string;
  description: string;
  accentColor: string;
  glowColor: string;
  badge: string;
}

export interface PackageItem {
  id: string;
  name: string;
  followers: number;
  likes: number;
  price: number;
  popular?: boolean;
  highlightText?: string;
}

export interface WhatsAppMessageConfig {
  platformName: string;
  packageName: string;
  followers: number;
  likes: number;
  price: number;
}
