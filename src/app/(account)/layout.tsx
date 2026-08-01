import { createClient } from '@/services/supabase/server';
import { redirect } from 'next/navigation';

/**
 * Account layout — protects all /nalog routes server-side.
 * Redirects unauthenticated users to login.
 */
export default async function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/autentifikacija/prijava?callbackUrl=/nalog');
  }

  return <>{children}</>;
}
