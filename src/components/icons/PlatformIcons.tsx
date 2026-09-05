import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

export const InstagramIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <defs>
      <linearGradient id="igGradient" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F58529" />
        <stop offset="0.35" stopColor="#DD2A7B" />
        <stop offset="0.65" stopColor="#8134AF" />
        <stop offset="1" stopColor="#515BD4" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="url(#igGradient)" strokeWidth="2.2" />
    <circle cx="12" cy="12" r="4.2" stroke="url(#igGradient)" strokeWidth="2.2" />
    <circle cx="17.5" cy="6.5" r="1.3" fill="url(#igGradient)" />
  </svg>
);

export const TikTokIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.345v13.67a2.89 2.89 0 0 1-2.88 2.88 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.31 0 .61.05.88.14V9.52a6.22 6.22 0 0 0-.88-.06A6.233 6.233 0 0 0 3.25 15.69 6.233 6.233 0 0 0 9.474 21.9a6.233 6.233 0 0 0 6.224-6.21V8.69a8.13 8.13 0 0 0 4.89 1.62V6.97a4.8 4.8 0 0 1-1-.284z" />
  </svg>
);

export const YouTubeIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export const FacebookIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export const WhatsAppIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.979-.276-.1-.476-.15-.677.15-.201.3-.777.979-.953 1.18-.175.2-.351.226-.652.075-.3-.15-1.269-.468-2.417-1.492-.894-.799-1.498-1.785-1.674-2.086-.175-.3-.019-.462.132-.612.135-.135.301-.351.452-.527.15-.175.2-.3.301-.501.101-.2.05-.376-.025-.527-.075-.15-.677-1.632-.928-2.235-.245-.588-.494-.509-.677-.518-.176-.009-.376-.009-.576-.009-.201 0-.526.075-.802.376-.276.3-1.053 1.028-1.053 2.507s1.078 2.908 1.229 3.109c.15.2 2.122 3.24 5.14 4.544.718.31 1.278.495 1.715.634.72.229 1.376.197 1.895.12.578-.087 1.782-.728 2.033-1.431.251-.703.251-1.305.176-1.43-.075-.127-.276-.202-.577-.353zm-5.464 7.422h-.002c-1.802 0-3.57-.484-5.112-1.401l-.367-.218-3.8 1.002 1.016-3.704-.239-.379a10.366 10.366 0 0 1-1.589-5.498c0-5.748 4.677-10.425 10.428-10.425a10.378 10.378 0 0 1 7.373 3.056 10.378 10.378 0 0 1 3.054 7.373c0 5.75-4.677 10.428-10.426 10.428zm9.192-16.565A11.936 11.936 0 0 0 12.008.432C5.636.432.449 5.619.449 11.992c0 2.037.533 4.025 1.545 5.783L0 23.568l5.96-1.564a11.954 11.954 0 0 0 5.688 1.448h.005c6.371 0 11.558-5.187 11.558-11.96 0-3.197-1.246-6.201-3.511-8.468z" />
  </svg>
);

export const ViralizaBrandMark: React.FC<IconProps> = ({ className = 'w-8 h-8', size = 32, ...props }) => (
  <svg
    viewBox="0 0 32 32"
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <defs>
      <linearGradient id="viralizaGrad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A855F7" />
        <stop offset="0.5" stopColor="#EC4899" />
        <stop offset="1" stopColor="#3B82F6" />
      </linearGradient>
    </defs>
    <rect width="32" height="32" rx="8" fill="#12111A" />
    <path
      d="M7 8L16 25L25 8H20.5L16 17.5L11.5 8H7Z"
      fill="url(#viralizaGrad)"
    />
    <circle cx="16" cy="11.5" r="1.5" fill="#FFFFFF" opacity="0.8" />
  </svg>
);
