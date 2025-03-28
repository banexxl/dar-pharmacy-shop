import { Box, styled } from "@mui/material"
import { Colors } from "../theme";
import Image from 'mui-image'

export const ProductImageBox = styled(Box)(({ theme, sx }: any) => ({
     display: "flex",
     justifyContent: "center",
     alignItems: "center",
     flexDirection: "column",
}))


export const ProductImage = styled(Image)(({ src, theme }: any) => ({
     src: `${src}`,
     width: "50%",
     background: Colors.light_gray,
     padding: '10px',
     [theme.breakpoints.down("md")]: {
          width: "60%",
     },
     cursor: 'pointer',
     webkitTransition: '-webkit-transform 0.4s',
     transition: 'transform 0.4s',
     ':hover': {
          webkitTransform: 'scale(1.2) rotate(0.01deg)',
          transform: 'scale(1.1) rotate(0.01deg)'
     },
}));

type ProductDetailWrapperProps = {
     isVisible: boolean;
     theme: any;
}

export const ProductDetailWrapper = styled(Box, {
     shouldForwardProp: (prop) => prop !== 'isVisible'
})<ProductDetailWrapperProps>(({ isVisible, theme }) => ({
     display: "flex",
     padding: theme.spacing(4),
}))

export const ProductDetailInfoWrapper = styled(Box)(() => ({
     display: "flex",
     flexDirection: "column",
     maxWidth: 500,
     lineHeight: 1.5,
}));