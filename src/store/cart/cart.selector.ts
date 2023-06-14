import ICartItem from "@/interfaces/cart/cart.interface";
import { createSelector } from "@reduxjs/toolkit"

const cartSelector = (state: any) => state.persistReduce.cartSliceReducer

export const cartTotalSelector = createSelector([cartSelector], (cartState: any) =>
          cartState.reduce((total: number, item: any) => (total += item.count), 0)
);

export const cartTotalPriceSelector = createSelector([cartSelector], (cartState: any) =>
          cartState.reduce((total: number, item: ICartItem) =>
                    (total += item.price * item.count), 0)
);