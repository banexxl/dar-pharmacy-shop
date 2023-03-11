import { FormikErrors, FormikTouched } from "formik";
import { ChangeEvent } from "react";

export interface ICreditCardFormValues {
          cardNumber: string;
          expiryDate: string;
          securityCode: string;
}

export interface ICreditCardProps {
          formName?: string;
          errors?: FormikErrors<ICreditCardFormValues>;
          touched?: FormikTouched<ICreditCardFormValues>;
          values: ICreditCardFormValues;
          handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const initialCreditCardValues: ICreditCardFormValues = {
          cardNumber: '',
          expiryDate: '',
          securityCode: '',
};
