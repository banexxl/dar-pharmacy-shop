import type { Metadata } from 'next';
import { CheckoutClient } from './checkout-client';

export const metadata: Metadata = {
  title: 'Plaćanje/Poručivanje',
  description: 'Plaćanje/Poručivanje',
};

export default function CheckoutPage() {
  return <CheckoutClient />;
}
