import IProduct from '@/interfaces/product/product.interface';
import Carousel from "react-multi-carousel";
import { CarouselManufacturerImage } from './carousel-image-loader';
import { Box, Tooltip, Typography, useMediaQuery } from '@mui/material';
import ProductCard from '@/components/product-card/product-card';
import 'react-multi-carousel/lib/styles.css';
import Link from 'next/link';
import { useTheme } from "@mui/system"
import { Colors } from '@/styles/theme';

type CarouselProps = {
     products?: IProduct[];
     manufacturers?: { url: string, name: string, value: string }[];
}
const CarouselLogo = (props: CarouselProps) => {

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
          <Box className="StyledCarouselLogoBox">
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
                    {
                         props.manufacturers ?
                              props.manufacturers.map((logo: { url: string, name: string, value: string }) => (
                                   <Box className="CarouselLogoImgBox" key={Math.random()}>
                                        <Link rel='canonical' href={`/proizvodi-proizvodjac-kategorija/${logo.value}`}>
                                             <CarouselManufacturerImage src={logo.url} alt={'LOGO'} height={200} width={150} isOnDiscount={false} />
                                        </Link>
                                   </Box>
                              ))
                              :
                              props.products?.map((product: IProduct) => (
                                   <Box className="CarouselImgBox" key={product._id} sx={{ px: 1 }}>
                                        <ProductCard product={product} showDescription={false} compact />
                                   </Box>
                              ))
                    }
               </Carousel>
          </Box>
     );
}

export default CarouselLogo


