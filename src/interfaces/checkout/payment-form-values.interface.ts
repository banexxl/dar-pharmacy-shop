import { initialUserFormValues, IUserForm } from './user-form-values.interface';

export interface IPaymentForm {
          setTab?: (tabIndex: number) => number
          sameAsShipping: boolean;
          billingAddress?: IUserForm;
}

export const initialPaymentFormValues: IPaymentForm = {
          sameAsShipping: false,
          billingAddress: initialUserFormValues,
};