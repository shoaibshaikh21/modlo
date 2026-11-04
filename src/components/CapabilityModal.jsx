import React from 'react';
import { X, ArrowRight, CheckCircle2, Sparkles, Layers } from 'lucide-react';

export const CapabilityModal = ({ capability, onClose, onOpenProjectModal }) => {
  if (!capability) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-bg-secondary border border-burgundy/80 shadow-2xl shadow-black my-8 p-6 sm:p-10 z-10 overflow-hidden">
        
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-crimson" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-text-muted hover:text-cream rounded-full hover:bg-burgundy/40 transition-colors z-20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Meta Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs font-bold text-crimson tracking-widest uppercase">
            // CAPABILITY {capability.id}
          </span>
          <span className="text-[10px] font-mono tracking-widest text-text-dim uppercase border border-burgundy/40 px-2 py-0.5">
            {capability.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-4xl font-bold text-cream font-sans mb-4">
          {capability.title}
        </h3>

        {/* Image Preview */}
        <div className="relative h-44 w-full overflow-hidden border border-burgundy/50 mb-6 group">
          <img
            src={capability.image}
            alt={capability.title}
            className="w-full h-full object-cover grayscale contrast-125 brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-transparent" />
          <div className="absolute bottom-3 left-4 text-xs font-mono text-cream/90 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-crimson animate-pulse" />
            <span>MODLONIZE SYSTEM ARCHIVE // SPECIFICATION</span>
          </div>
        </div>

        {/* Deep Details */}
        <div className="space-y-6">
          <p className="text-sm sm:text-base text-cream/90 leading-relaxed font-body">
            {capability.detailedDesc}
          </p>

          {/* Deliverables List */}
          <div>
            <span className="font-mono text-xs text-crimson tracking-widest uppercase block mb-3">
              PRIMARY ARTIFACTS & DELIVERABLES
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {capability.deliverables.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-2 text-xs font-mono text-text-muted bg-bg-primary/80 border border-burgundy/40 p-3"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-crimson flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-6 border-t border-burgundy/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-text-dim">
              TRANSFORMATION TIMELINE: 3–6 WEEKS
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenProjectModal();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-crimson hover:bg-crimson-accent text-cream text-xs font-bold tracking-widest uppercase transition-all shadow-lg shadow-crimson/30"
            >
              <span>Deploy This Capability</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
