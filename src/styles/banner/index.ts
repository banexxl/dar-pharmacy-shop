import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";
import LoadingButton from "@mui/lab/LoadingButton";

export const BannerContainer = styled(Box)(({ theme, sx }) => ({
     // display: "flex",
     // justifyContent: "space-between",
     // flexDirection: 'column',
     width: "100%",
     height: "100%",
     // padding: "0px 0px",
     // marginTop: '50px',
     background: Colors.secondary.custom,
})) as typeof Box;

// export const BannerImage = styled("img")(({ src, theme }) => ({
//      src: `url(${src})`,
//      // backgroundImage: `url(${src})`,
//      // backgroundRepeat: "no-repeat",
//      // backgroundPosition: "center",
//      width: "50%",
//      [theme.breakpoints.down("lg")]: {
//           height: '100%'
//      },
//      [theme.breakpoints.down("md")]: {
//           display: 'none'
//      },
// }));

export const BannerTextContent = styled(Box)(({ theme }) => ({
     //boxShadow: 'inset 6px 7px 20px 1px rgb(201 101 101 / 20%)',
     // borderRadius: '10px',
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'flex-start',
     alignItems: 'center',
     // textShadow: '1px 1px 2px #000000, 1px 1px 2px #000000, 1px 1px 2px #000000',
     // color: Colors.primary.lighter,
     padding: '25px',
     [theme.breakpoints.up("lg")]: {
          width: '50%',
          height: '500px'
     },
     [theme.breakpoints.down("lg")]: {
          width: '100%',
          height: '400px'
     },
})) as typeof Box

export const BannerQuotaText = styled(Typography)(({ theme }) => ({
     textAlign: 'center',
     fontStyle: 'italic',
     margin: "20px",
     color: Colors.secondary.custom,
     textShadow: '1px 1px 2px #000000, 1px 1px 2px #000000, 1px 1px 2px #000000',
     [theme.breakpoints.down("md")]: {
          fontSize: '1.3rem',
     },
     [theme.breakpoints.up("md")]: {
          fontSize: '2rem',
     },
})) as typeof Typography

export const BannerLeftImageContent = styled(Box)(({ theme }) => ({
     boxShadow: 'inset 6px 7px 20px 1px rgb(201 101 101 / 20%)',
     // borderRadius: '10px',
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'space-between',
     alignItems: 'center',
     textShadow: '1px 1px 2px #000000, 1px 1px 2px #000000, 1px 1px 2px #000000',
     backgroundImage: `url("https://utfs.io/f/1d0a2c2a-46cd-43fd-b8eb-51140f034f7b-6qj3kd.jpg")`,
     backgroundSize: "cover",
     backgroundPosition: "center",
     backgroundRepeat: 'no-repeat',
     //   padding: '10px',
     width: '100%',
     height: '100%',
     // [theme.breakpoints.up("lg")]: {
     //      width: '50%',
     //      height: '500px'
     // },
     // [theme.breakpoints.down("lg")]: {
     //      width: '100%',
     //      height: '400px'
     // },
})) as typeof Box

export const BannerRightImageContent = styled(Box)(({ theme }) => ({
     position: 'absolute',
     [theme.breakpoints.up("lg")]: {
          top: '150px',
          right: '180px',
     },
     [theme.breakpoints.up("xl")]: {
          top: '450px',
          right: '300px',
     },
     width: '120px',
     height: '120px',
     borderRadius: '100%',
     backgroundImage: `url("/images/home-page/apotekaDar.jpg")`,
     backgroundSize: "cover",
     backgroundPosition: "center",
     backgroundRepeat: 'no-repeat',
     padding: '25px',
     [theme.breakpoints.down("lg")]: {
          display: 'none'
     },
})) as typeof Box

export const BannerTitle = styled(Typography)(({ theme }) => ({
     textAlign: 'right',
     margin: "20px",
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
     fontSize: "16px",
     width: '150px',
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'flex-end',
     // left: '50%',
     // transform: 'translateX(-50%)',
     margin: '20px 20px',
     '&:hover': {
          backgroundColor: Colors.secondary.custom,
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
