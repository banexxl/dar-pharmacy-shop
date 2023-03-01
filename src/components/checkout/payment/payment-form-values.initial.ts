import { initialUserFormValues } from '../userinfo/userinfo-form-values.initial';
import { initialCreditCardValues } from '../credit-card/credit-card-form-values.initial';

import { IPaymentFormValues } from '../../../interfaces/checkout/payment-form-values.interface';

export const initialPaymentFormValues: IPaymentFormValues = {
          sameAsShipping: false,
          billingAddress: initialUserFormValues,
          creditCard: initialCreditCardValues,
};
