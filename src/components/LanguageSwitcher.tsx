'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe } from '@phosphor-icons/react';
import { Locale, locales, getLocaleFlag, getLocaleLabel } from '@/lib/i18n';

interface LanguageSwitcherProps {
  current: Locale;
  onChange: (locale: Locale) => void;
}

export default function LanguageSwitcher({ current, onChange }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('locale') as Locale | null;
    if (saved && locales.includes(saved)) {
      onChange(saved);
    }
  }, [onChange]);

  function select(locale: Locale) {
    onChange(locale);
    localStorage.setItem('locale', locale);
    setOpen(false);
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm text-white/70 hover:text-white"
        aria-label="Change language"
      >
        <Globe size={16} weight="light" />
        <span>{getLocaleFlag(current)} {getLocaleLabel(current)}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 bg-[#013d34] border border-white/10 rounded-lg overflow-hidden shadow-xl z-50 min-w-[120px]"
          >
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => select(locale)}
                className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm transition-colors ${
                  locale === current
                    ? 'bg-[#01a38b]/20 text-[#01a38b]'
                    : 'text-white/70 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span>{getLocaleFlag(locale)}</span>
                <span>{locale.toUpperCase()}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
