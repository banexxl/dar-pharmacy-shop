import type { MetadataRoute } from 'next';
import { getAllActiveProducts } from '@/services/products';
import { getAllManufacturerNames } from '@/services/manufacturers';
import { getAllCategoryPaths, getAllMainCategories } from '@/services/categories';
import { getAllBlogs } from '@/services/blogs';

const BASE_URL = process.env.BASE_URL || 'https://apoteka-dar.rs';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [products, categoryPaths, manufacturers, mainCategories, blogs] = await Promise.all([
    getAllActiveProducts(),
    getAllCategoryPaths(),
    getAllManufacturerNames(),
    getAllMainCategories(),
    getAllBlogs(),
  ]);

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    '/',
    '/proizvodi',
    '/kontakt',
    '/placanje',
    '/registracija',
    '/autentifikacija/prijava',
    '/informacije/dar-savetnik',
    '/informacije/o-nama',
    '/informacije/odustanak',
    '/informacije/politika-kolacica',
    '/informacije/politika-privatnosti',
    '/informacije/reklamacije',
    '/informacije/uslovi-koriscenja',
    '/informacije/isporuka-i-placanje',
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }));

  // Product pages
  const productUrls: MetadataRoute.Sitemap = products
    .filter((p) => p.slug)
    .map((p) => ({
      url: `${BASE_URL}/proizvod/${encodeURIComponent(p.slug)}`,
      lastModified: p.updated_at ? new Date(p.updated_at) : undefined,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));

  // Category pages
  const categoryUrls: MetadataRoute.Sitemap = categoryPaths.map((path) => {
    let url = `${BASE_URL}/proizvodi/${encodeURIComponent(path.mainCategory)}`;

    if (path.midCategory) {
      url += `/${encodeURIComponent(path.midCategory)}`;
    }

    if (path.subCategory) {
      url += `/${encodeURIComponent(path.subCategory)}`;
    }

    const priority = path.subCategory ? 0.6 : path.midCategory ? 0.65 : 0.7;

    return {
      url,
      changeFrequency: 'weekly' as const,
      priority,
    };
  });

  // Manufacturer pages
  const manufacturerUrls: MetadataRoute.Sitemap = manufacturers
    .filter(Boolean)
    .map((manufacturer) => ({
      url: `${BASE_URL}/proizvodi-proizvodjac-kategorija/${encodeURIComponent(manufacturer)}`,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }));

  // Manufacturer + category pages
  const manufacturerCategoryUrls: MetadataRoute.Sitemap = [];

  for (const manufacturer of manufacturers) {
    for (const mainCategory of mainCategories) {
      manufacturerCategoryUrls.push({
        url: `${BASE_URL}/proizvodi-proizvodjac-kategorija/${encodeURIComponent(manufacturer)}/${encodeURIComponent(mainCategory.value)}`,
        changeFrequency: 'weekly' as const,
        priority: 0.5,
      });
    }
  }

  // Blog pages
  const blogListUrl: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/blog`,
      changeFrequency: 'daily' as const,
      priority: 0.7,
    },
  ];

  const blogUrls: MetadataRoute.Sitemap = blogs
    .filter((b) => b.slug)
    .map((b) => ({
      url: `${BASE_URL}/blog/${encodeURIComponent(b.slug)}`,
      lastModified: b.updated_at ? new Date(b.updated_at) : new Date(b.published_at),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  return [
    ...staticPages,
    ...productUrls,
    ...categoryUrls,
    ...manufacturerUrls,
    ...manufacturerCategoryUrls,
    ...blogListUrl,
    ...blogUrls,
  ];
}