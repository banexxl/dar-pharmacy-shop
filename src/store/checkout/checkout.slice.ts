import { IPaymentForm } from '@/interfaces/checkout/payment-form-values.interface';
import { IUserForm } from '@/interfaces/checkout/user-form-values.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICheckoutState } from './checkout-state.interface';
import { initialCheckoutState } from './checkout-state.intial';

export const checkoutSlice = createSlice({
          name: 'checkout',
          initialState: initialCheckoutState,
          reducers: {
                    submitUserForm(state: ICheckoutState, action: PayloadAction<IUserForm>) {
                              state.userForm = action.payload;
                    },
                    clearUserForm(state: ICheckoutState) {
                              state.userForm = initialCheckoutState.userForm;
                    },
                    submitPaymentForm(state: ICheckoutState, action: PayloadAction<IPaymentForm>) {
                              state.paymentForm = action.payload;
                    },
                    clearPaymentForm(state: ICheckoutState) {
                              state.paymentForm = initialCheckoutState.paymentForm;
                    },
          },
});
