import { bool, object, string } from 'yup';

export const contactFormSchema = () => {
     return object().shape({
          name: string()
               .required("Ovo polje je obavezno")
               .max(30, "Ovo polje je predugačko"),
          email: string()
               .required("Ovo polje je obavezno")
               .email("Ovo polje mora biti email"),
          message: string()
               .required("Ovo polje je obavezno"),
          dataProcessConsent: bool()
               .isTrue("Ovo polje je obavezno"),
          questionSubmissionConsent: bool()
               .isTrue("Ovo polje je obavezno")

     });
};