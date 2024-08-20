import { Dialog, DialogTitle, Slide, Box, IconButton, DialogContent, Typography, Button, Stack, Paper, } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../styles/theme";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { WishListWrapper, WishlistHeader, WishlistHeaderCell, WishlistRemoveAllButton, WishlistTable, WishlistTableBody } from "@/styles/wishlist";
import { useTranslation } from "next-i18next";
import IWishlistItem from "@/interfaces/wishlist/wishlist.interface";
import WishlistItem from "./wishlist-item";
import { clearWishList } from "@/store/wishlist/wishlist.slice";


const SlideTransition = (props: any) => {
     return <Slide direction="down" {...props} />;
}

export default function WishList({ open, onClose, product }: any) {

     const theme = useTheme()
     const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"))
     const wishlist = useSelector((state: any) => state.persistReduce.wishListReducer)
     const dispatch = useDispatch()

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
                                   {wishlist.map((cartItem: IWishlistItem) => (
                                        <WishlistItem discount={cartItem.discount} key={cartItem._id} _id={cartItem._id}
                                             name={cartItem.name} description={cartItem.description} category={cartItem.category}
                                             availableStock={cartItem.availableStock} ingredients={cartItem.ingredients}
                                             instructions={cartItem.instructions} quantity={cartItem.quantity}
                                             warning={cartItem.warning} imageURL={cartItem.imageURL} price={cartItem.price} quantityUnit={cartItem.quantityUnit} mediaURLs={[]} />
                                   ))}
                              </WishlistTableBody>
                         </WishlistTable>
                         <WishlistRemoveAllButton onClick={() => dispatch(clearWishList())}>
                              Obriši listu omiljenih proizvoda
                         </WishlistRemoveAllButton>
                    </WishListWrapper>
               </DialogContent>
          </Dialog>
     );
}
