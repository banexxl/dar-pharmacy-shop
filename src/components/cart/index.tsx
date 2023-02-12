import { Dialog, DialogTitle, Slide, Box, IconButton, DialogContent, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../styles/theme";
import styled from "@emotion/styled";
import { Product, ProductImage } from "../../styles/product";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Counter from "../productdetails/counter";
import { CartWrapper, ProductDetailInfoWrapper } from "@/styles/cart";
import { useShoppingCart } from "@/context/cart";

function SlideTransition(props: any) {
          return <Slide direction="down" {...props} />;
}

export default function Cart({ open, onClose }: any) {
          const theme = useTheme();
          const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"));

          const cart = useShoppingCart()

          console.log(cart.cartItems);


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
                                                  {
                                                            cart.cartItems ?
                                                                      cart.cartItems.map((product: any) => {
                                                                                <Product id={product.id} sx={{ mr: 4 }}>
                                                                                          <ProductImage src={product.imageURL} />
                                                                                          <ProductDetailInfoWrapper>
                                                                                                    <Typography sx={{ lineHeight: 2 }} variant="h4">
                                                                                                              {product.id}
                                                                                                    </Typography>
                                                                                                    <Counter></Counter>
                                                                                          </ProductDetailInfoWrapper>
                                                                                </Product>
                                                                      })
                                                                      :
                                                                      null
                                                  }

                                        </CartWrapper>
                              </DialogContent>
                    </Dialog>
          );
}
