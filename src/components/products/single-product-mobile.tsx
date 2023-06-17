import { useEffect, useRef, useState } from "react";
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage, ProductMetaWrapper, } from "../../styles/product";
import { Alert, Stack, Tooltip, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetails from "../product-dropdown/product-dropdown";
import ProductMeta from "./products-meta"
import { addToCart } from "@/store/cart/cart.slice";
import { useDispatch } from "react-redux";
import { useTranslation } from "next-i18next";
import { addToWishList } from "@/store/wishlist/wishlist.slice";

export default function SingleProductMobile({ product, isScreenToMedium }: any) {

          const { t } = useTranslation();
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
                              { threshold: 0.5 } // Set your desired threshold value
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
                    <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={domRef} theme={undefined} isVisible={isVisible}>
                              <ProductImage src={product.imageURL} />
                              <ProductMeta product={product} isScreenToMedium={isScreenToMedium} />
                              <ProductActionsWrapper>
                                        <Stack direction={isScreenToMedium ? "row" : "column"}>
                                                  <ProductFavButton isfav={0} onClick={() => { callWishlistAlert(); dispatch(addToWishList(product)) }}>
                                                            <Tooltip placement="left" title="Add to wishlist">
                                                                      <FavoriteIcon />
                                                            </Tooltip>
                                                  </ProductFavButton>
                                                  <ProductActionButton>
                                                            <Tooltip placement="left" title="Share this product">
                                                                      <ShareIcon color="primary" />
                                                            </Tooltip>
                                                  </ProductActionButton>
                                                  <ProductActionButton onClick={() => showProductDetailDialog()}>
                                                            <Tooltip placement="left" title="Full view">
                                                                      <FitScreenIcon color="primary" />
                                                            </Tooltip>
                                                  </ProductActionButton>
                                        </Stack>
                              </ProductActionsWrapper>
                              {addedToCartAlert && (
                                        <Alert variant="filled" severity="success" sx={{ position: 'fixed', bottom: '0px', left: '50%', transform: 'translateX(-50%)', width: '250px', zIndex: '1000' }}>
                                                  {t('product.added-to-cart')}
                                        </Alert>
                              )}
                              {addedToWishlistAlert && (
                                        <Alert variant="filled" severity="success" sx={{ position: 'fixed', bottom: '0px', left: '50%', transform: 'translateX(-50%)', width: '250px', zIndex: '1000' }}>
                                                  {t('product.added-to-wishlist')}
                                        </Alert>
                              )}
                              <ProductAddToCart variant="contained" onClick={() => { callCartAlert(); dispatch(addToCart(product)) }}>Add to cart</ProductAddToCart >
                              <ProductDetailDialog product={product} />
                    </Product>
          )
}
