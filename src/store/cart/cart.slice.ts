import ICartItem from "@/interfaces/cart/cart.interface";
import { createSlice } from "@reduxjs/toolkit"

const initialState: ICartItem[] = [];

const cartSlice = createSlice({
     name: "cart",
     initialState,
     reducers: {
          addToCart(state, { payload }) {
               const { _id } = payload;
               const find = state.find((item: ICartItem) => item._id === _id);
               //provera da li item postoji u korpi
               if (find) {
                    return state.map((item: ICartItem) =>
                         item._id === _id
                              ? {
                                   ...item,
                                   count: item.count + 1
                              }
                              : item
                    );
               } else {
                    state.push({
                         ...payload,
                         count: 1
                    });
               }
          },
          increment(state, { payload }) {

               return state.map((item: ICartItem) =>
                    item._id === payload
                         ? {
                              ...item,
                              count: item.count + 1
                         }
                         : item
               );
          },
          decrement(state, { payload }) {
               return state.map((item: ICartItem) =>
                    item._id === payload
                         ? {
                              ...item,
                              count: item.count - 1
                         }
                         : item
               );
          },
          removeAllSingleItems(state, { payload }) {
               return state.filter((item: ICartItem) => item._id !== payload);
          },
          clearCart(state) {
               return [];
          }
     }
});

export const { addToCart, increment, decrement, clearCart, removeAllSingleItems } = cartSlice.actions
const cartSliceReducer = cartSlice.reducer

export default cartSliceReducer