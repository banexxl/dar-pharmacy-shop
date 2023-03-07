import { combineReducers } from '@reduxjs/toolkit';
import { checkoutSlice } from './checkout.slice';

import { IRootState } from './root-state.interface';

export const rootReducer = combineReducers<IRootState>({
          checkout: checkoutSlice.reducer,
});
