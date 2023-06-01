import { useState } from "react"
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from "../../styles/product";
import { Alert, Stack, Tooltip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetails from "../product-dropdown/product-dropdown";
import ProductMeta from "./products-meta";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cart/cart.slice";
import { useTranslation } from "next-i18next";

export default function SingleProductDesktop({ product, isScreenToMedium }: any) {

          const { t } = useTranslation();
          const [ProductDetailDialog, showProductDetailDialog] = useDialogModal(ProductDetails)
          const [addedToCartAlert, setAddedToCartAlert] = useState(false)
          const [showOptions, setShowOptions] = useState(false);
          const [loading, setLoading] = useState(false);
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

          const callAlert = () => {
                    setAddedToCartAlert(true)
                    setLoading(true)
                    const timeId = setTimeout(() => {
                              // After X seconds set the show value to false
                              setLoading(false)
                              setAddedToCartAlert(false)
                    }, 500)

                    return () => {
                              clearTimeout(timeId)
                    }
          }

          return (
                    <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                              <ProductImage src={product.imageURL} />
                              <ProductFavButton isfav={0}>
                                        <Tooltip placement="left" title="Add to wishlist">
                                                  <FavoriteIcon />
                                        </Tooltip>
                              </ProductFavButton>
                              {(showOptions || isScreenToMedium) && (
                                        <ProductAddToCart show={showOptions} variant="contained" loading={loading} onClick={() => {
                                                  callAlert()
                                                  dispatch(addToCart(product))
                                        }}
                                        >
                                                  {t('homepage.addtocart')}
                                        </ProductAddToCart>
                              )}
                              <ProductActionsWrapper show={showOptions.toString() || isScreenToMedium}>
                                        <Stack direction={isScreenToMedium ? "row" : "column"}>
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
                              <ProductMeta product={product} />
                              <ProductDetailDialog product={product} />
                              {addedToCartAlert && (
                                        <Alert variant="filled" severity="success" sx={{ position: 'fixed', bottom: '0px', left: '50%', transform: 'translateX(-50%)', width: '250px', zIndex: '1000' }}>
                                                  {t('product.added-to-cart')}
                                        </Alert>
                              )}
                    </Product>
          );
}
