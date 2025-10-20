import { useTheme } from "@mui/material/styles";
import { Box, useMediaQuery } from "@mui/material";
import AppbarDesktop from "./appbarDesktop";
import AppbarMobile from "./appbarMobile";
import { useEffect, useState } from "react";
import AppDrawer from "./drawer/drawer";


export default function NavBar() {
     const theme = useTheme();
     const isScreenToMedium = useMediaQuery(theme.breakpoints.down('md'));

     return (
          <Box>
               {isScreenToMedium ?
                    <>
                         <AppbarMobile isScreenToMedium={isScreenToMedium} />
                         <AppDrawer isScreenToMedium={isScreenToMedium} />
                    </>
                    :
                    <AppbarDesktop isScreenToMedium={isScreenToMedium} />
               }
          </Box>
     );
}
