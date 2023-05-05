import { object, string } from 'yup';

export const contactFormSchema = (t: any) => {
          return object().shape({
                    name: string()
                              .required(t('errorMessages.required', { fieldName: t('contact.name') }))
                              .max(30, t('errorMessages.tooLong', { max: 30 })),
                    email: string()
                              .required(t('errorMessages.required', { fieldName: t('contact.email') }))
                              .email(t('errorMessages.email', { fieldName: t('contact.email') })),
                    message: string()
                              .required(t('errorMessages.required', { fieldName: t('contact.message') }))
          });
};