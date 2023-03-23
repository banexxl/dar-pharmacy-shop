import { createSelector } from '@reduxjs/toolkit';
import { ICheckoutState } from './checkout-state.interface';
import { IUserForm } from '@/interfaces/checkout/user-form-values.interface';
import { IRootState } from './root-state.interface';
import { IPaymentForm } from '@/interfaces/checkout/payment-form-values.interface';

const getCheckoutState = (state: IRootState): ICheckoutState => state.checkout;

const getUserData = createSelector(getCheckoutState, (checkoutState: ICheckoutState): IUserForm => checkoutState?.userForm)

const getPaymentForm = createSelector(getCheckoutState, (checkoutState: ICheckoutState): IPaymentForm => checkoutState?.paymentForm)

export const checkoutSelectors = {
          getCheckoutState,
          getUserData,
          getPaymentForm,
};
