import { Container, Typography, Divider, Stack, CircularProgress, Button, List, ListItemText, ListItem } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useState } from 'react';
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { Seo } from '@/components/seo';
import dynamic from 'next/dynamic';
import theme from '@/styles/theme';
import { UIProvider } from '@/context/ui/ui.context';
import { useRouter } from 'next/navigation';
import AppDrawer from '@/components/navbar/drawer/drawer';
import ICartItem from '@/interfaces/cart/cart.interface';
import { ConfirmationData } from '@/schemas/order';

const DeliveryConfirmationPage = () => {

     const [orderConfirmationData, setOrderConfirmationData] = useState<ConfirmationData | null>(() => {
          const data = localStorage.getItem('orderConfirmationData');
          return data ? JSON.parse(data) as ConfirmationData : null;
     });
     console.log('orderConfirmationData', orderConfirmationData);

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
                                   <List>
                                        {orderConfirmationData?.order.items.map((item: ICartItem, index: number) => (
                                             <ListItem
                                                  key={index}
                                                  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                                             >
                                                  <ListItemText
                                                       primary={
                                                            <Typography variant="body1">
                                                                 <Typography component="span" sx={{ fontWeight: 'bold' }}>
                                                                      {index + 1}. Naziv:
                                                                 </Typography>{" "}
                                                                 <Typography component="span" sx={{ fontWeight: 'normal' }}>
                                                                      {item.name}
                                                                 </Typography>
                                                            </Typography>
                                                       }
                                                  />
                                                  <ListItemText
                                                       primary={
                                                            <Typography variant="subtitle1">
                                                                 <Typography component="span" sx={{ fontWeight: 'bold' }}>
                                                                      Jedinicna cena:
                                                                 </Typography>{" "}
                                                                 <Typography component="span" sx={{ fontWeight: 'normal' }}>
                                                                      {item.price.toFixed(2)} RSD
                                                                 </Typography>
                                                            </Typography>
                                                       }
                                                  />
                                                  <ListItemText
                                                       primary={
                                                            <Typography variant="subtitle1">
                                                                 <Typography component="span" sx={{ fontWeight: 'bold' }}>
                                                                      Kolicina:
                                                                 </Typography>{" "}
                                                                 <Typography component="span" sx={{ fontWeight: 'normal' }}>
                                                                      {item.count}
                                                                 </Typography>
                                                            </Typography>
                                                       }
                                                  />
                                                  <ListItemText
                                                       primary={
                                                            <Typography variant="subtitle1">
                                                                 <Typography component="span" sx={{ fontWeight: 'bold' }}>
                                                                      Porez:
                                                                 </Typography>{" "}
                                                                 <Typography component="span" sx={{ fontWeight: 'normal' }}>
                                                                      Uračunat u cenu
                                                                 </Typography>
                                                            </Typography>
                                                       }
                                                  />
                                                  <ListItemText
                                                       primary={
                                                            <Typography variant="subtitle1">
                                                                 <Typography component="span" sx={{ fontWeight: 'bold' }}>
                                                                      Ukupno:
                                                                 </Typography>{" "}
                                                                 <Typography component="span" sx={{ fontWeight: 'normal' }}>
                                                                      {(item.count * item.price).toFixed(2)} RSD
                                                                 </Typography>
                                                            </Typography>
                                                       }
                                                  />
                                             </ListItem>
                                        ))}
                                   </List>


                                   <Typography sx={{ fontWeight: 'bold', fontSize: '1.4rem' }}>
                                        Ukupna cena: {orderConfirmationData?.order.items.reduce((acc: number, item: ICartItem) => acc + item.price * item.count, 0).toFixed(2)} RSD
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
                                                  <Typography>Broj narudžbine: {orderConfirmationData.order.orderNumber}</Typography>
                                                  <Typography>Autorizacioni kod: {orderConfirmationData.order.authorizationCode}</Typography>
                                                  <Typography>Status transakcije: {orderConfirmationData?.order.paymentStatus === 'pending' ?
                                                       'U obradi' : orderConfirmationData?.order.paymentStatus === 'successful' ?
                                                            'Uspešno' : orderConfirmationData?.order.paymentStatus === 'failed' ?
                                                                 'Neuspešno' : orderConfirmationData?.order.paymentStatus === 'refunded' ?
                                                                      'Refundirano' : ''}
                                                  </Typography>
                                                  <Typography>Kod statusa: {orderConfirmationData.order.statusCode}</Typography>
                                                  <Typography>Broj transakcije: {orderConfirmationData.order.transactionNumber}</Typography>
                                                  <Typography>Datum transakcije: {orderConfirmationData.order.transactionDate.toString().split('T')[0]}</Typography>
                                                  <Typography>Iznos transakcije: {orderConfirmationData.order.totalAmount.toFixed(2)} RSD</Typography>
                                                  <Typography>Referentni ID: {orderConfirmationData.order.referenceId}</Typography>
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
                                                  localStorage.removeItem('orderConfirmationData')
                                                  setTimeout(() => {
                                                       setOrderConfirmationData(null)
                                                  }, 3000);
                                             }}
                                        >
                                             Početna
                                        </Button>
                                   </Stack>
                                   <AppDrawer isScreenToMedium={false} />
                              </UIProvider>
                         </Stack>
                    </Container>
               </DynamicThemeProvider >
          </ReCaptchaProvider >
     );
};

export default DeliveryConfirmationPage;
