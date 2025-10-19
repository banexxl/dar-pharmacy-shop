import {
     AppBar,
     Toolbar,
     Typography,
     Badge,
     Box,
     IconButton,
     keyframes,
     Fab,
     Slide,
     useScrollTrigger,
     Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import { useUIContext } from "../../context/ui/ui.context";
import { useEffect, useState, forwardRef, cloneElement } from "react";
import Link from "next/link";
import { Colors } from "@/styles/theme";
import useDialogModal from "@/hooks/useDialogModal";
import Cart from "../cart/cart";
import { useSelector } from "react-redux";
import { cartTotalSelector } from "@/store/cart/cart.selector";
import { wishListSelectorState } from "@/store/wishlist/wishlist-selector";

// Hide on scroll component
interface HideOnScrollProps {
     children: React.ReactElement;
}

function HideOnScroll({ children }: HideOnScrollProps) {
     const trigger = useScrollTrigger();
     return (
          <Slide appear={false} direction="down" in={!trigger}>
               {children}
          </Slide>
     );
}

export default function AppbarMobile({ isScreenToMedium }: any) {
     const { setDrawerOpen, setShowSearchBox } = useUIContext();
     const [isScrolled, setIsScrolled] = useState<Boolean>(false);
     const cartCounter = useSelector(cartTotalSelector);
     const wishlistState = useSelector(wishListSelectorState);
     const wishlistCounter = wishlistState?.length || 0;

     const [CartDialog, showCartDialog, closeCartDialog] = useDialogModal(Cart);

     const pulseAnimation = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  `;

     useEffect(() => {
          function handleScroll() {
               const scrolled = window.scrollY > 50;
               setIsScrolled(scrolled);
          }

          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
     }, []);

     return (
          <>
               <HideOnScroll>
                    <AppBar
                         position="fixed"
                         sx={{
                              background: isScrolled
                                   ? 'rgba(255, 255, 255, 0.95)'
                                   : 'rgba(255, 255, 255, 0.98)',
                              backdropFilter: 'blur(20px)',
                              borderBottom: '1px solid',
                              borderBottomColor: Colors.neutral[200],
                              boxShadow: isScrolled
                                   ? `0 8px 32px ${Colors.neutral[900]}15`
                                   : `0 2px 12px ${Colors.neutral[900]}08`,
                              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                         }}
                    >
                         <Toolbar sx={{
                              minHeight: { xs: 68, sm: 72 },
                              px: { xs: 2, sm: 3 },
                              justifyContent: 'space-between'
                         }}>
                              {/* Menu Button */}
                              <IconButton
                                   onClick={() => setDrawerOpen(true)}
                                   sx={{
                                        color: 'primary.main',
                                        p: 1.5,
                                        '&:hover': {
                                             bgcolor: 'primary.50',
                                             transform: 'scale(1.05)',
                                        },
                                        transition: 'all 0.2s ease',
                                   }}
                              >
                                   <MenuIcon />
                              </IconButton>

                              {/* Logo */}
                              <Link href="/" passHref>
                                   <Typography
                                        variant="h5"
                                        component="div"
                                        sx={{
                                             fontWeight: 700,
                                             color: 'primary.main',
                                             cursor: 'pointer',
                                             textDecoration: 'none',
                                             background: `linear-gradient(135deg, ${Colors.primary.main} 0%, ${Colors.primary[600]} 100%)`,
                                             backgroundClip: 'text',
                                             WebkitBackgroundClip: 'text',
                                             WebkitTextFillColor: 'transparent',
                                             fontSize: { xs: '1.6rem', sm: '1.8rem' },
                                             letterSpacing: '0.02em',
                                             fontFamily: '"Inter", "Roboto", sans-serif',
                                             '&:hover': {
                                                  transform: 'scale(1.02)',
                                                  background: `linear-gradient(135deg, ${Colors.primary[700]} 0%, ${Colors.primary.main} 100%)`,
                                                  backgroundClip: 'text',
                                                  WebkitBackgroundClip: 'text',
                                                  WebkitTextFillColor: 'transparent',
                                             },
                                             transition: 'all 0.3s ease',
                                        }}
                                   >
                                        APOTEKA DAR
                                   </Typography>
                              </Link>                              {/* Actions */}
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                   <IconButton
                                        onClick={() => setShowSearchBox(true)}
                                        sx={{
                                             color: Colors.neutral[600],
                                             p: 1.5,
                                             borderRadius: 2,
                                             '&:hover': {
                                                  color: Colors.primary.main,
                                                  bgcolor: Colors.primary[50],
                                                  transform: 'translateY(-2px)',
                                                  boxShadow: `0 4px 12px ${Colors.primary.main}20`,
                                             },
                                             transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        }}
                                   >
                                        <SearchIcon />
                                   </IconButton>

                                   <IconButton
                                        onClick={() => { showCartDialog(); setDrawerOpen(false) }}
                                        sx={{
                                             color: Colors.neutral[600],
                                             p: 1.5,
                                             position: 'relative',
                                             borderRadius: 2,
                                             '&:hover': {
                                                  color: Colors.primary.main,
                                                  bgcolor: Colors.primary[50],
                                                  transform: 'translateY(-2px)',
                                                  boxShadow: `0 4px 12px ${Colors.primary.main}20`,
                                             },
                                             transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        }}
                                   >
                                        <Badge
                                             badgeContent={cartCounter}
                                             color="primary"
                                             sx={{
                                                  '& .MuiBadge-badge': {
                                                       fontWeight: 600,
                                                       fontSize: '0.75rem',
                                                       minWidth: 20,
                                                       height: 20,
                                                       borderRadius: '10px',
                                                       background: `linear-gradient(135deg, ${Colors.primary.main} 0%, ${Colors.primary[600]} 100%)`,
                                                       boxShadow: `0 2px 8px ${Colors.primary.main}30`,
                                                       animation: cartCounter > 0 ? `${pulseAnimation} 2s infinite` : 'none',
                                                  }
                                             }}
                                        >
                                             <ShoppingCartIcon />
                                        </Badge>
                                   </IconButton>
                              </Box>
                         </Toolbar>
                    </AppBar>
               </HideOnScroll>

               {/* Bottom Navigation Bar for Mobile */}
               <AppBar
                    position="fixed"
                    sx={{
                         top: 'auto',
                         bottom: 0,
                         background: 'rgba(255, 255, 255, 0.98)',
                         backdropFilter: 'blur(20px)',
                         borderTop: '1px solid',
                         borderTopColor: 'grey.200',
                         display: { xs: 'block', md: 'none' },
                    }}
               >
                    <Toolbar sx={{
                         justifyContent: 'space-around',
                         minHeight: 64,
                         px: 1,
                    }}>
                         <Link href="/" passHref>
                              <IconButton
                                   sx={{
                                        flexDirection: 'column',
                                        gap: 0.5,
                                        color: 'text.secondary',
                                        '&:hover': {
                                             color: 'primary.main',
                                             transform: 'translateY(-2px)',
                                        },
                                        transition: 'all 0.2s ease',
                                   }}
                              >
                                   <Avatar
                                        sx={{
                                             width: 24,
                                             height: 24,
                                             bgcolor: 'primary.main',
                                             fontSize: '0.75rem',
                                             fontWeight: 700,
                                        }}
                                   >
                                        D
                                   </Avatar>
                              </IconButton>
                         </Link>

                         <IconButton
                              onClick={() => setShowSearchBox(true)}
                              sx={{
                                   flexDirection: 'column',
                                   gap: 0.5,
                                   color: 'text.secondary',
                                   '&:hover': {
                                        color: 'primary.main',
                                        transform: 'translateY(-2px)',
                                   },
                                   transition: 'all 0.2s ease',
                              }}
                         >
                              <SearchIcon />
                         </IconButton>

                         <Link href="/lista-zelja" passHref>
                              <IconButton
                                   sx={{
                                        flexDirection: 'column',
                                        gap: 0.5,
                                        color: 'text.secondary',
                                        '&:hover': {
                                             color: 'error.main',
                                             transform: 'translateY(-2px)',
                                        },
                                        transition: 'all 0.2s ease',
                                   }}
                              >
                                   <Badge
                                        badgeContent={wishlistCounter}
                                        color="error"
                                        sx={{
                                             '& .MuiBadge-badge': {
                                                  fontSize: '0.65rem',
                                                  minWidth: 16,
                                                  height: 16,
                                             }
                                        }}
                                   >
                                        <FavoriteIcon />
                                   </Badge>
                              </IconButton>
                         </Link>

                         <Link href="/nalog" passHref>
                              <IconButton
                                   sx={{
                                        flexDirection: 'column',
                                        gap: 0.5,
                                        color: 'text.secondary',
                                        '&:hover': {
                                             color: 'primary.main',
                                             transform: 'translateY(-2px)',
                                        },
                                        transition: 'all 0.2s ease',
                                   }}
                              >
                                   <PersonIcon />
                              </IconButton>
                         </Link>
                    </Toolbar>
               </AppBar>

               <CartDialog />
          </>
     );
}
