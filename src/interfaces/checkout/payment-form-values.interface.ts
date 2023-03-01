import { IUserFormValues } from './user-form-values.interface';
import { CreditCardFormValues } from './credit-card-form-values.interface';

export interface PaymentFormValues {
          sameAsShipping: boolean;
          billingAddress: IUserFormValues;
          creditCard: CreditCardFormValues;
}
