import ICartItem from '@/interfaces/cart/cart.interface';
import { CartProductImage, StyledProductCell, StyledProductName, StyledProductRow } from '@/styles/cart';
import theme, { Colors } from '@/styles/theme';
import Counter from '@/utils/counter';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, useMediaQuery } from '@mui/material';
import { useDispatch } from 'react-redux';
import { removeAllSingleItems } from '@/store/cart/cart.slice';
import Link from 'next/link';
import toast from 'react-hot-toast';

const CartItem = (props: ICartItem) => {

     const dispatch = useDispatch();

     return (
          <>
               <StyledProductRow key={props._id} theme={theme}>
                    {/* Product Image */}
                    <StyledProductCell component="th" scope="row" theme={theme}>
                         <Link rel='canonical' href={`/proizvod/${props._id}`}>
                              <CartProductImage src={props.imageURL} />
                         </Link>
                    </StyledProductCell>

                    {/* Product Name */}
                    <StyledProductCell theme={theme}>
                         <StyledProductName theme={theme}>
                              {props.name}
                         </StyledProductName>
                    </StyledProductCell>

                    {/* Quantity and Unit */}
                    <StyledProductCell theme={theme}>
                         <StyledProductName theme={theme}>
                              {props.quantity} {props.quantityUnit}
                         </StyledProductName>
                    </StyledProductCell>

                    {/* Product ID (last 8 characters) */}
                    <StyledProductCell theme={theme}>
                         <StyledProductName theme={theme}>
                              {props._id.toString().slice(-8).toUpperCase()}
                         </StyledProductName>
                    </StyledProductCell>

                    {/* Product Counter */}
                    <StyledProductCell theme={theme}>
                         {/* <StyledProductName theme={theme}> */}
                         <Counter _id={props._id} count={props.count}>
                              {props.count}
                         </Counter>
                         {/* </StyledProductName> */}
                    </StyledProductCell>

                    {/* Original Total Price (without discount) */}
                    <StyledProductCell theme={theme}>
                         <StyledProductName theme={theme}>
                              {props.count * props.price} RSD
                         </StyledProductName>
                    </StyledProductCell>

                    {/* Discount Percentage and Discounted Price */}
                    {props.discount && props.discountAmount! > 0 ? (
                         <StyledProductCell theme={theme}>
                              <StyledProductName theme={theme} sx={{ color: Colors.primary.main, fontWeight: 'bold' }}>
                                   (-{props.discountAmount}%) {((props.price - (props.price * (props.discountAmount! / 100))) * props.count).toFixed(2)} RSD
                              </StyledProductName>
                         </StyledProductCell>
                    ) : (
                         // Empty cell to maintain layout alignment with the header
                         <StyledProductCell theme={theme}>
                              <StyledProductName theme={theme}>
                                   {props.count * props.price} RSD
                              </StyledProductName>
                         </StyledProductCell>
                    )}

                    {/* Remove Item Button */}
                    <StyledProductCell theme={theme}>
                         <Button
                              sx={{ backgroundColor: 'transparent' }}
                              onClick={() => {
                                   toast.success("Proizvod je uklonjen iz korpe", { position: "top-center", duration: 1500 })
                                   dispatch(removeAllSingleItems(props._id))
                              }}
                         >
                              <DeleteIcon />
                         </Button>
                    </StyledProductCell>
               </StyledProductRow>
          </>
     );
};

export default CartItem;
