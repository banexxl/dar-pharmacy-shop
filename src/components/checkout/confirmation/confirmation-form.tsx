import CartItem from '@/components/cart/components/cartItem'
import ICartItem from '@/interfaces/cart/cart.interface'
import { SendCheckoutConfirmationEmailToAdmin, SendCheckoutConfirmationEmailToUser } from '@/services/email/send-email'
import { cartTotalPriceSelector } from '@/store/cart/cart.selector'
import { CartWrapper, StyledProductCell, StyledHeader, StyledProductRow, StyledTotalsTitle, StyledTable, StyledHeaderCell, StyledTableBody } from '@/styles/cart'
import { CheckoutNextPrevButton } from '@/styles/checkout/userinfo'
import { Button, Paper, Table, TableBody, Typography } from '@mui/material'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import React, { FunctionComponent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IConfirmationProps } from '@/interfaces/checkout/confirmation.interface'
import { clearCart } from '@/store/cart/cart.slice'
import { clearPaymentOptionsForm } from '@/store/checkout/payment-options-form.slice'
import { clearUserForm } from '@/store/checkout/user-info-form.slice'
import Link from 'next/link'
import theme, { Colors } from '@/styles/theme'
import { ReCaptcha, useReCaptcha } from 'next-recaptcha-v3'

export const Confirmation: FunctionComponent<IConfirmationProps> = (props: IConfirmationProps) => {

     const cart = useSelector((state: any) => state.persistReduce.cartSliceReducer)
     const totalItemPrice: any = useSelector(cartTotalPriceSelector)
     const userFormSelector = useSelector((state: any) => ({ ...state.persistReduce.userInfoFormSliceReducer }))

     const dispatch = useDispatch()

     const [submitEnabled, setSubmitEnabled] = useState<boolean>(false)
     const { executeRecaptcha, loaded } = useReCaptcha();
     const [token, setToken] = useState<string>('');

     useEffect(() => {
          if (loaded) {
               const generateToken = async () => {
                    const newToken = await executeRecaptcha("form_submit");
                    setToken(newToken);
               };
               generateToken();
          }
     }, [loaded, executeRecaptcha]);

     const handleBack = () => {
          props.tabIndex === 2 ? props.setTab?.(props.tabIndex - 1) : null
     };

     const onOrderItems = async () => {
          try {
               await fetch('/api/orders', {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ cart, userFormSelector, totalItemPrice })
               })
          } catch (error) {
               console.log(error);
          }
     }

     return (
          <CartWrapper component={Paper} theme={theme}>
               <StyledTable>
                    <StyledHeader>
                         <StyledHeaderCell theme={theme}>Slika</StyledHeaderCell>
                         <StyledHeaderCell theme={theme} align="left" >Naziv</StyledHeaderCell>
                         <StyledHeaderCell theme={theme} align="left" >Pakovanje</StyledHeaderCell>
                         <StyledHeaderCell theme={theme} align="left" >Kod</StyledHeaderCell>
                         <StyledHeaderCell theme={theme} align="left" >Količina</StyledHeaderCell>
                         <StyledHeaderCell theme={theme} align="left">Cena</StyledHeaderCell>
                         <StyledHeaderCell theme={theme} align="right">Ukupno sa PDV</StyledHeaderCell>
                         <StyledHeaderCell theme={theme} align="right">Ukupno sa popustom</StyledHeaderCell>
                         <StyledHeaderCell theme={theme} align="right">Obriši</StyledHeaderCell>
                    </StyledHeader>
                    <StyledTableBody theme={theme}>
                         {cart.map((cartItem: ICartItem) => (
                              <CartItem discount={cartItem.discount} key={cartItem._id} count={cartItem.count} _id={cartItem._id}
                                   name={cartItem.name} description={cartItem.description} category={cartItem.category}
                                   availableStock={cartItem.availableStock} ingredients={cartItem.ingredients}
                                   discountAmount={cartItem.discountAmount}
                                   instructions={cartItem.instructions} quantity={cartItem.quantity}
                                   warning={cartItem.warning} imageURL={cartItem.imageURL} price={cartItem.price} quantityUnit={cartItem.quantityUnit} mediaURLs={[]} />
                         ))}
                    </StyledTableBody>
               </StyledTable>
               <StyledTotalsTitle theme={theme}>
                    Ukupno sa PDV: {parseFloat(totalItemPrice).toFixed(2)} RSD
               </StyledTotalsTitle>
               <Typography sx={{ color: Colors.primary.main, fontSize: '1rem', textAlign: 'center' }}>
                    PDV uračunat u cenu i nema skrivenih troškova.
               </Typography>
               <CheckoutNextPrevButton type='submit' sx={{ maxWidth: '100px' }} startIcon={<NavigateBeforeIcon />} onClick={() => handleBack()}>
                    Nazad
               </CheckoutNextPrevButton>

               <Button
                    disabled={totalItemPrice === 0 || !submitEnabled}
                    onClick={() => {
                         SendCheckoutConfirmationEmailToAdmin({
                              email: 'maja@apoteka-dar.rs',
                              customerEmail: userFormSelector.email.toLowerCase(),
                              subject: 'Poružbenica',
                              name: userFormSelector.name,
                              title: 'Potvrda porudzbenice',
                              cart, streetAddress: userFormSelector.streetAddress, city: userFormSelector.city,
                              country: userFormSelector.country, phoneNumber: userFormSelector.phoneNumber,
                         }).then(() => {
                              SendCheckoutConfirmationEmailToUser({
                                   email: userFormSelector.email.toLowerCase(), subject: 'Poružbenica',
                                   name: userFormSelector.name, title: 'Potvrda porudzbenice',
                                   cart, streetAddress: userFormSelector.streetAddress, city: userFormSelector.city,
                                   country: userFormSelector.country, phoneNumber: userFormSelector.phoneNumber,
                              }).then(() => {
                                   dispatch(clearCart()),
                                        dispatch(clearUserForm()),
                                        dispatch(clearPaymentOptionsForm())
                              }).then(() => {
                                   onOrderItems()
                              })
                         })

                    }}>
                    <Link rel='canonical' href={'/'}>
                         Poruči
                    </Link>
               </Button>
               <Typography sx={{ color: Colors.primary.main, fontSize: '1.3rem', textAlign: 'center', mt: '30px', mb: '30px' }}>
                    Detalje isporuke i plaćanja možete pogledati <Link rel='canonical' href='/informacije/isporuka-i-placanje'>OVDE!</Link>
               </Typography>
               <Typography sx={{ color: Colors.primary.main, fontSize: '1.3rem', textAlign: 'justify', mt: '30px', mb: '30px', maxWidth: '500px' }}>
                    Ako je neki od proizvoda na promociji (npr. kupi 2 dobiješ 3, ili na 3 kutije dobiješ 10% popusta, itd.), popust će biti obračunat prilikom slanja paketa(ne prilikom kreiranja PORUDŽBENICE).
               </Typography>
               <ReCaptcha onValidate={() => { setSubmitEnabled(true) }} action={'form_submit'} reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} />
          </CartWrapper>
     )
}

export default Confirmation