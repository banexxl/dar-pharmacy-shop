import { ProductImage, ProductImageBox } from '@/styles/productdetails';
import { ProductDetailInfoWrapper, ProductDetailWrapper } from '@/styles/productdetails'
import { Colors } from '@/styles/theme';
import ShareIcon from "@mui/icons-material/Share";
import { Alert, Box, Button, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import InstagramIcon from "@mui/icons-material/Instagram";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IProduct from '@/interfaces/product/product.interface';
import React, { useState } from 'react'
import Cart from "../cart/cart";
import { addToCart } from '@/store/cart/cart.slice'
import { useDispatch, useSelector } from 'react-redux';
import { addToWishList, removeFromWishList } from '@/store/wishlist/wishlist.slice';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import ProductMeta from '../products/products-meta';
import useDialogModal from '@/hooks/useDialogModal';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MediaCarousel from '../carousel/media-carousel';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { wishListSelectorState } from '@/store/wishlist/wishlist-selector';
import { SocialShare } from '../social/socials-share';

function ProductDetails(product: IProduct) {

     const theme = useTheme();
     const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"));
     const [CartDialog, showCartDialog, closeCartDialog] = useDialogModal(Cart);
     const dispatch = useDispatch();
     const wishListState = useSelector(wishListSelectorState)
     const [isCarouselOpen, setCarouselOpen] = useState(false);
     const [carouselIndex, setCarouselIndex] = useState(0);
     const [showShareOptions, setShowShareOptions] = useState(false);

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
          toast.success("Proizvod je dodat u korpu", {
               position: "top-center",
               duration: 1500
          })
     }

     const handleAddToWishlist = () => {
          dispatch(addToWishList(product));
          callWishlistAlert();
          // triggerIconBlink(); // Blink effect on click
     };

     const handleRemoveFromWishlist = () => {
          dispatch(removeFromWishList(product));
          callRemovedFromWishlistAlert();
          // triggerIconBlink(); // Blink effect on click
     };

     const callWishlistAlert = () => {
          toast.success("Proizvod je dodat u listu zelja", {
               position: "top-center",
               duration: 1500
          })
     }

     const callRemovedFromWishlistAlert = () => {
          toast.success("Proizvod je uklonjen iz liste zelja", {
               position: "top-center",
               duration: 1500
          })
     }

     const isInWishlist = wishListState.some((item: IProduct) => item._id === product._id);
     const localStorage: any = useLocalStorage('persist:root', {});
     const localStorageReducers: any = localStorage[0];
     const localStorageWishList: IProduct[] = JSON.parse(localStorageReducers.wishListReducer);
     const showSticker = product.discount && product.discountAmount! > 0;
     const wishListProductID = localStorageWishList.find((el: IProduct) => {
          return el._id == product._id;
     });

     return (
          <ProductDetailWrapper sx={{ marginTop: '100px', gap: '30px' }} display={"flex"} flexDirection={isScreenToMedium ? "column" : "row"}>
               <ProductImageBox
                    onClick={() => handleOpenCarousel(0)} // Open carousel on image click
                    sx={{
                         position: 'relative',
                         cursor: 'pointer',
                         width: isScreenToMedium ? 300 : 400,
                         height: isScreenToMedium ? 400 : 600,
                    }}>
                    <Image
                         fill
                         src={product.imageURL}
                         alt="Product image"
                         style={{
                              borderRadius: theme.shape.borderRadius,
                              objectFit: 'cover',
                         }}
                    />
                    {showSticker && (
                         <Box
                              sx={{
                                   position: 'absolute',
                                   top: theme.spacing(2),
                                   right: theme.spacing(2),
                                   backgroundColor: Colors.primary.main,
                                   color: 'white',
                                   padding: theme.spacing(1, 2),
                                   borderRadius: '50%',
                                   transform: 'rotate(12deg)',
                                   zIndex: 1,
                                   boxShadow: '0px 2px 4px rgba(0,0,0,0.2)',
                              }}
                         >
                              <Typography variant="caption" fontWeight="bold" color={Colors.primary.lighter}>
                                   -{product.discountAmount}% popusta
                              </Typography>
                         </Box>
                    )}
               </ProductImageBox>
               <ProductDetailInfoWrapper>
                    <ProductMeta product={product} sx={{ lineHeight: 2 }} variant="h4" />
                    <Typography textAlign='center'>Šifra: {product._id.slice(-8)}</Typography>
                    {
                         product.availableStock == 0 ?
                              <Typography textAlign='center' sx={{ fontWeight: 'bold' }}>Nema na stanju!</Typography>
                              :
                              <Typography textAlign='center'>Dostupno: {product.availableStock} na stanju</Typography>
                    }
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
                         <Button
                              onClick={() => { dispatch(addToCart(product)); callCartAlert(); }}
                              disabled={product.availableStock <= 0}
                         >
                              Dodaj u korpu
                         </Button>
                         <Button onClick={showCartDialog} startIcon={<ShoppingCartIcon />} >
                              Korpa
                         </Button>
                    </Box>
                    <Box
                         display="flex"
                         alignItems="center"
                         sx={{ m: 4, color: Colors.primary.main }}
                    >
                         {!isInWishlist ? (
                              <FavoriteBorderIcon
                                   id={`wishlist-icon-${product._id}`}
                                   sx={{
                                        cursor: 'pointer',
                                        ':hover': { filter: `drop-shadow(3px 5px 2px ${Colors.primary.main})` },
                                   }}
                                   onClick={handleAddToWishlist}
                              />
                         ) : (
                              <FavoriteIcon
                                   id={`wishlist-icon-${product._id}`}
                                   sx={{
                                        cursor: 'pointer',
                                        ':hover': { filter: `drop-shadow(3px 5px 2px ${Colors.primary.main})` },
                                   }}
                                   onClick={handleRemoveFromWishlist}
                              />
                         )}
                         <InstagramIcon sx={{ pl: 2, cursor: 'pointer', color: Colors.primary.main }} onClick={() => window.open('https://instagram.com/apoteka_dar')} />
                         <Button
                              sx={{ borderRadius: '100%', width: '40px', height: '40px', padding: '0', backgroundColor: 'transparent', }}
                              onClick={() => setShowShareOptions(!showShareOptions)}
                         >
                              <Tooltip placement="left" title={"Podeli"}>
                                   <ShareIcon color="primary" />
                              </Tooltip>
                         </Button>
                         {
                              showShareOptions ? (
                                   <SocialShare
                                        shareURL={`https://apoteka-dar.rs/proizvod/` + product._id}
                                        flexDirection="row"
                                        sx={{
                                             mt: '100px',
                                        }}
                                   />
                              )
                                   : null
                         }
                    </Box>
               </ProductDetailInfoWrapper>
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
