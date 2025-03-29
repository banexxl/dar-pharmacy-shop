import { Box, Button, IconButton, Table, TableBody, TableCell, tableCellClasses, TableHead, TableRow, Theme, Typography } from "@mui/material";
import { Colors } from "../theme";
import styled from "@emotion/styled";

type CartProps = {
     theme: Theme;
}

export const CartWrapper = styled(Box)<CartProps>(({ theme }) => ({
     display: "flex",
     padding: theme.spacing(1),
     flexDirection: 'column',
     alignItems: 'center',
     justifyContent: 'space-between',
     gap: '20px'
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

type ProductNameProps = {
     theme: Theme;
}

export const StyledProductName = styled(Typography)<ProductNameProps>((theme) => ({
     display: 'flex',
     justifyContent: 'center',
     textAlign: 'center',
     width: '200px',
}))

export const CartProductActionButton = styled(IconButton)(() => ({
     background: Colors.white,
     margin: 4,
}))

export const StyledTable = styled(Table)(({ theme }: any) => ({

}))

type StyledTableBodyProps = {
     theme: Theme;
}

export const StyledTableBody = styled(TableBody)<StyledTableBodyProps>(({ theme }) => ({
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'space-evenly',
     gap: '20px',
}))

export const StyledHeader = styled(TableHead)(({ theme }: any) => ({
     borderRadius: '20px',
     marginBottom: '10px',
     [theme.breakpoints.up("xs")]: {
          display: 'none',
          color: 'white'
     },
     [theme.breakpoints.up("sm")]: {
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: Colors.primary.lighter
     }
}))

type StyledHeaderCellProps = {
     theme: Theme;
}

export const StyledHeaderCell = styled(TableCell)<StyledHeaderCellProps>(({ theme, sx }) => ({
     maxWidth: '100px',
     justifyContent: 'center',
     alignItems: 'right',
     color: theme.palette.primary.main,
}));

type StyledProductCellProps = {
     theme: Theme;
}

export const StyledProductCell = styled(TableCell)<StyledProductCellProps>(({ theme }) => ({
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'start',
     maxWidth: '150px',
     [`&.${tableCellClasses.head}`]: {
          backgroundColor: Colors.primary.lighter,
          color: Colors.white,
     },
     [`&.${tableCellClasses.body}`]: {
          fontSize: 12,
     },
     [theme.breakpoints.down("sm")]: {
          flexDirection: "column",
          alignItems: "center",
          padding: '6px'
     }
}));

type StyledProductRowProps = {
     theme: Theme;
}

export const StyledProductRow = styled(TableRow)<StyledProductRowProps>(({ theme }) => ({
     display: 'flex',
     justifyContent: 'space-around',
     alignItems: 'center',
     '&:nth-of-type(odd)': {
          backgroundColor: Colors.secondary.lighter,
          borderRadius: '20px'
     },
     '&:nth-of-type(even)': {
          backgroundColor: Colors.secondary.custom,
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

type StyledTotalsBoxProps = {
     theme: Theme;
}

export const StyledTotalsBox = styled(Box)<StyledTotalsBoxProps>(({ theme }) => ({
     display: 'flex',
     flexDirection: 'column',
     gap: '10px',
     alignItems: 'center',
     [theme.breakpoints.down("md")]: {
          margin: '30px',
     },
     [theme.breakpoints.up("md")]: {
          marginRight: 'auto',
          marginLeft: 'auto',
          marginTop: '100px'
     }
}))

type StyledTotalsTitleProps = {
     theme: Theme;
}

export const StyledTotalsTitle = styled(Typography)<StyledTotalsTitleProps>(({ theme }) => ({
     fontFamily: 'sans-serif',
     fontSize: '1.5rem',
     color: Colors.primary.lighter,
     fontWeight: 'bold',
     textAlign: 'center'
}))

export const StyledTotalsPrice = styled(Typography)(({ theme }: any) => ({
     fontFamily: 'sans-serif',
     color: Colors.primary.main,
     fontWeight: 'bold'
}))



