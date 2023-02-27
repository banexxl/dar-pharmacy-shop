import { UserFormValues } from './user-form-values.interface';
import { CreditCardFormValues } from './credit-card-form-values.interface';

export interface PaymentFormValues {
          sameAsShipping: boolean;
          billingAddress: UserFormValues;
          creditCard: CreditCardFormValues;
}
