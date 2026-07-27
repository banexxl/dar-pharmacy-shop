import ICartItem from "@/interfaces/cart/cart.interface";
import { createSelector } from "@reduxjs/toolkit"

const cartSelector = (state: any) => state.persistReduce.cartSliceReducer

export const cartTotalSelector = createSelector([cartSelector], (cartState: ICartItem[]) =>
     cartState.reduce((total: number, item: ICartItem) => (total += item.count), 0)
);
export const cartTotalPriceSelector = createSelector([cartSelector], (cartState: ICartItem[]) => {
     const total = cartState.reduce((total: number, item: ICartItem) => {
          const { price, discount_amount, count } = item; // Use `count` instead of `quantity`
          const discountedPrice = discount_amount ? price - (price * discount_amount) / 100 : price;
          const itemTotal = discountedPrice * count;
          return total + itemTotal;
     }, 0);
     return total;
});
