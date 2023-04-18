import styled from "@mui/styled-engine";
import { Box, Button, IconButton, Table, TableBody, TableCell, tableCellClasses, TableHead, TableRow, Typography } from "@mui/material";
import { Colors } from "../theme";

export const CartWrapper = styled(Box)(({ theme }: any) => ({
          gap: '20px',
          display: "flex",
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: theme.spacing(4),
          width: '70%'
}));

export const CartProduct = styled(Box)(({ theme }: any) => ({
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
}))

export const CartProductImage = styled("img")(({ src, theme }: any) => ({
          src: `url(${src})`,
          borderRadius: '20px',
          [theme.breakpoints.up("xl")]: {
                    width: '100px',
                    height: '100px',
          },
          [theme.breakpoints.up("lg")]: {
                    width: '200px',
                    height: '200px',
          },
          [theme.breakpoints.up("sm")]: {
                    width: '100px',
                    height: '100px',
          },
          [theme.breakpoints.up("xs")]: {
                    width: '80px',
                    height: '80px',
          },

}));

export const StyledProductName = styled(Typography)(() => ({
          textAlign: 'center',
          width: '100px',
}))

export const CartProductActionButton = styled(IconButton)(() => ({
          background: Colors.white,
          margin: 4,
}))

export const StyledTable = styled(Table)(({ theme }: any) => ({

}))

export const StyledTableBody = styled(TableBody)(({ theme }: any) => ({

}))

export const StyledHeader = styled(TableHead)(({ theme }: any) => ({
          borderRadius: '20px',
          marginBottom: '20px',
          [theme.breakpoints.up("xs")]: {
                    display: 'none',
                    color: 'white'
          },
          [theme.breakpoints.up("sm")]: {
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-around',
                    backgroundColor: Colors.secondary
          }
}))

export const StyledHeaderCell = styled(TableCell)(({ theme }: any) => ({
          display: 'flex',
          flexDirection: 'column',
}));

export const StyledProductCell = styled(TableCell)(({ theme }: any) => ({
          wordWrap: 'break-word',
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
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          '&:nth-of-type(odd)': {
                    backgroundColor: Colors.dove_gray,
                    borderRadius: '20px'
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

export const StyledTotalsBox = styled(Box)(({ theme }: any) => ({
          display: 'flex',
          flexDirection: 'column',
          mt: '30px',
          gap: '10px',
          alignItems: 'center',
          ml: '50px'
}))

export const StyledTotalsTitle = styled(Typography)(({ theme }: any) => ({
          fontFamily: 'sans-serif',
          fontSize: '1.5rem',
          color: Colors.secondary,
          fontWeight: 'bold'
}))

export const StyledTotalsPrice = styled(Typography)(({ theme }: any) => ({
          fontFamily: 'sans-serif',
          color: Colors.primary,
          fontWeight: 'bold'
}))

export const StyledTotalsToShopButton = styled(Button)(({ theme }: any) => ({
          color: Colors.light_gray,
}))

export const StyledTotalsToPaymentButton = styled(Button)(({ theme }: any) => ({
          color: Colors.light_gray,
}))


