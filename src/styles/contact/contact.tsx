import { Box, Typography, Button } from "@mui/material";
import styled from "@emotion/styled";
import { Colors } from "../theme";


export const ContactBox = styled(Box)(({ theme }: any) => ({
     [theme.breakpoints.up("md")]: {
          padding: "40px 0px 40px 0px",
     },
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

export const ContactInfoBox = styled(Box)(({ theme }: any) => ({
     textAlign: 'center',
     padding: '15px'

}));

export const ContactMapBox = styled(Box)(({ theme }: any) => ({
     borderRadius: '20px',
     [theme.breakpoints.down("xs")]: {
          width: '310px'
     },
     [theme.breakpoints.down("sm")]: {
          width: '600px'
     },
     [theme.breakpoints.down("md")]: {
          width: '800px'
     },
     [theme.breakpoints.down("xs")]: {
          height: '200px'
     },
     [theme.breakpoints.down("sm")]: {
          height: '400px'
     },
     [theme.breakpoints.down("md")]: {
          height: '400px'
     },
}));

export const ContactFormBox = styled(Box)(({ theme }: any) => ({
     margin: '10px',
     borderRadius: '20px',
     padding: '10px',
     background: Colors.dove_gray,
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'center',
     justifyContent: 'center',
     gap: '20px',
}));

export const ContactTitle = styled(Typography)(({ theme }: any) => ({
     color: Colors.primary.main
}));

export const ContactText = styled(Typography)(({ theme }: any) => ({
     color: Colors.primary.main,
     textAlign: 'center',
     alignItems: 'center',

}));

export const ContactStrongText = styled(Typography)(({ theme }: any) => ({
     fontStyle: 'italic',
     fontWeight: 'bolder',
     color: Colors.primary.main
}));

// export const ContactButton = styled(Button)(({ theme }: any) => ({
//      width: '150px',
// }));