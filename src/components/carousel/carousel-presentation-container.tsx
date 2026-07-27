import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Product from '@/interfaces/product/product.interface';
import ProductCard from '@/components/product-card/product-card';

type Props = { products: Product[] };

const CarouselPresentationContainer = ({ products }: Props) => {
  const theme = useTheme();
  const isScreenToMedium = useMediaQuery(theme.breakpoints.down('md'));

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, partialVisibilityGutter: 40 },
    tablet: { breakpoint: { max: 1024, min: 600 }, items: 2, partialVisibilityGutter: 30 },
    mobile: { breakpoint: { max: 600, min: 0 }, items: 1, partialVisibilityGutter: 30 },
  };

  return (
    <Box className="StyledCarouselBox">
      <Carousel
        responsive={responsive}
        swipeable
        draggable={false}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        keyBoardControl
        transitionDuration={500}
      >
        {products.map((product) => (
          <Box key={product.id} sx={{ px: 1 }}>
            <ProductCard product={product} showDescription={false} compact />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default CarouselPresentationContainer;

