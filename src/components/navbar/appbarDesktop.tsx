import { Box, Divider, List, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar"
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { useUIContext } from "../../context/ui/ui.context";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";

export default function AppbarDesktop({ isScreenToMedium }: any) {

          const { setShowSearchBox } = useUIContext()
          const [isScrolled, setIsScrolled] = useState<Boolean>(false);
          const { t } = useTranslation('common')
          useEffect(() => {
                    function handleScroll() {
                              const scrolled = window.scrollY > 0;
                              setIsScrolled(scrolled);
                    }

                    window.addEventListener('scroll', handleScroll);
                    return () => window.removeEventListener('scroll', handleScroll);
          }, []);

          const getHeight = () => {
                    if (isScrolled) {
                              return '40px';
                    } else {
                              return '90px';
                    }
          };

          return (
                    <AppbarContainer sx={{ height: getHeight() }}>
                              <AppbarHeader variant="h4">
                                        <Link href="/">
                                                  {t('homepage.title')}
                                        </Link>
                              </AppbarHeader>
                              <MyList type="row">
                                        <ListItemButton sx={{ maxWidth: '200px', mr: '100px' }} onClick={() => setShowSearchBox(true)}>
                                                  <ListItemIcon>
                                                            <SearchIcon />
                                                  </ListItemIcon>
                                        </ListItemButton>
                              </MyList>
                              <Actions isScreenToMedium={isScreenToMedium} />
                    </AppbarContainer>
          );
}
