import { bool, object, string, ref, date } from 'yup';


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
               .required("Ovo polje je obavezno!")
               .email("Ovo polje mora biti email!"),
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
