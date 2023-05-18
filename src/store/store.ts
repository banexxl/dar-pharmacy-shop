import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartSliceReducer from './cart/cart.slice'
import wishListReducer from './wishlist/wishlist.slice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from "redux-persist"
import userInfoFormSliceReducer from './checkout/user-info-form.slice'
import paymentOptionsFormSliceReducer from './checkout/payment-options-form.slice'

const persistConfig = {
          key: 'root',
          storage,
}

const comboReducer = combineReducers({
          cartSliceReducer,
          wishListReducer,
          userInfoFormSliceReducer,
          paymentOptionsFormSliceReducer
})

const persistReduce = persistReducer(persistConfig, comboReducer)

const store = configureStore({

          reducer: {
                    // cartState: cartSliceReducer,
                    // wishListState: wishListReducer,
                    // userInfoState: userInfoFormSliceReducer,
                    // paymentOptionsState: paymentOptionsFormSliceReducer
                    persistReduce
          },
          middleware: (getDefaultMiddleware) =>
                    getDefaultMiddleware({
                              serializableCheck: false,
                    }),

})

export default store