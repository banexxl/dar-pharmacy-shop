import { createSelector } from '@reduxjs/toolkit';
import { ICheckoutState } from './checkout-state.interface';
import { IUserForm } from '@/interfaces/checkout/user-form-values.interface';
import { IPaymentInfoForm } from '@/interfaces/checkout/payment-info-form-values.interface';
import { IPaymentOptionsForm } from '@/interfaces/checkout/payment-options-form-values.interface';

const getCheckoutState = (state: ICheckoutState) => state;

const getUserForm = createSelector(getCheckoutState, (checkoutState: ICheckoutState) => checkoutState?.userForm)

const getPaymentForm = createSelector(getCheckoutState, (checkoutState: ICheckoutState): IPaymentInfoForm => checkoutState?.paymentForm)

const creditCardForm = createSelector(getCheckoutState, (checkoutState: ICheckoutState): IPaymentOptionsForm => checkoutState?.creditCardForm)

export const checkoutSelectors = {
          getCheckoutState,
          getUserForm,
          getPaymentForm,
          creditCardForm
};
