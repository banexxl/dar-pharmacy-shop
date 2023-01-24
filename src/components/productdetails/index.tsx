import { Dialog, DialogTitle, Slide, Box, IconButton, DialogContent, Typography, Button, Stack, } from "@mui/material";
import { useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../styles/theme";
import styled from "@emotion/styled";
import { ProductAddToCart, Product, ProductImage } from "../../styles/product";
import { BannerShopButton } from "../../styles/banner";
import ProductCounter from "./counter";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

function SlideTransition(props: any) {
          return <Slide direction="down" {...props} />;
}

const ProductDetailWrapper = styled(Box)(({ theme }: any) => ({
          display: "flex",
          padding: theme.spacing(4),
}))

const ProductDetailInfoWrapper = styled(Box)(() => ({
          display: "flex",
          flexDirection: "column",
          maxWidth: 500,
          lineHeight: 1.5,
}));

export default function ProductDetail({ open, onClose, product }: any) {

          const theme = useTheme();
          const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"));
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
                                        <ProductDetailWrapper display={"flex"} flexDirection={isScreenToMedium ? "column" : "row"}>
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
                                                                      <ProductCounter />
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
                              </DialogContent>
                    </Dialog>
          );
}
