import { getProductBySlug, getRelatedProducts } from '@/services/products';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ProductDetailClient } from './product-detail-client';

interface Props {
  params: Promise<{ slug: string }>;
}

const BASE_URL =
  process.env.BASE_URL ?? 'https://www.apoteka-dar.rs';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Proizvod nije pronađen | Apoteka DAR',
    };
  }

  const description =
    product.description?.slice(0, 157) + (product.description && product.description.length > 157 ? '...' : '') ||
    `Kupite ${product.name} u Apoteci DAR Kragujevac.`;

  const url = `${BASE_URL}/proizvod/${product.slug}`;

  return {
    title: `${product.name} | Apoteka DAR`,
    description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: `${product.name} | Apoteka DAR`,
      description,
      url,
      type: 'website',
      images: product.image_url ? [{ url: product.image_url }] : [],
    },

    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | Apoteka DAR`,
      description,
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
      BASE_URL={BASE_URL}
    />
  );
}
