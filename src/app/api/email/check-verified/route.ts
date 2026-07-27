import { NextRequest, NextResponse } from 'next/server';
import { createServiceRoleClient } from '@/lib/supabase/service-role';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const email = typeof body === 'string' ? body : body?.email;

  if (!email) {
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
    return NextResponse.json({ error: 'Email already registered!', status: 200 });
  }

  return NextResponse.json({ message: 'Email can be registered!', status: 202 });
}
