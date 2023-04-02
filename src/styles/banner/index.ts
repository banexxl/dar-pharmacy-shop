import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";

export const BannerContainer = styled(Box)(({ theme }) => ({
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: "0px 0px",
          background: Colors.light_gray,
          [theme.breakpoints.down("sm")]: {
                    flexDirection: "column",
                    alignItems: "center",
          },
          // backgroundImage: `url(/images/banner/banner.png)`,
          // backgroundRepeat: "no-repeat",
          // backgroundPosition: "center",
})) as typeof Box;

export const BannerImage = styled("img")(({ src, theme }) => ({
          src: `url(${src})`,
          // backgroundImage: `url(${src})`,
          // backgroundRepeat: "no-repeat",
          // backgroundPosition: "center",
          width: "40%",
          [theme.breakpoints.down("lg")]: {
                    height: '100%'
          },
          [theme.breakpoints.down("md")]: {
                    display: 'none'
          },
}));

export const BannerContent = styled(Box)(({ theme }) => ({
          textAlign: 'center',
          boxShadow: 'inset 6px 7px 20px 1px rgb(201 101 101 / 20%)',
          borderRadius: '10px',
          width: '40%',
          height: '100%',
          [theme.breakpoints.up("xs")]: {
                    width: '80%',
                    height: '100%',
          },
})) as typeof Box


export const BannerTitle = styled(Typography)(({ theme }) => ({
          fontSize: '2.5rem',
          textAlign: 'right',
          marginBottom: "20px",
          color: Colors.secondary,
          fontFamily: 'monospace',
          textShadow: '1px 1px 2px #000000, 1px 1px 2px #000000, 1px 1px 2px #000000',
          [theme.breakpoints.down("xl")]: {
                    fontSize: '2.2rem',
          },
          [theme.breakpoints.down("lg")]: {
                    fontSize: '2rem',
          },
          [theme.breakpoints.down("md")]: {
                    fontSize: '1.8rem'
          },
          [theme.breakpoints.down("sm")]: {
                    fontSize: '1.6rem',
          },
})) as typeof Typography

export const BannerText = styled(Typography)(({ theme }) => ({
          backgroundImage: `url("/images/backgrounds/dar5.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: 'no-repeat',
          color: 'white',
          textAlign: 'justify',
          padding: '5px',
          fontFamily: 'monospace',
          textShadow: '1px 1px 2px #000000, 1px 1px 2px #000000, 1px 1px 2px #000000',
          fontSize: '2rem',
          [theme.breakpoints.down("xl")]: {
                    fontSize: '2rem',
          },
          [theme.breakpoints.down("lg")]: {
                    fontSize: '1.8rem',
          },
          [theme.breakpoints.down("md")]: {
                    fontSize: '1.6rem'
          },
          [theme.breakpoints.down("sm")]: {
                    fontSize: '1.2rem',
          },
})) as typeof Typography

export const BannerTextInner = styled(Typography)(({ theme }) => ({
          textAlign: 'justify',
          padding: '5px',
          fontFamily: 'monospace',
          textShadow: '1px 1px 2px #000000, 1px 1px 2px #000000, 1px 1px 2px #000000',
          fontSize: '2rem',
          display: 'inline',
          fontWeight: 'bold',
          color: Colors.secondary,
          [theme.breakpoints.down("xl")]: {
                    fontSize: '2rem',
          },
          [theme.breakpoints.down("lg")]: {
                    fontSize: '1.8rem',
          },
          [theme.breakpoints.down("md")]: {
                    fontSize: '1.6rem'
          },
          [theme.breakpoints.down("sm")]: {
                    fontSize: '1.2rem',
          },
})) as typeof Typography

export const BannerShopButton = styled(Button)(({ theme }) => ({
          padding: "10px 0px",
          color: Colors.white,
          fontSize: "16px",
          width: '50%',
          height: '10%',
          display: 'block',
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'monospace',
          [theme.breakpoints.down("sm")]: {
                    padding: "10px 0px",
                    fontSize: "14px",
          },
          [theme.breakpoints.down("xl")]: {
                    padding: "10px 0px",
                    fontSize: "14px",
          },
})) as typeof Button
