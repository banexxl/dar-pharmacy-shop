import ICartItem from '@/interfaces/cart'
import { CartProductImage, StyledTableCell, StyledTableRow } from '@/styles/cart'
import Counter from '@/utils/counter'
import React from 'react'


const CartItem = (props: ICartItem) => {

          return (
                    <StyledTableRow key={props._id}>
                              <StyledTableCell component="th" scope="row">
                                        <CartProductImage src={props.imageURL} />
                              </StyledTableCell>
                              <StyledTableCell align="left">{props.name}</StyledTableCell>
                              <StyledTableCell>
                                        {props.quantity}
                              </StyledTableCell>
                              <StyledTableCell align="left">{props._id.toString().slice(-8).toUpperCase()}</StyledTableCell>
                              <StyledTableCell>
                                        <Counter _id={props._id} count={props.count}>
                                                  {props.count}
                                        </Counter>
                              </StyledTableCell>
                              <StyledTableCell align="left">{props.price} rsd</StyledTableCell>
                              <StyledTableCell align="left">{props.count * props.price} rsd</StyledTableCell>
                    </StyledTableRow >
          )
}

export default CartItem