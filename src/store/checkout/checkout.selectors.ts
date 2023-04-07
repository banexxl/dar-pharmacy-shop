import { createSelector } from '@reduxjs/toolkit';
import { ICheckoutState } from './checkout-state.interface';
import { IUserForm } from '@/interfaces/checkout/user-form-values.interface';
import { IPaymentForm } from '@/interfaces/checkout/payment-form-values.interface';
import { ICreditCardForm } from '@/interfaces/checkout/credit-card-form-values.interface';

const getCheckoutState = (state: ICheckoutState) => state;

const getUserForm = createSelector(getCheckoutState, (checkoutState: ICheckoutState) => checkoutState?.userForm)

const getPaymentForm = createSelector(getCheckoutState, (checkoutState: ICheckoutState): IPaymentForm => checkoutState?.paymentForm)

const creditCardForm = createSelector(getCheckoutState, (checkoutState: ICheckoutState): ICreditCardForm => checkoutState?.creditCardForm)

export const checkoutSelectors = {
          getCheckoutState,
          getUserForm,
          getPaymentForm,
          creditCardForm
};
