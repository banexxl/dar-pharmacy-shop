import { FormikErrors, FormikTouched } from "formik";

export interface UserFormValues {
          firstName: string;
          lastName: string;
          addressLine1: string;
          phonenumber: string;
          addressLine2?: string;
          city: string;
          provinceState: string;
          country: string;
          zipPostalCode: string;
          email: string;
}

export interface UserFormProps {
          formName: string
          errors?: FormikErrors<UserFormValues>
          touched?: FormikTouched<UserFormValues>
}

