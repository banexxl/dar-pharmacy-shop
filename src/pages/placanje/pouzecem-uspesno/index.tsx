import { Box, Container, Typography, Divider, Stack, CircularProgress, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useState } from 'react';
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { Seo } from '@/components/seo';
import dynamic from 'next/dynamic';
import theme from '@/styles/theme';
import { UIProvider } from '@/context/ui/ui.context';
import { useRouter } from 'next/navigation';
import { ConfirmationData } from '@/components/checkout/payment-options/payment-options-form';

const DeliveryConfirmationPage = () => {

     const [orderConfirmationData, setOrderConfirmationData] = useState<ConfirmationData | null>(() => {
          const data = localStorage.getItem('orderConfirmationData');
          return data ? JSON.parse(data) as ConfirmationData : null;
     });
     const router = useRouter()

     const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
          loading: () => <CircularProgress />,
          ssr: false
     })

     const merchant = {
          name: 'Apoteka DAR',
          pib: '109876543',
          address: 'Kralja Aleksandra I Karadjordjevica 102, lokal 9, 34000 Kragujevac, Srbija',
     };

     return (
          <ReCaptchaProvider reCaptchaKey={process.env.GOOGLE_CAPTCHA_SITE_KEY} useEnterprise>
               <DynamicThemeProvider theme={theme}>
                    <Seo title={'Plaćanje/Poručivanje'} description={'Plaćanje/Poručivanje'} url={'https://www.apoteka-dar.rs/'} />
                    <Container
                         disableGutters
                         maxWidth="lg"
                         sx={{
                              background: "#fff",
                              mt: '100px'
                         }}
                    >
                         <Stack>
                              <UIProvider>
                                   <Typography gutterBottom sx={{ mt: 4, mb: 3, fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>
                                        Potvrda o isporuci
                                   </Typography>

                                   <Divider sx={{ my: 2 }} />

                                   <Typography sx={{ fontWeight: 'bold', fontSize: '1.4rem' }}>👤 Podaci o korisniku:</Typography>
                                   <Typography>Ime i prezime: {orderConfirmationData?.userForm.name}</Typography>
                                   <Typography>Adresa: {`${orderConfirmationData?.userForm.country}, ${orderConfirmationData?.userForm.city}, ${orderConfirmationData?.userForm.streetAddress}`}</Typography>
                                   <Typography>Broj telefona: {orderConfirmationData?.userForm.phoneNumber}</Typography>

                                   <Divider sx={{ my: 2 }} />

                                   <Typography sx={{ fontWeight: 'bold', fontSize: '1.4rem' }}>📦 Podaci o narudžbini:</Typography>
                                   {orderConfirmationData?.cart.map((item, index) => (
                                        <Box key={index} sx={{ mb: 1 }}>
                                             <Typography>Naziv: {item.name}</Typography>
                                             <Typography>Jedinicna cena: {item.price.toFixed(2)} RSD</Typography>
                                             <Typography>Kolicina: {item.count}</Typography>
                                             <Typography>Porez: uračunat u cenu</Typography>
                                             <Typography>Ukupno: {(item.count * item.price).toFixed(2)} RSD</Typography>
                                             <Divider sx={{ my: 2 }} />
                                        </Box>
                                   ))}
                                   <Typography sx={{ fontWeight: 'bold', fontSize: '1.4rem' }}>
                                        Ukupna cena: {orderConfirmationData?.cart.reduce((acc, item) => acc + item.price * item.count, 0).toFixed(2)} RSD
                                   </Typography>

                                   <Divider sx={{ my: 2 }} />

                                   <Typography sx={{ fontWeight: 'bold', fontSize: '1.4rem' }}>🏢 Podaci o trgovcu:</Typography>
                                   <Typography>Naziv: {merchant.name}</Typography>
                                   <Typography>PIB: {merchant.pib}</Typography>
                                   <Typography>Adresa: {merchant.address}</Typography>

                                   <Divider sx={{ my: 2 }} />

                                   <Typography sx={{ fontWeight: 'bold', fontSize: '1.4rem' }}>💳 Podaci o transakciji:</Typography>
                                   {
                                        orderConfirmationData !== null && (
                                             <>
                                                  <Typography>Broj narudžbine: {orderConfirmationData.transaction.orderNumber}</Typography>
                                                  <Typography>Autorizacioni kod: {orderConfirmationData.transaction.authorizationCode}</Typography>
                                                  <Typography>Status transakcije: {orderConfirmationData.transaction.status}</Typography>
                                                  <Typography>Kod statusa: {orderConfirmationData.transaction.statusCode}</Typography>
                                                  <Typography>Broj transakcije: {orderConfirmationData.transaction.transactionNumber}</Typography>
                                                  <Typography>Datum transakcije: {orderConfirmationData.transaction.transactionDate}</Typography>
                                                  <Typography>Iznos transakcije: {orderConfirmationData.transaction.amount.toFixed(2)} RSD</Typography>
                                                  <Typography>Referentni ID: {orderConfirmationData.transaction.referenceId}</Typography>
                                             </>
                                        )}

                                   <Divider sx={{ my: 2 }} />

                                   <Typography sx={{ fontWeight: 'bold', fontSize: '1.4rem' }}>📅 Datum isporuke:</Typography>
                                   <Typography>{orderConfirmationData?.deliveryDate}</Typography>

                                   <Stack
                                        direction="row"
                                        spacing={2}
                                        sx={{ mt: 2, alignItems: 'center', justifyContent: 'center', mb: 4 }}
                                   >
                                        <Button
                                             startIcon={<HomeIcon />}
                                             variant="contained"
                                             onClick={() => {
                                                  router.push('/')
                                                  setTimeout(() => {
                                                       setOrderConfirmationData(null)
                                                  }, 3000);
                                             }}
                                        >
                                             Početna
                                        </Button>
                                   </Stack>

                              </UIProvider>
                         </Stack>
                    </Container>
               </DynamicThemeProvider >
          </ReCaptchaProvider >
     );
};

export default DeliveryConfirmationPage;
