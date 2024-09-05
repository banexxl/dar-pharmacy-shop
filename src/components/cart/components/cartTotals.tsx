import { cartTotalPriceSelector } from '@/store/cart/cart.selector'
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'next-i18next'
import { StyledHeaderCell, StyledTotalsBox, StyledTotalsPrice, StyledTotalsTitle } from '@/styles/cart'
import { clearCart } from '@/store/cart/cart.slice'
import { Button, Typography } from '@mui/material'
import theme, { Colors } from '@/styles/theme'

interface ICartTotalsProps {
     onClose: () => void
}

function CartTotals({ onClose }: ICartTotalsProps) {

     const totalItemPrice: any = useSelector(cartTotalPriceSelector)

     const dispatch = useDispatch()

     return (
          <StyledTotalsBox theme={theme}>
               <StyledTotalsTitle theme={theme}>
                    Ukupno sa PDV-om
               </StyledTotalsTitle>
               <StyledTotalsPrice>
                    {parseFloat(totalItemPrice).toFixed(2)} RSD
               </StyledTotalsPrice>
               <Typography sx={{ color: Colors.primary.main, fontSize: '1rem', textAlign: 'center' }}>
                    PDV uračunat u cenu i nema skrivenih troškova.
               </Typography>
               <Button onClick={onClose}>
                    <Link href='/'>
                         Nazad u apoteku
                    </Link>
               </Button>
               <Button
                    disabled={parseFloat(totalItemPrice) === 0}
               >
                    <Link href='/placanje'>
                         KREIRAJ PORUDŽBENICU
                    </Link>
               </Button>
               <Button onClick={() => dispatch(clearCart())}>
                    Isprazni korpu
               </Button>
               <Typography sx={{ color: Colors.primary.main, fontSize: '1.3rem', textAlign: 'center', mt: '30px', mb: '30px' }}>
                    Detalje isporuke i plaćanja možete pogledati <Link href='/informacije/isporuka-i-placanje'>OVDE!</Link>
               </Typography>
               <Typography sx={{ color: Colors.primary.main, fontSize: '1.3rem', textAlign: 'justify', mt: '30px', mb: '30px', maxWidth: '500px' }}>
                    Ako je neki od proizvoda na promociji (npr. kupi 2 dobiješ 3, ili na 3 kutije dobiješ 10% popusta, itd.), popust će biti obračunat prilikom slanja paketa(ne prilikom kreiranja PORUDŽBENICE).
               </Typography>
          </StyledTotalsBox>
     )
}
export default CartTotals