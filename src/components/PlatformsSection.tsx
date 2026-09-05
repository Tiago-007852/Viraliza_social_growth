import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PLATFORMS } from '../data/config';
import { PlatformId } from '../types';
import { getPlatformIcon } from '../utils/platformIcons';

interface PlatformsSectionProps {
  selectedPlatform: PlatformId;
  onSelectPlatform: (id: PlatformId) => void;
  onNavigateToPricing: () => void;
}

export const PlatformsSection: React.FC<PlatformsSectionProps> = ({
  selectedPlatform,
  onSelectPlatform,
  onNavigateToPricing,
}) => {
  const handleCardClick = (id: PlatformId) => {
    onSelectPlatform(id);
    onNavigateToPricing();
  };

  return (
    <section id="servicos" className="py-14 sm:py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-medium mb-3">
            <span>Redes Sociais Oficiais</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Escolhe a tua plataforma.
          </h2>
          <p className="mt-2.5 sm:mt-3 text-sm sm:text-lg text-neutral-400">
            Leva a tua presença digital para o próximo nível.
          </p>
        </div>

        {/* 4 Platform Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {PLATFORMS.map((platform, index) => {
            const isSelected = selectedPlatform === platform.id;

            return (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <div
                  id={`platform-card-${platform.id}`}
                  onClick={() => handleCardClick(platform.id)}
                  className={`relative h-full flex flex-col justify-between p-5 sm:p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? 'glass-card border-cyan-500/50 bg-cyan-500/10 shadow-[0_0_30px_rgba(6,182,212,0.25)] scale-[1.02]'
                      : 'glass-card hover:border-purple-500/30 hover:bg-white/[0.05]'
                  } group`}
                >
                  {/* Selected Badge Indicator */}
                  {isSelected && (
                    <div className="absolute top-4 right-4 flex items-center gap-1 text-xs font-semibold text-cyan-300 bg-cyan-500/20 px-2.5 py-1 rounded-full border border-cyan-500/40">
                      <CheckCircle2 size={13} />
                      <span>Selecionada</span>
                    </div>
                  )}

                  {/* Card Content Top */}
                  <div>
                    {/* Platform Icon with Glow */}
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${
                        isSelected
                          ? 'bg-cyan-900/30 border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                          : 'bg-white/5 border border-white/10 group-hover:border-cyan-500/30'
                      }`}
                    >
                      {getPlatformIcon(platform.id, 34)}
                    </div>

                    {/* Platform Name */}
                    <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                      {platform.name}
                    </h3>

                    {/* Service Offering Badge */}
                    <div className="mt-1.5 inline-block text-xs font-medium text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                      {platform.tagline}
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
                      {platform.description}
                    </p>
                  </div>

                  {/* Card Action Bottom */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs font-medium text-neutral-400">
                      Ver pacotes disponíveis
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-400 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all">
                      <span>Ver pacotes</span>
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
