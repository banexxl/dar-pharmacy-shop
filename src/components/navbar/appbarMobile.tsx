import { AppbarContainer, AppbarTitle } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { IconButton } from "@mui/material";
import { useUIContext } from "../../context/ui/ui.context";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";

export default function AppbarMobile({ isScreenToMedium }: any) {

          const { setDrawerOpen, setShowSearchBox } = useUIContext();
          const { t } = useTranslation('common')
          const [isScrolled, setIsScrolled] = useState<Boolean>(false);

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
                    <>
                              <AppbarContainer sx={{ height: getHeight() }}>
                                        <IconButton onClick={() => setDrawerOpen(true)} >
                                                  <MenuIcon />
                                        </IconButton>
                                        <AppbarTitle textAlign={"center"} variant="h4" sx={{ fontSize: getHeight() }}>
                                                  DAR
                                        </AppbarTitle>
                                        <IconButton onClick={() => setShowSearchBox(true)} >
                                                  <SearchIcon />
                                        </IconButton>
                              </AppbarContainer >
                              <Actions isScreenToMedium={isScreenToMedium} />
                    </>
          );
}
