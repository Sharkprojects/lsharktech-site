import { getProjectImages } from '@/lib/projects';
import ProjectPageClient from '@/components/ProjectPageClient';

export default function TraderDashboardPage() {
  const images = getProjectImages('trader-dashboard');
  return <ProjectPageClient slug="trader-dashboard" images={images} />;
}
