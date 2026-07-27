'use server';

import { createServiceRoleClient } from '@/lib/supabase/service-role';

export interface RegisterFormData {
  full_name: string;
  street_address: string;
  phone_number: string;
  city: string;
  province_state?: string;
  country: string;
  zip_postal_code: string;
  email: string;
  gender?: 'male' | 'female';
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
    return { status: 'fail', message: validation };
  }

  const email = formData.email.trim().toLowerCase();

  try {
    const serviceClient = createServiceRoleClient();

    const { data: existingCustomer } = await serviceClient
      .from('customers')
      .select('id, user_id, email')
      .eq('email', email)
      .single();

    if (existingCustomer) {
      if (existingCustomer.user_id) {
        return { status: 'exists', message: 'Korisnik sa ovim emailom već postoji.' };
      }

      const { data: authData, error: signUpError } =
        await serviceClient.auth.admin.createUser({ email, email_confirm: false });

      if (signUpError) {
        if (signUpError.message?.includes('already been registered')) {
          return { status: 'exists', message: 'Korisnik sa ovim emailom već postoji.' };
        }
        console.error('Registration auth error (migrated):', signUpError.message);
        return { status: 'fail', message: 'Greška pri registraciji. Pokušajte ponovo.' };
      }

      if (authData.user) {
        await serviceClient
          .from('customers')
          .update({
            user_id: authData.user.id,
            full_name: formData.full_name,
            phone_number: formData.phone_number,
            street_address: formData.street_address,
            city: formData.city,
            province_state: formData.province_state || null,
            country: formData.country,
            zip_postal_code: formData.zip_postal_code,
            gender: formData.gender || null,
          })
          .eq('id', existingCustomer.id);
      }

      return { status: 'success', message: 'Uspešna registracija! Proverite vaš email za verifikaciju.' };
    }

    const { data: authData, error: signUpError } =
      await serviceClient.auth.admin.createUser({ email, email_confirm: false });

    if (signUpError) {
      if (signUpError.message?.includes('already been registered')) {
        return { status: 'exists', message: 'Korisnik sa ovim emailom već postoji.' };
      }
      console.error('Registration auth error:', signUpError.message);
      return { status: 'fail', message: 'Greška pri registraciji. Pokušajte ponovo.' };
    }

    if (!authData.user) {
      return { status: 'fail', message: 'Greška pri registraciji. Pokušajte ponovo.' };
    }

    const { error: customerError } = await serviceClient
      .from('customers')
      .insert({
        user_id: authData.user.id,
        full_name: formData.full_name,
        phone_number: formData.phone_number,
        street_address: formData.street_address,
        city: formData.city,
        province_state: formData.province_state || null,
        country: formData.country,
        zip_postal_code: formData.zip_postal_code,
        email,
        gender: formData.gender || null,
        is_banned: false,
      });

    if (customerError) {
      console.error('Registration customer insert error:', customerError.message);
      await serviceClient.auth.admin.deleteUser(authData.user.id);
      return { status: 'fail', message: 'Greška pri registraciji. Pokušajte ponovo.' };
    }

    return { status: 'success', message: 'Uspešna registracija! Proverite vaš email za verifikaciju.' };
  } catch (error) {
    console.error('Registration unexpected error:', error);
    return { status: 'fail', message: 'Greška pri registraciji. Pokušajte ponovo.' };
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
