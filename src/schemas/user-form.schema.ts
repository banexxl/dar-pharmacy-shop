import { TFunction } from 'i18next';
import { object, string } from 'yup';

export const userFormSchema = () => {
          return object().shape({
                    firstName: string()
                              .required("Ovo polje je obavezno")
                              .max(30, "Ovo polje je predugačko, max 30"),

                    lastName: string()
                              .required("Ovo polje je obavezno")
                              .max(30, "Ovo polje je predugačko, max 30"),

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

                    zipPostalCode: string()
                              .required("Ovo polje je obavezno")
                              .min(1, "Ovo polje je prekratko, min 1")
                              .max(10, "Ovo polje je predugačko, max 10"),
                    email: string()
                              .required("Ovo polje je obavezno")
                              .email("Ovo polje mora biti email"),
          });
};
