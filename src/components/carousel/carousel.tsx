import IProduct from '@/interfaces/product/product.interface';
import Carousel from "react-multi-carousel";
import { CarouselProductImage } from './carousel-image-loader';
import { CarouselButton, CarouselImgBox, CarouselManufacturer, CarouselManufacturerBox, CarouselTitle, CarouselTitleBox, StyledCarouselBox, StyledCarouselCard } from '@/styles/carousel/carousel';
import 'react-multi-carousel/lib/styles.css';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { Box, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';

const ProductCarousel = (props: any) => {

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
          <StyledCarouselBox>
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
                    {
                         props.products.map((product: IProduct) => (
                              <StyledCarouselCard key={product._id} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: isScreenToMedium ? '20px' : '80px' }}>
                                   <CarouselImgBox>
                                        <CarouselProductImage isOnDiscount={product.discount} src={product.imageURL} alt={product.name} height={isScreenToMedium ? 160 : 230} width={isScreenToMedium ? 125 : 200} />
                                   </CarouselImgBox>
                                   <Box>
                                        <CarouselManufacturerBox>
                                             <CarouselManufacturer sx={{ textTransform: 'capitalize', textAlign: 'center', fontSize: isScreenToMedium ? '1rem' : '1.3rem' }}>{product.manufacturer}</CarouselManufacturer>
                                        </CarouselManufacturerBox>
                                        <CarouselTitleBox>
                                             <Tooltip title={product.name} placement="top">
                                                  <CarouselTitle sx={{ textTransform: 'capitalize', fontSize: isScreenToMedium ? '.8rem' : '1rem' }}>{product.name}</CarouselTitle>
                                             </Tooltip>
                                        </CarouselTitleBox>
                                   </Box>
                                   <CarouselButton sx={{ marginBottom: '5px' }}>
                                        <Link href={`/proizvod/${decodeURIComponent(product._id)}`}>
                                             <Typography sx={{ textTransform: 'capitalize' }}>
                                                  Detalji
                                             </Typography>
                                        </Link>
                                   </CarouselButton>
                              </StyledCarouselCard>
                         ))
                    }
               </Carousel>
          </StyledCarouselBox >
     );
}

export default ProductCarousel;

