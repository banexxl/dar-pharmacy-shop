import { useEffect, useRef, useState } from "react";
import { FilteredProduct, FilteredProductActionButton, FilteredProductActionsWrapper, FilteredProductAddToCart, FilteredProductFavButton, FilteredProductImage, FilteredProductImageContainer } from "../../styles/product/filtered-single-product";
import { Alert, Stack, Tooltip, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetails from "../product-dropdown/product-dropdown";
import ProductMeta from "./filtered-products-meta"
import { addToCart } from "@/store/cart/cart.slice";
import { useDispatch } from "react-redux";
import { useTranslation } from "next-i18next";
import { addToWishList } from "@/store/wishlist/wishlist.slice";
import FilteredProductMeta from "./filtered-products-meta";

export default function FilteredSingleProductMobile({ product, isScreenToMedium }: any) {

          const [ProductDetailDialog, showProductDetailDialog, closeProductDialog] = useDialogModal(ProductDetails);
          const [addedToCartAlert, setAddedToCartAlert] = useState(false)
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
                    <FilteredProduct onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={domRef} theme={undefined} isVisible={isVisible}>
                              <FilteredProductImageContainer>
                                        <FilteredProductImage src={product.imageURL} />
                              </FilteredProductImageContainer>
                              <FilteredProductMeta product={product} isScreenToMedium={isScreenToMedium} />
                              <FilteredProductActionsWrapper>
                                        <Stack direction={isScreenToMedium ? "row" : "column"}>
                                                  <FilteredProductFavButton isfav={0} onClick={() => { callWishlistAlert(); dispatch(addToWishList(product)) }}>
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
                                                            <Tooltip placement="left" title="Full view">
                                                                      <FitScreenIcon color="primary" />
                                                            </Tooltip>
                                                  </FilteredProductActionButton>
                                        </Stack>
                              </FilteredProductActionsWrapper>
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
                              <FilteredProductAddToCart variant="contained" onClick={() => { callCartAlert(); dispatch(addToCart(product)) }}>Dodaj u korpu</FilteredProductAddToCart >
                              <ProductDetailDialog product={product} />
                    </FilteredProduct>
          )
}
