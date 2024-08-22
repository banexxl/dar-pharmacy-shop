import { ProductImage, ProductImageBox } from '@/styles/productdetails';
import { ProductDetailInfoWrapper, ProductDetailWrapper } from '@/styles/productdetails'
import { Colors } from '@/styles/theme';
import { Alert, Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import InstagramIcon from "@mui/icons-material/Instagram";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IProduct from '@/interfaces/product/product.interface';
import React, { useState } from 'react'
import Cart from "../cart/cart";
import { addToCart } from '@/store/cart/cart.slice'
import { useDispatch } from 'react-redux';
import { addToWishList, removeFromWishList } from '@/store/wishlist/wishlist.slice';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import ProductMeta from '../products/products-meta';
import useDialogModal from '@/hooks/useDialogModal';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MediaCarousel from '../carousel/media-carousel';
import Image from 'next/image';

function ProductDetails(product: IProduct) {

     const theme = useTheme();
     const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"));
     const [CartDialog, showCartDialog, closeCartDialog] = useDialogModal(Cart);
     const dispatch = useDispatch();
     const [addedToCartAlert, setAddedToCartAlert] = useState(false);
     const [addedToWishlistAlert, setAddedToWishlistAlert] = useState(false);
     const [removedFromWishlistAlert, setRemovedFromWishlistAlert] = useState(false);
     const [isCarouselOpen, setCarouselOpen] = useState(false);
     const [carouselIndex, setCarouselIndex] = useState(0);

     const mediaItems = product.mediaURLs?.map((url) => ({
          type: 'image' as const,
          src: url,
          alt: product.name,
     }));

     const handleOpenCarousel = (index: number) => {
          setCarouselIndex(index);
          setCarouselOpen(true);
     };

     const handleCloseCarousel = () => {
          setCarouselOpen(false);
     };

     const callCartAlert = () => {
          setAddedToCartAlert(true);
          const timeId = setTimeout(() => {
               setAddedToCartAlert(false);
          }, 1500);

          return () => {
               clearTimeout(timeId);
          }
     }

     const callWishlistAlert = () => {
          setAddedToWishlistAlert(true);
          const timeId = setTimeout(() => {
               setAddedToWishlistAlert(false);
          }, 1500);

          return () => {
               clearTimeout(timeId);
          }
     }

     const callRemovedFromWishlistAlert = () => {
          setRemovedFromWishlistAlert(true);
          const timeId = setTimeout(() => {
               setRemovedFromWishlistAlert(false);
          }, 1500);

          return () => {
               clearTimeout(timeId);
          }
     }

     const localStorage: any = useLocalStorage('persist:root', {});
     const localStorageReducers: any = localStorage[0];
     const localStorageWishList: IProduct[] = JSON.parse(localStorageReducers.wishListReducer);

     const wishListProductID = localStorageWishList.find((el: IProduct) => {
          return el._id == product._id;
     });

     return (
          <ProductDetailWrapper sx={{ marginTop: '100px' }} display={"flex"} flexDirection={isScreenToMedium ? "column" : "row"}>
               <ProductImageBox
                    onClick={() => handleOpenCarousel(0)} // Open carousel on image click
                    sx={{ cursor: 'pointer', }}>
                    <Image
                         width={isScreenToMedium ? 300 : 500}
                         height={isScreenToMedium ? 300 : 500}
                         src={product.imageURL} alt={''} />
               </ProductImageBox>
               <ProductDetailInfoWrapper>
                    <ProductMeta product={product} sx={{ lineHeight: 2 }} variant="h4" />
                    <Typography textAlign='center'>Šifra: {product._id.slice(-8)}</Typography>
                    <Typography textAlign='center'>Dostupno: {product.availableStock} na stanju</Typography>
                    <Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                         Opis
                    </Typography>
                    <Typography variant="h5" sx={{ textAlign: 'justify', textAlignLast: 'center' }}>
                         {product.description}
                    </Typography>
                    <Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                         Instrukcije
                    </Typography>
                    <Typography variant="h5" sx={{ textAlign: 'justify', textAlignLast: 'center' }}>
                         {product.instructions}
                    </Typography>
                    <Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                         Upozorenje
                    </Typography >
                    <Typography variant="h5" sx={{ textAlign: 'justify', textAlignLast: 'center' }}>
                         {product.warning}
                    </Typography>
                    <Box
                         sx={{ mt: 4 }}
                         display="flex"
                         alignItems="center"
                         justifyContent="space-evenly"
                    >
                         <Button onClick={() => { dispatch(addToCart(product)); callCartAlert(); }}>Dodaj u korpu</Button>
                         <Button onClick={showCartDialog} startIcon={<ShoppingCartIcon />} />
                    </Box>
                    <Box
                         display="flex"
                         alignItems="center"
                         sx={{ mt: 4, color: Colors.primary.light }}
                    >
                         {
                              wishListProductID === null || wishListProductID === undefined ?
                                   <FavoriteBorderIcon sx={{ mr: 1, cursor: 'pointer', ':hover': { filter: `drop-shadow(3px 5px 2px ${Colors.primary.lighter})` } }} onClick={() => { dispatch(addToWishList(product)); callWishlistAlert(); }} />
                                   :
                                   <FavoriteIcon sx={{ mr: 1, cursor: 'pointer', ':hover': { filter: `drop-shadow(3px 5px 2px ${Colors.primary.lighter})` } }} onClick={() => { dispatch(removeFromWishList(product)); callRemovedFromWishlistAlert(); }} />
                         }
                         Dodaj u listu želja
                    </Box>
                    <Box
                         sx={{
                              mt: 4,
                              color: Colors.dove_gray,
                         }}
                    >
                         <InstagramIcon sx={{ pl: 2, cursor: 'pointer' }} onClick={() => window.open('https://instagram.com/apoteka_dar')} />
                    </Box>
               </ProductDetailInfoWrapper>
               {addedToCartAlert && (
                    <Alert variant="filled" severity="success" sx={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translate(-50%)', width: '250px', zIndex: '1000' }}>
                         Dodato u korpu
                    </Alert>
               )}
               {addedToWishlistAlert && (
                    <Alert variant="filled" severity="success" sx={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translate(-50%)', width: '250px', zIndex: '1000' }}>
                         Dodato u listu želja
                    </Alert>
               )}
               {removedFromWishlistAlert && (
                    <Alert variant="filled" severity="success" sx={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', width: '250px', zIndex: '1000' }}>
                         Uklonjeno iz liste želja
                    </Alert>
               )}
               <CartDialog />
               <MediaCarousel
                    media={mediaItems}
                    open={isCarouselOpen}
                    initialIndex={carouselIndex}
                    onClose={handleCloseCarousel}
               />
          </ProductDetailWrapper>
     )
}

export default ProductDetails;
