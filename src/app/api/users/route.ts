import { createServiceRoleClient } from '@/services/supabase/service-role';
import { createClient } from '@/services/supabase/server';
import { NextRequest, NextResponse } from 'next/server';
import { clearCartDB } from '@/services/customer-cart';
import { clearWishlistDB } from '@/services/customer-wishlist';
import { logAction } from '@/services/logger';

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  if (!email || typeof email !== 'string') {
    logAction({ action: 'user.lookup', success: false, email, method: 'POST', path: '/api/users', error_message: 'Email is required' });
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
    logAction({ action: 'user.lookup', success: false, email: normalizedEmail, method: 'POST', path: '/api/users', error_message: 'User not found' });
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }

  logAction({ action: 'user.lookup', success: true, email: normalizedEmail, customer_id: customer.id, method: 'POST', path: '/api/users' });

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
    logAction({ action: 'user.delete', success: false, method: 'DELETE', path: '/api/users', error_message: 'Not authenticated' });
    return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
  }

  // Clear user's cart and wishlist from DB
  await clearCartDB(user.id);
  await clearWishlistDB(user.id);

  const admin = createServiceRoleClient();
  const { error } = await admin.auth.admin.deleteUser(user.id);

  if (error) {
    logAction({ action: 'user.delete', success: false, user_id: user.id, email: user.email, method: 'DELETE', path: '/api/users', error_message: error.message });
    return NextResponse.json({ message: error.message }, { status: 500 });
  }

  await supabase.auth.signOut();
  logAction({ action: 'user.delete', success: true, user_id: user.id, email: user.email, method: 'DELETE', path: '/api/users' });
  return NextResponse.json({ message: 'Account deleted' });
}
