import { Box, Divider, Grow, List, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import { AppbarContainer, AppbarTitle, MyList } from "../../styles/appbar"
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { useUIContext } from "../../context/ui/ui.context";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { Colors } from "@/styles/theme";
import Image from "next/image";
import Logo from '../../../public/Logos/new_logos/rs_logo_1-fotor-bg-remover-20230424221111.png'
export default function AppbarDesktop({ isScreenToMedium }: any) {

          const { setShowSearchBox } = useUIContext()
          const [isScrolled, setIsScrolled] = useState<Boolean>(false);
          const { t } = useTranslation('common')
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

                              setIsScrolledHalfway(scrollTop > (scrollHeight - windowHeight) / 2);
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
                              return '90px';
                    }
          };

          return (
                    <AppbarContainer sx={{ height: getHeight(), display: isScrolledHalfway ? 'none' : 'flex' }}>
                              <AppbarTitle variant="h4">
                                        <Link href="/">
                                                  {t('homepage.title')}
                                        </Link>
                              </AppbarTitle>
                              <ListItemButton sx={{
                                        maxWidth: '200px',
                                        borderRadius: '20px',
                                        '&:hover': {
                                                  backgroundColor: Colors.secondary,
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
