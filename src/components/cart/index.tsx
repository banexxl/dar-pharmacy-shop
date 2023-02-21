import { Dialog, DialogTitle, Slide, Box, IconButton, DialogContent, Typography, TableContainer, Table, TableRow, TableHead, TableBody, Paper, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../styles/theme";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Counter from "../../utils/counter";
import { CartWrapper, StyledTableCell, StyledTableHead, StyledTableRow } from "@/styles/cart"
import { useDispatch, useSelector } from "react-redux";
import ICartItem from "@/interfaces/cart";
import CartItem from "./components/cartItem";

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
          const cart: ICartItem[] = useSelector((state: any) => state.cart)

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
                              <DialogContent sx={{ display: 'flex' }}>
                                        <CartWrapper component={Paper}>
                                                  <Table aria-label="customized table"
                                                  >
                                                            <StyledTableHead>
                                                                      <StyledTableRow>
                                                                                <StyledTableCell>Slika</StyledTableCell>
                                                                                <StyledTableCell align="left">Naziv</StyledTableCell>
                                                                                <StyledTableCell align="left">Pakovanje</StyledTableCell>
                                                                                <StyledTableCell align="left">Sifra</StyledTableCell>
                                                                                <StyledTableCell align="left">Kolicina</StyledTableCell>
                                                                                <StyledTableCell align="left">Cena</StyledTableCell>
                                                                                <StyledTableCell align="left">Ukupno</StyledTableCell>
                                                                      </StyledTableRow>
                                                            </StyledTableHead>
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
                                        <Typography>
                                                  dssdsdsds
                                        </Typography>
                              </DialogContent>
                    </Dialog >
          );
}
