'use client';

import { GithubLogo, YoutubeLogo, InstagramLogo } from '@phosphor-icons/react';

interface FooterProps {
  dict: {
    footer: { copyright: string; services: string; portfolio: string; contact: string };
    nav: { about: string; services: string; portfolio: string; contact: string };
  };
}

export default function Footer({ dict }: FooterProps) {
  const { footer, nav } = dict;

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <footer className="py-12 bg-[#012924] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#01a38b] flex items-center justify-center text-white font-bold text-sm">
              A
            </div>
            <span className="text-white/40 text-sm">{footer.copyright}</span>
          </div>

          <nav className="flex items-center gap-6 text-sm text-white/40">
            <button onClick={() => scrollTo('services')} className="hover:text-white transition-colors">
              {nav.services}
            </button>
            <button onClick={() => scrollTo('portfolio')} className="hover:text-white transition-colors">
              {nav.portfolio}
            </button>
            <button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors">
              {nav.contact}
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://vk.com/permvideo59"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-[#01a38b] hover:bg-[#01a38b]/10 transition-all"
              aria-label="VK"
            >
              <span className="font-bold text-sm">VK</span>
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-[#01a38b] hover:bg-[#01a38b]/10 transition-all"
              aria-label="YouTube"
            >
              <YoutubeLogo size={18} weight="light" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-[#01a38b] hover:bg-[#01a38b]/10 transition-all"
              aria-label="Instagram"
            >
              <InstagramLogo size={18} weight="light" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
