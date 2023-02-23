import { DeliveryFormValues } from '../components/checkout/delivery/delivery-form-values.interface';
import { PaymentFormValues } from '../components/checkout/payment/payment-form-values.interface';

export interface CheckoutState {
          deliveryForm: DeliveryFormValues;
          paymentForm: PaymentFormValues;
}
