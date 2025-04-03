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
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

interface CreditCardProps {
     setTab: (tabIndex: number) => number;
     formName: string;
     tabIndex: number;
}

export const CreditCard: FunctionComponent<CreditCardProps> = (props: CreditCardProps) => {

     const [paymentOption, setPaymentOption] = useState('onDelivery')
     const [submitEnabled, setSubmitEnabled] = useState<boolean>(false)
     const [loading, setLoading] = useState<boolean>(false)
     const session = useSession()
     const router = useRouter()
     const userFormSelector = useSelector((state: any) => state.persistReduce.userInfoFormSliceReducer)
     const totalItemPrice: any = useSelector(cartTotalPriceSelector(450))
     const cart = useSelector((state: any) => state.persistReduce.cartSliceReducer)
     const dispatch = useDispatch()

     const handleBack = () => {
          props.tabIndex === 2 ? props.setTab?.(props.tabIndex - 1) : null
     };

     const handleNext = () => {
          props.tabIndex === 0 ? props.setTab?.(props.tabIndex + 1) : null
     };


     const onOrderItems = async () => {
          try {
               await fetch('/api/orders', {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ cart, userFormSelector, totalItemPrice })
               })
          } catch (error) {
               console.log(error);
          }
     }

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
                         <FormControlLabel value="onDelivery" defaultChecked control={<Radio />} label={"Plaćanje pouzećem"} />
                         <FormControlLabel value="cardPayment" control={<Radio />} label={"Kartično plaćanje"} />
                    </RadioGroup>
                    {
                         paymentOption === 'cardPayment' ?
                              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px', gap: '20px' }}>
                                   <Typography variant="body1" >
                                        Izabrali ste kartično plaćanje. Bićete preusmereni na drugu platformu za završetak transakcije.
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
                                   <CheckoutNextPrevButton onClick={() => handleNext()} sx={{ maxWidth: '100px', marginTop: '10px' }} endIcon={<NavigateNextIcon />}>
                                        Potvrdi
                                   </CheckoutNextPrevButton>
                              </Box>
                              :
                              <Box>
                                   <Typography variant="body1" sx={{ textAlign: 'left', mb: '30px' }}>
                                        Odabirom "Plaćanje pouzećem", iznos od {parseFloat(totalItemPrice).toFixed(2)} dinara plaćate kuriru prilikom dostave paketa.
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

                                   <CheckoutNextPrevButton type='submit' sx={{ maxWidth: '100px' }} startIcon={<NavigateBeforeIcon />} onClick={() => handleBack()}>
                                        Nazad
                                   </CheckoutNextPrevButton>
                                   <CheckoutNextPrevButton
                                        disabled={totalItemPrice === 0 || !submitEnabled || loading}
                                        onClick={() => {
                                             setLoading(true)
                                             SendCheckoutConfirmationEmailToAdmin({
                                                  email: 'maja@apoteka-dar.rs',
                                                  customerEmail: userFormSelector.email.toLowerCase(),
                                                  subject: 'Poružbenica',
                                                  name: userFormSelector.name,
                                                  title: 'Potvrda porudzbenice',
                                                  cart, streetAddress: userFormSelector.streetAddress, city: userFormSelector.city,
                                                  country: userFormSelector.country, phoneNumber: userFormSelector.phoneNumber,
                                             }).then(() => {
                                                  SendCheckoutConfirmationEmailToUser({
                                                       email: userFormSelector.email.toLowerCase(), subject: 'Poružbenica',
                                                       name: userFormSelector.name, title: 'Potvrda porudzbenice',
                                                       cart, streetAddress: userFormSelector.streetAddress, city: userFormSelector.city,
                                                       country: userFormSelector.country, phoneNumber: userFormSelector.phoneNumber,
                                                  }).then(() => {
                                                       dispatch(clearCart()),
                                                            dispatch(clearUserForm())
                                                  }).then(() => {
                                                       onOrderItems()
                                                  }).finally(() => {
                                                       setTimeout(() => {
                                                            setLoading(false)
                                                       }, 2000)
                                                       router.push('/')
                                                  })
                                             })

                                        }}
                                        sx={{ maxWidth: '200px', marginTop: '10px', height: '40px', color: theme.palette.primary.main }}
                                   >
                                        {loading ? <CircularProgress size={20} color="inherit" /> : 'Poruči'}
                                   </CheckoutNextPrevButton>
                              </Box>
                    }
               </Container>
               <ReCaptcha onValidate={() => { setSubmitEnabled(true) }} action={'form_submit'} reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} />
          </ThemeProvider >
     );
};
