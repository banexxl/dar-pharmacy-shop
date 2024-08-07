import Carousel from "react-multi-carousel";
import { StyledCarouselLogoBox } from '@/styles/carousel/carousel';
import 'react-multi-carousel/lib/styles.css';

import BlogCard from '../blog-card/blog-card';

const CarouselBlog = (props: any) => {

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
               >
                    {/* {
                                                  props.manufacturers.map((logo: any) => ( */}
                    <BlogCard />
                    {/* ))
                                        } */}
               </Carousel>
          </StyledCarouselLogoBox >
     );
}

export default CarouselBlog


