import IWishlistItem from '@/interfaces/wishlist/wishlist.interface'
import { WishlistProductImage, WishlistProductCell, WishlistProductName, WishlistProductRow } from '@/styles/wishlist'
import Counter from '@/utils/counter'
import React from 'react'


const WishlistItem = (props: IWishlistItem) => {

          return (
                    <WishlistProductRow key={props._id}>
                              <WishlistProductCell component="th" scope="row">
                                        <WishlistProductImage src={props.imageURL} />
                              </WishlistProductCell>
                              <WishlistProductName>
                                        {props.name}
                              </WishlistProductName>
                              <WishlistProductCell>
                                        {props.quantity}
                              </WishlistProductCell>
                              <WishlistProductCell align="left">
                                        {props._id.toString().slice(-8).toUpperCase()}
                              </WishlistProductCell>
                              <WishlistProductCell align="left">
                                        {props.price} rsd
                              </WishlistProductCell>
                    </WishlistProductRow >
          )
}

export default WishlistItem