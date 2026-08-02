'use server';

import { createClient } from '@/services/supabase/server';
import { createServiceRoleClient } from '@/services/supabase/service-role';
import { redirect } from 'next/navigation';
import { logAction } from '@/services/logger';

export async function deleteAccount() {
     const supabase = await createClient();

     const {
          data: { user },
     } = await supabase.auth.getUser();

     if (!user) {
          logAction({ action: 'account.delete', success: false, error_message: 'Not authenticated' });
          throw new Error('Not authenticated');
     }

     const admin = createServiceRoleClient();
     const { error } = await admin.auth.admin.deleteUser(user.id);

     if (error) {
          logAction({ action: 'account.delete', success: false, user_id: user.id, email: user.email, error_message: error.message });
          throw new Error(error.message);
     }

     await supabase.auth.signOut();
     logAction({ action: 'account.delete', success: true, user_id: user.id, email: user.email });
     redirect('/');
}
