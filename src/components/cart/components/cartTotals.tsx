import { useUIContext } from '@/context/ui'
import useDialogModal from '@/hooks/useDialogModal'
import ICartItem from '@/interfaces/cart'
import { cartTotalPriceSelector } from '@/store/selectors'
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
                                        <Link href='/checkout/address'>
                                                  Uloguj se i plati
                                        </Link>
                              </Button>

                              <Button sx={{ color: 'white' }} onClick={onClose}>
                                        <Link href='/checkout/address'>
                                                  Plati kao gost
                                        </Link>
                              </Button>
                    </div>

          )
}

export default CartTotals