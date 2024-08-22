import ICartItem from '@/interfaces/cart/cart.interface'
import { CartProductImage, StyledHeaderCell, StyledProductCell, StyledProductName, StyledProductRow } from '@/styles/cart'
import theme, { Colors } from '@/styles/theme'
import Counter from '@/utils/counter'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, useMediaQuery } from '@mui/material'
import { useDispatch } from 'react-redux'
import { removeAllSingleItems } from '@/store/cart/cart.slice'


const CartItem = (props: ICartItem) => {

     const dispatch = useDispatch()
     const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"))

     return (
          <StyledProductRow key={props._id} theme={theme} >
               <StyledProductCell component="th" scope="row" theme={theme}>
                    <CartProductImage src={props.imageURL} />
               </StyledProductCell>
               <StyledProductCell theme={theme}>
                    <StyledProductName theme={theme} >
                         {props.name}
                    </StyledProductName>
               </StyledProductCell>
               <StyledProductCell theme={theme} >
                    <StyledProductName theme={theme} >
                         {props.quantity} {' '} {props.quantityUnit}
                    </StyledProductName>
               </StyledProductCell>
               <StyledProductCell theme={theme} >
                    <StyledProductName theme={theme} >
                         {props._id.toString().slice(-8).toUpperCase()}
                    </StyledProductName>
               </StyledProductCell>
               <StyledProductCell theme={theme} >
                    <StyledProductName theme={theme} >
                         <Counter _id={props._id} count={props.count}>
                              {props.count}
                         </Counter>
                    </StyledProductName>
               </StyledProductCell>
               <StyledProductCell theme={theme} >
                    <StyledProductName theme={theme} >
                         {props.price} rsd
                    </StyledProductName>
               </StyledProductCell>
               <StyledProductCell theme={theme} >
                    <StyledProductName theme={theme} >
                         {props.count * props.price} rsd
                    </StyledProductName>
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