import { NextRequest, NextResponse } from 'next/server';
import { createOrder, type CartItem, type CustomerFormData } from '@/lib/services/orders';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { cart, userFormSelectorState, totalItemPriceState, paymentOption } = body;

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

  const customer: CustomerFormData = {
    name: userFormSelectorState?.name || '',
    email: userFormSelectorState?.email || '',
    phone_number: userFormSelectorState?.phone_number || userFormSelectorState?.phone_number || '',
    street_address: userFormSelectorState?.street_address || userFormSelectorState?.street_address || '',
    city: userFormSelectorState?.city || '',
    province_state: userFormSelectorState?.province_state || userFormSelectorState?.province_state || '',
    country: userFormSelectorState?.country || '',
    zip_postal_code: userFormSelectorState?.zip_postal_code || userFormSelectorState?.zip_postal_code || '',
  };

  const result = await createOrder({
    cart: cartItems,
    customer,
    paymentMethod: paymentOption === 'credit-card' ? 'credit-card' : 'cash-on-delivery',
  });
  console.log('result', result);

  if (result.success) {
    return NextResponse.json({
      success: true,
      order: {
        orderNumber: result.orderNumber,
        total: result.total,
        paymentStatus: 'pending',
        orderStatus: 'pending',
        createdAt: new Date().toISOString(),
        customer: userFormSelectorState,
        items: cart,
        paymentMethod: paymentOption,
      },
    });
  }

  return NextResponse.json({ success: false, error: result.error }, { status: 400 });
}
