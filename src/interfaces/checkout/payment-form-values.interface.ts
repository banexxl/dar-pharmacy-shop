import { FormikErrors, FormikTouched } from "formik";

export interface IPaymentForm {
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

export interface IPaymentFormProps {
          sameAsShipping: boolean
          tabIndex?: number
          setTab?: (tabIndex: number) => number
          formName: string
          errors?: FormikErrors<IPaymentForm>
          touched?: FormikTouched<IPaymentForm>
}