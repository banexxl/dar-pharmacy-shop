import { IPaymentFormValues } from '@/interfaces/checkout/payment-form-values.interface';
import { IUserFormValues } from '@/interfaces/checkout/user-form-values.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICheckoutState } from './checkout-state.interface';
import { initialCheckoutState } from './checkout-state.intial';

export const checkoutSlice = createSlice({
          name: 'checkout',
          initialState: initialCheckoutState,
          reducers: {
                    submitUserForm(state: ICheckoutState, action: PayloadAction<IUserFormValues>) {
                              state.userForm = action.payload;
                    },
                    clearUserForm(state: ICheckoutState) {
                              state.userForm = initialCheckoutState.userForm;
                    },
                    submitPaymentForm(state: ICheckoutState, action: PayloadAction<IPaymentFormValues>) {
                              state.paymentForm = action.payload;
                    },
                    clearPaymentForm(state: ICheckoutState) {
                              state.paymentForm = initialCheckoutState.paymentForm;
                    },
          },
});
