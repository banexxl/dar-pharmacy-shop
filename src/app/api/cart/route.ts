import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/services/supabase/server';
import {
  getCartByUserId,
  addToCartDB,
  updateCartQuantityDB,
  removeFromCartDB,
  clearCartDB,
} from '@/services/customer-cart';

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
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  const { productId, quantity } = await request.json();
  if (!productId) {
    return NextResponse.json({ error: 'productId is required' }, { status: 400 });
  }

  await addToCartDB(user.id, productId, quantity || 1);
  return NextResponse.json({ success: true });
}

// PATCH - Update quantity
export async function PATCH(request: NextRequest) {
  const user = await getAuthUser();
  if (!user) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  const { productId, quantity } = await request.json();
  if (!productId || quantity === undefined) {
    return NextResponse.json(
      { error: 'productId and quantity are required' },
      { status: 400 }
    );
  }

  await updateCartQuantityDB(user.id, productId, quantity);
  return NextResponse.json({ success: true });
}

// DELETE - Remove item or clear cart
export async function DELETE(request: NextRequest) {
  const user = await getAuthUser();
  if (!user) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  const { productId } = await request.json();

  if (productId) {
    await removeFromCartDB(user.id, productId);
  } else {
    await clearCartDB(user.id);
  }

  return NextResponse.json({ success: true });
}
