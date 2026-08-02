import { createServiceRoleClient } from './supabase/service-role';

const supabase = createServiceRoleClient();

export interface CustomerWishlistItem {
  id: string;
  user_id: string;
  product_id: string;
  created_at: string;
}

// === Wishlist Functions ===

export async function getWishlistByUserId(
  userId: string
): Promise<CustomerWishlistItem[]> {
  const { data, error } = await supabase
    .from('customer_wishlist' as any)
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching wishlist:', error.message);
    return [];
  }

  return (data as unknown as CustomerWishlistItem[]) || [];
}

export async function addToWishlistDB(
  userId: string,
  productId: string
): Promise<void> {
  // Check if already in wishlist
  const { data: existing } = await supabase
    .from('customer_wishlist' as any)
    .select('id')
    .eq('user_id', userId)
    .eq('product_id', productId)
    .single();

  if (existing) return; // Already in wishlist

  await supabase
    .from('customer_wishlist' as any)
    .insert({ user_id: userId, product_id: productId });
}

export async function removeFromWishlistDB(
  userId: string,
  productId: string
): Promise<void> {
  await supabase
    .from('customer_wishlist' as any)
    .delete()
    .eq('user_id', userId)
    .eq('product_id', productId);
}

export async function clearWishlistDB(userId: string): Promise<void> {
  await supabase
    .from('customer_wishlist' as any)
    .delete()
    .eq('user_id', userId);
}
