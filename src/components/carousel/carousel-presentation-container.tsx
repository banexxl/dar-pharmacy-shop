import Carousel from "react-multi-carousel";
import { StyledCarouselBox } from '@/styles/carousel/carousel';
import 'react-multi-carousel/lib/styles.css';
import { Alert, Avatar, Box, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, IconButtonProps, styled, Typography, useMediaQuery, useTheme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { PopularProductAddToCart } from "@/styles/product/single-product";
import IProduct from "@/interfaces/product/product.interface";
import { Colors } from "@/styles/theme";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart } from "@/store/cart/cart.slice";


interface ExpandMoreProps extends IconButtonProps {
     expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
     const { expand, ...other } = props;
     return <IconButton {...other} />;
})(({ theme, expand }) => ({
     transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
     marginLeft: 'auto',
     transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
     }),
}));

type ProductCardProps = {
     products: IProduct[]
}

const CarouselPresentationContainer = (props: ProductCardProps) => {

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

     const [expanded, setExpanded] = useState(false);

     const handleExpandClick = () => {
          setExpanded(!expanded);
     };
     const dispatch = useDispatch();
     const [loading, setLoading] = useState(false)
     const [addedToCartAlert, setAddedToCartAlert] = useState(false)

     const callCartAlert = () => {
          setAddedToCartAlert(true)
          setLoading(true)
          const timeId = setTimeout(() => {
               // After X seconds set the show value to false
               setLoading(false)
               setAddedToCartAlert(false)
          }, 1500)

          return () => {
               clearTimeout(timeId)
          }
     }

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
                              <Box key={product._id} sx={{ maxWidth: 300, height: 600, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', paddingLeft: { md: '15%', sm: '0' } }}>
                                   <CardHeader
                                        title={product.name}
                                        subheader={product.promotionText}
                                   />
                                   <CardMedia
                                        component="img"
                                        height="250"
                                        image={product.imageURL}
                                        alt="Paella dish"
                                   />
                                   {
                                        addedToCartAlert && (
                                             <Alert variant="filled" severity="success" sx={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translate(-50%, 300px)', width: '250px', zIndex: '1000' }}>
                                                  Dodato u korpu
                                             </Alert>
                                        )
                                   }
                                   <CardActions disableSpacing>
                                        <PopularProductAddToCart loading={loading} onClick={() => {
                                             callCartAlert()
                                             dispatch(addToCart(product))
                                        }}
                                        >
                                             Dodaj u korpu
                                        </PopularProductAddToCart>
                                        {/* <ExpandMore
                                             expand={expanded}
                                             onClick={handleExpandClick}
                                             aria-expanded={expanded}
                                             aria-label="show more"
                                        >
                                             <ExpandMoreIcon />
                                        </ExpandMore> */}
                                   </CardActions>
                                   {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
                                        <CardContent>
                                             <Typography paragraph>Opis</Typography>
                                             <Typography paragraph>
                                                  {product.description}
                                             </Typography>
                                        </CardContent>
                                   </Collapse> */}

                              </Box>
                         ))
                    }

               </Carousel>
          </StyledCarouselBox >
     );
}

export default CarouselPresentationContainer;

