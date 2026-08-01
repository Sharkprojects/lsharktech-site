'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { resumeContent, type ResumeContent } from '@/app/profile/resumeContent';

const LANGS = ['pt', 'en', 'es'] as const;
type Lang = (typeof LANGS)[number];

const STORAGE_KEY = 'lsharktech-resume-lang';

const LANG_LABELS: Record<Lang, string> = {
  pt: 'Português (BR)',
  en: 'English',
  es: 'Español',
};

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'pt';
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === 'en' || stored === 'es' ? stored : 'pt';
}

export default function ResumePage() {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  const content: ResumeContent = resumeContent[lang];

  const selectLanguage = (l: Lang) => {
    setLang(l);
    localStorage.setItem(STORAGE_KEY, l);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Fixed header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md print:hidden">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="Voltar ao início"
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
          </Link>

          <div className="flex items-center gap-4">
            <div
              className="flex items-center gap-1 rounded-lg border border-zinc-800 bg-zinc-900 px-2 py-1 text-xs font-medium"
              role="group"
              aria-label="Idioma do currículo"
            >
              {LANGS.map((l) => {
                const active = l === lang;
                return (
                  <button
                    key={l}
                    type="button"
                    onClick={() => selectLanguage(l)}
                    aria-label={LANG_LABELS[l]}
                    aria-pressed={active}
                    className={`rounded-md px-2 py-1 transition-colors ${
                      active
                        ? 'bg-blue-600 text-white'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {resumeContent[l].label}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-blue-500 md:px-4 md:text-sm"
              aria-label={content.downloadLabel}
            >
              <DownloadIcon />
              <span className="hidden sm:inline">{content.downloadLabel}</span>
              <span className="sm:hidden">PDF</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Resume sheet */}
      <main className="mx-auto w-full max-w-4xl px-4 py-6 pt-24 print:p-0">
        <section className="resume-page print-section w-full">
          <div className="resume-body">
            {/* Header */}
            <div className="resume-header">
              <div className="resume-photo">
                <Image
                  src="/brand/foto3x4.png"
                  alt={content.photoAlt}
                  width={1086}
                  height={1448}
                  className="resume-photo-img"
                  priority
                />
              </div>
              <div className="resume-heading">
                <h1 className="resume-name">{content.fullName}</h1>
                <p className="resume-headline">{content.headline}</p>
                <p className="resume-location">{content.location}</p>
              </div>
            </div>

            {/* Profile */}
            <section className="resume-section">
              <h2 className="resume-section-title">{content.profileTitle}</h2>
              <p className="resume-text">{content.profile}</p>
            </section>

            {/* Experience */}
            <section className="resume-section">
              <h2 className="resume-section-title">{content.experienceTitle}</h2>
              {content.experience.map((exp) => (
                <div
                  key={`${exp.company}-${exp.role}`}
                  className="resume-entry break-inside-avoid"
                >
                  <div className="resume-entry-head">
                    <div className="resume-entry-title">
                      <h3 className="resume-entry-role">{exp.role}</h3>
                      <p className="resume-company">{exp.company}</p>
                    </div>
                    <div className="resume-entry-meta">
                      <p className="resume-period">{exp.period}</p>
                      {exp.location && (
                        <p className="resume-location-small">{exp.location}</p>
                      )}
                    </div>
                  </div>
                  <p className="resume-text">{exp.description}</p>
                  {exp.skills.length > 0 && (
                    <div className="resume-chips">
                      {exp.skills.map((skill) => (
                        <span key={skill} className="resume-chip">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </section>

            {/* Education */}
            <section className="resume-section">
              <h2 className="resume-section-title">{content.educationTitle}</h2>
              {content.education.map((edu) => (
                <div
                  key={`${edu.institution}-${edu.course}`}
                  className="resume-entry resume-edu break-inside-avoid"
                >
                  <div className="resume-entry-title">
                    <h3 className="resume-entry-role">{edu.course}</h3>
                    <p className="resume-company">
                      {edu.institution}
                      {edu.field ? ` · ${edu.field}` : ''}
                    </p>
                  </div>
                  <p className="resume-period">{edu.period}</p>
                </div>
              ))}
            </section>

            {/* Certifications */}
            <section className="resume-section">
              <h2 className="resume-section-title">
                {content.certificationsTitle}
              </h2>
              <div className="resume-cert-grid">
                {content.certifications.map((cert) => (
                  <div
                    key={`${cert.name}-${cert.credentialId}`}
                    className="resume-cert break-inside-avoid"
                  >
                    <div className="resume-cert-head">
                      <span className="resume-cert-name">{cert.name}</span>
                      <span className="resume-cert-date">{cert.date}</span>
                    </div>
                    <p className="resume-cert-meta">
                      {cert.issuer}
                      {cert.expiry ? ` · ${cert.expiry}` : ''}
                      {cert.credentialId
                        ? ` · ${content.credentialLabel}: ${cert.credentialId}`
                        : ''}
                    </p>
                    {cert.description && (
                      <p className="resume-cert-desc">{cert.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section className="resume-section">
              <h2 className="resume-section-title">{content.skillsTitle}</h2>
              {content.skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="resume-skill-group break-inside-avoid"
                >
                  <h3 className="resume-skill-group-title">{group.title}</h3>
                  <div className="resume-chips">
                    {group.skills.map((skill) => (
                      <span key={skill} className="resume-chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            {/* Contact */}
            <footer className="resume-contact">
              <a
                href="https://www.linkedin.com/in/lsharktech/"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-contact-item"
              >
                <LinkedInIcon />
                <span>{content.contacts.linkedin}</span>
              </a>
              <a
                href="https://lsharktech.pages.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-contact-item"
              >
                <GlobeIcon />
                <span>{content.contacts.website}</span>
              </a>
              <a href="tel:+55{content.contacts.phone}" className="resume-contact-item">
                <PhoneIcon />
                <span>{content.contacts.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${content.contacts.email}`}
                className="resume-contact-item"
              >
                <MailIcon />
                <span>{content.contacts.email}</span>
              </a>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}

function DownloadIcon() {
  return (
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
      aria-hidden="true"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
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
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
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
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 4l-10 8L2 4" />
    </svg>
  );
}
