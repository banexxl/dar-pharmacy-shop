import type { MetadataRoute } from 'next';

const BASE_URL = process.env.BASE_URL || 'https://apoteka-dar.rs';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/nalog/', '/auth/'],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
