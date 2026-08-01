import type { MetadataRoute } from 'next';
import { getAllActiveProducts, getAllMainCategories } from '@/services/products';
import { getAllManufacturerNames } from '@/services/manufacturers';

const BASE_URL = process.env.BASE_URL || 'https://www.apoteka-dar.rs';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getAllActiveProducts();
  const mainCategories = await getAllMainCategories();
  const manufacturers = await getAllManufacturerNames();

  const productUrls: MetadataRoute.Sitemap = products
    .filter((p) => p.slug)
    .map((p) => ({
      url: `${BASE_URL}/proizvod/${encodeURIComponent(p.slug)}`,
      lastModified: p.updated_at ? new Date(p.updated_at) : undefined,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));

  const categoryUrls: MetadataRoute.Sitemap = mainCategories
    .filter(Boolean)
    .map((cat) => ({
      url: `${BASE_URL}/proizvodi/${encodeURIComponent(cat)}`,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));

  const manufacturerUrls: MetadataRoute.Sitemap = manufacturers
    .filter(Boolean)
    .map((m) => ({
      url: `${BASE_URL}/proizvodi-proizvodjac-kategorija/${encodeURIComponent(m)}`,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }));

  const staticPages: MetadataRoute.Sitemap = [
    '/', '/kontakt', '/placanje', '/registracija',
    '/autentifikacija/prijava',
    '/informacije/dar-savetnik', '/informacije/o-nama',
    '/informacije/odustanak', '/informacije/politika-kolacica',
    '/informacije/politika-privatnosti', '/informacije/reklamacije',
    '/informacije/uslovi-koriscenja', '/informacije/isporuka-i-placanje',
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...productUrls, ...categoryUrls, ...manufacturerUrls];
}
