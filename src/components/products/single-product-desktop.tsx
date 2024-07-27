import { useEffect, useRef, useState } from "react";
import { Product, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from "../../styles/product/single-product";
import { Alert, Box, Button, Stack, Tooltip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetails from "../product-dropdown/product-dropdown";
import ProductMeta from "./products-meta";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cart/cart.slice";
import { useTranslation } from "next-i18next";
import { addToWishList } from "@/store/wishlist/wishlist.slice";
import { FilteredProductImageContainer } from "@/styles/product/filtered-single-product";
import { SocialShare } from "../social/socials-share";
import theme from "@/styles/theme";

export default function SingleProductDesktop({ product, isScreenToMedium }: any) {
     const { t } = useTranslation();
     const [ProductDetailDialog, showProductDetailDialog] = useDialogModal(ProductDetails);
     const [addedToCartAlert, setAddedToCartAlert] = useState(false);
     const [addedToWishlistAlert, setAddedToWishlistAlert] = useState(false);
     const [showOptions, setShowOptions] = useState(false);
     const [loading, setLoading] = useState(false);
     const [isVisible, setVisible] = useState(false);
     const domRef = useRef<HTMLElement | null>(null);
     const observerRef = useRef<IntersectionObserver | null>(null);
     const dispatch = useDispatch();
     const [showShareOptions, setShowShareOptions] = useState(false);
     const ref = useRef<HTMLDivElement | null>(null);

     const handleClickOutside = (event: any) => {
          if (ref.current && !ref.current.contains(event.target)) {
               setShowShareOptions(false);
          }
     };

     useEffect(() => {
          document.addEventListener('mousedown', handleClickOutside);
          observerRef.current = new IntersectionObserver(
               (entries) => {
                    entries.forEach((entry) => {
                         if (entry.isIntersecting) {
                              setVisible(true);
                         } else {
                              setVisible(false);
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
               document.removeEventListener('mousedown', handleClickOutside);
          };
     }, []);

     function handleClick() {
          setLoading(true);
     }

     const handleMouseEnter = () => {
          setShowOptions(true);
     };

     const handleMouseLeave = () => {
          setShowOptions(false);
          setShowShareOptions(false);
     };

     const callCartAlert = () => {
          setAddedToCartAlert(true);
          setLoading(true);
          const timeId = setTimeout(() => {
               setLoading(false);
               setAddedToCartAlert(false);
          }, 1500);

          return () => {
               clearTimeout(timeId);
          };
     };

     const callWishlistAlert = () => {
          setAddedToWishlistAlert(true);
          setLoading(true);
          const timeId = setTimeout(() => {
               setLoading(false);
               setAddedToWishlistAlert(false);
          }, 1500);

          return () => {
               clearTimeout(timeId);
          };
     };

     return (
          <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={domRef} isVisible={isVisible} theme={theme}>
               <FilteredProductImageContainer>
                    <ProductImage src={product.imageURL} />
               </FilteredProductImageContainer>
               {(showOptions || isScreenToMedium) && (
                    <ProductActionsWrapper show={showOptions.toString() || isScreenToMedium} theme={theme}>
                         <ProductFavButton isfav={0} onClick={() => { dispatch(addToWishList(product)); callWishlistAlert(); }}>
                              <Tooltip placement="left" title={'Dodaj u listu želja'}>
                                   <FavoriteIcon />
                              </Tooltip>
                         </ProductFavButton>
                         <Button
                              sx={{ borderRadius: '100%', width: '40px', height: '40px', padding: '0', backgroundColor: 'transparent', }}
                              onClick={() => setShowShareOptions(!showShareOptions)}
                              ref={ref as React.RefObject<HTMLButtonElement>}>
                              <Tooltip placement="left" title={"Podeli"}>
                                   <ShareIcon color="primary" />
                              </Tooltip>
                         </Button>
                         <Button
                              sx={{ borderRadius: '100%', width: '40px', height: '40px', padding: '0', backgroundColor: 'transparent', }}
                              onClick={() => showProductDetailDialog()}>
                              <Tooltip placement="left" title={"Prikaži proizvod"}>
                                   <FitScreenIcon color="primary" />
                              </Tooltip>
                         </Button>
                    </ProductActionsWrapper>
               )}
               {(showOptions || isScreenToMedium) && (
                    <ProductAddToCart
                         show={showOptions}
                         loading={loading}
                         onClick={() => {
                              callCartAlert();
                              dispatch(addToCart(product));
                         }} theme={theme}>
                         Ubaci u korpu
                    </ProductAddToCart>
               )}

               <ProductMeta product={product} />
               <ProductDetailDialog product={product} />
               {addedToCartAlert && (
                    <Alert variant="filled" severity="success" sx={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', width: '250px', zIndex: '1000' }}>
                         Proizvod je dodat u korpu
                    </Alert>
               )}
               {addedToWishlistAlert && (
                    <Alert variant="filled" severity="success" sx={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', width: '250px', zIndex: '1000' }}>
                         Proizvod je dodat u listu želja
                    </Alert>
               )}
               {showShareOptions && showOptions && (
                    <SocialShare shareURL={`https://apoteka-dar.rs/proizvod/` + product._id} />
               )}
          </Product>
     );
}
