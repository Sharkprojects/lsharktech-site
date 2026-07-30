import Image from 'next/image';
import type { LanguageContent } from '@/app/company-profile/companyProfileContent';

interface LanguageSectionProps {
  content: LanguageContent;
}

function LanguageSection({ content }: LanguageSectionProps) {
  const aboutParagraphs = content.about.split('\n\n');

  return (
    <section
      id={content.id}
      className="print-section mx-auto min-h-screen w-full max-w-6xl px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-4xl">
        {/* Header with logo */}
        <div className="flex items-center gap-4">
          <Image
            src="/brand/logo-light.svg"
            alt="L Shark Tech logo"
            width={48}
            height={48}
            className="h-10 w-auto md:h-12"
            priority
          />
          <div>
            <p className="text-sm font-medium text-zinc-400">{content.companyName}</p>
          </div>
        </div>

        {/* Language links at top */}
        <div className="mt-6 flex items-center gap-3 text-xs">
          <LanguageLink href="#portugues" label="Português" currentLang={content.lang} lang="pt" />
          <span className="text-zinc-700">|</span>
          <LanguageLink href="#english" label="English" currentLang={content.lang} lang="en" />
          <span className="text-zinc-700">|</span>
          <LanguageLink href="#espanol" label="Español" currentLang={content.lang} lang="es" />
        </div>

        {/* Title */}
        <div className="mt-12 md:mt-16">
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            {content.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            {content.subtitle}
          </p>
        </div>

        {/* About */}
        <div className="mt-10 md:mt-12">
          {aboutParagraphs.map((paragraph, i) => (
            <p key={i} className="text-sm leading-relaxed text-zinc-400 md:text-base [&:not(:first-child)]:mt-4">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Services */}
        <div className="mt-14 md:mt-16">
          <h2 className="text-xl font-semibold text-white md:text-2xl">
            {content.servicesTitle}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {content.services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mt-14 md:mt-16">
          <h2 className="text-xl font-semibold text-white md:text-2xl">
            {content.projectsTitle}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-14 md:mt-16">
          <h2 className="text-xl font-semibold text-white md:text-2xl">
            {content.technologiesTitle}
          </h2>
          <TechnologyList technologies={content.technologies} />
        </div>

        {/* Advantages */}
        <div className="mt-14 md:mt-16">
          <h2 className="text-xl font-semibold text-white md:text-2xl">
            {content.advantagesTitle}
          </h2>
          <ul className="mt-6 space-y-3">
            {content.advantages.map((item) => (
              <AdvantageItem key={item} text={item} />
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-14 md:mt-16">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 text-center md:p-10">
            <p className="text-base font-medium text-white md:text-lg">
              {content.ctaText}
            </p>
            <p className="mt-2 text-sm text-zinc-400">{content.ctaDescription}</p>
            <a
              href={content.ctaMailto}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500"
            >
              {content.ctaButton}
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-14 md:mt-16">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
            <ContactLink
              href="https://lsharktech.pages.dev"
              label="Website"
              value="lsharktech.pages.dev"
            />
            <ContactLink
              href="https://www.linkedin.com/in/lsharktech/"
              label="LinkedIn"
              value="linkedin.com/in/lsharktech"
            />
            <ContactLink
              href={`mailto:${content.email}`}
              label="E-mail"
              value={content.email}
            />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-14 border-t border-zinc-800 pb-8 pt-8 text-center md:mt-16">
          <p className="text-sm font-semibold text-white">{content.footer.companyName}</p>
          <p className="mt-1 text-xs font-medium uppercase tracking-widest text-zinc-500">
            {content.footer.founded}
          </p>
          <p className="mt-1 text-xs text-zinc-500">{content.footer.tagline}</p>

          <div className="mt-4 flex items-center justify-center gap-3 text-xs text-zinc-500">
            <LanguageLink href="#portugues" label="Português" currentLang={content.lang} lang="pt" />
            <span className="text-zinc-700">|</span>
            <LanguageLink href="#english" label="English" currentLang={content.lang} lang="en" />
            <span className="text-zinc-700">|</span>
            <LanguageLink href="#espanol" label="Español" currentLang={content.lang} lang="es" />
          </div>
        </footer>
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
      className="text-zinc-400 transition-colors hover:text-white"
      aria-label={`Switch to ${label}`}
    >
      {label}
    </a>
  );
}

function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="break-inside-avoid rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 shadow-sm transition-colors hover:border-zinc-700">
      <h3 className="text-base font-medium text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{description}</p>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className="break-inside-avoid rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 shadow-sm transition-colors hover:border-zinc-700">
      <h3 className="text-base font-medium text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
      >
        {link.replace('https://', '')}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
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

function TechnologyList({ technologies }: { technologies: string[] }) {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <span
          key={tech}
          className="break-inside-avoid rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-xs font-medium text-zinc-300"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

function AdvantageItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-sm text-zinc-400">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
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

function ContactLink({
  href,
  label,
  value,
}: {
  href: string;
  label: string;
  value: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-zinc-400 transition-colors hover:text-white"
    >
      <span className="text-xs text-zinc-500">{label}:</span>
      <span className="font-medium text-zinc-300">{value}</span>
    </a>
  );
}

export default LanguageSection;
