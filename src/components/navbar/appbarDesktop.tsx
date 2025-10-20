import { Box, Divider, Grow, List, ListItemButton, ListItemIcon, ListItemText, Stack, Typography, Container } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { useUIContext } from "../../context/ui/ui.context";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Colors } from "@/styles/theme";
import SvgIcon from "../svg/svg-icon";
import { useRouter } from "next/router";

export default function AppbarDesktop({ isScreenToMedium }: any) {

     const { setShowSearchBox } = useUIContext()
     const [isScrolled, setIsScrolled] = useState<Boolean>(false);
     const router = useRouter()
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

     const getHeight = () => (isScrolled ? '60px' : '100px');

     return (
          <>
               <Container
                    className="AppbarContainer"
                    maxWidth="xl"
                    sx={{
                         height: getHeight(),
                         background: isScrolled ? 'rgba(255, 255, 255, 0.88)' : 'rgba(255, 255, 255, 0.98)',
                         backdropFilter: 'blur(20px)',
                         borderBottom: '1px solid',
                         borderBottomColor: Colors.neutral[200],
                         boxShadow: isScrolled
                              ? `0 8px 32px ${Colors.neutral[900]}15`
                              : `0 2px 12px ${Colors.neutral[900]}08`,
                         transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                         position: 'fixed',
                         top: 0,
                         left: 0,
                         right: 0,
                         zIndex: 1200,
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-between',
                         px: { xs: 2, sm: 4, md: 6 },
                         // display: isScrolledHalfway ? 'none' : 'flex'
                    }}
               >
                    <Box className="IconBox" sx={{
                         display: 'flex',
                         alignItems: 'center',
                         gap: 2.5,
                         cursor: 'pointer',
                         minWidth: 'fit-content',
                         '&:hover': {
                              transform: 'scale(1.02)',
                         },
                         transition: 'all 0.3s ease',
                    }}>
                         <SvgIcon type={"logo"} width={32} height={32} color={Colors.primary.main} />
                         <Typography
                              className="AppbarTitle"
                              onClick={() => router.push('/')}
                         >
                              APOTEKA DAR
                         </Typography>
                    </Box>
                    <ListItemButton sx={{
                         minWidth: '280px',
                         maxWidth: '350px',
                         borderRadius: 3,
                         py: 1.8,
                         px: 3,
                         border: `1px solid ${Colors.neutral[200]}`,
                         background: 'rgba(255, 255, 255, 0.9)',
                         backdropFilter: 'blur(8px)',
                         '&:hover': {
                              backgroundColor: Colors.primary[50],
                              borderColor: Colors.primary.main,
                              transform: 'translateY(-1px)',
                              boxShadow: `0 6px 20px ${Colors.primary.main}15`,
                         },
                         transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }} onClick={() => setShowSearchBox(true)}>
                         <ListItemIcon sx={{
                              color: Colors.neutral[600],
                              minWidth: 36,
                              mr: 1,
                         }}>
                              <SearchIcon sx={{ fontSize: '1.2rem' }} />
                         </ListItemIcon>
                         <Typography sx={{
                              color: Colors.neutral[600],
                              fontWeight: 500,
                              fontSize: '1rem',
                              flexGrow: 1,
                         }}>
                              Pretraži proizvode...
                         </Typography>
                    </ListItemButton>
                    <Actions isScreenToMedium={isScreenToMedium} />
               </Container>
               {/* Spacer to offset fixed header height */}
               <Box sx={{ height: getHeight() }} />
          </>
     );
}
