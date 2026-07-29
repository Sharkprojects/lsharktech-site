'use client';

import { GitBranch, Link, Mail, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const SOCIALS = [
  { label: 'github', href: '#', icon: GitBranch },
  { label: 'linkedin', href: '#', icon: Link },
  { label: 'email', href: '#', icon: Mail },
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

          <button className="mt-8 rounded-lg bg-blue-700 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-800">
            {t.contact.button}
          </button>

          <div className="mt-12 flex justify-center gap-8">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                className="group flex items-center gap-1 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
              >
                <Icon className="h-4 w-4" />
                {t.contact[label]}
                <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
