'use client';

import { TrendingUp, Brain, Database, Bot } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const ICONS = [TrendingUp, Brain, Database, Bot];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="bg-gray-50/50">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
          {t.services.title}
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.services.items.map((item, index) => {
            const Icon = ICONS[index];
            return (
              <div
                key={item.title}
                className="group rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
