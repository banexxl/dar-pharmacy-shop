import { Box, Button, Divider, Drawer, IconButton, List, ListItemButton, ListItemText, styled } from "@mui/material"
import { useUIContext } from "../../../context/ui"
import CloseIcon from "@mui/icons-material/Close"
import { DrawerCloseButton } from "../../../styles/appbar"
import { lighten } from "polished"
import { Colors } from "../../../styles/theme"
import Actions from "../actions"
import useDialogModal from "../../../hooks/useDialogModal"
import WishList from "../../wishlist"
import Cart from "../../cart"
import LoginRegister from "../../login"

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
                    <>
                              {drawerOpen && (
                                        <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
                                                  <CloseIcon
                                                            sx={{
                                                                      fontSize: "2.5rem",
                                                                      color: lighten(0.09, Colors.secondary),
                                                            }}
                                                  />
                                        </DrawerCloseButton>
                              )}
                              <Drawer open={drawerOpen}>
                                        <List>
                                                  <ListItemButton>
                                                            <ListItemText>Početna</ListItemText>
                                                  </ListItemButton>
                                                  <MiddleDivider />
                                                  <ListItemButton>
                                                            <ListItemText>Proizvodi</ListItemText>
                                                  </ListItemButton>
                                                  <MiddleDivider />
                                                  <ListItemButton>
                                                            <ListItemText>Kontakt</ListItemText>
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
                                                  <ListItemButton onClick={() => { showLoginDialog(); setDrawerOpen(false) }}>
                                                            <ListItemText>Login</ListItemText>
                                                  </ListItemButton>
                                                  <MiddleDivider />
                                        </List>
                              </Drawer>
                              <WishListDialog />
                              <CartDialog />
                              <LoginDialog />
                              <Actions isScreenToMedium={isScreenToMedium} />
                    </>
          );
}
