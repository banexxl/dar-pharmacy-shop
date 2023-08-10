import { Box, Button, Divider, Drawer, IconButton, List, ListItemButton, ListItemText, styled, Typography } from "@mui/material"
import { useUIContext } from "../../../context/ui/ui.context"
import CloseIcon from "@mui/icons-material/Close"
import { DrawerCloseButton } from "../../../styles/appbar"
import { Colors } from "../../../styles/theme"
import Actions from "../actions"
import useDialogModal from "../../../hooks/useDialogModal"
import WishList from "../../wishlist/wishlist"
import Cart from "../../cart/cart"
import LoginRegister from "../../login/login"
import Link from "next/link"
import { ProductsMenu } from "../product-menu"

const MiddleDivider = styled((props) => (
          <Divider variant="middle" {...props} />
))``;


export default function AppDrawer({ isScreenToMedium }: any) {

          const { drawerOpen, setDrawerOpen } = useUIContext();

          const [WishListDialog, showWishListDialog, closeWishListDialog] =
                    useDialogModal(WishList)

          const [CartDialog, showCartDialog, closeCartDialog] =
                    useDialogModal(Cart)

          const [LoginDialog, showLoginDialog, closeLoginDialog] =
                    useDialogModal(LoginRegister)

          return (
                    <Box >
                              <Drawer open={drawerOpen} >
                                        <List>
                                                  <ListItemButton>
                                                            <ListItemText onClick={() => { setDrawerOpen(false) }}>
                                                                      <Link href={'/'}>
                                                                                Početna
                                                                      </Link>
                                                            </ListItemText>
                                                            <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
                                                                      <CloseIcon />
                                                            </DrawerCloseButton>
                                                  </ListItemButton>
                                                  <MiddleDivider />
                                                  <ListItemButton sx={{ justifyContent: 'center' }}>
                                                            <ProductsMenu />
                                                  </ListItemButton>
                                                  <MiddleDivider />
                                                  <ListItemButton onClick={() => { showCartDialog(); setDrawerOpen(false) }}>
                                                            <ListItemText>Korpa</ListItemText>
                                                  </ListItemButton>
                                                  <MiddleDivider />
                                                  <ListItemButton onClick={() => { showWishListDialog(); setDrawerOpen(false) }}>
                                                            <ListItemText>Omiljeni</ListItemText>
                                                  </ListItemButton>
                                                  <MiddleDivider />
                                                  <ListItemButton>
                                                            <ListItemText onClick={() => { setDrawerOpen(false) }}>
                                                                      <Link href={'/kontakt'}>
                                                                                Pitajte nas...
                                                                      </Link>
                                                            </ListItemText>
                                                  </ListItemButton>
                                                  <MiddleDivider />
                                                  <ListItemButton onClick={() => { showLoginDialog(); setDrawerOpen(false) }}>
                                                            <ListItemText>
                                                                      Login
                                                            </ListItemText>
                                                  </ListItemButton>
                                                  <MiddleDivider />
                                        </List>
                              </Drawer>
                              <WishListDialog />
                              <CartDialog />
                              <LoginDialog />
                              <Actions isScreenToMedium={isScreenToMedium} />
                    </Box>
          );
}
