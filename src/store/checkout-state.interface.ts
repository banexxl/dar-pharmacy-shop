import { UserFormValues } from '@/interfaces/checkout/user-form-values.interface';
import { PaymentFormValues } from '../interfaces/checkout/payment-form-values.interface';

export interface CheckoutState {
          userForm: UserFormValues;
          paymentForm: PaymentFormValues;
}
