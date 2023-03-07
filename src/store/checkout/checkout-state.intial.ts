
import { initialPaymentFormValues } from '@/components/checkout/payment/payment-form-values.initial';
import { initialUserFormValues } from '@/components/checkout/userinfo/userinfo-form-values.initial';

import { ICheckoutState } from './checkout-state.interface';

export const initialCheckoutState: ICheckoutState = {
          userForm: initialUserFormValues,
          paymentForm: initialPaymentFormValues,
};
