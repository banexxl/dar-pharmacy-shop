'use client';

import ProductDetails from '@/components/product-details/product-details';
import SearchBox from '@/components/search/search';
import RelatedProductsCarousel from '@/components/carousel/carousel-related-products';
import { Container, Stack } from '@mui/material';
import { Breadcrumbs, BreadcrumbItem } from '@/components/seo/breadcrumbs';
import { JsonLd } from '@/components/seo/json-ld';

interface CategoryLabels {
  mainLabel: string | null;
  midLabel: string | null;
  subLabel: string | null;
}

interface Props {
  product: any;
  relatedProducts?: any[];
  categoryLabels?: CategoryLabels;
  manufacturerName?: string | null;
}

const BASE_URL = 'https://www.apoteka-dar.rs';

export function ProductDetailClient({
  product,
  relatedProducts = [],
  categoryLabels,
  manufacturerName,
}: Props) {
  // Build breadcrumbs
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Početna', href: '/' },
  ];

  if (categoryLabels?.mainLabel && product.main_category) {
    breadcrumbItems.push({
      label: categoryLabels.mainLabel,
      href: `/proizvodi/${product.main_category}`,
    });
  }

  if (categoryLabels?.midLabel && product.mid_category) {
    breadcrumbItems.push({
      label: categoryLabels.midLabel,
      href: `/proizvodi/${product.main_category}/${product.mid_category}`,
    });
  }

  if (categoryLabels?.subLabel && product.sub_category) {
    breadcrumbItems.push({
      label: categoryLabels.subLabel,
      href: `/proizvodi/${product.main_category}/${product.mid_category}/${product.sub_category}`,
    });
  }

  breadcrumbItems.push({ label: product.name });

  // Build Product JSON-LD
  const availability = product.available_stock > 0
    ? 'https://schema.org/InStock'
    : 'https://schema.org/OutOfStock';

  const finalPrice = product.discount && product.discount_amount
    ? product.price - product.discount_amount
    : product.price;

  const categoryPath = [
    categoryLabels?.mainLabel,
    categoryLabels?.midLabel,
    categoryLabels?.subLabel,
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
    <Container maxWidth="xl" sx={{ background: '#fff' }}>
      <JsonLd data={productJsonLd} />
      <Stack component="main">
        <Breadcrumbs items={breadcrumbItems} />
        <ProductDetails {...product} />
        <RelatedProductsCarousel products={relatedProducts} />
        <SearchBox />
      </Stack>
    </Container>
  );
}
