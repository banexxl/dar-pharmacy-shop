import { IconButton, List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../theme";
import "@fontsource/satisfy"
import { textPopUpTop } from "../animation";

export const AppbarContainer = styled(Box)(({ theme }: any) => ({
     [theme.breakpoints.down('md')]: {
          marginLeft: '13%'
     },
     width: '61.5%',
     display: 'flex',
     justifyContent: 'space-between',
     alignItems: 'center',
     position: 'fixed',
     transition: '0.3s',
     zIndex: '1000',
     //backgroundColor: Colors.secondary,
     //opacity: '0.8'
})) as typeof Box

export const AppbarContainerMobile = styled(Box)(({ theme }: any) => ({
     width: '90%',
     display: 'flex',
     justifyContent: 'space-between',
     alignItems: 'center',
     position: 'fixed',
     zIndex: '1000',
     //backgroundColor: Colors.secondary,
     //opacity: '0.8'
})) as typeof Box

export const AppbarTitle = styled(Typography)(({ theme }) => ({
     [theme.breakpoints.down("md")]: {
          maxWidth: '250px',
     },
     paddingLeft: '4px',
     fontSize: ".5rem",
     color: Colors.primary.main,
     // "&:hover": {
     //      animation: `${textPopUpTop} 0.5s cubic-bezier(0.1, 0.030, 0.515, 0.955) both`,
     // },
     // transition: '0.2s',
     cursor: 'pointer'
})) as typeof Typography

export const IconBox = styled(Box)(({ theme }: any) => ({
     display: 'flex',
     width: '48px',
     height: '48px',
     justifyContent: 'center',
})) as typeof Box

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
     backgroundColor: Colors.primary.main,
     display: 'flex',
})) as typeof Box

type ListType = {
     type: any
}
export const MyList = styled(List)<ListType>(({ type }: any) => ({
     display: type === "row" ? "flex" : "block",
}))

export const DrawerCloseButton = styled(IconButton)(() => ({
     color: Colors.secondary.custom,
     left: '-20px',
     zIndex: '100',
})) as typeof IconButton