'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Play } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ImageLightbox from '@/components/ImageLightbox';
import type { ProjectPageContent } from '@/i18n/types';

function LinkIcon({ url }: { url: string }) {
  if (url.includes('youtube') || url.includes('youtu.be')) {
    return <Play className="h-4 w-4" />;
  }
  return <ExternalLink className="h-4 w-4" />;
}

export default function ProjectPageClient({
  slug,
  images,
}: {
  slug: string;
  images: string[];
}) {
  const { t } = useLanguage();

  const slugToKey: Record<string, string> = {
    allcripto: 'allcripto',
    polybot: 'polybot',
    'trader-dashboard': 'traderDashboard',
  };
  const key = slugToKey[slug] as keyof typeof t;
  const content = t[key] as unknown as ProjectPageContent;
  const heroImage = images[0];
  const galleryImages = images.slice(1);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Link
            href="/#projects"
            className="inline-flex items-center text-sm text-gray-400 transition-colors hover:text-gray-900"
          >
            {content.backToHome}
          </Link>

          <div className="mt-8 flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <h1 className="text-4xl font-semibold tracking-tight text-gray-900">
                {content.title}
              </h1>
              {content.badge && (
                <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
                  {content.badge}
                </span>
              )}
            </div>
            <p className="mt-2 max-w-2xl text-justify text-base leading-relaxed text-gray-500">
              {content.description}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {content.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-blue-800"
              >
                <LinkIcon url={link.url} />
                {link.label}
              </a>
            ))}
          </div>

          {heroImage && (
            <button
              onClick={() => setLightboxSrc(heroImage)}
              className="mt-10 block w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm transition-opacity hover:opacity-90"
            >
              <Image
                src={heroImage}
                alt={content.title}
                width={1280}
                height={720}
                className="h-auto w-full object-cover"
                priority
              />
            </button>
          )}

          <section className="mt-16">
            <h2 className="text-xl font-semibold text-gray-900">
              {content.technologiesLabel}
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {content.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {galleryImages.length > 0 && (
            <section className="mt-16">
              <h2 className="text-xl font-semibold text-gray-900">
                {content.galleryLabel}
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {galleryImages.map((src) => (
                  <button
                    key={src}
                    onClick={() => setLightboxSrc(src)}
                    className="overflow-hidden rounded-xl border border-gray-100 shadow-sm transition-opacity hover:opacity-90"
                  >
                    <Image
                      src={src}
                      alt=""
                      width={800}
                      height={450}
                      className="h-auto w-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </section>
          )}

          <section className="mt-16 border-t border-gray-100 pt-12 text-center">
            <p className="text-sm text-gray-400">{t.contact.intro}</p>
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

      {lightboxSrc && (
        <ImageLightbox
          src={lightboxSrc}
          alt={content.title}
          onClose={() => setLightboxSrc(null)}
        />
      )}
    </>
  );
}
