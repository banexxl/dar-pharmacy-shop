import { useEffect, useState } from "react"
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from "../../styles/product";
import { Stack, Tooltip, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetails from "../productdetails";
import ProductMeta from "./ProductMeta";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, increment } from "../../store/cartSlice";

export default function SingleProductDesktop({ product, isScreenToMedium }: any) {

          const [ProductDetailDialog, showProductDetailDialog, closeProductDialog] = useDialogModal(ProductDetails)

          const [showOptions, setShowOptions] = useState(false);

          const dispatch = useDispatch();

          const handleMouseEnter = () => {
                    setShowOptions(true);
          };
          const handleMouseLeave = () => {
                    setShowOptions(false);
          };

          return (
                    <>
                              <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                        <ProductImage src={product.imageURL} />
                                        <ProductFavButton isfav={0}>
                                                  <Tooltip placement="left" title="Add to wishlist">
                                                            <FavoriteIcon />
                                                  </Tooltip>
                                        </ProductFavButton>
                                        {(showOptions || isScreenToMedium) && (
                                                  <ProductAddToCart show={showOptions.toString()} variant="contained" onClick={() => dispatch(addToCart(product))}>
                                                            Add to cart
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
                              </Product>
                              <ProductMeta product={product} />
                              <ProductDetailDialog product={product} />
                    </>
          );
}
