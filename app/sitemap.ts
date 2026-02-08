import { MetadataRoute } from 'next';
import { projects } from '@/lib/data';

const BASE_URL = 'https://karthikmohan.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = projects.map((project) => ({
    url: `${BASE_URL}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...projectRoutes,
  ];
}
