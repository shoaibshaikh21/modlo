import React from 'react';
import { CreamPaperNote } from './Graphics';

export const ProblemStatement = () => {
  return (
    <section 
      id="about" 
      className="relative py-24 sm:py-32 lg:py-40 bg-bg-secondary/70 border-t border-b border-burgundy/30 overflow-hidden"
    >
      {/* Background grain & ambient wine glow */}
      <div className="absolute inset-0 film-grain pointer-events-none opacity-40" />
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-96 h-96 bg-burgundy/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Top technical meta marker */}
        <div className="flex items-center justify-between border-b border-burgundy/40 pb-6 mb-16 sm:mb-20">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-crimson">
              (02)
            </span>
            <span className="font-mono text-xs tracking-widest uppercase text-text-dim">
              DIAGNOSTIC / MARKET REALITY
            </span>
          </div>
          <div className="font-mono text-xs text-text-dim tracking-widest hidden sm:block">
            STATUS: FRICTION DETECTED
          </div>
        </div>

        {/* Central Asymmetrical Typographic Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          
          <div className="lg:col-span-9">
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-[5.2rem] font-bold tracking-tight text-cream leading-[1.08] font-sans">
              <span className="block text-cream/90">
                Most businesses
              </span>
              <span className="block text-cream/90 mb-4 sm:mb-6">
                are online.
              </span>
              <span className="block text-text-muted text-3xl sm:text-5xl md:text-6xl font-light">
                But still not{' '}
                <span className="font-editorial-italic font-normal text-crimson italic tracking-tight underline decoration-burgundy/60 underline-offset-8">
                  built for growth.
                </span>
              </span>
            </h2>
          </div>

          {/* Right/Bottom Action: The Cream Paper Element "We fix that." */}
          <div className="lg:col-span-3 flex lg:justify-end items-center pt-6 lg:pt-0">
            <div className="flex flex-col items-start lg:items-end gap-4">
              <span className="font-mono text-[10px] tracking-widest uppercase text-text-dim">
                THE SOLUTION MANDATE
              </span>
              <CreamPaperNote />
              <p className="font-mono text-xs text-text-muted/80 max-w-xs text-left lg:text-right mt-2 leading-relaxed">
                Transforming disconnected templates into synchronized growth machinery.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
