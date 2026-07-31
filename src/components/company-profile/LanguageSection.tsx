import Image from 'next/image';
import type { LanguageContent } from '@/app/company-profile/companyProfileContent';

interface LanguageSectionProps {
  content: LanguageContent;
}

function LanguageSection({ content }: LanguageSectionProps) {
  const BASE = 'https://lsharktech.pages.dev/company-profile';
  const langs = [
    { id: 'portugues', label: 'Português', lang: 'pt', url: `${BASE}#portugues` },
    { id: 'english', label: 'English', lang: 'en', url: `${BASE}#english` },
    { id: 'espanol', label: 'Español', lang: 'es', url: `${BASE}#espanol` },
  ];

  return (
    <section
      id={content.id}
      className="print-section mx-auto min-h-dvh w-full max-w-6xl scroll-mt-14 px-6 py-6 max-md:px-4"
    >
      <div className="mx-auto flex max-w-4xl flex-col print:max-w-none">
        {/* Header: logo left, language links right */}
        <div className="flex items-center justify-between">
          <Image
            src="/brand/logo-dark.svg"
            alt="L Shark Tech logo"
            width={130}
            height={38}
            className="h-8 w-auto md:h-10 print:h-auto"
            priority
          />
          <div className="flex items-center gap-2 text-xs md:text-sm print:text-[10pt]">
            {langs.map((l, i) => (
              <span key={l.id} className="flex items-center gap-2">
                {i > 0 && <span className="text-zinc-700">|</span>}
                <LanguageLink href={l.url} label={l.label} currentLang={content.lang} lang={l.lang} />
              </span>
            ))}
          </div>
        </div>

        {/* Hero */}
        <div className="mt-4 md:mt-6 print:mt-3">
          <h1 className="text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl print:text-[28pt]">
            {content.title}
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base print:text-[11pt] print:leading-snug">
            {content.subtitle}
          </p>
          <p className="mt-2 text-xs leading-relaxed text-zinc-400 md:text-sm print:text-[9.5pt] print:mt-1">
            {content.about}
          </p>
        </div>

        {/* Services */}
        <div className="mt-5 md:mt-7 print:mt-4">
          <SectionTitle text={content.servicesTitle} />
          <div className="mt-2 grid gap-3 sm:grid-cols-3 print:gap-2">
            {content.services.map((service) => (
              <ServiceCard key={service.title} title={service.title} description={service.description} />
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mt-5 md:mt-7 print:mt-4">
          <SectionTitle text={content.projectsTitle} />
          <div className="mt-2 grid gap-3 sm:grid-cols-3 print:gap-2">
            {content.projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                link={project.link}
                linkLabel={content.projectLinkLabel}
              />
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-5 md:mt-7 print:mt-4">
          <SectionTitle text={content.technologiesTitle} />
          <div className="mt-2 flex flex-wrap gap-1.5 print:gap-1">
            {content.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-zinc-700 bg-zinc-800/50 px-2.5 py-1 text-[11px] font-medium text-zinc-300 md:text-xs print:border-zinc-600 print:px-2 print:py-0.5 print:text-[9pt]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Advantages */}
        <div className="mt-5 md:mt-7 print:mt-4">
          <SectionTitle text={content.advantagesTitle} />
          <ul className="mt-2 grid gap-x-6 gap-y-1.5 sm:grid-cols-2 print:gap-x-4 print:gap-y-1">
            {content.advantages.map((item) => (
              <AdvantageItem key={item} text={item} />
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-6 md:mt-8 print:mt-5">
          <div className="rounded-xl border border-zinc-700 bg-zinc-800/40 p-5 text-center md:p-6 print:border-zinc-600 print:p-4">
            <p className="text-sm font-medium text-white md:text-base print:text-[11pt]">
              {content.ctaText}
            </p>
            <p className="mt-1 text-xs text-zinc-400 md:text-sm print:text-[9.5pt]">
              {content.ctaDescription}
            </p>
            <a
              href={content.ctaMailto}
              className="cta-mailto mt-3 inline-flex items-center rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-500 md:text-base print:mt-2 print:px-4 print:py-1.5 print:text-[10pt]"
            >
              {content.ctaButton}
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="contact-row mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-xs text-zinc-400 md:text-sm print:mt-3 print:text-[9.5pt]">
          <a
            href="https://lsharktech.pages.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-white print:text-zinc-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            {content.website}
          </a>
          <a
            href="https://www.linkedin.com/in/lsharktech/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-white print:text-zinc-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            {content.linkedin}
          </a>
          <a
            href={`mailto:${content.email}`}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-white print:text-zinc-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 4l-10 8L2 4" />
            </svg>
            {content.email}
          </a>
        </div>

        {/* Footer */}
        <footer className="mt-4 border-t border-zinc-800 pt-3 text-center print:mt-3 print:border-zinc-700 print:pt-2">
          <p className="text-[10px] text-zinc-500 md:text-xs print:text-[8pt]">
            {content.footer.companyName} &middot; {content.footer.founded}
          </p>
          <div className="mt-1 flex items-center justify-center gap-2 text-[10px] text-zinc-600 md:text-xs print:text-[8pt] print:gap-1.5">
            {langs.map((l, i) => (
              <span key={l.id} className="flex items-center gap-2">
                {i > 0 && <span className="text-zinc-700">|</span>}
                <LanguageLink href={l.url} label={l.label} currentLang={content.lang} lang={l.lang} />
              </span>
            ))}
          </div>
        </footer>
      </div>
    </section>
  );
}

function SectionTitle({ text }: { text: string }) {
  return (
    <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 md:text-sm print:text-[9pt] print:tracking-wider">
      {text}
    </h2>
  );
}

function LanguageLink({
  href,
  label,
  currentLang,
  lang,
}: {
  href: string;
  label: string;
  currentLang: string;
  lang: string;
}) {
  if (currentLang === lang) {
    return (
      <span className="font-medium text-blue-400" aria-current="page">
        {label}
      </span>
    );
  }
  return (
    <a
      href={href}
      className="text-zinc-500 transition-colors hover:text-white print:text-zinc-400"
      aria-label={`Switch to ${label}`}
    >
      {label}
    </a>
  );
}

function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="break-inside-avoid rounded-lg border border-zinc-800 bg-zinc-900/50 p-3 md:p-4 print:border-zinc-700 print:p-2.5">
      <h3 className="text-sm font-medium text-white md:text-base print:text-[10pt]">{title}</h3>
      <p className="mt-1 text-xs leading-snug text-zinc-400 md:text-sm print:text-[9pt] print:mt-0.5">
        {description}
      </p>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  link,
  linkLabel,
}: {
  title: string;
  description: string;
  link: string;
  linkLabel: string;
}) {
  return (
    <div className="break-inside-avoid rounded-lg border border-zinc-800 bg-zinc-900/50 p-3 md:p-4 print:border-zinc-700 print:p-2.5">
      <h3 className="text-sm font-medium text-white md:text-base print:text-[10pt]">{title}</h3>
      <p className="mt-1 text-xs leading-snug text-zinc-400 md:text-sm print:text-[9pt] print:mt-0.5">
        {description}
      </p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link mt-1.5 inline-flex items-center gap-1 text-xs font-medium text-blue-400 transition-colors hover:text-blue-300 md:text-sm print:text-[9pt] print:mt-1"
      >
        {linkLabel}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      </a>
    </div>
  );
}

function AdvantageItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2 text-xs text-zinc-400 md:text-sm print:text-[9pt] print:gap-1.5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mt-0.5 shrink-0 text-blue-500 print:mt-0"
        aria-hidden="true"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
      {text}
    </li>
  );
}

export default LanguageSection;
