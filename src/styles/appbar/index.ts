import { IconButton, List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../theme";
import "@fontsource/satisfy"
import { textPopUpTop } from "../animation";

export const AppbarContainer = styled(Box)(({ theme }: any) => ({
     // [theme.breakpoints.down('md')]: {
     //      marginLeft: '13%'
     // },
     display: 'flex',
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     padding: '0 15% 0',
     // gap: '93px',
     position: 'fixed',
     left: '0px',
     top: '0px',
     backgroundColor: Colors.white,
     // opacity: '0.8',
     width: '70%',
     zIndex: 1000,
})) as typeof Box

export const IconBox = styled(Box)(({ theme }: any) => ({
     display: 'flex',
     justifyContent: 'center',
     width: '250px',
     height: '48px',
})) as typeof Box

export const AppbarTitle = styled(Typography)(({ theme }) => ({
     [theme.breakpoints.down("md")]: {
          maxWidth: '250px',
     },
     paddingLeft: '4px',
     fontSize: "1.5rem",
     fontFamily: 'Satisfy',
     color: Colors.primary.main,
     // "&:hover": {
     //      animation: `${textPopUpTop} 0.5s cubic-bezier(0.1, 0.030, 0.515, 0.955) both`,
     // },
     // transition: '0.2s',
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
     color: Colors.primary.main,
     left: '-20px',
     zIndex: '100',
})) as typeof IconButton