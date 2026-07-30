import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://lsharktech.pages.dev',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://lsharktech.pages.dev/projects/allcripto',
      lastModified: new Date(),
    },
    {
      url: 'https://lsharktech.pages.dev/projects/polybot',
      lastModified: new Date(),
    },
    {
      url: 'https://lsharktech.pages.dev/projects/trader-dashboard',
      lastModified: new Date(),
    },
  ];
}