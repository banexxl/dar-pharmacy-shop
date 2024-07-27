import styled from "@emotion/styled";
import { Box, Button, Checkbox, IconButton, Theme } from "@mui/material";
import { Colors } from "../theme";

type UserInfoProps = {
     theme: Theme
}

export const PaymentOptionRadio = styled(Box)<UserInfoProps>(({ theme }) => ({
     display: 'flex',
     [theme.breakpoints.down("sm")]: {
          flexDirection: 'column',
          marginBottom: '100px'
     },
     height: '50px',
     alignItems: 'center',
     justifyContent: 'space-between',
     width: '90vw',
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

export const ShouldCreateAccountButton = styled(Button)(() => ({
     background: Colors.primary.lighter,
     height: '40px'
}))
