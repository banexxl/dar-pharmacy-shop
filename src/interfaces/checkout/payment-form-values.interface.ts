import { initialUserFormValues, IUserFormValues } from './user-form-values.interface';

export interface IPaymentFormValues {
          tabIndex: number;
          sameAsShipping: boolean;
          billingAddress?: IUserFormValues;
}

export const initialPaymentFormValues: IPaymentFormValues = {
          tabIndex: 1,
          sameAsShipping: false,
          billingAddress: initialUserFormValues,
};