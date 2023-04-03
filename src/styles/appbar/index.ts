import { IconButton, List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import "@fontsource/montez";
import { Colors, DrawerWidth } from "../theme";
import { textPopUpTop } from "../animation";
import { Zilla_Slab } from "@next/font/google";
import zIndex from "@mui/material/styles/zIndex";

export const AppbarContainer = styled(Box)(() => ({
          display: 'flex',
          marginTop: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2px 8px',
          position: 'relative'
})) as typeof Box

export const AppbarHeader = styled(Typography)(() => ({
          padding: "4px",
          flexGrow: 1,
          fontSize: "4em",
          fontFamily: '"Montez", "cursive"',
          color: Colors.primary,
          "&:hover": {
                    animation: `${textPopUpTop} 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both`,
          },
})) as typeof Typography

export const ActionIconsContainerMobile = styled(Box)(() => ({
          display: 'flex',
          background: Colors.shaft,
          position: "fixed",
          bottom: 0,
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