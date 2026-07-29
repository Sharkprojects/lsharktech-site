'use client';

import { useLanguage } from '@/context/LanguageContext';
import AbstractIllustration from './AbstractIllustration';

export default function Hero() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 pt-28 pb-16 md:flex-row md:pt-36"
    >
      <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
        <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-gray-900 md:text-5xl">
          {t.hero.title}
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-500">
          {t.hero.subtitle}
        </p>
        <div className="mt-8 flex gap-4">
          <button
            onClick={() => scrollTo('projects')}
            className="rounded-lg bg-blue-700 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-800"
          >
            {t.hero.viewProjects}
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50"
          >
            {t.hero.contact}
          </button>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <AbstractIllustration />
      </div>
    </section>
  );
}
