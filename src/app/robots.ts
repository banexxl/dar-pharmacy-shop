import type { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.apoteka-dar.rs';

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
