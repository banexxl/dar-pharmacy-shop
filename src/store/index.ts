import { configureStore } from '@reduxjs/toolkit'
import cartSliceReducer from "./cartSlice"
import wishListReducer from "./wishListSlice"
import userReducer from "./userSlice"

const store = configureStore({
          reducer: {
                    cart: cartSliceReducer,
                    wishList: wishListReducer,
                    user: userReducer
          },
          middleware: (getDefaultMiddleware) =>
                    getDefaultMiddleware({
                              serializableCheck: false,
                    }),

})


export default store