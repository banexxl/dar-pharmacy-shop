import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";
import LoadingButton from "@mui/lab/LoadingButton";

export const BannerContainer = styled(Box)(({ theme }) => ({
     display: "flex",
     justifyContent: "center",
     width: "100%",
     height: "100%",
     padding: "0px 0px",
     marginTop: '100px',
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
     textAlign: 'justify',
     boxShadow: 'inset 6px 7px 20px 1px rgb(201 101 101 / 20%)',
     borderRadius: '10px',
     textShadow: '1px 1px 2px #000000, 1px 1px 2px #000000, 1px 1px 2px #000000',
     display: 'inline',
     fontWeight: 'bold',
     color: Colors.secondary,
     backgroundImage: `url("/images/backgrounds/dar5.png")`,
     backgroundSize: "cover",
     backgroundPosition: "center",
     backgroundRepeat: 'no-repeat',
     padding: '25px',
     [theme.breakpoints.up("xl")]: {
          fontSize: '1.8rem',
     },
     [theme.breakpoints.down("xl")]: {
          fontSize: '1.6rem',
     },
     [theme.breakpoints.down("lg")]: {
          fontSize: '1.4rem',
     },
     [theme.breakpoints.down("md")]: {
          fontSize: '1.2rem'
     },
     [theme.breakpoints.down("sm")]: {
          fontSize: '1rem',
     },
     [theme.breakpoints.down("xs")]: {
          fontSize: '.8rem',
     },
})) as typeof Box


export const BannerTitle = styled(Typography)(({ theme }) => ({
     textAlign: 'right',
     margin: "20px",
     color: Colors.secondary,
     textShadow: '1px 1px 2px #000000, 1px 1px 2px #000000, 1px 1px 2px #000000',
     [theme.breakpoints.up("xl")]: {
          fontSize: '2.5rem',
     },
     [theme.breakpoints.down("xl")]: {
          fontSize: '2.2rem',
     },
     [theme.breakpoints.down("lg")]: {
          fontSize: '2.5rem',
     },
     [theme.breakpoints.down("md")]: {
          fontSize: '1.8rem'
     },
     [theme.breakpoints.down("sm")]: {
          fontSize: '1.5rem',
     },
})) as typeof Typography

export const BannerShopButton = styled(LoadingButton)(({ theme }) => ({
     color: Colors.white,
     fontSize: "16px",
     width: '40%',
     display: 'block',
     left: '50%',
     transform: 'translateX(-50%)',
     margin: '20px 20px',
     '&:hover': {
          backgroundColor: Colors.secondary,
     },
     '& .MuiLoadingButton-loadingIndicator': {
          // You can adjust the size of the spinner here
          // For example, if you want it to be 40px in diameter:
          position: 'absolute',
          top: '35%',
          left: '50%',
          transform: 'translate(-40%)'
     },
}))
