import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Layers } from 'lucide-react';
import { ViralizaOrbit } from './ViralizaOrbit';
import { PlatformId } from '../types';

interface HeroProps {
  selectedPlatform: PlatformId;
  onSelectPlatform: (id: PlatformId) => void;
  onStartClick: () => void;
  onViewPackagesClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  selectedPlatform,
  onSelectPlatform,
  onStartClick,
  onViewPackagesClick,
}) => {
  return (
    <section
      id="inicio"
      className="relative min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] flex items-center justify-center pt-6 sm:pt-10 pb-12 sm:pb-16 md:py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            
            {/* Top Badge: Slogan / Multi-platform highlight */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-medium mb-4 sm:mb-6 max-w-full"
            >
              <span className="w-2 h-2 rounded-full bg-purple-400 glow-dot shrink-0" />
              <span className="truncate">Uma plataforma. Todas as tuas redes.</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.18] sm:leading-[1.15] max-w-2xl"
            >
              Faz a tua presença{' '}
              <span className="text-gradient">
                digital crescer.
              </span>
            </motion.h1>

            {/* Slogan Secondary / Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="mt-2.5 sm:mt-3 text-sm sm:text-lg font-medium text-purple-200/90"
            >
              A tua presença digital. Mais alcance. Mais impacto.
            </motion.p>

            {/* Hero Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
              className="mt-3 sm:mt-4 text-sm sm:text-lg text-neutral-400 leading-relaxed max-w-xl"
            >
              Impulsiona a tua presença nas redes sociais com pacotes simples,
              acessíveis e pensados para quem quer destacar-se online.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <button
                id="hero-cta-primary"
                type="button"
                onClick={onStartClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-lg shadow-purple-500/25 transition-all transform hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400 min-h-[48px]"
              >
                <span>Começar agora</span>
                <ArrowRight size={18} />
              </button>

              <button
                id="hero-cta-secondary"
                type="button"
                onClick={onViewPackagesClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-white glass-card hover:bg-white/5 border border-white/10 hover:border-white/20 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-neutral-400 min-h-[48px]"
              >
                <Layers size={18} className="text-neutral-400" />
                <span>Ver pacotes</span>
              </button>
            </motion.div>

            {/* Multi-network supported ticker */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-4 text-xs text-neutral-400"
            >
              <span className="text-neutral-300 font-medium">Plataformas suportadas:</span>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 font-semibold text-neutral-300">
                <span className="hover:text-pink-400 transition-colors">Instagram</span>
                <span className="text-neutral-600">•</span>
                <span className="hover:text-cyan-400 transition-colors">TikTok</span>
                <span className="text-neutral-600">•</span>
                <span className="hover:text-red-400 transition-colors">YouTube</span>
                <span className="text-neutral-600">•</span>
                <span className="hover:text-blue-400 transition-colors">Facebook</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: The Standout Viraliza Orbit */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <ViralizaOrbit
              selectedPlatform={selectedPlatform}
              onSelectPlatform={onSelectPlatform}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
