import { useEffect, useRef, useState } from "react";
import { Alert, Box, Stack, Tooltip, Typography, Card, CardContent, CardMedia, Button } from "@mui/material";
import { Colors } from "@/styles/theme";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetails from "../product-dropdown/product-dropdown";
import { addToCart } from "@/store/cart/cart.slice";
import { useDispatch, useSelector } from "react-redux";
import { addToWishList, removeFromWishList } from "@/store/wishlist/wishlist.slice";
import FilteredProductMeta from "./filtered-products-meta";
import Link from "next/link";
import IProduct from "@/interfaces/product/product.interface";
import toast from "react-hot-toast";
import { wishListSelectorState } from "@/store/wishlist/wishlist-selector";
import { SocialShare } from "../social/socials-share";

type FilteredSingleProductMobileProps = {
     product: IProduct;
     isScreenToMedium: boolean;
}

export default function FilteredSingleProductMobile({ product, isScreenToMedium }: FilteredSingleProductMobileProps) {

     const [ProductDetailDialog, showProductDetailDialog, closeProductDialog] = useDialogModal(ProductDetails);
     const [showOptions, setShowOptions] = useState(false);
     const [openShareOption, setOpenShareOptions] = useState<boolean>(false);
     const wishListState = useSelector(wishListSelectorState)
     const isInWishlist = wishListState.some((item: IProduct) => item._id === product._id);
     const [isVisible, setVisible] = useState(false)
     const domRef = useRef<HTMLElement | null>(null)
     const observerRef = useRef<IntersectionObserver | null>(null);

     useEffect(() => {
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
          };
     }, []);

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
          <Card className="FilteredProduct" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
               <Box className="FilteredProductImageContainer">
                    <Link rel='canonical' href={'/proizvod/' + product.slug}>
                         <CardMedia
                              component="img"
                              className="FilteredProductImage"
                              image={product.imageURL}
                              alt="Product"
                              sx={{
                                   height: 200,
                                   objectFit: 'cover'
                              }}
                         />
                    </Link>
               </Box>
               <FilteredProductMeta product={product} isScreenToMedium={isScreenToMedium} />
               <Box className="FilteredProductActionsWrapper">
                    <Stack direction={isScreenToMedium ? "row" : "column"}
                         sx={{
                              alignItems: 'center',
                              justifyContent: 'center',
                         }}
                    >
                         <Tooltip
                              title={isInWishlist ? "Ukloni iz liste želja" : "Dodaj u listu želja"}
                              sx={{
                                   cursor: 'pointer',
                                   ':hover': { filter: `drop-shadow(3px 5px 2px ${Colors.primary.main})` },
                                   backgroundColor: isInWishlist ? Colors.primary.main : Colors.primary.light,
                              }}
                         >
                              {!isInWishlist ? (
                                   <FavoriteBorderIcon
                                        id={`wishlist-icon-${product._id}`}
                                        sx={{
                                             cursor: 'pointer',
                                             ':hover': { filter: `drop-shadow(3px 5px 2px ${Colors.primary.main})` },
                                             color: Colors.primary.main,
                                        }}
                                        onClick={handleAddToWishlist}
                                   />
                              ) : (
                                   <FavoriteIcon
                                        id={`wishlist-icon-${product._id}`}
                                        sx={{
                                             cursor: 'pointer',
                                             ':hover': { filter: `drop-shadow(3px 5px 2px ${Colors.primary.main})` },
                                             color: Colors.primary.main,
                                        }}
                                        onClick={handleRemoveFromWishlist}
                                   />
                              )}
                         </Tooltip>
                         <Button className="FilteredProductActionButton">
                              <Tooltip placement="top" title="Share this product" onClick={() => setOpenShareOptions(!openShareOption)}>
                                   <ShareIcon color="primary" />
                              </Tooltip>
                         </Button>
                         <Button className="FilteredProductActionButton" onClick={() => showProductDetailDialog()}>
                              <Tooltip placement="bottom" title="Brz pregled">
                                   <FitScreenIcon color="primary" />
                              </Tooltip>
                         </Button>
                    </Stack>
               </Box>
               {openShareOption && showOptions && (
                    <SocialShare shareURL={`https://apoteka-dar.rs/proizvod/` + product.slug} flexDirection="column" />
               )}
               {
                    product.availableStock > 0 ?
                         (
                              <Button
                                   className="MobileAddToCart"
                                   onClick={() => { callCartAlert(); dispatch(addToCart(product)); }}
                                   variant="contained"
                                   fullWidth
                              >
                                   Dodaj u korpu
                              </Button>
                         )
                         :
                         (
                              <Button
                                   className="MobileAddToCart"
                                   variant="contained"
                                   disabled
                                   fullWidth
                              >
                                   Nema na stanju
                              </Button>
                         )
               }
               <ProductDetailDialog product={product} />
          </Card>
     )
}
