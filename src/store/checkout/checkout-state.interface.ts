import { IUserFormValues } from '@/interfaces/checkout/user-form-values.interface';
import { IPaymentFormValues } from '../../interfaces/checkout/payment-form-values.interface';

export interface ICheckoutState {
          userForm: IUserFormValues;
          paymentForm: IPaymentFormValues;
}
