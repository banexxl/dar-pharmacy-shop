import { useState } from "react";
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

export default function SingleProductMobile({ product, isScreenToMedium }: any) {

          const { t } = useTranslation();
          const [ProductDetailDialog, showProductDetailDialog, closeProductDialog] = useDialogModal(ProductDetails);
          const [addedToCartAlert, setAddedToCartAlert] = useState(false)
          const [showOptions, setShowOptions] = useState(false);

          const dispatch = useDispatch();

          const handleMouseEnter = () => {
                    setShowOptions(true);
          };
          const handleMouseLeave = () => {
                    setShowOptions(false);
          };

          const callAlert = () => {
                    setAddedToCartAlert(true)
                    const timeId = setTimeout(() => {
                              // After 3 seconds set the show value to false
                              setAddedToCartAlert(false)
                    }, 2000)

                    return () => {
                              clearTimeout(timeId)
                    }
          }

          return (
                    <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                              <ProductImage src={product.imageURL} />
                              <ProductMeta product={product} isScreenToMedium={isScreenToMedium} />
                              <ProductActionsWrapper>
                                        <Stack direction={isScreenToMedium ? "row" : "column"}>
                                                  <ProductFavButton isfav={0}>
                                                            <FavoriteIcon />
                                                  </ProductFavButton>
                                                  <ProductActionButton>
                                                            <Tooltip placement="left" title="share this product">
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
                              <ProductAddToCart variant="contained" onClick={() => { callAlert(); dispatch(addToCart(product)) }}>Add to cart</ProductAddToCart >
                              <ProductDetailDialog product={product} />
                    </Product>
          );
}
