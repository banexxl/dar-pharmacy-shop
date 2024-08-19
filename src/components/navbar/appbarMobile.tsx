import { AppbarContainer, AppbarContainerMobile, AppbarTitle, IconBox } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Badge, Box, IconButton, keyframes } from "@mui/material";
import { useUIContext } from "../../context/ui/ui.context";
import { useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import { Colors } from "@/styles/theme";
import useDialogModal from "@/hooks/useDialogModal";
import Cart from "../cart/cart";
import { useSelector } from "react-redux";
import { cartTotalSelector } from "@/store/cart/cart.selector";

export default function AppbarMobile({ isScreenToMedium }: any) {

     const { setDrawerOpen, setShowSearchBox } = useUIContext();
     const [isScrolled, setIsScrolled] = useState<Boolean>(false);
     const [isScrolledHalfway, setIsScrolledHalfway] = useState(false);
     const counter = useSelector(cartTotalSelector)
     const [CartDialog, showCartDialog, closeCartDialog] =
          useDialogModal(Cart)

     const zoomInOut = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.4);
  }
`

     useEffect(() => {

          function handleScroll() {
               const scrolled = window.scrollY > 0;
               setIsScrolled(scrolled);
          }

          const isScrollHalfway = () => {
               const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
               const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
               const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;

               setIsScrolledHalfway(scrollTop > (scrollHeight - windowHeight) * 4 / 5);
          }

          window.addEventListener('scroll', isScrollHalfway);
          window.addEventListener('scroll', handleScroll);


          return () => {
               window.removeEventListener('scroll', handleScroll);
               window.removeEventListener('scroll', isScrollHalfway);
          }
     }, []);

     const getHeight = () => {
          if (isScrolled) {
               return '40px';
          } else {
               return '60px';
          }
     };

     return (

          <AppbarContainer sx={{ height: getHeight(), display: 'flex', justifyContent: 'space-between' }}>
               <IconButton onClick={() => setDrawerOpen(true)} >
                    <MenuIcon sx={{
                         color: Colors.primary.main,
                         animation: `${zoomInOut} 2s infinite`
                    }} />
               </IconButton>
               <AppbarTitle textAlign={"center"} sx={{ fontSize: getHeight() }}>
                    <Link href="/">
                         DAR
                    </Link>
               </AppbarTitle>
               <IconButton onClick={() => setShowSearchBox(true)} >
                    <SearchIcon sx={{ color: Colors.primary.main }} />
               </IconButton>
               <IconButton onClick={() => { showCartDialog(); setDrawerOpen(false) }}>
                    <Badge badgeContent={counter} color={'primary'} >
                         <ShoppingCartIcon sx={{ color: Colors.primary.main }} />
                    </Badge>
               </IconButton>
               <CartDialog />
          </AppbarContainer >

     );
}
