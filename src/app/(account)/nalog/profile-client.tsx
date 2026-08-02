'use client';

import { useState, useMemo } from 'react';
import { Container, Box, Typography, Paper, Button, TextField, Stack, Chip, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, CircularProgress } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ClearIcon from '@mui/icons-material/Clear';
import { useRouter } from 'next/navigation';
import { LogoutButton } from './logout-button';
import { createClient } from '@/services/supabase/browser';

interface ProfileClientProps {
  customer: any;
  orders: any[];
}

export function ProfileClient({ customer, orders }: ProfileClientProps) {
  const router = useRouter();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleDeleteAccount = async () => {
    setDeleting(true);
    try {
      const res = await fetch('/api/users', { method: 'DELETE' });
      if (!res.ok) {
        const { message } = await res.json();
        alert(message ?? 'Greška pri brisanju naloga.');
        return;
      }
      // Sign out and clear local storage
      const supabase = createClient();
      await supabase.auth.signOut();
      localStorage.clear();
      router.push('/');
      router.refresh();
    } finally {
      setDeleting(false);
      setDeleteDialogOpen(false);
    }
  };

  // Filters
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      // Price filter
      const total = typeof order.total === 'number' ? order.total : 0;
      if (priceFrom && total < parseFloat(priceFrom)) return false;
      if (priceTo && total > parseFloat(priceTo)) return false;

      // Date filter
      if (order.created_at) {
        const orderDate = new Date(order.created_at);
        if (dateFrom && orderDate < new Date(dateFrom)) return false;
        if (dateTo) {
          const endDate = new Date(dateTo);
          endDate.setHours(23, 59, 59, 999);
          if (orderDate > endDate) return false;
        }
      }

      return true;
    });
  }, [orders, priceFrom, priceTo, dateFrom, dateTo]);

  const hasActiveFilters = priceFrom || priceTo || dateFrom || dateTo;

  const clearFilters = () => {
    setPriceFrom('');
    setPriceTo('');
    setDateFrom('');
    setDateTo('');
  };

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
            minWidth: { md: 300 },
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
          <Button
            variant="outlined"
            color="error"
            onClick={() => setDeleteDialogOpen(true)}
            sx={{ mt: 1 }}
          >
            Obriši nalog
          </Button>
        </Box>

        <Dialog open={deleteDialogOpen} onClose={() => !deleting && setDeleteDialogOpen(false)}>
          <DialogTitle>Obriši nalog</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Da li ste sigurni da želite da obrišete nalog? Ova akcija je nepovratna.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDeleteDialogOpen(false)} disabled={deleting}>Otkaži</Button>
            <Button
              color="error"
              variant="contained"
              onClick={handleDeleteAccount}
              disabled={deleting}
              startIcon={deleting ? <CircularProgress size={16} color="inherit" /> : null}
            >
              {deleting ? 'Brisanje...' : 'Obriši'}
            </Button>
          </DialogActions>
        </Dialog>

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

          {/* Filters */}
          {orders.length > 0 && (
            <Paper
              variant="outlined"
              sx={{ p: 2, mb: 3, borderRadius: 2, borderColor: '#e0e0e0' }}
            >
              <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1.5 }}>
                <FilterAltIcon fontSize="small" color="primary" />
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  Filteri
                </Typography>
                {hasActiveFilters && (
                  <Chip
                    label="Obriši filtere"
                    size="small"
                    icon={<ClearIcon />}
                    onClick={clearFilters}
                    sx={{ ml: 'auto' }}
                  />
                )}
              </Stack>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
              >
                {/* Price filters */}
                <Stack direction="row" spacing={1} sx={{ width: '100%' }}>
                  <TextField
                    label="Cena od (RSD)"
                    type="number"
                    size="small"
                    value={priceFrom}
                    onChange={(e) => setPriceFrom(e.target.value)}
                    sx={{ flex: 1 }}
                    slotProps={{ htmlInput: { min: 0 } }}
                  />
                  <TextField
                    label="Cena do (RSD)"
                    type="number"
                    size="small"
                    value={priceTo}
                    onChange={(e) => setPriceTo(e.target.value)}
                    sx={{ flex: 1 }}
                    slotProps={{ htmlInput: { min: 0 } }}
                  />
                </Stack>

                {/* Date filters */}
                <Stack direction="row" spacing={1} sx={{ width: '100%' }}>
                  <TextField
                    label="Datum od"
                    type="date"
                    size="small"
                    value={dateFrom}
                    onChange={(e) => setDateFrom(e.target.value)}
                    sx={{ flex: 1 }}
                    slotProps={{ inputLabel: { shrink: true } }}
                  />
                  <TextField
                    label="Datum do"
                    type="date"
                    size="small"
                    value={dateTo}
                    onChange={(e) => setDateTo(e.target.value)}
                    sx={{ flex: 1 }}
                    slotProps={{ inputLabel: { shrink: true } }}
                  />
                </Stack>
              </Stack>
            </Paper>
          )}

          {/* Order list */}
          {orders.length === 0 ? (
            <Typography variant="body1">Nemate nijednu narudžbinu.</Typography>
          ) : filteredOrders.length === 0 ? (
            <Typography variant="body1" color="text.secondary">
              Nema narudžbina za zadate filtere.
            </Typography>
          ) : (
            <Box sx={{ flex: 1, overflowY: 'auto', pr: 1, maxHeight: { xs: 400, md: '70vh' } }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Prikazano: {filteredOrders.length} od {orders.length}
              </Typography>
              {filteredOrders.map((order: any) => (
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
