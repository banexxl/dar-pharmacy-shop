import { useTheme } from "@mui/material/styles";
import { Box, useMediaQuery } from "@mui/material";
import AppbarDesktop from "./appbarDesktop";
import AppbarMobile from "./appbarMobile";
import { useEffect, useState } from "react";


export default function NavBar() {
          const theme = useTheme();
          const isScreenToMedium = useMediaQuery(theme.breakpoints.down('md'));

          return (
                    <Box sx={{ width: '100%' }}>
                              {isScreenToMedium ? <AppbarMobile isScreenToMedium={isScreenToMedium} /> : <AppbarDesktop isScreenToMedium={isScreenToMedium} />}
                    </Box>
          );
}
