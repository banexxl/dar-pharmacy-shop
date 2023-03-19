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
          [theme.breakpoints.down("sm")]: {
                    width: '100px',
                    height: '100px',
          },
          [theme.breakpoints.down("xs")]: {
                    width: '50px',
                    height: '50px',
          },

}));

export const CartProductActionButton = styled(IconButton)(() => ({
          background: Colors.white,
          margin: 4,
}))

export const StyledTableCell = styled(TableCell)(({ theme }: any) => ({
          [`&.${tableCellClasses.head}`]: {
                    backgroundColor: Colors.secondary,
                    color: Colors.white,
          },
          [`&.${tableCellClasses.body}`]: {
                    fontSize: 14,
          },
}));

export const StyledTableRow = styled(TableRow)(({ theme }: any) => ({
          '&:nth-of-type(odd)': {
                    backgroundColor: Colors.dove_gray,
          },
          // hide last border
          '&:last-child td, &:last-child th': {
                    border: 0,
          },
}))

export const StyledTableHead = styled(TableHead)(({ theme }: any) => ({
          [theme.breakpoints.down("xs")]: {
                    display: 'none',
                    backgroundColor: Colors.primary
          },
          [theme.breakpoints.down("sm")]: {
                    flexDirection: "column",
                    alignItems: "center",
          }
}))