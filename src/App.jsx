import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProblemStatement } from './components/ProblemStatement';
import { Capabilities } from './components/Capabilities';
import { Approach } from './components/Approach';
import { SelectedWork } from './components/SelectedWork';
import { ClosingCTA } from './components/ClosingCTA';
import { Footer } from './components/Footer';
import { BrandAuditPage } from './components/BrandAuditPage';
import { ManifestoAudioModal } from './components/ManifestoAudioModal';
import { CapabilityModal } from './components/CapabilityModal';
import { CustomCursor } from './components/CustomCursor';

export function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'audit'
  const [manifestoModalOpen, setManifestoModalOpen] = useState(false);
  const [selectedCapability, setSelectedCapability] = useState(null);

  // Sync hash routing so #/audit works directly and allows browser back/forward
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#/audit' || hash === '#audit') {
        setCurrentView('audit');
      } else {
        setCurrentView('home');
      }
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const navigateToAudit = () => {
    window.location.hash = '/audit';
    setCurrentView('audit');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    window.location.hash = '';
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAudioManifesto = () => setManifestoModalOpen(true);
  const handleCloseAudioManifesto = () => setManifestoModalOpen(false);

  const handleSelectCapability = (cap) => setSelectedCapability(cap);
  const handleCloseCapabilityModal = () => setSelectedCapability(null);

  return (
    <div className="relative min-h-screen bg-bg-primary text-cream selection:bg-crimson selection:text-cream font-sans">
      
      {/* Subtle Persistent Film Grain Overlay */}
      <div className="fixed inset-0 film-grain pointer-events-none z-30 opacity-30" />

      {/* Bespoke Wine Custom Cursor (desktop only) */}
      <CustomCursor />

      {/* View Switcher: Dedicated Brand Audit Page or Main Studio Landing Page */}
      {currentView === 'audit' ? (
        <BrandAuditPage onBack={navigateToHome} />
      ) : (
        <>
          {/* Navigation */}
          <Navigation onOpenBrandAudit={navigateToAudit} />

          {/* Main Content Sections */}
          <main className="relative z-10">
            {/* 05. Hero Section */}
            <Hero
              onOpenBrandAudit={navigateToAudit}
              onOpenAudioManifesto={handleOpenAudioManifesto}
            />

            {/* 06. Problem Statement */}
            <ProblemStatement />

            {/* 07. Capabilities (Four Visual Panels) */}
            <Capabilities onSelectCapability={handleSelectCapability} />

            {/* 08. Our Approach (Four Stages Timeline) */}
            <Approach />

            {/* Selected Work (Editorial Transformations Showcase) */}
            <SelectedWork onSelectWork={navigateToAudit} />

            {/* 09. Closing Section */}
            <ClosingCTA onOpenBrandAudit={navigateToAudit} />
          </main>

          {/* 10. Minimal Footer */}
          <Footer onOpenBrandAudit={navigateToAudit} />
        </>
      )}

      {/* Cinematic Audio Manifesto Modal */}
      <ManifestoAudioModal
        isOpen={manifestoModalOpen}
        onClose={handleCloseAudioManifesto}
      />

      {/* Capability Deep-Dive Modal */}
      <CapabilityModal
        capability={selectedCapability}
        onClose={handleCloseCapabilityModal}
        onOpenProjectModal={navigateToAudit}
      />

    </div>
  );
}

export default App;
