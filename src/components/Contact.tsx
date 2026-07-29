'use client';

import { GitBranch, Link, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const SOCIALS = [
  {
    label: 'github',
    href: 'https://github.com/Sharkprojects',
    icon: GitBranch,
  },
  {
    label: 'linkedin',
    href: 'https://www.linkedin.com/in/leandro-souza-gomes-751a05166/',
    icon: Link,
  },
] as const;

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-gray-50/50">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-500">
            {t.contact.intro}
          </p>

          <div className="mt-10 space-y-4">
            <a
              href="mailto:leandroshark.tech@gmail.com"
              className="group inline-flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-6 py-4 text-sm font-medium text-gray-700 shadow-sm transition-all hover:border-blue-200 hover:text-blue-700 hover:shadow-md"
            >
              <Mail className="h-5 w-5 text-gray-400 transition-colors group-hover:text-blue-600" />
              <span>{t.contact.emailLabel}</span>
              <span className="text-gray-400 transition-colors group-hover:text-blue-600">
                {t.contact.email}
              </span>
              <ArrowUpRight className="h-3.5 w-3.5 text-gray-300 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <div className="flex items-center justify-center gap-6">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
                >
                  <Icon className="h-4 w-4" />
                  {t.contact[label]}
                  <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-1.5 text-sm text-gray-400">
            <MapPin className="h-3.5 w-3.5" />
            <span>{t.contact.availability}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
