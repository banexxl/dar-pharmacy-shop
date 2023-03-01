import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store/root-state.interface';
import { IPaymentFormValues } from '../interfaces/checkout/payment-form-values.interface';

import { CheckoutState } from './checkout-state.interface';
import { IUserFormValues } from '@/interfaces/checkout/user-form-values.interface';

const getCheckoutState = (state: RootState): CheckoutState => state.checkout;

const getUserData = createSelector(
          getCheckoutState,
          (checkoutState: CheckoutState): IUserFormValues =>
                    checkoutState?.userForm
);

const getPaymentForm = createSelector(
          getCheckoutState,
          (checkoutState: CheckoutState): IPaymentFormValues =>
                    checkoutState?.paymentForm
);

export const checkoutSelectors = {
          getCheckoutState,
          getUserData,
          getPaymentForm,
};
