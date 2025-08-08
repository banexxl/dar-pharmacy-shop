import type { GetServerSidePropsContext } from 'next';

const BASE_URL = process.env.BASE_URL || 'https://www.apoteka-dar.rs';

export const getServerSideProps = async ({ res }: GetServerSidePropsContext) => {
  const content = `
User-agent: *
Disallow: /autentifikacija/
Disallow: /autentifikacija/greska
Disallow: /autentifikacija/prijava
Disallow: /autentifikacija/verifikacija-zahteva
Disallow: /api/

Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;

  res.setHeader('Content-Type', 'text/plain');
  res.write(content.trim());
  res.end();

  return { props: {} };
};

export default function RobotsTxt() {
  return null;
}
