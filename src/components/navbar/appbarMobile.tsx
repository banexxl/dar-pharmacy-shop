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
     // Always show header; no hide-on-scroll behavior
     return children;
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
                              background: isScrolled ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.98)',
                              backdropFilter: 'blur(20px)',
                              borderBottom: '1px solid',
                              borderBottomColor: Colors.neutral[200],
                              boxShadow: isScrolled ? `0 8px 32px ${Colors.neutral[900]}15` : `0 2px 12px ${Colors.neutral[900]}08`,
                              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                         }}
                    >
                         <Toolbar sx={{
                              minHeight: { xs: isScrolled ? 56 : 68, sm: isScrolled ? 60 : 72 },
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

                              {/* Actions (3 icons on mobile) */}
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: isScrolled ? 0.25 : 0.5 }}>
                                   <Link href="/lista-zelja" passHref>
                                        <IconButton
                                             sx={{
                                                  color: Colors.neutral[600],
                                                  p: isScrolled ? 0.75 : 1,
                                                  borderRadius: 2,
                                                  '&:hover': {
                                                       color: 'error.main',
                                                       bgcolor: 'error.50',
                                                       transform: 'translateY(-2px)',
                                                  },
                                                  transition: 'all 0.2s ease',
                                             }}
                                        >
                                             <Badge
                                                  badgeContent={wishlistCounter}
                                                  color="error"
                                                  sx={{ '& .MuiBadge-badge': { fontSize: '0.65rem', minWidth: 16, height: 16 } }}
                                             >
                                                  <FavoriteIcon />
                                             </Badge>
                                        </IconButton>
                                   </Link>
                                   <IconButton
                                        onClick={() => { showCartDialog(); setDrawerOpen(false) }}
                                        sx={{
                                             color: Colors.neutral[600],
                                             p: isScrolled ? 0.75 : 1,
                                             position: 'relative',
                                             borderRadius: 2,
                                             '&:hover': {
                                                  color: Colors.primary.main,
                                                  bgcolor: Colors.primary[50],
                                                  transform: 'translateY(-2px)',
                                             },
                                             transition: 'all 0.2s ease',
                                        }}
                                   >
                                        <Badge
                                             badgeContent={cartCounter}
                                             color="primary"
                                             sx={{
                                                  '& .MuiBadge-badge': {
                                                       fontWeight: 600,
                                                       fontSize: '0.7rem',
                                                       minWidth: 18,
                                                       height: 18,
                                                       borderRadius: '10px',
                                                  }
                                             }}
                                        >
                                             <ShoppingCartIcon />
                                        </Badge>
                                   </IconButton>
                                   <Link href="/nalog" passHref>
                                        <IconButton
                                             sx={{
                                                  color: Colors.neutral[600],
                                                  p: isScrolled ? 0.75 : 1,
                                                  borderRadius: 2,
                                                  '&:hover': {
                                                       color: Colors.primary.main,
                                                       bgcolor: Colors.primary[50],
                                                       transform: 'translateY(-2px)',
                                                  },
                                                  transition: 'all 0.2s ease',
                                             }}
                                        >
                                             <PersonIcon />
                                        </IconButton>
                                   </Link>
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
