import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DeliveryFormValues } from '../components/checkout/delivery/delivery-form-values.interface';
import { PaymentFormValues } from '../components/checkout/payment/payment-form-values.interface';

import { CheckoutState } from './checkout-state.interface';
import { initialCheckoutState } from './checkout-state.intial';

export const checkoutSlice = createSlice({
          name: 'checkout',
          initialState: initialCheckoutState,
          reducers: {
                    submitDeliveryForm(
                              state: CheckoutState,
                              action: PayloadAction<DeliveryFormValues>
                    ) {
                              state.deliveryForm = action.payload;
                    },
                    clearDeliveryForm(state: CheckoutState) {
                              state.deliveryForm = initialCheckoutState.deliveryForm;
                    },
                    submitPaymentForm(
                              state: CheckoutState,
                              action: PayloadAction<PaymentFormValues>
                    ) {
                              state.paymentForm = action.payload;
                    },
                    clearPaymentForm(state: CheckoutState) {
                              state.paymentForm = initialCheckoutState.paymentForm;
                    },
          },
});
