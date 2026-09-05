import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onStartClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Preços', href: '#precos' },
    { name: 'Como funciona', href: '#como-funciona' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'glass-card border-b border-white/10 shadow-lg shadow-black/40'
          : 'bg-[#050508]/80 backdrop-blur-md border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#inicio');
          }}
          className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400 rounded-lg p-1"
          aria-label="Viraliza - Página Inicial"
        >
          <img src="/viraliza-logo.png" alt="Viraliza Logo" className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg object-contain transition-transform duration-300 group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="font-extrabold text-lg sm:text-xl tracking-wider text-white">
              VIRALIZA
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-widest text-cyan-400 uppercase -mt-1 font-medium">
              Social Growth
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegação Principal">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-200 focus:outline-none focus:text-purple-400"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center">
          <button
            id="navbar-cta-button"
            type="button"
            onClick={onStartClick}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-neutral-950 bg-white hover:bg-neutral-100 shadow-sm shadow-white/10 hover:shadow-white/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400 min-h-[44px]"
          >
            <span>Começar agora</span>
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-11 h-11 flex items-center justify-center rounded-xl text-neutral-300 hover:text-white glass-card border border-white/10 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400 cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden glass-card border-b border-white/10 px-4 pt-3 pb-6 space-y-3 transition-all animate-fadeIn"
        >
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="px-4 py-3 min-h-[44px] flex items-center rounded-xl text-base font-medium text-neutral-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <button
              id="mobile-navbar-cta-button"
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onStartClick();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] rounded-xl text-base font-semibold text-neutral-950 bg-white hover:bg-neutral-100 shadow-md cursor-pointer"
            >
              <span>Começar agora</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
