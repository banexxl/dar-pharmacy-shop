import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import type { Metadata } from 'next';
import { ProfileClient } from './profile-client';

export const metadata: Metadata = {
  title: 'Profil',
  description: 'Vaš korisnički profil',
};

export default async function ProfilePage() {
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

  let orders: any[] = [];
  if (customer) {
    const { data: ordersData } = await supabase
      .from('orders')
      .select(`
        id,
        order_number,
        total,
        order_status,
        payment_status,
        payment_method,
        created_at,
        order_items (
          id,
          name,
          count,
          unit_price,
          final_unit_price,
          line_total
        )
      `)
      .eq('customer_id', customer.id)
      .order('created_at', { ascending: false });

    orders = ordersData ?? [];
  }

  return (
    <ProfileClient
      customer={customer ? JSON.parse(JSON.stringify(customer)) : null}
      orders={JSON.parse(JSON.stringify(orders))}
    />
  );
}
