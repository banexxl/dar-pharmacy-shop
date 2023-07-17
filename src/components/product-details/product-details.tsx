import { Product, ProductImage } from '@/styles/productdetails';
import { ProductDetailInfoWrapper, ProductDetailWrapper } from '@/styles/productdetails'
import { Colors } from '@/styles/theme';
import { Alert, Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IProduct from '@/interfaces/product/product.interface';
import React, { useState } from 'react'
import { useTranslation } from 'next-i18next';
import { addToCart } from '@/store/cart/cart.slice'
import { useDispatch } from 'react-redux';
import { addToWishList } from '@/store/wishlist/wishlist.slice';

function ProductDetails(product: IProduct) {

          const theme = useTheme();
          const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"))
          const { t } = useTranslation('common')
          const dispatch = useDispatch()
          const [addedToCartAlert, setAddedToCartAlert] = useState(false)
          const [addedToWishlistAlert, setAddedToWishlistAlert] = useState(false)
          const [loading, setLoading] = useState(false)

          const callCartAlert = () => {
                    setAddedToCartAlert(true)
                    setLoading(true)
                    const timeId = setTimeout(() => {
                              // After X seconds set the show value to false
                              setLoading(false)
                              setAddedToCartAlert(false)
                    }, 1500)

                    return () => {
                              clearTimeout(timeId)
                    }
          }

          return (
                    <ProductDetailWrapper sx={{ marginTop: '100px' }} display={"flex"} flexDirection={isScreenToMedium ? "column" : "row"}>
                              <Product sx={{ mr: 4 }}>
                                        <ProductImage src={product.imageURL} />
                              </Product>
                              <ProductDetailInfoWrapper>
                                        <Typography >{t('product.sku')}: {product._id.slice(-8)}</Typography>
                                        <Typography >{t('product.availability')}: {product.availableStock} {t('product.in-stock')}</Typography>
                                        <Typography sx={{ lineHeight: 2 }} variant="h4">
                                                  {product.name}
                                        </Typography>
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
                                                  <Button variant="contained" onClick={() => dispatch(addToCart(product))}>{t('product.add-to-cart')}</Button>
                                        </Box>
                                        <Box
                                                  display="flex"
                                                  alignItems="center"
                                                  sx={{ mt: 4, color: Colors.light }}
                                        >
                                                  <FavoriteIcon sx={{ mr: 2 }} onClick={() => dispatch(addToWishList(product))} />
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
                    </ProductDetailWrapper>
          )
}

export default ProductDetails