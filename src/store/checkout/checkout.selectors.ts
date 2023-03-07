import { createSelector } from '@reduxjs/toolkit';
import { ICheckoutState } from './checkout-state.interface';
import { IUserFormValues } from '@/interfaces/checkout/user-form-values.interface';
import { IRootState } from './root-state.interface';
import { IPaymentFormValues } from '@/interfaces/checkout/payment-form-values.interface';

const getCheckoutState = (state: IRootState): ICheckoutState => state.checkout;

const getUserData = createSelector(
          getCheckoutState,
          (checkoutState: ICheckoutState): IUserFormValues =>
                    checkoutState?.userForm
);

const getPaymentForm = createSelector(
          getCheckoutState,
          (checkoutState: ICheckoutState): IPaymentFormValues =>
                    checkoutState?.paymentForm
);

export const checkoutSelectors = {
          getCheckoutState,
          getUserData,
          getPaymentForm,
};
