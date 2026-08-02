import { NextRequest, NextResponse } from 'next/server';
import { createServiceRoleClient } from '@/services/supabase/service-role';

export async function POST(request: NextRequest) {
  const { ids } = await request.json();

  if (!ids || !Array.isArray(ids) || ids.length === 0) {
    return NextResponse.json({ products: [] });
  }

  const supabase = createServiceRoleClient();

  const { data, error } = await supabase
    .from('products')
    .select('*')
    .in('id', ids)
    .eq('is_active', true);

  if (error) {
    console.error('Error fetching products by ids:', error.message);
    return NextResponse.json({ products: [] });
  }

  return NextResponse.json({ products: data || [] });
}
