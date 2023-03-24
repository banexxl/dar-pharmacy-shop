
import ICartItem from "@/interfaces/cart/cart.interface";
import { createSelector } from "@reduxjs/toolkit"
import { ICartState } from "./cart-state.interface";

const cartSelector = (state: ICartState) => state.cart

export const cartTotalSelector = createSelector([cartSelector], (cart: any) =>
          cart.reduce((total: number, item: any) => (total += item.quantity), 0)
);

export const cartTotalPriceSelector = createSelector([cartSelector], (cart: any) =>
          cart.reduce((total: number, item: ICartItem) =>
                    (total += item.price * item.count), 0)
);