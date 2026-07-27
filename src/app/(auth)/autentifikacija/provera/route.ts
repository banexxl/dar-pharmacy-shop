import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

import { createServiceRoleClient } from '@/lib/supabase/service-role';
import { checkIfCustomerExists } from '@/lib/auth/actions';
import { createClient } from '@/lib/supabase/server';

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
          return redirectToError(
               oauthError,
               requestUrl.searchParams.get(
                    'error_description'
               ) ?? 'OAuth authentication failed'
          );
     }

     const code = requestUrl.searchParams.get('code');

     if (!code) {
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

          return redirectToError(
               'exchange_failed',
               exchangeError.message
          );
     }

     if (!session) {
          return redirectToError(
               'no_session',
               'No session was created.'
          );
     }

     const email = normalizeEmail(session.user.email);

     if (!email) {
          await supabase.auth.signOut();

          return redirectToError(
               'email_missing',
               'Google nalog nije vratio email adresu.'
          );
     }

     const permission = await checkIfCustomerExists(email);

     if (!permission.success) {
          console.log(
               '[OAuth callback] Permission denied',
               {
                    email,
                    error: permission.error,
               }
          );

          // Sign out using the session-aware SSR client.
          await supabase.auth.signOut();

          /*
           * Use service role only for the admin operation.
           * Consider whether you really want to delete the Auth user
           * every time permission is rejected.
           */
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
               console.log(
                    'Deleted unauthorized Auth user:',
                    session.user.id
               );
               return redirectToError(
                    'unauthorized',
                    'Vaš nalog nije registrovan. Molimo registrujte se prvo ili kontaktirajte podršku.'
               );
          }

          if (
               permission.error?.code === 'UserExists'
          ) {
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
               return redirectToError(
                    'user_not_found',
                    'Vaš nalog nije pronađen. Molimo registrujte se prvo ili kontaktirajte podršku.'
               );
          }

          return redirectToError(
               'sign_in_required',
               permission.error?.message
          );
     }

     return NextResponse.redirect(
          new URL('/', requestUrl.origin)
     );
}