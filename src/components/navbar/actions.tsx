import { Divider, ListItemButton, ListItemIcon, MenuItem, Select } from "@mui/material";
import { ActionIconsContainerDesktop, ActionIconsContainerMobile, MyList } from "../../styles/appbar";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Colors } from "../../styles/theme";
import useDialogModal from "../../hooks/useDialogModal";
import Cart from '../cart/index'
import WishList from "../wishlist/index";
import LoginRegister from '../login/index'
import { Language } from "@mui/icons-material";
import { useRouter } from "next/router";

export default function Actions({ isScreenToMedium }: any) {

          const [WishListDialog, showWishListDialog, closeWishListDialog] = useDialogModal(WishList)

          const [CartDialog, showCartDialog, closeCartDialog] = useDialogModal(Cart)

          const [LoginDialog, showLoginDialog, closeLoginDialog] = useDialogModal(LoginRegister)

          const Component = isScreenToMedium ? ActionIconsContainerMobile : ActionIconsContainerDesktop;

          const router = useRouter()

          return (
                    <Component>
                              <MyList type="row">
                                        <ListItemButton
                                                  onClick={showCartDialog}
                                                  sx={{
                                                            justifyContent: "center",
                                                  }}
                                        >
                                                  <ListItemIcon
                                                            sx={{
                                                                      display: "flex",
                                                                      justifyContent: "center",
                                                                      color: isScreenToMedium && Colors.secondary,
                                                            }}
                                                  >
                                                            <ShoppingCartIcon />
                                                  </ListItemIcon>
                                        </ListItemButton>
                                        <Divider orientation="vertical" flexItem />
                                        <ListItemButton
                                                  onClick={showWishListDialog}
                                                  sx={{
                                                            justifyContent: "center",
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
                                        <ListItemButton
                                                  onClick={showLoginDialog}
                                                  sx={{
                                                            justifyContent: "center",
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

                              </MyList>
                              <WishListDialog />
                              <CartDialog />
                              <LoginDialog />
                    </Component >
          );
}
