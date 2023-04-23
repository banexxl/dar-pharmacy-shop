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
          paymentOption: string;
}

export interface IEmailForm {
          email: string
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
          paymentOption: 'onDelivery'
};

export const initialEmailFormValues: IEmailForm = {
          email: ''
};

export interface IUserFormProps {
          isLoading?: boolean;
          tabIndex?: number
          setTab?: (tabIndex: number) => number
          formName: string
          errors?: FormikErrors<IUserForm>
          touched?: FormikTouched<IUserForm>
}

