import { useEffect, useRef, useState } from "react";
import { Product, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from "../../styles/product/single-product";
import { Alert, Box, Button, Stack, Tooltip } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FitScreenIcon from "@mui/icons-material/FitScreen";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetails from "../product-dropdown/product-dropdown";
import ProductMeta from "./products-meta";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/store/cart/cart.slice";
import { addToWishList, removeFromWishList } from "@/store/wishlist/wishlist.slice";
import { FilteredProductImageContainer } from "@/styles/product/filtered-single-product";
import { SocialShare } from "../social/socials-share";
import theme, { Colors } from "@/styles/theme";
import Link from "next/link";
import IProduct from "@/interfaces/product/product.interface";
import toast from "react-hot-toast";
import { wishListSelectorState } from "@/store/wishlist/wishlist-selector";

type SingleProductDesktopProps = {
     product: IProduct;
     isScreenToMedium: boolean;
}

export default function SingleProductDesktop({ product, isScreenToMedium }: SingleProductDesktopProps) {

     const [ProductDetailDialog, showProductDetailDialog] = useDialogModal(ProductDetails);
     const [showOptions, setShowOptions] = useState(false);
     const [loading, setLoading] = useState(false);
     const [isVisible, setVisible] = useState(false);
     const domRef = useRef<HTMLElement | null>(null);
     const observerRef = useRef<IntersectionObserver | null>(null);
     const dispatch = useDispatch();
     const [showShareOptions, setShowShareOptions] = useState(false);
     const ref = useRef<HTMLDivElement | null>(null);
     const wishListState = useSelector(wishListSelectorState)
     const isInWishlist = wishListState.some((item: IProduct) => item._id === product._id);


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
          toast.success("Proizvod je dodat u korpu", {
               duration: 1500,
               position: "top-center"
          })
     };

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
          <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={domRef} isVisible={isVisible} theme={theme}>
               <FilteredProductImageContainer>
                    <Link rel='canonical' href={'/proizvod/' + product._id}>
                         <ProductImage src={product.imageURL} />
                    </Link>
               </FilteredProductImageContainer>
               {(showOptions || isScreenToMedium) && (
                    <ProductActionsWrapper show={showOptions || isScreenToMedium} theme={theme}>
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
                         <Button
                              sx={{ borderRadius: '100%', width: '40px', height: '40px', padding: '0', backgroundColor: 'transparent', }}
                              onClick={() => setShowShareOptions(!showShareOptions)}
                         >
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
                         Dodaj u korpu
                    </ProductAddToCart>
               )}

               <ProductMeta product={product} />
               <ProductDetailDialog product={product} />
               {showShareOptions && showOptions && (
                    <SocialShare shareURL={`https://apoteka-dar.rs/proizvod/` + product._id} flexDirection="row" />
               )}
          </Product>
     );
}
