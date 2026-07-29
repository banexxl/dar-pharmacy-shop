import { Customer } from '@/schemas/customer';
import { FormikContextType, FormikErrors, FormikTouched } from 'formik';

export const initialUserFormValues: Customer = {
     full_name: '',
     street_address: '',
     phone_number: '',
     city: '',
     province_state: '',
     country: '',
     zip_postal_code: '',
     email: '',
     id: '',
     user_id: '',
     avatar: null,
     created_at: '',
     updated_at: ''
};

export interface IUserFormProps {
     isLoading?: boolean;
     tabIndex?: number;
     setTab?: (tabIndex: number) => number;
     formName: string;
     errors?: FormikErrors<Customer>;
     touched?: FormikTouched<Customer>;
     formik?: FormikContextType<Customer>;
}
