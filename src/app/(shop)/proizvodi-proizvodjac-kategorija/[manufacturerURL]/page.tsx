import { getProductsByManufacturer } from '@/services/products';
import { notFound } from 'next/navigation';
import { CategoryPageClient } from '../../proizvodi/[mainCategory]/category-client';

interface Props {
  params: Promise<{ manufacturerURL: string }>;
}

export default async function ManufacturerPage({ params }: Props) {
  const { manufacturerURL } = await params;
  const products = await getProductsByManufacturer(manufacturerURL);

  if (!products || products.length === 0) {
    notFound();
  }

  return (
    <CategoryPageClient
      products={JSON.parse(JSON.stringify(products))}
      mainCategory={manufacturerURL}
    />
  );
}
