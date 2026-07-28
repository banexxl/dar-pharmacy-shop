import { FormikContextType, FormikErrors, FormikTouched } from 'formik';

export interface IUserForm {
     full_name: string;
     street_address: string;
     phone_number: string;
     city: string;
     province_state?: string;
     country: string;
     zip_postal_code: string;
     email: string;
     should_create_account?: boolean;
}

export interface IEmailForm {
     email: string;
}

export const initialEmailFormValues: IEmailForm = {
     email: '',
};

export const initialUserFormValues: IUserForm = {
     full_name: '',
     street_address: '',
     phone_number: '',
     city: '',
     province_state: '',
     country: '',
     zip_postal_code: '',
     email: '',
     should_create_account: false,
};

export interface IUserFormProps {
     isLoading?: boolean;
     tabIndex?: number;
     setTab?: (tabIndex: number) => number;
     formName: string;
     errors?: FormikErrors<IUserForm>;
     touched?: FormikTouched<IUserForm>;
     formik?: FormikContextType<IUserForm>;
}
