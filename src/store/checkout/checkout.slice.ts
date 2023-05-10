import { IPaymentInfoForm } from '@/interfaces/checkout/payment-info-form-values.interface';
import { IUserForm } from '@/interfaces/checkout/user-form-values.interface';
import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';

import { ICheckoutState } from './checkout-state.interface';
import { initialCheckoutState } from './checkout-state.intial';
import { IPaymentOptionsForm } from '@/interfaces/checkout/payment-options-form-values.interface';

export const checkoutSlice = createSlice({
          name: 'checkout',
          initialState: initialCheckoutState,
          reducers: {
                    submitUserForm(state: ICheckoutState, payload: PayloadAction<IUserForm>) {



                              // state.userForm.city = 


                    },
                    clearUserForm(state: ICheckoutState) {
                              console.log('usao u clear user form uncheckoutsliceu');

                              state.userForm = initialCheckoutState.userForm;
                    },
                    submitPaymentInfoForm(state: ICheckoutState, action: PayloadAction<IPaymentInfoForm>) {
                              state.paymentInfoForm = action.payload;
                    },
                    clearPaymentInfoForm(state: ICheckoutState) {
                              state.paymentInfoForm = initialCheckoutState.paymentInfoForm;
                    },
                    submitPaymentOptionsForm(state: ICheckoutState, action: PayloadAction<IPaymentOptionsForm>) {
                              state.paymentOptionsForm = action.payload;
                    },
                    clearPaymentOptionsForm(state: ICheckoutState) {
                              state.paymentOptionsForm = initialCheckoutState.paymentOptionsForm;
                    },
          },
});

export const { submitUserForm, clearUserForm, clearPaymentInfoForm, submitPaymentInfoForm, clearPaymentOptionsForm, submitPaymentOptionsForm } = checkoutSlice.actions
const checkoutSliceReducer = checkoutSlice.reducer

export default checkoutSliceReducer