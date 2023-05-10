import { createSelector } from '@reduxjs/toolkit';
import { ICheckoutState } from './checkout-state.interface';
import { IUserForm } from '@/interfaces/checkout/user-form-values.interface';
import { IPaymentInfoForm } from '@/interfaces/checkout/payment-info-form-values.interface';
import { IPaymentOptionsForm } from '@/interfaces/checkout/payment-options-form-values.interface';

export const getCheckoutState = (state: ICheckoutState) => state;

export const getUserForm = createSelector(getCheckoutState, (checkoutState: ICheckoutState): IUserForm => checkoutState?.userForm)

export const getPaymentForm = createSelector(getCheckoutState, (checkoutState: ICheckoutState): IPaymentInfoForm => checkoutState?.paymentInfoForm)

export const PaymentOptionsForm = createSelector(getCheckoutState, (checkoutState: ICheckoutState): IPaymentOptionsForm => checkoutState?.paymentOptionsForm)

