import styled from "@emotion/styled";
import { Box, TextField, Theme } from "@mui/material";
import { Colors } from "../theme";

type SearchBoxContainerProps = {
     theme: Theme
}
export const SearchBoxContainer = styled(Box)((theme) => ({
     position: "fixed",
     top: 0,
     left: 0,
     width: "100%",
     height: "100%",
     background: Colors.secondary.custom,
     display: "flex",
     flexDirection: 'column',
     justifyContent: "center",
     alignItems: "center",
     zIndex: 99999,
     opacity: 1,
}));

export const SearchField = styled(TextField)(({ theme }: any) => ({
     ".MuiInputLabel-root": {
          color: Colors.primary.lighter,
     },
     ".MuiInput-root": {
          fontSize: '1rem',
          [theme.breakpoints.up('md')]: {
               fontSize: '2rem',
          },
          color: Colors.primary.lighter,
     },
     ".MuiInput-root::before": {
          borderBottom: `1px solid ${Colors.secondary.custom}`,
     },
     padding: "0 0 0 40px",
}));

export const SearchResultsBox = styled(Box)(() => ({
     width: "130%",
     backgroundColor: Colors.secondary.custom,
     display: "flex",
     justifyContent: "center",
     alignItems: "center",
     opacity: 1,
     borderRadius: '10px',
}));
