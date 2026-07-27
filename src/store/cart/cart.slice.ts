import ICartItem from "@/interfaces/cart/cart.interface";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ICartItem[] = [];

/**
 * Helper to get the product identifier.
 * Supports both new `id` (Supabase) and legacy `id` (MongoDB persisted carts).
 */
function getItemId(item: any): string {
     return item.id || item.id;
}

const cartSlice = createSlice({
     name: "cart",
     initialState,
     reducers: {
          addToCart(state, { payload }) {
               const itemId = getItemId(payload);
               const existingItem = state.find((item: ICartItem) => getItemId(item) === itemId);

               if (existingItem) {
                    return state.map((item: ICartItem) =>
                         getItemId(item) === itemId
                              ? { ...item, count: item.count + 1 }
                              : item
                    );
               } else {
                    return [
                         ...state,
                         {
                              ...payload,
                              id: itemId, // Normalize to `id`
                              count: 1,
                         },
                    ];
               }
          },
          increment(state, { payload }) {
               return state.map((item: ICartItem) =>
                    getItemId(item) === payload
                         ? { ...item, count: item.count + 1 }
                         : item
               );
          },
          decrement(state, { payload }) {
               return state.map((item: ICartItem) =>
                    getItemId(item) === payload
                         ? { ...item, count: item.count - 1 }
                         : item
               );
          },
          removeAllSingleItems(state, { payload }) {
               return state.filter((item: ICartItem) => getItemId(item) !== payload);
          },
          clearCart() {
               return [];
          },
     },
});

export const { addToCart, increment, decrement, clearCart, removeAllSingleItems } = cartSlice.actions;
const cartSliceReducer = cartSlice.reducer;

export default cartSliceReducer;
