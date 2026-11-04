import React from 'react';

const STAGES = [
  {
    number: '01',
    title: 'Diagnose',
    tagline: 'Understand before we build.',
    description:
      'We audit your brand, digital presence, and operations to find exactly where growth is leaking.',
  },
  {
    number: '02',
    title: 'Define',
    tagline: 'Strategy with intent.',
    description:
      'We shape a clear positioning, roadmap, and system architecture aligned to measurable outcomes.',
  },
  {
    number: '03',
    title: 'Design & Build',
    tagline: 'Craft meets engineering.',
    description:
      'Identity, experience, and technology are built together as one synchronized growth machine.',
  },
  {
    number: '04',
    title: 'Evolve',
    tagline: 'Growth is never finished.',
    description:
      'We measure, refine, and scale with intelligent systems that keep your business ahead.',
  },
];

export const Approach = () => {
  return (
    <section
      id="approach"
      className="relative py-24 sm:py-32 lg:py-40 bg-bg-primary border-t border-burgundy/30 overflow-hidden"
    >
      <div className="absolute inset-0 film-grain pointer-events-none opacity-30" />
      <div className="absolute -right-40 top-1/3 w-96 h-96 bg-burgundy/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section marker */}
        <div className="flex items-center justify-between border-b border-burgundy/40 pb-6 mb-16 sm:mb-20">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-crimson">
              (04)
            </span>
            <span className="font-mono text-xs tracking-widest uppercase text-text-dim">
              OUR APPROACH / FOUR STAGES
            </span>
          </div>
          <div className="font-mono text-xs text-text-dim tracking-widest hidden sm:block">
            PROCESS: END-TO-END
          </div>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-cream leading-[1.08] font-sans mb-16 sm:mb-24 max-w-4xl">
          A method built for{' '}
          <span className="font-editorial-italic font-normal text-crimson italic">
            lasting growth.
          </span>
        </h2>

        {/* Timeline */}
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-burgundy/30 border border-burgundy/30">
          {STAGES.map((stage) => (
            <li
              key={stage.number}
              className="group relative bg-bg-primary p-8 sm:p-10 flex flex-col gap-6 transition-colors duration-500 hover:bg-bg-secondary/80"
            >
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-crimson transition-transform duration-500 group-hover:scale-150" />
                <span className="font-mono text-xs tracking-widest text-text-dim">
                  STAGE {stage.number}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-cream font-sans">
                {stage.title}
              </h3>
              <p className="font-editorial-italic italic text-lg text-cream/80">
                {stage.tagline}
              </p>
              <p className="text-sm text-text-muted font-body leading-relaxed">
                {stage.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Approach;
