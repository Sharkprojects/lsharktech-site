import { getProjectImages } from '@/lib/projects';
import ProjectPageClient from '@/components/ProjectPageClient';

export default function AllCriptoPage() {
  const images = getProjectImages('allcripto');
  return <ProjectPageClient slug="allcripto" images={images} />;
}
