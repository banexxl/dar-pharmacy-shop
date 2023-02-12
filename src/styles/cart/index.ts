import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const CartWrapper = styled(Box)(({ theme }: any) => ({
          display: "flex",
          padding: theme.spacing(4),
}));

export const ProductDetailInfoWrapper = styled(Box)(() => ({
          display: "flex",
          flexDirection: "column",
          maxWidth: 500,
          lineHeight: 1.5,
}));