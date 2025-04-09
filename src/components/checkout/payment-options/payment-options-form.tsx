import { Box, Button, CircularProgress, Container, FormControlLabel, Grid, Link, Radio, RadioGroup, ThemeProvider, Typography } from '@mui/material';
import React, { FunctionComponent, useState } from 'react';
import theme from '@/styles/theme';
import { CheckoutNextPrevButton } from '@/styles/checkout/userinfo';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useDispatch, useSelector } from 'react-redux';
import { cartTotalPriceSelector } from '@/store/cart/cart.selector';
import { SendCheckoutConfirmationEmailToAdmin, SendCheckoutConfirmationEmailToUser } from '@/services/email/send-email';
import { ReCaptcha } from 'next-recaptcha-v3';
import { clearCart } from '@/store/cart/cart.slice';
import { clearUserForm } from '@/store/checkout/user-info-form.slice';
import { redirect, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import toast from 'react-hot-toast';
import { ConfirmationData, Order, PaymentMethod } from '@/schemas/order';
import ICartItem, { ICart } from '@/interfaces/cart/cart.interface';

interface CreditCardProps {
     setTab: (tabIndex: number) => number;
     formName: string;
     tabIndex: number;
}

export const CreditCard: FunctionComponent<CreditCardProps> = (props: CreditCardProps) => {

     const [paymentOption, setPaymentOption] = useState<PaymentMethod>('cash-on-delivery')
     const [submitEnabled, setSubmitEnabled] = useState<boolean>(false)
     const [loading, setLoading] = useState<boolean>(false)
     const session = useSession()
     const router = useRouter()
     const [totalItemPriceState, setTotalItemPriceState] = useState<number>(useSelector(cartTotalPriceSelector))
     const [userFormSelectorState, setUserFormSelectorState] = useState(useSelector((state: any) => state.persistReduce.userInfoFormSliceReducer))
     const [cart, setCart] = useState<ICartItem[]>(useSelector((state: any) => state.persistReduce.cartSliceReducer))
     const dispatch = useDispatch()

     const handleBack = () => {
          props.tabIndex === 2 ? props.setTab?.(props.tabIndex - 1) : null
     };

     const onOrderCashOnDelivery = async (): Promise<{ success: boolean; error?: string, order: Order }> => {
          try {
               const response = await fetch('/api/orders', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ cart, userFormSelectorState, totalItemPriceState, paymentOption })
               });
               const responseData = await response.json();

               if (!response.ok) {
                    toast.error('Greška prilikom kreiranja porudžbine. Pokušajte ponovo.');
                    return responseData
               }

               return responseData
          } catch (error) {
               console.error('Error creating order:', error);
               return { success: false, error: 'Greška prilikom kreiranja porudžbine. Pokušajte ponovo.', order: {} as Order };
          }
     };

     return (
          <ThemeProvider theme={theme}>

               <Container disableGutters maxWidth="md" sx={{
                    background: "#fff", display: 'flex', flexDirection: 'column', gap: '20px'
               }}
               >
                    <RadioGroup
                         aria-labelledby="demo-controlled-radio-buttons-group"
                         name="controlled-radio-buttons-group"
                         value={paymentOption}
                         onChange={(e: any) => setPaymentOption(e.target.value)}
                         sx={{ display: 'flex', flexDirection: 'row' }}
                    >
                         <FormControlLabel value="cash-on-delivery" defaultChecked control={<Radio />} label={"Plaćanje pouzećem"} />
                         <FormControlLabel value="credit-card" control={<Radio />} label={"Kartično plaćanje"} />
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
                                   <CheckoutNextPrevButton sx={{ maxWidth: '100px', marginTop: '10px' }} endIcon={<NavigateNextIcon />}>
                                        Potvrdi
                                   </CheckoutNextPrevButton>
                              </Box>
                              :
                              <Box>
                                   <Typography variant="body1" sx={{ textAlign: 'left', mb: '30px' }}>
                                        Odabirom "Plaćanje pouzećem", iznos od {useSelector(cartTotalPriceSelector).toFixed(2)}
                                        {useSelector(cartTotalPriceSelector) < 8000 ? ' (+ iznos dostave)' : ' (dostava besplatna)'} dinara plaćate kuriru prilikom dostave paketa.
                                   </Typography>
                                   <Typography sx={{ mb: '30px' }}>
                                        Iznose dostave možete pogledati {' '}
                                        <Link rel='canonical' href='http://www.postexpress.rs/struktura/lat/cenovnik/cenovnik-unutrasnji-saobracaj.asp' target='_blank'>OVDE!</Link>
                                   </Typography>
                                   {
                                        session.status === 'unauthenticated' && (
                                             <Box>
                                                  <Typography variant="body1" sx={{ textAlign: 'left', mb: '30px' }}>
                                                       Ako ste uneli validan email, biće vam poslat email sa potvrdom porudžbenice.
                                                  </Typography>
                                                  <Typography variant="body1" sx={{ textAlign: 'left', mb: '30px' }}>
                                                       Ako niste, molimo Vas da nas kontaktirate putem
                                                       <Link href={'/kontakt'}> kontakt forme</Link>, ili putem broja telefona {' '}
                                                       <a href="tel:+381346104222">+381 34 610 4222, </a>
                                                       kako biste dobili potvrdu porudžbenice.
                                                  </Typography>
                                             </Box>
                                        )
                                   }
                                   <Box sx={{
                                        display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '20px', marginTop: '20px'
                                   }}>

                                        <CheckoutNextPrevButton type='submit' sx={{ maxWidth: '100px' }} startIcon={<NavigateBeforeIcon />} onClick={() => handleBack()}>
                                             Nazad
                                        </CheckoutNextPrevButton>
                                        <CheckoutNextPrevButton
                                             disabled={totalItemPriceState === 0 || !submitEnabled || loading}
                                             onClick={async () => {
                                                  setLoading(true);

                                                  try {
                                                       const { success, error, order } = await onOrderCashOnDelivery(); // Step 1: Try to create the order

                                                       if (success) {
                                                            // Step 2: Send confirmation emails
                                                            Promise.all([
                                                                 SendCheckoutConfirmationEmailToAdmin({
                                                                      email: 'maja@apoteka-dar.rs',
                                                                      customerEmail: userFormSelectorState.email.toLowerCase(),
                                                                      subject: 'Porudžbenica',
                                                                      name: userFormSelectorState.name,
                                                                      title: 'Potvrda porudžbenice',
                                                                      streetAddress: userFormSelectorState.streetAddress,
                                                                      city: userFormSelectorState.city,
                                                                      country: userFormSelectorState.country,
                                                                      phoneNumber: userFormSelectorState.phoneNumber,
                                                                      order: order
                                                                 }),
                                                                 SendCheckoutConfirmationEmailToUser({
                                                                      email: userFormSelectorState.email.toLowerCase(),
                                                                      subject: 'Porudžbenica',
                                                                      name: userFormSelectorState.name,
                                                                      title: 'Potvrda porudžbenice',
                                                                      streetAddress: userFormSelectorState.streetAddress,
                                                                      city: userFormSelectorState.city,
                                                                      country: userFormSelectorState.country,
                                                                      phoneNumber: userFormSelectorState.phoneNumber,
                                                                      order: order
                                                                 })
                                                            ])
                                                                 .then(([adminEmailResult, userEmailResult]) => {
                                                                      if (adminEmailResult.status === 200 && userEmailResult.status === 200) {
                                                                           const confirmationData: ConfirmationData = {
                                                                                userForm: userFormSelectorState,
                                                                                order: {
                                                                                     orderNumber: order?.orderNumber,
                                                                                     authorizationCode: '/',
                                                                                     paymentStatus: order?.paymentStatus,
                                                                                     statusCode: '00',
                                                                                     transactionNumber: 'Plaćanje pouzećem',
                                                                                     transactionDate: new Date(),
                                                                                     totalAmount: totalItemPriceState,
                                                                                     referenceId: 'Plaćanje pouzećem',
                                                                                     createdAt: new Date(),
                                                                                     customer: userFormSelectorState,
                                                                                     items: cart,
                                                                                     paymentMethod: paymentOption,
                                                                                     orderStatus: 'pending',
                                                                                     logs: []
                                                                                },
                                                                                deliveryDate: '3-5 radnih dana',
                                                                           };

                                                                           localStorage.setItem('orderConfirmationData', JSON.stringify(confirmationData));

                                                                           toast.success('Porudžbina uspešno kreirana!');
                                                                           setTimeout(() => {
                                                                                dispatch(clearCart());
                                                                                dispatch(clearUserForm());
                                                                           }, 2000);
                                                                           router.push('/placanje/pouzecem');
                                                                      } else {
                                                                           toast.error('Greška prilikom slanja email-a!');
                                                                      }
                                                                 })
                                                                 .catch((error) => {
                                                                      console.error('Error while sending confirmation emails:', error);
                                                                      toast.error('Došlo je do greške prilikom slanja email-a!');
                                                                 });


                                                       } else {
                                                            console.error("Failed to create order.");
                                                            // Optionally show toast or UI message here
                                                       }
                                                  } catch (error) {
                                                       console.error("Unexpected error:", error);
                                                       // Optionally show toast or UI message here
                                                  } finally {
                                                       setLoading(false);
                                                  }
                                             }}
                                             sx={{ maxWidth: '200px', marginTop: '10px', height: '40px', color: theme.palette.primary.main }}
                                        >
                                             {loading ? <CircularProgress size={20} color="inherit" /> : 'Poruči'}
                                        </CheckoutNextPrevButton>
                                   </Box>
                              </Box>
                    }
               </Container>
               <ReCaptcha onValidate={() => { setSubmitEnabled(true) }} action={'form_submit'} reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} />
          </ThemeProvider >
     );
};
