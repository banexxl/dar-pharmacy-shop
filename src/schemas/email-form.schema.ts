import * as Yup from "yup";

export const userEmailSchema = Yup.object().shape({
     email: Yup.string()
          .required("Ovo polje je obavezno!")
          .email("Ovo polje mora biti email!"),
});

export const subscriptionEmailSchema = Yup.object().shape({
     email: Yup.string()
          .required("Ovo polje je obavezno!")
          .email("Ovo polje mora biti email!"),
     agreedToTerms: Yup.boolean().required("Ovo polje je obavezno!"),
});