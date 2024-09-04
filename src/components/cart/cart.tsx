import { Dialog, DialogTitle, Slide, Box, IconButton, DialogContent, Table, TableBody, Paper, TableRow, Typography } from "@mui/material";
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
     const cart = useSelector((state: any) => state.persistReduce.cartSliceReducer)

     return (
          <Dialog
               TransitionComponent={SlideTransition}
               open={open}
               fullScreen
          >
               <DialogTitle
                    sx={{
                         background: Colors.primary.lighter,
                    }}
               >
                    <Box
                         display="flex"
                         alignItems="center"
                         justifyContent={"space-between"}
                    >
                         <Typography sx={{ color: Colors.primary.main, fontSize: '1.5rem', fontWeight: 'bold' }}>
                              Proizvodi u korpi:
                         </Typography>
                         <IconButton onClick={onClose}>
                              <CloseIcon />
                         </IconButton>
                    </Box>
               </DialogTitle>

               <DialogContent>
                    <CartWrapper component={Paper} theme={theme}>
                         <StyledTable>
                              <StyledHeader>
                                   <StyledHeaderCell theme={theme}>Slika</StyledHeaderCell>
                                   <StyledHeaderCell theme={theme}  >Naziv</StyledHeaderCell>
                                   <StyledHeaderCell theme={theme}  >Pakovanje</StyledHeaderCell>
                                   <StyledHeaderCell theme={theme}  >Kod</StyledHeaderCell>
                                   <StyledHeaderCell theme={theme}  >Količina</StyledHeaderCell>
                                   <StyledHeaderCell theme={theme} >Cena</StyledHeaderCell>
                                   <StyledHeaderCell theme={theme} >Ukupno sa PDV</StyledHeaderCell>
                                   <StyledHeaderCell theme={theme} >Ukupno sa popustom</StyledHeaderCell>
                                   <StyledHeaderCell theme={theme} >Obriši</StyledHeaderCell>
                              </StyledHeader>
                              <StyledTableBody theme={theme}>
                                   {cart.map((cartItem: ICartItem) => (
                                        <CartItem discount={cartItem.discount} discountAmount={cartItem.discountAmount} key={cartItem._id} count={cartItem.count} _id={cartItem._id}
                                             name={cartItem.name} description={cartItem.description} category={cartItem.category}
                                             availableStock={cartItem.availableStock} ingredients={cartItem.ingredients}
                                             instructions={cartItem.instructions} quantity={cartItem.quantity}
                                             warning={cartItem.warning} imageURL={cartItem.imageURL} price={cartItem.price} quantityUnit={cartItem.quantityUnit} mediaURLs={[]} />
                                   ))}
                              </StyledTableBody>
                         </StyledTable>
                    </CartWrapper>
                    <CartTotals onClose={onClose} />
               </DialogContent>
          </Dialog >
     );
}
