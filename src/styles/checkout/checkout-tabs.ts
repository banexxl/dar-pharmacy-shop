import { styled, Tab, Tabs, Typography } from "@mui/material"
import { Colors } from "../theme";


export const CheckoutTabs = styled(Tabs)(({ theme }) => ({
     width: '100%',
}));

export const CheckoutTab = styled(Tab)(({ theme }) => ({
     [theme.breakpoints.up("md")]: {
          width: '100%',
     },
     [theme.breakpoints.down("md")]: {
          display: 'none'
     },
}));

export const CheckoutTabText = styled(Typography)(({ theme }) => ({
     my: 2,
     wordWrap: 'break-word',
     width: '100%',
     [theme.breakpoints.up("md")]: {
          fontSize: "1rem",
     },
     [theme.breakpoints.down("md")]: {
          fontSize: ".8rem",
     },
     color: Colors.primary.main
}));
