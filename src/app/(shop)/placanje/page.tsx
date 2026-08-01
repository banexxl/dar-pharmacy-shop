import type { Metadata } from 'next';
import { CheckoutClient } from './checkout-client';
import { getUserFromEmail } from '@/services/auth/actions';

export const metadata: Metadata = {
  title: 'Plaćanje/Poručivanje',
  description: 'Plaćanje/Poručivanje',
};

export default async function CheckoutPage() {

  const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;

  return <CheckoutClient recaptchaKey={recaptchaKey} />;
}
