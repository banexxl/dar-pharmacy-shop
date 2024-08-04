import { Box, Divider, Grow, List, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import { AppbarContainer, AppbarTitle, IconBox, MyList } from "../../styles/appbar"
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { useUIContext } from "../../context/ui/ui.context";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Colors } from "@/styles/theme";
import SvgIcon from "../svg/svg-icon";

export default function AppbarDesktop({ isScreenToMedium }: any) {

     const { setShowSearchBox } = useUIContext()
     const [isScrolled, setIsScrolled] = useState<Boolean>(false);

     const [isScrolledHalfway, setIsScrolledHalfway] = useState(false);


     useEffect(() => {

          function handleScroll() {
               const scrolled = window.scrollY > 0;
               setIsScrolled(scrolled);
          }

          // const isScrollHalfway = () => {
          //      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
          //      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
          //      const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;

          //      setIsScrolledHalfway(scrollTop > (scrollHeight - windowHeight) / 2);
          // }

          // window.addEventListener('scroll', isScrollHalfway);
          window.addEventListener('scroll', handleScroll);


          return () => {
               window.removeEventListener('scroll', handleScroll);
               // window.removeEventListener('scroll', isScrollHalfway);
          }
     }, []);

     const getHeight = () => {
          if (isScrolled) {
               return '60px';
          } else {
               return '100px';
          }
     };

     return (
          <AppbarContainer sx={{
               height: getHeight(),
               // display: isScrolledHalfway ? 'none' : 'flex'
          }}>
               <IconBox>
                    <SvgIcon type={"logo"} />
                    <AppbarTitle sx={{ paddingTop: '5px', fontSize: '1.2rem' }}>
                         <Link href="/">
                              Apoteka DAR
                         </Link>
                    </AppbarTitle>
               </IconBox>
               <ListItemButton sx={{
                    maxWidth: '200px',
                    borderRadius: '20px',
                    '&:hover': {
                         backgroundColor: Colors.primary.lighter,
                    },
               }} onClick={() => setShowSearchBox(true)}>
                    <ListItemIcon>
                         <SearchIcon />
                    </ListItemIcon>
               </ListItemButton>
               <Actions isScreenToMedium={isScreenToMedium} />
          </AppbarContainer>
     );
}
