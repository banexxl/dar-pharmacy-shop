import styled from "@emotion/styled";
import { Button, IconButton, Theme } from "@mui/material";
import { Box } from "@mui/material";
import { slideInBottom, slideInRight } from "../animation";
import { Colors } from "../theme";
import LoadingButton from '@mui/lab/LoadingButton';
import Image from 'mui-image'

type ProductProps = {
     isVisible: boolean;
     theme: any;
}

export const Product = styled(Box, {
     shouldForwardProp: (prop) => prop !== "isVisible"
})<ProductProps>(({ isVisible, theme }) => ({
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

type ProductDropdownButtonProps = {
     isVisible: boolean;
     theme: any;
}

export const ProductDropdown = styled(Box, {
     shouldForwardProp: (prop) => prop !== "isVisible"
})<ProductDropdownButtonProps>(({ isVisible, theme }) => ({
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

export const ProductActionButton = styled(IconButton)(({ show, sx }: any) => ({

     margin: 4,
     '&:hover': {
          backgroundColor: Colors.primary.lighter,
     },
}))

export const ProductFavButton = styled(Button, { shouldForwardProp: (prop) => prop !== 'isfav' })
     (({ isfav, theme }: any) => ({
          color: isfav ? Colors.primary.main : Colors.primary.light,
          borderRadius: '100%',
          backgroundColor: 'transparent',
     }));

type ProductAddToCartProps = {
     show: boolean;
     theme: any;
}

export const ProductAddToCart = styled(LoadingButton, { shouldForwardProp: (prop) => prop !== "show" })
     <ProductAddToCartProps>(({ show, theme }) => ({
          fontSize: "12px",
          [theme.breakpoints.up("md")]: {
               position: "absolute",
               bottom: "2%",
               width: "150px",
               padding: "10px 5px",
               ...(show && {
                    animation: `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
               })
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

type ProductMetaProps = {
     theme: Theme;
}

export const ProductMetaWrapper = styled(Box)<ProductMetaProps>(({ theme }) => ({
     padding: 4,
     display: "flex",
     flexDirection: "column",
     alignItems: "center",
     color: Colors.primary.main,
     fontStyle: 'italic',
     textAlign: 'center'
}));

type ProductActionsWrapperProps = {
     show: boolean;
     theme: Theme;
}

export const ProductActionsWrapper = styled(Box, { shouldForwardProp: (prop) => prop !== 'show' })
     <ProductActionsWrapperProps>(({ show, theme }) => ({
          [theme.breakpoints.up("md")]: {
               display: show ? 'flex' : 'none',
               position: "absolute",
               right: 0,
               top: '10%',
               ...(show && {
                    animation: `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
               }),
               flexDirection: 'column',
               justifyContent: 'space-around',
          },
     }));

type ProductDiscountStickerProps = {
     theme: Theme;
}

export const ProductDiscountSticker = styled(Box)((theme) => ({
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


