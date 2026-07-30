'use client';

import { useEffect, useState } from 'react';

const LABELS: Record<string, string> = {
  '#portugues': 'Baixar apresentação em PDF',
  '#english': 'Download PDF Presentation',
  '#espanol': 'Descargar Presentación en PDF',
};

export default function DownloadButton() {
  const [label, setLabel] = useState('Baixar apresentação em PDF');

  useEffect(() => {
    function updateLabel() {
      const hash = window.location.hash;
      setLabel(LABELS[hash] ?? 'Baixar apresentação em PDF');
    }

    updateLabel();
    window.addEventListener('hashchange', updateLabel);
    return () => window.removeEventListener('hashchange', updateLabel);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-blue-500 print:hidden md:text-sm md:px-5 md:py-2.5"
      aria-label={label}
    >
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
      <span className="hidden sm:inline">{label}</span>
      <span className="sm:hidden">PDF</span>
    </button>
  );
}
