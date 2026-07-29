'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-gray-100">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-base font-semibold text-gray-900">
            {t.footer.companyName}
          </span>
          <span className="text-xs font-medium uppercase tracking-widest text-gray-400">
            {t.footer.founded}
          </span>
          <span className="text-sm text-gray-500">
            {t.footer.tagline}
          </span>
          <span className="text-xs text-gray-400">
            {t.footer.subtitle}
          </span>
          <p className="mt-4 text-xs text-gray-400">
            &copy; 2026 {t.footer.companyName}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
