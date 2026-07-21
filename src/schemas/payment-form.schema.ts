import * as yup from 'yup';

export const creditCardSchema = () => yup.object().shape({
     cardNumber: yup
          .string()
          .required('Card number is required')
          .matches(
               /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|6(?:011|5[0-9][0-9])[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/, // Matches Visa, Mastercard, Amex, Discover, and JCB card numbers
               'Invalid card number'
          ),
     expirationDate: yup
          .object()
          .required('required')
          .default(undefined)
          .shape({
               '$D': yup.number().required('Required'),
               '$H': yup.number().required('Required'),
               '$L': yup.string().required('Required'),
               '$M': yup.number().required('Required'),
               '$W': yup.number().required('Required'),
               '$d': yup.string().required('Required'),
               '$m': yup.number().required('Required'),
               '$ms': yup.number().required('Required'),
               '$s': yup.number().required('Required'),
               '$x': yup.object().required('Required'),
               '$y': yup.number().required('Required'),
          }),
     securityCode: yup.string().required('CVV is required').matches(/^[0-9]{3,4}$/, 'Invalid CVV'), // Matches 3 or 4 digit numbers
});
