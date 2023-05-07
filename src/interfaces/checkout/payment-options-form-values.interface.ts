import dayjs, { Dayjs } from "dayjs";
import { FormikErrors, FormikTouched } from "formik";
import { ChangeEvent } from "react";


export interface IPaymentOptionsForm {
          cardNumber: number | null;
          expirationDate: Dayjs | null;
          securityCode: string;
          paymentOption: string;
}

export interface IPaymentOptionsFormProps {
          isLoading?: boolean;
          formName: string;
          tabIndex?: number;
          setTab?: (tabIndex: number) => number;
          errors?: FormikErrors<IPaymentOptionsForm>;
          touched?: FormikTouched<IPaymentOptionsForm>;
          values?: IPaymentOptionsForm;
          handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const initialCreditCardValues: IPaymentOptionsForm = {
          cardNumber: null,
          expirationDate: null,
          securityCode: '',
          paymentOption: 'onDelivery'
};
