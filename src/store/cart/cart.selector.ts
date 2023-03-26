
import ICartItem from "@/interfaces/cart/cart.interface";
import { createSelector } from "@reduxjs/toolkit"
import { ICartState } from "./cart-state.interface";

const cartSelector = (state: ICartState) => state.cartState

export const cartTotalSelector = createSelector([cartSelector], (cartState: any) =>
          cartState.reduce((total: number, item: any) => (total += item.quantity), 0)
);

export const cartTotalPriceSelector = createSelector([cartSelector], (cartState: any) =>
          cartState.reduce((total: number, item: ICartItem) =>
                    (total += item.price * item.count), 0)
);