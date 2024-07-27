import { cartTotalPriceSelector } from '@/store/cart/cart.selector'
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'next-i18next'
import { StyledTotalsBox, StyledTotalsPrice, StyledTotalsTitle } from '@/styles/cart'
import { clearCart } from '@/store/cart/cart.slice'
import { Button } from '@mui/material'
import theme from '@/styles/theme'

interface ICartTotalsProps {
     onClose: () => void
}

function CartTotals({ onClose }: ICartTotalsProps) {

     const totalItemPrice: any = useSelector(cartTotalPriceSelector)
     const { t } = useTranslation();
     const dispatch = useDispatch()

     return (
          <StyledTotalsBox theme={theme}>
               <StyledTotalsTitle theme={theme}>
                    Ukupno sa PDV-om
               </StyledTotalsTitle>
               <StyledTotalsPrice>
                    {parseFloat(totalItemPrice).toFixed(2)} RSD
               </StyledTotalsPrice>
               <Button onClick={onClose}>
                    <Link href='/'>
                         Nazad u apoteku
                    </Link>
               </Button>
               <Button>
                    <Link href='/placanje'>
                         KREIRAJ PORUDŽBENICU
                    </Link>
               </Button>
               <Button onClick={() => dispatch(clearCart())}>
                    Isprazni korpu
               </Button>
          </StyledTotalsBox>
     )
}
export default CartTotals