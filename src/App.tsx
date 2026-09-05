/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { PlatformId } from './types';
import { BackgroundGlow } from './components/BackgroundGlow';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PlatformsSection } from './components/PlatformsSection';
import { PricingSection } from './components/PricingSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformId>('instagram');

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartNow = () => {
    scrollToSection('#servicos');
  };

  const handleViewPackages = () => {
    scrollToSection('#precos');
  };

  const handleSelectPlatformFromCard = (platformId: PlatformId) => {
    setSelectedPlatform(platformId);
  };

  return (
    <div className="relative min-h-screen bg-[#050508] text-neutral-100 selection:bg-purple-600 selection:text-white overflow-x-hidden flex flex-col font-sans">
      {/* Visual Ambient Glows */}
      <BackgroundGlow />

      {/* Navigation Header */}
      <Navbar onStartClick={handleStartNow} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full relative z-10">
        {/* 1. Hero Section with Viraliza Orbit */}
        <Hero
          selectedPlatform={selectedPlatform}
          onSelectPlatform={setSelectedPlatform}
          onStartClick={handleStartNow}
          onViewPackagesClick={handleViewPackages}
        />

        {/* 2. Platforms / Services Section */}
        <PlatformsSection
          selectedPlatform={selectedPlatform}
          onSelectPlatform={handleSelectPlatformFromCard}
          onNavigateToPricing={handleViewPackages}
        />

        {/* 3. Packages & Pricing Section */}
        <PricingSection
          selectedPlatform={selectedPlatform}
          onSelectPlatform={setSelectedPlatform}
        />

        {/* 4. How It Works Section */}
        <HowItWorksSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
