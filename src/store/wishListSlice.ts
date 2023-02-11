import { createSlice } from "@reduxjs/toolkit";

const initialState: any = [];

const wishListSlice = createSlice({
          name: "wishList",
          initialState,
          reducers: {
                    addToWishList(state, { payload }) {

                              const { id } = payload;

                              const find = state.find((item: any) => item.id === id);

                              if (find) {
                                        return state.map((item: any) =>
                                                  item.id === id
                                                            ? {
                                                                      ...item,
                                                            }
                                                            : item
                                        );
                              } else {
                                        state.push({
                                                  ...payload,
                                                  quantity: 1
                                        });
                              }
                    },
                    removeFromWishList(state, { payload }) {

                              const { id } = payload

                              const index = state.map((item: any) => item.id).indexOf(id)

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