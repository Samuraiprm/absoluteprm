'use client';

import { motion } from 'motion/react';
import { CaretDown } from '@phosphor-icons/react';
import { vimeoEmbed } from '@/lib/vimeo';
import { VIMEO } from '@/lib/vimeo';

interface HeroProps {
  dict: {
    hero: { title: string; subtitle: string; cta: string; scroll: string };
  };
}

export default function Hero({ dict }: HeroProps) {
  return (
    <section className="relative min-h-[100dvh] flex items-end pb-20 md:items-center md:pb-0 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <iframe
          src={vimeoEmbed(VIMEO.hero, { autoplay: true, muted: true, loop: true })}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] pointer-events-none"
          allow="autoplay; fullscreen; picture-in-picture"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#012924]/90 via-[#012924]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#012924] via-transparent to-[#012924]/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 md:pt-0">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-mono text-xs uppercase tracking-widest text-[#01a38b]/80 mb-4 block">
              Video Production Studio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-bold tracking-tighter leading-none text-white mb-6"
          >
            {dict.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-white/60 max-w-lg mb-10 leading-relaxed"
          >
            {dict.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#01a38b] hover:bg-[#01a38b]/90 text-white font-medium rounded-xl transition-all hover:shadow-[0_0_30px_rgba(1,163,139,0.3)] active:scale-[0.98]"
            >
              {dict.hero.cta}
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">{dict.hero.scroll}</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <CaretDown size={20} weight="light" className="text-[#01a38b]/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
