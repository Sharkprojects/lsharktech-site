import type { Metadata } from 'next';
import Image from 'next/image';
import LanguageSection from '@/components/company-profile/LanguageSection';
import DownloadButton from '@/components/company-profile/DownloadButton';
import { companyProfileContent } from './companyProfileContent';

export const metadata: Metadata = {
  title: 'L Shark Tech | Company Profile',
  description:
    'Commercial profile of L Shark Tech, a software engineering company focused on Artificial Intelligence, automation, APIs, data engineering and high-performance applications.',
  alternates: {
    canonical: 'https://lsharktech.pages.dev/company-profile',
  },
  openGraph: {
    title: 'L Shark Tech | Engineering Intelligent Systems',
    description:
      'Artificial Intelligence, automation, APIs, data engineering and custom software solutions.',
    type: 'website',
    url: 'https://lsharktech.pages.dev/company-profile',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'L Shark Tech – Engineering Intelligent Systems',
      },
    ],
  },
};

const LANGUAGES = ['pt', 'en', 'es'] as const;

export default function CompanyProfilePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Fixed header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md print:hidden">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a
            href="#portugues"
            className="flex items-center gap-3"
            aria-label="Voltar ao topo"
          >
            <Image
              src="/brand/logo-light.svg"
              alt="L Shark Tech logo"
              width={32}
              height={32}
              className="h-8 w-auto"
              priority
            />
            <span className="hidden text-sm font-semibold text-white sm:inline">
              L Shark Tech
            </span>
          </a>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 rounded-lg border border-zinc-800 bg-zinc-900 px-2 py-1 text-xs font-medium">
              {LANGUAGES.map((lang) => {
                const content = companyProfileContent[lang];
                const href = `#${content.id}`;
                return (
                  <a
                    key={lang}
                    href={href}
                    className="rounded-md px-2 py-1 text-zinc-400 transition-colors hover:text-white"
                    aria-label={`Switch to ${content.label}`}
                  >
                    {content.label}
                  </a>
                );
              })}
            </div>

            <DownloadButton label={companyProfileContent.pt.downloadButton} />
          </div>
        </nav>
      </header>

      {/* Language sections */}
      {LANGUAGES.map((lang) => (
        <LanguageSection key={lang} content={companyProfileContent[lang]} />
      ))}
    </div>
  );
}
