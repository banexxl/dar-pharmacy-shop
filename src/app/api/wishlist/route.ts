import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/services/supabase/server';
import {
  getWishlistByUserId,
  addToWishlistDB,
  removeFromWishlistDB,
  clearWishlistDB,
} from '@/services/customer-wishlist';

async function getAuthUser() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

// GET - Fetch user's wishlist
export async function GET() {
  const user = await getAuthUser();
  if (!user) {
    return NextResponse.json({ items: [] });
  }

  const items = await getWishlistByUserId(user.id);
  return NextResponse.json({ items });
}

// POST - Add item to wishlist
export async function POST(request: NextRequest) {
  const user = await getAuthUser();
  if (!user) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  const { productId } = await request.json();
  if (!productId) {
    return NextResponse.json({ error: 'productId is required' }, { status: 400 });
  }

  await addToWishlistDB(user.id, productId);
  return NextResponse.json({ success: true });
}

// DELETE - Remove item or clear wishlist
export async function DELETE(request: NextRequest) {
  const user = await getAuthUser();
  if (!user) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  const { productId } = await request.json();

  if (productId) {
    await removeFromWishlistDB(user.id, productId);
  } else {
    await clearWishlistDB(user.id);
  }

  return NextResponse.json({ success: true });
}
