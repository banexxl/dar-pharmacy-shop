import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/services/supabase/server';
import { cancelOrder } from '@/services/orders';
import { logAction } from '@/services/logger';

export async function POST(request: NextRequest) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json(
      { success: false, error: 'Niste prijavljeni.' },
      { status: 401 }
    );
  }

  const body = await request.json();
  const { orderId } = body;

  if (!orderId || typeof orderId !== 'string') {
    return NextResponse.json(
      { success: false, error: 'Nedostaje ID porudžbine.' },
      { status: 400 }
    );
  }

  const result = await cancelOrder(orderId, user.id);

  if (result.success) {
    logAction({
      action: 'order.cancel',
      success: true,
      user_id: user.id,
      method: 'POST',
      path: '/api/orders/cancel',
      metadata: { order_id: orderId },
    });

    return NextResponse.json({ success: true });
  }

  logAction({
    action: 'order.cancel',
    success: false,
    user_id: user.id,
    method: 'POST',
    path: '/api/orders/cancel',
    error_message: result.error,
    metadata: { order_id: orderId },
  });

  return NextResponse.json(
    { success: false, error: result.error },
    { status: 400 }
  );
}
