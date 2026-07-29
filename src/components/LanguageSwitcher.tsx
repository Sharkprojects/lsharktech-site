'use client';

import { useLanguage } from '@/context/LanguageContext';
import { languages } from '@/i18n';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-500 shadow-sm">
      {languages.map((lang) => (
        <button
          key={lang.value}
          onClick={() => setLanguage(lang.value)}
          className={`rounded-md px-2 py-1 transition-colors ${
            language === lang.value
              ? 'bg-blue-700 text-white'
              : 'text-gray-500 hover:text-gray-900'
          }`}
          aria-label={`Switch language to ${lang.label}`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
