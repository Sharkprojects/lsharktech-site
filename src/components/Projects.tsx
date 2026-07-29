'use client';

import { ArrowLeftRight, Activity, GitPullRequest, BarChart3 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const ICONS = [ArrowLeftRight, Activity, GitPullRequest, BarChart3];

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
          {t.projects.title}
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {t.projects.items.map((item, index) => {
            const Icon = ICONS[index];
            return (
              <div
                key={item.title}
                className="group rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 text-gray-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                    {item.badge}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {item.description}
                </p>
                <button className="mt-4 text-sm font-medium text-blue-700 transition-colors hover:text-blue-800">
                  {item.learnMore} &rarr;
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
