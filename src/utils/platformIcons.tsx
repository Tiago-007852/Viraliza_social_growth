import React from 'react';
import { PlatformId } from '../types';
import { InstagramIcon, TikTokIcon, YouTubeIcon, FacebookIcon } from '../components/icons/PlatformIcons';

export function getPlatformIcon(id: PlatformId, size = 24): React.ReactNode {
  switch (id) {
    case 'instagram':
      return <InstagramIcon size={size} />;
    case 'tiktok':
      return <TikTokIcon size={size} className="text-white" />;
    case 'youtube':
      return <YouTubeIcon size={size} className="text-red-500" />;
    case 'facebook':
      return <FacebookIcon size={size} className="text-blue-500" />;
  }
}
