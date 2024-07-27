import styled from "@emotion/styled";
import { Box, Button, Theme, Typography } from "@mui/material";
import { Colors } from "../theme";

export const Heading404 = styled(Typography)(({ theme }: any) => ({
     fontSize: '3rem',
     fontWeight: 'bold',
     marginBottom: '2rem',
     color: Colors.primary.main,
}))

export const Message404 = styled(Typography)(({ theme }: any) => ({
     fontSize: '2rem',
     fontWeight: '600',
     marginBottom: '2rem',
     color: Colors.primary.lighter,
}))

export const StyledButton404 = styled(Button)(({ theme }: any) => ({
     fontSize: '.8rem',
     padding: '1rem 2rem',
     borderRadius: '2rem',
     margin: '2rem 0 100px 0px'
}))

type Container404Props = {
     theme: Theme;
}

export const Container404 = styled(Box)<Container404Props>(({ theme }) => ({
     borderBottom: 3,
     borderColor: Colors.primary.lighter,
     marginTop: '200px',
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'center',
     justifyContent: 'center',
     height: '80vh',
     textAlign: 'center'
}))

