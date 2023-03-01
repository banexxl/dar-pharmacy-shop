import { IPaymentFormValues } from '@/interfaces/checkout/payment-form-values.interface';
import { IUserFormValues } from '@/interfaces/checkout/user-form-values.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CheckoutState } from './checkout-state.interface';
import { initialCheckoutState } from './checkout-state.intial';

export const checkoutSlice = createSlice({
          name: 'checkout',
          initialState: initialCheckoutState,
          reducers: {
                    submitDeliveryForm(
                              state: CheckoutState,
                              action: PayloadAction<IUserFormValues>
                    ) {
                              state.userForm = action.payload;
                    },
                    clearDeliveryForm(state: CheckoutState) {
                              state.userForm = initialCheckoutState.userForm;
                    },
                    submitPaymentForm(
                              state: CheckoutState,
                              action: PayloadAction<IPaymentFormValues>
                    ) {
                              state.paymentForm = action.payload;
                    },
                    clearPaymentForm(state: CheckoutState) {
                              state.paymentForm = initialCheckoutState.paymentForm;
                    },
          },
});
