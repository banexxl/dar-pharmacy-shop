import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

import { createServiceRoleClient } from '@/services/supabase/service-role';
import { checkIfCustomerExists } from '@/services/auth/actions';
import { createClient } from '@/services/supabase/server';
import { logAction } from '@/services/logger';

function normalizeEmail(value?: string | null) {
     return (value ?? '').trim().toLowerCase();
}

export async function GET(request: Request) {
     const requestUrl = new URL(request.url);
     const cookieStore = await cookies();

     const redirectToError = (
          error: string,
          description?: string
     ) => {
          const params = new URLSearchParams({ error });

          if (description) {
               params.set('error_description', description);
          }

          return NextResponse.redirect(
               new URL(
                    `/autentifikacija/greska?${params.toString()}`,
                    requestUrl.origin
               )
          );
     };

     const oauthError =
          requestUrl.searchParams.get('error');

     if (oauthError) {
          logAction({ action: 'auth.verification', success: false, method: 'GET', path: '/autentifikacija/provera', error_message: oauthError });
          return redirectToError(
               oauthError,
               requestUrl.searchParams.get(
                    'error_description'
               ) ?? 'OAuth authentication failed'
          );
     }

     const code = requestUrl.searchParams.get('code');

     if (!code) {
          logAction({ action: 'auth.verification', success: false, method: 'GET', path: '/autentifikacija/provera', error_message: 'No code provided' });
          return redirectToError('no_code');
     }

     const supabase = await createClient();

     const {
          data: { session },
          error: exchangeError,
     } = await supabase.auth.exchangeCodeForSession(
          code
     );

     if (exchangeError) {
          console.error(
               'OAuth exchange failed:',
               exchangeError
          );
          logAction({ action: 'auth.verification', success: false, method: 'GET', path: '/autentifikacija/provera', error_message: exchangeError.message });
          return redirectToError(
               'exchange_failed',
               exchangeError.message
          );
     }

     if (!session) {
          logAction({ action: 'auth.verification', success: false, method: 'GET', path: '/autentifikacija/provera', error_message: 'No session created' });
          return redirectToError(
               'no_session',
               'No session was created.'
          );
     }

     const email = normalizeEmail(session.user.email);

     if (!email) {
          await supabase.auth.signOut();
          logAction({ action: 'auth.verification', success: false, user_id: session.user.id, method: 'GET', path: '/autentifikacija/provera', error_message: 'Email missing from provider' });
          return redirectToError(
               'email_missing',
               'Google nalog nije vratio email adresu.'
          );
     }

     const permission = await checkIfCustomerExists(email);

     if (!permission.success) {
          await supabase.auth.signOut();

          const adminClient = createServiceRoleClient();

          const { error: deleteError } =
               await adminClient.auth.admin.deleteUser(
                    session.user.id
               );

          if (deleteError) {
               console.error(
                    'Failed to delete unauthorized Auth user:',
                    deleteError
               );
          } else {
               logAction({ action: 'auth.verification', success: false, user_id: session.user.id, email, method: 'GET', path: '/autentifikacija/provera', error_message: 'Unauthorized - not registered' });
               return redirectToError(
                    'unauthorized',
                    'Vaš nalog nije registrovan. Molimo registrujte se prvo ili kontaktirajte podršku.'
               );
          }

          if (
               permission.error?.code === 'UserExists'
          ) {
               logAction({ action: 'auth.verification', success: false, email, method: 'GET', path: '/autentifikacija/provera', error_message: 'Email already in use' });
               return redirectToError(
                    'email_in_use',
                    permission.error.message ||
                    'Ovaj email je već registrovan. Molimo prijavite se ili resetujte lozinku.'
               );
          }

          if (
               permission.error?.code ===
               'UserNotFound'
          ) {
               logAction({ action: 'auth.verification', success: false, email, method: 'GET', path: '/autentifikacija/provera', error_message: 'User not found' });
               return redirectToError(
                    'user_not_found',
                    'Vaš nalog nije pronađen. Molimo registrujte se prvo ili kontaktirajte podršku.'
               );
          }

          logAction({ action: 'auth.verification', success: false, email, method: 'GET', path: '/autentifikacija/provera', error_message: permission.error?.message || 'Sign in required' });
          return redirectToError(
               'sign_in_required',
               permission.error?.message
          );
     }

     logAction({ action: 'auth.verification', success: true, user_id: session.user.id, email, method: 'GET', path: '/autentifikacija/provera' });
     return NextResponse.redirect(
          new URL('/', requestUrl.origin)
     );
}
