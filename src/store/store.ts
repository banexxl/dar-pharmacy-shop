import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartSliceReducer from './cart/cart.slice'
import checkoutSliceReducer from './checkout/checkout.slice'
import wishListReducer from './wishlist/wishlist.slice'
import storage from 'redux-persist/lib/storage'
import { PersistConfig, persistReducer } from "redux-persist"

const persistConfig = {
          key: 'persist-key',
          storage
}

const comboReducer = combineReducers({
          cartSliceReducer,
          checkoutSliceReducer,
          wishListReducer
})

const persistReduce = persistReducer(persistConfig, comboReducer)

const store = configureStore({

          reducer: {
                    // cartState: cartSliceReducer,
                    // wishListState: wishListReducer,
                    // checkoutState: checkoutSliceReducer,
                    persistReduce
          },
          middleware: (getDefaultMiddleware) =>
                    getDefaultMiddleware({
                              serializableCheck: false,
                    }),

})

export default store