import { useEffect, useMemo, useRef, useState } from "react";
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage, ProductMetaWrapper, } from "../../styles/product/single-product";
import { Alert, Grow, Stack, Tooltip, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetails from "../product-dropdown/product-dropdown";
import ProductMeta from "./products-meta"
import { addToCart } from "@/store/cart/cart.slice";
import { useDispatch } from "react-redux";
import { useTranslation } from "next-i18next";
import { addToWishList } from "@/store/wishlist/wishlist.slice";
import { FilteredProductImageContainer } from "@/styles/product/filtered-single-product";

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
                    <ProductActionsWrapper>
                         <Stack direction={isScreenToMedium ? "row" : "column"}>
                              <ProductFavButton isfav={0} onClick={() => { callWishlistAlert(); dispatch(addToWishList(product)) }}>
                                   <Tooltip placement="left" title="Add to wishlist">
                                        <FavoriteIcon />
                                   </Tooltip>
                              </ProductFavButton>
                              <ProductActionButton>
                                   <Tooltip placement="left" title="Share this product">
                                        <ShareIcon color="primary" />
                                   </Tooltip>
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
                    <ProductAddToCart variant="contained" onClick={() => { callCartAlert(); dispatch(addToCart(product)) }}>Dodaj u korpu</ProductAddToCart >
                    <ProductDetailDialog product={product} />
               </Product>
          </Grow>
     )
}
