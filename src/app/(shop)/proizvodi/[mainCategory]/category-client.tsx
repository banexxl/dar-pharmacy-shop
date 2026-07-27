'use client';

import { Container, Stack } from '@mui/material';
import ProductsFilter from '@/components/products-filter/products-filter';
import SearchBox from '@/components/search/search';

interface Props {
  products: any[];
  mainCategory: string;
}

export function CategoryPageClient({ products, mainCategory }: Props) {
  return (
    <Container disableGutters maxWidth="lg" sx={{ background: '#fff' }}>
      <Stack>
        <SearchBox />
        <ProductsFilter filterObject={products} routerQuery={{ mainCategory }} />
      </Stack>
    </Container>
  );
}
