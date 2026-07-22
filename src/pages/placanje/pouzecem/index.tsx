'use client';

import { Container, Typography, Divider, Stack, CircularProgress, Button, Box, Paper, Chip } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useEffect, useState } from 'react';
import ReCaptchaProviderWrapper from "@/components/common/recaptcha-provider";
import { Seo } from '@/components/seo';
import dynamic from 'next/dynamic';
import theme from '@/styles/theme';
import { UIProvider } from '@/context/ui/ui.context';
import { useRouter } from 'next/navigation';
import ICartItem from '@/interfaces/cart/cart.interface';
import { ConfirmationData } from '@/schemas/order';
import Script from 'next/script';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
     loading: () => <CircularProgress />,
     ssr: false
});

const DeliveryConfirmationPage = () => {
     const [orderConfirmationData, setOrderConfirmationData] = useState<ConfirmationData | null>(null);
     const router = useRouter();

     useEffect(() => {
          if (typeof window === 'undefined') return;
          try {
               const raw = localStorage.getItem('orderConfirmationData');
               if (raw) setOrderConfirmationData(JSON.parse(raw) as ConfirmationData);
          } catch { }
     }, []);

     useEffect(() => {
          if (!orderConfirmationData) return;

          const orderId = String(orderConfirmationData.order?.orderNumber || '');
          const total = Number(orderConfirmationData.order?.total ?? 0);
          if (!orderId || isNaN(total)) return;

          const dedupeKey = `ads_purchase_${orderId}`;
          if (sessionStorage.getItem(dedupeKey)) return;

          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
               event: 'purchase_ads',
               value: total,
               currency: 'RSD',
               transaction_id: orderId,
          });

          sessionStorage.setItem(dedupeKey, '1');
     }, [orderConfirmationData]);

     const merchant = {
          name: 'Apoteka DAR',
          pib: '109876543',
          address: 'Kralja Aleksandra I Karadjordjevica 102, lokal 9, 34000 Kragujevac, Srbija',
     };

     const order = orderConfirmationData?.order;
     const userForm = orderConfirmationData?.userForm;
     const rawOrderItems = order?.items;
     const orderItems = Array.isArray(rawOrderItems) ? rawOrderItems : [];
     const totalAmount = orderItems.reduce((acc: number, item: ICartItem) => acc + item.price * item.count, 0);

     const paymentStatusLabel =
          order?.paymentStatus === 'pending' ? 'U obradi' :
               order?.paymentStatus === 'successful' ? 'Uspešno' :
                    order?.paymentStatus === 'failed' ? 'Neuspešno' :
                         order?.paymentStatus === 'refunded' ? 'Refundirano' : 'Nije dostupno';

     const rawTransactionDate: unknown = (order as any)?.transactionDate;
     const transactionDate = typeof rawTransactionDate === 'string'
          ? rawTransactionDate.split('T')[0]
          : rawTransactionDate instanceof Date
               ? rawTransactionDate.toISOString().split('T')[0]
               : 'Nije dostupno';

     return (
          <ReCaptchaProviderWrapper>
               <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTM_ID}`}></Script>
               <Script id="gtag-init" strategy="afterInteractive">
                    {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GTM_ID}');
  `}
               </Script>
               <DynamicThemeProvider theme={theme}>
                    <Seo title="Plaćanje/Poručivanje" description="Plaćanje/Poručivanje" url="https://www.apoteka-dar.rs/" />
                    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 }, px: { xs: 2, md: 3 } }}>
                         <Stack>
                              <UIProvider>
                                   <Box sx={{ maxWidth: 980, mx: 'auto' }}>
                                        <Paper
                                             elevation={0}
                                             sx={{
                                                  borderRadius: 4,
                                                  p: { xs: 2.5, md: 4 },
                                                  border: '1px solid #d7deea',
                                                  background: 'linear-gradient(140deg, #edf4ff 0%, #ffffff 52%, #effaf5 100%)',
                                             }}
                                        >
                                             <Stack spacing={2} alignItems={{ xs: 'flex-start', md: 'center' }}>
                                                  <Chip icon={<CheckCircleOutlineIcon />} label="Porudžbina je uspešno evidentirana" sx={{ bgcolor: '#ffffff', border: '1px solid #cfe1d6' }} />
                                                  <Typography sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, textAlign: { xs: 'left', md: 'center' }, color: theme.palette.primary.main }}>
                                                       Potvrda porudžbine
                                                  </Typography>
                                                  <Typography sx={{ color: '#425470', textAlign: { xs: 'left', md: 'center' }, maxWidth: '68ch' }}>
                                                       Hvala vam na poverenju. U nastavku su detalji porudžbine, korisnika i transakcije.
                                                  </Typography>
                                             </Stack>
                                        </Paper>

                                        <Stack spacing={2.5} sx={{ mt: 2.5 }}>
                                             {!orderConfirmationData ? (
                                                  <Paper elevation={0} sx={{ borderRadius: 3, border: '1px solid #d7deea', p: 3, bgcolor: '#ffffff' }}>
                                                       <Typography variant="h6" sx={{ mb: 1, color: theme.palette.primary.main, fontWeight: 700 }}>
                                                            Podaci o porudžbini nisu dostupni
                                                       </Typography>
                                                       <Typography color="text.secondary">
                                                            Nismo uspeli da pronađemo detalje porudžbine. Vratite se na početnu stranicu i pokušajte ponovo.
                                                       </Typography>
                                                  </Paper>
                                             ) : (
                                                  <>
                                                       <Paper elevation={0} sx={{ borderRadius: 3, border: '1px solid #d7deea', p: 3, bgcolor: '#ffffff' }}>
                                                            <Typography variant="h6" sx={{ fontWeight: 700, color: theme.palette.primary.main, mb: 2 }}>
                                                                 Podaci o korisniku
                                                            </Typography>
                                                            <Stack spacing={0.8}>
                                                                 <Typography><strong>Ime i prezime:</strong> {userForm?.name || 'Nije dostupno'}</Typography>
                                                                 <Typography><strong>Adresa:</strong> {userForm ? `${userForm.country}, ${userForm.city}, ${userForm.streetAddress}` : 'Nije dostupno'}</Typography>
                                                                 <Typography><strong>Broj telefona:</strong> {userForm?.phoneNumber || 'Nije dostupno'}</Typography>
                                                            </Stack>
                                                       </Paper>

                                                       <Paper elevation={0} sx={{ borderRadius: 3, border: '1px solid #d7deea', p: 3, bgcolor: '#ffffff' }}>
                                                            <Typography variant="h6" sx={{ fontWeight: 700, color: theme.palette.primary.main, mb: 2 }}>
                                                                 Stavke narudžbine
                                                            </Typography>
                                                            {orderItems.length === 0 ? (
                                                                 <Typography color="text.secondary">Nema dostupnih stavki u ovoj porudžbini.</Typography>
                                                            ) : (
                                                                 <Stack spacing={1.6}>
                                                                      {orderItems.map((item: ICartItem, index: number) => (
                                                                           <Box key={index} sx={{ border: '1px solid #e9edf5', borderRadius: 2, p: 2 }}>
                                                                                <Typography sx={{ fontWeight: 700 }}>{index + 1}. {item.name}</Typography>
                                                                                <Typography variant="body2" color="text.secondary">Jedinicna cena: {item.price.toFixed(2)} RSD</Typography>
                                                                                <Typography variant="body2" color="text.secondary">Kolicina: {item.count}</Typography>
                                                                                <Typography variant="body2" color="text.secondary">Ukupno: {(item.count * item.price).toFixed(2)} RSD</Typography>
                                                                           </Box>
                                                                      ))}
                                                                 </Stack>
                                                            )}
                                                            <Divider sx={{ my: 2 }} />
                                                            <Typography sx={{ fontWeight: 700, fontSize: '1.1rem' }}>
                                                                 Ukupna cena: {totalAmount.toFixed(2)} RSD
                                                            </Typography>
                                                       </Paper>

                                                       <Paper elevation={0} sx={{ borderRadius: 3, border: '1px solid #d7deea', p: 3, bgcolor: '#ffffff' }}>
                                                            <Typography variant="h6" sx={{ fontWeight: 700, color: theme.palette.primary.main, mb: 2 }}>
                                                                 Podaci o trgovcu
                                                            </Typography>
                                                            <Stack spacing={0.8}>
                                                                 <Typography><strong>Naziv:</strong> {merchant.name}</Typography>
                                                                 <Typography><strong>PIB:</strong> {merchant.pib}</Typography>
                                                                 <Typography><strong>Adresa:</strong> {merchant.address}</Typography>
                                                            </Stack>
                                                       </Paper>

                                                       <Paper elevation={0} sx={{ borderRadius: 3, border: '1px solid #d7deea', p: 3, bgcolor: '#ffffff' }}>
                                                            <Typography variant="h6" sx={{ fontWeight: 700, color: theme.palette.primary.main, mb: 2 }}>
                                                                 Podaci o transakciji
                                                            </Typography>
                                                            <Stack spacing={0.8}>
                                                                 <Typography><strong>Broj narudžbine:</strong> {order?.orderNumber || 'Nije dostupno'}</Typography>
                                                                 <Typography><strong>Autorizacioni kod:</strong> {order?.authorizationCode || 'Nije dostupno'}</Typography>
                                                                 <Typography><strong>Status transakcije:</strong> {paymentStatusLabel}</Typography>
                                                                 <Typography><strong>Kod statusa:</strong> {order?.statusCode || 'Nije dostupno'}</Typography>
                                                                 <Typography><strong>Broj transakcije:</strong> {order?.transactionNumber || 'Nije dostupno'}</Typography>
                                                                 <Typography><strong>Datum transakcije:</strong> {transactionDate}</Typography>
                                                                 <Typography><strong>Iznos transakcije:</strong> {typeof order?.total === 'number' ? `${order.total.toFixed(2)} RSD` : 'Nije dostupno'}</Typography>
                                                                 <Typography><strong>Referentni ID:</strong> {order?.referenceId || 'Nije dostupno'}</Typography>
                                                            </Stack>
                                                       </Paper>

                                                       <Paper elevation={0} sx={{ borderRadius: 3, border: '1px solid #d7deea', p: 3, bgcolor: '#ffffff' }}>
                                                            <Stack direction="row" spacing={1} alignItems="center">
                                                                 <LocalShippingOutlinedIcon sx={{ color: theme.palette.primary.main }} />
                                                                 <Typography variant="h6" sx={{ fontWeight: 700, color: theme.palette.primary.main }}>
                                                                      Datum isporuke
                                                                 </Typography>
                                                            </Stack>
                                                            <Typography sx={{ mt: 1 }}>{orderConfirmationData.deliveryDate || 'Nije dostupno'}</Typography>
                                                       </Paper>
                                                  </>
                                             )}

                                             <Stack direction="row" spacing={2} sx={{ pt: 1, alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                                                  <Button
                                                       startIcon={<HomeIcon />}
                                                       variant="contained"
                                                       onClick={() => {
                                                            router.push('/');
                                                            if (typeof window !== 'undefined') {
                                                                 localStorage.removeItem('orderConfirmationData');
                                                            }
                                                            setTimeout(() => setOrderConfirmationData(null), 3000);
                                                       }}
                                                  >
                                                       Nazad na početnu
                                                  </Button>
                                             </Stack>
                                        </Stack>
                                   </Box>
                              </UIProvider>
                         </Stack>
                    </Container>
               </DynamicThemeProvider>
          </ReCaptchaProviderWrapper>
     );
};

export default DeliveryConfirmationPage;
