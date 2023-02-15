import { configureStore } from '@reduxjs/toolkit'
import cartSliceReducer from "./cartSlice"
import wishListReducer from "./wishListSlice"

const store = configureStore({

          reducer: {
                    cart: cartSliceReducer,
                    wishList: wishListReducer,

          },
          middleware: (getDefaultMiddleware) =>
                    getDefaultMiddleware({
                              serializableCheck: false,
                    }),

})

export default store