import ICartItem from "@/interfaces/cart/cart.interface";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ICartItem[] = [];

const cartSlice = createSlice({
     name: "cart",
     initialState,
     reducers: {
          addToCart(state, { payload }) {
               const { _id } = payload;
               const existingItem = state.find((item: ICartItem) => item._id === _id);

               if (existingItem) {
                    // Use .map() to create a new state array with updated item
                    return state.map((item: ICartItem) =>
                         item._id === _id
                              ? { ...item, count: item.count + 1 }
                              : item
                    );
               } else {
                    // Return a new array with the new item added
                    return [
                         ...state,
                         {
                              ...payload,
                              count: 1,
                         },
                    ];
               }
          },
          increment(state, { payload }) {
               // Use .map() to create a new state array with incremented count
               return state.map((item: ICartItem) =>
                    item._id === payload
                         ? { ...item, count: item.count + 1 }
                         : item
               );
          },
          decrement(state, { payload }) {
               // Use .map() to create a new state array with decremented count
               return state.map((item: ICartItem) =>
                    item._id === payload
                         ? { ...item, count: item.count - 1 }
                         : item
               );
          },
          removeAllSingleItems(state, { payload }) {
               // Use .filter() to create a new state array without the removed item
               return state.filter((item: ICartItem) => item._id !== payload);
          },
          clearCart() {
               // Return a new empty array to clear the cart
               return [];
          },
     },
});

export const { addToCart, increment, decrement, clearCart, removeAllSingleItems } = cartSlice.actions;
const cartSliceReducer = cartSlice.reducer;

export default cartSliceReducer;
