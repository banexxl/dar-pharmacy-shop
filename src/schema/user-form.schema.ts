import { TFunction } from 'i18next';
import { object, string } from 'yup';

export const userFormSchema = (t: any) => {
          return object().shape({
                    firstName: string()
                              .required(
                                        t('errorMessages.required', { fieldName: t('address.firstName') })
                              )
                              .max(30, t('errorMessages.tooLong', { max: 30 })),
                    lastName: string()
                              .required(
                                        t('errorMessages.required', { fieldName: t('address.lastName') })
                              )
                              .max(30, t('errorMessages.tooLong', { max: 30 })),
                    streetAddress: string()
                              .required(
                                        t('errorMessages.required', { fieldName: t('address.streetAddress') })
                              )
                              .max(200, t('errorMessages.tooLong', { max: 100 })),
                    phoneNumber: string().required(t('errorMessages.required', { max: 15 })),
                    city: string()
                              .required(
                                        t('errorMessages.required', { fieldName: t('address.city') })
                              )
                              .max(30, t('errorMessages.tooLong', { max: 30 })),
                    provinceState: string()
                              .notRequired()
                              .max(30, t('errorMessages.tooLong', { max: 30 })),
                    country: string()
                              .required(
                                        t('errorMessages.required', { fieldName: t('address.country') })
                              )
                              .max(30, t('errorMessages.tooLong', { max: 30 })),
                    zipPostalCode: string()
                              .required(
                                        t('errorMessages.required', { fieldName: t('address.zipPostalCode') })
                              )
                              .min(5, t('errorMessages.tooShort', { min: 5 }))
                              .max(7, t('errorMessages.tooLong', { max: 7 })),
                    email: string().required().email()
          });
};
