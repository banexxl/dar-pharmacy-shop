import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store/root-state.interface';
import { PaymentFormValues } from '../interfaces/checkout/payment-form-values.interface';

import { CheckoutState } from './checkout-state.interface';
import { UserFormValues } from '@/interfaces/checkout/user-form-values.interface';

const getCheckoutState = (state: RootState): CheckoutState => state.checkout;

const getUserData = createSelector(
          getCheckoutState,
          (checkoutState: CheckoutState): UserFormValues =>
                    checkoutState?.userForm
);

const getPaymentForm = createSelector(
          getCheckoutState,
          (checkoutState: CheckoutState): PaymentFormValues =>
                    checkoutState?.paymentForm
);

export const checkoutSelectors = {
          getCheckoutState,
          getUserData,
          getPaymentForm,
};
