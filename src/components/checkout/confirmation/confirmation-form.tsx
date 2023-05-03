import CartItem from '@/components/cart/components/cartItem'
import ICartItem from '@/interfaces/cart/cart.interface'
import { SendCheckoutConfirmationEmail } from '@/services/email/send-email'
import { cartTotalPriceSelector } from '@/store/cart/cart.selector'
import { CartWrapper, StyledProductCell, StyledHeader, StyledProductRow, StyledTotalsTitle } from '@/styles/cart'
import { CheckoutNextPrevButton } from '@/styles/checkout/userinfo'
import { Button, Paper, Table, TableBody } from '@mui/material'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import React, { FunctionComponent, useState } from 'react'
import { useSelector } from 'react-redux'
import { IConfirmationProps } from '@/interfaces/checkout/confirmation.interface'
import { useTranslation } from 'next-i18next'

export const Confirmation: FunctionComponent<IConfirmationProps> = (props: IConfirmationProps) => {

          const { t } = useTranslation('common')
          const cart: ICartItem[] = useSelector((state: any) => state.cartState)
          const totalItemPrice: any = useSelector(cartTotalPriceSelector)
          const tabIndex: number = 3

          const handleBack = () => {
                    tabIndex === 2 || tabIndex === 3 ? props.setTab?.(tabIndex - 1) : null
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
                                                            <CartItem key={cartItem._id} count={cartItem.count} _id={cartItem._id}
                                                                      name={cartItem.name} description={cartItem.description} category={cartItem.category}
                                                                      availableStock={cartItem.availableStock} ingredients={cartItem.ingredients}
                                                                      instructions={cartItem.instructions} quantity={cartItem.quantity}
                                                                      warning={cartItem.warning} imageURL={cartItem.imageURL} price={cartItem.price} />
                                                  ))}
                                        </TableBody>
                              </Table>
                              <StyledTotalsTitle>
                                        {t('confirmation.total-with-tax')}{parseFloat(totalItemPrice).toFixed(2)} RSD
                              </StyledTotalsTitle>

                              <CheckoutNextPrevButton type='submit' sx={{ maxWidth: '100px' }} startIcon={<NavigateBeforeIcon />} onClick={() => handleBack()}>
                                        {t('checkout.previousbutton')}
                              </CheckoutNextPrevButton>
                              <Button sx={{ color: 'white' }}
                                        onClick={() => SendCheckoutConfirmationEmail({ email: 'damjanovic.branislav@gmail.com', subject: 'Potvrda porudzbine', name: 'Majo', title: 'Potvrda porudzbine', message: 'majaidrugari@gmail.com', cart })}>
                                        {t('confirmation.to-payment')}
                              </Button>
                    </CartWrapper>
          )
}

export default Confirmation