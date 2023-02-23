import { configureStore } from '@reduxjs/toolkit'
import cartSliceReducer from "./cart-slice"
import wishListReducer from "./wishlist.slice"

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