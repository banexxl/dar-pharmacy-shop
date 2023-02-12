import { useState } from "react";
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage, ProductMetaWrapper, } from "../../styles/product";
import { Stack, Tooltip, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetails from "../productdetails";
import ProductMeta from "./ProductMeta";
import { useShoppingCart } from "@/context/cart";

export default function SingleProduct({ product, isScreenToMedium }: any) {

          const [ProductDetailDialog, showProductDetailDialog, closeProductDialog] =
                    useDialogModal(ProductDetails);

          const [showOptions, setShowOptions] = useState(false);

          const handleMouseEnter = () => {
                    setShowOptions(true);
          };
          const handleMouseLeave = () => {
                    setShowOptions(false);
          };

          const cart = useShoppingCart()

          const handleAddToCart = (e: any) => {

                    cart.increaseCartQuantity(e)

          }

          return (
                    <>
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
                              </Product>
                              <ProductAddToCart variant="contained" onClick={(e: any) => handleAddToCart(product.id)}>Add to cart</ProductAddToCart>
                              <ProductDetailDialog product={product} />
                    </>
          );
}
