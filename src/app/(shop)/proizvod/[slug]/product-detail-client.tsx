'use client';

import ProductDetails from '@/components/product-details/product-details';
import SearchBox from '@/components/search/search';
import { Container, Stack } from '@mui/material';

interface Props {
  product: any;
}

export function ProductDetailClient({ product }: Props) {
  return (
    <Container maxWidth="xl" sx={{ background: '#fff' }}>
      <Stack>
        <ProductDetails
          discount={product.discount}
          id={product.id}
          available_stock={product.available_stock}
          main_category={product.main_category}
          description={product.description}
          image_url={product.image_url}
          ingredients={product.ingredients}
          instructions={product.instructions}
          name={product.name}
          price={product.price}
          quantity={product.quantity}
          warning={product.warning}
          manufacturer={product.manufacturer}
          quantity_unit={product.quantity_unit}
          media_urls={product.media_urls}
          discount_amount={product.discount_amount}
          slug={product.slug}
          promotion_text={product.promotion_text}
          mid_category={null}
          sub_category={null}
          manufacturer_id={null}
          new_arrival={false}
          best_seller={false}
          is_active={false}
          promoting={false}
          display_on_home={false}
          created_at={''}
          updated_at={''} />
        <SearchBox />
      </Stack>
    </Container>
  );
}
