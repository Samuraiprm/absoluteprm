'use client';

import ScrollReveal from './ScrollReveal';
import { VideoCamera, Scissors, Check } from '@phosphor-icons/react';

interface ServicesProps {
  dict: {
    services: {
      label: string;
      title: string;
      video: { title: string; description: string; items: string[] };
      post: { title: string; description: string; items: string[] };
    };
  };
}

const serviceCards = [
  { key: 'video' as const, icon: VideoCamera },
  { key: 'post' as const, icon: Scissors },
];

export default function Services({ dict }: ServicesProps) {
  const { services } = dict;

  return (
    <section id="services" className="py-24 md:py-32 bg-[#013d34]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <span className="font-mono text-xs uppercase tracking-widest text-[#01a38b]/60 mb-4 block">
            {services.label}
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-16 leading-tight">
            {services.title}
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {serviceCards.map(({ key, icon: Icon }, i) => {
            const card = services[key];
            return (
              <ScrollReveal key={key} delay={0.15 * (i + 1)}>
                <div className="group relative">
                  <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-white/[0.03] border border-white/5 rounded-3xl p-8 md:p-10 hover:bg-white/[0.06] transition-all duration-500">
                    <div className="w-14 h-14 rounded-2xl bg-[#01a38b]/10 flex items-center justify-center mb-6 group-hover:bg-[#01a38b]/20 transition-colors">
                      <Icon size={28} weight="light" className="text-[#01a38b]" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">{card.title}</h3>
                    <p className="text-sm text-white/40 mb-8 leading-relaxed">{card.description}</p>

                    <ul className="space-y-3">
                      {card.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                          <Check size={16} weight="bold" className="text-[#01a38b] mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
