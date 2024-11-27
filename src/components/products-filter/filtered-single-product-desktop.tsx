import { MutableRefObject, useEffect, useRef, useState } from "react"
import { FilteredProduct, FilteredProductActionButton, FilteredProductActionsWrapper, FilteredProductAddToCart, FilteredProductFavButton, FilteredProductImage, FilteredProductImageContainer } from "../../styles/product/filtered-single-product";
import { Alert, Box, Stack, Tooltip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetails from "../product-dropdown/product-dropdown";
import ProductMeta from "./filtered-products-meta";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cart/cart.slice";
import { addToWishList } from "@/store/wishlist/wishlist.slice";
import theme from "@/styles/theme";
import Link from "next/link";
import IProduct from "@/interfaces/product/product.interface";
import toast from "react-hot-toast";

type FilteredSingleProductDesktopProps = {
     product: IProduct;
     isScreenToMedium: boolean;
}

export default function FilteredSingleProductDesktop({ product, isScreenToMedium }: FilteredSingleProductDesktopProps) {

     const [ProductDetailDialog, showProductDetailDialog] = useDialogModal(ProductDetails)
     const [showOptions, setShowOptions] = useState(false)
     const [loading, setLoading] = useState(false)
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

     function handleClick() {
          setLoading(true);
     }
     const dispatch = useDispatch();

     const handleMouseEnter = () => {
          setShowOptions(true);
     };
     const handleMouseLeave = () => {
          setShowOptions(false);
     };

     const callCartAlert = () => {
          toast.success("Proizvod je dodat u korpu", {
               position: "top-center",
               duration: 1500
          })
     }

     const callWishlistAlert = () => {
          toast.success("Proizvod je dodat u listu zelja", {
               position: "top-center",
               duration: 1500
          })
     }

     return (
          <FilteredProduct onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={domRef} isVisible={isVisible} theme={theme}>
               <FilteredProductImageContainer>
                    <Link rel='canonical' href={'/proizvod/' + product._id}>
                         <FilteredProductImage src={product.imageURL} />
                    </Link>
               </FilteredProductImageContainer>
               {(showOptions || isScreenToMedium) && (
                    <FilteredProductAddToCart
                         show={showOptions}
                         variant="contained"
                         loading={loading}
                         onClick={() => {
                              callCartAlert();
                              dispatch(addToCart(product));
                         }}
                         theme={theme}
                         disabled={product.availableStock <= 0}
                    >
                         Dodaj u korpu
                    </FilteredProductAddToCart>
               )}
               <FilteredProductActionsWrapper show={showOptions || isScreenToMedium} theme={theme}>
                    <Stack direction={isScreenToMedium ? "row" : "column"}>
                         <FilteredProductFavButton isfav={0} onClick={() => { dispatch(addToWishList(product)); callWishlistAlert(); }} theme={theme}>
                              <Tooltip placement="left" title={"Dodaj u listu želja"}>
                                   <FavoriteIcon />
                              </Tooltip>
                         </FilteredProductFavButton>
                         <FilteredProductActionButton>
                              <Tooltip placement="left" title={"Podeli proizvod"}>
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
               <ProductMeta product={product} />
               <ProductDetailDialog product={product} />
          </FilteredProduct>
     );
}
