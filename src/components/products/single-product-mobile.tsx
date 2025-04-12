import { useEffect, useMemo, useRef, useState } from "react";
import { MobileAddToCart, Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage, } from "../../styles/product/single-product";
import { Alert, Box, Grow, Stack, Tooltip, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetails from "../product-dropdown/product-dropdown";
import ProductMeta from "./products-meta"
import { addToCart } from "@/store/cart/cart.slice";
import { useDispatch, useSelector } from "react-redux";
import { addToWishList, removeFromWishList } from "@/store/wishlist/wishlist.slice";
import { FilteredProductImageContainer } from "@/styles/product/filtered-single-product";
import theme, { Colors } from "@/styles/theme";
import Link from "next/link";
import { SocialShare } from "../social/socials-share";
import IProduct from "@/interfaces/product/product.interface";
import toast from "react-hot-toast";
import { wishListSelectorState } from "@/store/wishlist/wishlist-selector";

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
     const [showOptions, setShowOptions] = useState(false);
     const [openShareOption, setOpenShareOptions] = useState<boolean>(false);
     const wishListState = useSelector(wishListSelectorState)
     const isInWishlist = wishListState.some((item: IProduct) => item._id === product._id);


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
          toast.success("Proizvod je dodat u korpu", {
               duration: 1500,
               position: "top-center"
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

     return (
          <Grow
               in={isVisible}
               style={{ transformOrigin: '0 0 0' }}
               {...(isVisible ? { timeout: 1000 } : {})}
          >
               <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={productRef} theme={undefined} isVisible={isVisible}>
                    <FilteredProductImageContainer>
                         <Link rel='canonical' href={'/proizvod/' + product.slug}>
                              <ProductImage src={product.imageURL} />
                         </Link>
                    </FilteredProductImageContainer>
                    <ProductMeta product={product} isScreenToMedium={isScreenToMedium} />
                    <ProductActionsWrapper theme={theme} show={showOptions}>
                         <Stack direction={isScreenToMedium ? "row" : "column"}
                              sx={{
                                   alignItems: 'center',
                                   justifyContent: 'center',
                              }}
                         >
                              <Box
                                   display="flex"
                                   alignItems="center"
                                   sx={{ color: Colors.primary.main }}
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
                              </Box>
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
                         < SocialShare shareURL={`https://apoteka-dar.rs/proizvod/` + product.slug} flexDirection="column" />
                    )}
                    {
                         product.availableStock > 0 ?
                              (
                                   <MobileAddToCart
                                        onClick={() => { callCartAlert(); dispatch(addToCart(product)); }}
                                        theme={theme}
                                   >
                                        Dodaj u korpu
                                   </MobileAddToCart >
                              )
                              :
                              (
                                   <MobileAddToCart
                                        theme={theme}
                                   >
                                        Nema na stanju
                                   </MobileAddToCart >
                              )
                    }


                    <ProductDetailDialog product={product} />
               </Product>
          </Grow>
     )
}
