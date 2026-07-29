'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const NAV_ITEMS = ['home', 'services', 'projects', 'about', 'contact'] as const;

export default function Navbar() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
  <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <button
        type="button"
        onClick={() => scrollTo("home")}
        aria-label="Voltar ao início"
        className="flex shrink-0 items-center"
      >
        <Image
          src="/brand/logo-horizontal.svg"
          alt="L Shark Tech"
          width={330}
          height={141}
          className="h-16 w-auto"
          priority
        />
      </button>

      <div className="hidden items-center gap-8 md:flex">
        {NAV_ITEMS.map((item) => (
          <button
            type="button"
            key={item}
            onClick={() => scrollTo(item)}
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            {t.navbar[item]}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <LanguageSwitcher />

        <a
          href="mailto:leandroshark.tech@gmail.com"
          className="hidden rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-800 sm:inline-block"
        >
          {t.navbar.getInTouch}
        </a>
      </div>
    </nav>
  </header>
);
}
