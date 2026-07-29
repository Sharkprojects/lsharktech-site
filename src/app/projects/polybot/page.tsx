import { getProjectImages } from '@/lib/projects';
import ProjectPageClient from '@/components/ProjectPageClient';

export default function PolyBotPage() {
  const images = getProjectImages('polybot');
  return <ProjectPageClient slug="polybot" images={images} />;
}
