import type { Translation } from './types';
import en from './en';
import pt from './pt';

export type { Translation } from './types';

export type Language = 'en' | 'pt';

export const translations: Record<Language, Translation> = { en, pt };

export const languages: { value: Language; label: string }[] = [
  { value: 'en', label: 'EN' },
  { value: 'pt', label: 'PT' },
];
