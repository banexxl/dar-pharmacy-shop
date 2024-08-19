import { bool, object, string, ref, date, ValidationError } from 'yup';


export const userFormSchema = () => {
     return object().shape({
          name: string()
               .required("Ovo polje je obavezno")
               .max(40, "Ovo polje je predugačko, max 40"),

          streetAddress: string()
               .required("Ovo polje je obavezno")
               .max(100, "Ovo polje je predugačko, max 100"),

          phoneNumber: string()
               .required("Ovo polje je obavezno")
               .max(25, "Ovo polje je predugačko, max 25"),

          city: string()
               .required("Ovo polje je obavezno")
               .max(25, "Ovo polje je predugačko, max 25"),

          provinceState: string()
               .notRequired()
               .max(25, "Ovo polje je predugačko, max 25"),

          country: string()
               .required("Ovo polje je obavezno")
               .max(25, "Ovo polje je predugačko, max 25"),

          image: string(),

          emailVerified: date().nullable(),

          zipPostalCode: string()
               .required("Ovo polje je obavezno")
               .min(1, "Ovo polje je prekratko, min 1")
               .max(10, "Ovo polje je predugačko, max 10"),
          email: string()
               .email("Ovo polje mora biti email!")
               .required("Ovo polje je obavezno!")
               .test(
                    'checkUnique',
                    'Ovaj email je već registrovan',
                    async (value: any) => {
                         if (!value) return true; // Skip validation if the email field is empty

                         try {
                              const response = await fetch('/api/email/check-if-email-exists', {
                                   method: 'POST',
                                   headers: {
                                        'Content-Type': 'application/json',
                                   },
                                   body: JSON.stringify(value),
                              });

                              const data = await response.json();

                              // Assuming 200 means the email is taken, and 202 means the email is available
                              if (data.status === 200) {
                                   return false; // Email already exists
                              } else if (data.status === 202) {
                                   return true; // Email is available
                              } else {
                                   return new ValidationError(
                                        'Došlo je do greške pri proveri emaila',
                                        value,
                                        'email'
                                   );
                              }
                         } catch (error) {
                              return new ValidationError(
                                   'Došlo je do greške pri proveri emaila',
                                   value,
                                   'email'
                              );
                         }
                    }
               ),
          shouldCreateAccount: bool(),
          // password: string()
          //      .when('shouldCreateAccount', (shouldCreateAccount, schema) => {
          //           if (shouldCreateAccount[0]) {
          //                return schema
          //                     .required('Ovo polje je obavezno!')
          //                     .min(8, 'Ovo polje je prekratko, min 8!')
          //                     .max(40, 'Ovo polje je predugačko, max 40!');
          //           }
          //           return schema.notRequired();
          //      }),
          // repeatPassword: string()
          //      .when('shouldCreateAccount', (shouldCreateAccount, schema) => {
          //           if (shouldCreateAccount[0]) {
          //                return schema
          //                     .required('Ovo polje je obavezno!')
          //                     .oneOf([ref('password')], 'Šifre se ne poklapaju!');
          //           }
          //           return schema.notRequired();
          //      }),
     });
};
