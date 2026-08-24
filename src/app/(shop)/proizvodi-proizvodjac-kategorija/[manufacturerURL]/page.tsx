import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getProductsByManufacturer } from '@/services/products';
import { getManufacturerByValue, getAllManufacturerNames } from '@/services/manufacturers';
import { CategoryClient } from '../../proizvodi/[[...slug]]/category-client';

const BASE_URL = process.env.BASE_URL || 'https://apoteka-dar.rs';

interface Props {
  params: Promise<{ manufacturerURL: string }>;
}

export const revalidate = 300;

export async function generateStaticParams() {
  const manufacturers = await getAllManufacturerNames();
  return manufacturers.map((m) => ({ manufacturerURL: m }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { manufacturerURL } = await params;
  const manufacturer = await getManufacturerByValue(manufacturerURL);

  if (!manufacturer) {
    return { title: 'Proizvođač nije pronađen' };
  }

  const label = manufacturer.name;
  const url = `${BASE_URL}/proizvodi-proizvodjac-kategorija/${manufacturerURL}`;

  return {
    title: `${label} | Apoteka DAR - Proizvodi po proizvođaču`,
    description: `Svi proizvodi proizvođača ${label} dostupni u Apoteci DAR. Brza dostava širom Srbije.`,
    alternates: { canonical: url },
    openGraph: {
      title: `${label} - Apoteka DAR`,
      description: `Proizvodi: ${label}. Priroda na dohvat ruke.`,
      url,
      type: 'website',
      locale: 'sr_RS',
      siteName: 'Apoteka DAR',
    },
  };
}

export default async function ManufacturerPage({ params }: Props) {
  const { manufacturerURL } = await params;
  const manufacturer = await getManufacturerByValue(manufacturerURL);

  if (!manufacturer) {
    notFound();
  }

  const products = await getProductsByManufacturer(manufacturerURL);

  if (!products || products.length === 0) {
    notFound();
  }

  return (
    <CategoryClient
      products={JSON.parse(JSON.stringify(products))}
      mainCategory={{ id: manufacturerURL, label: manufacturer.name, value: manufacturerURL }}
      midCategory={null}
      subCategory={null}
      siblingCategories={[]}
      level="main"
    />
  );
}
