'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <Image
            src="/brand/logo-dark.svg"
            alt="L Shark Tech"
            width={240}
            height={240}
            className="mx-auto mb-6"
          />
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
            {t.about.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gray-500">
            {t.about.text}
          </p>
        </div>
      </div>
    </section>
  );
}
