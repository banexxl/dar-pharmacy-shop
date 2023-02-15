import { createSlice } from "@reduxjs/toolkit";

const initialState: any = [];

const cartSlice = createSlice({
          name: "cart",
          initialState,
          reducers: {
                    addToCart(state, { payload }) {
                              const { _id } = payload;

                              const find = state.find((item: any) => item.id === _id);
                              //provera da li item postoji u korpi
                              if (find) {
                                        return state.map((item: any) =>
                                                  item.id === _id
                                                            ? {
                                                                      ...item,
                                                                      quantity: item.quantity + 1
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
                    increment(state, { payload }) {

                              return state.map((item: any) =>
                                        item.id === payload
                                                  ? {
                                                            ...item,
                                                            quantity: item.quantity + 1
                                                  }
                                                  : item
                              );
                    },
                    decrement(state, { payload }) {
                              return state.map((item: any) =>
                                        item.id === payload
                                                  ? {
                                                            ...item,
                                                            quantity: item.quantity - 1
                                                  }
                                                  : item
                              );
                    },
                    removeAllSingleItems(state, action) {
                              return state.map((item: any) =>
                                        item.id === action.payload
                                                  ? {
                                                            ...item,
                                                            price: 0,
                                                            quantity: 0,
                                                  }
                                                  : item
                              );
                    },
                    clearCart(state) {
                              return [];
                    }
          }
});

export const { addToCart, increment, decrement, clearCart, removeAllSingleItems } = cartSlice.actions
const cartSliceReducer = cartSlice.reducer

export default cartSliceReducer