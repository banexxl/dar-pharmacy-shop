'use client';

import {
  Box,
  Button,
  CircularProgress,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import type ICartItem from '@/interfaces/cart/cart.interface';
import type { ConfirmationData } from '@/schemas/order';

interface OrderConfirmationClientProps {
  orderData: any;
}

export function OrderConfirmationClient({
  orderData,
}: OrderConfirmationClientProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [
    orderConfirmationData,
    setOrderConfirmationData,
  ] = useState<ConfirmationData | null>(null);
  const [cancelDialogOpen, setCancelDialogOpen] = useState(false);
  const [cancelling, setCancelling] = useState(false);
  const [orderCancelled, setOrderCancelled] = useState(false);

  /*
   * Load the locally stored confirmation data.
   *
   * If localStorage is empty, use the order returned by the server.
   */
  useEffect(() => {
    try {
      const raw = localStorage.getItem(
        'orderConfirmationData'
      );

      if (raw) {
        setOrderConfirmationData(
          JSON.parse(raw) as ConfirmationData
        );

        return;
      }

      if (orderData) {
        setOrderConfirmationData({
          order: orderData,
          userForm: {
            full_name: orderData.full_name ?? '',
            street_address:
              orderData.street_address ?? '',
            city: orderData.city ?? '',
            phone_number:
              orderData.phone_number ?? '',
            email: orderData.email ?? '',
          },
          deliveryDate:
            orderData.delivery_date ?? '',
        } as ConfirmationData);
      }
    } catch (error) {
      console.error(
        'Failed to load order confirmation data:',
        error
      );
    } finally {
      setLoading(false);
    }
  }, [orderData]);

  /*
   * Send the purchase event and Google Ads conversion.
   */
  useEffect(() => {
    if (!orderConfirmationData) {
      return;
    }

    const order =
      orderConfirmationData.order as any;

    const orderId = String(
      order?.order_number ?? order?.id ?? ''
    );

    const total = Number(order?.total ?? 0);

    if (
      !orderId ||
      !Number.isFinite(total) ||
      total <= 0
    ) {
      console.warn(
        'Purchase event skipped because the order ID or total is invalid.'
      );

      return;
    }

    const orderItems = Array.isArray(order?.items)
      ? order.items
      : [];

    /*
     * Push the standard ecommerce purchase event.
     * This can be consumed by Google Tag Manager or GA4.
     */
    const purchaseDedupeKey = `purchase_event_${orderId}`;

    if (!sessionStorage.getItem(purchaseDedupeKey)) {
      window.dataLayer = window.dataLayer || [];

      window.dataLayer.push({
        event: 'purchase',
        ecommerce: {
          transaction_id: orderId,
          value: total,
          currency: 'RSD',
          items: orderItems.map(
            (item: any, index: number) => ({
              item_id:
                item.id ??
                item.product_id ??
                String(index),
              item_name: item.name ?? '',
              price: Number(
                item.price ??
                item.final_unit_price ??
                item.unit_price ??
                0
              ),
              quantity: Number(
                item.count ?? item.quantity ?? 1
              ),
              index,
            })
          ),
        },
      });

      sessionStorage.setItem(
        purchaseDedupeKey,
        '1'
      );
    }

    /*
     * Fire the Google Ads conversion.
     *
     * Example send_to:
     * AW-16815738281/AbCdEfGhIjKlMnOp
     */
    const googleAdsId =
      process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

    const conversionLabel =
      process.env
        .NEXT_PUBLIC_GOOGLE_ADS_PURCHASE_LABEL;

    const adsDedupeKey = `google_ads_purchase_${orderId}`;

    if (sessionStorage.getItem(adsDedupeKey)) {
      return;
    }

    if (!googleAdsId || !conversionLabel) {
      console.warn(
        'Google Ads conversion ID or conversion label is missing.'
      );

      return;
    }

    if (typeof window.gtag !== 'function') {
      console.warn(
        'Google Ads conversion skipped because gtag is not ready.'
      );

      return;
    }

    window.gtag('event', 'conversion', {
      send_to: `${googleAdsId}/${conversionLabel}`,
      value: total,
      currency: 'RSD',
      transaction_id: orderId,
    });

    sessionStorage.setItem(adsDedupeKey, '1');
  }, [orderConfirmationData]);

  const handleCancelOrder = async () => {
    setCancelling(true);
    try {
      const id = (orderConfirmationData?.order as any)?.id ?? orderData?.id;
      const res = await fetch('/api/orders/cancel-by-id', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId: id }),
      });
      const data = await res.json();
      if (data.success) {
        setOrderCancelled(true);
        setCancelDialogOpen(false);
        toast.success('Porudžbina je uspešno otkazana.', { position: 'top-center', duration: 3000 });

        // Send cancellation emails (fire-and-forget)
        const orderNumber = order?.order_number ?? '';
        const customerName = userForm?.full_name ?? '';
        const customerEmail = userForm?.email ?? '';

        if (customerEmail) {
          fetch('/api/email/send-cancellation-user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: customerEmail,
              name: customerName,
              order_number: orderNumber,
            }),
          }).catch(() => { });
        }

        fetch('/api/email/send-cancellation-admin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            customer_name: customerName,
            customer_email: customerEmail,
            order_number: orderNumber,
          }),
        }).catch(() => { });
      } else {
        toast.error(data.error || 'Greška pri otkazivanju.', { position: 'top-center', duration: 3000 });
      }
    } catch {
      toast.error('Greška pri otkazivanju porudžbine.', { position: 'top-center', duration: 3000 });
    } finally {
      setCancelling(false);
      setCancelDialogOpen(false);
    }
  };

  const order =
    orderConfirmationData?.order as any;

  const userForm =
    orderConfirmationData?.userForm;

  const orderStatus = orderCancelled ? 'cancelled' : (order?.order_status ?? 'pending');

  const orderItems: ICartItem[] = Array.isArray(
    order?.items
  )
    ? order.items
    : [];

  const totalAmount = orderItems.reduce(
    (total: number, item: ICartItem) => {
      const price = Number(item.price ?? 0);
      const count = Number(item.count ?? 0);

      return total + price * count;
    },
    0
  );

  const displayedTotal = Number(
    order?.total ?? totalAmount
  );

  if (loading) {
    return (
      <Container
        maxWidth="sm"
        sx={{
          py: 10,
          textAlign: 'center',
        }}
      >
        <CircularProgress />

        <Typography
          color="text.secondary"
          sx={{ mt: 2 }}
        >
          Učitavanje porudžbine...
        </Typography>
      </Container>
    );
  }

  if (!orderConfirmationData) {
    return (
      <Container
        maxWidth="sm"
        sx={{
          py: 10,
          textAlign: 'center',
        }}
      >
        <Typography variant="h6">
          Nema podataka o porudžbini.
        </Typography>

        <Button
          variant="contained"
          onClick={() => router.push('/')}
          sx={{ mt: 3 }}
        >
          Početna
        </Button>
      </Container>
    );
  }

  return (
    <Container
      maxWidth="md"
      sx={{
        py: {
          xs: 4,
          md: 6,
        },
      }}
    >
      <Paper
        elevation={0}
        sx={{
          p: {
            xs: 3,
            md: 4,
          },
          borderRadius: 3,
          border: '1px solid #e0e0e0',
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            mb: 4,
          }}
        >
          {orderStatus === 'cancelled' ? (
            <CancelOutlinedIcon
              sx={{
                fontSize: 64,
                color: 'error.main',
                mb: 2,
              }}
            />
          ) : (
            <CheckCircleOutlineIcon
              sx={{
                fontSize: 64,
                color: 'success.main',
                mb: 2,
              }}
            />
          )}

          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: orderStatus === 'cancelled' ? 'error.main' : 'primary.main',
            }}
          >
            {orderStatus === 'cancelled'
              ? 'Porudžbina je otkazana'
              : orderStatus === 'completed'
                ? 'Porudžbina je završena'
                : orderStatus === 'shipped'
                  ? 'Porudžbina je poslata'
                  : 'Porudžbina je kreirana!'}
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mt: 1 }}
          >
            Broj porudžbine: #
            {order?.order_number ?? 'N/A'}
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mb: 2,
          }}
        >
          Podaci za dostavu
        </Typography>

        <Stack spacing={0.75}>
          <Typography>
            Ime: {userForm?.full_name || 'N/A'}
          </Typography>

          <Typography>
            Adresa:{' '}
            {[
              userForm?.street_address,
              userForm?.city,
            ]
              .filter(Boolean)
              .join(', ') || 'N/A'}
          </Typography>

          <Typography>
            Telefon:{' '}
            {userForm?.phone_number || 'N/A'}
          </Typography>

          <Typography>
            Email: {userForm?.email || 'N/A'}
          </Typography>
        </Stack>

        <Divider sx={{ my: 3 }} />

        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mb: 2,
          }}
        >
          Stavke
        </Typography>

        {orderItems.length > 0 ? (
          orderItems.map((item, index) => {
            const price = Number(
              item.price ?? 0
            );

            const count = Number(
              item.count ?? 0
            );

            return (
              <Box
                key={item.id ?? index}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: 2,
                  py: 0.5,
                }}
              >
                <Typography>
                  {item.name} × {count}
                </Typography>

                <Typography>
                  {(price * count).toFixed(2)} RSD
                </Typography>
              </Box>
            );
          })
        ) : (
          <Typography color="text.secondary">
            Nema dostupnih podataka o stavkama.
          </Typography>
        )}

        <Divider sx={{ my: 2 }} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 700 }}
          >
            Ukupno:
          </Typography>

          <Typography
            variant="h6"
            sx={{ fontWeight: 700 }}
          >
            {Number.isFinite(displayedTotal)
              ? displayedTotal.toFixed(2)
              : '0.00'}{' '}
            RSD
          </Typography>
        </Box>

        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{
            mt: 3,
            color: 'text.secondary',
          }}
        >
          <LocalShippingOutlinedIcon />

          <Typography variant="body2">
            Očekivana dostava:{' '}
            {orderConfirmationData.deliveryDate ||
              '3-5 radnih dana'}
          </Typography>
        </Stack>

        <Box
          sx={{
            textAlign: 'center',
            mt: 4,
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            flexWrap: 'wrap',
          }}
        >
          <Button
            variant="contained"
            onClick={() => router.push('/')}
          >
            Nazad na početnu
          </Button>

          {orderStatus === 'pending' && (
            <Button
              variant="outlined"
              color="error"
              onClick={() => setCancelDialogOpen(true)}
            >
              Otkaži porudžbinu
            </Button>
          )}
        </Box>
      </Paper>

      {/* Cancel confirmation dialog */}
      <Dialog
        open={cancelDialogOpen}
        onClose={() => setCancelDialogOpen(false)}
      >
        <DialogTitle>Otkazivanje porudžbine</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Da li ste sigurni da želite da otkažete porudžbinu #{order?.order_number ?? ''}? Ova akcija se ne može poništiti.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setCancelDialogOpen(false)}
            disabled={cancelling}
          >
            Ne, zadrži
          </Button>
          <Button
            onClick={handleCancelOrder}
            color="error"
            variant="contained"
            disabled={cancelling}
            startIcon={cancelling ? <CircularProgress size={16} color="inherit" /> : undefined}
          >
            {cancelling ? 'Otkazivanje...' : 'Da, otkaži'}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}