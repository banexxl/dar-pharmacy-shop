import { object, string } from 'yup';

export const contactFormSchema = (t: any) => {
          return object().shape({
                    firstName: string()
                              .required(t('errorMessages.required', { fieldName: t('userinfo.firstName') }))
                              .max(30, t('errorMessages.tooLong', { max: 30 })),
                    email: string()
                              .required(t('errorMessages.required', { fieldName: t('userinfo.email') }))
                              .email(t('errorMessages.email', { fieldName: t('userinfo.email') })),
                    contactMessage: string()
                              .required(t('errorMessages.required', { contactMessage: t('userinfo.contactMessage') }))
          });
};