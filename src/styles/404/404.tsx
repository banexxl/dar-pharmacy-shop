import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import { Colors } from "../theme";

export const Heading404 = styled(Typography)(({ theme }: any) => ({
          fontSize: '3rem',
          fontWeight: 'bold',
          marginBottom: '2rem',
          color: Colors.primary,
}))

export const Message404 = styled(Typography)(({ theme }: any) => ({
          fontSize: '2rem',
          fontWeight: '600',
          marginBottom: '2rem',
          color: Colors.secondary,
}))

export const StyledButton404 = styled(Button)(({ theme }: any) => ({
          fontSize: '.8rem',
          padding: '1rem 2rem',
          borderRadius: '2rem',
          margin: '2rem 0 100px 0px'
}))

export const Container404 = styled(Box)(({ theme }: any) => ({
          borderBottom: 3,
          borderColor: Colors.secondary,
          marginTop: '200px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '80vh',
          textAlign: 'center'
}))

