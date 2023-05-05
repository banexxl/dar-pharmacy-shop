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
          gap: '5rem',
          marginBottom: '20px'
})) as typeof Box

export const FooterSocial = styled(Box)(({ theme }: any) => ({
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          color: Colors.primary,
          margin: '20px 40px'
})) as typeof Box

export const FooterSubscribe = styled(Box)(({ theme }: any) => ({
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          color: Colors.primary,
          [theme.breakpoints?.down("md")]: {
                    marginBottom: '40px'
          },
})) as typeof Box

export const FooterTitle = styled(Typography)(() => ({
          color: Colors.primary,
          textTransform: "uppercase",
          textAlign: 'center'
})) as typeof Typography

export const PrivacyPolicyCheckBox = styled(Checkbox)(() => ({
          backgroundColor: 'transparent',
          color: Colors.secondary,
}))
export const SubscribeTf = styled(TextField)<TextFieldProps>(() => ({
          ".MuiInputLabel-root": {
                    color: Colors.secondary,
          },
          ".MuiInput-root::before": {
                    borderBottom: `1px solid ${Colors.secondary}`,
          },
}))
