'use server';

import { createServiceRoleClient } from '@/lib/supabase/service-role';
import { createClient } from '../supabase/server';

export interface RegisterFormData {
  full_name: string;
  street_address: string;
  phone_number: string;
  city: string;
  province_state?: string;
  country: string;
  zip_postal_code: string;
  email: string;
  password: string;
}

export interface RegisterResult {
  status: 'success' | 'exists' | 'fail';
  message: string;
}

export interface RegisterFormData {
  full_name: string;
  street_address: string;
  phone_number: string;
  city: string;
  province_state?: string;
  country: string;
  zip_postal_code: string;
  email: string;
  password: string;
}

export interface RegisterResult {
  status: 'success' | 'exists' | 'fail';
  message: string;
}

export async function registerCustomer(
  formData: RegisterFormData
): Promise<RegisterResult> {
  const validation = validateForm(formData);

  if (validation) {
    return {
      status: 'fail',
      message: validation,
    };
  }

  const email = formData.email
    .trim()
    .toLowerCase();

  try {
    /*
     * Service role is used only for accessing the customers table
     * without depending on the current user's RLS permissions.
     */
    const serviceClient =
      createServiceRoleClient();

    const {
      data: existingCustomer,
      error: lookupError,
    } = await serviceClient
      .from('customers')
      .select('id, user_id, email')
      .eq('email', email)
      .maybeSingle();

    if (lookupError) {
      console.error(
        'Customer lookup error:',
        lookupError
      );

      return {
        status: 'fail',
        message:
          'Greška pri proveri korisnika. Pokušajte ponovo.',
      };
    }

    if (existingCustomer?.user_id) {
      return {
        status: 'exists',
        message:
          'Korisnik sa ovim emailom već postoji.',
      };
    }

    /*
     * Normal anonymous client is required for signUp().
     * This creates an unconfirmed Auth user and sends
     * the confirmation email.
     */
    const supabase =
      await createClient();

    const {
      data: authData,
      error: signUpError,
    } = await supabase.auth.signUp({
      email,
      password: formData.password,
      options: {
        emailRedirectTo: `${process.env.BASE_URL}/autentifikacija/provera`,
        data: {
          full_name:
            formData.full_name.trim(),
        },
      },
    });

    if (signUpError) {
      console.error(
        'Registration Auth error:',
        signUpError
      );

      if (
        signUpError.message
          .toLowerCase()
          .includes('already registered')
      ) {
        return {
          status: 'exists',
          message:
            'Korisnik sa ovim emailom već postoji.',
        };
      }

      return {
        status: 'fail',
        message:
          'Greška pri registraciji. Pokušajte ponovo.',
      };
    }

    const authUser = authData.user;

    if (!authUser) {
      return {
        status: 'fail',
        message:
          'Nije moguće kreirati korisnički nalog.',
      };
    }

    /*
     * Supabase may intentionally hide whether an email already
     * exists. An empty identities array usually means that no
     * new identity was created.
     */
    if (
      authUser.identities &&
      authUser.identities.length === 0
    ) {
      return {
        status: 'exists',
        message:
          'Korisnik sa ovim emailom već postoji.',
      };
    }

    const customerPayload = {
      user_id: authUser.id,
      full_name:
        formData.full_name.trim(),
      phone_number:
        formData.phone_number.trim(),
      street_address:
        formData.street_address.trim(),
      city: formData.city.trim(),
      province_state:
        formData.province_state?.trim() ||
        null,
      country: formData.country.trim(),
      zip_postal_code:
        formData.zip_postal_code.trim(),
      email,
      is_banned: false,
    };

    if (existingCustomer) {
      const { error: updateError } =
        await serviceClient
          .from('customers')
          .update(customerPayload)
          .eq('id', existingCustomer.id);

      if (updateError) {
        console.error(
          'Migrated customer update error:',
          updateError
        );

        /*
         * The Auth account is not deleted here because the
         * confirmation email may already have been sent.
         * Log this case for manual reconciliation.
         */
        return {
          status: 'fail',
          message:
            'Nalog je kreiran, ali podaci korisnika nisu ažurirani. Kontaktirajte podršku.',
        };
      }
    } else {
      const { error: insertError } =
        await serviceClient
          .from('customers')
          .insert(customerPayload);

      if (insertError) {
        console.error(
          'Customer insert error:',
          insertError
        );

        return {
          status: 'fail',
          message:
            'Nalog je kreiran, ali profil korisnika nije sačuvan. Kontaktirajte podršku.',
        };
      }
    }

    return {
      status: 'success',
      message:
        'Uspešna registracija! Poslali smo vam email za potvrdu naloga.',
    };
  } catch (error) {
    console.error(
      'Registration unexpected error:',
      error
    );

    return {
      status: 'fail',
      message:
        'Greška pri registraciji. Pokušajte ponovo.',
    };
  }
}

export async function checkEmailAvailability(email: string): Promise<{ available: boolean }> {
  try {
    const serviceClient = createServiceRoleClient();
    const normalizedEmail = email.trim().toLowerCase();

    const { data } = await serviceClient
      .from('customers')
      .select('id, user_id')
      .eq('email', normalizedEmail)
      .single();

    if (data && data.user_id) {
      return { available: false };
    }
    return { available: true };
  } catch {
    return { available: true };
  }
}

function validateForm(data: RegisterFormData): string | null {
  if (!data.full_name?.trim()) return 'Ime je obavezno.';
  if (data.full_name.length > 40) return 'Ime je predugačko (max 40).';
  if (!data.street_address?.trim()) return 'Adresa je obavezna.';
  if (data.street_address.length > 100) return 'Adresa je predugačka (max 100).';
  if (!data.phone_number?.trim()) return 'Telefon je obavezan.';
  if (data.phone_number.length > 25) return 'Telefon je predugačak (max 25).';
  if (!data.city?.trim()) return 'Grad je obavezan.';
  if (data.city.length > 25) return 'Grad je predugačak (max 25).';
  if (data.province_state && data.province_state.length > 25) return 'Region je predugačak (max 25).';
  if (!data.country?.trim()) return 'Država je obavezna.';
  if (data.country.length > 25) return 'Država je predugačka (max 25).';
  if (!data.zip_postal_code?.trim()) return 'Poštanski broj je obavezan.';
  if (data.zip_postal_code.length > 10) return 'Poštanski broj je predugačak (max 10).';
  if (!data.email?.trim()) return 'Email je obavezan.';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email.trim())) return 'Email format nije validan.';
  return null;
}
