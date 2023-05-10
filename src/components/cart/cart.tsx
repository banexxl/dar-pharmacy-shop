import { Dialog, DialogTitle, Slide, Box, IconButton, DialogContent, Table, TableBody, Paper, TableRow } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../styles/theme";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { CartWrapper, StyledHeaderCell, StyledHeader, StyledTable, StyledTableBody } from "@/styles/cart"
import { useSelector } from "react-redux";
import ICartItem from "@/interfaces/cart/cart.interface";
import CartItem from "./components/cartItem";
import CartTotals from "./components/cartTotals";
import { useTranslation } from "next-i18next";

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
          const { t } = useTranslation();
          const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"))
          const cart = useSelector((state: any) => ({ ...state.persistReduce }))

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
                                                  {t('cart.products')}
                                                  <IconButton onClick={onClose}>
                                                            <CloseIcon />
                                                  </IconButton>
                                        </Box>
                              </DialogTitle>

                              <DialogContent sx={{ display: 'flex', flexDirection: { md: 'row', xs: 'column' } }}>
                                        <CartWrapper component={Paper}>
                                                  <StyledTable>
                                                            <StyledHeader>
                                                                      <StyledHeaderCell>{t('cart.image')}</StyledHeaderCell>
                                                                      <StyledHeaderCell align="left">{t('cart.name')}</StyledHeaderCell>
                                                                      <StyledHeaderCell align="left">{t('cart.quantity')}</StyledHeaderCell>
                                                                      <StyledHeaderCell align="left">{t('cart.code')}</StyledHeaderCell>
                                                                      <StyledHeaderCell align="left">{t('cart.amount')}</StyledHeaderCell>
                                                                      <StyledHeaderCell align="left">{t('cart.price')}</StyledHeaderCell>
                                                                      <StyledHeaderCell align="left">{t('cart.total')}</StyledHeaderCell>
                                                            </StyledHeader>
                                                            <StyledTableBody>
                                                                      {cart.cartSliceReducer.map((cartItem: ICartItem) => (
                                                                                <CartItem key={cartItem._id} count={cartItem.count} _id={cartItem._id}
                                                                                          name={cartItem.name} description={cartItem.description} category={cartItem.category}
                                                                                          availableStock={cartItem.availableStock} ingredients={cartItem.ingredients}
                                                                                          instructions={cartItem.instructions} quantity={cartItem.quantity}
                                                                                          warning={cartItem.warning} imageURL={cartItem.imageURL} price={cartItem.price} />
                                                                      ))}
                                                            </StyledTableBody>
                                                  </StyledTable>
                                        </CartWrapper>
                                        <CartTotals onClose={onClose} />
                              </DialogContent>
                    </Dialog >
          );
}
