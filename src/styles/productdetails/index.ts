import { Box, styled } from "@mui/material"

export const ProductDetailWrapper = styled(Box)(({ theme }: any) => ({
          display: "flex",
          padding: theme.spacing(4),
}))

export const ProductDetailInfoWrapper = styled(Box)(() => ({
          display: "flex",
          flexDirection: "column",
          maxWidth: 500,
          lineHeight: 1.5,
}));