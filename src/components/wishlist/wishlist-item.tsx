import IWishlistItem from '@/interfaces/wishlist/wishlist.interface'
import theme from '@/styles/theme'
import { WishlistProductImage, WishlistProductCell, WishlistProductName, WishlistProductRow, WishListProductDetails } from '@/styles/wishlist'
import Counter from '@/utils/counter'
import Link from 'next/link'
import React from 'react'


const WishlistItem = (props: IWishlistItem) => {

     return (
          <WishlistProductRow key={props._id} theme={theme} >
               <WishlistProductCell component="th" scope="row" theme={theme}>
                    <Link rel='canonical' href={`/proizvod/${props.slug}`}>
                         <WishlistProductImage src={props.imageURL} theme={theme} />
                    </Link>
               </WishlistProductCell>
               <WishlistProductName theme={theme}>
                    {props.name}
               </WishlistProductName>
               <WishListProductDetails theme={theme}>
                    Količina: {props.quantity} {' '} {props.quantityUnit}
               </WishListProductDetails>
               <WishListProductDetails align="left" theme={theme}>
                    Šifra: {props._id.toString().slice(-8).toUpperCase()}
               </WishListProductDetails>
               <WishListProductDetails align="left" theme={theme}>
                    Cena: {parseFloat(props.price.toString()).toFixed(2)} rsd
               </WishListProductDetails>
          </WishlistProductRow >
     )
}

export default WishlistItem