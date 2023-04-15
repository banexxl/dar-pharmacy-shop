import * as yup from 'yup';

export const creditCardSchema = (t: any) => yup.object().shape({
          cardNumber: yup
                    .string()
                    .required('Card number is required')
                    .matches(
                              (/^4[0-9]{12}(?:[0-9]{3})?$/) || (/^5[1-5][0-9]{14}$/) || (/^3[47][0-9]{13}$/) || (/^6(?:011|5[0-9][0-9])[0-9]{12}$/) || (/^(?:2131|1800|35\d{3})\d{11}$/), // Matches Visa card numbers
                              'Invalid card number'
                    ),
          expirationDate: yup
                    .string()
                    .required('Expiration date is required')
                    .matches(
                              /^(0[1-9]|1[0-2])\/([0-9]{2})$/, // Matches MM/YY format
                              'Invalid expiration date'
                    ),
          securityCode: yup.string().required('CVV is required').matches(/^[0-9]{3,4}$/, 'Invalid CVV'), // Matches 3 or 4 digit numbers
});
