import { FormikContextType, FormikErrors, FormikTouched } from "formik";
import { Session } from "next-auth";

export interface IUserForm {
     name: string;
     streetAddress: string;
     phoneNumber: string;
     city: string;
     provinceState?: string;
     country: string;
     zipPostalCode: string;
     email: string;
     // password?: string;
     // repeatPassword?: string;
     shouldCreateAccount?: boolean;
     emailVerified?: Date | null;
     image?: string;
     gender?: 'male' | 'female'
}

export interface IEmailForm {
     email: string
}

export const initialEmailFormValues: IEmailForm = {
     email: ''
}

export const initialUserFormValues: IUserForm = {
     name: '',
     streetAddress: '',
     phoneNumber: '',
     city: '',
     provinceState: '',
     country: '',
     zipPostalCode: '',
     email: '',
     // password: '',
     // repeatPassword: '',
     shouldCreateAccount: false,
     emailVerified: null
};

export interface IUserFormProps {
     isLoading?: boolean;
     tabIndex?: number
     setTab?: (tabIndex: number) => number
     formName: string
     errors?: FormikErrors<IUserForm>
     touched?: FormikTouched<IUserForm>
     formik?: FormikContextType<IUserForm>
}
