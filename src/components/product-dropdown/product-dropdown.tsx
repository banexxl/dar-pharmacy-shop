import { Dialog, DialogTitle, Slide, Box, IconButton, DialogContent, Typography, Button, Alert } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../styles/theme";
import styled from "@emotion/styled";
import { ProductImageDropdown, ProductDropdown } from "../../styles/product/single-product";
import InstagramIcon from "@mui/icons-material/Instagram";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { ProductDetailInfoWrapper, ProductDetailWrapper } from "@/styles/productdetails";
import { FC, useState } from "react";
import ICartItem from "@/interfaces/cart/cart.interface";
import Cart from "../cart/cart";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/store/cart/cart.slice";
import { addToWishList, removeFromWishList } from "@/store/wishlist/wishlist.slice";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import IProduct from "@/interfaces/product/product.interface";
import ProductMeta from "../products/products-meta";
import useDialogModal from "@/hooks/useDialogModal";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SlideTransition from "@/hooks/use-slide-transition";
import toast from "react-hot-toast";
import { wishListSelectorState } from "@/store/wishlist/wishlist-selector";

interface IProductDetailProps {
     open: boolean,
     onClose: () => void,
     product: ICartItem
}

const ProductDetail: FC<IProductDetailProps> = ({ open, onClose, product }) => {

     const theme = useTheme();
     const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"));
     const [CartDialog, showCartDialog, closeCartDialog] = useDialogModal(Cart)
     const dispatch = useDispatch()
     const wishListState = useSelector(wishListSelectorState)
     const isInWishlist = wishListState.some((item: IProduct) => item._id === product._id);
     const callCartAlert = () => {
          toast.success("Proizvod je dodat u korpu", {
               position: "top-center",
               duration: 1500
          })
     }

     const handleAddToWishlist = () => {
          dispatch(addToWishList(product));
          toast.success("Proizvod je dodat u listu zelja", {
               position: "top-center",
               duration: 1500
          })
          // triggerIconBlink(); // Blink effect on click
     };

     const handleRemoveFromWishlist = () => {
          dispatch(removeFromWishList(product));
          toast.success("Proizvod je uklonjen iz liste zelja", {
               position: "top-center",
               duration: 1500
          })
          // triggerIconBlink(); // Blink effect on click
     };

     const localStorage: any = useLocalStorage('persist:root', {})
     const localStorageReducers: any = localStorage[0]
     const localStorageWishList: IProduct[] = JSON.parse(localStorageReducers.wishListReducer)
     const wishListProductID = localStorageWishList.find((el: IProduct) => {
          return el._id == product._id
     })

     return (
          <Dialog
               TransitionComponent={SlideTransition}

               open={open}
               fullScreen
          >
               <DialogTitle
                    sx={{
                         background: Colors.primary.lighter,
                    }}
               >
                    <Box
                         display="flex"
                         alignItems="center"
                         justifyContent={"space-between"}
                    >
                         {product.name}
                         <IconButton onClick={onClose}>
                              <CloseIcon />
                         </IconButton>
                    </Box>
               </DialogTitle>

               <DialogContent>
                    <ProductDetailWrapper display={"flex"} flexDirection={isScreenToMedium ? "column" : "row"}>
                         <ProductDropdown sx={{ mr: 4 }} theme={theme} isVisible={open}>
                              <ProductImageDropdown src={product.imageURL} />
                         </ProductDropdown>
                         <ProductDetailInfoWrapper>
                              <ProductMeta product={product} />
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
                                   <Button onClick={() => { dispatch(addToCart(product)); callCartAlert(); }}>Dodaj u korpu</Button>
                                   <Button onClick={showCartDialog} startIcon={<ShoppingCartIcon />} />
                              </Box>
                              <Box
                                   display="flex"
                                   alignItems="center"
                                   sx={{ mt: 4, color: Colors.primary.light }}
                              >
                                   {!isInWishlist ? (
                                        <FavoriteBorderIcon
                                             id={`wishlist-icon-${product._id}`}
                                             sx={{
                                                  mr: 1,
                                                  cursor: 'pointer',
                                                  ':hover': { filter: `drop-shadow(3px 5px 2px ${Colors.primary.dark})` },
                                             }}
                                             onClick={handleAddToWishlist}
                                        />
                                   ) : (
                                        <FavoriteIcon
                                             id={`wishlist-icon-${product._id}`}
                                             sx={{
                                                  mr: 1,
                                                  cursor: 'pointer',
                                                  ':hover': { filter: `drop-shadow(3px 5px 2px ${Colors.primary.dark})` },
                                             }}
                                             onClick={handleRemoveFromWishlist}
                                        />
                                   )}
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
                    </ProductDetailWrapper>
                    <CartDialog />
               </DialogContent>
          </Dialog >
     );
}

export default ProductDetail
