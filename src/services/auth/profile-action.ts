'use server';

import { createClient } from "../supabase/server";


export interface ProfileUpdateData {
  full_name: string;
  phone_number: string;
  street_address: string;
  city: string;
  province_state?: string;
  country: string;
  zip_postal_code: string;
}

export interface ProfileUpdateResult {
  success: boolean;
  error?: string;
}

/**
 * Update the authenticated user's customer profile.
 */
export async function updateProfile(
  data: ProfileUpdateData
): Promise<ProfileUpdateResult> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { success: false, error: 'Niste prijavljeni.' };
  }

  // Validate
  if (!data.full_name?.trim()) return { success: false, error: 'Ime je obavezno.' };
  if (!data.phone_number?.trim()) return { success: false, error: 'Telefon je obavezan.' };
  if (!data.street_address?.trim()) return { success: false, error: 'Adresa je obavezna.' };
  if (!data.city?.trim()) return { success: false, error: 'Grad je obavezan.' };
  if (!data.country?.trim()) return { success: false, error: 'Država je obavezna.' };
  if (!data.zip_postal_code?.trim()) return { success: false, error: 'Poštanski broj je obavezan.' };

  const { error } = await supabase
    .from('customers')
    .update({
      full_name: data.full_name.trim(),
      phone_number: data.phone_number.trim(),
      street_address: data.street_address.trim(),
      city: data.city.trim(),
      province_state: data.province_state?.trim() || null,
      country: data.country.trim(),
      zip_postal_code: data.zip_postal_code.trim(),
    })
    .eq('user_id', user.id);

  if (error) {
    console.error('Profile update error:', error.message);
    return { success: false, error: 'Greška pri čuvanju podataka.' };
  }

  return { success: true };
}
