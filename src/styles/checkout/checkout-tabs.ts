import { styled, Tab, Tabs } from "@mui/material"


export const CheckoutTabs = styled(Tabs)(({ theme }) => ({
          paddingLeft: '50%',
          transform: 'translateX(-25%)',
          marginTop: '20px',
          [theme.breakpoints.up("xl")]: {
                    width: '700px'
          },
          [theme.breakpoints.down("xl")]: {
                    width: '600px'
          },
          [theme.breakpoints.down("lg")]: {
                    width: '600px'
          },
          [theme.breakpoints.down("md")]: {
                    width: '500px',
          },
          [theme.breakpoints.down("sm")]: {
                    width: '420px',
                    paddingLeft: '1%',
                    transform: 'translateX(0%)',
          },
}));

export const CheckoutTab = styled(Tab)(({ theme }) => ({
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
                    padding: '5px'

          },
          [theme.breakpoints.down("xs")]: {


          },
}));