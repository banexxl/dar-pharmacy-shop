import { useUIContext } from '@/context/ui/ui.context'
import useDialogModal from '@/hooks/useDialogModal'
import ICartItem from '@/interfaces/cart/cart.interface'
import { cartTotalPriceSelector } from '@/store/cart/cart-selector'
import { Button, Slide } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import Cart from '..'

interface ICartTotalsProps {
          onClose: () => void
}

function CartTotals({ onClose }: ICartTotalsProps) {

          const totalItemPrice: any = useSelector(cartTotalPriceSelector)

          return (
                    <div>
                              Ukupno sa PDV-om: {parseFloat(totalItemPrice).toFixed(2)} RSD
                              <Button sx={{ color: 'white' }} onClick={onClose}>
                                        <Link href='/checkout'>
                                                  Na placanje
                                        </Link>
                              </Button>
                    </div>

          )
}

export default CartTotals