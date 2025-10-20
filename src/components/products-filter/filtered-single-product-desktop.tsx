import { MutableRefObject, useEffect, useRef, useState } from "react"
import { Alert, Box, Button, Stack, Tooltip, Card, CardContent, CardMedia } from "@mui/material";
import { Colors } from "@/styles/theme";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FitScreenIcon from "@mui/icons-material/FitScreen";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetails from "../product-dropdown/product-dropdown";
import ProductMeta from "./filtered-products-meta";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/store/cart/cart.slice";
import { addToWishList, removeFromWishList } from "@/store/wishlist/wishlist.slice";
import Link from "next/link";
import IProduct from "@/interfaces/product/product.interface";
import toast from "react-hot-toast";
import { wishListSelectorState } from "@/store/wishlist/wishlist-selector";
import { SocialShare } from "../social/socials-share";

type FilteredSingleProductDesktopProps = {
     product: IProduct;
     isScreenToMedium: boolean;
}

export default function FilteredSingleProductDesktop({ product, isScreenToMedium }: FilteredSingleProductDesktopProps) {

     const [ProductDetailDialog, showProductDetailDialog] = useDialogModal(ProductDetails)
     const [showOptions, setShowOptions] = useState(false)
     const [loading, setLoading] = useState(false)
     const [isVisible, setVisible] = useState(false)
     const domRef = useRef<HTMLElement | null>(null);
     const observerRef = useRef<IntersectionObserver | null>(null);
     const ref = useRef<HTMLDivElement | null>(null);
     const wishListState = useSelector(wishListSelectorState)
     const [showShareOptions, setShowShareOptions] = useState(false);
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
     const dispatch = useDispatch();

     const handleMouseEnter = () => {
          setShowOptions(true);
     };
     const handleMouseLeave = () => {
          setShowOptions(false);
          setShowShareOptions(false);
     };

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
                                   height: 220,
                                   objectFit: 'contain',
                                   backgroundColor: Colors.neutral[50],
                                   borderRadius: 1,
                                   p: 1
                              }}
                         />
                    </Link>
               </Box>
               {(showOptions || isScreenToMedium) && (
                    <Button
                         className="FilteredProductAddToCart"
                         variant="contained"
                         onClick={() => {
                              callCartAlert();
                              dispatch(addToCart(product));
                         }}
                         disabled={product.availableStock <= 0}
                    >
                         Dodaj u korpu
                    </Button>
               )}
               <Box className="FilteredProductActionsWrapper">
                    <Stack direction={isScreenToMedium ? "row" : "column"} sx={{
                         alignItems: 'center',
                         justifyContent: 'center',
                    }}>
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
                                             fontSize: 28,
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
                                             fontSize: 28,
                                        }}
                                        onClick={handleRemoveFromWishlist}
                                   />
                              )}
                         </Tooltip>
                         <Button
                              sx={{ width: '30px', height: '30px', backgroundColor: 'transparent', }}
                              onClick={() => setShowShareOptions(!showShareOptions)}
                         >
                              <Tooltip placement="left" title={"Podeli"}>
                                   <ShareIcon color="primary" sx={{ fontSize: 28 }} />
                              </Tooltip>
                         </Button>

                         <Button
                              className="FilteredProductActionButton"
                              onClick={() => showProductDetailDialog()}
                              sx={{ width: '30px', height: '30px', backgroundColor: 'transparent' }}
                         >
                              <Tooltip placement="left" title="Brz pregled">
                                   <FitScreenIcon color="primary" sx={{ fontSize: 28 }} />
                              </Tooltip>
                         </Button>
                    </Stack>
               </Box>
               <ProductMeta product={product} />
               <ProductDetailDialog product={product} />
               {
                    showShareOptions && showOptions && (
                         <SocialShare
                              shareURL={`https://apoteka-dar.rs/proizvod/` + product.slug}
                              flexDirection="row"
                              sx={{
                                   mt: '100px',
                              }}
                         />
                    )
               }
          </Card>
     );
}

