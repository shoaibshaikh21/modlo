import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export const SelectedWork = ({ onSelectWork }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      id: '01',
      title: 'AURELIUS & CO.',
      category: 'LUXURY HERITAGE / COMMERCE',
      impact: '+240% Direct Sales & Brand Re-architecture',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1544473244-f6895e69ad8b?auto=format&fit=crop&w=800&q=80',
      description: 'Complete digital transformation of a 140-year-old heritage house into a modern direct-to-consumer flagship.'
    },
    {
      id: '02',
      title: 'SYNAPSE KINETICS',
      category: 'AI ROBOTICS / ENTERPRISE',
      impact: 'Automated 82% of Client Onboarding Operations',
      year: '2026',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
      description: 'Intelligent systems architecture integrating deep CRM pipelines with real-time hardware telemetry.'
    },
    {
      id: '03',
      title: 'CHRONO LABS',
      category: 'FINTECH INFRASTRUCTURE',
      impact: '$48M Processed in First 90 Days Post-Relaunch',
      year: '2026',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      description: 'From slow legacy banking software to a lightning-fast responsive interface and growth engine.'
    }
  ];

  return (
    <section id="work" className="relative py-28 sm:py-36 bg-bg-primary border-t border-burgundy/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-burgundy/40 pb-8 mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-crimson uppercase">
                SELECTED TRANSFORMATIONS
              </span>
              <div className="h-[1px] w-8 bg-crimson/50" />
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-cream font-sans">
              Proof of{' '}
              <span className="font-editorial-italic font-normal text-crimson italic">
                Velocity.
              </span>
            </h2>
          </div>
          <div className="font-mono text-xs text-text-muted tracking-widest uppercase">
            ARCHIVE // 2025–2026
          </div>
        </div>

        {/* Editorial Project Rows */}
        <div className="divide-y divide-burgundy/40 border-b border-burgundy/40">
          {projects.map((proj, idx) => (
            <div
              key={proj.id}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => onSelectWork && onSelectWork(proj)}
              className="group py-10 sm:py-14 flex flex-col lg:flex-row lg:items-center justify-between gap-6 cursor-pointer transition-all duration-500 hover:px-4 hover:bg-bg-secondary/40"
            >
              {/* Project Index & Title */}
              <div className="flex items-baseline gap-6 sm:gap-10">
                <span className="font-mono text-sm sm:text-base text-crimson font-bold">
                  ({proj.id})
                </span>
                <div>
                  <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-cream group-hover:text-crimson transition-colors font-sans flex items-center gap-4">
                    <span>{proj.title}</span>
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1 text-crimson hidden sm:inline-block" />
                  </h3>
                  <p className="text-xs sm:text-sm font-mono tracking-widest text-text-dim uppercase mt-2">
                    {proj.category}
                  </p>
                </div>
              </div>

              {/* Impact & Outcome */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-12 lg:text-right">
                <div>
                  <div className="text-sm sm:text-base font-semibold text-cream/90 group-hover:text-cream">
                    {proj.impact}
                  </div>
                  <div className="text-xs font-mono text-text-dim mt-1">
                    YEAR: {proj.year} // VERIFIED METRIC
                  </div>
                </div>

                <div className="w-12 h-12 rounded-full border border-burgundy/60 group-hover:border-crimson group-hover:bg-crimson group-hover:text-cream flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 text-cream" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
