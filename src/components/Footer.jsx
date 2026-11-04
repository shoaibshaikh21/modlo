import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer = ({ onOpenBrandAudit }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-bg-primary border-t border-burgundy/40 pt-16 sm:pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-burgundy/30">
          
          {/* Brand & Descriptor Left */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl sm:text-3xl font-bold tracking-tight text-cream font-sans">
                  MODLONIZE<span className="text-crimson font-light text-lg">®</span>
                </span>
                <span className="w-2 h-2 rounded-full bg-crimson" />
              </div>
              
              <p className="font-mono text-xs tracking-widest uppercase text-text-muted mb-4">
                Digital Transformation House
              </p>

              <p className="font-editorial-italic italic text-xl text-cream/80 max-w-sm">
                Beyond Digital.
              </p>
            </div>

            <p className="text-xs text-text-dim font-body mt-8 md:mt-0 max-w-sm leading-relaxed">
              We rethink how businesses operate, connect, and grow through strategy, design, technology, and intelligent systems.
            </p>
          </div>

          {/* Links Right */}
          <div className="md:col-span-6 flex flex-col sm:flex-row justify-between sm:justify-end gap-12 sm:gap-20">
            
            {/* Navigation / Index */}
            <div>
              <span className="font-mono text-[11px] tracking-widest uppercase text-crimson block mb-5">
                // INDEX
              </span>
              <ul className="space-y-3 text-sm font-medium text-text-muted">
                <li>
                  <a href="#hero" className="hover:text-cream transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-cream transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#capabilities" className="hover:text-cream transition-colors">
                    Capabilities
                  </a>
                </li>
                <li>
                  <a href="#approach" className="hover:text-cream transition-colors">
                    Our Approach
                  </a>
                </li>
                <li>
                  <a href="#work" className="hover:text-cream transition-colors">
                    Selected Work
                  </a>
                </li>
                <li>
                  <button
                    onClick={onOpenBrandAudit}
                    className="text-crimson hover:text-cream font-mono text-xs uppercase tracking-wider flex items-center gap-1 transition-colors"
                  >
                    <span>Brand Audit Suite</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </li>
              </ul>
            </div>

            {/* Social & Contact */}
            <div>
              <span className="font-mono text-[11px] tracking-widest uppercase text-crimson block mb-5">
                // CONNECT
              </span>
              <ul className="space-y-3 text-sm font-medium text-text-muted">
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-cream transition-colors group"
                  >
                    <span>Instagram</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-crimson" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-cream transition-colors group"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-crimson" />
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:partner@modlonize.com"
                    className="inline-flex items-center gap-1.5 hover:text-cream transition-colors group"
                  >
                    <span>Email</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-crimson" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("MODLONIZE® Privacy Policy: Client confidentiality, NDA protection, and biometric/data security are guaranteed under our global studio charter.");
                    }}
                    className="hover:text-cream transition-colors text-xs text-text-dim block pt-2"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-text-dim gap-4">
          <div>
            © {currentYear} MODLONIZE®. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-crimson">GEN-Z CREATIVE-TECH HOUSE</span>
            <span>•</span>
            <span>EDITION 2026.4</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
