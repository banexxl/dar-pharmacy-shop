import { boolean, object, string } from 'yup';

export const userEmailSchema = () => {
          return object().shape({
                    email: string().
                              required("Ovo polje je obavezno!")
                              .email("Ovo polje mora biti email!"),
          })
}

export const subscriptionEmailSchema = () => {
          return object().shape({
                    email: string().
                              required("Ovo polje je obavezno!")
                              .email("Ovo polje mora biti email!"),
                    agreedToTerms: boolean().required("Ovo polje je obavezno!")
          })
}