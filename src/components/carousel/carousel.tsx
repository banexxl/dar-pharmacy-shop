import IProduct from '@/interfaces/product/product.interface';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import ProductCard from '@/components/product-card/product-card';

const ProductCarousel = (props: any) => {

     const theme = useTheme();
     const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"))
     // Switched to generic ProductCard for each item

     const responsive = {
          desktop: {
               breakpoint: { max: 3000, min: 1024 },
               items: 4,
               partialVisibilityGutter: 40 // this is optional if you are not using partialVisible props
          },
          tablet: {
               breakpoint: { max: 1024, min: 600 },
               items: 3,
               partialVisibilityGutter: 30 // this is optional if you are not using partialVisible props
          },
          mobile: {
               breakpoint: { max: 600, min: 0 },
               items: 2,
               partialVisibilityGutter: 30 // this is optional if you are not using partialVisible props
          }
     };

     return (
          <Box className="StyledCarouselBox">
               <Carousel
                    responsive={responsive}
                    swipeable={true}
                    draggable={false}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    customTransition=""
                    transitionDuration={500}
                    containerClass=""
                    itemClass=""
               >
                    {props.products.map((product: IProduct) => (
                         <Box key={product._id} sx={{ px: 1 }}>
                              <ProductCard product={product} showDescription={false} compact />
                         </Box>
                    ))}
               </Carousel>
          </Box>
     );
}

export default ProductCarousel;

