import IProduct from '@/interfaces/product/product.interface';
import Carousel from "react-multi-carousel";
import { CarouselManufacturer, CarouselManufacturerBox, CarouselTitle, CarouselTitleBox, StyledCarouselBox, StyledCarouselCard } from '@/styles/carousel/carousel';
import 'react-multi-carousel/lib/styles.css';
import Link from 'next/link';
import { Box, Button, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import { ProductAddToCart } from '@/styles/product/single-product';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/cart/cart.slice';
import toast from 'react-hot-toast';

const ProductCarousel = (props: any) => {

     const theme = useTheme();
     const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"))
     const [addedToCartAlert, setAddedToCartAlert] = useState(false)
     const dispatch = useDispatch();
     const [loading, setLoading] = useState(false)
     const calculateDiscountedPrice = (oldPrice: number, discount: number) => {
          return oldPrice - (oldPrice * (discount / 100))
     };

     const callCartAlert = () => {
          toast.success("Proizvod je dodat u korpu", {
               position: "top-center",
               duration: 1500
          })
     }

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
                                   <Box
                                        sx={{
                                             position: 'relative', // Make the Box container a positioning context
                                             display: 'flex',
                                             justifyContent: 'center',
                                             alignItems: 'center', // Center the content vertically
                                        }}
                                   >
                                        <Link href={`/proizvod/${product._id}`}>
                                             <Image
                                                  style={{ borderRadius: '10px' }}
                                                  src={product.imageURL}
                                                  alt={product.name}
                                                  height={isScreenToMedium ? 160 : 230}
                                                  width={isScreenToMedium ? 125 : 200}
                                             />
                                        </Link>
                                   </Box>
                                   <Box>
                                        <CarouselManufacturerBox>
                                             <CarouselManufacturer sx={{ textTransform: 'capitalize', textAlign: 'center', fontSize: isScreenToMedium ? '1rem' : '1.3rem' }}>{product.manufacturer}</CarouselManufacturer>
                                        </CarouselManufacturerBox>
                                        <CarouselTitleBox>
                                             {
                                                  product.discount && product.discountAmount && (
                                                       <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                                            {/* Old Price with Strikethrough */}
                                                            {product.price && (
                                                                 <Typography
                                                                      fontSize={'.8rem'}
                                                                      color="textSecondary"
                                                                      sx={{ textDecoration: 'line-through' }}
                                                                 >
                                                                      {product.price.toFixed(2)}
                                                                 </Typography>
                                                            )}

                                                            {/* New Price after Discount */}
                                                            {product.price && product.discount && (
                                                                 <Typography variant="body1" color="primary" sx={{ fontWeight: 'bold' }}>
                                                                      {calculateDiscountedPrice(product.price, product.discountAmount!).toFixed(2)}
                                                                 </Typography>
                                                            )}
                                                       </Box>
                                                  )
                                             }

                                             <Tooltip title={product.name} placement="top">
                                                  <CarouselTitle sx={{ fontSize: isScreenToMedium ? '.8rem' : '1rem', textAlign: 'center' }}>{product.name}</CarouselTitle>
                                             </Tooltip>
                                        </CarouselTitleBox>
                                   </Box>
                                   {
                                        product.availableStock > 0 ? (
                                             <ProductAddToCart
                                                  show={true}
                                                  onClick={() => {
                                                       callCartAlert();
                                                       dispatch(addToCart(product));
                                                  }} theme={theme}>
                                                  Dodaj u korpu
                                             </ProductAddToCart>
                                        )
                                             :
                                             <ProductAddToCart
                                                  show={true}
                                                  disabled
                                                  theme={theme}>
                                                  Nema na stanju
                                             </ProductAddToCart>
                                   }

                              </StyledCarouselCard>
                         ))
                    }
               </Carousel>
          </StyledCarouselBox >
     );
}

export default ProductCarousel;

