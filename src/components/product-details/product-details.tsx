import { Product, ProductImage } from '@/styles/productdetails';
import { ProductDetailInfoWrapper, ProductDetailWrapper } from '@/styles/productdetails'
import { Colors } from '@/styles/theme';
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IProduct from '@/interfaces/product/product.interface';
import React from 'react'

function ProductDetails(product: IProduct) {

          const theme = useTheme();
          const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"));

          return (
                    <ProductDetailWrapper sx={{ marginTop: '100px' }} display={"flex"} flexDirection={isScreenToMedium ? "column" : "row"}>
                              <Product sx={{ mr: 4 }}>
                                        <ProductImage src={product.imageURL} />
                              </Product>
                              <ProductDetailInfoWrapper>
                                        <Typography >SKU: ?</Typography>
                                        <Typography >Availability: {product.availableStock} in stock</Typography>
                                        <Typography sx={{ lineHeight: 2 }} variant="h4">
                                                  {product.name}
                                        </Typography>
                                        <Typography variant="h5">
                                                  Opis:
                                        </Typography>
                                        {product.description}
                                        <Typography variant="h5">
                                                  Instrukcije:
                                        </Typography>
                                        {product.instructions}
                                        <Typography variant="h5">
                                                  Napomena:
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
                                                  <Button variant="contained">Add to Cart</Button>
                                        </Box>
                                        <Box
                                                  display="flex"
                                                  alignItems="center"
                                                  sx={{ mt: 4, color: Colors.light }}
                                        >
                                                  <FavoriteIcon sx={{ mr: 2 }} />
                                                  Add to wishlist
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
          )
}

export default ProductDetails