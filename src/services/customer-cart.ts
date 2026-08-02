import { createServiceRoleClient } from './supabase/service-role';

const supabase = createServiceRoleClient();

export interface CustomerCartItem {
  id: string;
  user_id: string;
  product_id: string;
  quantity: number;
  created_at: string;
  updated_at: string;
}

// === Cart Functions ===

export async function getCartByUserId(userId: string): Promise<CustomerCartItem[]> {
  const { data, error } = await supabase
    .from('customer_cart' as any)
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching cart:', error.message);
    return [];
  }

  return (data as unknown as CustomerCartItem[]) || [];
}

export async function addToCartDB(
  userId: string,
  productId: string,
  quantity: number = 1
): Promise<void> {
  // Check if item already exists
  const { data: existing } = await supabase
    .from('customer_cart' as any)
    .select('id, quantity')
    .eq('user_id', userId)
    .eq('product_id', productId)
    .single();

  if (existing) {
    // Increment quantity
    await supabase
      .from('customer_cart' as any)
      .update({ quantity: (existing as any).quantity + quantity })
      .eq('id', (existing as any).id);
  } else {
    // Insert new item
    await supabase
      .from('customer_cart' as any)
      .insert({ user_id: userId, product_id: productId, quantity });
  }
}

export async function updateCartQuantityDB(
  userId: string,
  productId: string,
  quantity: number
): Promise<void> {
  if (quantity <= 0) {
    await removeFromCartDB(userId, productId);
    return;
  }

  await supabase
    .from('customer_cart' as any)
    .update({ quantity })
    .eq('user_id', userId)
    .eq('product_id', productId);
}

export async function removeFromCartDB(
  userId: string,
  productId: string
): Promise<void> {
  await supabase
    .from('customer_cart' as any)
    .delete()
    .eq('user_id', userId)
    .eq('product_id', productId);
}

export async function clearCartDB(userId: string): Promise<void> {
  await supabase
    .from('customer_cart' as any)
    .delete()
    .eq('user_id', userId);
}
