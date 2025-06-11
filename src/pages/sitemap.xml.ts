import IProduct from '@/interfaces/product/product.interface';
import { MongoClient } from 'mongodb';
import type { GetServerSidePropsContext } from 'next';

const BASE_URL = process.env.BASE_URL || 'https://www.apoteka-dar.rs';

const getAllProducts = async (): Promise<{ slug: string }[]> => {
  const client = await MongoClient.connect(process.env.MONGODB_URI!);
  try {
    const db = client.db('DAR_DB');
    const products = await db
      .collection('Products')
      .find({ isActive: true }, { projection: { slug: 1 } })
      .toArray();
    // Map to only include slug as string
    return products.map((product: any) => ({ slug: product.slug }));
  } catch (error) {
    console.error('Error fetching products for sitemap:', error);
    return [];
  } finally {
    await client.close();
  }
};
const generateSiteMap = (products: { slug: string }[]) => {
  const productUrls = products
    .map((product) => {
      return `
  <url>
    <loc>${BASE_URL}/proizvod/${product.slug}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`;
    })
    .join('');

  const staticUrls = [
    '',
    '/autentifikacija/greska',
    '/autentifikacija/prijava',
    '/autentifikacija/verifikacija-zahteva',
    '/informacije/dar-savetnik',
    '/informacije/isporuka-i-placanje',
    '/informacije/o-nama',
    '/informacije/odustanak',
    '/informacije/politika-kolacica',
    '/informacije/politika-privatnosti',
    '/informacije/reklamacije',
    '/informacije/uslovi-koriscenja',
    '/kontakt',
    '/placanje',
    '/registracija',
    '/proizvodi/homeopatija',
    '/proizvodi/abela-pharm',
    '/proizvodi/alpen-pharma-doo',
    // ... add more static category URLs as needed
  ]
    .map(
      (path) => `
  <url>
    <loc>${BASE_URL}${path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${productUrls}
  ${staticUrls}
</urlset>`;
};

export const getServerSideProps = async ({ res }: GetServerSidePropsContext) => {
  const products = await getAllProducts();
  const sitemap = generateSiteMap(products);

  res.setHeader('Content-Type', 'application/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default function SiteMap() {
  // getServerSideProps handles response
  return null;
}
