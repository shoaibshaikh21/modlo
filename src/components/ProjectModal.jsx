import React, { useState } from 'react';
import { X, ArrowRight, Check, Send } from 'lucide-react';

export const ProjectModal = ({ isOpen, onClose }) => {
  const [selectedServices, setSelectedServices] = useState(['Digital Experiences']);
  const [selectedBudget, setSelectedBudget] = useState('$30k - $75k');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  if (!isOpen) return null;

  const services = [
    'Strategy & Discovery',
    'Digital Experiences',
    'Intelligent Systems',
    'Growth Infrastructure',
    'Complete Ecosystem'
  ];

  const budgets = ['$15k - $30k', '$30k - $75k', '$75k - $150k', '$150k+'];

  const toggleService = (srv) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      // Keep state clear after simulation
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-bg-secondary border border-burgundy/60 shadow-2xl shadow-black rounded-none my-8 p-6 sm:p-10 z-10 overflow-hidden">
        
        {/* Subtle decorative wine accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-burgundy via-crimson to-burgundy" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-text-muted hover:text-cream rounded-full hover:bg-burgundy/40 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="mb-8">
              <span className="font-mono text-xs text-crimson font-semibold tracking-widest uppercase block mb-2">
                // PROJECT INITIATION PROTOCOL
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold text-cream font-sans">
                Commence Your{' '}
                <span className="font-editorial-italic font-normal text-crimson italic">
                  Transformation.
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-text-muted mt-2 font-body">
                Share your parameters. Our partners review and schedule an executive diagnostic within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-mono tracking-widest uppercase text-cream/90 mb-3">
                  01 // SELECT RELEVANT DISCIPLINES
                </label>
                <div className="flex flex-wrap gap-2">
                  {services.map((srv) => {
                    const active = selectedServices.includes(srv);
                    return (
                      <button
                        type="button"
                        key={srv}
                        onClick={() => toggleService(srv)}
                        className={`text-xs px-3.5 py-2 border rounded-full transition-all duration-300 font-mono ${
                          active
                            ? 'bg-crimson text-cream border-crimson'
                            : 'bg-bg-primary text-text-muted border-burgundy/60 hover:border-burgundy'
                        }`}
                      >
                        {srv}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-xs font-mono tracking-widest uppercase text-cream/90 mb-3">
                  02 // INVESTMENT TIER (USD)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {budgets.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setSelectedBudget(b)}
                      className={`text-xs py-2.5 px-3 border text-center transition-all duration-300 font-mono ${
                        selectedBudget === b
                          ? 'border-crimson bg-crimson/20 text-cream font-bold'
                          : 'border-burgundy/50 bg-bg-primary text-text-muted hover:border-crimson/50'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono tracking-wider text-text-muted uppercase mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Marcus Vance"
                    className="w-full bg-bg-primary border border-burgundy/60 px-4 py-3 text-sm text-cream placeholder-text-dim focus:outline-none focus:border-crimson transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono tracking-wider text-text-muted uppercase mb-1.5">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="marcus@enterprise.com"
                    className="w-full bg-bg-primary border border-burgundy/60 px-4 py-3 text-sm text-cream placeholder-text-dim focus:outline-none focus:border-crimson transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono tracking-wider text-text-muted uppercase mb-1.5">
                  Brief Overview / Goals
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline current operational bottlenecks, scale objectives, or redesign vision..."
                  className="w-full bg-bg-primary border border-burgundy/60 px-4 py-3 text-sm text-cream placeholder-text-dim focus:outline-none focus:border-crimson transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 py-4 bg-crimson hover:bg-crimson-accent text-cream font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl shadow-crimson/30"
              >
                <span>Dispatch Transformation Brief</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-12 px-4">
            <div className="w-16 h-16 rounded-full bg-crimson/20 border border-crimson flex items-center justify-center mx-auto mb-6 text-crimson">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="text-2xl sm:text-3xl font-bold text-cream font-sans mb-3">
              Brief Received.
            </h4>
            <p className="text-sm text-text-muted max-w-md mx-auto leading-relaxed mb-8">
              Thank you, {formData.name || 'Partner'}. Our strategy lead is analyzing your project brief. We will reach out to <span className="text-cream font-mono">{formData.email || 'your email'}</span> within 24 hours.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 border border-burgundy text-xs font-mono tracking-widest text-cream uppercase hover:bg-burgundy/50"
            >
              Return to Studio
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
