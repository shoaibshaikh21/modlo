import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ChevronRight, Layers, Cpu, Globe2, Compass } from 'lucide-react';

export const Capabilities = ({ onSelectCapability }) => {
  const [activePanel, setActivePanel] = useState(null);

  const capabilities = [
    {
      id: '01',
      title: 'STRATEGY & DISCOVERY',
      shortDesc: 'Understand the business, its challenges, and digital opportunities.',
      detailedDesc: 'Deep audit of business architecture, customer psychology, and untapped digital leverage. We craft bespoke roadmaps to outmaneuver competitors.',
      deliverables: ['Digital Diagnostic Audit', 'Customer Journey Architecture', 'Tech Stack Optimization', 'Brand Positioning & Thesis'],
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80', // Architectural geometry / clean shadow play
      icon: Compass,
      tag: 'FOUNDATION'
    },
    {
      id: '02',
      title: 'DIGITAL EXPERIENCES',
      shortDesc: 'Websites, landing pages, and interfaces that convert and create impact.',
      detailedDesc: 'Radically differentiated websites, digital products, and high-conversion flagship platforms that elevate brand authority and drive immediate commercial momentum.',
      deliverables: ['Bespoke Flagship Web Systems', 'Conversion-Optimized Landing Hubs', 'Editorial Art Direction & UI/UX', 'Interactive Micro-Experiences'],
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80', // Editorial structure / high contrast
      icon: Globe2,
      tag: 'INTERFACE'
    },
    {
      id: '03',
      title: 'INTELLIGENT SYSTEMS',
      shortDesc: 'Automations, integrations, and workflows that save time and improve operations.',
      detailedDesc: 'Streamlining fragmented operations with intelligent automated pipelines, custom API connectors, and machine-assisted workflows that run 24/7 without friction.',
      deliverables: ['CRM & ERP Automated Workflows', 'Internal Operations Tooling', 'Custom AI Agent Pipelines', 'Data Synchronization Architecture'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80', // Abstract mechanical / ascending brutalist geometry
      icon: Cpu,
      tag: 'EFFICIENCY'
    },
    {
      id: '04',
      title: 'GROWTH INFRASTRUCTURE',
      shortDesc: 'Build scalable systems for customer acquisition, engagement, and revenue.',
      detailedDesc: 'Deploying robust retention funnels, performance measurement frameworks, and scalable infrastructure engineered for sustained enterprise-grade scaling.',
      deliverables: ['Multi-Channel Funnel Architecture', 'Full-Funnel Analytics & Tracking', 'Lifecycle Nurture Engines', 'Revenue Retention Loops'],
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80', // Ascending architectural progression
      icon: Layers,
      tag: 'EXPANSION'
    }
  ];

  return (
    <section id="capabilities" className="relative py-24 sm:py-32 bg-bg-primary overflow-hidden">
      
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16 sm:mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-burgundy/40 pb-8">
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-crimson uppercase">
                (03) OUR CAPABILITIES
              </span>
              <div className="h-[1px] w-8 bg-crimson/50" />
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-cream font-sans">
              Precision Engineering for the{' '}
              <span className="font-editorial-italic font-normal text-crimson italic">
                Modern Enterprise.
              </span>
            </h2>
          </div>
          <p className="text-sm font-mono text-text-muted max-w-xs uppercase tracking-widest leading-relaxed">
            Four interconnected pillars designed to dismantle operational drag.
          </p>
        </div>
      </div>

      {/* Four Horizontal Visual Panels on Desktop / Stack on Mobile */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-burgundy/40">
          
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            const isHovered = activePanel === cap.id;

            return (
              <div
                key={cap.id}
                onMouseEnter={() => setActivePanel(cap.id)}
                onMouseLeave={() => setActivePanel(null)}
                onClick={() => onSelectCapability(cap)}
                className="group relative min-h-[480px] sm:min-h-[540px] flex flex-col justify-between p-6 sm:p-8 border-b border-r border-burgundy/40 bg-bg-secondary/40 transition-all duration-700 overflow-hidden cursor-pointer hover:bg-bg-card"
              >
                {/* Background Conceptual Image with Burgundy Duotone Overlay */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={cap.image}
                    alt={cap.title}
                    className="w-full h-full object-cover grayscale contrast-125 brightness-[0.25] transition-all duration-1000 ease-out group-hover:scale-110 group-hover:brightness-[0.38]"
                  />
                  {/* Deep Wine Tint & Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-burgundy/30 to-transparent mix-blend-multiply opacity-90 transition-opacity duration-500 group-hover:opacity-75" />
                  <div className="absolute inset-0 bg-burgundy/20 mix-blend-color" />
                </div>

                {/* Top Section: Index, Tag & Minimal Icon */}
                <div className="relative z-10 flex items-start justify-between">
                  <div className="flex flex-col">
                    <span className="font-mono text-xs font-bold text-crimson tracking-widest">
                      // {cap.id}
                    </span>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-text-dim mt-0.5">
                      {cap.tag}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-full border border-burgundy/60 bg-burgundy/30 backdrop-blur-sm flex items-center justify-center text-cream transition-all duration-300 group-hover:border-crimson group-hover:bg-crimson group-hover:text-cream">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Middle Graphic Linework & Annotation */}
                <div className="relative z-10 py-6 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-full h-[1px] bg-gradient-to-r from-crimson/60 via-burgundy to-transparent mb-3" />
                  <span className="font-mono text-[9px] tracking-widest text-cream/70 uppercase">
                    SYS_SPEC // ARCHITECTURE {cap.id}
                  </span>
                </div>

                {/* Bottom Section: Title, Description & Action */}
                <div className="relative z-10 flex flex-col justify-end">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-cream group-hover:text-white transition-colors mb-3 font-sans">
                    {cap.title}
                  </h3>

                  <p className="text-sm text-text-muted leading-relaxed font-body mb-6 group-hover:text-cream/90 transition-colors">
                    {cap.shortDesc}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-crimson uppercase pt-4 border-t border-burgundy/40">
                    <span>EXPLORE CAPABILITY</span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Subtle active border glow */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-crimson/40 transition-colors duration-500 pointer-events-none" />
              </div>
            );
          })}

        </div>
      </div>

    </section>
  );
};
