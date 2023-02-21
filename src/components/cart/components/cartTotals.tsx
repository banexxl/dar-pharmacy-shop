import { cartTotalPriceSelector } from '@/store/selectors'
import React from 'react'
import { useSelector } from 'react-redux'

function CartTotals() {

          const totalItemPrice: any = useSelector(cartTotalPriceSelector)

          return (
                    <div>Cart totals: {parseFloat(totalItemPrice).toFixed(2)}</div>
          )
}

export default CartTotals