import ICartItem from '@/interfaces/cart/cart.interface'
import { CartProductImage, StyledProductCell, StyledProductName, StyledProductRow } from '@/styles/cart'
import theme from '@/styles/theme'
import Counter from '@/utils/counter'
import React from 'react'


const CartItem = (props: ICartItem) => {

     return (
          <StyledProductRow key={props._id} theme={theme}>
               <StyledProductCell component="th" scope="row" theme={theme}>
                    <CartProductImage src={props.imageURL} />
               </StyledProductCell>
               <StyledProductName theme={theme}>
                    {props.name}
               </StyledProductName>
               <StyledProductCell theme={theme}>
                    {props.quantity}
               </StyledProductCell>
               <StyledProductCell align="left" theme={theme}>
                    {props._id.toString().slice(-8).toUpperCase()}
               </StyledProductCell>
               <StyledProductCell theme={theme}>
                    <Counter _id={props._id} count={props.count}>
                         {props.count}
                    </Counter>
               </StyledProductCell>
               <StyledProductCell align="left" theme={theme}>
                    {props.price} rsd
               </StyledProductCell>
               <StyledProductCell align="left" theme={theme}>
                    {props.count * props.price} rsd
               </StyledProductCell>

          </StyledProductRow >
     )
}

export default CartItem