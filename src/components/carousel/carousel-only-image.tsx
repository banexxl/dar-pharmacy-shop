import Product from '@/interfaces/product/product.interface';
import Carousel from "react-multi-carousel";
import { Box, Typography, useMediaQuery } from '@mui/material';
import ProductCard from '@/components/product-card/product-card';
import 'react-multi-carousel/lib/styles.css';
import Link from 'next/link';
import { useTheme } from "@mui/system"
import { Colors } from '@/styles/theme';

type CarouselProps = {
     products?: Product[];
     manufacturers?: { url: string, name: string, value: string }[];
}
const CarouselOnlyImageProduct = (props: CarouselProps) => {

     const theme = useTheme();
     const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"))

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
          <Box className="StyledCarouselLogoBox" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginTop: '0px', paddingBottom: '30px' }}>
               <Typography
                    variant="h2"
                    align="center"
                    sx={{
                         marginTop: '20px',
                         fontSize: { xs: '2rem', md: '2.5rem' },
                         fontWeight: 700,
                         color: Colors.primary.main,
                    }}
               >
                    Deo asortimana
               </Typography>
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
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
               >
                    {props.products?.map((product: Product) => (
                         <Box className="CarouselOnlyImgBox" key={product.id} sx={{ px: 1 }}>
                              <ProductCard product={product} showDescription={false} showManufacturer={false} compact />
                         </Box>
                    ))}
               </Carousel>
          </Box>
     );
}

export default CarouselOnlyImageProduct


