import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";
import img1 from '../../../public/images/backgrounds/dar1.png'

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

export const BannerContent = styled(Box)(({ theme }) => ({
          width: '40%',
          backgroundImage: `url("/images/backgrounds/dar7.png")`,
          '&::before': {
                    opacity: '.8',
          },
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          textAlign: 'center',
          boxShadow: 'inset 6px 7px 20px 1px rgb(201 101 101 / 20%)',
})) as typeof Box

export const BannerImage = styled("img")(({ src, theme }) => ({
          src: `url(${src})`,
          // backgroundImage: `url(${src})`,
          // backgroundRepeat: "no-repeat",
          // backgroundPosition: "center",
          width: "40%",
          [theme.breakpoints.down("md")]: {
                    width: "350px",
          },
          [theme.breakpoints.down("sm")]: {
                    width: "320px",
                    height: "300px",
          },
}));

export const BannerTitle = styled(Typography)(({ theme }) => ({
          lineHeight: 1.5,
          fontSize: "72px",
          marginBottom: "20px",
          [theme.breakpoints.down('sm')]: {
                    fontSize: '42px',
          }
})) as typeof Typography

export const BannerShopButton = styled(Button, {
          // Configure which props should be forwarded on DOM
          shouldForwardProp: (prop) => prop !== "color",
          name: "MuiButton",
          slot: "Root",
          // We are specifying here how the styleOverrides are being applied based on props
          overridesResolver: (props, styles) => [
                    styles.root,
                    props.color === "primary" && styles.primary,
                    props.color === "secondary" && styles.secondary,
          ],
})(({ theme }) => ({
          padding: "20px 0px",
          color: Colors.white,
          fontWeight: "bold",
          fontSize: "16px",
          width: '200px',
          [theme.breakpoints.down("sm")]: {
                    padding: "10px 0px",
                    fontSize: "14px",
          },
          [theme.breakpoints.down("xl")]: {
                    padding: "10px 0px",
                    fontSize: "14px",
          },
})) as typeof Button
