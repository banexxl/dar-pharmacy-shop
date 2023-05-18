import { FormikErrors, FormikTouched } from "formik";

export interface IUserForm {
          firstName: string;
          lastName: string;
          streetAddress: string;
          phoneNumber: string;
          city: string;
          provinceState?: string;
          country: string;
          zipPostalCode: string;
          email: string;
}

export interface IEmailForm {
          email: string
}

export const initialEmailFormValues: IEmailForm = {
          email: ''
}

export const initialUserFormValues: IUserForm = {
          firstName: '',
          lastName: '',
          streetAddress: '',
          phoneNumber: '',
          city: '',
          provinceState: '',
          country: '',
          zipPostalCode: '',
          email: '',
};

export interface IUserFormProps {
          isLoading?: boolean;
          tabIndex?: number
          setTab?: (tabIndex: number) => number
          formName: string
          errors?: FormikErrors<IUserForm>
          touched?: FormikTouched<IUserForm>
}