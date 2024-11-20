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
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cart/cart.slice";
import { addToWishList, removeFromWishList } from "@/store/wishlist/wishlist.slice";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import IProduct from "@/interfaces/product/product.interface";
import ProductMeta from "../products/products-meta";
import useDialogModal from "@/hooks/useDialogModal";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SlideTransition from "@/hooks/use-slide-transition";

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
     const [addedToCartAlert, setAddedToCartAlert] = useState(false)
     const [addedToWishlistAlert, setAddedToWishlistAlert] = useState(false)
     const [removedFromWishlistAlert, setRemovedFromWishlistAlert] = useState(false)

     const callCartAlert = () => {
          setAddedToCartAlert(true)
          const timeId = setTimeout(() => {
               // After X seconds set the show value to false
               setAddedToCartAlert(false)
          }, 1500)

          return () => {
               clearTimeout(timeId)
          }
     }

     const callWishlistAlert = () => {
          setAddedToWishlistAlert(true)
          const timeId = setTimeout(() => {
               setAddedToWishlistAlert(false)
          }, 1500)

          return () => {
               clearTimeout(timeId)
          }
     }

     const callRemovedFromWishlistAlert = () => {
          setRemovedFromWishlistAlert(true)
          const timeId = setTimeout(() => {
               setRemovedFromWishlistAlert(false)
          }, 1500)

          return () => {
               clearTimeout(timeId)
          }
     }

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
                    </ProductDetailWrapper>
                    {addedToCartAlert && (
                         <Alert variant="filled" severity="success" sx={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', width: '250px', zIndex: '1000' }}>
                              Dodato u korpu
                         </Alert>
                    )}
                    {addedToWishlistAlert && (
                         <Alert variant="filled" severity="success" sx={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', width: '250px', zIndex: '1000' }}>
                              Dodato u listu želja
                         </Alert>
                    )}
                    {removedFromWishlistAlert && (
                         <Alert variant="filled" severity="success" sx={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', width: '250px', zIndex: '1000' }}>
                              Uklonjeno iz liste želja
                         </Alert>
                    )}
                    <CartDialog />
               </DialogContent>
          </Dialog >
     );
}

export default ProductDetail
