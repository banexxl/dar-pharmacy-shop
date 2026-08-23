'use client';

import { Box } from "@mui/material";
import AppbarDesktop from "./appbarDesktop";
import AppbarMobile from "./appbarMobile";
import AppDrawer from "./drawer/drawer";

export default function NavBar() {
     return (
          <Box>
               {/* Desktop: hidden on small screens via CSS (no hydration mismatch) */}
               <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <AppbarDesktop isScreenToMedium={false} />
               </Box>

               {/* Mobile: hidden on medium+ screens via CSS */}
               <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                    <AppbarMobile isScreenToMedium={true} />
                    <AppDrawer isScreenToMedium={true} />
               </Box>
          </Box>
     );
}
