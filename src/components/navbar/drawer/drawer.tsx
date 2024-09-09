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
import { useSession } from "next-auth/react"
import { useSelector } from "react-redux"
import { cartTotalSelector } from "@/store/cart/cart.selector"
import { motion } from "framer-motion"

const MiddleDivider = styled((props) => (
     <Divider variant="middle" {...props} />
))``;


export default function AppDrawer({ isScreenToMedium }: any) {


     const { drawerOpen, setDrawerOpen } = useUIContext();

     const counter = useSelector(cartTotalSelector)

     const [WishListDialog, showWishListDialog, closeWishListDialog] =
          useDialogModal(WishList)

     const [CartDialog, showCartDialog, closeCartDialog] =
          useDialogModal(Cart)

     const [LoginDialog, showLoginDialog, closeLoginDialog] =
          useDialogModal(LoginRegister)

     const { data: session } = useSession()

     const variants = {
          open: {
               y: 0,
               opacity: 1,
               transition: {
                    y: { stiffness: 1000, velocity: -100 }
               }
          },
          closed: {
               y: 50,
               opacity: 0,
               transition: {
                    y: { stiffness: 1000 }
               }
          }
     };

     const sidebar = {
          open: (height = 1000) => ({
               clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
               transition: {
                    type: "spring",
                    stiffness: 20,
                    restDelta: 2
               }
          }),
          closed: {
               clipPath: "circle(30px at 40px 40px)",
               transition: {
                    delay: 0.5,
                    type: "spring",
                    stiffness: 400,
                    damping: 40
               }
          }
     };

     return (
          <Box >
               <Drawer open={drawerOpen} >
                    <List>
                         <motion.li
                              variants={variants}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                         >
                              <ListItemButton>

                                   <ListItemText onClick={() => { setDrawerOpen(false) }} sx={{
                                        '& .MuiTypography-root': {
                                             color: Colors.white, // Override only for this instance
                                        },
                                   }}>
                                        <Link rel='canonical' href={'/'}>
                                             Početna
                                        </Link>
                                   </ListItemText>
                                   <DrawerCloseButton onClick={() => setDrawerOpen(false)} >
                                        <CloseIcon />
                                   </DrawerCloseButton>
                              </ListItemButton>
                         </motion.li>
                         <motion.li
                              variants={variants}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                         >
                              <MiddleDivider />
                         </motion.li>
                         <motion.li
                              variants={variants}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                         >
                              <ListItemButton sx={{ justifyContent: 'center' }} >
                                   <ProductsMenu />
                              </ListItemButton>
                         </motion.li>
                         <MiddleDivider />
                         <motion.li
                              variants={variants}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                         >
                              <ListItemButton onClick={() => { showCartDialog(); setDrawerOpen(false) }}>
                                   <ListItemText sx={{
                                        '& .MuiTypography-root': {
                                             color: Colors.white, // Override only for this instance
                                        },
                                   }}>Korpa: {counter} </ListItemText>
                              </ListItemButton>
                         </motion.li>
                         <MiddleDivider />
                         <motion.li
                              variants={variants}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                         >
                              <ListItemButton onClick={() => { showWishListDialog(); setDrawerOpen(false) }}>
                                   <ListItemText sx={{
                                        '& .MuiTypography-root': {
                                             color: Colors.white, // Override only for this instance
                                        },
                                   }}>
                                        Omiljeni
                                   </ListItemText>
                              </ListItemButton>
                         </motion.li>
                         <MiddleDivider />
                         <motion.li
                              variants={variants}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                         >
                              <ListItemButton>
                                   <ListItemText onClick={() => { setDrawerOpen(false) }} sx={{
                                        '& .MuiTypography-root': {
                                             color: Colors.white, // Override only for this instance
                                        },
                                   }}>
                                        <Link rel='canonical' href={'/kontakt'}>
                                             Pitajte nas...
                                        </Link>
                                   </ListItemText>
                              </ListItemButton>
                         </motion.li>
                         <MiddleDivider />
                         <motion.li
                              variants={variants}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                         >
                              <ListItemButton onClick={() => { showLoginDialog(); setDrawerOpen(false) }}>
                                   <ListItemText sx={{
                                        '& .MuiTypography-root': {
                                             color: Colors.white, // Override only for this instance
                                        },
                                   }}>
                                        {
                                             session ? 'Profil' : 'Prijava'
                                        }
                                   </ListItemText>
                              </ListItemButton>
                         </motion.li>
                         <MiddleDivider />
                         {
                              !session &&
                              <motion.li
                                   variants={variants}
                                   whileHover={{ scale: 1.1 }}
                                   whileTap={{ scale: 0.95 }}
                              >
                                   <ListItemButton>
                                        <ListItemText onClick={() => { setDrawerOpen(false) }} sx={{
                                             '& .MuiTypography-root': {
                                                  color: Colors.white, // Override only for this instance
                                             },
                                        }}>
                                             <Link rel='canonical' href={'/registracija'}>
                                                  Registracija
                                             </Link>
                                        </ListItemText>
                                   </ListItemButton>
                              </motion.li>
                         }
                         <MiddleDivider />
                    </List>
               </Drawer>
               <WishListDialog />
               <CartDialog />
               <LoginDialog />
               <Actions isScreenToMedium={isScreenToMedium} />
          </Box >
     );
}
