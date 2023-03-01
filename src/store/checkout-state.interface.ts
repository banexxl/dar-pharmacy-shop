import { IUserFormValues } from '@/interfaces/checkout/user-form-values.interface';
import { PaymentFormValues } from '../interfaces/checkout/payment-form-values.interface';

export interface CheckoutState {
          userForm: IUserFormValues;
          paymentForm: PaymentFormValues;
}
