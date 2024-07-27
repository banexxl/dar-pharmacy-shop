import { Box, Button, IconButton, Table, TableBody, TableCell, tableCellClasses, TableHead, TableRow, Theme, Typography } from "@mui/material";
import { Colors } from "../theme";
import styled from "@emotion/styled";

type CartProps = {
     theme: Theme;
}

export const CartWrapper = styled(Box)<CartProps>(({ theme }) => ({
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

type ProductNameProps = {
     theme: Theme;
}

export const StyledProductName = styled(Typography)<ProductNameProps>((theme) => ({
     textAlign: 'left',
     fontSize: '1rem',
     width: '90px',
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
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: Colors.primary.lighter
     }
}))

type StyledHeaderCellProps = {
     theme: Theme;
}

export const StyledHeaderCell = styled(TableCell)<StyledHeaderCellProps>(({ theme }) => ({
     width: '70px',
     display: 'flex',
     flexDirection: 'column',
}));

type StyledProductCellProps = {
     theme: Theme;
}

export const StyledProductCell = styled(TableCell)<StyledProductCellProps>(({ theme }) => ({
     wordWrap: 'break-word',
     [`&.${tableCellClasses.head}`]: {
          backgroundColor: Colors.primary.lighter,
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

type StyledProductRowProps = {
     theme: Theme;
}

export const StyledProductRow = styled(TableRow)<StyledProductRowProps>(({ theme }) => ({
     display: 'flex',
     justifyContent: 'space-between',
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



