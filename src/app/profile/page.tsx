import type { Metadata } from 'next';
import ResumePage from '@/components/profile/ResumePage';

export const metadata: Metadata = {
  title: 'Leandro Souza Gomes | Currículo',
  description:
    'Currículo profissional de Leandro Souza Gomes – Analista de Dados, Desenvolvedor Python, iGaming e apostas esportivas, Power BI e SQL.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Leandro Souza Gomes | Currículo',
    description:
      'Analista de Dados | Desenvolvedor Python | IA & Automação | iGaming & Sportsbook | Power BI | SQL',
    type: 'profile',
    url: 'https://lsharktech.pages.dev/profile',
  },
};

export default function ProfilePage() {
  return <ResumePage />;
}
