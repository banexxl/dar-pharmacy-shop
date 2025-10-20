// pages/sitemap.xml.ts
import type { GetServerSidePropsContext } from 'next';
import { ProductsServices } from '@/services/product.services';

const BASE_URL = process.env.BASE_URL || 'https://www.apoteka-dar.rs';

const escapeXml = (unsafe: string) =>
  unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

type Entry =
  | { type: 'product'; slug: string; updatedAt?: string }
  | { type: 'category'; slug: string; updatedAt?: string }
  | { type: 'manufacturer'; slug: string; updatedAt?: string };

function buildPath(entry: Entry) {
  // URL-encode ONLY the slug segment
  const enc = encodeURIComponent(entry.slug);
  switch (entry.type) {
    case 'product':
      return `/proizvod/${enc}`;
    case 'category':
      return `/proizvodi/${enc}`;
    case 'manufacturer':
      return `/proizvodi-proizvodjac-kategorija/${enc}`;
  }
}

function generateSiteMap(entries: Entry[]) {
  const urls = entries
    .map((entry) => {
      const loc = `${BASE_URL}${buildPath(entry)}`;
      return `
  <url>
    <loc>${escapeXml(loc)}</loc>
    ${entry.updatedAt ? `<lastmod>${entry.updatedAt}</lastmod>` : ''}
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
    })
    .join('');

  // If you don't have true lastmod for static pages, it’s safer to omit it.
  const staticPaths = [
    '/', '/kontakt', '/placanje', '/registracija',
    '/autentifikacija/greska', '/autentifikacija/prijava',
    '/autentifikacija/verifikacija-zahteva',
    '/informacije/dar-savetnik', '/informacije/o-nama',
    '/informacije/odustanak', '/informacije/politika-kolacica',
    '/informacije/politika-privatnosti', '/informacije/reklamacije',
    '/informacije/uslovi-koriscenja', '/informacije/isporuka-i-placanje',
  ];

  const staticUrls = staticPaths
    .map((p) => {
      const loc = `${BASE_URL}${p}`;
      return `
  <url>
    <loc>${escapeXml(loc)}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>`;
    })
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
>
${urls}
${staticUrls}
</urlset>`;
}

export const getServerSideProps = async ({ res }: GetServerSidePropsContext) => {
  const productsResult = await ProductsServices().getAllProducts();
  const mainCategories = await ProductsServices().getAllMainCategories();
  const allManufacturers = await ProductsServices().getAllManufacturers();

  // Only include products that are truly indexable and won’t crash render.
  const productSlugs: Entry[] = Array.isArray(productsResult)
    ? productsResult
      .filter((p: any) => p?.isActive && p?.slug) // adjust conditions to your rules
      .map((p: any) => ({
        type: 'product',
        slug: String(p.slug),
        updatedAt: p.updatedAt ? new Date(p.updatedAt).toISOString() : undefined,
      }))
    : [];

  const mainCategorySlugs: Entry[] = Array.isArray(mainCategories)
    ? mainCategories
      .filter((cat: any) => !!cat)
      .map((cat: any) => ({ type: 'category', slug: String(cat) }))
    : [];

  const manufacturerSlugs: Entry[] = Array.isArray(allManufacturers)
    ? allManufacturers
      .filter((m: any) => !!m)
      .map((m: any) => ({ type: 'manufacturer', slug: String(m) }))
    : [];

  const sitemap = generateSiteMap([
    ...productSlugs,
    ...mainCategorySlugs,
    ...manufacturerSlugs,
  ]);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  // Cache for 24h at the edge, allow week of stale while revalidating
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=604800');
  res.write(sitemap);
  res.end();

  return { props: {} };
};

export default function SiteMap() {
  return null;
}
