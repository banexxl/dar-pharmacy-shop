import { Box, styled } from "@mui/material"
import { Colors } from "../theme";
import Image from 'mui-image'

export const Product = styled(Box)(({ theme }: any) => ({
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          [theme.breakpoints.up("md")]: {
                    position: "relative",
          },
}))


export const ProductImage = styled(Image)(({ src, theme }: any) => ({
          src: `${src}`,
          width: "50%",
          background: Colors.light_gray,
          padding: '10px',
          [theme.breakpoints.up("md")]: {
                    width: "80%",
          },
          cursor: 'pointer',
          webkitTransition: '-webkit-transform 0.4s',
          transition: 'transform 0.4s',
          ':hover': {
                    webkitTransform: 'scale(1.2) rotate(0.01deg)',
                    transform: 'scale(1.1) rotate(0.01deg)'
          },
}));

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