import { getProductsByMainCategoryAndManufacturer } from '@/services/products';
import { notFound } from 'next/navigation';
import { CategoryPageClient } from '../../../proizvodi/[mainCategory]/category-client';

interface Props {
  params: Promise<{ manufacturerURL: string; mainCategory: string }>;
}

export default async function ManufacturerCategoryPage({ params }: Props) {
  const { manufacturerURL, mainCategory } = await params;
  const products = await getProductsByMainCategoryAndManufacturer(mainCategory, manufacturerURL);

  if (!products || products.length === 0) {
    notFound();
  }

  return (
    <CategoryPageClient
      products={JSON.parse(JSON.stringify(products))}
      mainCategory={mainCategory}
    />
  );
}
