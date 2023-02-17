import { Dialog, DialogTitle, Slide, Box, IconButton, DialogContent, Typography, TableContainer, Table, TableRow, TableHead, TableBody, Paper, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../styles/theme";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Counter from "../productdetails/counter";
import { CartProductImage, CartWrapper, CartProductDetailInfoWrapper, CartProduct, StyledTableCell, StyledTableRow } from "@/styles/cart"
import { useDispatch, useSelector } from "react-redux";
import ICartItem from "@/interfaces/cart";
import { ChangeEvent, ChangeEventHandler, MouseEventHandler, ReactEventHandler, useState } from "react";
import { KeyObject } from "crypto";
import { Key } from "@mui/icons-material";

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
          const [quantityIndex, setQuantityIndex] = useState<number>(0)

          const cart: ICartItem[] = useSelector((state: any) => state.cart)

          const setCartItemPrice = (index: number, priceIndex: number): string => {
                    const selectedPrice = cart[index].price[priceIndex]
                    return selectedPrice
          }

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
                                        <CartWrapper component={Paper}>
                                                  <Table aria-label="customized table">
                                                            <TableHead>
                                                                      <TableRow>
                                                                                <StyledTableCell>Slika</StyledTableCell>
                                                                                <StyledTableCell align="left">Naziv</StyledTableCell>
                                                                                <StyledTableCell align="left">Pakovanje</StyledTableCell>
                                                                                <StyledTableCell align="left">Sifra</StyledTableCell>
                                                                                <StyledTableCell align="left">Kolicina</StyledTableCell>
                                                                                <StyledTableCell align="left">Cena</StyledTableCell>
                                                                                <StyledTableCell align="left">Ukupno</StyledTableCell>
                                                                      </TableRow>
                                                            </TableHead>
                                                            <TableBody>
                                                                      {cart.map((cartItem: ICartItem, index: number) => (
                                                                                <StyledTableRow key={cartItem._id}>
                                                                                          <StyledTableCell component="th" scope="row">
                                                                                                    <CartProductImage src={cartItem.imageURL} />
                                                                                          </StyledTableCell>
                                                                                          <StyledTableCell align="left">{cartItem.name}</StyledTableCell>
                                                                                          <StyledTableCell>
                                                                                                    <FormControl fullWidth>
                                                                                                              <InputLabel id="demo-simple-select-label">Pakovanje</InputLabel>
                                                                                                              <Select
                                                                                                                        key={cartItem._id}
                                                                                                                        labelId="demo-simple-select-label"
                                                                                                                        id="demo-simple-select"
                                                                                                                        defaultValue={cartItem.quantity[0]}
                                                                                                                        label="Pakovanje"
                                                                                                                        onChange={() => setQuantityIndex(index)}
                                                                                                              >
                                                                                                                        {
                                                                                                                                  cartItem.quantity.map((item: string, index: number) => {
                                                                                                                                            return (
                                                                                                                                                      <MenuItem key={index} value={item}>{cartItem.quantity[index]}</MenuItem>
                                                                                                                                            )
                                                                                                                                  })
                                                                                                                        }
                                                                                                              </Select>
                                                                                                    </FormControl>
                                                                                          </StyledTableCell>
                                                                                          <StyledTableCell align="left">{cartItem._id.toString().slice(-8).toUpperCase()}</StyledTableCell>
                                                                                          <StyledTableCell>
                                                                                                    <Counter />
                                                                                          </StyledTableCell>
                                                                                          <StyledTableCell align="left">{setCartItemPrice(index, quantityIndex)}</StyledTableCell>

                                                                                          <StyledTableCell align="left">total</StyledTableCell>
                                                                                </StyledTableRow>
                                                                      ))}
                                                            </TableBody>
                                                  </Table>
                                        </CartWrapper>
                              </DialogContent>
                    </Dialog >
          );
}
