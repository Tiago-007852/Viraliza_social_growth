import React from 'react';
import { motion } from 'motion/react';
import { Users, Heart, ArrowUpRight } from 'lucide-react';
import { PACKAGES, PLATFORMS } from '../data/config';
import { PlatformId, PackageItem } from '../types';
import { formatFollowersCount, formatPrice, getWhatsAppUrl } from '../utils/whatsapp';
import {
  InstagramIcon,
  TikTokIcon,
  YouTubeIcon,
  FacebookIcon,
  WhatsAppIcon,
} from './icons/PlatformIcons';

interface PricingSectionProps {
  selectedPlatform: PlatformId;
  onSelectPlatform: (id: PlatformId) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  selectedPlatform,
  onSelectPlatform,
}) => {
  const currentPlatformObj = PLATFORMS.find((p) => p.id === selectedPlatform) || PLATFORMS[0];

  const getPlatformIcon = (id: PlatformId, size = 18) => {
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
  };

  const handleBuyClick = (pkg: PackageItem) => {
    const url = getWhatsAppUrl({
      platformName: currentPlatformObj.name,
      packageName: pkg.name,
      followers: pkg.followers,
      likes: pkg.likes,
      price: pkg.price,
    });

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="precos" className="py-14 sm:py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-medium mb-3">
            <span>Preços Transparentes</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Escolhe o teu pacote.
          </h2>
          <p className="mt-2.5 sm:mt-3 text-sm sm:text-lg text-neutral-400">
            Começa pequeno ou acelera o teu crescimento.
          </p>
        </div>

        {/* Platform Selection Bar [ Instagram ] [ TikTok ] [ YouTube ] [ Facebook ] */}
        <div className="flex flex-col items-center justify-center mb-10 sm:mb-12">
          <div className="text-xs font-medium text-neutral-400 mb-2.5 uppercase tracking-wider">
            Plataforma Selecionada:
          </div>
          <div
            id="platform-tabs-selector"
            className="glass-card grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl sm:rounded-full border border-white/10 shadow-lg w-full max-w-sm sm:max-w-none"
            role="tablist"
            aria-label="Plataformas suportadas"
          >
            {PLATFORMS.map((platform) => {
              const isSelected = selectedPlatform === platform.id;
              return (
                <button
                  key={platform.id}
                  id={`tab-platform-${platform.id}`}
                  onClick={() => onSelectPlatform(platform.id)}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  className={`flex items-center justify-center gap-2 px-3 sm:px-5 py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer min-h-[44px] ${
                    isSelected
                      ? 'platform-active text-white shadow-md font-semibold'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center justify-center shrink-0">
                    {getPlatformIcon(platform.id, 16)}
                  </div>
                  <span className="whitespace-nowrap">{platform.name}</span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Active Notice */}
          <div className="mt-3.5 sm:mt-4 flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-400">
            <span>A apresentar pacotes para:</span>
            <span className="inline-flex items-center gap-1.5 font-bold text-white px-2.5 sm:px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-xs">
              {getPlatformIcon(currentPlatformObj.id, 14)}
              {currentPlatformObj.name}
            </span>
          </div>
        </div>

        {/* 5 Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 items-stretch">
          {PACKAGES.map((pkg, index) => {
            const isGold = pkg.popular;

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: isGold ? -8 : -5 }}
                className={`relative flex flex-col justify-between rounded-2xl transition-all duration-300 ${
                  isGold
                    ? 'gold-card xl:-translate-y-2 xl:scale-105 z-20'
                    : 'glass-card hover:border-white/20'
                } p-5 sm:p-6 group`}
              >
                {/* Highlight Badge on popular package */}
                {isGold && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg whitespace-nowrap z-30">
                    <span>{pkg.highlightText || '🔥 MAIS ESCOLHIDO'}</span>
                  </div>
                )}

                {/* Top: Header & Details */}
                <div className="relative z-10">
                  {!isGold && (
                    <div className="text-xs font-semibold text-neutral-400 tracking-wider uppercase mb-3">
                      Pacote {pkg.name}
                    </div>
                  )}
                  {isGold && <div className="h-4" />}

                  {/* Package Title */}
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {pkg.name}
                  </h3>

                  {/* Price */}
                  <div className="mt-4 mb-6 pb-5 border-b border-white/10">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        {formatPrice(pkg.price)}
                      </span>
                    </div>
                    <span className="text-xs text-neutral-400 mt-1 block">
                      Taxa única para {currentPlatformObj.name}
                    </span>
                  </div>

                  {/* Deliverables List */}
                  <div className="space-y-3.5 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300 shrink-0">
                        <Users size={16} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-white">
                          {formatFollowersCount(pkg.followers)} seguidores
                        </span>
                        <span className="text-xs text-neutral-400">
                          Para o teu perfil
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-300 shrink-0">
                        <Heart size={16} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-white">
                          {formatFollowersCount(pkg.likes)} likes
                        </span>
                        <span className="text-xs text-neutral-400">
                          Nas tuas publicações
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom: "Comprar agora" Button */}
                <div className="relative z-10 pt-4 mt-auto">
                  <button
                    id={`buy-button-${pkg.id}`}
                    type="button"
                    onClick={() => handleBuyClick(pkg)}
                    className={`w-full py-2.5 px-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md focus:outline-none focus:ring-2 min-h-[44px] ${
                      isGold
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-lg shadow-pink-500/25 focus:ring-pink-300'
                        : 'border border-white/10 hover:bg-white/5 text-white focus:ring-purple-400'
                    }`}
                    aria-label={`Comprar pacote ${pkg.name} para ${currentPlatformObj.name} por ${formatPrice(pkg.price)}`}
                  >
                    <WhatsAppIcon size={18} />
                    <span>Comprar agora</span>
                    <ArrowUpRight size={15} />
                  </button>

                  <span className="text-[11px] text-neutral-400 text-center block mt-2">
                    Abre o WhatsApp com mensagem pré-preenchida
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
