import { Dialog, DialogTitle, Slide, Box, IconButton, DialogContent, Table, TableBody, Paper, TableRow } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../styles/theme";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { CartWrapper, StyledHeaderCell, StyledHeader, StyledHeaderRow } from "@/styles/cart"
import { useSelector } from "react-redux";
import ICartItem from "@/interfaces/cart/cart.interface";
import CartItem from "./components/cartItem";
import CartTotals from "./components/cartTotals";

function SlideTransition(props: any) {
          return <Slide direction="down" {...props} />;
}

interface ICartProps extends ICartItem {
          open: boolean
          onClose: () => void
          addSingleHandler: (id: number) => void
          removeSingleHandler: (id: number) => void
}

export default function Cart({ open, onClose }: ICartProps) {

          const theme = useTheme()
          const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"))
          const cart: ICartItem[] = useSelector((state: any) => state.cartState)

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

                              <DialogContent sx={{ display: 'flex', flexDirection: { md: 'row', xs: 'column' } }}>
                                        <CartWrapper component={Paper}>
                                                  <Table aria-label="customized table"
                                                  >
                                                            <StyledHeader>
                                                                      <StyledHeaderRow>
                                                                                <StyledHeaderCell>Slika</StyledHeaderCell>
                                                                                <StyledHeaderCell align="left">Naziv</StyledHeaderCell>
                                                                                <StyledHeaderCell align="left">Pakovanje</StyledHeaderCell>
                                                                                <StyledHeaderCell align="left">Sifra</StyledHeaderCell>
                                                                                <StyledHeaderCell align="left">Kolicina</StyledHeaderCell>
                                                                                <StyledHeaderCell align="left">Cena</StyledHeaderCell>
                                                                                <StyledHeaderCell align="left">Ukupno</StyledHeaderCell>
                                                                      </StyledHeaderRow>
                                                            </StyledHeader>
                                                            <TableBody>
                                                                      {cart.map((cartItem: ICartItem) => (
                                                                                <CartItem key={cartItem._id} count={cartItem.count} _id={cartItem._id}
                                                                                          name={cartItem.name} description={cartItem.description} category={cartItem.category}
                                                                                          availableStock={cartItem.availableStock} ingredients={cartItem.ingredients}
                                                                                          instructions={cartItem.instructions} quantity={cartItem.quantity}
                                                                                          warning={cartItem.warning} imageURL={cartItem.imageURL} price={cartItem.price} />
                                                                      ))}
                                                            </TableBody>
                                                  </Table>
                                        </CartWrapper>
                                        <CartTotals onClose={onClose} />
                              </DialogContent>
                    </Dialog >
          );
}
