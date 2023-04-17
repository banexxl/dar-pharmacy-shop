import styled from "@mui/styled-engine";
import { Box, IconButton, TableCell, tableCellClasses, TableHead, TableRow, Typography } from "@mui/material";
import { Colors } from "../theme";

export const CartWrapper = styled(Box)(({ theme }: any) => ({
          gap: '20px',
          display: "flex",
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: theme.spacing(4),
}));

export const CartProductDetailInfoWrapper = styled(Box)(() => ({
          display: "flex",
          alignItems: 'center',
          width: '1000px'
}));

export const CartProduct = styled(Box)(({ theme }: any) => ({
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
}))

export const CartProductImage = styled("img")(({ src, theme }: any) => ({
          src: `url(${src})`,
          [theme.breakpoints.up("xl")]: {
                    width: '100px',
                    height: '100px',
          },
          [theme.breakpoints.up("lg")]: {
                    width: '100px',
                    height: '100px',
          },
          [theme.breakpoints.up("sm")]: {
                    width: '100px',
                    height: '100px',
          },
          [theme.breakpoints.up("xs")]: {
                    width: '100px',
                    height: '100px',
          },

}));

export const CartProductActionButton = styled(IconButton)(() => ({
          background: Colors.white,
          margin: 4,
}))

export const StyledHeaderCell = styled(TableCell)(({ theme }: any) => ({
          display: 'flex',
          flexDirection: 'column'
}));

export const StyledHeader = styled(TableHead)(({ theme }: any) => ({
          [theme.breakpoints.up("xs")]: {
                    display: 'none',
                    color: 'white'
          },
          [theme.breakpoints.up("sm")]: {
                    display: 'flex',
                    alignItems: "center",
                    backgroundColor: Colors.secondary
          }
}))

export const StyledHeaderRow = styled(TableRow)(({ theme }: any) => ({
          [theme.breakpoints.up("xs")]: {
                    display: 'none',
                    color: 'white'
          },
          [theme.breakpoints.up("sm")]: {
                    display: 'flex',
                    alignItems: "center",
                    backgroundColor: Colors.secondary
          }
}))

export const StyledProductCell = styled(TableCell)(({ theme }: any) => ({
          [`&.${tableCellClasses.head}`]: {
                    backgroundColor: Colors.secondary,
                    color: Colors.white,
          },
          [`&.${tableCellClasses.body}`]: {
                    fontSize: 14,
          },
          [theme.breakpoints.up("xs")]: {
                    padding: '2px'
          },
          [theme.breakpoints.down("sm")]: {
                    flexDirection: "column",
                    alignItems: "center",
          }
}));

export const StyledProductRow = styled(TableRow)(({ theme }: any) => ({
          '&:nth-of-type(odd)': {
                    backgroundColor: Colors.dove_gray,
          },
          // hide last border
          '&:last-child td, &:last-child th': {
                    border: 0,
          },
          [theme.breakpoints.up("xs")]: {
                    display: 'flex',
          },
          [theme.breakpoints.down("sm")]: {
                    flexDirection: "column",
                    alignItems: "center",
          }
}))