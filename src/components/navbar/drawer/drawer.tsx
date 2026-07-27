import { Box, Button, Divider, Drawer, IconButton, List, ListItemButton, ListItemText, styled, Typography, ListItemIcon, Avatar } from "@mui/material"
import { useUIContext } from "../../../context/ui/ui.context"
import CloseIcon from "@mui/icons-material/Close"
import HomeIcon from "@mui/icons-material/Home"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import PersonIcon from "@mui/icons-material/Person"
import ContactSupportIcon from "@mui/icons-material/ContactSupport"
import { Colors } from "../../../styles/theme"
import AppRegistrationIcon from "@mui/icons-material/AppRegistration"
import Actions from "../actions"
import useDialogModal from "../../../hooks/useDialogModal"
import WishList from "../../wishlist/wishlist"
import Cart from "../../cart/cart"
import LoginRegister from "../../login/login"
import Link from "next/link"
import { useAuth } from "@/lib/auth/hooks"
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

     const { isAuthenticated } = useAuth()

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

     return (
          <Box>
               <Drawer
                    open={drawerOpen}
                    sx={{
                         '& .MuiDrawer-paper': {
                              background: `linear-gradient(135deg, ${Colors.primary[800]} 0%, ${Colors.primary.main} 100%)`,
                              backdropFilter: 'blur(20px)',
                              color: Colors.neutral[100],
                              width: { xs: '85vw', sm: 340 },
                              minWidth: 300,
                              borderTopRightRadius: 16,
                              borderBottomRightRadius: 16,
                              border: `1px solid rgba(255, 255, 255, 0.2)`,
                              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                         }
                    }}
               >
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%', px: 2, pt: 2, pb: 1 }}>
                         <IconButton aria-label="Zatvori" onClick={() => setDrawerOpen(false)} sx={{ color: Colors.white, '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)', transform: 'rotate(90deg)' }, transition: 'all 0.3s ease' }}>
                              <CloseIcon sx={{ color: `${Colors.white}` }} />
                         </IconButton>
                    </Box>
                    <Divider sx={{ opacity: 0.2, borderColor: 'rgba(255, 255, 255, 0.2)', mb: 1 }} />
                    <List sx={{ pt: 1.5, px: 2 }}>
                         <motion.li
                              variants={variants}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                         >
                              <ListItemButton sx={{
                                   borderRadius: 2,
                                   mb: 1,
                                   py: 1.5,
                                   '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        transform: 'translateX(4px)',
                                   },
                                   transition: 'all 0.3s ease',
                              }}>
                                   <ListItemIcon sx={{ minWidth: 36 }}>
                                        <HomeIcon sx={{ color: Colors.primary.light }} />
                                   </ListItemIcon>
                                   <ListItemText onClick={() => { setDrawerOpen(false) }} sx={{
                                        '& .MuiTypography-root': {
                                             color: Colors.neutral[100],
                                             fontWeight: 600,
                                             fontSize: '1.1rem',
                                             '& a': {
                                                  color: 'inherit',
                                                  textDecoration: 'none',
                                             }
                                        },
                                   }}>
                                        <Link rel='canonical' href={'/'}>
                                             Početna
                                        </Link>
                                   </ListItemText>

                              </ListItemButton>
                         </motion.li>
                         <MiddleDivider sx={{
                              borderColor: 'rgba(255, 255, 255, 0.2)',
                              my: 1
                         }} />
                         <motion.li
                              variants={variants}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                         >
                              <ListItemButton onClick={() => { showCartDialog(); setDrawerOpen(false) }} sx={{
                                   borderRadius: 2,
                                   mb: 1,
                                   py: 1.5,
                                   '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        transform: 'translateX(4px)',
                                   },
                                   transition: 'all 0.3s ease',
                              }}>
                                   <ListItemIcon sx={{ minWidth: 36, color: Colors.neutral[100] }}>
                                        <ShoppingCartIcon sx={{ color: Colors.primary.light }} />
                                   </ListItemIcon>
                                   <ListItemText sx={{
                                        '& .MuiTypography-root': {
                                             color: Colors.neutral[100],
                                             fontWeight: 600,
                                             fontSize: '1rem',
                                        },
                                   }}>Korpa: {counter}</ListItemText>
                              </ListItemButton>
                         </motion.li>
                         <MiddleDivider sx={{
                              borderColor: 'rgba(255, 255, 255, 0.2)',
                              my: 1
                         }} />
                         <motion.li
                              variants={variants}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                         >
                              <ListItemButton onClick={() => { showWishListDialog(); setDrawerOpen(false) }} sx={{
                                   borderRadius: 2,
                                   mb: 1,
                                   py: 1.5,
                                   '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        transform: 'translateX(4px)',
                                   },
                                   transition: 'all 0.3s ease',
                              }}>
                                   <ListItemIcon sx={{ minWidth: 36, color: Colors.neutral[100] }}>
                                        <FavoriteIcon sx={{ color: Colors.primary.light }} />
                                   </ListItemIcon>
                                   <ListItemText sx={{
                                        '& .MuiTypography-root': {
                                             color: Colors.neutral[100],
                                             fontWeight: 600,
                                             fontSize: '1rem',
                                        },
                                   }}>
                                        Omiljeni
                                   </ListItemText>
                              </ListItemButton>
                         </motion.li>
                         <MiddleDivider sx={{
                              borderColor: 'rgba(255, 255, 255, 0.2)',
                              my: 1
                         }} />
                         <motion.li
                              variants={variants}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                         >
                              <ListItemButton sx={{
                                   borderRadius: 2,
                                   mb: 1,
                                   py: 1.5,
                                   '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        transform: 'translateX(4px)',
                                   },
                                   transition: 'all 0.3s ease',
                              }}>
                                   <ListItemIcon sx={{ minWidth: 36, color: Colors.neutral[100] }}>
                                        <ContactSupportIcon sx={{ color: Colors.primary.light }} />
                                   </ListItemIcon>
                                   <ListItemText onClick={() => { setDrawerOpen(false) }} sx={{
                                        '& .MuiTypography-root': {
                                             color: Colors.neutral[100],
                                             fontWeight: 600,
                                             fontSize: '1rem',
                                             '& a': {
                                                  color: 'inherit',
                                                  textDecoration: 'none',
                                             }
                                        },
                                   }}>
                                        <Link rel='canonical' href={'/kontakt'}>
                                             Pitajte nas...
                                        </Link>
                                   </ListItemText>
                              </ListItemButton>
                         </motion.li>
                         <MiddleDivider sx={{
                              borderColor: 'rgba(255, 255, 255, 0.2)',
                              my: 1
                         }} />
                         <motion.li
                              variants={variants}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                         >
                              <ListItemButton onClick={() => { showLoginDialog(); setDrawerOpen(false) }} sx={{
                                   borderRadius: 2,
                                   mb: 1,
                                   py: 1.5,
                                   '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        transform: 'translateX(4px)',
                                   },
                                   transition: 'all 0.3s ease',
                              }}>
                                   <ListItemIcon sx={{ minWidth: 36, color: Colors.neutral[100] }}>
                                        <PersonIcon sx={{ color: Colors.primary.light }} />
                                   </ListItemIcon>
                                   <ListItemText sx={{
                                        '& .MuiTypography-root': {
                                             color: Colors.neutral[100],
                                             fontWeight: 600,
                                             fontSize: '1rem',
                                        },
                                   }}>
                                        {
                                             isAuthenticated ? 'Profil' : 'Prijava'
                                        }
                                   </ListItemText>
                              </ListItemButton>
                         </motion.li>
                         <MiddleDivider sx={{
                              borderColor: 'rgba(255, 255, 255, 0.2)',
                              my: 1
                         }} />
                         {
                              !isAuthenticated &&
                              <motion.li
                                   variants={variants}
                                   whileHover={{ scale: 1.02 }}
                                   whileTap={{ scale: 0.98 }}
                              >
                                   <ListItemButton sx={{
                                        borderRadius: 2,
                                        mb: 1,
                                        py: 1.5,
                                        '&:hover': {
                                             backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                             transform: 'translateX(4px)',
                                        },
                                        transition: 'all 0.3s ease',
                                   }}>
                                        <ListItemIcon sx={{ minWidth: 36, color: Colors.neutral[100] }}>
                                             <AppRegistrationIcon sx={{ color: Colors.primary.light }} />
                                        </ListItemIcon>
                                        <ListItemText onClick={() => { setDrawerOpen(false) }} sx={{
                                             '& .MuiTypography-root': {
                                                  color: Colors.neutral[100],
                                                  fontWeight: 600,
                                                  fontSize: '1rem',
                                                  '& a': {
                                                       color: 'inherit',
                                                       textDecoration: 'none',
                                                  }
                                             },
                                        }}>
                                             <Link rel='canonical' href={'/registracija'}>
                                                  Registracija
                                             </Link>
                                        </ListItemText>
                                   </ListItemButton>
                              </motion.li>
                         }
                    </List>
               </Drawer>
               <WishListDialog />
               <CartDialog />
               <LoginDialog />
               <Actions isScreenToMedium={isScreenToMedium} />
          </Box>
     );
}

