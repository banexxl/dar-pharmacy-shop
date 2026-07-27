import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { NextResponse, type NextRequest } from 'next/server';
import type { Database } from '@/lib/supabase/types';

/**
 * Auth callback route — handles both:
 * 1. OAuth code exchange (Google)
 * 2. Email OTP/magic-link token exchange
 *
 * After authentication, gates access against public.customers:
 * - Looks up customer by user_id first
 * - Falls back to verified email match (links null user_id)
 * - If no customer found, signs out and redirects to registration
 */
export async function GET(request: NextRequest) {
  const { searchParams, origin } = request.nextUrl;
  const code = searchParams.get('code');
  const next = searchParams.get('next') ?? '/nalog';

  // Validate redirect target — must be relative path, same origin
  const redirectTo = isValidRedirect(next) ? next : '/nalog';

  if (!code) {
    return NextResponse.redirect(new URL('/auth/error?reason=missing-code', origin));
  }

  const cookieStore = await cookies();

  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        },
      },
    }
  );

  // Exchange the code for a session
  const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);

  if (exchangeError) {
    console.error('Auth callback: code exchange failed:', exchangeError.message);
    return NextResponse.redirect(new URL('/auth/error?reason=exchange-failed', origin));
  }

  // Get the authenticated user (server-side validation, not just session)
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    console.error('Auth callback: getUser failed:', userError?.message);
    return NextResponse.redirect(new URL('/auth/error?reason=user-not-found', origin));
  }

  // Get verified email from the authenticated user
  const email = user.email?.trim().toLowerCase();
  if (!email) {
    console.error('Auth callback: user has no email');
    await supabase.auth.signOut();
    return NextResponse.redirect(new URL('/auth/error?reason=no-email', origin));
  }

  // Gate access against public.customers
  const customerResult = await resolveCustomer(supabase, user.id, email);

  if (customerResult.status === 'not-found') {
    // No matching customer — sign out and redirect to registration
    await supabase.auth.signOut();
    return NextResponse.redirect(
      new URL('/registracija?reason=customer-not-found', origin)
    );
  }

  if (customerResult.status === 'conflict') {
    // Customer is linked to a different auth user
    await supabase.auth.signOut();
    return NextResponse.redirect(
      new URL('/auth/error?reason=account-conflict', origin)
    );
  }

  if (customerResult.status === 'banned') {
    await supabase.auth.signOut();
    return NextResponse.redirect(
      new URL('/auth/error?reason=account-banned', origin)
    );
  }

  // Success — redirect to intended page
  return NextResponse.redirect(new URL(redirectTo, origin));
}

// ---------------------------------------------------------------------------
// Customer resolution logic
// ---------------------------------------------------------------------------

type CustomerResolution =
  | { status: 'found' }
  | { status: 'linked' }
  | { status: 'not-found' }
  | { status: 'conflict' }
  | { status: 'banned' };

async function resolveCustomer(
  supabase: ReturnType<typeof createServerClient<Database>>,
  userId: string,
  email: string
): Promise<CustomerResolution> {
  // 1. Look up by user_id (primary)
  const { data: customerByUserId } = await supabase
    .from('customers')
    .select('id, user_id, email, is_banned, banned_until')
    .eq('user_id', userId)
    .single();

  if (customerByUserId) {
    if (isCustomerBanned(customerByUserId)) {
      return { status: 'banned' };
    }
    return { status: 'found' };
  }

  // 2. Controlled fallback: look up by verified email
  const { data: customerByEmail } = await supabase
    .from('customers')
    .select('id, user_id, email, is_banned, banned_until')
    .eq('email', email)
    .single();

  if (!customerByEmail) {
    return { status: 'not-found' };
  }

  if (isCustomerBanned(customerByEmail)) {
    return { status: 'banned' };
  }

  // If customer already linked to another user, reject
  if (customerByEmail.user_id && customerByEmail.user_id !== userId) {
    return { status: 'conflict' };
  }

  // Link null user_id to current auth user (migration linking)
  if (!customerByEmail.user_id) {
    // Ensure no other customer already uses this user_id
    const { data: existingLink } = await supabase
      .from('customers')
      .select('id')
      .eq('user_id', userId)
      .single();

    if (existingLink) {
      // Another customer is already linked to this auth user
      return { status: 'conflict' };
    }

    const { error: linkError } = await supabase
      .from('customers')
      .update({ user_id: userId })
      .eq('id', customerByEmail.id);

    if (linkError) {
      console.error('Auth callback: failed to link customer:', linkError.message);
      // Still allow access — linking failure shouldn't block the user
    }

    return { status: 'linked' };
  }

  return { status: 'found' };
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function isCustomerBanned(customer: {
  is_banned: boolean;
  banned_until: string | null;
}): boolean {
  if (!customer.is_banned) return false;
  if (!customer.banned_until) return true; // Permanently banned
  return new Date(customer.banned_until) > new Date();
}

function isValidRedirect(path: string): boolean {
  // Must start with / and not contain protocol or double slash
  return path.startsWith('/') && !path.startsWith('//') && !path.includes('://');
}
