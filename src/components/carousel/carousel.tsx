import IProduct from '@/interfaces/product/product.interface';
import { Button, Typography } from '@mui/material';
import Carousel from "react-multi-carousel";
import { ProductImage } from './carousel-image-loader';
import { StyledCarouselBox, StyledCarouselCard } from '@/styles/carousel/carousel';

const ProductCarousel = (props: any) => {

          const { products } = props

          const responsive = {
                    desktop: {
                              breakpoint: { max: 3000, min: 1024 },
                              items: 3,
                              partialVisibilityGutter: 40 // this is optional if you are not using partialVisible props
                    },
                    tablet: {
                              breakpoint: { max: 1024, min: 464 },
                              items: 2,
                              partialVisibilityGutter: 30 // this is optional if you are not using partialVisible props
                    },
                    mobile: {
                              breakpoint: { max: 464, min: 0 },
                              items: 1,
                              partialVisibilityGutter: 30 // this is optional if you are not using partialVisible props
                    }
          };

          const responsiveImageHero = {
                    desktop: {
                              breakpoint: { max: 3000, min: 1024 },
                              items: 4
                    },
                    tablet: {
                              breakpoint: { max: 1024, min: 464 },
                              items: 3
                    },
                    mobile: {
                              breakpoint: { max: 464, min: 0 },
                              items: 2
                    }
          };

          return (
                    <StyledCarouselBox >
                              <Carousel
                                        responsive={responsive}
                                        swipeable={true}
                                        draggable={false}
                                        infinite={true}
                                        autoPlay={true}
                                        autoPlaySpeed={3000}
                                        keyBoardControl={true}
                                        customTransition="transform 500ms ease-in-out"
                                        transitionDuration={500}
                                        containerClass="carousel-container"
                                        itemClass="carousel-item-padding-40-px"
                              >

                                        {
                                                  products.map((product: IProduct) => (
                                                            <StyledCarouselCard key={product._id}>
                                                                      <Typography>{product.name}</Typography>
                                                                      <ProductImage src={product.imageURL} alt={product.name} height={200} width={200} />
                                                                      <Button>Learn More</Button>
                                                            </StyledCarouselCard>
                                                  ))
                                        }
                              </Carousel>
                    </StyledCarouselBox>
          );
}

export default ProductCarousel;