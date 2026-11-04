import React from 'react';

// Authentic textured crimson brush stroke overlay
export const RedBrushStroke = ({ className = "w-full h-auto", color = "#8E2948", opacity = 0.88 }) => (
  <svg 
    viewBox="0 0 540 120" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    preserveAspectRatio="none"
  >
    <path 
      d="M12 62C58 45 142 38 214 44C286 50 378 40 462 48C496 51 528 58 534 68C538 74 518 84 480 88C404 96 322 92 238 88C152 84 64 92 18 80C6 77 4 65 12 62Z" 
      fill={color} 
      fillOpacity={opacity}
    />
    <path 
      d="M48 52C130 36 260 38 360 42C430 45 498 44 522 56C470 64 380 62 300 60C210 58 110 62 48 52Z" 
      fill="#A83256" 
      fillOpacity="0.45"
    />
    <path 
      d="M3 70C90 56 220 54 340 58C430 61 510 65 538 72C500 78 410 77 310 74C200 71 80 76 3 70Z" 
      fill="#481823" 
      fillOpacity="0.5"
    />
  </svg>
);

// Classical Sculpture Composition with Burgundy Rectangular Graphic, Crimson Brush Stroke & Geometric Linework
export const HeroSculptureComposition = () => {
  return (
    <div className="relative w-full max-w-[540px] aspect-[4/5] mx-auto select-none group">
      {/* Background Burgundy Graphic Slab */}
      <div className="absolute -top-6 -right-6 w-3/4 h-3/4 bg-burgundy/40 border border-burgundy/60 backdrop-blur-sm -z-10 transition-transform duration-700 group-hover:translate-x-2 group-hover:-translate-y-2" />
      <div className="absolute top-1/4 -left-8 w-44 h-44 bg-crimson/15 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Main Classical Sculpture Portrait Frame */}
      <div className="relative w-full h-full overflow-hidden bg-bg-secondary border border-burgundy/40 shadow-2xl shadow-black/80">
        {/* Sculpture Image */}
        <img
          src="https://images.unsplash.com/photo-1544473244-f6895e69ad8b?auto=format&fit=crop&w=1200&q=85"
          alt="Classical monochrome sculpture portrait"
          className="w-full h-full object-cover object-top grayscale contrast-[1.25] brightness-[0.88] transition-transform duration-1000 ease-out group-hover:scale-105"
          onError={(e) => {
            // Elegant museum marble bust fallback if image takes time
            e.currentTarget.src = "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=85";
          }}
        />

        {/* Deep wine vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-burgundy/25 mix-blend-multiply opacity-80" />

        {/* Diagonal Crimson Brush Stroke across the sculpture */}
        <div className="absolute top-[38%] -left-8 right-[-10%] h-24 transform -rotate-12 pointer-events-none mix-blend-screen opacity-90 drop-shadow-[0_4px_16px_rgba(142,41,72,0.8)]">
          <RedBrushStroke className="w-full h-full" color="#8E2948" opacity={0.88} />
        </div>

        {/* Second energetic brush accent */}
        <div className="absolute top-[44%] left-6 w-3/4 h-10 transform -rotate-6 pointer-events-none mix-blend-overlay opacity-75">
          <RedBrushStroke className="w-full h-full" color="#F1E7DC" opacity={0.3} />
        </div>

        {/* Geometric linework & technical frames */}
        <div className="absolute inset-4 border border-cream/20 pointer-events-none flex flex-col justify-between p-3">
          <div className="flex justify-between items-start text-[10px] tracking-widest text-cream/70 font-mono">
            <span>FIG. 01 — CLASSICAL ARCHETYPE</span>
            <span>+ 45° 28' N</span>
          </div>

          {/* Golden section crosshairs */}
          <div className="absolute top-1/3 left-1/4 w-3 h-3 pointer-events-none">
            <div className="absolute top-1/2 left-0 w-3 h-[1px] bg-crimson" />
            <div className="absolute left-1/2 top-0 h-3 w-[1px] bg-crimson" />
          </div>

          <div className="flex justify-between items-end text-[10px] tracking-widest text-cream/60 font-mono">
            <span>MODLONIZE ARCHIVE</span>
            <span className="text-crimson font-semibold">2026//EDITION</span>
          </div>
        </div>

        {/* Minimal handwritten annotation */}
        <div className="absolute bottom-10 right-6 z-20 pointer-events-none transform -rotate-3">
          <span className="font-handwriting text-2xl sm:text-3xl text-cream drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] tracking-wide">
            Digital Transformation House
          </span>
          <div className="w-24 h-[1px] bg-crimson mt-0.5 ml-auto" />
        </div>

        {/* Subtle red stamp / badge */}
        <div className="absolute top-8 right-8 w-14 h-14 rounded-full border border-crimson/80 flex items-center justify-center p-1 backdrop-blur-sm pointer-events-none">
          <div className="text-[8px] font-mono tracking-tighter text-center uppercase text-cream/90 leading-tight">
            DEPT.<br /><span className="text-crimson font-bold">01</span><br />TRANSFORM
          </div>
        </div>
      </div>

      {/* Floating editorial caption underneath */}
      <div className="mt-3 flex items-center justify-between text-xs text-text-muted font-mono tracking-widest">
        <span>[ REF: SC-009 / BEYOND DIGITAL ]</span>
        <span className="text-crimson">STRATEGY & FORM</span>
      </div>
    </div>
  );
};

// Paper swatch for Problem Statement: "We fix that."
export const CreamPaperNote = () => (
  <div className="inline-block relative transform -rotate-2 hover:rotate-0 transition-transform duration-300">
    <div className="bg-cream text-bg-primary font-editorial-italic text-2xl sm:text-3xl px-6 py-2.5 shadow-2xl shadow-black border border-[#D8CEBF] relative overflow-hidden">
      {/* Paper texture lines */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-burgundy/20" />
      <span className="relative z-10 font-bold tracking-tight">We fix that.</span>
      <span className="ml-2 font-mono text-xs font-normal tracking-normal text-burgundy opacity-80 not-italic">
        [02]
      </span>
    </div>
    {/* Small red pin or tape hint */}
    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-3 bg-burgundy/40 backdrop-blur-sm rotate-3 border-t border-b border-white/20" />
  </div>
);
