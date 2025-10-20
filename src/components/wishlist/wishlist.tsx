import { Dialog, DialogTitle, Slide, Box, IconButton, DialogContent, Typography, Button, Stack, Paper, Alert, Table, TableHead, TableBody, TableCell, TableRow, TableContainer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import IWishlistItem from "@/interfaces/wishlist/wishlist.interface";
import WishlistItem from "./wishlist-item";
import { clearWishList, removeFromWishList } from "@/store/wishlist/wishlist.slice";
import { useState } from "react";
import { addToCart } from "@/store/cart/cart.slice";
import SlideTransition from "@/hooks/use-slide-transition";
import toast from "react-hot-toast";
import { Colors } from "@/styles/theme";


export default function WishList({ open, onClose }: any) {
     const theme = useTheme()
     const wishlist = useSelector((state: any) => state.persistReduce.wishListReducer)

     const dispatch = useDispatch()
     const [showOptions, setShowOptions] = useState(false);

     const callCartAlert = () => {
          toast.success("Proizvod je dodat u korpu", {
               duration: 1500,
               position: "top-center"
          })
     };


     return (
          <Dialog
               TransitionComponent={SlideTransition}
               open={open}
               fullScreen={useMediaQuery(theme.breakpoints.down("md"))}
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
                              Omiljeni proizvodi
                         </Typography>
                         <IconButton onClick={onClose}>
                              <CloseIcon />
                         </IconButton>
                    </Box>
               </DialogTitle>
               <DialogContent>
                    <Box className="WishListWrapper">
                         <TableContainer sx={{ maxHeight: useMediaQuery(theme.breakpoints.down("md")) ? '70vh' : '60vh' }}>
                              <Table stickyHeader size={useMediaQuery(theme.breakpoints.down("md")) ? 'small' : 'medium'} className="WishlistTable">
                                   <TableHead className="WishlistHeader">
                                        <TableRow>
                                             <TableCell className="WishlistHeaderCell" sx={{ width: { xs: 72, md: 88 } }}>Slika</TableCell>
                                             <TableCell className="WishlistHeaderCell" align="left">Naziv</TableCell>
                                             <TableCell className="WishlistHeaderCell" align="left">Količina</TableCell>
                                             <TableCell className="WishlistHeaderCell" align="left">Šifra</TableCell>
                                             <TableCell className="WishlistHeaderCell" align="left">Cena</TableCell>
                                             <TableCell className="WishlistHeaderCell" align="center">Akcije</TableCell>
                                        </TableRow>
                                   </TableHead>
                                   <TableBody className="WishlistTableBody">
                                        {wishlist.map((wishListItem: IWishlistItem) => (
                                             <WishlistItem discount={wishListItem.discount} key={wishListItem._id} _id={wishListItem._id}
                                                  name={wishListItem.name} description={wishListItem.description} category={wishListItem.category}
                                                  availableStock={wishListItem.availableStock} ingredients={wishListItem.ingredients}
                                                  instructions={wishListItem.instructions} quantity={wishListItem.quantity}
                                                  warning={wishListItem.warning} imageURL={wishListItem.imageURL}
                                                  price={wishListItem.price} quantityUnit={wishListItem.quantityUnit}
                                                  mediaURLs={[]} slug={wishListItem.slug} discountAmount={wishListItem.discountAmount}
                                                  promotionText={wishListItem.promotionText} manufacturer={wishListItem.manufacturer} />
                                        ))}
                                   </TableBody>
                              </Table>
                         </TableContainer>
                         <Box style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}><Button className="WishlistRemoveAllButton" variant="outlined" color="primary" onClick={() => {
                              toast.success("Svi proizvodi su uklonjeni iz omiljenih proizvoda", {
                                   duration: 1500,
                                   position: "top-center"
                              })
                              dispatch(clearWishList())
                         }}
                         >
                              Obriši listu omiljenih proizvoda
                         </Button></Box>
                    </Box>
               </DialogContent>
          </Dialog >
     );
}


