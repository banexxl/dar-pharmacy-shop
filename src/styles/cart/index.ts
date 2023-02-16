import styled from "@emotion/styled";
import { Box, IconButton, TableCell, tableCellClasses, TableRow } from "@mui/material";
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
          width: '100px',
          height: '100px',
          background: Colors.light_gray,
}));

export const CartProductActionButton = styled(IconButton)(() => ({
          background: Colors.white,
          margin: 4,
}))

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
          [`&.${tableCellClasses.head}`]: {
                    backgroundColor: Colors.primary,
                    color: Colors.secondary,
          },
          [`&.${tableCellClasses.body}`]: {
                    fontSize: 14,
          },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
          '&:nth-of-type(odd)': {
                    backgroundColor: Colors.primary,
          },
          // hide last border
          '&:last-child td, &:last-child th': {
                    border: 0,
          },
}));