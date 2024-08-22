import styled from "@emotion/styled";
import { Box, Button, Checkbox, Theme } from "@mui/material";
import { Colors } from "../theme";

type UserInfoProps = {
     theme: Theme
}

export const PaymentOptionRadio = styled(Box)<UserInfoProps>(({ theme, sx }) => ({
     display: 'flex',
     [theme.breakpoints.down("sm")]: {
          flexDirection: 'column',
          marginBottom: '100px'
     },
     height: '50px',
     alignItems: 'center',
     justifyContent: 'space-between',
     width: '100%',
     marginTop: '20px'
}))

export const CheckoutNextPrevButton = styled(Button)(() => ({
     background: Colors.primary.lighter,
     margin: 4,
     height: '40px'
}))

export const ClearFormButton = styled(Button)(() => ({
     background: Colors.primary.lighter,
     margin: 10,
     width: '150px',
     height: '40px'
}))

export const ShouldCreateAccountCheckBox = styled(Checkbox)(() => ({
     color: Colors.primary.lighter,
}))

