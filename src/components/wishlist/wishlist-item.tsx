import IWishlistItem from '@/interfaces/wishlist/wishlist.interface'
import theme from '@/styles/theme'
import { WishlistProductImage, WishlistProductCell, WishlistProductName, WishlistProductRow } from '@/styles/wishlist'
import Counter from '@/utils/counter'
import Link from 'next/link'
import React from 'react'


const WishlistItem = (props: IWishlistItem) => {

     return (
          <WishlistProductRow key={props._id} theme={theme} >
               <WishlistProductCell component="th" scope="row" theme={theme}>
                    <Link rel='canonical' href={`/proizvod/${props._id}`}>
                         <WishlistProductImage src={props.imageURL} theme={theme} />
                    </Link>
               </WishlistProductCell>
               <WishlistProductName theme={theme}>
                    {props.name}
               </WishlistProductName>
               <WishlistProductCell theme={theme}>
                    {props.quantity} {' '} {props.quantityUnit}
               </WishlistProductCell>
               <WishlistProductCell align="left" theme={theme}>
                    {props._id.toString().slice(-8).toUpperCase()}
               </WishlistProductCell>
               <WishlistProductCell align="left" theme={theme}>
                    {props.price} rsd
               </WishlistProductCell>
          </WishlistProductRow >
     )
}

export default WishlistItem