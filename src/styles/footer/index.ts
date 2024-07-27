import styled from "@emotion/styled";
import { Box, TextField, Typography, Checkbox, Theme } from "@mui/material";
import { Colors } from "../theme";


type TextFieldProps = {
     theme: Theme
}

export const FooterContainer = styled(Box)<TextFieldProps>(({ theme }) => ({
     alignItems: 'center',
     backgroundColor: Colors.shaft,
     color: Colors.white,
     padding: '2rem',
     display: 'flex',
     justifyContent: 'space-between',
     [theme.breakpoints.down("md")]: {
          flexDirection: 'column'
     },
     [theme.breakpoints.up("md")]: {
          flexDirection: 'row',
          justifyContent: 'space-around'
     },
}))

type FooterInfoProps = {
     theme: Theme
}

export const FooterInfoAccount = styled(Box)<FooterInfoProps>(({ theme }) => ({
     display: 'flex',
     flexDirection: 'row',
     gap: '3rem',
     marginBottom: '20px',
}))

export const FooterSocial = styled(Box)(({ theme }) => ({
     display: 'flex',
     justifyContent: 'center',
     gap: '2rem',
     color: Colors.primary.main,
     margin: '20px 40px'
}))

type FooterSubscribeProps = {
     theme: Theme
}

export const FooterSubscribe = styled(Box)<FooterSubscribeProps>(({ theme }) => ({
     display: 'flex',
     flexDirection: 'column',
     gap: '20px',
     color: Colors.primary.main,
     [theme.breakpoints?.down("md")]: {
          marginBottom: '40px'
     },
}))

type FooterTitleProps = {
     theme: Theme
}

export const FooterTitle = styled(Typography)<FooterTitleProps>(({ theme }) => ({
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
}))

type FooterItemProps = {
     theme: Theme
}

export const FooterItem = styled(Typography)<FooterItemProps>(({ theme }) => ({
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
}))

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
export const Copyright = styled(Typography)(({ theme }) => ({
     color: Colors.primary.main,
     fontSize: '.8rem',
     bottom: '0',
     right: '0',
})) 
