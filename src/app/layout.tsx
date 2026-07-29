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
  title: 'L Shark Tech | Intelligent Software',
  description:
    'L Shark Tech LTDA is a Brazilian software engineering company founded in 2023, specializing in Artificial Intelligence, Trading Systems, Automation and Data Engineering.',
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
