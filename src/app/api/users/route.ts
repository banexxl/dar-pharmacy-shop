import { NextRequest, NextResponse } from 'next/server';
import { createServiceRoleClient } from '@/lib/supabase/service-role';

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  if (!email || typeof email !== 'string') {
    return NextResponse.json({ message: 'Email is required' }, { status: 400 });
  }

  const supabase = createServiceRoleClient();
  const normalizedEmail = email.trim().toLowerCase();

  const { data: customer, error } = await supabase
    .from('customers')
    .select('*')
    .eq('email', normalizedEmail)
    .single();

  if (error || !customer) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }

  return NextResponse.json({
    name: customer.full_name,
    email: customer.email,
    phone_number: customer.phone_number,
    street_address: customer.street_address,
    city: customer.city,
    province_state: customer.province_state,
    country: customer.country,
    zip_postal_code: customer.zip_postal_code,
    gender: customer.gender,
    full_name: customer.full_name
  });
}
