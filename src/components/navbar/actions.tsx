import { Divider, ListItemButton, ListItemIcon, Menu, MenuItem, Select } from "@mui/material";
import { ActionIconsContainerDesktop, ActionIconsContainerMobile, MyList } from "../../styles/appbar";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Colors } from "../../styles/theme";
import useDialogModal from "../../hooks/useDialogModal";
import Cart from '../cart/cart'
import WishList from "../wishlist/wishlist";
import LoginRegister from '../login/login'
import { Language } from "@mui/icons-material";
import { useRouter } from "next/router";
import { CartCounter } from "@/styles/navbar/navbar-cart-counter";
import { useSelector } from "react-redux";
import { cartTotalSelector } from "@/store/cart/cart.selector";
import { useState } from "react";
import Link from "next/link";

export default function Actions({ isScreenToMedium }: any) {

          const [WishListDialog, showWishListDialog, closeWishListDialog] = useDialogModal(WishList)

          const [CartDialog, showCartDialog, closeCartDialog] = useDialogModal(Cart)

          const [LoginDialog, showLoginDialog, closeLoginDialog] = useDialogModal(LoginRegister)

          const Component = isScreenToMedium ? ActionIconsContainerMobile : ActionIconsContainerDesktop;

          const counter = useSelector(cartTotalSelector)
          const router = useRouter()

          return (
                    <Component>
                              <ListItemButton onClick={showCartDialog} sx={{
                                        justifyContent: "center", '&:hover': {
                                                  backgroundColor: Colors.secondary,
                                        },
                              }}>
                                        <ListItemIcon
                                                  sx={{
                                                            display: "flex",
                                                            justifyContent: "space-around",
                                                            alignItems: 'center',
                                                            color: isScreenToMedium && Colors.secondary,
                                                  }}
                                        >
                                                  <ShoppingCartIcon />
                                                  <CartCounter>{counter}</CartCounter>
                                        </ListItemIcon>
                              </ListItemButton>
                              <Divider orientation="vertical" flexItem />
                              <ListItemButton
                                        onClick={showWishListDialog}
                                        sx={{
                                                  justifyContent: "center",
                                                  '&:hover': {
                                                            backgroundColor: Colors.secondary,
                                                  },
                                        }}
                              >
                                        <ListItemIcon
                                                  sx={{
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            color: isScreenToMedium && Colors.secondary,
                                                  }}
                                        >
                                                  <FavoriteIcon />
                                        </ListItemIcon>
                              </ListItemButton>
                              <Divider orientation="vertical" flexItem />
                              <ListItemButton onClick={() => showLoginDialog()}
                                        sx={{
                                                  justifyContent: "center",
                                                  '&:hover': {
                                                            backgroundColor: Colors.secondary,
                                                  },
                                        }}
                              >
                                        <ListItemIcon
                                                  sx={{
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            color: isScreenToMedium && Colors.secondary,
                                                  }}
                                        >
                                                  <PersonIcon />
                                        </ListItemIcon>
                              </ListItemButton>
                              <Divider orientation="vertical" flexItem />
                              <ListItemButton
                                        sx={{
                                                  justifyContent: "center",
                                                  '&:hover': {
                                                            backgroundColor: Colors.secondary,
                                                  },
                                        }}
                              >
                                        <Select
                                                  placeholder="Language"
                                                  IconComponent={(props) => (<Language sx={{ display: 'flex', left: '25px' }} {...props} />)}
                                                  sx={{ width: 75, height: 24, alignItems: 'center' }}
                                        >
                                                  <MenuItem onClick={() => { router.push(`${router.pathname}`, undefined, { locale: 'en-US' }) }}>
                                                            en
                                                  </MenuItem>
                                                  <MenuItem onClick={() => { router.push(`${router.pathname}`, undefined, { locale: 'sr-RS' }) }}>
                                                            sr
                                                  </MenuItem>
                                        </Select>
                              </ListItemButton>
                              <WishListDialog />
                              <CartDialog />
                              <LoginDialog />
                    </Component >
          );
}
