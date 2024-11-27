import { useEffect, useRef, useState } from "react";
import { FilteredProduct, FilteredProductActionButton, FilteredProductActionsWrapper, FilteredProductAddToCart, FilteredProductFavButton, FilteredProductImage, FilteredProductImageContainer } from "../../styles/product/filtered-single-product";
import { Alert, Stack, Tooltip, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetails from "../product-dropdown/product-dropdown";
import { addToCart } from "@/store/cart/cart.slice";
import { useDispatch } from "react-redux";
import { addToWishList } from "@/store/wishlist/wishlist.slice";
import FilteredProductMeta from "./filtered-products-meta";
import theme from "@/styles/theme";
import Link from "next/link";
import IProduct from "@/interfaces/product/product.interface";
import toast from "react-hot-toast";

type FilteredSingleProductMobileProps = {
     product: IProduct;
     isScreenToMedium: boolean;
}

export default function FilteredSingleProductMobile({ product, isScreenToMedium }: FilteredSingleProductMobileProps) {

     const [ProductDetailDialog, showProductDetailDialog, closeProductDialog] = useDialogModal(ProductDetails);
     const [addedToWishlistAlert, setAddedToWishlistAlert] = useState(false)
     const [showOptions, setShowOptions] = useState(false);

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
     };

     const callCartAlert = () => {
          toast.success("Proizvod je dodat u korpu", {
               duration: 1500,
               position: "top-center"
          })
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
          <FilteredProduct onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={domRef} theme={theme} isVisible={isVisible}>
               <FilteredProductImageContainer>
                    <Link rel='canonical' href={'/proizvod/' + product._id}>
                         <FilteredProductImage src={product.imageURL} />
                    </Link>
               </FilteredProductImageContainer>
               <FilteredProductMeta product={product} isScreenToMedium={isScreenToMedium} />
               <FilteredProductActionsWrapper theme={theme} show={showOptions}>
                    <Stack direction={isScreenToMedium ? "row" : "column"}>
                         <FilteredProductFavButton isfav={0} onClick={() => { callWishlistAlert(); dispatch(addToWishList(product)); }} theme={theme}>
                              <Tooltip placement="left" title="Add to wishlist">
                                   <FavoriteIcon />
                              </Tooltip>
                         </FilteredProductFavButton>
                         <FilteredProductActionButton>
                              <Tooltip placement="left" title="Share this product">
                                   <ShareIcon color="primary" />
                              </Tooltip>
                         </FilteredProductActionButton>
                         <FilteredProductActionButton onClick={() => showProductDetailDialog()}>
                              <Tooltip placement="left" title="Brz pregled">
                                   <FitScreenIcon color="primary" />
                              </Tooltip>
                         </FilteredProductActionButton>
                    </Stack>
               </FilteredProductActionsWrapper>
               {addedToWishlistAlert && (
                    <Alert variant="filled" severity="success" sx={{ position: 'absolute', width: '120px' }}>
                         Proizvod dodat u listu želja
                    </Alert>
               )}
               <FilteredProductAddToCart
                    onClick={() => { callCartAlert(); dispatch(addToCart(product)); }}
                    theme={theme}
                    show={false}
                    disabled={product.availableStock <= 0}
               >
                    Dodaj u korpu
               </FilteredProductAddToCart >
               <ProductDetailDialog product={product} />
          </FilteredProduct>
     )
}
