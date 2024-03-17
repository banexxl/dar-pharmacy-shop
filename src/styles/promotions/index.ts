import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Colors } from "../theme";

export const PromotionsContainer = styled(Box)(({ theme }) => ({
     [theme.breakpoints.up("md")]: {
          padding: "20px 0px 20px 0px",
     },
     [theme.breakpoints.down("md")]: {
          padding: "20px",
     },
     borderRadius: '5px',
     display: "flex",
     justifyContent: "center",
     alignItems: "center",
     overflow: "hidden",
     background: Colors.primary.lighter,
     height: '70px'
}));

export const MessageText = styled(Typography)(({ theme }) => ({
     [theme.breakpoints.up("md")]: {
          fontSize: "2.2rem",
     },
     [theme.breakpoints.down("md")]: {
          fontSize: "1.5rem",
     },
     color: Colors.primary.main,
}));
