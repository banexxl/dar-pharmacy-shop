'use client';

import ProductDetails from '@/components/product-details/product-details';
import SearchBox from '@/components/search/search';
import RelatedProductsCarousel from '@/components/carousel/carousel-related-products';
import { Container, Stack } from '@mui/material';

interface Props {
  product: any;
  relatedProducts?: any[];
}

export function ProductDetailClient({ product, relatedProducts = [] }: Props) {
  return (
    <Container maxWidth="xl" sx={{ background: '#fff' }}>
      <Stack>
        <ProductDetails {...product} />
        <RelatedProductsCarousel products={relatedProducts} />
        <SearchBox />
      </Stack>
    </Container>
  );
}
