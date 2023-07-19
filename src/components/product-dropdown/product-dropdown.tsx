import { Dialog, DialogTitle, Slide, Box, IconButton, DialogContent, Typography, Button, Alert } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../styles/theme";
import styled from "@emotion/styled";
import { ProductAddToCart, Product, ProductImage } from "../../styles/product";
import { BannerShopButton } from "../../styles/banner";
import Counter from "../../utils/counter";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { ProductDetailInfoWrapper, ProductDetailWrapper } from "@/styles/productdetails";
import { FC, useState } from "react";
import ICartItem from "@/interfaces/cart/cart.interface";
import { useTranslation } from "next-i18next";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cart/cart.slice";
import { addToWishList, removeFromWishList } from "@/store/wishlist/wishlist.slice";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { LocalStorageStore } from "@/interfaces/local-storage";
import { log } from "console";
import IProduct from "@/interfaces/product/product.interface";
import ProductMeta from "../products/products-meta";

function SlideTransition(props: any) {
          return <Slide direction="down" {...props} />;
}

interface IProductDetailProps {
          open: boolean,
          onClose: () => void,
          product: ICartItem
}

const ProductDetail: FC<IProductDetailProps> = ({ open, onClose, product }) => {

          const theme = useTheme();
          const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"));
          const { t } = useTranslation('common')
          const dispatch = useDispatch()
          const [addedToCartAlert, setAddedToCartAlert] = useState(false)
          const [addedToWishlistAlert, setAddedToWishlistAlert] = useState(false)
          const [removedFromWishlistAlert, setRemovedFromWishlistAlert] = useState(false)

          const callCartAlert = () => {
                    setAddedToCartAlert(true)
                    const timeId = setTimeout(() => {
                              // After X seconds set the show value to false
                              setAddedToCartAlert(false)
                    }, 1500)

                    return () => {
                              clearTimeout(timeId)
                    }
          }

          const callWishlistAlert = () => {
                    setAddedToWishlistAlert(true)
                    const timeId = setTimeout(() => {
                              setAddedToWishlistAlert(false)
                    }, 1500)

                    return () => {
                              clearTimeout(timeId)
                    }
          }

          const callRemovedFromWishlistAlert = () => {
                    setRemovedFromWishlistAlert(true)
                    const timeId = setTimeout(() => {
                              setRemovedFromWishlistAlert(false)
                    }, 1500)

                    return () => {
                              clearTimeout(timeId)
                    }
          }

          const localStorage: any = useLocalStorage('persist:root', {})
          const localStorageReducers: any = localStorage[0]
          const localStorageWishList: IProduct[] = JSON.parse(localStorageReducers.wishListReducer)

          const wishListProductID = localStorageWishList.find((el: IProduct) => {
                    return el._id == product._id
          })

          return (
                    <Dialog
                              TransitionComponent={SlideTransition}

                              open={open}
                              fullScreen
                    >
                              <DialogTitle
                                        sx={{
                                                  background: Colors.secondary,
                                        }}
                              >
                                        <Box
                                                  display="flex"
                                                  alignItems="center"
                                                  justifyContent={"space-between"}
                                        >
                                                  {product.name}
                                                  <IconButton onClick={onClose}>
                                                            <CloseIcon />
                                                  </IconButton>
                                        </Box>
                              </DialogTitle>

                              <DialogContent>
                                        <ProductDetailWrapper sx={{ marginTop: '100px' }} display={"flex"} flexDirection={isScreenToMedium ? "column" : "row"}>
                                                  <Product sx={{ mr: 4 }}>
                                                            <ProductImage src={product.imageURL} />
                                                  </Product>
                                                  <ProductDetailInfoWrapper>
                                                            <ProductMeta product={product} />
                                                            <Typography textAlign='center'>{t('product.sku')}: {product._id.slice(-8)}</Typography>
                                                            <Typography textAlign='center'>{t('product.availability')}: {product.availableStock} {t('product.in-stock')}</Typography>
                                                            <Typography variant="h5">
                                                                      {t('product.description')}
                                                            </Typography>
                                                            {product.description}
                                                            <Typography variant="h5">
                                                                      {t('product.instructions')}
                                                            </Typography>
                                                            {product.instructions}
                                                            <Typography variant="h5">
                                                                      {t('product.warning')}
                                                            </Typography>
                                                            {product.warning}
                                                            <Typography>
                                                            </Typography>
                                                            <Box
                                                                      sx={{ mt: 4 }}
                                                                      display="flex"
                                                                      alignItems="center"
                                                                      justifyContent="space-between"
                                                            >
                                                                      <Button variant="contained" onClick={() => { dispatch(addToCart(product)); callCartAlert(); }}>{t('product.add-to-cart')}</Button>
                                                            </Box>
                                                            <Box
                                                                      display="flex"
                                                                      alignItems="center"
                                                                      sx={{ mt: 4, color: Colors.light }}
                                                            >
                                                                      {
                                                                                wishListProductID === null || wishListProductID === undefined ?
                                                                                          <FavoriteBorderIcon sx={{ mr: 1, cursor: 'pointer', ':hover': { filter: `drop-shadow(3px 5px 2px ${Colors.secondary})` } }} onClick={() => { dispatch(addToWishList(product)); callWishlistAlert(); }} />
                                                                                          :
                                                                                          <FavoriteIcon sx={{ mr: 1, cursor: 'pointer', ':hover': { filter: `drop-shadow(3px 5px 2px ${Colors.secondary})` } }} onClick={() => { dispatch(removeFromWishList(product)); callRemovedFromWishlistAlert(); }} />
                                                                      }
                                                                      {t('product.add-to-wishlist')}
                                                            </Box>
                                                            <Box
                                                                      sx={{
                                                                                mt: 4,
                                                                                color: Colors.dove_gray,
                                                                      }}
                                                            >
                                                                      <FacebookIcon />
                                                                      <TwitterIcon sx={{ pl: 2 }} />
                                                                      <InstagramIcon sx={{ pl: 2 }} />
                                                            </Box>
                                                  </ProductDetailInfoWrapper>
                                        </ProductDetailWrapper>
                                        {addedToCartAlert && (
                                                  <Alert variant="filled" severity="success" sx={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', width: '250px', zIndex: '1000' }}>
                                                            {t('product.added-to-cart')}
                                                  </Alert>
                                        )}
                                        {addedToWishlistAlert && (
                                                  <Alert variant="filled" severity="success" sx={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', width: '250px', zIndex: '1000' }}>
                                                            {t('product.added-to-wishlist')}
                                                  </Alert>
                                        )}
                                        {removedFromWishlistAlert && (
                                                  <Alert variant="filled" severity="success" sx={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', width: '250px', zIndex: '1000' }}>
                                                            {t('product.removed-from-wishlist')}
                                                  </Alert>
                                        )}
                              </DialogContent>
                    </Dialog>
          );
}

export default ProductDetail
