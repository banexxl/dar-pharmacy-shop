import { createSelector } from "@reduxjs/toolkit"

const wishListSelector = (state: any) => state.wishList

export const wishListItemsSelector = createSelector([wishListSelector], (wishList: any) =>
          wishList.reduce((total: number) => (total += 1), 0)
);