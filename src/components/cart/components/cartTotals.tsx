import { useUIContext } from '@/context/ui/ui.context'
import useDialogModal from '@/hooks/useDialogModal'
import ICartItem from '@/interfaces/cart/cart.interface'
import { cartTotalPriceSelector } from '@/store/cart/cart.selector'
import { Box, Button, Slide, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import Cart from '../cart'

interface ICartTotalsProps {
          onClose: () => void
}

function CartTotals({ onClose }: ICartTotalsProps) {

          const totalItemPrice: any = useSelector(cartTotalPriceSelector)

          return (
                    <Box sx={{ display: 'flex', flexDirection: 'column', mt: '30px', gap: '10px', alignItems: 'center', ml: '50px' }}>
                              <Typography sx={{ fontFamily: 'sans-serif' }}>
                                        Ukupno sa PDV-om:
                              </Typography>
                              <Typography sx={{ fontFamily: 'sans-serif' }}>
                                        {parseFloat(totalItemPrice).toFixed(2)} RSD
                              </Typography>
                              <Button sx={{ color: 'white' }} onClick={onClose}>
                                        <Link href='/checkout'>
                                                  Na placanje
                                        </Link>
                              </Button>
                    </Box>

          )
}

export default CartTotals