import styled from "@emotion/styled";
import { Button, IconButton } from "@mui/material";
import { Box } from "@mui/material";
import { slideInBottom, slideInRight } from "../animation";
import { Colors } from "../theme";
import LoadingButton from '@mui/lab/LoadingButton';
import Image from 'mui-image'

export const Product = styled(Box, {
     shouldForwardProp: (prop) => prop !== "isVisible"
})(({ isVisible, theme }: any) => ({
     display: 'flex',
     justifyContent: "center",
     alignItems: "center",
     flexDirection: "column",
     [theme.breakpoints.up("md")]: {
          position: "relative",
     },
}))

export const ProductImage = styled(Image)(({ src, theme }: any) => ({
     src: `${src}`,
     width: "100px",
     height: '150px',
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

export const ProductDropdown = styled(Box, {
     shouldForwardProp: (prop) => prop !== "isVisible"
})(({ isVisible, theme }: any) => ({
     display: 'flex',
     justifyContent: "center",
     alignItems: "center",
     flexDirection: "column",
     [theme.breakpoints.up("md")]: {
          position: "relative",
          maxHeight: '600px',
          width: 'auto'
     },
     [theme.breakpoints.down("md")]: {
          position: "relative",
          maxHeight: '400px',
          width: 'auto'
     },
     // opacity: isVisible ? '1' : '0',
     // transform: isVisible ? 'translateY(50px)' : 'none',
     // visibility: isVisible ? 'visible' : 'hidden',
     // transition: 'opacity 1200ms ease-out, transform 600ms ease-out, visibility 1200ms ease-out',
     // willChange: 'opacity, transform, visibility',

}))

export const ProductImageDropdown = styled(Image)(({ src, theme }: any) => ({
     src: `${src}`,
     width: "50%",
     background: Colors.light_gray,
     padding: '10px',
     [theme.breakpoints.up("md")]: {
          width: "80%",
     },
     // cursor: 'pointer',
     // webkitTransition: '-webkit-transform 0.4s',
     // transition: 'transform 0.4s',
     // ':hover': {
     //           webkitTransform: 'scale(1.2) rotate(0.01deg)',
     //           transform: 'scale(1.1) rotate(0.01deg)'
     // },
}));

export const ProductActionButton = styled(IconButton)(() => ({
     margin: 4,
     '&:hover': {
          backgroundColor: Colors.primary.lighter,
     },
}))

export const ProductFavButton = styled(ProductActionButton, { shouldForwardProp: (prop) => prop !== 'isfav' })
     (({ isfav, theme }: any) => ({
          color: isfav ? Colors.primary.main : Colors.primary.light,
          [theme.breakpoints.up("md")]: {
               position: "absolute",
               right: 0,
               top: 0,
          },
          '&:hover': {
               backgroundColor: Colors.primary.lighter,
          },
     }));

export const ProductAddToCart = styled(LoadingButton, { shouldForwardProp: (prop) => prop !== "show" })
     (({ show, theme }: any) => ({
          fontSize: "12px",
          [theme.breakpoints.up("md")]: {
               position: "absolute",
               bottom: "2%",
               width: "150px",
               padding: "10px 5px",
               animation:
                    show &&
                    `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
          },
          // '&:hover': {
          //      backgroundColor: Colors.primary.lighter,
          // },
          // background: Colors.primary.main,
     }));

export const PopularProductAddToCart = styled(LoadingButton)({
     fontSize: "12px",
     // '&:hover': {
     //      backgroundColor: Colors.sec.light,
     // },
     // background: Colors.primary.lighter,
});

export const ProductMetaWrapper = styled(Box)(({ theme }: any) => ({
     padding: 4,
     display: "flex",
     flexDirection: "column",
     alignItems: "center",
     color: Colors.primary.main,
     fontStyle: 'italic',
     textAlign: 'center'
}));

export const ProductActionsWrapper = styled(Box, { shouldForwardProp: (prop) => prop !== 'show' })
     (({ show, theme }: any) => ({
          [theme.breakpoints.up("md")]: {
               display: show ? 'visible' : 'none',
               position: "absolute",
               right: 0,
               top: '20%',
               animation: show && `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
          }
     }));

export const ProductDiscountSticker = styled(Box)(() => ({
     position: 'absolute',
     right: '-20px',
     top: '10px',
     background: Colors.primary.main,
     textAlign: 'center',
     width: '100 %',
     transition: '.5s ease',
     opacity: '0',
     borderRadius: '30px 30px 30px 30px',
     color: 'white',
     padding: '5px 10px',
     fontSize: '20px'
}));


