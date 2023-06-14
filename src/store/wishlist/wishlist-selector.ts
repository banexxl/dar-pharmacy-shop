import { createSelector } from "@reduxjs/toolkit"

const wishListSelector = (state: any) => state.persistReduce.wishListSliceReducer

export const wishListItemsSelector = createSelector([wishListSelector], (wishList: any) =>
          wishList.reduce((total: number) => (total += 1), 0)
);