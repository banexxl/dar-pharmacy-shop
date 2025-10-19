import { Dialog, DialogTitle, Slide, Box, IconButton, DialogContent, Table, TableBody, Paper, TableRow, Typography, TableHead, TableCell } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "@/styles/theme";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
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
                    <Box className="CartWrapper">
                         {
                              cart.length === 0 ? (
                                   <Typography align="center" sx={{ color: Colors.primary.main }}>
                                        Korpa je prazna
                                   </Typography>
                              )
                                   :
                                   <Table>
                                        <TableHead>
                                             <TableRow sx={{
                                                  display: 'flex',
                                                  width: '100%',
                                                  justifyContent: 'space-around',
                                             }}>
                                                  <TableCell className="CartTableCell">Slika</TableCell>
                                                  <TableCell className="CartTableCell">Naziv</TableCell>
                                                  <TableCell className="CartTableCell">Pakovanje</TableCell>
                                                  <TableCell className="CartTableCell">Kod</TableCell>
                                                  <TableCell className="CartTableCell">Količina</TableCell>
                                                  <TableCell className="CartTableCell">Cena sa PDV</TableCell>
                                                  <TableCell className="CartTableCell">Ukupno sa popustom</TableCell>
                                                  <TableCell className="CartTableCell">Obriši</TableCell>
                                             </TableRow>
                                        </TableHead>
                                        <TableBody>
                                             {cart.map((cartItem: ICartItem) => (
                                                  <CartItem key={cartItem._id} {...cartItem} />
                                             ))}
                                        </TableBody>
                                   </Table>
                         }

                    </Box>
                    <CartTotals onClose={onClose} />
               </DialogContent>
          </Dialog>
     );
}