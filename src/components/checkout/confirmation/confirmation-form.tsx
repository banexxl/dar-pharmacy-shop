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

export const Confirmation: FunctionComponent<IConfirmationProps> = (props: IConfirmationProps) => {

          const { t } = useTranslation('common')
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
                                                            <StyledProductCell>{t("cart.image")}</StyledProductCell>
                                                            <StyledProductCell align="left">{t("cart.name")}</StyledProductCell>
                                                            <StyledProductCell align="left">{t("cart.quantity")}</StyledProductCell>
                                                            <StyledProductCell align="left">{t("cart.code")}</StyledProductCell>
                                                            <StyledProductCell align="left">{t("cart.amount")}</StyledProductCell>
                                                            <StyledProductCell align="left">{t("cart.price")}</StyledProductCell>
                                                            <StyledProductCell align="left">{t("cart.total")}</StyledProductCell>
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
                                        {t('confirmation.total-with-tax')}: {parseFloat(totalItemPrice).toFixed(2)} RSD
                              </StyledTotalsTitle>

                              <CheckoutNextPrevButton type='submit' sx={{ maxWidth: '100px' }} startIcon={<NavigateBeforeIcon />} onClick={() => handleBack()}>
                                        {t('checkout.previousbutton')}
                              </CheckoutNextPrevButton>
                              <Button sx={{ color: 'white' }}
                                        disabled={totalItemPrice === 0}
                                        onClick={() => {
                                                  SendCheckoutConfirmationEmailToAdmin({
                                                            email: 'maja@apoteka-dar.rs', subject: 'Poružbenica',
                                                            name: userFormSelector.firstName, surname: userFormSelector.secondName,
                                                            title: 'Potvrda porudzbenice',
                                                            cart, streetAddress: userFormSelector.streetAddress, city: userFormSelector.city,
                                                            country: userFormSelector.country, phoneNumber: userFormSelector.phoneNumber,

                                                  }),
                                                            SendCheckoutConfirmationEmailToUser({
                                                                      email: userFormSelector.email, subject: 'Poružbenica',
                                                                      name: userFormSelector.firstName, title: 'Potvrda porudzbenice',
                                                                      cart, streetAddress: userFormSelector.streetAddress, city: userFormSelector.city,
                                                                      country: userFormSelector.country, phoneNumber: userFormSelector.phoneNumber,
                                                            }),
                                                            dispatch(clearCart()),
                                                            dispatch(clearUserForm()),
                                                            dispatch(clearPaymentOptionsForm())
                                        }}>
                                        {t('confirmation.to-payment')}
                              </Button>
                    </CartWrapper>
          )
}

export default Confirmation