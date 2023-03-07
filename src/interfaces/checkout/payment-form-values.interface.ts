import { IUserFormValues } from './user-form-values.interface';
import { ICreditCardFormValues } from './credit-card-form-values.interface';

export interface IPaymentFormValues {
          sameAsShipping: boolean;
          billingAddress?: IUserFormValues;
          creditCard: ICreditCardFormValues;
}
