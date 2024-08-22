import { Box, styled } from "@mui/material";
import { Colors } from '@/styles/theme';

export const RegisterFormBox = styled(Box)(({ theme }) => ({
     [theme.breakpoints.up("md")]: {
          padding: "40px 0px 40px 0px",
          margin: '130px',
     },
     [theme.breakpoints.down("md")]: {
          padding: "20px 0px 20px 0px",
          margin: '0px',
          marginTop: '60px',
     },
     borderRadius: '20px',
     padding: '30px',
     background: Colors.dove_gray,
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'center',
     justifyContent: 'center',
     gap: '50px',
     height: '100%',
})) as typeof Box
