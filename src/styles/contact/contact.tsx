import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Colors } from "../theme";


export const ContactContainer = styled(Box)(({ theme }: any) => ({
          [theme.breakpoints.up("md")]: {
                    padding: "40px 0px 40px 0px",
          },
          marginTop: '130px',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px 0px 20px 0px",
          overflow: "hidden",
          background: Colors.secondary,
}));

export const ContactInfo = styled(Box)(({ theme }: any) => ({

}));

export const ContactMap = styled(Box)(({ theme }: any) => ({
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

export const ContactForm = styled(Box)(({ theme }: any) => ({
          height: '400px',
          width: '400px'
}));

export const ContactTitle = styled(Typography)(({ theme }: any) => ({

}));

export const ContacText = styled(Typography)(({ theme }: any) => ({

}));