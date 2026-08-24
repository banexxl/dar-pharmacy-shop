import { NextRequest, NextResponse } from 'next/server';
import { cancelOrderById } from '@/services/orders';
import { logAction } from '@/services/logger';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { orderId } = body;

  if (!orderId || typeof orderId !== 'string') {
    return NextResponse.json(
      { success: false, error: 'Nedostaje ID porudžbine.' },
      { status: 400 }
    );
  }

  const result = await cancelOrderById(orderId);

  if (result.success) {
    logAction({
      action: 'order.cancel_by_id',
      success: true,
      method: 'POST',
      path: '/api/orders/cancel-by-id',
      metadata: { order_id: orderId },
    });

    return NextResponse.json({ success: true });
  }

  logAction({
    action: 'order.cancel_by_id',
    success: false,
    method: 'POST',
    path: '/api/orders/cancel-by-id',
    error_message: result.error,
    metadata: { order_id: orderId },
  });

  return NextResponse.json(
    { success: false, error: result.error },
    { status: 400 }
  );
}
