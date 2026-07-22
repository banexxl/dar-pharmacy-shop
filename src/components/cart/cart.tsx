import {
     Dialog,
     DialogTitle,
     Box,
     IconButton,
     DialogContent,
     Table,
     TableBody,
     TableRow,
     Typography,
     TableHead,
     TableCell,
     TableContainer,
     Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import { Colors } from "@/styles/theme";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ICartItem from "@/interfaces/cart/cart.interface";
import CartItem from "./components/cartItem";
import CartTotals from "./components/cartTotals";
import SlideTransition from "@/hooks/use-slide-transition";
import Counter from "@/utils/counter";
import { removeAllSingleItems } from "@/store/cart/cart.slice";
import Link from "next/link";
import toast from "react-hot-toast";


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
     const dispatch = useDispatch()

     return (
          <Dialog
               slots={{ transition: SlideTransition }}
               slotProps={{ transition: { direction: 'down', appear: true, timeout: { enter: 500, exit: 300 } } }}
               keepMounted
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
                                   isScreenToMedium ? (
                                        <Box
                                             sx={{
                                                  maxHeight: "70vh",
                                                  overflowY: "auto",
                                                  overflowX: "hidden",
                                                  display: "grid",
                                                  gap: 1.5,
                                                  mb: 1,
                                             }}
                                        >
                                             {cart.map((cartItem: ICartItem) => {
                                                  const baseTotal = (cartItem.count * cartItem.price).toFixed(2);
                                                  const hasDiscount = cartItem.discount && (cartItem.discountAmount ?? 0) > 0;
                                                  const discountedTotal = (
                                                       (cartItem.price -
                                                            cartItem.price * ((cartItem.discountAmount ?? 0) / 100)) *
                                                       cartItem.count
                                                  ).toFixed(2);

                                                  return (
                                                       <Box
                                                            key={cartItem._id}
                                                            sx={{
                                                                 border: `1px solid ${Colors.primary.light}`,
                                                                 borderRadius: 2,
                                                                 p: 1.5,
                                                                 backgroundColor: Colors.white,
                                                            }}
                                                       >
                                                            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                                                                 <Link
                                                                      rel="canonical"
                                                                      href={`/proizvod/${cartItem.slug}`}
                                                                      onClick={onClose}
                                                                 >
                                                                      <Box
                                                                           component="img"
                                                                           src={cartItem.imageURL}
                                                                           alt={cartItem.name}
                                                                           sx={{
                                                                                width: 64,
                                                                                height: 64,
                                                                                objectFit: "contain",
                                                                                borderRadius: 1,
                                                                           }}
                                                                      />
                                                                 </Link>

                                                                 <Box sx={{ flex: 1, minWidth: 0 }}>
                                                                      <Typography
                                                                           sx={{
                                                                                color: Colors.primary.main,
                                                                                fontWeight: 700,
                                                                                fontSize: "0.95rem",
                                                                                lineHeight: 1.3,
                                                                           }}
                                                                      >
                                                                           {cartItem.name}
                                                                      </Typography>
                                                                      <Typography
                                                                           sx={{
                                                                                color: Colors.primary.dark,
                                                                                fontSize: "0.8rem",
                                                                                mt: 0.25,
                                                                           }}
                                                                      >
                                                                           Kod: {cartItem._id.toString().slice(-8).toUpperCase()}
                                                                      </Typography>
                                                                 </Box>

                                                                 <IconButton
                                                                      onClick={() => {
                                                                           toast.success("Proizvod je uklonjen iz korpe", {
                                                                                position: "top-center",
                                                                                duration: 1500,
                                                                           });
                                                                           dispatch(removeAllSingleItems(cartItem._id));
                                                                      }}
                                                                      sx={{ color: Colors.primary.main }}
                                                                 >
                                                                      <DeleteIcon />
                                                                 </IconButton>
                                                            </Box>

                                                            <Box
                                                                 sx={{
                                                                      mt: 1,
                                                                      pt: 1,
                                                                      borderTop: `1px solid ${Colors.primary.light}`,
                                                                      display: "grid",
                                                                      gap: 0.75,
                                                                 }}
                                                            >
                                                                 <Box sx={{ display: "flex", justifyContent: "space-between", gap: 1 }}>
                                                                      <Typography sx={{ color: Colors.primary.dark, fontSize: "0.82rem" }}>
                                                                           Pakovanje
                                                                      </Typography>
                                                                      <Typography sx={{ color: Colors.primary.main, fontSize: "0.82rem", fontWeight: 600 }}>
                                                                           {cartItem.quantity} {cartItem.quantityUnit}
                                                                      </Typography>
                                                                 </Box>

                                                                 <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1 }}>
                                                                      <Typography sx={{ color: Colors.primary.dark, fontSize: "0.82rem" }}>
                                                                           Količina
                                                                      </Typography>
                                                                      <Counter _id={cartItem._id} count={cartItem.count}>
                                                                           {cartItem.count}
                                                                      </Counter>
                                                                 </Box>

                                                                 <Box sx={{ display: "flex", justifyContent: "space-between", gap: 1 }}>
                                                                      <Typography sx={{ color: Colors.primary.dark, fontSize: "0.82rem" }}>
                                                                           Cena sa PDV-om
                                                                      </Typography>
                                                                      <Typography sx={{ color: Colors.primary.main, fontSize: "0.82rem", fontWeight: 600 }}>
                                                                           {baseTotal} RSD
                                                                      </Typography>
                                                                 </Box>

                                                                 <Box sx={{ display: "flex", justifyContent: "space-between", gap: 1 }}>
                                                                      <Typography sx={{ color: Colors.primary.dark, fontSize: "0.82rem" }}>
                                                                           Ukupno sa popustom
                                                                      </Typography>
                                                                      <Typography
                                                                           sx={{
                                                                                color: hasDiscount
                                                                                     ? Colors.primary.main
                                                                                     : Colors.primary.dark,
                                                                                fontSize: "0.82rem",
                                                                                fontWeight: hasDiscount ? 700 : 600,
                                                                           }}
                                                                      >
                                                                           {hasDiscount
                                                                                ? `(-${cartItem.discountAmount}%) ${discountedTotal} RSD`
                                                                                : `${baseTotal} RSD`}
                                                                      </Typography>
                                                                 </Box>
                                                            </Box>
                                                       </Box>
                                                  );
                                             })}
                                        </Box>
                                   ) : (
                                        <TableContainer sx={{
                                             maxHeight: '50vh',
                                             overflowY: 'auto',
                                             overflowX: 'visible',
                                             mb: { xs: 1, md: 3 }
                                        }}>
                                             <Table stickyHeader size='medium'>
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
                                   )
                         }

                    </Box>
                    <CartTotals onClose={onClose} />
               </DialogContent>
          </Dialog>
     );
}


