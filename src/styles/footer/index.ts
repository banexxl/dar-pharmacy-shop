import styled from "@emotion/styled";
import { TextField, Typography, } from "@mui/material";
import { Colors } from "../theme";


type TextFieldProps = {
          color: string
}

export const FooterTitle = styled(Typography)(() => ({
          textTransform: "uppercase",
          marginBottom: "1em",
})) as typeof Typography

export const SubscribeTf = styled(TextField)<TextFieldProps>(() => ({
          ".MuiInputLabel-root": {
                    color: Colors.secondary,
          },

          ".MuiInput-root::before": {
                    borderBottom: `1px solid ${Colors.secondary}`,
          },
}))
