'use server';

import { createClient } from '@/services/supabase/server';
import { createServiceRoleClient } from '@/services/supabase/service-role';
import { redirect } from 'next/navigation';

export async function deleteAccount() {
     const supabase = await createClient();

     const {
          data: { user },
     } = await supabase.auth.getUser();

     if (!user) {
          throw new Error('Not authenticated');
     }

     const admin = createServiceRoleClient();
     const { error } = await admin.auth.admin.deleteUser(user.id);

     if (error) {
          throw new Error(error.message);
     }

     await supabase.auth.signOut();
     redirect('/');
}
