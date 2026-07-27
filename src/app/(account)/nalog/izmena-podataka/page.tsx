import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import type { Metadata } from 'next';
import { ProfileEditWrapper } from './profile-edit-wrapper';
import { ProfileEditForm } from './profile-edit-form';

export const metadata: Metadata = {
  title: 'Izmena podataka',
  description: 'Izmena korisničkih podataka',
};

export default async function ProfileEditPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/autentifikacija/prijava');
  }

  const { data: customer } = await supabase
    .from('customers')
    .select('*')
    .eq('user_id', user.id)
    .single();

  return (
    <ProfileEditWrapper>
      <ProfileEditForm customer={customer} />
    </ProfileEditWrapper>
  );
}
