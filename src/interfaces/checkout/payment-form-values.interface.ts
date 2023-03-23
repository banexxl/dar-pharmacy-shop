import { initialUserFormValues, IUserForm } from './user-form-values.interface';

export interface IPaymentForm {
          setTab?: (tabIndex: number) => number
          sameAsShipping: boolean;
          firstName?: string;
          lastName?: string;
          streetAddress?: string;
          phoneNumber?: string;
          city?: string;
          provinceState?: string;
          country?: string;
          zipPostalCode?: string;
}

export const initialPaymentFormValues: IPaymentForm = {
          sameAsShipping: false,
          firstName: '',
          lastName: '',
          streetAddress: '',
          phoneNumber: '',
          city: '',
          provinceState: '',
          country: '',
          zipPostalCode: '',
};