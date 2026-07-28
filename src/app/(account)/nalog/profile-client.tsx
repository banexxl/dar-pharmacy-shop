'use client';

import { Container, Box, Typography, Paper, Button } from '@mui/material';
import { LogoutButton } from './logout-button';
import { useAuth } from '@/hooks/useAuth';

interface ProfileClientProps {
  orders: any[];
}

export function ProfileClient({ orders }: ProfileClientProps) {

  const {
    session,
    user,
    customer,
    loading,
    isAuthenticated,
    signOut
  } = useAuth();

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 3, md: 4 },
          alignItems: 'stretch',
          width: '100%',
          mb: 4,
        }}
      >
        {/* Customer Data */}
        <Box
          sx={{
            bgcolor: '#fff',
            borderRadius: 2,
            boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 1,
            alignSelf: 'flex-start',
            width: { xs: '100%', md: 'auto' },
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
            Korisnički Podaci
          </Typography>
          {!customer ? (
            <Typography variant="body1" color="text.secondary">
              Korisnički podaci trenutno nisu dostupni.
            </Typography>
          ) : (
            <>
              <Typography variant="body1"><strong>Ime: </strong>{customer.full_name || 'Nije dostupno'}</Typography>
              <Typography variant="body1"><strong>Email: </strong>{customer.email || 'Nije dostupno'}</Typography>
              <Typography variant="body1"><strong>Telefon: </strong>{customer.phone_number || 'Nije dostupno'}</Typography>
              <Typography variant="body1"><strong>Adresa: </strong>{customer.street_address || 'Nije dostupno'}</Typography>
              <Typography variant="body1"><strong>Grad: </strong>{customer.city || 'Nije dostupno'}</Typography>
              <Button href="/nalog/izmena-podataka" variant="text" sx={{ textDecoration: 'underline', p: 0, mt: 1 }}>
                Izmeni podatke
              </Button>
            </>
          )}
          <LogoutButton />
        </Box>

        {/* Orders */}
        <Box
          sx={{
            flex: 1,
            bgcolor: '#fff',
            borderRadius: 2,
            boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
            p: 3,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
            Vaše Narudžbine
          </Typography>
          {orders.length === 0 ? (
            <Typography variant="body1">Nemate nijednu narudžbinu.</Typography>
          ) : (
            <Box sx={{ flex: 1, overflowY: 'auto', pr: 1, maxHeight: { xs: 400, md: '70vh' } }}>
              {orders.map((order: any) => (
                <Paper key={order.id} sx={{ p: 2, mb: 2, border: '1px solid #ccc', borderRadius: '8px' }}>
                  <Typography variant="h6"><strong>Narudžbina: </strong>#{order.order_number || 'N/A'}</Typography>
                  <Typography variant="body1">
                    <strong>Datum: </strong>
                    {order.created_at ? new Date(order.created_at).toLocaleDateString('sr-RS') : 'Nije dostupno'}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Ukupan Iznos: </strong>
                    {typeof order.total === 'number' ? `${order.total.toFixed(2)} RSD` : 'Nije dostupno'}
                  </Typography>
                  <Typography variant="body1"><strong>Status: </strong>{order.order_status || 'N/A'}</Typography>
                  <Typography variant="body2">
                    <strong>Stavke: </strong>
                    {Array.isArray(order.order_items) && order.order_items.length > 0
                      ? order.order_items.map((item: any) => `${item.name} x${item.count}`).join(', ')
                      : 'Nema stavki'}
                  </Typography>
                </Paper>
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
}
