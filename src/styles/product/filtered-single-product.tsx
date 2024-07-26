import styled from "@emotion/styled";
import { Button, IconButton } from "@mui/material";
import { Box } from "@mui/material";
import { slideInBottom, slideInRight } from "../animation";
import { Colors } from "../theme";
import LoadingButton from '@mui/lab/LoadingButton';
import Image from 'mui-image'

export const FilteredProduct = styled(Box, {
     shouldForwardProp: (prop) => prop !== "isVisible"
})(({ isVisible, theme }: any) => ({
     display: 'flex',
     justifyContent: "center",
     alignItems: "center",
     flexDirection: "column",
     [theme.breakpoints.up("md")]: {
          position: "relative",
     },
     opacity: isVisible ? '1' : '0',
     transform: isVisible ? 'translateY(5px)' : 'none',
     visibility: isVisible ? 'visible' : 'hidden',
     transition: 'opacity 400ms ease-out, transform 300ms ease-out, visibility 400ms ease-out',
     willChange: 'opacity, transform, visibility',

}))

export const FilteredProductImageContainer = styled(Box)(({ theme }: any) => ({
     [theme.breakpoints.down("md")]: {
          maxHeight: '120px',
          width: 'auto'
     },
     padding: '10px',
     backgroundColor: Colors.primary.lighter,
     borderRadius: '5px',
     height: '150px',
     widthl: '100px',

}))

export const FilteredProductImage = styled(Image)(({ src, theme }: any) => ({
     src: `${src}`,
     [theme.breakpoints.up("md")]: {
          maxHeight: '150px',
          width: 'auto'
     },
     [theme.breakpoints.down("md")]: {
          maxHeight: '120px',
          width: 'auto'
     },
     cursor: 'pointer',
     webkitTransition: '-webkit-transform 0.4s',
     transition: 'transform 0.4s',
     ':hover': {
          webkitTransform: 'scale(1.2) rotate(0.01deg)',
          transform: 'scale(1.1) rotate(0.01deg)'
     },
}));

export const FilteredProductDropdown = styled(Box, {
     shouldForwardProp: (prop) => prop !== "isVisible"
})(({ isVisible, theme }: any) => ({
     display: 'flex',
     justifyContent: "center",
     alignItems: "center",
     flexDirection: "column",
     [theme.breakpoints.up("md")]: {
          position: "relative",
     },
     // opacity: isVisible ? '1' : '0',
     // transform: isVisible ? 'translateY(50px)' : 'none',
     // visibility: isVisible ? 'visible' : 'hidden',
     // transition: 'opacity 1200ms ease-out, transform 600ms ease-out, visibility 1200ms ease-out',
     // willChange: 'opacity, transform, visibility',

}))

export const FilteredProductImageDropdown = styled(Image)(({ src, theme }: any) => ({
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

export const FilteredProductActionButton = styled(IconButton)(() => ({
     margin: 4,
     '&:hover': {
          backgroundColor: Colors.primary.lighter,
     },
}))

export const FilteredProductFavButton = styled(FilteredProductActionButton, { shouldForwardProp: (prop) => prop !== 'isfav' })
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

export const FilteredProductAddToCart = styled(LoadingButton, { shouldForwardProp: (prop) => prop !== "show" })
     (({ show, theme }: any) => ({
          fontSize: "12px",
          width: "140px",
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

export const FilteredProductMetaWrapper = styled(Box)(({ theme }: any) => ({
     padding: 4,
     display: "flex",
     flexDirection: "column",
     alignItems: "center",
     color: Colors.primary.main,
     fontStyle: 'italic',
     textAlign: 'center'
}));

export const FilteredProductActionsWrapper = styled(Box, { shouldForwardProp: (prop) => prop !== 'show' })
     (({ show, theme }: any) => ({
          [theme.breakpoints.up("md")]: {
               display: show ? 'visible' : 'none',
               position: "absolute",
               right: 0,
               top: '20%',
               animation: show && `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
          }
     }));

export const FilteredProductDiscountSticker = styled(Box)(() => ({
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


