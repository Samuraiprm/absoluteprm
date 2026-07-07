'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { List, X } from '@phosphor-icons/react';
import { Locale } from '@/lib/i18n';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {
  dict: {
    nav: { home: string; about: string; services: string; portfolio: string; contact: string };
  };
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

const navLinks = ['about', 'services', 'portfolio', 'contact'] as const;

export default function Header({ dict, locale, onLocaleChange }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#012924]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#01a38b] flex items-center justify-center text-white font-bold text-lg">
            A
          </div>
          <span className="text-white font-semibold text-lg tracking-tight hidden sm:block">ABSOLUTE</span>
        </button>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((key) => (
            <button
              key={key}
              onClick={() => scrollTo(key)}
              className="text-sm text-white/60 hover:text-white transition-colors relative group"
            >
              {dict.nav[key]}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#01a38b] group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher current={locale} onChange={onLocaleChange} />

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#012924]/98 backdrop-blur-md border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((key) => (
                <button
                  key={key}
                  onClick={() => scrollTo(key)}
                  className="text-left text-white/70 hover:text-white py-2 transition-colors"
                >
                  {dict.nav[key]}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
