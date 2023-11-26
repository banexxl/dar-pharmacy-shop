import IProduct from '@/interfaces/product/product.interface';
import Carousel from "react-multi-carousel";
import { CarouselProductImage } from './carousel-image-loader';
import { CarouselButton, CarouselImgBox, CarouselManufacturer, CarouselManufacturerBox, CarouselTitle, CarouselTitleBox, StyledCarouselBox, StyledCarouselCard } from '@/styles/carousel/carousel';
import 'react-multi-carousel/lib/styles.css';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const ProductCarousel = (props: any) => {



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
                                                            <StyledCarouselCard key={product._id} >
                                                                      <CarouselImgBox>
                                                                                <CarouselProductImage isOnDiscount={product.discount} src={product.imageURL} alt={product.name} height={200} width={200} />
                                                                      </CarouselImgBox>
                                                                      <CarouselManufacturerBox>
                                                                                <CarouselManufacturer>{product.manufacturer}</CarouselManufacturer>
                                                                      </CarouselManufacturerBox>
                                                                      <CarouselTitleBox>
                                                                                <CarouselTitle>{product.name}</CarouselTitle>
                                                                      </CarouselTitleBox>
                                                                      <CarouselButton >
                                                                                <Link href={`/proizvod/${decodeURIComponent(product._id)}`}>
                                                                                          Detalji
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

