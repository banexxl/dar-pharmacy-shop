import IProduct from '@/interfaces/product/product.interface';
import Carousel from "react-multi-carousel";
import { CarouselProductImage } from './carousel-image-loader';
import { Box, Typography, useMediaQuery } from '@mui/material';
import 'react-multi-carousel/lib/styles.css';
import Link from 'next/link';
import { useTheme } from "@mui/system"
import { Colors } from '@/styles/theme';

type CarouselProps = {
     products?: IProduct[];
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
               <Typography sx={{ marginTop: '20px', fontSize: isScreenToMedium ? '1.8rem' : '2rem', fontWeight: 'bold' }}>
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
                    {
                         props.products?.map((product: IProduct) => (
                              <Box className="CarouselOnlyImgBox" key={product._id} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
                                   <Link rel='canonical' href={`/proizvod/${product.slug}`}>
                                        <CarouselProductImage src={product.imageURL} alt={product.name} height={isScreenToMedium ? 120 : 160} width={isScreenToMedium ? 100 : 150} isOnDiscount={product.discount} />
                                   </Link>
                                   <Typography className="CarouselTitle" sx={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        color: Colors.primary.main
                                   }}>
                                        <Typography component={'span'} sx={{ fontSize: isScreenToMedium ? '1rem' : '1rem', width: '150px' }}>
                                             {product.name}
                                        </Typography>
                                   </Typography>

                              </Box>
                         ))
                    }
               </Carousel>
          </Box>
     );
}

export default CarouselOnlyImageProduct


