import { createServiceRoleClient } from '@/lib/supabase/service-role';
import type { OrderInsert, OrderItemInsert, Product } from '@/lib/supabase/types';

const supabase = createServiceRoleClient();

export interface CartItem {
  id: string; // product id
  name: string;
  count: number;
  // Client-sent values (not trusted for pricing)
  price?: number;
  discount?: boolean;
  discount_amount?: number;
}

export interface CustomerFormData {
  name: string;
  email: string;
  phone_number: string;
  street_address: string;
  city: string;
  province_state?: string;
  country: string;
  zip_postal_code: string;
}

export interface CreateOrderInput {
  cart: CartItem[];
  customer: CustomerFormData;
  paymentMethod: 'cash-on-delivery' | 'credit-card';
  userId?: string; // auth.uid() if logged in, undefined for guest
}

export interface CreateOrderResult {
  success: boolean;
  error?: string;
  orderNumber?: string;
  total?: number;
}

/**
 * Create an order with server-side price verification.
 * 
 * 1. Load current product data from Supabase
 * 2. Verify products are active and in stock
 * 3. Recalculate prices/discounts/totals server-side
 * 4. Resolve customer_id from auth user (or null for guest)
 * 5. Insert order + order_items atomically
 */
export async function createOrder(input: CreateOrderInput): Promise<CreateOrderResult> {
  const { cart, customer, paymentMethod, userId } = input;

  if (!cart || cart.length === 0) {
    return { success: false, error: 'Korpa je prazna.' };
  }

  // 1. Load current products from database
  const productIds = cart.map((item) => item.id).filter(Boolean);
  if (productIds.length === 0) {
    return { success: false, error: 'Nema validnih proizvoda u korpi.' };
  }

  const { data: products, error: productsError } = await supabase
    .from('products')
    .select('*')
    .in('id', productIds)
    .eq('is_active', true);

  if (productsError || !products) {
    console.error('Order: failed to load products:', productsError?.message);
    return { success: false, error: 'Greška pri učitavanju proizvoda.' };
  }

  // 2. Verify all items exist and are active
  const productMap = new Map(products.map((p) => [p.id, p]));
  const verifiedItems: { product: Product; count: number }[] = [];

  for (const cartItem of cart) {
    const product = productMap.get(cartItem.id);
    if (!product) {
      return {
        success: false,
        error: `Proizvod "${cartItem.name}" više nije dostupan.`,
      };
    }
    if (product.available_stock < cartItem.count) {
      return {
        success: false,
        error: `Nedovoljna količina za "${product.name}". Dostupno: ${product.available_stock}.`,
      };
    }
    verifiedItems.push({ product, count: cartItem.count });
  }

  // 3. Calculate totals server-side (never trust client prices)
  let total = 0;
  const orderItems: Omit<OrderItemInsert, 'order_id'>[] = verifiedItems.map(
    ({ product, count }) => {
      const unitPrice = product.price;
      const discount_amount = product.discount && product.discount_amount ? product.discount_amount : 0;
      const finalUnitPrice = unitPrice - discount_amount;
      const lineTotal = finalUnitPrice * count;
      total += lineTotal;

      return {
        product_id: product.id,
        name: product.name,
        description: product.description,
        main_category: product.main_category,
        mid_category: product.mid_category,
        sub_category: product.sub_category,
        ingredients: product.ingredients,
        instructions: product.instructions,
        warning: product.warning,
        quantity: product.quantity,
        quantity_unit: product.quantity_unit,
        image_url: product.image_url,
        media_urls: product.media_urls,
        unit_price: unitPrice,
        count,
        discount: product.discount,
        discount_amount: discount_amount,
        final_unit_price: finalUnitPrice,
        line_total: lineTotal,
        product_snapshot: product as any, // Full product snapshot for historical record
      };
    }
  );

  // 4. Resolve customer_id
  let customerId: string | null = null;
  if (userId) {
    const { data: existingCustomer } = await supabase
      .from('customers')
      .select('id')
      .eq('user_id', userId)
      .single();

    customerId = existingCustomer?.id ?? null;
  }

  // 5. Generate order number
  const now = new Date();
  const datePart = now.toISOString().slice(0, 10).replace(/-/g, '');
  const randomPart = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, '0');
  const orderNumber = `${datePart}-${randomPart}`;

  // 6. Insert order
  const orderData: OrderInsert = {
    order_number: orderNumber,
    customer_id: customerId,
    payment_method: paymentMethod,
    payment_status: 'pending',
    order_status: 'pending',
    transaction_number: paymentMethod === 'cash-on-delivery' ? 'pouzecem' : null,
    total,
  };

  const { data: insertedOrder, error: orderError } = await supabase
    .from('orders')
    .insert(orderData)
    .select('id, order_number')
    .single();

  if (orderError || !insertedOrder) {
    console.error('Order insert failed:', orderError?.message);
    return { success: false, error: 'Greška pri kreiranju porudžbine.' };
  }

  // 7. Insert order items
  const itemsWithOrderId: OrderItemInsert[] = orderItems.map((item) => ({
    ...item,
    order_id: insertedOrder.id,
  }));

  const { error: itemsError } = await supabase
    .from('order_items')
    .insert(itemsWithOrderId);

  if (itemsError) {
    console.error('Order items insert failed:', itemsError.message);
    // Attempt to clean up the order
    await supabase.from('orders').delete().eq('id', insertedOrder.id);
    return { success: false, error: 'Greška pri čuvanju stavki porudžbine.' };
  }

  return {
    success: true,
    orderNumber: insertedOrder.order_number,
    total,
  };
}

/**
 * Get orders for a customer by user_id.
 */
export async function getOrdersByUserId(userId: string) {
  const { data: customer } = await supabase
    .from('customers')
    .select('id')
    .eq('user_id', userId)
    .single();

  if (!customer) return [];

  const { data: orders } = await supabase
    .from('orders')
    .select(`
      *,
      order_items (*)
    `)
    .eq('customer_id', customer.id)
    .order('created_at', { ascending: false });

  return orders ?? [];
}
