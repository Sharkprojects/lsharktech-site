'use client';

import { Globe, Lock, BarChart3, ExternalLink, Play, FileText } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import type { ProjectLink } from '@/i18n/types';

const ICONS = [Globe, Lock, BarChart3] as const;

const BADGE_COLORS: Record<string, string> = {
  public: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  private: 'bg-amber-50 text-amber-700 border-amber-200',
  client: 'bg-blue-50 text-blue-700 border-blue-200',
};

function LinkIcon({ url }: { url: string }) {
  if (url.includes('youtube') || url.includes('youtu.be')) {
    return <Play className="h-3.5 w-3.5" />;
  }
  if (url.startsWith('/')) {
    return <FileText className="h-3.5 w-3.5" />;
  }
  return <ExternalLink className="h-3.5 w-3.5" />;
}

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
          {t.projects.title}
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {t.projects.items.map((item, index) => {
            const Icon = ICONS[index];
            return (
              <div
                key={item.title}
                className="group flex flex-col rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 text-gray-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-medium ${
                      BADGE_COLORS[item.badgeType] ?? 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-1 text-justify text-sm leading-relaxed text-gray-500">
                  {item.description}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {item.features.map((feature: string) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-gray-500"
                    >
                      <span className="h-1 w-1 rounded-full bg-gray-300" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  {item.links.map((link: ProjectLink) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target={link.url.startsWith('/') ? undefined : '_blank'}
                      rel={link.url.startsWith('/') ? undefined : 'noopener noreferrer'}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 transition-colors hover:text-blue-800"
                    >
                      <LinkIcon url={link.url} />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-gray-400">
          {t.projects.note}
        </p>
      </div>
    </section>
  );
}
