import { IconButton, List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import "@fontsource/montez";
import { Colors } from "../theme";
import { textPopUpTop } from "../animation";

export const AppbarContainer = styled(Box)(({ theme }: any) => ({
          [theme.breakpoints.down('md')]: {
                    marginLeft: '20%'
          },
          [theme.breakpoints.up('md')]: {
                    minWidth: '700px',
                    maxWidth: '900px',
          },
          [theme.breakpoints.up('lg')]: {
                    minWidth: '900px',
                    maxWidth: '1000px',
          },
          [theme.breakpoints.up('xl')]: {
                    minWidth: '1100px',
                    maxWidth: '1200px',
          },
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'fixed',
          transition: '0.3s',
          zIndex: '1000'
})) as typeof Box

export const AppbarTitle = styled(Typography)(({ theme }) => ({
          [theme.breakpoints.up("md")]: {
                    maxWwidth: '250px',
          },
          [theme.breakpoints.down("md")]: {
                    maxWwidth: '250px',
          },
          paddingLeft: '4px',
          fontSize: "3rem",
          fontFamily: '"Montez", "cursive"',
          color: Colors.primary,
          "&:hover": {
                    animation: `${textPopUpTop} 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both`,
          },
          transition: '0.2s',
          cursor: 'pointer'
})) as typeof Typography

export const ActionIconsContainerMobile = styled(Box)(() => ({
          display: 'flex',
          background: Colors.shaft,
          position: "fixed",
          bottom: '20px',
          left: 0,
          width: '100%',
          alignItems: 'center',
          borderTop: `1px solid ${Colors.border}`,
          zIndex: '1000'
})) as typeof Box

export const ActionIconsContainerDesktop = styled(Box)(() => ({
          backgroundColor: Colors.primary,
          display: 'flex',
})) as typeof Box

type ListType = {
          type: any
}
export const MyList = styled(List)<ListType>(({ type }: any) => ({
          display: type === "row" ? "flex" : "block",
}))

export const DrawerCloseButton = styled(IconButton)(() => ({
          color: Colors.secondary,
          left: '-20px',
          zIndex: '100',
})) as typeof IconButton