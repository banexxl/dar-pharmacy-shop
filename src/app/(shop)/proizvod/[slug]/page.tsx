import { getProductBySlug, getRelatedProducts, getAllProductSlugs } from '@/services/products';
import { getManufacturerById } from '@/services/manufacturers';
import { resolveCategoryLabelsForProduct } from '@/services/categories';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ProductDetailClient } from './product-detail-client';

const BASE_URL = process.env.BASE_URL || 'https://www.apoteka-dar.rs';

interface Props {
  params: Promise<{ slug: string }>;
}

export const revalidate = 300;

export async function generateStaticParams() {
  const slugs = await getAllProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) return { title: 'Proizvod nije pronađen' };

  const description = product.description
    ? product.description.length > 160
      ? product.description.substring(0, 157) + '...'
      : product.description
    : `Kupite ${product.name} u Apoteci DAR. Brza dostava širom Srbije.`;

  const url = `${BASE_URL}/proizvod/${slug}`;

  return {
    title: `${product.name} | Apoteka DAR`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${product.name} | Apoteka DAR`,
      description,
      url,
      type: 'website',
      images: product.image_url ? [{ url: product.image_url }] : [],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Resolve category labels for breadcrumbs
  const categoryLabels = await resolveCategoryLabelsForProduct(
    product.main_category,
    product.mid_category,
    product.sub_category
  );

  // Resolve manufacturer name
  let manufacturerName: string | null = null;
  if (product.manufacturer_id) {
    const manufacturer = await getManufacturerById(product.manufacturer_id);
    manufacturerName = manufacturer?.name ?? null;
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
      categoryLabels={categoryLabels}
      manufacturerName={manufacturerName}
    />
  );
}
