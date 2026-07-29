import { Box, Button, CircularProgress, Container, FormControlLabel, Link, Radio, RadioGroup, ThemeProvider, Typography } from '@mui/material';
import { FunctionComponent, useState } from 'react';
import theme from '@/styles/theme';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useDispatch, useSelector } from 'react-redux';
import { cartTotalPriceSelector } from '@/store/cart/cart.selector';
import { SendCheckoutConfirmationEmailToAdmin, SendCheckoutConfirmationEmailToUser } from '@/services/email/send-email';
import { clearCart } from '@/store/cart/cart.slice';
import { clearUserForm } from '@/store/checkout/user-info-form.slice';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { ConfirmationData, Order, PaymentMethod } from '@/schemas/order';
import { useAuth } from '@/hooks/useAuth';

interface PaymentOptionsProps {
     setTab: (tabIndex: number) => number;
     formName: string;
     tabIndex: number;
     captchaValidated: boolean;
}

export const PaymentOptions: FunctionComponent<PaymentOptionsProps> = (props: PaymentOptionsProps) => {
     const [paymentOption, setPaymentOption] = useState<PaymentMethod>('cash-on-delivery')
     const [loading, setLoading] = useState<boolean>(false)
     const { isAuthenticated } = useAuth()
     const router = useRouter()
     const totalItemPriceState = (useSelector(cartTotalPriceSelector))
     const userFormSelectorState = (useSelector((state: any) => state.persistReduce.userInfoFormSliceReducer))
     const cart = (useSelector((state: any) => state.persistReduce.cartSliceReducer))
     const dispatch = useDispatch()
     const session = useAuth();

     const handleBack = () => {
          props.tabIndex === 2 ? props.setTab?.(props.tabIndex - 1) : null
     };

     const onOrderCashOnDelivery = async (): Promise<{ success: boolean; error?: string, order: Order | null }> => {
          try {
               const response = await fetch('/api/orders', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ cart, userFormSelectorState, totalItemPriceState, paymentOption })
               });
               const responseData = await response.json();

               if (!response.ok) {
                    toast.error('Greška prilikom kreiranja porudžbine. Pokušajte ponovo.');
                    return { success: false, error: 'Greška prilikom kreiranja porudžbine. Pokušajte ponovo.', order: null };
               }

               return responseData
          } catch (error) {
               console.error('Error creating order:', error);
               return { success: false, error: 'Greška prilikom kreiranja porudžbine. Pokušajte ponovo.', order: null };
          }
     };

     return (
          <ThemeProvider theme={theme}>

               <Container disableGutters maxWidth="md" sx={{
                    background: "#fff",
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    px: { xs: 1, sm: 0 },
                    width: '100%',
                    maxWidth: '100%'
               }}
               >
                    <RadioGroup
                         aria-labelledby="demo-controlled-radio-buttons-group"
                         name="controlled-radio-buttons-group"
                         value={paymentOption}
                         onChange={(e: any) => setPaymentOption(e.target.value)}
                         sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'flex-start', sm: 'center' } }}
                    >
                         <FormControlLabel value="cash-on-delivery" defaultChecked control={<Radio />} label={"Plaćanje pouzećem"} />
                         <FormControlLabel disabled value="credit-card" control={<Radio />} label={"Kartično plaćanje (uskoro)"} />
                    </RadioGroup>
                    {
                         paymentOption === 'credit-card' ?
                              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px', gap: '20px' }}>
                                   <Typography variant="body1" >
                                        Izabrali ste kartično plaćanje. Pritiskom na dugme "Potvrdi", bićete preusmereni na drugu platformu za završetak transakcije.
                                   </Typography>
                                   <Typography
                                        variant="body1"
                                        sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}
                                   >
                                        Prilikom unošenja podataka o platnoj kartici, poverljive informacije se prenose putem javne
                                        mreže u zaštićenoj (kriptovanoj) formi upotrebnom SSL protokola i PKI sistema, kao trenutno
                                        najsavremenije kriptografske tehnologije. Sigurnost podataka prilikom kupovine garantuje
                                        procesor platnih kartica ChipCard a.d Beograd, pa se tako kompletan proces naplate obavlja na
                                        stranicama ChipCard-a. Niti jednog trenutka podaci o platnoj kartici nisu dostupni našem
                                        sistemu.
                                   </Typography>
                                   <Button className="CheckoutNextPrevButton" sx={{ maxWidth: '100px', marginTop: '10px' }} endIcon={<NavigateNextIcon />}>
                                        Potvrdi
                                   </Button>
                              </Box>
                              :
                              <Box sx={{ textAlign: 'center' }}>
                                   <Typography variant="body1" sx={{ textAlign: 'left', mb: '20px', pr: { xs: 0, sm: 2 } }}>
                                        Odabirom "Plaćanje pouzećem", iznos od {totalItemPriceState.toFixed(2)}
                                        {totalItemPriceState < 8000 ? ' (+ iznos dostave)' : ' (dostava besplatna)'} dinara plaćate kuriru prilikom dostave paketa.
                                   </Typography>
                                   <Typography sx={{ mb: '20px' }}>
                                        Iznose dostave možete pogledati {' '}
                                        <Link rel='canonical' href='http://www.postexpress.rs/struktura/lat/cenovnik/cenovnik-unutrasnji-saobracaj.asp' target='_blank'>OVDE!</Link>
                                   </Typography>
                                   {
                                        !isAuthenticated && (
                                             <Box>
                                                  <Typography variant="body1" sx={{ textAlign: 'left', mb: '20px' }}>
                                                       Ako ste uneli validan email, biće vam poslat email sa potvrdom porudžbenice.
                                                  </Typography>
                                                  <Typography variant="body1" sx={{ textAlign: 'left', mb: '20px' }}>
                                                       Ako niste, molimo Vas da nas kontaktirate putem
                                                       <Link href={'/kontakt'}> kontakt forme</Link>, ili putem broja telefona {' '}
                                                       <a href="tel:+381346104222">+381 34 610 4222, </a>
                                                       kako biste dobili potvrdu porudžbenice.
                                                  </Typography>
                                             </Box>
                                        )
                                   }
                                   <Box sx={{
                                        display: 'flex',
                                        flexDirection: { xs: 'column', sm: 'row' },
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: '12px',
                                        marginTop: '20px',
                                        width: '100%'
                                   }}>

                                        <Button className="CheckoutNextPrevButton" type='submit' sx={{ maxWidth: '200px', width: { xs: '100%', sm: 'auto' } }} startIcon={<NavigateBeforeIcon />} onClick={() => handleBack()}>
                                             Nazad
                                        </Button>
                                        <Button
                                             className="CheckoutNextPrevButton"
                                             disabled={totalItemPriceState === 0 || loading || props.captchaValidated == false}
                                             onClick={async () => {
                                                  setLoading(true);

                                                  try {
                                                       const { success, error, order } = await onOrderCashOnDelivery(); // Step 1: Try to create the order
                                                       if (success) {
                                                            // Step 2: Send confirmation emails
                                                            Promise.all([
                                                                 SendCheckoutConfirmationEmailToAdmin({
                                                                      email: 'maja@apoteka-dar.rs',
                                                                      customer_email: userFormSelectorState.email.toLowerCase(),
                                                                      subject: 'Porudžbenica',
                                                                      name: userFormSelectorState.full_name,
                                                                      title: 'Potvrda porudžbenice',
                                                                      street_address: userFormSelectorState.street_address,
                                                                      city: userFormSelectorState.city,
                                                                      country: userFormSelectorState.country,
                                                                      phone_number: userFormSelectorState.phone_number,
                                                                      order: order!,
                                                                 }),
                                                                 SendCheckoutConfirmationEmailToUser({
                                                                      email: userFormSelectorState.email.toLowerCase(),
                                                                      subject: 'Porudžbenica',
                                                                      name: userFormSelectorState.full_name,
                                                                      title: 'Potvrda porudžbenice',
                                                                      street_address: userFormSelectorState.street_address,
                                                                      city: userFormSelectorState.city,
                                                                      country: userFormSelectorState.country,
                                                                      phone_number: userFormSelectorState.phone_number,
                                                                      order: order!
                                                                 })
                                                            ])
                                                                 .then(([adminEmailResult, userEmailResult]) => {
                                                                      if (adminEmailResult.status === 200 && userEmailResult.status === 200) {
                                                                           const confirmationData: ConfirmationData = {
                                                                                userForm: userFormSelectorState,
                                                                                order: {
                                                                                     order_number: order?.order_number!,
                                                                                     payment_status: order?.payment_status!,
                                                                                     transaction_number: 'Plaćanje pouzećem',
                                                                                     total: totalItemPriceState,
                                                                                     created_at: new Date().toISOString(),
                                                                                     customer: userFormSelectorState,
                                                                                     items: cart,
                                                                                     payment_method: paymentOption,
                                                                                     order_status: 'pending',
                                                                                     customer_id: session.customer?.id!
                                                                                },
                                                                                deliveryDate: '3-5 radnih dana',
                                                                           };

                                                                           localStorage.setItem('orderConfirmationData', JSON.stringify(confirmationData));

                                                                           toast.success('Porudžbina uspešno kreirana!');
                                                                           setTimeout(() => {
                                                                                dispatch(clearCart());
                                                                                dispatch(clearUserForm());
                                                                           }, 2000);

                                                                      } else {
                                                                           toast.error('Greška prilikom slanja email-a!');
                                                                      }
                                                                 })
                                                                 .catch((error) => {
                                                                      toast.error('Došlo je do greške prilikom slanja email-a!');
                                                                 });
                                                            router.push(`/placanje/pouzecem?order=${order?.id}`);
                                                       } else {
                                                            toast.error('Došlo je do greške prilikom kreiranja porudžbine. Pokušajte ponovo ili nas kontaktirajte.');
                                                       }
                                                  } catch (error) {
                                                       toast.error('Došlo je do greške prilikom kreiranja porudžbine. Pokušajte ponovo ili nas kontaktirajte.');
                                                  } finally {
                                                       setLoading(false);
                                                  }
                                             }}
                                             sx={{ maxWidth: '200px', width: { xs: '100%', sm: 'auto' }, height: '40px', color: theme.palette.primary.main }}
                                             endIcon={<NavigateNextIcon />}
                                        >
                                             {loading ? <CircularProgress size={20} color="inherit" /> : 'Poruči'}
                                        </Button>
                                   </Box>
                              </Box>
                    }
               </Container>
          </ThemeProvider >
     );
};
