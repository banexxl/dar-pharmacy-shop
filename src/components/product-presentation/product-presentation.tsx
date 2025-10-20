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
import { Alert, Box, Button } from '@mui/material';
import { useState } from 'react';
import { addToCart } from '@/store/cart/cart.slice';
import { useDispatch } from 'react-redux';
import IProduct from '@/interfaces/product/product.interface';
import toast from 'react-hot-toast';

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
          toast.success("Proizvod je dodat u korpu", {
               position: "top-center",
               duration: 1500
          })
     }

     return (
          <Box sx={{ maxWidth: 800, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
               <CardActions disableSpacing>
                    {
                         props.product.availableStock > 0 ? (
                              <Button className="ProductAddToCart" onClick={() => {
                                   callCartAlert()
                                   dispatch(addToCart(props.product))
                              }}
                              >
                                   Dodaj u korpu
                              </Button>
                         ) : (
                              <Button className="ProductAddToCart" onClick={() => {
                                   callCartAlert()
                                   dispatch(addToCart(props.product))
                              }}
                                   sx={{ backgroundColor: Colors.dim_grey }}
                                   disabled
                              >
                                   Nema na stanju
                              </Button>
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