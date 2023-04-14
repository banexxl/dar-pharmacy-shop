import { FormikErrors, FormikTouched } from "formik";
import { ChangeEvent } from "react";

export interface ICreditCardForm {
          cardNumber: string;
          expirationDate: string;
          securityCode: string;
}

export interface ICreditCardFormProps {
          isLoading?: boolean;
          formName: string;
          tabIndex?: number;
          setTab?: (tabIndex: number) => number;
          errors?: FormikErrors<ICreditCardForm>;
          touched?: FormikTouched<ICreditCardForm>;
          values?: ICreditCardForm;
          handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const initialCreditCardValues: ICreditCardForm = {
          cardNumber: '',
          expirationDate: '',
          securityCode: '',
};
