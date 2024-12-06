import styled from "@emotion/styled";
import { Slide, Box, Typography, IconButton, Table, TableBody, TableHead, TableCell, tableCellClasses, TableRow, Button, Theme } from "@mui/material";
import { Colors } from "../theme";
import { type } from "os";

type WishlistProps = {
     theme: Theme
}

export const WishListWrapper = styled(Box)<WishlistProps>(({ theme }) => ({
     display: "flex",
     padding: theme.spacing(4),
     flexDirection: 'column',
     alignItems: 'center',
     justifyContent: 'space-between',
     gap: '20px'
}));

type ProductDetailProps = {
     theme: Theme
}

export const ProductDetailInfoWrapper = styled(Box)(({ theme }) => ({
     display: "flex",
     flexDirection: "column",
     maxWidth: 500,
     lineHeight: 1.5,
}));


export const WishlistProduct = styled(Box)(({ theme }) => ({
     display: "flex",
     justifyContent: "space-around",
     alignItems: "center",
}))

type WishlistProductImageProps = {
     src: string,
     theme: Theme
}

export const WishlistProductImage = styled("img")<WishlistProductImageProps>(({ src, theme }) => ({
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

type WishlistProductInfoProps = {
     theme: Theme
}

export const WishlistProductName = styled(Typography)<WishlistProductInfoProps>(({ theme }) => ({
     textAlign: 'center',
     width: '100px',
}))

type WishlistProductDetailsProps = {
     theme: Theme
}

export const WishListProductDetails = styled(Typography)<WishlistProductDetailsProps>(({ theme }) => ({
     wordWrap: 'break-word',
     fontSize: 14,
     [theme.breakpoints.up("xs")]: {
          padding: '2px'
     },
     [theme.breakpoints.down("sm")]: {
          flexDirection: "column",
          alignItems: "center",
     }
}))

export const WishlistProductActionButton = styled(IconButton)(() => ({
     margin: 4,
}))

export const WishlistTable = styled(Table)(({ theme }) => ({
}))

export const WishlistTableBody = styled(TableBody)(({ theme }) => ({

}))

export const WishlistRemoveAllButton = styled(Button)(({ theme }) => ({
     maxWidth: '300px'
}))

type WishlistHeaderProps = {
     theme: Theme
}

export const WishlistHeader = styled(TableHead)<WishlistHeaderProps>(({ theme }) => ({
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

export const WishlistHeaderCell = styled(TableCell)(({ theme }) => ({
     display: 'flex',
     flexDirection: 'column',
}));

type WishlistProductCellProps = {
     theme: Theme
}

export const WishlistProductCell = styled(TableCell)<WishlistProductCellProps>(({ theme }) => ({
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

type WishlistProductRowProps = {
     theme: Theme
}

export const WishlistProductRow = styled(TableRow)<WishlistProductRowProps>(({ theme }) => ({
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

