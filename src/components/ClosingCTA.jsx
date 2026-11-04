import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { RedBrushStroke } from './Graphics';

export const ClosingCTA = ({ onOpenBrandAudit }) => {
  return (
    <section className="relative py-32 sm:py-44 bg-bg-secondary overflow-hidden border-t border-burgundy/40">
      
      {/* Visual: Abstract Burgundy Architectural Composition & Crimson Geometry */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80"
          alt="Abstract architectural geometry"
          className="w-full h-full object-cover grayscale contrast-150 brightness-[0.14] mix-blend-luminosity"
        />
        {/* Deep wine & burgundy atmospheric vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-burgundy/40 to-bg-primary mix-blend-multiply" />
        <div className="absolute -top-1/4 -right-1/4 w-[700px] h-[700px] bg-crimson/15 rounded-full blur-[140px]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-burgundy/30 rounded-full blur-[140px]" />
        
        {/* Subtle geometric framing */}
        <div className="absolute inset-10 border border-burgundy/30 pointer-events-none hidden md:block" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
        
        {/* Small Editorial Tag */}
        <div className="inline-flex items-center gap-3 mb-8">
          <div className="h-[1px] w-8 bg-crimson/50" />
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-crimson uppercase">
            INVITATION // COMMENCE TRANSFORMATION
          </span>
          <div className="h-[1px] w-8 bg-crimson/50" />
        </div>

        {/* Cinematic Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-cream leading-[1.02] max-w-5xl mx-auto mb-8 font-sans">
          READY TO BUILD<br />
          THE NEXT VERSION<br />
          OF{' '}
          <span className="font-editorial-italic font-normal text-crimson italic relative inline-block">
            YOUR BUSINESS?
            {/* Crimson brush stroke underline accent */}
            <div className="absolute -bottom-3 sm:-bottom-4 left-0 right-0 h-6 pointer-events-none opacity-80">
              <RedBrushStroke className="w-full h-full" color="#8E2948" opacity={0.9} />
            </div>
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-xl sm:text-2xl text-cream/80 font-editorial-italic italic max-w-xl mx-auto mb-10 sm:mb-12">
          Let's rethink what's possible.
        </p>

        {/* Primary CTA Button: GET YOUR BRAND AUDIT ↗ */}
        <div className="flex flex-col items-center justify-center gap-4">
          <button
            onClick={onOpenBrandAudit}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 text-sm sm:text-base font-semibold tracking-widest uppercase bg-crimson hover:bg-crimson-accent text-cream rounded-full transition-all duration-300 shadow-2xl shadow-crimson/40 hover:shadow-crimson/60 hover:-translate-y-1 group"
          >
            <span>GET YOUR BRAND AUDIT</span>
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
          
          <span className="font-mono text-xs text-text-muted tracking-wider">
            An initial review of your digital presence. No commitment.
          </span>
        </div>

        {/* Handwritten signature stamp */}
        <div className="mt-16 inline-block transform -rotate-2">
          <span className="font-handwriting text-2xl sm:text-3xl text-cream/70">
            Beyond Digital. Built for Growth.
          </span>
        </div>

      </div>
    </section>
  );
};
