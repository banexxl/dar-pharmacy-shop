import { object, string } from 'yup';

export const userEmailSchema = (t: any) => {
          return object().shape({
                    email: string().
                              required(t('errorMessages.required', { fieldName: t('userinfo.email') }))
                              .email(t('errorMessages.email', { fieldName: t('userinfo.email') })),
          })
}
