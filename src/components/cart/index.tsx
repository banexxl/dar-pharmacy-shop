import { Dialog, DialogTitle, Slide, Box, IconButton, DialogContent, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../styles/theme";
import styled from "@emotion/styled";
import { Product, ProductImage } from "../../styles/product";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Counter from "../productdetails/counter";
import { CartWrapper, ProductDetailInfoWrapper } from "@/styles/cart"
import { useDispatch, useSelector } from "react-redux";
import ICartItem from "@/interfaces/cart";
import IProduct from "@/interfaces/product";

function SlideTransition(props: any) {
          return <Slide direction="down" {...props} />;
}

interface ICartProps extends ICartItem {
          open: boolean
          onClose: () => void
}

export default function Cart({ open, onClose }: ICartProps) {

          const theme = useTheme()
          const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"))

          const cart = useSelector((state: any) => state.cart)
          console.log('cart: ', cart);

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
                                                            cart ?
                                                                      cart.map((product: IProduct) => {
                                                                                < Product id={product._id} sx={{ mr: 4 }}>
                                                                                          <ProductImage src={product.imageURL} />
                                                                                          <ProductDetailInfoWrapper>
                                                                                                    <Typography sx={{ lineHeight: 2 }} variant="h4">
                                                                                                              {product.name}
                                                                                                              {product.price}x{product.quantity}
                                                                                                    </Typography>
                                                                                                    <Counter />
                                                                                          </ProductDetailInfoWrapper>
                                                                                </Product>
                                                                      })
                                                                      : null
                                                  }
                                        </CartWrapper>
                              </DialogContent>
                    </Dialog >
          );
}
