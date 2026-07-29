'use client';

import Link from 'next/link';
import { ExternalLink, Play, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AllCriptoPage() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <Link
            href="/#projects"
            className="inline-flex items-center text-sm text-gray-400 transition-colors hover:text-gray-900"
          >
            {t.allcripto.backToHome}
          </Link>

          <h1 className="mt-8 text-4xl font-semibold tracking-tight text-gray-900">
            {t.allcripto.title}
          </h1>

          <p className="mt-4 text-base leading-relaxed text-gray-500">
            {t.allcripto.overview}
          </p>

          <section className="mt-16">
            <h2 className="text-xl font-semibold text-gray-900">
              Features
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {t.allcripto.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-lg border border-gray-100 bg-white p-4 shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  <span className="text-sm text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-xl font-semibold text-gray-900">
              Technologies
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {t.allcripto.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-xl font-semibold text-gray-900">Links</h2>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={t.allcripto.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-blue-800"
              >
                <ExternalLink className="h-4 w-4" />
                Website
              </a>
              <a
                href={t.allcripto.links.videos}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50"
              >
                <Play className="h-4 w-4 text-red-500" />
                Video Tutorials
              </a>
            </div>
          </section>

          <section className="mt-16 border-t border-gray-100 pt-12 text-center">
            <p className="text-sm text-gray-400">
              {t.contact.intro}
            </p>
            <a
              href="mailto:leandroshark.tech@gmail.com"
              className="mt-4 inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-blue-800"
            >
              {t.contact.button}
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
