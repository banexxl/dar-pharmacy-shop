import { createSelector } from "@reduxjs/toolkit"

const cartSelector = (state: any) => state.cart
const wishListSelector = (state: any) => state.wishList

export const cartTotalSelector = createSelector([cartSelector], (cart: any) =>
          cart.reduce((total: number, item: any) => (total += item.quantity), 0)
);

export const cartTotalPriceSelector = createSelector([cartSelector], (cart: any) =>
          cart.reduce((total: number, item: any) => (total += parseFloat(item.price) * item.quantity), 0)
);

export const wishListItemsSelector = createSelector([wishListSelector], (wishList: any) =>
          wishList.reduce((total: number) => (total += 1), 0)
);