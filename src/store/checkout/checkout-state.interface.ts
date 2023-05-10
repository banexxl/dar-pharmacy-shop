import { ICart } from '@/interfaces/cart/cart.interface';
import { IPaymentOptionsForm } from '@/interfaces/checkout/payment-options-form-values.interface';
import { IUserForm } from '@/interfaces/checkout/user-form-values.interface';
import { AnyAction, Reducer } from '@reduxjs/toolkit';
import { IPaymentInfoForm } from '../../interfaces/checkout/payment-info-form-values.interface';

export interface ICheckoutState {
          // checkoutState: any;
          userForm: IUserForm;
          paymentInfoForm: IPaymentInfoForm;
          paymentOptionsForm: IPaymentOptionsForm;
}
