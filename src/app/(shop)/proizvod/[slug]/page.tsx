import { getProductBySlug, getRelatedProducts } from '@/lib/services/products';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ProductDetailClient } from './product-detail-client';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return { title: 'Proizvod nije pronađen' };

  const description = product.description
    ? product.description.length > 160
      ? product.description.substring(0, 157) + '...'
      : product.description
    : `Kupite ${product.name} u Apoteci DAR Kragujevac.`;

  return {
    title: product.name,
    description,
    openGraph: {
      images: product.image_url ? [product.image_url] : [],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = await getRelatedProducts(
    product.main_category,
    product.id,
    10
  );

  return (
    <ProductDetailClient
      product={JSON.parse(JSON.stringify(product))}
      relatedProducts={JSON.parse(JSON.stringify(relatedProducts))}
    />
  );
}
