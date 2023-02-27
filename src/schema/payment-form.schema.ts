import { TFunction } from 'i18next';
import { boolean, object } from 'yup';

import { userFormSchema } from './user-form.schema';
import { creditCardSchema } from './credit-card-form.schema';

export const paymentFormSchema = (t: TFunction) =>
          object().shape({
                    sameAsShipping: boolean(),
                    // billingAddress: object().when('sameAsShipping', {
                    //           is: (sameAsShipping: boolean) => !sameAsShipping,
                    //           then: addressFormSchema(t),
                    // }),
                    creditCard: creditCardSchema(t),
          });
