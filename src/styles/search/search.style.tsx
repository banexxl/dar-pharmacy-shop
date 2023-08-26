import styled from "@emotion/styled";
import { Box, TextField } from "@mui/material";
import { Colors } from "../theme";

export const SearchBoxContainer = styled(Box)(() => ({
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: Colors.primary,
          display: "flex",
          flexDirection: 'column',
          justifyContent: "center",
          alignItems: "center",
          zIndex: 99999,
          opacity: .9,
}));

export const SearchField = styled(TextField)(({ theme }: any) => ({
          ".MuiInputLabel-root": {
                    color: Colors.secondary,
          },
          ".MuiInput-root": {
                    fontSize: '1rem',
                    [theme.breakpoints.up('md')]: {
                              fontSize: '2rem',
                    },
                    color: Colors.secondary,
          },
          ".MuiInput-root::before": {
                    borderBottom: `1px solid ${Colors.secondary}`,
          },
          padding: "0 0 0 40px",
}));

export const SearchResultsBox = styled(Box)(() => ({
          width: "130%",
          backgroundColor: Colors.primary,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: 1,
          borderRadius: '10px',
}));
