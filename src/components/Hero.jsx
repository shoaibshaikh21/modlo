import React from 'react';
import { ArrowUpRight, Headphones } from 'lucide-react';
import { HeroSculptureComposition } from './Graphics';

export const Hero = ({ onOpenBrandAudit, onOpenAudioManifesto }) => {
  return (
    <section 
      id="hero"
      className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center pt-28 sm:pt-32 pb-16 lg:pb-24 overflow-hidden wine-gradient-bg"
    >
      {/* Background Architectural Grid Lines & Atmospheric glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-burgundy/20 to-transparent" />
        <div className="absolute top-0 right-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-burgundy/15 to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-burgundy/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Asymmetrical Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Small Label */}
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-crimson uppercase">
                (01) DIGITAL TRANSFORMATION HOUSE
              </span>
              <div className="h-[1px] w-12 bg-crimson/50" />
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[6.8rem] xl:text-[7.6rem] font-bold leading-[0.92] tracking-tight text-cream mb-8 font-sans">
              <span className="block text-cream hover:tracking-normal transition-all duration-500">
                Beyond
              </span>
              <span className="block font-editorial-italic font-normal text-crimson italic relative pl-1 sm:pl-2">
                Digital.
                {/* Subtle underline stroke accent */}
                <span className="absolute bottom-1 left-2 sm:left-4 w-4/5 h-[3px] bg-gradient-to-r from-crimson via-burgundy to-transparent opacity-80" />
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-text-muted text-lg sm:text-xl lg:text-xl font-normal leading-relaxed max-w-xl mb-10 font-body">
              We help businesses rethink, build, and scale their digital presence — through strategy, design, and intelligent systems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-12 sm:mb-16">
              {/* Primary Enhancement: GET YOUR BRAND AUDIT ↗ */}
              <button
                onClick={onOpenBrandAudit}
                className="inline-flex items-center gap-3 px-7 py-4 text-xs sm:text-sm font-semibold tracking-widest uppercase bg-crimson hover:bg-crimson-accent text-cream rounded-full transition-all duration-300 shadow-lg shadow-crimson/30 hover:shadow-crimson/50 hover:-translate-y-0.5 group"
              >
                <span>GET YOUR BRAND AUDIT</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              {/* Enhancement 02: LISTEN TO OUR MANIFESTO */}
              <button
                onClick={onOpenAudioManifesto}
                className="inline-flex items-center gap-3 px-6 py-4 text-xs sm:text-sm font-semibold tracking-widest uppercase bg-bg-secondary hover:bg-bg-card text-cream/90 hover:text-cream border border-burgundy/60 hover:border-crimson/60 rounded-full transition-all duration-300 group"
              >
                <div className="w-6 h-6 rounded-full bg-burgundy/80 flex items-center justify-center text-crimson group-hover:bg-crimson group-hover:text-cream transition-colors">
                  <Headphones className="w-3.5 h-3.5" />
                </div>
                <span>LISTEN TO OUR MANIFESTO</span>
              </button>
            </div>

            {/* Capability Strip */}
            <div className="pt-6 border-t border-burgundy/40">
              <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 text-[11px] sm:text-xs font-mono font-medium tracking-ultra uppercase text-text-dim">
                <span className="hover:text-cream transition-colors">STRATEGY</span>
                <span className="text-crimson/60">/</span>
                <span className="hover:text-cream transition-colors">DESIGN</span>
                <span className="text-crimson/60">/</span>
                <span className="hover:text-cream transition-colors">TECHNOLOGY</span>
                <span className="text-crimson/60">/</span>
                <span className="hover:text-cream transition-colors">GROWTH</span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Hero Sculpture Composition */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <HeroSculptureComposition />
          </div>

        </div>
      </div>

      {/* Subtle bottom scroll prompt */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 pointer-events-none opacity-50">
        <span className="text-[9px] font-mono tracking-widest text-text-dim uppercase">SCROLL TO EXPLORE</span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-crimson to-transparent animate-pulse" />
      </div>
    </section>
  );
};
