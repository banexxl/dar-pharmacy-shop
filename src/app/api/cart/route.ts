import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/services/supabase/server';
import {
  getCartByUserId,
  addToCartDB,
  updateCartQuantityDB,
  removeFromCartDB,
  clearCartDB,
} from '@/services/customer-cart';
import { logAction } from '@/services/logger';

async function getAuthUser() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

// GET - Fetch user's cart
export async function GET() {
  const user = await getAuthUser();
  if (!user) {
    return NextResponse.json({ items: [] });
  }

  const items = await getCartByUserId(user.id);
  return NextResponse.json({ items });
}

// POST - Add item to cart
export async function POST(request: NextRequest) {
  const user = await getAuthUser();
  if (!user) {
    logAction({ action: 'cart.add', success: false, method: 'POST', path: '/api/cart', error_message: 'Not authenticated' });
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  const { productId, quantity } = await request.json();
  if (!productId) {
    logAction({ action: 'cart.add', success: false, user_id: user.id, method: 'POST', path: '/api/cart', error_message: 'productId is required' });
    return NextResponse.json({ error: 'productId is required' }, { status: 400 });
  }

  await addToCartDB(user.id, productId, quantity || 1);
  logAction({ action: 'cart.add', success: true, user_id: user.id, method: 'POST', path: '/api/cart', metadata: { productId, quantity: quantity || 1 } });
  return NextResponse.json({ success: true });
}

// PATCH - Update quantity
export async function PATCH(request: NextRequest) {
  const user = await getAuthUser();
  if (!user) {
    logAction({ action: 'cart.update', success: false, method: 'PATCH', path: '/api/cart', error_message: 'Not authenticated' });
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  const { productId, quantity } = await request.json();
  if (!productId || quantity === undefined) {
    logAction({ action: 'cart.update', success: false, user_id: user.id, method: 'PATCH', path: '/api/cart', error_message: 'productId and quantity are required' });
    return NextResponse.json(
      { error: 'productId and quantity are required' },
      { status: 400 }
    );
  }

  await updateCartQuantityDB(user.id, productId, quantity);
  logAction({ action: 'cart.update', success: true, user_id: user.id, method: 'PATCH', path: '/api/cart', metadata: { productId, quantity } });
  return NextResponse.json({ success: true });
}

// DELETE - Remove item or clear cart
export async function DELETE(request: NextRequest) {
  const user = await getAuthUser();
  if (!user) {
    logAction({ action: 'cart.delete', success: false, method: 'DELETE', path: '/api/cart', error_message: 'Not authenticated' });
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  const { productId } = await request.json();

  if (productId) {
    await removeFromCartDB(user.id, productId);
    logAction({ action: 'cart.remove_item', success: true, user_id: user.id, method: 'DELETE', path: '/api/cart', metadata: { productId } });
  } else {
    await clearCartDB(user.id);
    logAction({ action: 'cart.clear', success: true, user_id: user.id, method: 'DELETE', path: '/api/cart' });
  }

  return NextResponse.json({ success: true });
}
