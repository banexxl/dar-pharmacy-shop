'use client';

import { Container, Typography, Divider, Stack, CircularProgress, Button, List, ListItemText, ListItem, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useEffect, useState } from 'react';
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { Seo } from '@/components/seo';
import dynamic from 'next/dynamic';
import theme from '@/styles/theme';
import { UIProvider } from '@/context/ui/ui.context';
import { useRouter } from 'next/navigation';
import ICartItem from '@/interfaces/cart/cart.interface';
import { ConfirmationData } from '@/schemas/order';
import Script from 'next/script';

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

     return (
          <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} useEnterprise>
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
                    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
                         <Stack>
                              <UIProvider>
                                   <Box sx={{ maxWidth: 900, mx: 'auto', px: { xs: 2, md: 4 }, py: { xs: 3, md: 4 }, bgcolor: '#fff', borderRadius: 2, boxShadow: '0 6px 20px rgba(0,0,0,0.08)' }}>
                                        <Typography gutterBottom sx={{ mt: 4, mb: 3, fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>
                                             Potvrda o isporuci
                                        </Typography>

                                        <Divider sx={{ my: 2 }} />

                                        <Typography sx={{ fontWeight: 'bold', fontSize: '1.4rem' }}>👤 Podaci o korisniku:</Typography>
                                        <Typography>Ime i prezime: {orderConfirmationData?.userForm.name}</Typography>
                                        <Typography>Adresa: {orderConfirmationData ? `${orderConfirmationData.userForm.country}, ${orderConfirmationData.userForm.city}, ${orderConfirmationData.userForm.streetAddress}` : ''}</Typography>
                                        <Typography>Broj telefona: {orderConfirmationData?.userForm.phoneNumber}</Typography>

                                        <Divider sx={{ my: 2 }} />

                                        <Typography sx={{ fontWeight: 'bold', fontSize: '1.4rem' }}>📦 Podaci o narudžbini:</Typography>
                                        <List>
                                             {orderConfirmationData?.order.items.map((item: ICartItem, index: number) => (
                                                  <ListItem key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                       <ListItemText primary={<Typography variant="body1"><Typography component="span" sx={{ fontWeight: 'bold' }}>{index + 1}. Naziv:</Typography>{" "}{item.name}</Typography>} />
                                                       <ListItemText primary={<Typography variant="subtitle1"><Typography component="span" sx={{ fontWeight: 'bold' }}>Jedinicna cena:</Typography>{" "}{item.price.toFixed(2)} RSD</Typography>} />
                                                       <ListItemText primary={<Typography variant="subtitle1"><Typography component="span" sx={{ fontWeight: 'bold' }}>Kolicina:</Typography>{" "}{item.count}</Typography>} />
                                                       <ListItemText primary={<Typography variant="subtitle1"><Typography component="span" sx={{ fontWeight: 'bold' }}>Porez:</Typography>{" "}Uračunat u cenu</Typography>} />
                                                       <ListItemText primary={<Typography variant="subtitle1"><Typography component="span" sx={{ fontWeight: 'bold' }}>Ukupno:</Typography>{" "}{(item.count * item.price).toFixed(2)} RSD</Typography>} />
                                                  </ListItem>
                                             ))}
                                        </List>

                                        <Typography sx={{ fontWeight: 'bold', fontSize: '1.4rem' }}>
                                             Ukupna cena: {orderConfirmationData ? orderConfirmationData.order.items.reduce((acc: number, item: ICartItem) => acc + item.price * item.count, 0).toFixed(2) : '0.00'} RSD
                                        </Typography>

                                        <Divider sx={{ my: 2 }} />

                                        <Typography sx={{ fontWeight: 'bold', fontSize: '1.4rem' }}>🏢 Podaci o trgovcu:</Typography>
                                        <Typography>Naziv: {merchant.name}</Typography>
                                        <Typography>PIB: {merchant.pib}</Typography>
                                        <Typography>Adresa: {merchant.address}</Typography>

                                        <Divider sx={{ my: 2 }} />

                                        <Typography sx={{ fontWeight: 'bold', fontSize: '1.4rem' }}>💳 Podaci o transakciji:</Typography>
                                        {orderConfirmationData && (
                                             <>
                                                  <Typography>Broj narudžbine: {orderConfirmationData.order.orderNumber}</Typography>
                                                  <Typography>Autorizacioni kod: {orderConfirmationData.order.authorizationCode}</Typography>
                                                  <Typography>
                                                       Status transakcije: {
                                                            orderConfirmationData.order.paymentStatus === 'pending' ? 'U obradi' :
                                                                 orderConfirmationData.order.paymentStatus === 'successful' ? 'Uspešno' :
                                                                      orderConfirmationData.order.paymentStatus === 'failed' ? 'Neuspešno' :
                                                                           orderConfirmationData.order.paymentStatus === 'refunded' ? 'Refundirano' : ''
                                                       }
                                                  </Typography>
                                                  <Typography>Kod statusa: {orderConfirmationData.order.statusCode}</Typography>
                                                  <Typography>Broj transakcije: {orderConfirmationData.order.transactionNumber}</Typography>
                                                  <Typography>
                                                       Datum transakcije: {
                                                            typeof orderConfirmationData.order.transactionDate === 'string'
                                                                 ? (orderConfirmationData.order.transactionDate as string).split('T')[0]
                                                                 : new Date(orderConfirmationData.order.transactionDate as Date).toISOString().split('T')[0]
                                                       }
                                                  </Typography>
                                                  <Typography>Iznos transakcije: {orderConfirmationData.order.total.toFixed(2)} RSD</Typography>
                                                  <Typography>Referentni ID: {orderConfirmationData.order.referenceId}</Typography>
                                             </>
                                        )}

                                        <Divider sx={{ my: 2 }} />

                                        <Typography sx={{ fontWeight: 'bold', fontSize: '1.4rem' }}>📅 Datum isporuke:</Typography>
                                        <Typography>{orderConfirmationData?.deliveryDate}</Typography>

                                        <Stack direction="row" spacing={2} sx={{ mt: 2, alignItems: 'center', justifyContent: 'center', mb: 4 }}>
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
                                                  Početna
                                             </Button>
                                        </Stack>
                                   </Box>
                              </UIProvider>
                         </Stack>
                    </Container>
               </DynamicThemeProvider>
          </ReCaptchaProvider>
     );
};

export default DeliveryConfirmationPage;
