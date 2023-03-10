import { Box, styled, Typography } from "@mui/material";
import { Colors } from "../theme";

export const EmailContainer = styled(Box)(({ theme }) => ({
          backgroundColor: Colors.secondary,
          display: "flex",
          justifyContent: "center",
})) as typeof Box;


export const EmailTitle = styled(Typography)(({ theme }) => ({

})) as typeof Typography

export const EmailContent = styled(Typography)(({ theme }) => ({

})) as typeof Typography

export const EmailBold = styled(Typography)(({ theme }) => ({

})) as typeof Typography

export const EmailSignature = styled(Typography)(({ theme }) => ({

})) as typeof Typography