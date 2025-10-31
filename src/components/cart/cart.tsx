import { Dialog, DialogTitle, Box, IconButton, DialogContent, Table, TableBody, TableRow, Typography, TableHead, TableCell, TableContainer } from "@mui/material";
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
               fullScreen={isScreenToMedium}
               fullWidth
               maxWidth="lg"
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
                              Proizvodi u korpi
                         </Typography>
                         <IconButton onClick={onClose}>
                              <CloseIcon />
                         </IconButton>
                    </Box>
               </DialogTitle>

               <DialogContent sx={{ pb: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Box className="CartWrapper">
                         {
                              cart.length === 0 ? (
                                   <Typography align="center" sx={{ color: Colors.primary.main }}>
                                        Korpa je prazna
                                   </Typography>
                              )
                                   :
                                   <TableContainer sx={{
                                        maxHeight: isScreenToMedium ? '70vh' : '50vh',
                                        overflowY: 'auto',
                                        overflowX: isScreenToMedium ? 'auto' : 'visible',
                                        mb: { xs: 1, md: 3 }
                                   }}>
                                        <Table
                                             stickyHeader
                                             size={isScreenToMedium ? 'small' : 'medium'}
                                             sx={{ minWidth: isScreenToMedium ? 700 : 'auto' }}>
                                             <TableHead>
                                                  <TableRow>
                                                       <TableCell className="CartTableCell" sx={{ width: { xs: 72, md: 88 } }}>Slika</TableCell>
                                                       <TableCell className="CartTableCell">Naziv</TableCell>
                                                       <TableCell className="CartTableCell">Pakovanje</TableCell>
                                                       <TableCell className="CartTableCell">Kod</TableCell>
                                                       <TableCell className="CartTableCell">Količina</TableCell>
                                                       <TableCell className="CartTableCell">Cena sa PDV-om</TableCell>
                                                       <TableCell className="CartTableCell">Ukupno sa popustom</TableCell>
                                                       <TableCell className="CartTableCell">Obriši</TableCell>
                                                  </TableRow>
                                             </TableHead>
                                             <TableBody>
                                                  {cart.map((cartItem: ICartItem) => (
                                                       <CartItem key={cartItem._id} {...cartItem} onClose={() => onClose()} />
                                                  ))}
                                             </TableBody>
                                        </Table>
                                   </TableContainer>
                         }

                    </Box>
                    <CartTotals onClose={onClose} />
               </DialogContent>
          </Dialog>
     );
}


