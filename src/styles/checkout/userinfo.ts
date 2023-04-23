import styled from "@emotion/styled";
import { Box, Button, Checkbox, IconButton } from "@mui/material";
import { Colors } from "../theme";



export const PaymentOptionRadio = styled(Box)(({ theme }: any) => ({
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
          background: Colors.secondary,
          margin: 4,
          height: '40px'
}))

export const ClearFormButton = styled(Button)(() => ({
          background: Colors.secondary,
          margin: 10,
          width: '150px',
          height: '40px'
}))

export const ShouldCreateAccountButton = styled(Button)(() => ({
          background: Colors.secondary,
          height: '40px'
}))
