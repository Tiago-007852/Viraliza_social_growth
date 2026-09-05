import React, { useEffect, useState, useRef } from 'react';
import { PlatformId } from '../types';
import { InstagramIcon, TikTokIcon, YouTubeIcon, FacebookIcon, ViralizaBrandMark } from './icons/PlatformIcons';

interface ViralizaOrbitProps {
  selectedPlatform: PlatformId;
  onSelectPlatform: (platformId: PlatformId) => void;
}

interface OrbitItem {
  id: PlatformId;
  name: string;
  icon: React.ReactNode;
  colorClass: string;
  glowColor: string;
  baseAngleOffset: number; // in radians
}

export const ViralizaOrbit: React.FC<ViralizaOrbitProps> = ({
  selectedPlatform,
  onSelectPlatform,
}) => {
  const [angle, setAngle] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [dimensions, setDimensions] = useState({ rx: 175, ry: 95, centerSize: 84 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive radius & scale calculation
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 360) {
        // Ultra-compact screens (Galaxy Fold outer, iPhone SE 1st gen)
        setDimensions({ rx: 92, ry: 48, centerSize: 58 });
      } else if (width < 440) {
        // Standard compact phones (iPhone 12/13/14 mini, standard Galaxy)
        setDimensions({ rx: 108, ry: 58, centerSize: 66 });
      } else if (width < 640) {
        // Large phones & phablets
        setDimensions({ rx: 128, ry: 70, centerSize: 72 });
      } else if (width < 1024) {
        // Tablets
        setDimensions({ rx: 155, ry: 84, centerSize: 80 });
      } else {
        // Desktops & wide screens
        setDimensions({ rx: 175, ry: 95, centerSize: 86 });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Continuous smooth orbital motion
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      return; // static elegant display
    }

    const animate = (currentTime: number) => {
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      if (!isPaused) {
        // Orbit speed: full cycle in ~22 seconds
        setAngle((prev) => (prev + delta * 0.28) % (2 * Math.PI));
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const orbitItems: OrbitItem[] = [
    {
      id: 'instagram',
      name: 'Instagram',
      icon: <InstagramIcon size={24} />,
      colorClass: 'from-pink-500 to-purple-600',
      glowColor: 'rgba(236, 72, 153, 0.5)',
      baseAngleOffset: 0, // top/front start
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      icon: <TikTokIcon size={22} className="text-white" />,
      colorClass: 'from-cyan-400 to-rose-500',
      glowColor: 'rgba(6, 182, 212, 0.5)',
      baseAngleOffset: Math.PI / 2, // right
    },
    {
      id: 'youtube',
      name: 'YouTube',
      icon: <YouTubeIcon size={24} className="text-red-500" />,
      colorClass: 'from-red-600 to-rose-600',
      glowColor: 'rgba(239, 68, 68, 0.5)',
      baseAngleOffset: Math.PI, // bottom/back
    },
    {
      id: 'facebook',
      name: 'Facebook',
      icon: <FacebookIcon size={22} className="text-blue-500" />,
      colorClass: 'from-blue-600 to-indigo-600',
      glowColor: 'rgba(59, 130, 246, 0.5)',
      baseAngleOffset: (3 * Math.PI) / 2, // left
    },
  ];

  return (
    <div
      id="viraliza-orbit-container"
      ref={containerRef}
      className="relative flex items-center justify-center w-full max-w-[340px] sm:max-w-[420px] md:max-w-[480px] h-[300px] sm:h-[350px] md:h-[380px] select-none mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      role="region"
      aria-label="Viraliza Orbit - Redes Sociais Integradas"
    >
      {/* Visual Ambient Core Glow Behind */}
      <div
        className="absolute w-56 h-56 rounded-full blur-[70px] pointer-events-none opacity-40 transition-all duration-700"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, rgba(236, 72, 153, 0.3) 50%, transparent 80%)',
        }}
      />

      {/* Orbit Rings / Ellipse tracks */}
      <div
        className="absolute rounded-full border border-purple-500/20 pointer-events-none"
        style={{
          width: `${dimensions.rx * 2}px`,
          height: `${dimensions.ry * 2}px`,
          transform: 'rotate(-10deg)',
          boxShadow: '0 0 25px -5px rgba(168, 85, 247, 0.15)',
        }}
      />
      <div
        className="absolute rounded-full orbit-ring pointer-events-none"
        style={{
          width: `${dimensions.rx * 2 + 16}px`,
          height: `${dimensions.ry * 2 + 16}px`,
          transform: 'rotate(-10deg)',
        }}
      />

      {/* Central Brand Core "V" */}
      <div
        id="viraliza-central-core"
        className="relative z-20 flex flex-col items-center justify-center rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 border border-white/20 shadow-xl shadow-purple-500/40 cursor-pointer group transition-transform duration-300 hover:scale-105"
        style={{
          width: `${dimensions.centerSize}px`,
          height: `${dimensions.centerSize}px`,
        }}
        title="Viraliza"
      >
        {/* Core pulsing outer ring */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-blue-500/30 animate-pulse pointer-events-none" />

        <div className="relative flex items-center justify-center text-white font-black text-2xl drop-shadow-md">
          V
        </div>
        <span className="text-[9px] font-bold tracking-widest text-white/90 uppercase">
          VIRALIZA
        </span>
      </div>

      {/* Orbiting Platform Elements */}
      {orbitItems.map((item) => {
        // Calculated current angle
        const currentAngle = angle + item.baseAngleOffset;

        // Position coordinates with subtle tilted ellipse
        // Rotate vector slightly (-10 degrees) for optical beauty
        const tilt = -0.1745; // ~ -10 degrees in radians
        const unrotatedX = dimensions.rx * Math.cos(currentAngle);
        const unrotatedY = dimensions.ry * Math.sin(currentAngle);

        const x = unrotatedX * Math.cos(tilt) - unrotatedY * Math.sin(tilt);
        const y = unrotatedX * Math.sin(tilt) + unrotatedY * Math.cos(tilt);

        // Depth calculation: sin(currentAngle) determines front vs back
        // Front is when y is lower (closer to viewer)
        const depth = Math.sin(currentAngle); // -1 (back) to +1 (front)
        const isFront = depth > 0;
        
        // Depth-based scaling, opacity and elevation
        // Front gets larger, brighter, with highlighted glow
        const scale = 0.85 + (depth + 1) * 0.22; // 0.85 (back) -> 1.29 (front)
        const opacity = 0.65 + (depth + 1) * 0.175; // 0.65 -> 1.0
        const zIndex = isFront ? 25 + Math.round(depth * 10) : 10 + Math.round((depth + 1) * 5);
        const isCurrentlySelected = selectedPlatform === item.id;

        return (
          <button
            key={item.id}
            id={`orbit-node-${item.id}`}
            onClick={() => onSelectPlatform(item.id)}
            type="button"
            className="absolute flex items-center justify-center rounded-2xl p-2 sm:p-2.5 transition-all duration-300 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-purple-400 glass-card min-w-[40px] min-h-[40px]"
            style={{
              transform: `translate(${x}px, ${y}px) scale(${scale})`,
              zIndex,
              opacity,
              borderColor: isCurrentlySelected
                ? '#EC4899'
                : isFront
                ? 'rgba(255, 255, 255, 0.2)'
                : 'rgba(255, 255, 255, 0.08)',
              boxShadow: isCurrentlySelected
                ? `0 0 25px ${item.glowColor}, 0 0 12px rgba(236, 72, 153, 0.5)`
                : isFront
                ? `0 8px 20px -4px ${item.glowColor}, 0 0 10px rgba(255, 255, 255, 0.06)`
                : '0 4px 12px rgba(0, 0, 0, 0.4)',
            }}
            aria-label={`Selecionar ${item.name}`}
          >
            {/* Active Indicator Ring */}
            {isCurrentlySelected && (
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pink-500 glow-dot" />
              </span>
            )}

            <div className="flex items-center gap-1 sm:gap-1.5 px-0.5 sm:px-1">
              <div className="transition-transform duration-200 group-hover:scale-110 shrink-0">
                {item.icon}
              </div>
              <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-white whitespace-nowrap">
                {item.name}
              </span>
            </div>
          </button>
        );
      })}

      {/* Orbit Pause / Interaction hint */}
      <div className="absolute -bottom-3 text-[10px] sm:text-[11px] text-neutral-400 font-medium tracking-wide text-center px-4">
        <span className="hidden sm:inline">Passa o cursor para pausar • </span>
        <span>Toca ou clica numa rede para ver pacotes</span>
      </div>
    </div>
  );
};
