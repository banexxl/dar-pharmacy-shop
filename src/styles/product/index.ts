import styled from "@emotion/styled";
import { Button, IconButton } from "@mui/material";
import { Box } from "@mui/material";
import { slideInBottom, slideInRight } from "../animation";
import { Colors } from "../theme";

export const Product = styled(Box)(({ theme }: any) => ({
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          [theme.breakpoints.up("md")]: {
                    position: "relative",
          },

}))

export const ProductImage = styled("img")(({ src, theme }: any) => ({
          src: `url(${src})`,
          width: "100%",
          background: Colors.light_gray,
          padding: '10px',
          [theme.breakpoints.up("md")]: {
                    width: "80%",
          },
}));

export const ProductActionButton = styled(IconButton)(() => ({
          background: Colors.white,
          margin: 4,
          '&:hover': {
                    backgroundColor: Colors.secondary,
          },
}))

export const ProductFavButton = styled(ProductActionButton)(({ isfav, theme }: any) => ({
          color: isfav ? Colors.primary : Colors.light,
          [theme.breakpoints.up("md")]: {
                    position: "absolute",
                    right: 0,
                    top: 0,
          },
          '&:hover': {
                    backgroundColor: Colors.secondary,
          },
}));

export const ProductAddToCart = styled(Button, { shouldForwardProp: (prop) => prop !== "show", })
          (({ show, theme }: any) => ({
                    width: "120px",
                    fontSize: "12px",
                    [theme.breakpoints.up("md")]: {
                              position: "absolute",
                              bottom: "2%",
                              width: "300px",
                              padding: "10px 5px",
                              animation:
                                        show &&
                                        `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
                    },
                    '&:hover': {
                              backgroundColor: Colors.secondary,
                    },
                    background: Colors.primary,
                    opacity: 0.9,
          }));

export const ProductMetaWrapper = styled(Box)(({ theme }) => ({
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: Colors.primary,
          fontStyle: 'italic'
}));

export const ProductActionsWrapper = styled(Box)(({ show, theme }: any) => ({
          [theme.breakpoints.up("md")]: {
                    display: show ? 'visible' : 'none',
                    position: "absolute",
                    right: 0,
                    top: '20%',
                    animation: show && `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
          }
}));

