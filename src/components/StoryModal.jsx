import React, { useState } from 'react';
import { X, Play, Pause, Volume2, Sparkles, CheckCircle2 } from 'lucide-react';
import { RedBrushStroke } from './Graphics';

export const StoryModal = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-bg-primary border border-burgundy/80 shadow-2xl shadow-black my-8 p-6 sm:p-10 z-10 overflow-hidden">
        
        {/* Top Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-text-muted hover:text-cream rounded-full hover:bg-burgundy/40 transition-colors z-20"
          aria-label="Close story modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video / Editorial Canvas Simulation */}
        <div className="relative aspect-video w-full bg-bg-secondary border border-burgundy/40 overflow-hidden mb-8 group">
          <img
            src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80"
            alt="Modlonize Story Art"
            className="w-full h-full object-cover grayscale contrast-125 brightness-[0.4] filter"
          />

          {/* Deep Wine & Red Brush Stroke Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-burgundy/30" />
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none w-full px-6">
            <span className="font-mono text-[10px] tracking-widest text-crimson uppercase block mb-2">
              MODLONIZE CINEMATIC MANIFESTO // 2026
            </span>
            <h4 className="text-3xl sm:text-5xl font-bold font-sans text-cream">
              BEYOND{' '}
              <span className="font-editorial-italic font-normal text-crimson italic">
                DIGITAL.
              </span>
            </h4>
            <p className="text-xs sm:text-sm font-handwriting text-cream/90 mt-2 text-2xl">
              "We don't build websites. We re-engineer growth engines."
            </p>
          </div>

          {/* Play/Pause controls overlay */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-cream/80 bg-black/60 px-4 py-2 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="hover:text-crimson transition-colors"
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
              </button>
              <span>{isPlaying ? '01:24 // PLAYING SOUNDTRACK' : 'PAUSED'}</span>
            </div>
            <div className="flex items-center gap-2 text-crimson">
              <Volume2 className="w-4 h-4" />
              <span>48kHz MASTER AUDIO</span>
            </div>
          </div>
        </div>

        {/* Manifesto Content */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-burgundy/40 pb-4">
            <span className="font-mono text-xs text-crimson tracking-widest uppercase">
              // THE THESIS
            </span>
            <span className="font-mono text-xs text-text-dim">
              FOUNDED ON PRINCIPLED TRANSFORMATION
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="border-l border-burgundy/60 pl-4">
              <h5 className="font-bold text-cream text-sm font-sans mb-1">01 / ELEGANCE</h5>
              <p className="text-xs text-text-muted leading-relaxed font-body">
                High aesthetic standard is not decoration; it is commercial authority and premium pricing power.
              </p>
            </div>
            <div className="border-l border-burgundy/60 pl-4">
              <h5 className="font-bold text-cream text-sm font-sans mb-1">02 / AUTOMATION</h5>
              <p className="text-xs text-text-muted leading-relaxed font-body">
                Human intellect is reserved for creative leaps; repetitive processes belong to autonomous code.
              </p>
            </div>
            <div className="border-l border-burgundy/60 pl-4">
              <h5 className="font-bold text-cream text-sm font-sans mb-1">03 / COMPOUNDING</h5>
              <p className="text-xs text-text-muted leading-relaxed font-body">
                We design systems that gain momentum with age rather than succumbing to technical rot.
              </p>
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-burgundy/70 hover:bg-crimson text-cream text-xs font-mono tracking-widest uppercase transition-colors"
            >
              Close Manifesto
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
