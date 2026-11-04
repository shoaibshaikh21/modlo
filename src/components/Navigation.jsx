import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navigation = ({ onOpenBrandAudit }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#capabilities' },
    { name: 'Work', href: '#work' },
    { name: 'Insights', href: '#approach' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0B090A]/85 backdrop-blur-md border-b border-burgundy/40 py-4 shadow-xl shadow-black/40'
            : 'bg-transparent py-6 sm:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Identity Left */}
          <a
            href="#"
            className="group flex flex-col items-start focus:outline-none"
            aria-label="MODLONIZE® Homepage"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-cream group-hover:text-white transition-colors font-sans">
                MODLONIZE<span className="text-crimson font-light text-base ml-0.5">®</span>
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse" />
            </div>
            <span className="text-[10px] tracking-widest uppercase text-text-muted font-mono -mt-0.5 group-hover:text-cream/90 transition-colors">
              Digital Transformation House
            </span>
          </a>

          {/* Desktop Navigation Links Right */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium tracking-wide text-text-muted hover:text-cream transition-colors relative py-1 group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-crimson transition-all duration-300 group-hover:w-full" />
              </button>
            ))}

            {/* Brand Audit Primary CTA Button */}
            <button
              onClick={onOpenBrandAudit}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-widest uppercase bg-crimson hover:bg-crimson-accent text-cream border border-crimson/50 rounded-full transition-all duration-300 hover:shadow-crimson-soft group hover:-translate-y-0.5"
            >
              <span>GET YOUR BRAND AUDIT</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-cream hover:text-crimson focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-bg-primary/95 backdrop-blur-xl md:hidden transition-all duration-500 flex flex-col justify-between p-8 pt-28 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto translate-x-0' : 'opacity-0 pointer-events-none translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-6">
          <div className="text-xs font-mono text-crimson tracking-widest uppercase">
            // Navigation Index
          </div>
          {navLinks.map((link, idx) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-3xl font-light text-cream hover:text-crimson transition-colors flex items-center justify-between border-b border-burgundy/30 pb-4"
            >
              <div className="flex items-center gap-4">
                <span className="text-xs font-mono text-text-dim">0{idx + 1}</span>
                <span>{link.name}</span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-crimson" />
            </button>
          ))}
        </div>

        <div className="space-y-6 pt-6">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBrandAudit();
            }}
            className="w-full flex items-center justify-center gap-3 py-4 text-sm font-semibold tracking-widest uppercase bg-crimson text-cream rounded-full shadow-lg shadow-crimson/30"
          >
            <span>GET YOUR BRAND AUDIT</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <div className="text-center font-mono text-xs text-text-muted">
            MODLONIZE® — Beyond Digital.
          </div>
        </div>
      </div>
    </>
  );
};
