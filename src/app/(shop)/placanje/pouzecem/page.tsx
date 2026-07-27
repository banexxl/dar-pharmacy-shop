import type { Metadata } from 'next';
import { OrderConfirmationClient } from './order-confirmation-client';

export const metadata: Metadata = {
  title: 'Potvrda porudžbine',
  description: 'Potvrda porudžbine',
};

export default function OrderConfirmationPage() {
  return <OrderConfirmationClient />;
}
