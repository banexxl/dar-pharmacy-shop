import { createSelector } from '@reduxjs/toolkit';
import { IUserForm } from '@/interfaces/checkout/user-form-values.interface';
import { IPaymentInfoForm } from '@/interfaces/checkout/payment-info-form-values.interface';
import { IPaymentOptionsForm } from '@/interfaces/checkout/payment-options-form-values.interface';

export const getUserInfoState = (state: any) => state.persistReduce.userInfoFormSliceReducer

export const getPaymentInfoState = (state: any) => state.persistReduce.paymentInfoFormSliceReducer

export const getPaymentOptionsState = (state: any) => state.persistReduce.paymentOptionsFormSliceReducer

export const getUserForm = createSelector(getUserInfoState, (checkoutState): IUserForm => checkoutState?.userForm)

export const getPaymentInfoForm = createSelector(getPaymentInfoState, (checkoutState): IPaymentInfoForm => checkoutState?.paymentInfoForm)

export const getPaymentOptionsForm = createSelector(getPaymentOptionsState, (checkoutState): IPaymentOptionsForm => checkoutState?.paymentOptionsForm)

