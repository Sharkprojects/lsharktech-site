'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Technologies() {
  const { t } = useLanguage();

  return (
    <section id="technologies" className="bg-gray-50/50">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
          {t.technologies.title}
        </h2>

        <div className="mt-10 flex flex-wrap gap-3">
          {t.technologies.items.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all hover:border-blue-200 hover:text-blue-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
