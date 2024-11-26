import * as React from 'react';
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Colors } from '@/styles/theme';
import { Alert, Box } from '@mui/material';
import { PopularProductAddToCart } from '@/styles/product/single-product';
import { useState } from 'react';
import { addToCart } from '@/store/cart/cart.slice';
import { useDispatch } from 'react-redux';
import IProduct from '@/interfaces/product/product.interface';

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
     product: IProduct
}

export default function ProductCard(props: ProductCardProps) {

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
          <Box sx={{ maxWidth: 800, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: { md: '15%', sm: '0' } }}>
               <CardHeader
                    avatar={
                         <Avatar sx={{ bgcolor: Colors.primary.lighter }} aria-label="recipe">
                              CC
                         </Avatar>
                    }
                    title={props.product.name}
                    subheader={props.product.promotionText}
               />
               <CardMedia
                    component="img"
                    height="400"
                    image={props.product.imageURL}
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
                    {
                         props.product.availableStock > 0 ? (
                              <PopularProductAddToCart loading={loading} onClick={() => {
                                   callCartAlert()
                                   dispatch(addToCart(props.product))
                              }}
                              >
                                   Dodaj u korpu
                              </PopularProductAddToCart>
                         ) : (
                              <PopularProductAddToCart loading={loading} onClick={() => {
                                   callCartAlert()
                                   dispatch(addToCart(props.product))
                              }}
                                   sx={{ backgroundColor: Colors.dim_grey }}
                                   disabled
                              >
                                   Nema na stanju
                              </PopularProductAddToCart>
                         )
                    }
                    <ExpandMore
                         expand={expanded}
                         onClick={handleExpandClick}
                         aria-expanded={expanded}
                         aria-label="show more"
                    >
                         <ExpandMoreIcon />
                    </ExpandMore>
               </CardActions>
               <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                         <Typography paragraph>Opis</Typography>
                         <Typography paragraph>
                              {props.product.description}
                         </Typography>
                    </CardContent>
               </Collapse>

          </Box>
     );
}