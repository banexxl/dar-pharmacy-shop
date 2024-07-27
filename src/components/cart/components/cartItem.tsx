import ICartItem from '@/interfaces/cart/cart.interface'
import { CartProductImage, StyledProductCell, StyledProductName, StyledProductRow } from '@/styles/cart'
import theme, { Colors } from '@/styles/theme'
import Counter from '@/utils/counter'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { removeAllSingleItems } from '@/store/cart/cart.slice'


const CartItem = (props: ICartItem) => {

     const dispatch = useDispatch()

     return (
          <StyledProductRow key={props._id} theme={theme}>
               <StyledProductCell component="th" scope="row" theme={theme}>
                    <CartProductImage src={props.imageURL} />
               </StyledProductCell>
               <StyledProductName theme={theme} sx={{ transform: 'translateX(-20%)' }}>
                    {props.name}
               </StyledProductName>
               <StyledProductCell align="left" theme={theme} sx={{ transform: 'translateX(-90%)' }}>
                    {props.quantity}
               </StyledProductCell>
               <StyledProductCell align="left" theme={theme} sx={{ transform: 'translateX(-70%)' }}>
                    {props._id.toString().slice(-8).toUpperCase()}
               </StyledProductCell>
               <StyledProductCell theme={theme} sx={{ transform: 'translateX(-70%)' }}>
                    <Counter _id={props._id} count={props.count}>
                         {props.count}
                    </Counter>
               </StyledProductCell>
               <StyledProductCell align="left" theme={theme} sx={{ transform: 'translateX(-70%)' }}>
                    {props.price} rsd
               </StyledProductCell>
               <StyledProductCell align="left" theme={theme} sx={{ transform: 'translateX(-70%)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    {props.count * props.price} rsd
                    <Button
                         sx={{ backgroundColor: 'transparent' }}
                         onClick={() => dispatch(removeAllSingleItems(props._id))}
                    >
                         <DeleteIcon />
                    </Button>
               </StyledProductCell>
          </StyledProductRow >
     )
}

export default CartItem