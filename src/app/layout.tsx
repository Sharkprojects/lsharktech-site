import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { LanguageProvider } from '@/context/LanguageContext';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lsharktech.pages.dev'),

  title: {
    default: 'L Shark Tech | Intelligent Software',
    template: '%s | L Shark Tech',
  },

  authors: [
    {
      name: 'L Shark Tech LTDA',
    },
  ],

  description:
    'L Shark Tech LTDA is a Brazilian software engineering company founded in 2023, specializing in Artificial Intelligence, Trading Systems, Automation and Data Engineering.',

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'L Shark Tech',
    title: 'L Shark Tech | Intelligent Software',
    description:
      'L Shark Tech develops intelligent software for Artificial Intelligence, algorithmic trading, automation, data engineering and high-performance web applications.',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'L Shark Tech – Intelligent Software',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'L Shark Tech | Intelligent Software',
    description:
      'L Shark Tech develops intelligent software for Artificial Intelligence, algorithmic trading, automation, data engineering and high-performance web applications.',
    images: ['/opengraph-image.png'],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-white text-gray-900">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}