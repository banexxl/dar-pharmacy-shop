'use client';

import { Container, Typography, Box, Paper, Stack, Divider, Button, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import type { ConfirmationData } from '@/schemas/order';
import type ICartItem from '@/interfaces/cart/cart.interface';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export function OrderConfirmationClient({ orderData }: { orderData: any }) {
  const [loading, setLoading] = useState(true);
  const [orderConfirmationData, setOrderConfirmationData] = useState<ConfirmationData | null>(null);
  const router = useRouter();
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const raw = localStorage.getItem('orderConfirmationData');
      if (raw) {
        setOrderConfirmationData(JSON.parse(raw) as ConfirmationData);
      } else if (orderData) {
        // Fallback: build confirmation data from server-fetched order
        setOrderConfirmationData({
          order: orderData,
          userForm: {
            full_name: orderData.full_name ?? '',
            street_address: orderData.street_address ?? '',
            city: orderData.city ?? '',
            phone_number: orderData.phone_number ?? '',
            email: orderData.email ?? '',
          },
          deliveryDate: orderData.delivery_date ?? '',
        } as ConfirmationData);
      }
    } catch { }
    setLoading(false);
  }, [orderData]);

  useEffect(() => {
    if (!orderConfirmationData) return;
    const orderId = String(orderConfirmationData.order?.order_number || '');
    const total = Number(orderConfirmationData.order?.total ?? 0);
    if (!orderId || isNaN(total)) return;

    const dedupeKey = `ads_purchase_${orderId}`;
    if (sessionStorage.getItem(dedupeKey)) return;

    window.dataLayer = window.dataLayer || [];

    // Push standard purchase event for GTM
    window.dataLayer.push({
      event: 'purchase',
      ecommerce: {
        transaction_id: orderId,
        value: total,
        currency: 'RSD',
        items: (orderConfirmationData.order?.items || []).map((item: any, index: number) => ({
          item_id: item.id,
          item_name: item.name,
          price: item.price,
          quantity: item.count,
          index,
        })),
      },
    });

    // Fire Google Ads conversion via gtag
    if (typeof window.gtag === 'function' && process.env.NEXT_PUBLIC_GTM_ID) {
      window.gtag('event', 'conversion', {
        send_to: process.env.NEXT_PUBLIC_GTM_ID,
        value: total,
        currency: 'RSD',
        transaction_id: orderId,
      });
    }

    sessionStorage.setItem(dedupeKey, '1');
  }, [orderConfirmationData]);

  const order = orderConfirmationData?.order;
  const userForm = orderConfirmationData?.userForm;
  const orderItems = Array.isArray(order?.items) ? order.items : [];
  const totalAmount = orderItems.reduce((acc: number, item: ICartItem) => acc + item.price * item.count, 0);

  if (loading) {
    return (
      <Container maxWidth="sm" sx={{ py: 10, textAlign: 'center' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (!orderConfirmationData) {
    return (
      <Container maxWidth="sm" sx={{ py: 10, textAlign: 'center' }}>
        <Typography variant="h5" color="text.secondary">Nema podataka o porudžbini.</Typography>
        <Button variant="contained" onClick={() => router.push('/')} sx={{ mt: 3 }}>Početna</Button>
      </Container>
    );
  }

  return (
    <>
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
        <Paper elevation={0} sx={{ p: { xs: 3, md: 4 }, borderRadius: 3, border: '1px solid #e0e0e0' }}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <CheckCircleOutlineIcon sx={{ fontSize: 64, color: 'success.main', mb: 2 }} />
            <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
              Porudžbina je kreirana!
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
              Broj porudžbine: <strong>#{orderData?.order_number || 'N/A'}</strong>
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Podaci za dostavu</Typography>
          <Typography>Ime: {userForm?.full_name}</Typography>
          <Typography>Adresa: {userForm?.street_address}, {userForm?.city}</Typography>
          <Typography>Telefon: {userForm?.phone_number}</Typography>
          <Typography>Email: {userForm?.email}</Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Stavke</Typography>
          {orderItems.map((item: any, i: number) => (
            <Box key={i} sx={{ display: 'flex', justifyContent: 'space-between', py: 0.5 }}>
              <Typography>{item.name} x{item.count}</Typography>
              <Typography>{(item.price * item.count).toFixed(2)} RSD</Typography>
            </Box>
          ))}

          <Divider sx={{ my: 2 }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>Ukupno:</Typography>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>{totalAmount.toFixed(2)} RSD</Typography>
          </Box>

          <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 3, color: 'text.secondary' }}>
            <LocalShippingOutlinedIcon />
            <Typography variant="body2">Očekivana dostava: {orderConfirmationData.deliveryDate || '3-5 radnih dana'}</Typography>
          </Stack>

          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button variant="contained" onClick={() => router.push('/')}>
              Nazad na početnu
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
}
