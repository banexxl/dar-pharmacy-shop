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

  // Build Product JSON-LD (server-side, no client warning)
  const finalPrice = product.discount && product.discount_amount
    ? product.price - product.discount_amount
    : product.price;

  const availability = product.available_stock > 0
    ? 'https://schema.org/InStock'
    : 'https://schema.org/OutOfStock';

  const categoryPath = [
    categoryLabels.mainLabel,
    categoryLabels.midLabel,
    categoryLabels.subLabel,
  ].filter(Boolean).join(' > ');

  const productJsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description || undefined,
    image: product.image_url || undefined,
    url: `${BASE_URL}/proizvod/${product.slug}`,
    category: categoryPath || undefined,
    offers: {
      '@type': 'Offer',
      price: finalPrice.toFixed(2),
      priceCurrency: 'RSD',
      availability,
      url: `${BASE_URL}/proizvod/${product.slug}`,
    },
  };

  if (manufacturerName) {
    productJsonLd.brand = {
      '@type': 'Brand',
      name: manufacturerName,
    };
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <ProductDetailClient
        product={JSON.parse(JSON.stringify(product))}
        relatedProducts={JSON.parse(JSON.stringify(relatedProducts))}
        categoryLabels={categoryLabels}
        manufacturerName={manufacturerName}
      />
    </>
  );
}
