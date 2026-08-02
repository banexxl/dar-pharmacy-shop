import { createServiceRoleClient } from '@/services/supabase/service-role';
import { createClient } from '@/services/supabase/server';
import { NextRequest, NextResponse } from 'next/server';
import { clearCartDB } from '@/services/customer-cart';
import { clearWishlistDB } from '@/services/customer-wishlist';

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
    full_name: customer.full_name
  });
}

export async function DELETE() {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
  }

  // Clear user's cart and wishlist from DB
  await clearCartDB(user.id);
  await clearWishlistDB(user.id);

  const admin = createServiceRoleClient();
  const { error } = await admin.auth.admin.deleteUser(user.id);

  if (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }

  await supabase.auth.signOut();
  return NextResponse.json({ message: 'Account deleted' });
}
