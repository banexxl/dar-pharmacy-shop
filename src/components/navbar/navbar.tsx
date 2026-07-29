import { useTheme } from "@mui/material/styles";
import { Box, useMediaQuery } from "@mui/material";
import AppbarDesktop from "./appbarDesktop";
import AppbarMobile from "./appbarMobile";
import AppDrawer from "./drawer/drawer";
import { useEffect, useState } from "react";

export default function NavBar() {
     const theme = useTheme();
     const isScreenToMedium = useMediaQuery(theme.breakpoints.down('md'), {
          noSsr: true,
     });
     const [mounted, setMounted] = useState(false);

     useEffect(() => {
          setMounted(true);
     }, []);

     if (!mounted) {
          // Render nothing on the server to avoid hydration mismatch
          return null;
     }

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
