import { createServiceRoleClient } from '@/services/supabase/service-role';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  if (!email || typeof email !== 'string') {
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
    return NextResponse.json({ error: 'Email already subscribed!' }, { status: 409 });
  }

  const { error } = await (supabase as any)
    .from('subscriptions')
    .insert({ email: normalizedEmail });

  if (error) {
    return NextResponse.json({ error: 'Internal server error!' }, { status: 500 });
  }

  return NextResponse.json({ message: 'Email successfully registered!' });
}
