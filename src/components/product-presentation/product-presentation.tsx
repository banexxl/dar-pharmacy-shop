import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Colors } from '@/styles/theme';
import { useTranslation } from 'next-i18next';
import { Alert, Box } from '@mui/material';
import { PopularProductAddToCart, ProductAddToCart } from '@/styles/product/single-product';
import { useState } from 'react';
import { addToCart } from '@/store/cart/cart.slice';
import { useDispatch } from 'react-redux';

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

export default function ProductCard() {
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
                    title={"Crux Kolagen"}
                    subheader={"Hidrolizovani govedji kolagen (solugel), 10g u dnevnoj dozi"}
               />
               <CardMedia
                    component="img"
                    height="400"
                    image={"https://i.ibb.co/KFKjjnb/Crux-kutija-2.png"}
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
                         dispatch(addToCart({
                              "_id": "649bb58b8778015860236f6d",
                              "name": "Crux kolagen",
                              "description": "Crux Pure kolagen u prahu za zglobove, kosu, nokte, kožu. Bez aditiva, šećera, dodataka.Prednosti Crux kolagena:mlada i hidrirana koža, sjajna, duga kosa, zdravi nokti,jače kosti, hrskavica, zglobovi, rad creva, kvalitetniji san.",
                              "mainCategory": "apoteka",
                              "midCategory": "kosa-koza-nokti",
                              "subCategory": "",
                              "ingredients": "hidrolizovani govedji kolagen (solugel), 10g u dnevnoj dozi",
                              "instructions": "1 kesica dnevno. Sadrzaj kesice(10g) rastvoriti u casi toplog ili hladnog pica ili u porciji obroka. Za postizanje najboljih rezultata koristiti svakodnevno.",
                              "quantity": "300g",
                              "warning": "/",
                              "imageURL": "https://i.ibb.co/KFKjjnb/Crux-kutija-2.png",
                              "price": 3590,
                              "availableStock": 44,
                              "manufacturer": "Bio Solutions",
                              "newArrival": false,
                              "bestSeller": false,
                              "discount": true,
                              "discountamount": 5
                         }))
                    }}
                    >
                         Dodaj u korpu
                    </PopularProductAddToCart>
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
                              Crux Pure kolagen u prahu za zglobove, kosu, nokte, kožu. Bez aditiva, šećera, dodataka. Prednosti Crux kolagena:mlada i hidrirana koža, sjajna, duga kosa, zdravi nokti,jače kosti, hrskavica, zglobovi, rad creva, kvalitetniji san.
                         </Typography>
                    </CardContent>
               </Collapse>

          </Box>
     );
}
