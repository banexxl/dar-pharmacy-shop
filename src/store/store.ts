import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartSliceReducer from './cart/cart.slice'
import wishListReducer from './wishlist/wishlist.slice'

let storage;
if (typeof window !== 'undefined') {
     storage = require('redux-persist/lib/storage').default;
} else {
     // Noop storage for SSR
     storage = {
          getItem: () => Promise.resolve(null),
          setItem: () => Promise.resolve(),
          removeItem: () => Promise.resolve(),
     };
}
import { persistReducer } from "redux-persist"
import userInfoFormSliceReducer from './checkout/user-info-form.slice'

const persistConfig = {
     key: 'root',
     storage,
}

const comboReducer = combineReducers({
     cartSliceReducer,
     wishListReducer,
     userInfoFormSliceReducer,
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