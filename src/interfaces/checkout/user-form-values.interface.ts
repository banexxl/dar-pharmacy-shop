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

export interface IUserFormProps {
          formName: string
          errors?: FormikErrors<IUserFormValues>
          touched?: FormikTouched<IUserFormValues>
}

