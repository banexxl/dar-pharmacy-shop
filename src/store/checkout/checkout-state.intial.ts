
import { initialPaymentFormValues } from '@/components/checkout/payment/payment-form-values.initial';
import { initialUserFormValues } from '@/components/checkout/userinfo/userinfo-form-values.initial';

import { CheckoutState } from './checkout-state.interface';

export const initialCheckoutState: CheckoutState = {
          userForm: initialUserFormValues,
          paymentForm: initialPaymentFormValues,
};
