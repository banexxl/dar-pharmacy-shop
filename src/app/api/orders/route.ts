import { NextRequest, NextResponse } from 'next/server';
import { createOrder, type CartItem } from '@/services/orders';
import { Customer } from '@/schemas/customer';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { cart, userFormSelectorState, totalItemPriceState, paymentOption, userId, customerId } = body;

  if (!cart || !Array.isArray(cart) || cart.length === 0) {
    return NextResponse.json({ success: false, error: 'Korpa je prazna.' }, { status: 400 });
  }

  const cartItems: CartItem[] = cart.map((item: any) => ({
    id: item.id || item.id,
    name: item.name,
    count: item.count,
    price: item.price,
    discount: item.discount,
    discount_amount: item.discount_amount || item.discount_amount,
  }));

  const customer: Customer = {
    full_name: userFormSelectorState?.full_name || '',
    email: userFormSelectorState?.email || '',
    phone_number: userFormSelectorState?.phone_number || '',
    street_address: userFormSelectorState?.street_address || '',
    city: userFormSelectorState?.city || '',
    province_state: userFormSelectorState?.province_state || null,
    country: userFormSelectorState?.country || '',
    zip_postal_code: userFormSelectorState?.zip_postal_code || '',
    id: userFormSelectorState?.id || '',
    user_id: userFormSelectorState?.user_id || '',
    avatar: null,
    created_at: '',
    updated_at: ''
  };

  const result = await createOrder({
    cart: cartItems,
    customer,
    paymentMethod: paymentOption === 'credit-card' ? 'credit-card' : 'cash-on-delivery',
    userId: userId || undefined,
    customerId: customerId || undefined,
  });

  if (result.success) {
    return NextResponse.json({
      success: true,
      order: {
        id: result.order?.id,
        order_number: result.order?.order_number,
        total: result.order?.total,
        payment_status: 'pending',
        order_status: 'pending',
        created_at: new Date().toISOString(),
        customer: userFormSelectorState,
        items: cart,
        paymentMethod: paymentOption,
      },
    });
  }

  return NextResponse.json({ success: false, error: result.error }, { status: 400 });
}
