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
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: 'no-repeat',
          textAlign: 'center',
          boxShadow: 'inset 6px 7px 20px 1px rgb(201 101 101 / 20%)',
          [theme.breakpoints.down("lg")]: {
                    width: "500px",
                    height: '500px'
          },
          [theme.breakpoints.down("md")]: {
                    width: "400px",
                    height: '400px'
          },
          [theme.breakpoints.down("sm")]: {
                    width: "300px",
                    height: "300px",
          },
})) as typeof Box

export const BannerImage = styled("img")(({ src, theme }) => ({
          src: `url(${src})`,
          // backgroundImage: `url(${src})`,
          // backgroundRepeat: "no-repeat",
          // backgroundPosition: "center",
          width: "40%",
          [theme.breakpoints.down("lg")]: {
                    width: "500px",
                    height: '500px'
          },
          [theme.breakpoints.down("md")]: {
                    width: "400px",
                    height: '400px'
          },
          [theme.breakpoints.down("sm")]: {
                    width: "300px",
                    height: "300px",
          },
}));

export const BannerTitle = styled(Typography)(({ theme }) => ({
          fontSize: "2rem",
          marginBottom: "20px",
          color: 'yellow',
          [theme.breakpoints.down("lg")]: {
                    fontSize: '2rem'
          },
          [theme.breakpoints.down("md")]: {
                    fontSize: '1.5rem'
          },
          [theme.breakpoints.down("sm")]: {
                    fontSize: '1.3rem'
          },
})) as typeof Typography

export const BannerText = styled(Typography)(({ theme }) => ({
          color: 'white',
          textAlign: 'justify',
          padding: '5px',
          [theme.breakpoints.down("lg")]: {
                    fontSize: '1.8rem'
          },
          [theme.breakpoints.down("md")]: {
                    fontSize: '1.3rem'
          },
          [theme.breakpoints.down("sm")]: {
                    fontSize: '.9rem'
          },
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
