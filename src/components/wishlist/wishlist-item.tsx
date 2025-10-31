import IWishlistItem from '@/interfaces/wishlist/wishlist.interface'
import { TableRow, TableCell, Box, Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/store/cart/cart.slice'
import { removeFromWishList } from '@/store/wishlist/wishlist.slice'
import toast from 'react-hot-toast'
import Link from 'next/link'
import React from 'react'


const WishlistItem = (props: IWishlistItem & { onClose?: () => void }) => {
     const dispatch = useDispatch();
     const handleAddToCart = () => {
          toast.success("Proizvod je dodat u korpu", { position: "top-center", duration: 1500 });
          dispatch(addToCart(props));
     };
     const handleRemove = () => {
          toast.success("Proizvod je uklonjen iz omiljenih proizvoda", { position: "top-center", duration: 1500 });
          dispatch(removeFromWishList(props));
     };

     return (
          <TableRow key={props._id} className="WishlistProductRow" sx={{ '& td': { py: { xs: 0.5, md: 1.5 }, px: { xs: 1, md: 2 } } }}>
               <TableCell component="th" scope="row" className="WishlistProductCell" sx={{ width: { xs: 72, md: 88 } }}>
                    <Link rel='canonical' href={`/proizvod/${props.slug}`} onClick={props.onClose}>
                         <Box component="img" src={props.imageURL} className="WishlistProductImage" sx={{ width: { xs: 56, md: 72 }, height: { xs: 56, md: 72 }, objectFit: 'contain', display: 'block' }} />
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
               <TableCell align="center" className="WishListProductDetails">
                    <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                         <Button size="small" variant="contained" color="primary" onClick={handleAddToCart} disabled={props.availableStock <= 0}>
                              Dodaj u korpu
                         </Button>
                         <Button size="small" variant="outlined" color="primary" onClick={handleRemove}>
                              Obriši
                         </Button>
                    </Box>
               </TableCell>
          </TableRow>
     )
}

export default WishlistItem
