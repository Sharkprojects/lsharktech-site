'use client';

import { useEffect, useState } from 'react';

interface ButtonLabels {
  standard: string;
  clean: string;
}

const LABELS: Record<string, ButtonLabels> = {
  '#portugues': {
    standard: 'Baixar apresentação em PDF',
    clean: 'Baixar PDF sem contatos',
  },
  '#english': {
    standard: 'Download PDF Presentation',
    clean: 'Download PDF without contacts',
  },
  '#espanol': {
    standard: 'Descargar Presentación en PDF',
    clean: 'Descargar PDF sin contactos',
  },
};

const DEFAULT_LABELS: ButtonLabels = LABELS['#portugues'];

function printCleanVersion() {
  const root = document.documentElement;
  root.classList.add('no-external-contact');
  window.addEventListener(
    'afterprint',
    () => root.classList.remove('no-external-contact'),
    { once: true },
  );
  window.print();
}

export default function DownloadButton() {
  const [labels, setLabels] = useState<ButtonLabels>(DEFAULT_LABELS);

  useEffect(() => {
    function updateLabels() {
      const hash = window.location.hash;
      setLabels(LABELS[hash] ?? DEFAULT_LABELS);
    }

    updateLabels();
    window.addEventListener('hashchange', updateLabels);
    return () => window.removeEventListener('hashchange', updateLabels);
  }, []);

  return (
    <div className="flex items-center gap-2 print:hidden">
      <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-blue-500 md:text-sm md:px-4"
        aria-label={labels.standard}
      >
        <DownloadIcon />
        <span className="hidden sm:inline">{labels.standard}</span>
        <span className="sm:hidden">PDF</span>
      </button>

      <button
        type="button"
        onClick={printCleanVersion}
        title={labels.clean}
        className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white md:text-sm md:px-4"
        aria-label={labels.clean}
      >
        <UserXIcon />
        <span className="hidden sm:inline">{labels.clean}</span>
      </button>
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

function UserXIcon() {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="17" y1="8" x2="22" y2="13" />
      <line x1="22" y1="8" x2="17" y2="13" />
    </svg>
  );
}
