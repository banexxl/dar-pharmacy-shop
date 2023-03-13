import { initialUserFormValues, IUserFormValues } from './user-form-values.interface';

export interface IPaymentFormValues {
          sameAsShipping: boolean;
          billingAddress?: IUserFormValues;
}

export const initialPaymentFormValues: IPaymentFormValues = {
          sameAsShipping: false,
          billingAddress: initialUserFormValues,
};