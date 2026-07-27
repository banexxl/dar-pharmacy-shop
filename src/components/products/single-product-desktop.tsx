import { useEffect, useRef, useState } from "react";
import { Alert, Box, Button, Stack, Tooltip, IconButton } from "@mui/material";
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
import { SocialShare } from "../social/socials-share";
import theme, { Colors } from "@/styles/theme";
import Link from "next/link";
import Product from "@/interfaces/product/product.interface";
import toast from "react-hot-toast";
import { wishListSelectorState } from "@/store/wishlist/wishlist-selector";

type SingleProductDesktopProps = {
     product: Product;
     isScreenToMedium: boolean;
}

export default function SingleProductDesktop({ product, isScreenToMedium }: SingleProductDesktopProps) {

     const [ProductDetailDialog, showProductDetailDialog] = useDialogModal(ProductDetails);
     const [showOptions, setShowOptions] = useState(false);
     const [loading, setLoading] = useState(false);
     const [isVisible, setVisible] = useState(false);
     const domRef = useRef<HTMLElement | null>(null);
     const observerRef = useRef<IntersectionObserver | null>(null);
     const ref = useRef<HTMLDivElement | null>(null);
     const dispatch = useDispatch();
     const [showShareOptions, setShowShareOptions] = useState(false);
     const wishListState = useSelector(wishListSelectorState)
     const isInWishlist = wishListState.some((item: Product) => item.id === product.id);


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
          <Box className="Product" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={domRef}>
               <Box className="FilteredProductImageContainer">
                    <Link rel='canonical' href={'/proizvod/' + product.slug}>
                         <Box component="img" src={product.image_url} alt={product.name} className="ProductImage" sx={{
                              width: '100%',
                              height: 300,
                              objectFit: 'contain',
                              backgroundColor: Colors.neutral[50],
                              borderRadius: 1,
                              p: 1
                         }} />
                    </Link>
               </Box>
               {(showOptions || isScreenToMedium) && (
                    <Box className="ProductActionsWrapper" sx={{ display: showOptions || isScreenToMedium ? 'flex' : 'none' }}>
                         <Stack direction={isScreenToMedium ? "row" : "column"} sx={{
                              alignItems: 'center',
                              justifyContent: 'center',
                         }}>
                              <Tooltip
                                   title={isInWishlist ? "Ukloni iz liste želja" : "Dodaj u listu želja"}
                                   placement="left"
                                   sx={{
                                        cursor: 'pointer',
                                        ':hover': { filter: `drop-shadow(3px 5px 2px ${Colors.primary.main})` },
                                   }}
                              >
                                   {!isInWishlist ? (
                                        <FavoriteBorderIcon
                                             id={`wishlist-icon-${product.id}`}
                                             sx={{
                                                  cursor: 'pointer',
                                                  ':hover': { filter: `drop-shadow(3px 5px 2px ${Colors.primary.main})` },
                                                  color: Colors.primary.main,
                                             }}
                                             onClick={handleAddToWishlist}
                                        />
                                   ) : (
                                        <FavoriteIcon
                                             id={`wishlist-icon-${product.id}`}
                                             sx={{
                                                  cursor: 'pointer',
                                                  ':hover': { filter: `drop-shadow(3px 5px 2px ${Colors.primary.main})` },
                                                  color: Colors.primary.main,
                                             }}
                                             onClick={handleRemoveFromWishlist}
                                        />
                                   )}
                              </Tooltip>
                         </Stack>
                         <Button
                              sx={{ width: '30px', height: '30px', backgroundColor: 'transparent', }}
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
                    </Box>
               )}
               {(showOptions || isScreenToMedium) && (
                    <Button
                         className="ProductAddToCart"
                         variant="contained"
                         onClick={() => {
                              callCartAlert();
                              dispatch(addToCart(product));
                         }}
                         sx={{ display: showOptions ? 'flex' : 'none' }}>
                         {product.available_stock <= 0 ? "Nema na stanju" : "Dodaj u korpu"}
                    </Button>
               )}

               <ProductMeta product={product} />
               <ProductDetailDialog product={product} />
               {showShareOptions && showOptions && (
                    <SocialShare shareURL={`https://apoteka-dar.rs/proizvod/` + product.slug} flexDirection="row" />
               )}
          </Box>
     );
}
