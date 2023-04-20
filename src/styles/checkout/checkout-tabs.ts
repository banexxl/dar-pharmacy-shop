import { styled, Tab, Tabs, Typography } from "@mui/material"
import { Colors } from "../theme";


export const CheckoutTabs = styled(Tabs)(({ theme }) => ({
          marginTop: '20px',
          [theme.breakpoints.up("xl")]: {
                    width: '800px'
          },
          [theme.breakpoints.down("xl")]: {
                    width: '700px'
          },
          [theme.breakpoints.down("lg")]: {
                    width: '600px'
          },
          [theme.breakpoints.down("md")]: {
                    width: '500px',
          },
}));

export const CheckoutTab = styled(Tab)(({ theme }) => ({
          background: Colors.secondary,
          [theme.breakpoints.up("md")]: {
                    width: '250px',
          },
          [theme.breakpoints.down("md")]: {
                    width: '110px',
          },
}));

export const CheckoutTabText = styled(Typography)(({ theme }) => ({
          wordWrap: 'break-word',
          [theme.breakpoints.up("xl")]: {
                    fontSize: "1rem",
          },
          [theme.breakpoints.down("xl")]: {
                    fontSize: ".8rem",
          },
          [theme.breakpoints.down("md")]: {
                    fontSize: ".6rem",
          },
          [theme.breakpoints.down("sm")]: {
                    paddingRight: '50px'
          },
          [theme.breakpoints.down("xs")]: {

          },
}));
