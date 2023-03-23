import { IUserForm } from '@/interfaces/checkout/user-form-values.interface';
import { IPaymentForm } from '../../interfaces/checkout/payment-form-values.interface';

export interface ICheckoutState {
          userForm: IUserForm;
          paymentForm: IPaymentForm;
}
