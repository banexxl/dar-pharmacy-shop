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
                         item.id === id ?
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
               const { id } = payload
               const index = state.map((item: any) => item.id).indexOf(id)
               state.splice(index, 1)
          },
          clearWishList() {
               return [];
          },
          setWishList(_state: any, { payload }: { payload: any[] }) {
               return payload;
          }
     }
});

export const { addToWishList, removeFromWishList, clearWishList, setWishList } = wishListSlice.actions
const wishListSliceReducer = wishListSlice.reducer

export default wishListSliceReducer