import { createSlice } from "@reduxjs/toolkit";

const initialState: any = [];

const wishListSlice = createSlice({
          name: "wishList",
          initialState,
          reducers: {
                    addToWishList(state, { payload }) {
                              const { _id } = payload;
                              const find = state.find((item: any) => item._id === _id);
                              if (find) {
                                        return state.map((item: any) =>
                                                  item._id === _id ?
                                                            {
                                                                      ...item,
                                                            }
                                                            : item
                                        );
                              } else {
                                        state.push({
                                                  ...payload,
                                        });
                              }
                    },
                    removeFromWishList(state, { payload }) {
                              const { _id } = payload
                              const index = state.map((item: any) => item.id).indexOf(_id)
                              state.splice(index, 1)
                    },
                    clearWishList() {
                              return [];
                    }
          }
});

export const { addToWishList, removeFromWishList, clearWishList } = wishListSlice.actions
const wishListSliceReducer = wishListSlice.reducer

export default wishListSliceReducer