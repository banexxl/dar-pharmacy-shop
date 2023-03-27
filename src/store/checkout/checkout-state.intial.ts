
import { initialCreditCardValues } from '@/interfaces/checkout/credit-card-form-values.interface';
import { initialPaymentFormValues } from '@/interfaces/checkout/payment-form-values.interface';
import { initialUserFormValues } from '@/interfaces/checkout/user-form-values.interface';
import { ICheckoutState } from './checkout-state.interface';

export const initialCheckoutState: ICheckoutState = {
          userForm: initialUserFormValues,
          paymentForm: initialPaymentFormValues,
          creditCardForm: initialCreditCardValues,
          checkoutState: undefined
};
