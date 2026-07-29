'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-gray-100">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        <div className="text-center md:text-left">
          <span className="text-sm font-semibold text-gray-900">
            L Shark Tech
          </span>
          <span className="ml-2 text-sm text-gray-400">
            {t.footer.tagline}
          </span>
        </div>
        <p className="text-xs text-gray-400">{t.footer.copyright}</p>
      </div>
    </footer>
  );
}
