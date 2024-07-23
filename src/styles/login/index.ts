import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";

export const LoginButton = styled(Button, {
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
     padding: "10px 0px",
     color: Colors.primary.lighter,
     fontWeight: "bold",
     fontSize: "16px",
     [theme.breakpoints.down("lg")]: {
          padding: "10px 0px",
          fontSize: "14px",
          innerWidth: '100px'
     },
     width: '150px',
     borderRadius: '20px'
})) as typeof Button

export const SwitchLoginRegisterButton = styled(Button, {
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
     padding: "10px 0px",
     color: Colors.link,
     fontWeight: "bold",
     fontSize: "16px",
     backgroundColor: 'white',
     [theme.breakpoints.down("lg")]: {
          padding: "10px 0px",
          fontSize: "14px",
          innerWidth: '100px'
     },
     width: '150px',
     borderRadius: '20px'
})) as typeof Button