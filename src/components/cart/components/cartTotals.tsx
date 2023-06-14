import { cartTotalPriceSelector } from '@/store/cart/cart.selector'
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'next-i18next'
import { StyledTotalsBox, StyledTotalsPrice, StyledTotalsTitle, StyledTotalsToPaymentButton, StyledTotalsToShopButton } from '@/styles/cart'
import { clearCart } from '@/store/cart/cart.slice'

interface ICartTotalsProps {
          onClose: () => void
}

function CartTotals({ onClose }: ICartTotalsProps) {

          const totalItemPrice: any = useSelector(cartTotalPriceSelector)
          const { t } = useTranslation();
          const dispatch = useDispatch()

          return (
                    <StyledTotalsBox>
                              <StyledTotalsTitle>
                                        {t('confirmation.total-with-tax')}:
                              </StyledTotalsTitle>
                              <StyledTotalsPrice>
                                        {parseFloat(totalItemPrice).toFixed(2)} RSD
                              </StyledTotalsPrice>
                              <StyledTotalsToShopButton onClick={onClose}>
                                        <Link href='/'>
                                                  {t('confirmation.to-shop')}
                                        </Link>
                              </StyledTotalsToShopButton>
                              <StyledTotalsToPaymentButton>
                                        <Link href='/checkout'>
                                                  {t('confirmation.to-payment')}
                                        </Link>
                              </StyledTotalsToPaymentButton>
                              <StyledTotalsToPaymentButton onClick={() => dispatch(clearCart())}>
                                        {t('confirmation.clear-cart')}
                              </StyledTotalsToPaymentButton>
                    </StyledTotalsBox>
          )
}
export default CartTotals