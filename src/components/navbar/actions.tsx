import { Divider, ListItemButton, ListItemIcon, Menu, MenuItem, Select, Box, List } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useDialogModal from "../../hooks/useDialogModal";
import Cart from '../cart/cart'
import WishList from "../wishlist/wishlist";
import LoginRegister from '../login/login'
import { Language } from "@mui/icons-material";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { cartTotalSelector } from "@/store/cart/cart.selector";
import { wishListSelectorState } from '@/store/wishlist/wishlist-selector';
import { useState } from "react";
import Link from "next/link";
import { Colors } from "@/styles/theme";

export default function Actions({ isScreenToMedium }: any) {

     const [WishListDialog, showWishListDialog, closeWishListDialog] = useDialogModal(WishList)

     const [CartDialog, showCartDialog, closeCartDialog] = useDialogModal(Cart)

     const [LoginDialog, showLoginDialog, closeLoginDialog] = useDialogModal(LoginRegister)

     const containerClassName = isScreenToMedium ? "ActionIconsContainerMobile" : "ActionIconsContainerDesktop";

     const counter = useSelector(cartTotalSelector)
     const wishList = useSelector(wishListSelectorState) as any[];
     const wishCounter = Array.isArray(wishList) ? wishList.length : 0;

     return (
          <Box className={containerClassName} sx={{
               display: 'flex',
               alignItems: 'center',
               gap: 1,
               pl: 2,
          }}>
               <ListItemButton
                    onClick={showCartDialog}
                    sx={{
                         justifyContent: "center",
                         borderRadius: 2.5,
                         p: 1.5,
                         minWidth: 48,
                         height: 48,
                         position: 'relative',
                         transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                         '&:hover': {
                              backgroundColor: Colors.primary[50],
                              transform: 'translateY(-2px)',
                              boxShadow: `0 4px 12px ${Colors.primary.main}20`,
                         },
                    }}
               >
                    <ListItemIcon
                         sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: 'center',
                              color: isScreenToMedium ? Colors.primary.main : Colors.neutral[700],
                              transition: 'color 0.3s ease',
                              minWidth: 'auto',
                              m: 0,
                         }}
                    >
                         <ShoppingCartIcon sx={{ fontSize: '1.4rem' }} />
                         {counter > 0 && (
                              <Box
                                   sx={{
                                        position: 'absolute',
                                        top: 8,
                                        right: 8,
                                        backgroundColor: Colors.primary.main,
                                        color: 'white',
                                        borderRadius: '50%',
                                        minWidth: 20,
                                        height: 20,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '0.75rem',
                                        fontWeight: 600,
                                        border: '2px solid white',
                                   }}
                              >
                                   {counter}
                              </Box>
                         )}
                    </ListItemIcon>
               </ListItemButton>

               <ListItemButton
                    onClick={showWishListDialog}
                    sx={{
                         justifyContent: "center",
                         borderRadius: 2.5,
                         p: 1.5,
                         minWidth: 48,
                         height: 48,
                         position: 'relative',
                         transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                         '&:hover': {
                              backgroundColor: Colors.secondary[50],
                              transform: 'translateY(-2px)',
                              boxShadow: `0 4px 12px ${Colors.secondary.main}20`,
                         },
                    }}
               >
                    <ListItemIcon
                         sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: 'center',
                              color: isScreenToMedium ? Colors.secondary.main : Colors.neutral[700],
                              transition: 'color 0.3s ease',
                              minWidth: 'auto',
                              m: 0,
                         }}
                    >
                         <FavoriteIcon sx={{ fontSize: '1.4rem' }} />
                         {wishCounter > 0 && (
                              <Box
                                   sx={{
                                        position: 'absolute',
                                        top: 8,
                                        right: 8,
                                        backgroundColor: Colors.primary.main,
                                        color: 'white',
                                        borderRadius: '50%',
                                        minWidth: 20,
                                        height: 20,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '0.75rem',
                                        fontWeight: 600,
                                        border: '2px solid white',
                                   }}
                              >
                                   {wishCounter}
                              </Box>
                         )}
                    </ListItemIcon>
               </ListItemButton>

               <ListItemButton onClick={() => showLoginDialog()}
                    sx={{
                         justifyContent: "center",
                         borderRadius: 2.5,
                         p: 1.5,
                         minWidth: 48,
                         height: 48,
                         transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                         '&:hover': {
                              backgroundColor: Colors.accent[50],
                              transform: 'translateY(-2px)',
                              boxShadow: `0 4px 12px ${Colors.accent.main}20`,
                         },
                    }}
               >
                    <ListItemIcon
                         sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: 'center',
                              color: isScreenToMedium ? Colors.accent.main : Colors.neutral[700],
                              transition: 'color 0.3s ease',
                              minWidth: 'auto',
                              m: 0,
                         }}
                    >
                         <PersonIcon sx={{ fontSize: '1.4rem' }} />
                    </ListItemIcon>
               </ListItemButton>

               <WishListDialog />
               <CartDialog />
               <LoginDialog />
          </Box>
     );
}
