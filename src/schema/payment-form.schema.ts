import { TFunction } from 'i18next';
import { boolean, object } from 'yup';

import { userFormSchema } from './user-form.schema';
import { creditCardSchema } from './credit-card-form.schema';

export const paymentFormSchema = (t: TFunction) =>
          object().shape({
                    sameAsShipping: boolean(),
                    billingAddress: userFormSchema(t),
                    creditCard: creditCardSchema(t),
          });
