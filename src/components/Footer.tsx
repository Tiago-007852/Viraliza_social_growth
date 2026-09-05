import React from 'react';
import { ViralizaBrandMark } from './icons/PlatformIcons';

export const Footer: React.FC = () => {
  const links = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Preços', href: '#precos' },
    { name: 'Como funciona', href: '#como-funciona' },
  ];

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="border-t border-white/5 bg-[#050508] relative z-10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Logo & Brand Slogan */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/30">
                V
              </div>
              <span className="font-extrabold text-xl tracking-wider text-white">
                VIRALIZA
              </span>
            </div>
            <p className="text-sm text-neutral-400 font-medium">
              Cresce. Destaca-te. Viraliza.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-2 sm:gap-6" aria-label="Links do Rodapé">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="px-3 py-2 text-sm text-neutral-400 hover:text-white transition-colors rounded-lg min-h-[44px] flex items-center"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Copyright notice */}
        <div className="pt-6 text-center text-xs text-neutral-500">
          <p>© 2026 Viraliza. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
