import IWishlistItem from '@/interfaces/wishlist/wishlist.interface'
import theme from '@/styles/theme'
import { TableRow, TableCell, Box } from '@mui/material'
import Counter from '@/utils/counter'
import Link from 'next/link'
import React from 'react'


const WishlistItem = (props: IWishlistItem) => {

     return (
          <TableRow key={props._id} className="WishlistProductRow">
               <TableCell component="th" scope="row" className="WishlistProductCell">
                    <Link rel='canonical' href={`/proizvod/${props.slug}`}>
                         <Box component="img" src={props.imageURL} className="WishlistProductImage" />
                    </Link>
               </TableCell>
               <TableCell className="WishlistProductName">
                    {props.name}
               </TableCell>
               <TableCell className="WishListProductDetails">
                    Količina: {props.quantity} {' '} {props.quantityUnit}
               </TableCell>
               <TableCell align="left" className="WishListProductDetails">
                    Šifra: {props._id.toString().slice(-8).toUpperCase()}
               </TableCell>
               <TableCell align="left" className="WishListProductDetails">
                    Cena: {parseFloat(props.price.toString()).toFixed(2)} rsd
               </TableCell>
          </TableRow>
     )
}

export default WishlistItem