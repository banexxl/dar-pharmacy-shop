import IProduct from '@/interfaces/product/product.interface';
import Carousel from "react-multi-carousel";
import { CarouselManufacturerImage, CarouselProductImage } from './carousel-image-loader';
import { CarouselLogoImgBox, CarouselTitle, StyledCarouselLogoBox } from '@/styles/carousel/carousel';
import 'react-multi-carousel/lib/styles.css';
import Link from 'next/link';
import { useTheme } from "@mui/system"
import { Tooltip, Typography, useMediaQuery } from '@mui/material';
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
          <StyledCarouselLogoBox >
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
                                   <CarouselLogoImgBox key={Math.random()}>
                                        <Link href={`/${logo.value}`}>
                                             <CarouselManufacturerImage src={logo.url} alt={'LOGO'} height={200} width={200} isOnDiscount={false} />
                                        </Link>
                                   </CarouselLogoImgBox>
                              ))
                              :
                              props.products?.map((product: IProduct) => (
                                   <CarouselLogoImgBox key={product._id} sx={{ marginTop: '60px', marginBottom: '50px', height: isScreenToMedium ? '200px' : '250px', position: 'relative' }}>
                                        <Link href={`/proizvod/${product._id}`}>
                                             <CarouselProductImage src={product.imageURL} alt={product.name} height={isScreenToMedium ? 200 : 250} width={300} isOnDiscount={product.discount} />
                                        </Link>
                                        <Tooltip title={product.name} placement="top">
                                             <CarouselTitle sx={{
                                                  position: 'absolute',
                                                  justifyContent: 'center',
                                                  alignItems: 'center',
                                                  bottom: '50px',
                                                  left: '10px',
                                                  padding: '5px',
                                                  color: Colors.primary.darker
                                             }}>
                                                  {product.name}
                                             </CarouselTitle>
                                        </Tooltip>
                                   </CarouselLogoImgBox>
                              ))
                    }
               </Carousel>
          </StyledCarouselLogoBox >
     );
}

export default CarouselLogo


