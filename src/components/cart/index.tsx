import { Dialog, DialogTitle, Slide, Box, IconButton, DialogContent, Typography, Button, Stack, } from "@mui/material";
import { useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../styles/theme";
import styled from "@emotion/styled";
import { ProductAddToCart, Product, ProductImage } from "../../styles/product";
import { BannerShopButton } from "../../styles/banner";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Counter from "../productdetails/counter";

function SlideTransition(props: any) {
          return <Slide direction="down" {...props} />;
}

const CartWrapper = styled(Box)(({ theme }: any) => ({
          display: "flex",
          padding: theme.spacing(4),
}));

const ProductDetailInfoWrapper = styled(Box)(() => ({
          display: "flex",
          flexDirection: "column",
          maxWidth: 500,
          lineHeight: 1.5,
}));

export default function Cart({ open, onClose, product }: any) {
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
                                                  Proizvodi u korpi
                                                  <IconButton onClick={onClose}>
                                                            <CloseIcon />
                                                  </IconButton>
                                        </Box>
                              </DialogTitle>
                              <DialogContent>
                                        <CartWrapper display={"flex"} flexDirection={isScreenToMedium ? "column" : "row"}>
                                                  <Product sx={{ mr: 4 }}>
                                                            <ProductImage />
                                                  </Product>
                                                  <ProductDetailInfoWrapper>
                                                            <Typography>SKU: 123</Typography>
                                                            <Typography>Availability: 5 in stock</Typography>
                                                            <Typography sx={{ lineHeight: 2 }} variant="h4">
                                                                      Product name
                                                            </Typography>

                                                            <Counter></Counter>
                                                  </ProductDetailInfoWrapper>
                                        </CartWrapper>
                              </DialogContent>
                    </Dialog>
          );
}
