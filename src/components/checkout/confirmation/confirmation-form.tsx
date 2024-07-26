import CartItem from '@/components/cart/components/cartItem'
import ICartItem from '@/interfaces/cart/cart.interface'
import { SendCheckoutConfirmationEmailToAdmin, SendCheckoutConfirmationEmailToUser } from '@/services/email/send-email'
import { cartTotalPriceSelector } from '@/store/cart/cart.selector'
import { CartWrapper, StyledProductCell, StyledHeader, StyledProductRow, StyledTotalsTitle } from '@/styles/cart'
import { CheckoutNextPrevButton } from '@/styles/checkout/userinfo'
import { Button, Paper, Table, TableBody } from '@mui/material'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import React, { FunctionComponent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IConfirmationProps } from '@/interfaces/checkout/confirmation.interface'
import { useTranslation } from 'next-i18next'
import { clearCart } from '@/store/cart/cart.slice'
import { clearPaymentOptionsForm } from '@/store/checkout/payment-options-form.slice'
import { clearUserForm } from '@/store/checkout/user-info-form.slice'
import Link from 'next/link'

export const Confirmation: FunctionComponent<IConfirmationProps> = (props: IConfirmationProps) => {


     const cart = useSelector((state: any) => state.persistReduce.cartSliceReducer)
     const totalItemPrice: any = useSelector(cartTotalPriceSelector)
     const userFormSelector = useSelector((state: any) => ({ ...state.persistReduce.userInfoFormSliceReducer }))
     const dispatch = useDispatch()

     const handleBack = () => {
          props.tabIndex === 2 ? props.setTab?.(props.tabIndex - 1) : null
     };

     return (
          <CartWrapper component={Paper}>
               <Table aria-label="customized table"
               >
                    <StyledHeader>
                         <StyledProductRow>
                              <StyledProductCell>Slika</StyledProductCell>
                              <StyledProductCell align="left">Naziv</StyledProductCell>
                              <StyledProductCell align="left">Pakovanje</StyledProductCell>
                              <StyledProductCell align="left">Sifra</StyledProductCell>
                              <StyledProductCell align="left">Količina</StyledProductCell>
                              <StyledProductCell align="left">Cena</StyledProductCell>
                              <StyledProductCell align="left">Ukupno sa PDV</StyledProductCell>
                         </StyledProductRow>
                    </StyledHeader>
                    <TableBody>
                         {cart.map((cartItem: ICartItem) => (
                              <CartItem discount={cartItem.discount} key={cartItem._id} count={cartItem.count} _id={cartItem._id}
                                   name={cartItem.name} description={cartItem.description} category={cartItem.category}
                                   availableStock={cartItem.availableStock} ingredients={cartItem.ingredients}
                                   instructions={cartItem.instructions} quantity={cartItem.quantity}
                                   warning={cartItem.warning} imageURL={cartItem.imageURL} price={cartItem.price} />
                         ))}
                    </TableBody>
               </Table>
               <StyledTotalsTitle>
                    Ukupno sa PDV: {parseFloat(totalItemPrice).toFixed(2)} RSD
               </StyledTotalsTitle>

               <CheckoutNextPrevButton type='submit' sx={{ maxWidth: '100px' }} startIcon={<NavigateBeforeIcon />} onClick={() => handleBack()}>
                    Nazad
               </CheckoutNextPrevButton>

               <Button
                    disabled={totalItemPrice === 0}
                    onClick={() => {
                         SendCheckoutConfirmationEmailToAdmin({
                              email: 'maja@apoteka-dar.rs', subject: 'Poružbenica',
                              name: userFormSelector.firstName, surname: userFormSelector.lastName,
                              title: 'Potvrda porudzbenice',
                              cart, streetAddress: userFormSelector.streetAddress, city: userFormSelector.city,
                              country: userFormSelector.country, phoneNumber: userFormSelector.phoneNumber,

                         }),
                              SendCheckoutConfirmationEmailToUser({
                                   email: userFormSelector.email, subject: 'Poružbenica',
                                   name: userFormSelector.firstName, surname: userFormSelector.lastName, title: 'Potvrda porudzbenice',
                                   cart, streetAddress: userFormSelector.streetAddress, city: userFormSelector.city,
                                   country: userFormSelector.country, phoneNumber: userFormSelector.phoneNumber,
                              }),
                              dispatch(clearCart()),
                              dispatch(clearUserForm()),
                              dispatch(clearPaymentOptionsForm())
                    }}>
                    <Link href={'/'}>
                         Poruči
                    </Link>
               </Button>
          </CartWrapper>
     )
}

export default Confirmation