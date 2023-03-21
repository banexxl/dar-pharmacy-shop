import { initialUserFormValues, IUserFormValues } from './user-form-values.interface';

export interface IPaymentFormProps {
          setTab?: (tabIndex: number) => number
          sameAsShipping: boolean;
          billingAddress?: IUserFormValues;
}

export const initialPaymentFormValues: IPaymentFormProps = {
          sameAsShipping: false,
          billingAddress: initialUserFormValues,
};