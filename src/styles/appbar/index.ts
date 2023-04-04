import { IconButton, List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import "@fontsource/montez";
import { Colors } from "../theme";
import { textPopUpTop } from "../animation";

export const AppbarContainer = styled(Box)(() => ({
          display: 'flex',
          left: '50%',
          transform: 'translateX(-50%)',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'fixed',
          transition: '0.3s',
          zIndex: '1000'
})) as typeof Box

export const AppbarHeader = styled(Typography)(({ theme }) => ({
          padding: "4px",
          flexGrow: 1,
          [theme.breakpoints.up("md")]: {
                    width: '300px',
          },
          [theme.breakpoints.down("md")]: {
                    width: '200px',
          },
          fontSize: "3rem",
          fontFamily: '"Montez", "cursive"',
          color: Colors.primary,
          "&:hover": {
                    animation: `${textPopUpTop} 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both`,
          },
          transition: '0.2s'
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
          flexGrow: 0,
          backgroundColor: Colors.primary
})) as typeof Box

type ListType = {
          type: any
}
export const MyList = styled(List)<ListType>(({ type }: any) => ({
          display: type === "row" ? "flex" : "block",
          flexGrow: 3,
          justifyContent: "right",
          alignItems: "center",
}))

export const DrawerCloseButton = styled(IconButton)(() => ({
          color: Colors.secondary,
          left: '-20px',
          zIndex: '100',
})) as typeof IconButton