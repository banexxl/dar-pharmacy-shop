import ICartItem from '@/interfaces/cart/cart.interface';
import { TableRow, TableCell, Box, IconButton, Button, Typography } from '@mui/material';
import { Colors } from '@/styles/theme';
import Counter from '@/utils/counter';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { removeAllSingleItems } from '@/store/cart/cart.slice';
import Link from 'next/link';
import toast from 'react-hot-toast';

const CartItem = (props: ICartItem & { onClose?: () => void }) => {

     const dispatch = useDispatch();

     return (
          <>
               <TableRow key={props._id} className="StyledProductRow" sx={{ '& td': { py: { xs: 0.5, md: 1.5 }, px: { xs: 1, md: 2 } } }}>
                    {/* Product Image */}
                    <TableCell component="th" scope="row" className="StyledProductCell" sx={{ width: { xs: 72, md: 88 } }}>
                         <Link rel='canonical' href={`/proizvod/${props.slug}`} onClick={props.onClose}>
                              <Box component="img" src={props.imageURL} className="CartProductImage" sx={{ width: { xs: 56, md: 72 }, height: { xs: 56, md: 72 }, objectFit: 'contain', display: 'block' }} />
                         </Link>
                    </TableCell>

                    {/* Product Name */}
                    <TableCell className="StyledProductCell">
                         <Typography className="StyledProductName">
                              {props.name}
                         </Typography>
                    </TableCell>

                    {/* Quantity and Unit */}
                    <TableCell className="StyledProductCell">
                         <Typography className="StyledProductName">
                              {props.quantity} {props.quantityUnit}
                         </Typography>
                    </TableCell>

                    {/* Product ID (last 8 characters) */}
                    <TableCell className="StyledProductCell">
                         <Typography className="StyledProductName">
                              {props._id.toString().slice(-8).toUpperCase()}
                         </Typography>
                    </TableCell>

                    {/* Product Counter */}
                    <TableCell className="StyledProductCell">
                         <Counter _id={props._id} count={props.count}>
                              {props.count}
                         </Counter>
                    </TableCell>

                    {/* Original Total Price (without discount) */}
                    <TableCell className="StyledProductCell">
                         <Typography className="StyledProductName">
                              {parseFloat((props.count * props.price).toString()).toFixed(2)} RSD
                         </Typography>
                    </TableCell>

                    {/* Discount Percentage and Discounted Price */}
                    {props.discount && props.discountAmount! > 0 ? (
                         <TableCell className="StyledProductCell">
                              <Typography className="StyledProductName" sx={{ color: Colors.primary.main, fontWeight: 'bold' }}>
                                   (-{props.discountAmount}%) {((props.price - (props.price * (props.discountAmount! / 100))) * props.count).toFixed(2)} RSD
                              </Typography>
                         </TableCell>
                    ) : (
                         // Empty cell to maintain layout alignment with the header
                         <TableCell className="StyledProductCell">
                              <Typography className="StyledProductName">
                                   {props.count * props.price} RSD
                              </Typography>
                         </TableCell>
                    )}

                    {/* Remove Item Button */}
                    <TableCell className="StyledProductCell">
                         <Button
                              sx={{ backgroundColor: 'transparent' }}
                              onClick={() => {
                                   toast.success("Proizvod je uklonjen iz korpe", { position: "top-center", duration: 1500 })
                                   dispatch(removeAllSingleItems(props._id))
                              }}
                         >
                              <DeleteIcon />
                         </Button>
                    </TableCell>
               </TableRow>
          </>
     );
};

export default CartItem;
