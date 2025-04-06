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
import SlideTransition from "@/hooks/use-slide-transition";


interface ICartProps extends ICartItem {
     open: boolean
     onClose: () => void
     addSingleHandler: (id: number) => void
     removeSingleHandler: (id: number) => void
}

export default function Cart({ open, onClose }: ICartProps) {

     const theme = useTheme()
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
                    <CartWrapper theme={theme}>
                         {
                              cart.length === 0 ? (
                                   <Typography align="center" sx={{ color: Colors.primary.main }}>
                                        Korpa je prazna
                                   </Typography>
                              )
                                   :
                                   <StyledTable>
                                        <StyledHeader>
                                             <TableRow sx={{
                                                  display: 'flex',
                                                  width: '100%',
                                                  justifyContent: 'space-around',
                                             }}   >
                                                  <StyledHeaderCell theme={theme}>Slika</StyledHeaderCell>
                                                  <StyledHeaderCell theme={theme}>Naziv</StyledHeaderCell>
                                                  <StyledHeaderCell theme={theme}>Pakovanje</StyledHeaderCell>
                                                  <StyledHeaderCell theme={theme}>Kod</StyledHeaderCell>
                                                  <StyledHeaderCell theme={theme}>Količina</StyledHeaderCell>
                                                  <StyledHeaderCell theme={theme}>Cena sa PDV</StyledHeaderCell>
                                                  <StyledHeaderCell theme={theme}>Ukupno sa popustom</StyledHeaderCell>
                                                  <StyledHeaderCell theme={theme}>Obriši</StyledHeaderCell>
                                             </TableRow>
                                        </StyledHeader>
                                        <StyledTableBody theme={theme}>
                                             {cart.map((cartItem: ICartItem) => (
                                                  <CartItem key={cartItem._id} {...cartItem} />
                                             ))}
                                        </StyledTableBody>
                                   </StyledTable>
                         }

                    </CartWrapper>
                    <CartTotals onClose={onClose} />
               </DialogContent>
          </Dialog >
     );
}