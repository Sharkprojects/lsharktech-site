import Image from 'next/image';
import type { LanguageContent } from '@/app/company-profile/companyProfileContent';

interface LanguageSectionProps {
  content: LanguageContent;
}

function LanguageSection({ content }: LanguageSectionProps) {
  return (
    <section
      id={content.id}
      className="print-section mx-auto min-h-dvh w-full max-w-6xl scroll-mt-14 px-6 py-5 max-md:px-4 md:py-6 print:max-w-none"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-3 md:gap-4 print:max-w-none">
        {/* Brand bar: logo + company + language links */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/brand/logo-light.svg"
              alt="L Shark Tech logo"
              width={36}
              height={36}
              className="h-7 w-auto md:h-8"
              priority
            />
            <span className="text-[11px] font-medium text-zinc-400 md:text-xs">
              {content.companyName}
            </span>
          </div>
          <div className="flex items-center gap-2 text-[10px] md:text-[11px]">
            <LanguageLink href="#portugues" label="Português" currentLang={content.lang} lang="pt" />
            <span className="text-zinc-700">|</span>
            <LanguageLink href="#english" label="English" currentLang={content.lang} lang="en" />
            <span className="text-zinc-700">|</span>
            <LanguageLink href="#espanol" label="Español" currentLang={content.lang} lang="es" />
          </div>
        </div>

        {/* Title + about */}
        <div>
          <h1 className="text-xl font-bold tracking-tight text-white md:text-2xl">
            {content.title}
          </h1>
          <p className="mt-1 max-w-2xl text-[11px] leading-relaxed text-zinc-400 md:text-xs">
            {content.subtitle}
          </p>
          <p className="mt-1.5 text-[11px] leading-relaxed text-zinc-500 md:text-xs">
            {content.about.split('\n\n')[0]}
          </p>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 md:text-[11px]">
            {content.servicesTitle}
          </h2>
          <div className="mt-1.5 grid gap-2 sm:grid-cols-2">
            {content.services.map((service) => (
              <ServiceCard key={service.title} title={service.title} description={service.description} />
            ))}
          </div>
        </div>

        {/* Projects */}
        <div>
          <h2 className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 md:text-[11px]">
            {content.projectsTitle}
          </h2>
          <div className="mt-1.5 grid gap-2 sm:grid-cols-3">
            {content.projects.map((project) => (
              <ProjectCard key={project.title} title={project.title} description={project.description} link={project.link} />
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div>
          <h2 className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 md:text-[11px]">
            {content.technologiesTitle}
          </h2>
          <div className="mt-1.5 flex flex-wrap gap-1">
            {content.technologies.map((tech) => (
              <span
                key={tech}
                className="break-inside-avoid rounded-md border border-zinc-800 bg-zinc-900/50 px-2 py-0.5 text-[9px] font-medium text-zinc-300 md:text-[10px]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Advantages */}
        <div>
          <h2 className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 md:text-[11px]">
            {content.advantagesTitle}
          </h2>
          <ul className="mt-1.5 grid gap-x-4 gap-y-1 sm:grid-cols-2">
            {content.advantages.map((item) => (
              <AdvantageItem key={item} text={item} />
            ))}
          </ul>
        </div>

        {/* Combined footer bar: CTA button + contact + company info */}
        <div className="mt-1 flex flex-wrap items-center justify-between gap-2 border-t border-zinc-800 pt-3">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <a
              href={content.ctaMailto}
              className="inline-flex items-center rounded-md bg-blue-600 px-3 py-1.5 text-[10px] font-medium text-white transition-colors hover:bg-blue-500 md:text-[11px]"
            >
              {content.ctaButton}
            </a>
            <a
              href="https://lsharktech.pages.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-zinc-500 transition-colors hover:text-zinc-300 md:text-[11px]"
            >
              lsharktech.pages.dev
            </a>
            <a
              href="https://www.linkedin.com/in/lsharktech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-zinc-500 transition-colors hover:text-zinc-300 md:text-[11px]"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${content.email}`}
              className="text-[10px] text-zinc-500 transition-colors hover:text-zinc-300 md:text-[11px]"
            >
              {content.email}
            </a>
          </div>
          <div className="text-right text-[9px] text-zinc-600 md:text-[10px]">
            {content.footer.companyName} &middot; {content.footer.founded} &middot; {content.footer.tagline}
          </div>
        </div>

        {/* Bottom language links */}
        <div className="flex items-center justify-center gap-2 text-[9px] text-zinc-600 md:text-[10px]">
          <LanguageLink href="#portugues" label="Português" currentLang={content.lang} lang="pt" />
          <span className="text-zinc-700">|</span>
          <LanguageLink href="#english" label="English" currentLang={content.lang} lang="en" />
          <span className="text-zinc-700">|</span>
          <LanguageLink href="#espanol" label="Español" currentLang={content.lang} lang="es" />
        </div>
      </div>
    </section>
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
      className="text-zinc-500 transition-colors hover:text-white"
      aria-label={`Switch to ${label}`}
    >
      {label}
    </a>
  );
}

function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="break-inside-avoid rounded-lg border border-zinc-800 bg-zinc-900/50 p-2.5">
      <h3 className="text-[11px] font-medium text-white md:text-xs">{title}</h3>
      <p className="mt-0.5 text-[10px] leading-snug text-zinc-400 md:text-[11px]">{description}</p>
    </div>
  );
}

function ProjectCard({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <div className="break-inside-avoid rounded-lg border border-zinc-800 bg-zinc-900/50 p-2.5">
      <h3 className="text-[11px] font-medium text-white md:text-xs">{title}</h3>
      <p className="mt-0.5 text-[10px] leading-snug text-zinc-400 md:text-[11px]">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1 inline-flex max-w-full items-center gap-0.5 truncate text-[10px] font-medium text-blue-400 transition-colors hover:text-blue-300 md:text-[11px]"
      >
        {link.replace('https://', '')}
      </a>
    </div>
  );
}

function AdvantageItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-1.5 text-[10px] text-zinc-400 md:text-[11px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mt-0.5 shrink-0 text-blue-500"
        aria-hidden="true"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
      {text}
    </li>
  );
}

export default LanguageSection;
