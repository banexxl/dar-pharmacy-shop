import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { Colors } from "../theme";

export const SignInContainer = styled(Box)(({ theme }: any) => ({
          display: "flex",
          marginTop: '100px',
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
}));

export const MessageText = styled(Typography)(({ theme }: any) => ({
          fontFamily: 'monospace',
          [theme.breakpoints.up("md")]: {
                    fontSize: "3rem",
          },
          color: Colors.primary,
          fontSize: "1.5rem",
}));