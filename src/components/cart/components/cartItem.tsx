import ICartItem from '@/interfaces/cart/cart.interface'
import { CartProductImage, StyledProductCell, StyledProductName, StyledProductRow } from '@/styles/cart'
import Counter from '@/utils/counter'
import React from 'react'


const CartItem = (props: ICartItem) => {

          return (
                    <StyledProductRow key={props._id}>
                              <StyledProductCell component="th" scope="row">
                                        <CartProductImage src={props.imageURL} />
                              </StyledProductCell>
                              <StyledProductName>
                                        {props.name}
                              </StyledProductName>
                              <StyledProductCell>
                                        {props.quantity}
                              </StyledProductCell>
                              <StyledProductCell align="left">
                                        {props._id.toString().slice(-8).toUpperCase()}
                              </StyledProductCell>
                              <StyledProductCell>
                                        <Counter _id={props._id} count={props.count}>
                                                  {props.count}
                                        </Counter>
                              </StyledProductCell>
                              <StyledProductCell align="left">
                                        {props.price} rsd
                              </StyledProductCell>
                              <StyledProductCell align="left">
                                        {props.count * props.price} rsd
                              </StyledProductCell>
                    </StyledProductRow >
          )
}

export default CartItem