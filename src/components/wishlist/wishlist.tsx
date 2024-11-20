import { Dialog, DialogTitle, Slide, Box, IconButton, DialogContent, Typography, Button, Stack, Paper, Alert, } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../styles/theme";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { WishListWrapper, WishlistHeader, WishlistHeaderCell, WishlistRemoveAllButton, WishlistTable, WishlistTableBody } from "@/styles/wishlist";
import IWishlistItem from "@/interfaces/wishlist/wishlist.interface";
import WishlistItem from "./wishlist-item";
import { clearWishList, removeFromWishList } from "@/store/wishlist/wishlist.slice";
import { useState } from "react";
import { addToCart } from "@/store/cart/cart.slice";
import SlideTransition from "@/hooks/use-slide-transition";


export default function WishList({ open, onClose, product }: any) {

     const theme = useTheme()
     const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"))
     const wishlist = useSelector((state: any) => state.persistReduce.wishListReducer)
     const dispatch = useDispatch()
     const [addedToCartAlert, setAddedToCartAlert] = useState(false);
     const [showOptions, setShowOptions] = useState(false);
     const [loading, setLoading] = useState(false);

     const callCartAlert = () => {
          setAddedToCartAlert(true);
          setLoading(true);
          const timeId = setTimeout(() => {
               setLoading(false);
               setAddedToCartAlert(false);
          }, 1500);

          return () => {
               clearTimeout(timeId);
          };
     };


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
                              Omiljeni proizvodi
                         </Typography>
                         <IconButton onClick={onClose}>
                              <CloseIcon />
                         </IconButton>
                    </Box>
               </DialogTitle>
               <DialogContent>
                    <WishListWrapper component={Paper} theme={theme}>
                         <WishlistTable>
                              <WishlistHeader theme={theme}>
                                   <WishlistHeaderCell>Slika</WishlistHeaderCell>
                                   <WishlistHeaderCell align="left">Naziv</WishlistHeaderCell>
                                   <WishlistHeaderCell align="left">Količina</WishlistHeaderCell>
                                   <WishlistHeaderCell align="left">Šifra</WishlistHeaderCell>
                                   <WishlistHeaderCell align="left">Cena</WishlistHeaderCell>
                              </WishlistHeader>
                              <WishlistTableBody>
                                   {
                                        wishlist.map((wishListItem: IWishlistItem) => (
                                             <Box key={Math.random()}>
                                                  <WishlistItem discount={wishListItem.discount} key={wishListItem._id} _id={wishListItem._id}
                                                       name={wishListItem.name} description={wishListItem.description} category={wishListItem.category}
                                                       availableStock={wishListItem.availableStock} ingredients={wishListItem.ingredients}
                                                       instructions={wishListItem.instructions} quantity={wishListItem.quantity}
                                                       warning={wishListItem.warning} imageURL={wishListItem.imageURL} price={wishListItem.price} quantityUnit={wishListItem.quantityUnit} mediaURLs={[]} />
                                                  <Button
                                                       sx={{ color: Colors.primary.main, margin: '10px' }}
                                                       onClick={() => {
                                                            showOptions ? setShowOptions(false) : setShowOptions(true);
                                                            callCartAlert();
                                                            dispatch(addToCart(wishListItem));
                                                       }}
                                                  >
                                                       Dodaj u korpu
                                                  </Button>
                                                  <Button
                                                       sx={{ color: Colors.primary.main, margin: '10px' }}
                                                       onClick={() => {
                                                            showOptions ? setShowOptions(false) : setShowOptions(true);
                                                            callCartAlert();
                                                            dispatch(removeFromWishList(wishListItem));
                                                       }}
                                                  >
                                                       Obriši
                                                  </Button>
                                             </Box>
                                        ))
                                   }
                              </WishlistTableBody>

                         </WishlistTable>
                         <WishlistRemoveAllButton onClick={() => dispatch(clearWishList())}>
                              Obriši listu omiljenih proizvoda
                         </WishlistRemoveAllButton>
                    </WishListWrapper>
               </DialogContent>
               {addedToCartAlert && (
                    <Alert variant="filled" severity="success" sx={{ position: 'fixed', bottom: '0px', left: '50%', transform: 'translateX(-50%)', width: '250px', zIndex: '1000' }}>
                         Proizvod dodat u korpu
                    </Alert>
               )}
          </Dialog>
     );
}
