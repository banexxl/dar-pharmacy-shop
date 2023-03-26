import { ICart } from '@/interfaces/cart/cart.interface';
import { ICreditCard } from '@/interfaces/checkout/credit-card-form-values.interface';
import { IUserForm } from '@/interfaces/checkout/user-form-values.interface';
import { AnyAction, Reducer } from '@reduxjs/toolkit';
import { IPaymentForm } from '../../interfaces/checkout/payment-form-values.interface';

export interface ICheckoutState {
          checkoutState: any;
          userForm: IUserForm;
          paymentForm: IPaymentForm;
          creditCardForm: ICreditCard;
}
