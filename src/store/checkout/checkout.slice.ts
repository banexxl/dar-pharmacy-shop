import { IPaymentInfoForm } from '@/interfaces/checkout/payment-info-form-values.interface';
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
                    submitPaymentInfoForm(state: ICheckoutState, action: PayloadAction<IPaymentInfoForm>) {
                              state.paymentForm = action.payload;
                    },
                    clearPaymentInfoForm(state: ICheckoutState) {
                              state.paymentForm = initialCheckoutState.paymentForm;
                    },
                    submitPaymentOptionsForm(state: ICheckoutState, action: PayloadAction<IPaymentInfoForm>) {
                              state.paymentForm = action.payload;
                    },
                    clearPaymentOptionsForm(state: ICheckoutState) {
                              state.paymentForm = initialCheckoutState.paymentForm;
                    },
          },
});

export const { submitUserForm, clearUserForm, submitPaymentForm, clearPaymentForm } = checkoutSlice.actions
const checkoutSliceReducer = checkoutSlice.reducer

export default checkoutSliceReducer