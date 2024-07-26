import styled from "@emotion/styled";
import { Box, TextField, Typography, Checkbox } from "@mui/material";
import { Colors } from "../theme";


type TextFieldProps = {
     color: string
}

export const FooterContainer = styled(Box)(({ theme }: any) => ({
     alignItems: 'center',
     backgroundColor: Colors.shaft,
     color: Colors.white,
     padding: '2rem',
     display: 'flex',
     justifyContent: 'space-between',
     [theme.breakpoints?.down("md")]: {
          flexDirection: 'column'
     },
     [theme.breakpoints?.up("md")]: {
          flexDirection: 'row',
          justifyContent: 'space-around'
     },
})) as typeof Box

export const FooterInfoAccount = styled(Box)(({ theme }: any) => ({
     display: 'flex',
     flexDirection: 'row',
     gap: '3rem',
     marginBottom: '20px',
})) as typeof Box

export const FooterSocial = styled(Box)(({ theme }: any) => ({
     display: 'flex',
     justifyContent: 'center',
     gap: '2rem',
     color: Colors.primary.main,
     margin: '20px 40px'
})) as typeof Box

export const FooterSubscribe = styled(Box)(({ theme }: any) => ({
     display: 'flex',
     flexDirection: 'column',
     gap: '20px',
     color: Colors.primary.main,
     [theme.breakpoints?.down("md")]: {
          marginBottom: '40px'
     },
})) as typeof Box

export const FooterTitle = styled(Typography)(({ theme }: any) => ({
     color: Colors.primary.main,
     textTransform: "uppercase",
     textAlign: 'left',
     fontWeight: 'bold',
     align: 'left',
     [theme.breakpoints?.down("md")]: {
          fontSize: '1rem'
     },
     [theme.breakpoints?.up("md")]: {
          fontSize: '1.2rem'
     },
})) as typeof Typography

export const FooterItem = styled(Typography)(({ theme }: any) => ({
     color: Colors.secondary.custom,
     textTransform: "uppercase",
     textAlign: 'left',
     [theme.breakpoints?.down("md")]: {
          fontSize: '.6rem'
     },
     [theme.breakpoints?.up("md")]: {
          fontSize: '.8rem'
     },
     '&:hover': { color: Colors.secondary.main, cursor: 'pointer' }
})) as typeof Typography

export const PrivacyPolicyCheckBox = styled(Checkbox)(() => ({
     color: Colors.primary.lighter,
}))

export const SubscribeTf = styled(TextField)<TextFieldProps>(() => ({
     ".MuiInputLabel-root": {
          color: Colors.primary.lighter,
     },
     ".MuiInput-root::before": {
          borderBottom: `1px solid ${Colors.primary.lighter}`,
     },
}))

//place copyright text in the bottom right of the footer
export const Copyright = styled(Typography)(({ theme }: any) => ({
     color: Colors.primary.main,
     fontSize: '.8rem',
     bottom: '0',
     right: '0',
})) as typeof Typography
