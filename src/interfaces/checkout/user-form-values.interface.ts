import { FormikErrors, FormikTouched } from "formik";

export interface IUserFormValues {
          firstName: string;
          lastName: string;
          streetAddress: string;
          phoneNumber: string;
          city: string;
          provinceState?: string;
          country: string;
          zipPostalCode: string;
          email?: string;
}

export const initialUserFormValues: IUserFormValues = {
          firstName: '',
          lastName: '',
          streetAddress: '',
          phoneNumber: '',
          city: '',
          provinceState: '',
          country: '',
          zipPostalCode: '',
          email: ''
};

export interface IUserFormProps {
          tabIndex?: number
          setTab?: (tabIndex: number) => number
          formName: string
          errors?: FormikErrors<IUserFormValues>
          touched?: FormikTouched<IUserFormValues>
}

