import { useEffect, useMemo, useRef, useState } from "react";
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage, } from "../../styles/product/single-product";
import { Alert, Grow, Stack, Tooltip, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetails from "../product-dropdown/product-dropdown";
import ProductMeta from "./products-meta"
import { addToCart } from "@/store/cart/cart.slice";
import { useDispatch } from "react-redux";
import { addToWishList } from "@/store/wishlist/wishlist.slice";
import { FilteredProductImageContainer } from "@/styles/product/filtered-single-product";
import theme, { Colors } from "@/styles/theme";
import Link from "next/link";
import { SocialShare } from "../social/socials-share";
import IProduct from "@/interfaces/product/product.interface";

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

type SingleProductMobileProps = {
     product: IProduct;
     isScreenToMedium: boolean;
}

export default function SingleProductMobile({ product, isScreenToMedium }: SingleProductMobileProps) {

     const [ProductDetailDialog, showProductDetailDialog, closeProductDialog] = useDialogModal(ProductDetails);
     const [addedToCartAlert, setAddedToCartAlert] = useState(false)
     const [addedToWishlistAlert, setAddedToWishlistAlert] = useState(false)
     const [showOptions, setShowOptions] = useState(false);
     const [openShareOption, setOpenShareOptions] = useState<boolean>(false);

     const productRef = useRef<HTMLElement | null>(null)
     const isVisible = useIsInViewport(productRef)
     const dispatch = useDispatch();

     const handleMouseEnter = () => {
          setShowOptions(true);
     };
     const handleMouseLeave = () => {
          setShowOptions(false);
          setOpenShareOptions(false);
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
                         <Link href={'/proizvod/' + product._id}>
                              <ProductImage src={product.imageURL} />
                         </Link>
                    </FilteredProductImageContainer>
                    <ProductMeta product={product} isScreenToMedium={isScreenToMedium} />
                    <ProductActionsWrapper theme={theme} show={showOptions}>
                         <Stack direction={isScreenToMedium ? "row" : "column"}>
                              <ProductFavButton isfav={0} onClick={() => { callWishlistAlert(); dispatch(addToWishList(product)) }}>
                                   <Tooltip placement="left" title="Dodaj u listu želja">
                                        <FavoriteIcon />
                                   </Tooltip>
                              </ProductFavButton>
                              <ProductActionButton onClick={() => setOpenShareOptions(!openShareOption)} >
                                   <Tooltip placement="top" title="Podeli" >
                                        <ShareIcon color="primary" />
                                   </Tooltip>
                              </ProductActionButton>
                              <ProductActionButton onClick={() => showProductDetailDialog()}>
                                   <Tooltip placement="left" title="Pogledaj proizvod">
                                        <FitScreenIcon color="primary" />
                                   </Tooltip>
                              </ProductActionButton>
                         </Stack>
                    </ProductActionsWrapper>
                    {openShareOption && showOptions && (
                         < SocialShare shareURL={`https://apoteka-dar.rs/proizvod/` + product._id} flexDirection="column" />
                    )}
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
