import ru from '@/locales/ru.json';
import en from '@/locales/en.json';
import zh from '@/locales/zh.json';

export type Locale = 'ru' | 'en' | 'zh';

const dictionaries: Record<Locale, typeof ru> = { ru, en, zh };

export function getDictionary(locale: Locale) {
  return dictionaries[locale] ?? dictionaries.ru;
}

export function getLocaleLabel(locale: Locale): string {
  const labels: Record<Locale, string> = { ru: 'RU', en: 'EN', zh: '中' };
  return labels[locale];
}

export function getLocaleFlag(locale: Locale): string {
  const flags: Record<Locale, string> = { ru: '🇷🇺', en: '🇬🇧', zh: '🇨🇳' };
  return flags[locale];
}

export const locales: Locale[] = ['ru', 'en', 'zh'];
