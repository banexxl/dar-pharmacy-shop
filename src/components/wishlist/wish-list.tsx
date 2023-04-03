import { Dialog, DialogTitle, Slide, Box, IconButton, DialogContent, Typography, Button, Stack, } from "@mui/material";
import { useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../styles/theme";
import styled from "@emotion/styled";
import { ProductAddToCart, Product, ProductImage } from "../../styles/product"
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

function SlideTransition(props: any) {
          return <Slide direction="down" {...props} />;
}

const WishListWrapper = styled(Box)(({ theme }: any) => ({
          display: "flex",
          padding: theme.spacing(4),
}));

const ProductDetailInfoWrapper = styled(Box)(() => ({
          display: "flex",
          flexDirection: "column",
          maxWidth: 500,
          lineHeight: 1.5,
}));

export default function WishList({ open, onClose, product }: any) {

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
                                                  Omiljeni proizvodi
                                                  <IconButton onClick={onClose}>
                                                            <CloseIcon />
                                                  </IconButton>
                                        </Box>
                              </DialogTitle>
                              <DialogContent>
                                        <WishListWrapper display={"flex"} flexDirection={isScreenToMedium ? "column" : "row"}>
                                                  <Product sx={{ mr: 4, width: { xs: '150px', sm: '200px', md: '250px', lg: '400px' } }}>
                                                            <ProductImage />
                                                  </Product>
                                                  <ProductDetailInfoWrapper>
                                                            <Typography sx={{ lineHeight: 2 }} variant="h4">
                                                                      Product name
                                                            </Typography>
                                                            <Typography>
                                                                      Description
                                                            </Typography>
                                                            <Typography>
                                                                      Price
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
                                                                      Wishlist
                                                            </Box>
                                                  </ProductDetailInfoWrapper>
                                        </WishListWrapper>
                              </DialogContent>
                    </Dialog>
          );
}
