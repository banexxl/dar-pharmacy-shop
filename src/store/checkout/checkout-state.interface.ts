import { ICart } from '@/interfaces/cart/cart.interface';
import { ICreditCard } from '@/interfaces/checkout/credit-card-form-values.interface';
import { IUserForm } from '@/interfaces/checkout/user-form-values.interface';
import { IPaymentForm } from '../../interfaces/checkout/payment-form-values.interface';

export interface ICheckoutState {
          userForm: IUserForm;
          paymentForm: IPaymentForm;
          creditCardForm: ICreditCard;
}
