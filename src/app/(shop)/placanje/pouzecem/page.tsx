import type { Metadata } from 'next';
import { OrderConfirmationClient } from './order-confirmation-client';
import { getOrderById } from '@/lib/services/orders';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Potvrda porudžbine',
  description: 'Potvrda porudžbine',
};

interface Props {
  searchParams: Promise<{
    order?: string;
  }>;
}

export default async function OrderConfirmationPage({
  searchParams,
}: Props) {
  const { order: orderId } = await searchParams;

  if (!orderId) {
    notFound();
  }

  const order = await getOrderById(orderId);

  if (!order) {
    notFound();
  }

  return <OrderConfirmationClient orderData={order} />;
}