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
                                        Ukupno sa PDV-om
                              </StyledTotalsTitle>
                              <StyledTotalsPrice>
                                        {parseFloat(totalItemPrice).toFixed(2)} RSD
                              </StyledTotalsPrice>
                              <StyledTotalsToShopButton onClick={onClose}>
                                        <Link href='/'>
                                                  Nazad u apoteku
                                        </Link>
                              </StyledTotalsToShopButton>
                              <StyledTotalsToPaymentButton>
                                        <Link href='/placanje'>
                                                  KREIRAJ PORUDŽBENICU
                                        </Link>
                              </StyledTotalsToPaymentButton>
                              <StyledTotalsToPaymentButton onClick={() => dispatch(clearCart())}>
                                        Isprazni korpu
                              </StyledTotalsToPaymentButton>
                    </StyledTotalsBox>
          )
}
export default CartTotals