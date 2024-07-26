import styled from "@emotion/styled";
import { Slide, Box, Typography, IconButton, Table, TableBody, TableHead, TableCell, tableCellClasses, TableRow, Button } from "@mui/material";
import { Colors } from "../theme";


export const WishListWrapper = styled(Box)(({ theme }: any) => ({
     display: "flex",
     padding: theme.spacing(4),
     flexDirection: 'column',
     alignItems: 'center',
     justifyContent: 'space-between',
     gap: '20px'
}));

export const ProductDetailInfoWrapper = styled(Box)(() => ({
     display: "flex",
     flexDirection: "column",
     maxWidth: 500,
     lineHeight: 1.5,
}));


export const WishlistProduct = styled(Box)(({ theme }: any) => ({
     display: "flex",
     justifyContent: "space-around",
     alignItems: "center",
}))

export const WishlistProductImage = styled("img")(({ src, theme }: any) => ({
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

export const WishlistProductName = styled(Typography)(() => ({
     textAlign: 'center',
     width: '100px',
}))

export const WishlistProductActionButton = styled(IconButton)(() => ({
     margin: 4,
}))

export const WishlistTable = styled(Table)(({ theme }: any) => ({
}))

export const WishlistTableBody = styled(TableBody)(({ theme }: any) => ({

}))

export const WishlistRemoveAllButton = styled(Button)(({ theme }: any) => ({
     color: Colors.light_gray,
     maxWidth: '300px'
}))

export const WishlistHeader = styled(TableHead)(({ theme }: any) => ({
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
          backgroundColor: Colors.primary.lighter
     }
}))

export const WishlistHeaderCell = styled(TableCell)(({ theme }: any) => ({
     display: 'flex',
     flexDirection: 'column',
}));

export const WishlistProductCell = styled(TableCell)(({ theme }: any) => ({
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

export const WishlistProductRow = styled(TableRow)(({ theme }: any) => ({
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

