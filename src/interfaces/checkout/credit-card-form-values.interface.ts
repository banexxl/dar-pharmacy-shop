import { FormikErrors, FormikTouched } from "formik";
import { ChangeEvent } from "react";

export interface ICreditCard {
          cardNumber: string;
          expiryDate: string;
          securityCode: string;
}

export interface ICreditCardForm {
          formName?: string;
          errors?: FormikErrors<ICreditCard>;
          touched?: FormikTouched<ICreditCard>;
          values: ICreditCard;
          handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const initialCreditCardValues: ICreditCard = {
          cardNumber: '',
          expiryDate: '',
          securityCode: '',
};
