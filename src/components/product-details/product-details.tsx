import { Colors } from '@/styles/theme';
import ShareIcon from "@mui/icons-material/Share";
import { Alert, Box, Button, Tooltip, Typography, useMediaQuery, useTheme, Container, Paper } from '@mui/material';
import InstagramIcon from "@mui/icons-material/Instagram";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IProduct from '@/interfaces/product/product.interface';
import React, { useEffect, useRef, useState } from 'react'
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
     const [isVisible, setVisible] = useState(false)
     const domRef = useRef<HTMLElement | null>(null)
     const observerRef = useRef<IntersectionObserver | null>(null);

     const mediaItems = (product.mediaURLs ?? []).map(url => ({ type: 'image' as const, src: url, alt: product.name }));

     useEffect(() => {
          observerRef.current = new IntersectionObserver(
               (entries) => {
                    entries.forEach((entry) => {
                         if (entry.isIntersecting) {
                              setShowShareOptions(true);
                         } else {
                              setShowShareOptions(false);
                         }
                    });
               },
               { threshold: 1 } // Set your desired threshold value
          );

          const currentRef = domRef.current;


          if (currentRef && observerRef.current) {
               observerRef.current.observe(currentRef);
          }
          return () => {
               if (currentRef && observerRef.current) {
                    observerRef.current.unobserve(currentRef);
               }
          };
     }, []);

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
     const wishListProductID = wishListState.find((el: IProduct) => el._id === product._id) ?? null;
     const showSticker = product.discount && product.discountAmount! > 0;

     const formattedDescription = (product.description ?? '').replace(/([,.])/g, "$1 ");
     const formattedInstructions = (product.instructions ?? '').replace(/([,.])/g, "$1 ");
     const formattedWarning = (product.warning ?? '').replace(/([,.])/g, "$1 ");


     return (
          <Container className="ProductDetailWrapper" sx={{ mt: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
               <Box
                    className="ProductImageBox"
                    onClick={() => handleOpenCarousel(0)} // Open carousel on image click
                    sx={{
                         position: 'relative',
                         cursor: 'pointer',
                         width: '100%',
                         maxWidth: 520,
                         mx: 'auto',
                    }}>
                    <Image
                         src={product.imageURL}
                         alt="Product image"
                         width={800}
                         height={800}
                         style={{
                              width: '100%',
                              height: 'auto',
                              objectFit: 'contain',
                              background: Colors.neutral[50],
                              borderRadius: Number(theme.shape.borderRadius),
                              padding: '8px',
                              display: 'block',
                              margin: '0 auto'
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
               </Box>
               <Box className="ProductDetailInfoWrapper" sx={{ width: '100%', maxWidth: 900, mx: 'auto' }}>
                    <ProductMeta product={product} isScreenToMedium={isScreenToMedium} />
                    <Typography textAlign='center'>Šifra: {product._id.slice(-8)}</Typography>
                    {
                         product.availableStock == 0 ?
                              <Typography textAlign='center' sx={{ fontWeight: 800, color: Colors.error.main }}>Nema na stanju!</Typography>
                              :
                              <Typography textAlign='center' sx={{ color: Colors.neutral[700] }}>Dostupno: {product.availableStock} na stanju</Typography>
                    }
                    <Typography variant="h4" sx={{ fontWeight: 700, color: Colors.primary.main, mt: 3, textAlign: 'center' }}>
                         Opis
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center', wordBreak: 'break-word', color: Colors.neutral[700], lineHeight: 1.7 }}>
                         {formattedDescription}
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: Colors.primary.main, mt: 3, textAlign: 'center' }}>
                         Instrukcije
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center', wordBreak: 'break-word', color: Colors.neutral[700], lineHeight: 1.7 }}>
                         {formattedInstructions}
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: Colors.primary.main, mt: 3, textAlign: 'center' }}>
                         Upozorenje
                    </Typography >
                    <Typography variant="body1" sx={{ textAlign: 'center', wordBreak: 'break-word', color: Colors.neutral[700], lineHeight: 1.7 }}>
                         {formattedWarning}
                    </Typography>
                    <Box
                         sx={{ mt: 4 }}
                         display="flex"
                         alignItems="center"
                         justifyContent="space-evenly"
                    >
                         <Button
                              variant="contained"
                              color="primary"
                              onClick={() => { dispatch(addToCart(product)); callCartAlert(); }}
                              disabled={product.availableStock <= 0}
                         >
                              Dodaj u korpu
                         </Button>
                         <Button variant="outlined" color="primary" onClick={showCartDialog} startIcon={<ShoppingCartIcon />} >
                              Korpa
                         </Button>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center" sx={{ m: 4, color: Colors.primary.main, gap: 2 }}>
                         {!isInWishlist ? (
                              <FavoriteBorderIcon
                                   id={`wishlist-icon-${product._id}`}
                                   sx={{
                                        cursor: 'pointer',
                                        fontSize: 28,
                                        ':hover': { filter: `drop-shadow(3px 5px 2px ${Colors.primary.main})` },
                                   }}
                                   onClick={handleAddToWishlist}
                              />
                         ) : (
                              <FavoriteIcon
                                   id={`wishlist-icon-${product._id}`}
                                   sx={{
                                        cursor: 'pointer',
                                        fontSize: 28,
                                        ':hover': { filter: `drop-shadow(3px 5px 2px ${Colors.primary.main})` },
                                   }}
                                   onClick={handleRemoveFromWishlist}
                              />
                         )}
                         <InstagramIcon sx={{ cursor: 'pointer', color: Colors.primary.main, fontSize: 28 }} onClick={() => window.open('https://instagram.com/apoteka_dar')} />
                         <Button
                              sx={{ width: '30px', height: '30px', backgroundColor: 'transparent', }}
                              onClick={() => setShowShareOptions(!showShareOptions)}
                         >
                              <Tooltip placement="left" title={"Podeli"}>
                                   <ShareIcon color="primary" sx={{ fontSize: 28 }} />
                              </Tooltip>
                         </Button>
                         {
                              showShareOptions && (
                                   <Box onMouseLeave={() => setShowShareOptions(false)} sx={{ transform: 'translate(-100px, -80px)' }}>
                                        <SocialShare
                                             shareURL={`https://apoteka-dar.rs/proizvod/` + product.slug}
                                             flexDirection="row"
                                             sx={{
                                                  mt: '100px',
                                                  display: showShareOptions ? 'flex' : 'none',
                                             }}
                                        />
                                   </Box>
                              )
                         }
                    </Box>
               </Box>
               <CartDialog />
               {
                    mediaItems && mediaItems.length > 0 && (
                         <MediaCarousel
                              media={mediaItems}
                              open={isCarouselOpen}
                              initialIndex={carouselIndex}
                              onClose={handleCloseCarousel}
                         />
                    )
               }
          </Container>
     )
}

export default ProductDetails;
