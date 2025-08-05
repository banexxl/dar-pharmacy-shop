import { ProductsServices } from '@/services/product.services';
import type { GetServerSidePropsContext } from 'next';

const BASE_URL = process.env.BASE_URL || 'https://www.apoteka-dar.rs';

const escapeXml = (unsafe: string) =>
  unsafe.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

const generateSiteMap = (
  entries: { type: 'product' | 'category' | 'manufacturer'; slug: string; updatedAt?: string }[]
) => {
  const urls = entries.map((entry) => {
    let path = '';
    switch (entry.type) {
      case 'product':
        path = `/proizvod/${escapeXml(entry.slug)}`;
        break;
      case 'category':
        path = `/proizvodi/${escapeXml(entry.slug)}`;
        break;
      case 'manufacturer':
        path = `/proizvodi-proizvodjac-kategorija/${escapeXml(entry.slug)}`;
        break;
    }

    return `
  <url>
    <loc>${BASE_URL}${path}</loc>
    ${entry.updatedAt ? `<lastmod>${entry.updatedAt}</lastmod>` : ''}
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  }).join('');

  const staticUrls = [
    '/', '/kontakt', '/placanje', '/registracija',
    '/autentifikacija/greska', '/autentifikacija/prijava',
    '/autentifikacija/verifikacija-zahteva',
    '/informacije/dar-savetnik', '/informacije/o-nama',
    '/informacije/odustanak', '/informacije/politika-kolacica',
    '/informacije/politika-privatnosti', '/informacije/reklamacije',
    '/informacije/uslovi-koriscenja', '/informacije/isporuka-i-placanje'
  ].map((path) => `
  <url>
    <loc>${BASE_URL}${path}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
${staticUrls}
</urlset>`;
};


export const getStaticProps = async ({ res }: GetServerSidePropsContext) => {
  const productsResult = await ProductsServices().getAllProducts();
  const mainCategories = await ProductsServices().getAllMainCategories();
  const allManufacturers = await ProductsServices().getAllManufacturers();

  const productSlugs = Array.isArray(productsResult)
    ? productsResult.map((p: any) => ({
      type: 'product' as const,
      slug: p.slug as string,
      updatedAt: p.updatedAt ? new Date(p.updatedAt).toISOString() : undefined
    }))
    : [];

  const mainCategorySlugs = Array.isArray(mainCategories)
    ? mainCategories.map((cat: string) => ({ type: 'category' as const, slug: cat as string }))
    : [];

  const manufacturerSlugs = Array.isArray(allManufacturers)
    ? allManufacturers.map((m: string) => ({ type: 'manufacturer' as const, slug: m as string }))
    : [];

  const sitemap = generateSiteMap([...productSlugs, ...mainCategorySlugs, ...manufacturerSlugs]);

  res.setHeader('Content-Type', 'application/xml');
  res.write(sitemap);
  res.end();

  return { props: {}, revalidate: 3600 }; // Revalidate every hour
};


export default function SiteMap() {
  // getServerSideProps handles response
  return null;
}
