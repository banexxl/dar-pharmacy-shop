'use client';

import ProductDetails from '@/components/product-details/product-details';
import SearchBox from '@/components/search/search';
import RelatedProductsCarousel from '@/components/carousel/carousel-related-products';
import { Container, Stack } from '@mui/material';

interface Props {
  product: any;
  relatedProducts?: any[];
  BASE_URL: string;
}

export function ProductDetailClient({ product, relatedProducts = [], BASE_URL }: Props) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image_url ? [product.image_url] : [],
    sku: product.code,
    brand: {
      "@type": "Brand",
      name: product.manufacturer,
    },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "RSD",
      availability:
        product.available_stock > 0
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
      url: `${BASE_URL}/proizvod/${product.slug}`,
    },
  };

  return (
    <Container maxWidth="xl" sx={{ background: '#fff' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <Stack>
        <ProductDetails {...product} />
        <RelatedProductsCarousel products={relatedProducts} />
        <SearchBox />
      </Stack>
    </Container>
  );
}
