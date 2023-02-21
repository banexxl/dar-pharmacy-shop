import { cartTotalPriceSelector } from '@/store/selectors'
import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

function CartTotals() {

          const totalItemPrice: any = useSelector(cartTotalPriceSelector)

          return (
                    <div>
                              Cart totals: {parseFloat(totalItemPrice).toFixed(2)}
                              <Button sx={{ color: 'white' }}>
                                        <Link href='/checkout'>
                                                  Kupi
                                        </Link>
                              </Button>
                    </div>

          )
}

export default CartTotals