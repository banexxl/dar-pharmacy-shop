import { Dialog, DialogTitle, Slide, Box, IconButton, DialogContent, Typography, TableContainer, Table, TableRow, TableHead, TableBody, Paper, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../styles/theme";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Counter from "../productdetails/counter";
import { CartProductImage, CartWrapper, CartProductDetailInfoWrapper, CartProduct, StyledTableCell, StyledTableRow } from "@/styles/cart"
import { useDispatch, useSelector } from "react-redux";
import ICartItem from "@/interfaces/cart";
import { useState } from "react";

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
          const [itemPriceIndex, setItemPriceIndex] = useState<number>(0)

          const cart: ICartItem[] = useSelector((state: any) => state.cart)

          const handleQuantityChange = (event: SelectChangeEvent, cartItem: ICartItem) => {
                    //cartItem.quantity.indexOf(event.target.value)
                    setItemPriceIndex(cartItem.price[cartItem.quantity.indexOf(event.target.value)])
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
                                                                      {cart.map((cartItem: ICartItem) => (
                                                                                <StyledTableRow key={cartItem._id}>
                                                                                          <StyledTableCell component="th" scope="row">
                                                                                                    <CartProductImage src={cartItem.imageURL} />
                                                                                          </StyledTableCell>
                                                                                          <StyledTableCell align="left">{cartItem.name}</StyledTableCell>
                                                                                          <StyledTableCell>
                                                                                                    <FormControl fullWidth>
                                                                                                              <InputLabel id="demo-simple-select-label">Pakovanje</InputLabel>
                                                                                                              <Select
                                                                                                                        labelId="demo-simple-select-label"
                                                                                                                        id="demo-simple-select"
                                                                                                                        defaultValue=''
                                                                                                                        label="Pakovanje"
                                                                                                                        onChange={(e: SelectChangeEvent) => handleQuantityChange(e, cartItem)}
                                                                                                              >
                                                                                                                        {
                                                                                                                                  cartItem.quantity.map((item: string) => {
                                                                                                                                            return (
                                                                                                                                                      <MenuItem key={item} value={item}>{item}</MenuItem>
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
                                                                                          <StyledTableCell align="left">{cartItem.price[itemPriceIndex]}</StyledTableCell>

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
