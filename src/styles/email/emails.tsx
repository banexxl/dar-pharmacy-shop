import { Box, Button, styled, Typography } from "@mui/material";
import { Colors } from "../theme";

export const RootContainer = styled(Box)(({ theme }) => ({
          backgroundColor: Colors.secondary,
          padding: theme.spacing(3),
})) as typeof Box;

export const EmailContainer = styled(Box)(({ theme }) => ({
          maxWidth: 600,
          margin: '0 auto',
          backgroundColor: '#fff',
          padding: theme.spacing(4),
          border: `1px solid ${theme.palette.grey[300]}`,
          boxShadow: `0 0 10px ${theme.palette.grey[300]}10`,
})) as typeof Box;


export const EmailTitle = styled(Typography)(({ theme }) => ({
          color: Colors.primary,
          marginBottom: theme.spacing(2),
})) as typeof Typography

export const EmailCartList = styled(Typography)(({ theme }) => ({
          padding: 0,
          listStyle: 'none',
          marginBottom: theme.spacing(2),
})) as typeof Typography

export const EmailText = styled(Typography)(({ theme }) => ({
          fontFamily: '"Montez", "cursive"'
})) as typeof Typography

export const EmailBold = styled(Typography)(({ theme }) => ({

})) as typeof Typography

export const EmailSignature = styled(Typography)(({ theme }) => ({

})) as typeof Typography

export const EmailButton = styled(Button)(({ theme }) => ({
          backgroundColor: theme.palette.success.main,
          color: theme.palette.common.white,
          textDecoration: 'none',
          padding: theme.spacing(1.5, 3),
          borderRadius: 3,
          marginTop: theme.spacing(2),
          '&:hover': {
                    backgroundColor: theme.palette.success.dark,
          }
})) as typeof Button


