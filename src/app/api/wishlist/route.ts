import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/services/supabase/server';
import {
  getWishlistByUserId,
  addToWishlistDB,
  removeFromWishlistDB,
  clearWishlistDB,
} from '@/services/customer-wishlist';
import { logAction } from '@/services/logger';

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
    logAction({ action: 'wishlist.add', success: false, method: 'POST', path: '/api/wishlist', error_message: 'Not authenticated' });
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  const { productId } = await request.json();
  if (!productId) {
    logAction({ action: 'wishlist.add', success: false, user_id: user.id, method: 'POST', path: '/api/wishlist', error_message: 'productId is required' });
    return NextResponse.json({ error: 'productId is required' }, { status: 400 });
  }

  await addToWishlistDB(user.id, productId);
  logAction({ action: 'wishlist.add', success: true, user_id: user.id, method: 'POST', path: '/api/wishlist', metadata: { productId } });
  return NextResponse.json({ success: true });
}

// DELETE - Remove item or clear wishlist
export async function DELETE(request: NextRequest) {
  const user = await getAuthUser();
  if (!user) {
    logAction({ action: 'wishlist.delete', success: false, method: 'DELETE', path: '/api/wishlist', error_message: 'Not authenticated' });
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  const { productId } = await request.json();

  if (productId) {
    await removeFromWishlistDB(user.id, productId);
    logAction({ action: 'wishlist.remove_item', success: true, user_id: user.id, method: 'DELETE', path: '/api/wishlist', metadata: { productId } });
  } else {
    await clearWishlistDB(user.id);
    logAction({ action: 'wishlist.clear', success: true, user_id: user.id, method: 'DELETE', path: '/api/wishlist' });
  }

  return NextResponse.json({ success: true });
}
