import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getProductsByMainCategoryAndManufacturer } from '@/services/products';
import { getManufacturerByValue } from '@/services/manufacturers';
import { getMainCategoryByValue } from '@/services/categories';
import { CategoryClient } from '../../../proizvodi/[[...slug]]/category-client';

const BASE_URL = process.env.BASE_URL || 'https://www.apoteka-dar.rs';

interface Props {
  params: Promise<{ manufacturerURL: string; mainCategory: string }>;
}

export const revalidate = 300;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { manufacturerURL, mainCategory } = await params;
  const manufacturer = await getManufacturerByValue(manufacturerURL);
  const mainCat = await getMainCategoryByValue(mainCategory);

  if (!manufacturer || !mainCat) {
    return { title: 'Stranica nije pronađena' };
  }

  const url = `${BASE_URL}/proizvodi-proizvodjac-kategorija/${manufacturerURL}/${mainCategory}`;

  return {
    title: `${manufacturer.name} - ${mainCat.label} | Apoteka DAR`,
    description: `Proizvodi proizvođača ${manufacturer.name} iz kategorije ${mainCat.label}. Kupujte online u Apoteci DAR.`,
    alternates: { canonical: url },
    openGraph: {
      title: `${manufacturer.name} - ${mainCat.label} | Apoteka DAR`,
      description: `${manufacturer.name} proizvodi u kategoriji ${mainCat.label}.`,
      url,
      type: 'website',
      locale: 'sr_RS',
      siteName: 'Apoteka DAR',
    },
  };
}

export default async function ManufacturerCategoryPage({ params }: Props) {
  const { manufacturerURL, mainCategory } = await params;

  const manufacturer = await getManufacturerByValue(manufacturerURL);
  if (!manufacturer) notFound();

  const mainCat = await getMainCategoryByValue(mainCategory);
  if (!mainCat) notFound();

  const products = await getProductsByMainCategoryAndManufacturer(mainCategory, manufacturerURL);

  if (!products || products.length === 0) notFound();

  return (
    <CategoryClient
      products={JSON.parse(JSON.stringify(products))}
      mainCategory={{ id: mainCat.id, label: mainCat.label, value: mainCat.value }}
      midCategory={null}
      subCategory={null}
      siblingCategories={[]}
      level="main"
    />
  );
}
