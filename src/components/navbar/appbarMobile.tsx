import {
     AppBar,
     Toolbar,
     Badge,
     Box,
     IconButton,
     Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import { useUIContext } from "../../context/ui/ui.context";
import { useEffect, useState, forwardRef, cloneElement, useRef } from "react";
import Link from "next/link";
import { Colors } from "@/styles/theme";
import useDialogModal from "@/hooks/useDialogModal";
import Cart from "../cart/cart";
import LoginRegister from "../login/login";
import WishList from "../wishlist/wishlist";
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
     const [isScrolled, setIsScrolled] = useState<boolean>(false);

     const cartCounter = useSelector(cartTotalSelector);
     const wishlistState = useSelector(wishListSelectorState);
     const wishlistCounter = wishlistState?.length || 0;

     const [CartDialog, showCartDialog] = useDialogModal(Cart);
     const [LoginDialog, showLoginDialog] = useDialogModal(LoginRegister);
     const [WishListDialog, showWishListDialog] = useDialogModal(WishList);

     // rAF throttle for scroll
     const lastScrollYRef = useRef(0);
     const tickingRef = useRef(false);
     const THRESHOLD = 50; // px

     useEffect(() => {
          if (typeof window === "undefined") return;

          // initialize state (handles refresh mid-scroll)
          lastScrollYRef.current = window.scrollY || 0;
          setIsScrolled(lastScrollYRef.current > THRESHOLD);

          const readAndUpdate = () => {
               const scrolled = lastScrollYRef.current > THRESHOLD;
               setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
               tickingRef.current = false;
          };

          const onScroll = () => {
               lastScrollYRef.current = window.scrollY || 0;
               if (!tickingRef.current) {
                    tickingRef.current = true;
                    requestAnimationFrame(readAndUpdate);
               }
          };

          window.addEventListener("scroll", onScroll, { passive: true });
          return () => window.removeEventListener("scroll", onScroll as EventListener);
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
                                   aria-label="open-menu"
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
                                   <IconButton
                                        aria-label="wishlist"
                                        onClick={() => showWishListDialog()}
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
                                   <IconButton
                                        aria-label="open-cart"
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
                                   <IconButton
                                        aria-label="profile"
                                        onClick={() => showLoginDialog()}
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
                                   aria-label="home"
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
                              aria-label="search"
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

                         <IconButton
                              aria-label="wishlist"
                              onClick={() => showWishListDialog()}
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

                         <IconButton
                              aria-label="profile"
                              onClick={() => showLoginDialog()}
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
                    </Toolbar>
               </AppBar>

               <CartDialog />
               <LoginDialog />
               <WishListDialog />
          </>
     );
}
