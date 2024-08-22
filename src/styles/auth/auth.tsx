import { Box, Typography, Button, Theme } from "@mui/material";
import styled from "@emotion/styled";
import { Colors } from "../theme";

type AuthProps = {
     theme: Theme;
}

export const AuthBox = styled(Box)<AuthProps>(({ theme }) => ({
     [theme.breakpoints.up("md")]: {
          padding: "40px 0px 40px 0px",
     },
     height: '500px',
     marginTop: '130px',
     marginBottom: '100px',
     display: "flex",
     flexDirection: 'column',
     justifyContent: "center",
     alignItems: "center",
     padding: "20px 0px 20px 0px",
     overflow: "hidden",
     background: Colors.primary.lighter,
     borderRadius: '10px'
}));

type AuthInfoBoxProps = {
     theme: Theme;
}

export const AuthInfoBox = styled(Box)<AuthInfoBoxProps>(({ theme }) => ({
     textAlign: 'center',
     padding: '15px'

}));

export const AuthFormBox = styled(Box)(({ theme }) => ({
     margin: '30px',
     borderRadius: '20px',
     padding: '10px',
     background: Colors.dove_gray,
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'center',
     justifyContent: 'center',
     gap: '50px',
     height: '100%',
}));

export const AuthTitle = styled(Typography)(({ theme }: any) => ({
     color: Colors.primary.main,
     fontSize: '2rem',
     fontWeight: 'bolder',
     marginBottom: '20px',
}));


export const AuthSubTitle = styled(Typography)(({ theme }: any) => ({
     display: 'flex',
     justifyContent: 'flex-start',
     marginLeft: '10px',
     color: Colors.primary.main,
     fontSize: '1.5rem',
     marginBottom: '20px',
     fontWeight: 'bolder',
}));

type AuthTextProps = {
     theme: Theme;
}

export const AuthText = styled(Typography)<AuthTextProps>(({ theme, sx }) => ({
     color: Colors.primary.main,
     textAlign: 'center',
     marginLeft: '10px',
     marginBottom: '20px',
     maxWidth: '400px',
}));

export const AuthStrongText = styled(Typography)<AuthTextProps>(({ theme, sx }) => ({
     fontStyle: 'italic',
     fontWeight: 'bolder',
     color: Colors.primary.main,
     display: 'inline',
     textAlign: 'justify',
     marginBottom: '20px',
}));

export const AuthButton = styled(Button)(({ theme }: any) => ({
     width: '150px',
     color: Colors.primary.lighter,
     backgroundColor: Colors.primary.main,
     transition: "transform 0.3s",
     ":hover": {
          transform: "scale(1.2)"
     },
     marginbottom: '40px',
}));