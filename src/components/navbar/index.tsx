import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import AppbarDesktop from "./appbarDesktop";
import AppbarMobile from "./appbarMobile";


export default function NavBar() {
          const theme = useTheme();
          const isScreenToMedium = useMediaQuery(theme.breakpoints.down('md'));
          return (
                    <>
                              {isScreenToMedium ? <AppbarMobile isScreenToMedium={isScreenToMedium} /> : <AppbarDesktop isScreenToMedium={isScreenToMedium} />}
                    </>
          );
}
