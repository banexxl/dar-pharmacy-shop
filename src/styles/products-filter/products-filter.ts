import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Colors } from "../theme";

export const ProductsFilterContainer = styled(Box)(({ theme }) => ({
          height: '80vh',
          width: '100%',
          // [theme.breakpoints.up("md")]: {
          //           padding: "20px 20px",
          // },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          background: Colors.secondary,
}));
