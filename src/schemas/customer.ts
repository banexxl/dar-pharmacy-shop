import { bool, object, string } from 'yup';

export interface Customer {
     id: string;
     user_id: string;
     full_name: string;
     phone_number: string;
     street_address: string;
     city: string;
     province_state: string | null;
     country: string;
     avatar: string | null;
     zip_postal_code: string;
     email: string;
     is_banned?: boolean;
     banned_until?: string | null;
     created_at: string;
     updated_at: string;
}

export const customerFormSchema = () => {
     return object().shape({
          full_name: string()
               .required('Ovo polje je obavezno')
               .max(40, 'Ovo polje je predugačko, max 40'),

          street_address: string()
               .required('Ovo polje je obavezno')
               .max(100, 'Ovo polje je predugačko, max 100'),

          phone_number: string()
               .required('Ovo polje je obavezno')
               .max(25, 'Ovo polje je predugačko, max 25'),

          city: string()
               .required('Ovo polje je obavezno')
               .max(25, 'Ovo polje je predugačko, max 25'),

          province_state: string()
               .notRequired()
               .max(25, 'Ovo polje je predugačko, max 25'),

          country: string()
               .required('Ovo polje je obavezno')
               .max(25, 'Ovo polje je predugačko, max 25'),

          zip_postal_code: string()
               .required('Ovo polje je obavezno')
               .min(1, 'Ovo polje je prekratko, min 1')
               .max(10, 'Ovo polje je predugačko, max 10'),

          email: string()
               .email('Ovo polje mora biti email!')
               .required('Ovo polje je obavezno!')
               .test(
                    'checkUnique',
                    'Ovaj email je već registrovan!',
                    async (value: any) => {
                         if (!value) return true;
                         try {
                              const response = await fetch('/api/email/check-verified', {
                                   method: 'POST',
                                   headers: { 'Content-Type': 'application/json' },
                                   body: JSON.stringify({ email: value }),
                              });
                              const data = await response.json();
                              if (data.status === 200) return false;
                              return true;
                         } catch {
                              return true;
                         }
                    }
               ),

          should_create_account: bool(),
     });
};