import { AppbarContainer, AppbarContainerMobile, AppbarTitle, IconBox } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton } from "@mui/material";
import { useUIContext } from "../../context/ui/ui.context";
import { useEffect, useState } from "react";
import Link from "next/link";
import SvgIcon from "../svg/svg-icon";

export default function AppbarMobile({ isScreenToMedium }: any) {

     const { setDrawerOpen, setShowSearchBox } = useUIContext();
     const [isScrolled, setIsScrolled] = useState<Boolean>(false);
     const [isScrolledHalfway, setIsScrolledHalfway] = useState(false);

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
               return '70px';
          }
     };

     return (

          <AppbarContainer sx={{ height: getHeight(), display: isScrolledHalfway ? 'none' : 'flex' }}>
               <IconButton onClick={() => setDrawerOpen(true)} >
                    <MenuIcon />
               </IconButton>
               <AppbarTitle textAlign={"center"} variant="h6" sx={{ fontSize: getHeight() }}>
                    <Link href="/">
                         DAR
                    </Link>
               </AppbarTitle>
               <IconButton onClick={() => setShowSearchBox(true)} >
                    <SearchIcon />
               </IconButton>
          </AppbarContainer >

     );
}
