import { NextRequest, NextResponse } from 'next/server';
import { createServiceRoleClient } from '@/services/supabase/service-role';
import { logAction } from '@/services/logger';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const email = typeof body === 'string' ? body : body?.email;

  if (!email) {
    logAction({ action: 'auth.check_verified', success: false, method: 'POST', path: '/api/email/check-verified', error_message: 'Email is required' });
    return NextResponse.json({ error: 'Email is required!' }, { status: 400 });
  }

  const supabase = createServiceRoleClient();
  const normalizedEmail = email.trim().toLowerCase();

  const { data: customer } = await supabase
    .from('customers')
    .select('id, user_id')
    .eq('email', normalizedEmail)
    .single();

  if (customer && customer.user_id) {
    logAction({ action: 'auth.check_verified', success: true, email: normalizedEmail, customer_id: customer.id, method: 'POST', path: '/api/email/check-verified', metadata: { result: 'already_registered' } });
    return NextResponse.json({ error: 'Email already registered!', status: 200 });
  }

  logAction({ action: 'auth.check_verified', success: true, email: normalizedEmail, method: 'POST', path: '/api/email/check-verified', metadata: { result: 'available' } });
  return NextResponse.json({ message: 'Email can be registered!', status: 202 });
}
