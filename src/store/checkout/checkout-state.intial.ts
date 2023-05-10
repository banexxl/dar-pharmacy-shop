
import { initialCreditCardValues } from '@/interfaces/checkout/payment-options-form-values.interface';
import { initialPaymentFormValues } from '@/interfaces/checkout/payment-info-form-values.interface';
import { initialUserFormValues } from '@/interfaces/checkout/user-form-values.interface';
import { ICheckoutState } from './checkout-state.interface';

export const initialCheckoutState: ICheckoutState = {
          userForm: initialUserFormValues,
          paymentInfoForm: initialPaymentFormValues,
          paymentOptionsForm: initialCreditCardValues,
          // checkoutState: undefined
};
