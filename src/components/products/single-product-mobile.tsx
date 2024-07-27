import { useEffect, useMemo, useRef, useState } from "react";
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage, ProductMetaWrapper, } from "../../styles/product/single-product";
import { Alert, Button, Card, Grow, Stack, Tooltip, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import useDialogModal from "../../hooks/useDialogModal";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ProductDetails from "../product-dropdown/product-dropdown";
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import ProductMeta from "./products-meta"
import { addToCart } from "@/store/cart/cart.slice";
import { useDispatch } from "react-redux";
import { useTranslation } from "next-i18next";
import { addToWishList } from "@/store/wishlist/wishlist.slice";
import { FilteredProductImageContainer } from "@/styles/product/filtered-single-product";
import { PopAnimation, PopupBody } from "@/styles/product/share-product";
import theme, { Colors } from "@/styles/theme";
import Link from "next/link";

function useIsInViewport(ref: any) {
     const [isIntersecting, setIsIntersecting] = useState(false);

     const observer = useMemo(
          () =>
               new IntersectionObserver(([entry]) =>
                    setIsIntersecting(entry.isIntersecting),
               ),
          [],
     );

     useEffect(() => {
          observer.observe(ref.current);

          return () => {
               observer.disconnect();
          };
     }, [ref, observer]);

     return isIntersecting;
}

export default function SingleProductMobile({ product, isScreenToMedium }: any) {

     const [ProductDetailDialog, showProductDetailDialog, closeProductDialog] = useDialogModal(ProductDetails);
     const [addedToCartAlert, setAddedToCartAlert] = useState(false)
     const [addedToWishlistAlert, setAddedToWishlistAlert] = useState(false)
     const [showOptions, setShowOptions] = useState(false);
     const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null);
     const [open, setOpen] = useState(false);

     const productRef = useRef<HTMLElement | null>(null)
     const isVisible = useIsInViewport(productRef)
     const dispatch = useDispatch();

     const handleMouseEnter = () => {
          setShowOptions(true);
     };
     const handleMouseLeave = () => {
          setShowOptions(false);
     };

     const callCartAlert = () => {
          setAddedToCartAlert(true)
          const timeId = setTimeout(() => {
               // After 3 seconds set the show value to false
               setAddedToCartAlert(false)
          }, 2000)

          return () => {
               clearTimeout(timeId)
          }
     }

     const callWishlistAlert = () => {
          setAddedToWishlistAlert(true)
          const timeId = setTimeout(() => {
               // After 3 seconds set the show value to false
               setAddedToWishlistAlert(false)
          }, 2000)

          return () => {
               clearTimeout(timeId)
          }
     }

     return (
          <Grow
               in={isVisible}
               style={{ transformOrigin: '0 0 0' }}
               {...(isVisible ? { timeout: 1000 } : {})}
          >
               <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={productRef} theme={undefined} isVisible={isVisible}>
                    <FilteredProductImageContainer>
                         <ProductImage src={product.imageURL} />
                    </FilteredProductImageContainer>
                    <ProductMeta product={product} isScreenToMedium={isScreenToMedium} />
                    <ProductActionsWrapper theme={theme} show={showOptions}>
                         <Stack direction={isScreenToMedium ? "row" : "column"}>
                              <ProductFavButton isfav={0} onClick={() => { callWishlistAlert(); dispatch(addToWishList(product)) }}>
                                   <Tooltip placement="left" title="Add to wishlist">
                                        <FavoriteIcon />
                                   </Tooltip>
                              </ProductFavButton>
                              <ProductActionButton>
                                   <PopupState variant="popper" popupId="demo-popup-popper">
                                        {(popupState) => (
                                             <div>
                                                  <Tooltip placement="top" title="Share this product" {...bindToggle(popupState)}>
                                                       <ShareIcon color="primary" >
                                                            <Button variant="contained" />
                                                       </ShareIcon>
                                                  </Tooltip>
                                                  <Popper {...bindPopper(popupState)} transition>
                                                       {({ TransitionProps }) => (
                                                            <Fade {...TransitionProps} timeout={500}>
                                                                 <Paper sx={{ display: 'flex', flexDirection: 'column', gap: '3px', padding: '10px', color: Colors.primary }}>
                                                                      <FacebookIcon sx={{ cursor: 'pointer' }} >
                                                                           <Link href={`https://www.facebook.com/sharer.php?u=${'www.apoteka-dar.rs'}`} {...bindToggle(popupState)} />
                                                                      </FacebookIcon>
                                                                      <InstagramIcon sx={{ cursor: 'pointer' }} />
                                                                      <LinkedInIcon sx={{ cursor: 'pointer' }} />
                                                                      <YouTubeIcon sx={{ cursor: 'pointer' }} />
                                                                 </Paper>
                                                            </Fade>
                                                       )}
                                                  </Popper>
                                             </div>
                                        )}
                                   </PopupState>
                              </ProductActionButton>
                              <ProductActionButton onClick={() => showProductDetailDialog()}>
                                   <Tooltip placement="left" title="Full view">
                                        <FitScreenIcon color="primary" />
                                   </Tooltip>
                              </ProductActionButton>
                         </Stack>
                    </ProductActionsWrapper>
                    {addedToCartAlert && (
                         <Alert variant="filled" severity="success" sx={{ position: 'absolute', width: '120px' }}>
                              Proizvod dodat u korpu
                         </Alert>
                    )}
                    {addedToWishlistAlert && (
                         <Alert variant="filled" severity="success" sx={{ position: 'absolute', width: '120px' }}>
                              Proizvod dodat u listu želja
                         </Alert>
                    )}
                    <ProductAddToCart
                         onClick={() => { callCartAlert(); dispatch(addToCart(product)); }}
                         theme={theme}
                         show={true}
                    >
                         Dodaj u korpu
                    </ProductAddToCart >
                    <ProductDetailDialog product={product} />
               </Product>
          </Grow>
     )
}
