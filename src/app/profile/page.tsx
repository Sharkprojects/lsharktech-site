import type { Metadata } from 'next';
import ResumePage from '@/components/profile/ResumePage';

export const metadata: Metadata = {
  title: 'Leandro Souza Gomes | Currículo',
  description:
    'Currículo profissional de Leandro Souza Gomes – Data Analyst, Python Developer, iGaming & Sportsbook, Power BI, SQL.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Leandro Souza Gomes | Currículo',
    description:
      'Data Analyst | Python Developer | AI & Automation | iGaming & Sportsbook | Power BI | SQL',
    type: 'profile',
    url: 'https://lsharktech.pages.dev/profile',
  },
};

export default function ProfilePage() {
  return <ResumePage />;
}
