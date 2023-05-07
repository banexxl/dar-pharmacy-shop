import { FormikErrors, FormikTouched } from "formik";

export interface IPaymentInfoForm {
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

export const initialPaymentFormValues: IPaymentInfoForm = {
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

export interface IPaymentInfoFormProps {
          isLoading?: boolean;
          sameAsShipping: boolean
          tabIndex?: number
          setTab?: (tabIndex: number) => number
          formName: string
          errors?: FormikErrors<IPaymentInfoForm>
          touched?: FormikTouched<IPaymentInfoForm>
}