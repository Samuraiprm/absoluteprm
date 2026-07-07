'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Play, ArrowRight } from '@phosphor-icons/react';
import { VIMEO } from '@/lib/vimeo';
import ScrollReveal from './ScrollReveal';
import VideoModal from './VideoModal';

interface PortfolioProps {
  dict: {
    portfolio: {
      label: string;
      title: string;
      watchMore: string;
      items: { title: string; category: string }[];
    };
  };
}

const thumbnails = ['/video/1.png', '/video/2.png', '/video/3.png'];

export default function Portfolio({ dict }: PortfolioProps) {
  const { portfolio } = dict;
  const [modalVideo, setModalVideo] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#012924]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <span className="font-mono text-xs uppercase tracking-widest text-[#01a38b]/60 mb-4 block">
            {portfolio.label}
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-16 leading-tight">
            {portfolio.title}
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {VIMEO.portfolio.map((id, i) => (
            <ScrollReveal key={id} delay={0.1 * (i + 1)}>
              <button
                onClick={() => setModalVideo(id)}
                className="group relative block w-full aspect-video rounded-2xl overflow-hidden bg-[#013d34]"
              >
                <img
                  src={thumbnails[i]}
                  alt={portfolio.items[i].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#012924]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-full bg-[#01a38b]/90 flex items-center justify-center shadow-lg"
                  >
                    <Play size={24} weight="fill" className="text-white ml-1" />
                  </motion.div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#01a38b]/80 block mb-1">
                    {portfolio.items[i].category}
                  </span>
                  <span className="text-sm text-white font-medium">{portfolio.items[i].title}</span>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="text-center">
            <a
              href="https://vk.com/permvideo59"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 rounded-xl text-sm text-white/60 hover:text-white hover:border-white/20 transition-all group"
            >
              {portfolio.watchMore}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </ScrollReveal>
      </div>

      {modalVideo && <VideoModal videoId={modalVideo} onClose={() => setModalVideo(null)} />}
    </section>
  );
}
