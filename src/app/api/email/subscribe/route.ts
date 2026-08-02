import { createServiceRoleClient } from '@/services/supabase/service-role';
import { NextRequest, NextResponse } from 'next/server';
import { logAction } from '@/services/logger';

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  if (!email || typeof email !== 'string') {
    logAction({ action: 'email.subscribe', success: false, method: 'POST', path: '/api/email/subscribe', error_message: 'Email is required' });
    return NextResponse.json({ error: 'Email is required!' }, { status: 400 });
  }

  const supabase = createServiceRoleClient();
  const normalizedEmail = email.trim().toLowerCase();

  const { data: existing } = await (supabase as any)
    .from('subscriptions')
    .select('id')
    .eq('email', normalizedEmail)
    .single();

  if (existing) {
    logAction({ action: 'email.subscribe', success: false, email: normalizedEmail, method: 'POST', path: '/api/email/subscribe', error_message: 'Already subscribed' });
    return NextResponse.json({ error: 'Email already subscribed!' }, { status: 409 });
  }

  const { error } = await (supabase as any)
    .from('subscriptions')
    .insert({ email: normalizedEmail });

  if (error) {
    logAction({ action: 'email.subscribe', success: false, email: normalizedEmail, method: 'POST', path: '/api/email/subscribe', error_message: error.message || 'Internal server error' });
    return NextResponse.json({ error: 'Internal server error!' }, { status: 500 });
  }

  logAction({ action: 'email.subscribe', success: true, email: normalizedEmail, method: 'POST', path: '/api/email/subscribe' });
  return NextResponse.json({ message: 'Email successfully registered!' });
}
