import { FormikErrors, FormikTouched } from "formik";

export interface UserFormValues {
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

export interface UserFormProps {
          formName: string
          errors?: FormikErrors<UserFormValues>
          touched?: FormikTouched<UserFormValues>
}

