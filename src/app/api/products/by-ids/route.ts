import { NextRequest, NextResponse } from 'next/server';
import { createServiceRoleClient } from '@/services/supabase/service-role';
import { logAction } from '@/services/logger';

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
    logAction({ action: 'products.fetch_by_ids', success: false, method: 'POST', path: '/api/products/by-ids', error_message: error.message, metadata: { ids } });
    return NextResponse.json({ products: [] });
  }

  logAction({ action: 'products.fetch_by_ids', success: true, method: 'POST', path: '/api/products/by-ids', metadata: { count: data?.length || 0 } });
  return NextResponse.json({ products: data || [] });
}
