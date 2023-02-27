
import { initialUserFormValues } from '@/components/checkout/address/address-form-values.initial';
import { initialPaymentFormValues } from '../components/checkout/payment/payment-form-values.initial';

import { CheckoutState } from './checkout-state.interface';

export const initialCheckoutState: CheckoutState = {
          userForm: initialUserFormValues,
          paymentForm: initialPaymentFormValues,
};
