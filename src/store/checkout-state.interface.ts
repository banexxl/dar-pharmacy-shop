import { DeliveryFormValues } from '../interfaces/checkout/delivery-form-values.interface';
import { PaymentFormValues } from '../interfaces/checkout/payment-form-values.interface';

export interface CheckoutState {
          deliveryForm: DeliveryFormValues;
          paymentForm: PaymentFormValues;
}
