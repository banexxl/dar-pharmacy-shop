import { configureStore } from '@reduxjs/toolkit'
import cartSliceReducer from './cart/cart.slice'
import checkoutSliceReducer from './checkout/checkout.slice'
import wishListReducer from './wishlist/wishlist.slice'

const store = configureStore({

          reducer: {
                    cart: cartSliceReducer,
                    wishList: wishListReducer,
                    checkout: checkoutSliceReducer,
          },
          middleware: (getDefaultMiddleware) =>
                    getDefaultMiddleware({
                              serializableCheck: false,
                    }),

})

export default store