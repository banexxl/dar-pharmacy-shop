import { initialDevlieryFormValues } from '../components/checkout/delivery/delivery-form-values.initial';
import { initialPaymentFormValues } from '../components/checkout/payment/payment-form-values.initial';

import { CheckoutState } from './checkout-state.interface';

export const initialCheckoutState: CheckoutState = {
          deliveryForm: initialDevlieryFormValues,
          paymentForm: initialPaymentFormValues,
};
