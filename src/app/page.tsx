'use client';

import { useState, useEffect } from 'react';
import { Locale, getDictionary } from '@/lib/i18n';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [locale, setLocale] = useState<Locale>('ru');

  useEffect(() => {
    const saved = localStorage.getItem('locale') as Locale | null;
    if (saved && ['ru', 'en', 'zh'].includes(saved)) {
      setLocale(saved);
    }
  }, []);

  const dict = getDictionary(locale);

  return (
    <>
      <Header dict={dict} locale={locale} onLocaleChange={setLocale} />
      <main>
        <Hero dict={dict} />
        <About dict={dict} />
        <Services dict={dict} />
        <Portfolio dict={dict} />
        <Contact dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
