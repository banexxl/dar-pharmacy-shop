'use client';

import Product from '@/interfaces/product/product.interface';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import ProductCard from '@/components/product-card/product-card';
import { Colors } from '@/styles/theme';

interface RelatedProductsCarouselProps {
  products: Product[];
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 3,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
    partialVisibilityGutter: 30,
  },
};

export default function RelatedProductsCarousel({ products }: RelatedProductsCarouselProps) {
  const theme = useTheme();

  if (!products || products.length === 0) return null;

  return (
    <Box sx={{ mt: 6, mb: 4 }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          color: Colors.primary.main,
          mb: 3,
          textAlign: 'center',
        }}
      >
        Možda Vam se svidi
      </Typography>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={false}
        infinite={products.length > 4}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        transitionDuration={500}
      >
        {products.map((product: Product) => (
          <Box key={product.id} sx={{ px: 1 }}>
            <ProductCard product={product} showDescription={false} compact />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}
