'use client';

import ScrollReveal from './ScrollReveal';
import { VideoCamera, TrendUp, Smiley } from '@phosphor-icons/react';

interface AboutProps {
  dict: {
    about: {
      label: string;
      title: string;
      description: string;
      stats: { experience: string; experienceLabel: string; projects: string; projectsLabel: string; satisfaction: string; satisfactionLabel: string };
    };
  };
}

const stats = [
  { key: 'experience' as const, icon: VideoCamera },
  { key: 'projects' as const, icon: TrendUp },
  { key: 'satisfaction' as const, icon: Smiley },
];

export default function About({ dict }: AboutProps) {
  const { about } = dict;

  return (
    <section id="about" className="py-24 md:py-32 bg-[#012924]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal>
              <span className="font-mono text-xs uppercase tracking-widest text-[#01a38b]/60 mb-4 block">
                {about.label}
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                {about.title}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-base text-white/50 leading-relaxed max-w-[65ch]">
                {about.description}
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {stats.map(({ key, icon: Icon }, i) => (
              <ScrollReveal key={key} delay={0.1 * (i + 1)}>
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 text-center hover:bg-white/[0.06] transition-colors group">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#01a38b]/10 flex items-center justify-center group-hover:bg-[#01a38b]/20 transition-colors">
                    <Icon size={24} weight="light" className="text-[#01a38b]" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">{about.stats[key]}</div>
                  <div className="text-xs text-white/40 uppercase tracking-wider">{about.stats[`${key}Label` as keyof typeof about.stats]}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
