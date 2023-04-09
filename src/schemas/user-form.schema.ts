import { TFunction } from 'i18next';
import { boolean, object, string } from 'yup';

export const userFormSchema = (t: any) => {
          return object().shape({
                    firstName: string()
                              .required(t('errorMessages.required', { fieldName: t('userinfo.firstName') }))
                              .max(30, t('errorMessages.tooLong', { max: 30 })),

                    lastName: string()
                              .required(t('errorMessages.required', { fieldName: t('userinfo.lastName') }))
                              .max(30, t('errorMessages.tooLong', { max: 30 })),

                    streetAddress: string()
                              .required(t('errorMessages.required', { fieldName: t('userinfo.streetAddress') }))
                              .max(100, t('errorMessages.tooLong', { max: 100 })),

                    phoneNumber: string()
                              .required(t('errorMessages.required', { fieldName: t('userinfo.phoneNumber') }))
                              .max(100, t('errorMessages.tooLong', { max: 100 })),

                    city: string()
                              .required(t('errorMessages.required', { fieldName: t('userinfo.city') }))
                              .max(30, t('errorMessages.tooLong', { max: 30 })),

                    provinceState: string()
                              .notRequired()
                              .max(30, t('errorMessages.tooLong', { max: 30 })),

                    country: string()
                              .required(t('errorMessages.required', { fieldName: t('userinfo.country') }))
                              .max(30, t('errorMessages.tooLong', { max: 30 })),

                    zipPostalCode: string()
                              .required(t('errorMessages.required', { fieldName: t('userinfo.zipPostalCode') }))
                              .min(5, t('errorMessages.tooShort', { min: 5 }))
                              .max(7, t('errorMessages.tooLong', { max: 7 })),
          });
};

export const userEmailSchema = (t: any) => {
          return object().shape({
                    email: string().
                              required(t('errorMessages.required', { fieldName: t('userinfo.email') }))
                              .email(t('errorMessages.email', { fieldName: t('userinfo.email') })),
          })
}
