import { Box, Typography, Button, Theme } from "@mui/material";
import styled from "@emotion/styled";
import { Colors } from "../theme";

type ProfileProps = {
     theme: Theme;
}

export const ProfileBox = styled(Box)<ProfileProps>(({ theme }) => ({
     marginTop: '100px',
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

type ProfileInfoBoxProps = {
     theme: Theme;
}

export const ProfileInfoBox = styled(Box)<ProfileInfoBoxProps>(({ theme }) => ({
     textAlign: 'center',
     padding: '20px'
}));

export const ProfileMapBox = styled(Box)(({ theme, sx }: any) => ({
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

type ProfileFormBoxProps = {
     theme: Theme;
}

export const ProfileFormBox = styled(Box)(({ theme }) => ({
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

export const ProfileTitle = styled(Typography)(({ theme, sx }: any) => ({
     color: Colors.primary.main,
     fontSize: '2rem',
     fontWeight: 'bolder',
     marginBottom: '20px',
}));


export const ProfileSubTitle = styled(Typography)(({ theme, sx }: any) => ({
     display: 'flex',
     justifyContent: 'flex-start',
     marginLeft: '10px',
     color: Colors.primary.main,
     fontSize: '1.5rem',
     marginBottom: '20px',
     fontWeight: 'bolder',
}));

type ProfileTextProps = {
     theme: Theme;
}

export const ProfileText = styled(Typography)<ProfileTextProps>(({ theme, sx }) => ({
     color: Colors.primary.main,
     textAlign: 'justify',
     [theme.breakpoints.down("md")]: {
          width: '300px',
          marginLeft: '50px',
     },
     [theme.breakpoints.up("md")]: {
          width: '500px',
          marginLeft: '-60px',
     },
     marginBottom: '20px',
}));

export const ProfileStrongText = styled(Typography)<ProfileTextProps>(({ theme, sx }) => ({
     fontStyle: 'italic',
     fontWeight: 'bolder',
     color: Colors.primary.main,
     textAlign: 'center',
     [theme.breakpoints.down("md")]: {
          width: '300px',
          marginLeft: '50px',
     },
     [theme.breakpoints.up("md")]: {
          width: '500px',
          marginLeft: '-60px',
     },
}));

// export const ProfileButton = styled(Button)(({ theme, sx }: any) => ({
//      width: '150px',
// }));