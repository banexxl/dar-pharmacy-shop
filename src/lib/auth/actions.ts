'use server';

import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export type ErrorType = {
  code: string;
  details: string;
  hint?: string;
  message?: string;
}

/**
 * Sign in with email magic link (OTP).
 * Sends a one-time login link to the user's email.
 */
export async function signInWithEmail(email: string) {
  const supabase = await createClient();
  const siteUrl = process.env.BASE_URL || 'http://localhost:3000';

  const { error } = await supabase.auth.signInWithOtp({
    email: email.trim().toLowerCase(),
    options: {
      emailRedirectTo: `${siteUrl}/autentifikacija/provera`,
    },
  });

  if (error) {
    return { error: error.message };
  }

  return { success: true };
}

/**
 * Sign in with Google OAuth.
 * Returns the OAuth URL to redirect the user to.
 */
export async function signInWithGoogle() {
  const supabase = await createClient();
  const siteUrl = process.env.BASE_URL || 'http://localhost:3000';

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${siteUrl}/autentifikacija/provera`,
    },
  });

  if (error) {
    return { error: error.message };
  }

  if (data.url) {
    redirect(data.url);
  }

  return { error: 'Nije moguće pokrenuti Google prijavu.' };
}

/**
 * Sign out the current user.
 */
export async function signOutAction() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath('/', 'layout');
  redirect('/');
}

export async function checkIfCustomerExists(email: string): Promise<{ success: boolean; error?: ErrorType }> {

  try {
    const supabase = await createClient();

    const { data } = await supabase
      .from('customers')
      .select('email')
      .eq('email', email)
      .single();

    if (data?.email) {
      return {
        success: true,
        error: {
          code: 'UserExists',
          details: 'Customer already exists',
          message: 'Customer already exists',
        },
      };
    }

    return {
      success: false,
      error: {
        code: 'UserNotFound',
        details: 'Customer not found',
        message: 'Customer not found',
        hint: 'Please contact support.',
      },
    };

  } catch (error) {
    return {
      success: false,
      error: {
        code: 'ServerError',
        details: 'An error occurred while checking user permission',
        message: 'An error occurred while checking user permission',
        hint: 'Please try again later.',
      },
    };
  }
}

export async function getUserFromEmail(email: string): Promise<{ success: boolean; user?: any; error?: ErrorType }> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from('customers')
      .select('*')
      .eq('email', email)
      .single();


    const { error: authError } = await supabase.auth.admin.getUserById(data?.user_id!);

    if (error || authError) {
      return {
        success: false,
        error: {
          code: 'UserNotFound',
          details: 'Customer not found in auth',
          message: 'Customer not found in auth',
        },
      };
    }
    return {
      success: true,
      user: data,
    };
  } catch (error) {
    return {
      success: false,
      error: {
        code: 'ServerError',
        details: 'An error occurred while fetching the user',
        message: 'An error occurred while fetching the user',
        hint: 'Please try again later.',
      },
    };
  }
}
