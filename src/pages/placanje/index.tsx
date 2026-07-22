import { UIProvider } from '@/context/ui/ui.context'
import theme, { Colors } from '@/styles/theme'
import { Box, Container, Stack, useMediaQuery, Tabs, Tab, Typography, Stepper, Step, StepLabel, Paper, Chip } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { TabPanel } from '@/components/checkout/tab-panel'
// removed per-page ThemeProvider; using global provider
import Confirmation from '@/components/checkout/cart-confirmation/cart-confirmation'
import SearchBox from '@/components/search/search'
import { PaymentOptions } from '@/components/checkout/payment-options/payment-options-form'
import { ReCaptchaProvider } from "next-recaptcha-v3";
import UserInfoFormData from '@/components/checkout/userinfo/user-info-form-data'
import { Seo } from '@/components/seo'
import PaymentStrip from '@/components/payment-strip/payment-strip'
import Script from 'next/script'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined'
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined'

declare global {
     interface Window {
          dataLayer: any[];
     }
}

const Checkout = () => {

     const [tabIndex, setTabIndex] = useState(0)
     const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"))
     const steps = ["Adresa za dostavu", "Provera korpe", "Nacin placanja"];

     const setTab = (tabIndex: number) => {
          setTabIndex(tabIndex)
          return 0
     }

     // mark this page as a checkout page
     useEffect(() => {
          if (typeof window === 'undefined') return;
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
               event: 'pageview',
               pageType: 'checkout',
               path: '/placanje',
          });

          // Fire your "begin checkout" Ads conversion via GTM trigger
          window.dataLayer.push({
               event: 'begin_checkout_ads',
               // If you want, add values GTM can map to conversion value/currency
               value: undefined,
               currency: 'RSD',
          })
     }, []);

     // send step change events
     useEffect(() => {
          if (typeof window === 'undefined') return;
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
               event: 'checkout_step_view',
               checkoutStep: tabIndex + 1,     // 1,2,3
               checkoutStepLabel: steps[tabIndex], // optional
          });
     }, [tabIndex]);

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
               <Seo title={'Placanje/Porucivanje'} description={'Placanje/Porucivanje'} url={'https://www.apoteka-dar.rs/'} />
               <Container
                    maxWidth="xl"
                    sx={{
                         background: "linear-gradient(180deg, #f5f8ff 0%, #ffffff 40%)",
                         px: { xs: 2, md: 3 },
                    }}
               >
                    <Stack>
                         <UIProvider>
                              <Box sx={{ marginTop: isScreenToMedium ? '100px' : '150px', pb: { xs: 4, md: 6 } }}>
                                   <Paper
                                        elevation={0}
                                        sx={{
                                             borderRadius: 4,
                                             p: { xs: 2.5, md: 4 },
                                             background: 'linear-gradient(140deg, #eaf2ff 0%, #f7f9ff 50%, #eef7f2 100%)',
                                             border: '1px solid #d7e4ff',
                                             mb: 3,
                                        }}
                                   >
                                        <Typography
                                             sx={{
                                                  color: Colors.primary.main,
                                                  fontSize: { xs: '1.5rem', md: '2rem' },
                                                  fontWeight: 700,
                                                  letterSpacing: '-0.01em',
                                             }}
                                        >
                                             Bezbedna naplata i brza isporuka
                                        </Typography>
                                        <Typography sx={{ mt: 1, color: '#365075', maxWidth: '70ch' }}>
                                             Završite porudžbinu kroz tri jasna koraka. Vaši podaci su zaštićeni, a dostava pouzdana na teritoriji cele Srbije.
                                        </Typography>
                                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.2} sx={{ mt: 2 }}>
                                             <Chip icon={<ShieldOutlinedIcon />} label="SSL zaštita podataka" sx={{ bgcolor: '#ffffff', border: '1px solid #cfdaf5' }} />
                                             <Chip icon={<LocalShippingOutlinedIcon />} label="Dostava 1-5 radnih dana" sx={{ bgcolor: '#ffffff', border: '1px solid #cfdaf5' }} />
                                        </Stack>
                                   </Paper>

                                   <Box
                                        sx={{
                                             display: 'grid',
                                             gridTemplateColumns: { xs: '1fr', lg: 'minmax(0, 1fr) 320px' },
                                             gap: 3,
                                             alignItems: 'start',
                                        }}
                                   >
                                        <Paper
                                             elevation={0}
                                             sx={{
                                                  borderRadius: 4,
                                                  border: '1px solid #d7deea',
                                                  overflow: 'hidden',
                                                  background: '#ffffff',
                                             }}
                                        >
                                             <Box sx={{ px: { xs: 1, md: 2 }, pt: { xs: 2, md: 3 }, borderBottom: '1px solid #e8edf6' }}>
                                                  <Stepper
                                                       className="checkout-stepper"
                                                       sx={{
                                                            display: { md: 'none' },
                                                            mb: 2,
                                                       }}
                                                       activeStep={tabIndex}
                                                  >
                                                       {steps.map(label => (
                                                            <Step className="checkout-step" key={label}>
                                                                 <StepLabel className="checkout-step-label">{label}</StepLabel>
                                                            </Step>
                                                       ))}
                                                  </Stepper>

                                                  <Tabs
                                                       className="checkout-tabs"
                                                       value={tabIndex}
                                                       variant={isScreenToMedium ? 'scrollable' : 'fullWidth'}
                                                       scrollButtons={isScreenToMedium}
                                                       allowScrollButtonsMobile
                                                       orientation="horizontal"
                                                       sx={{
                                                            display: { xs: 'none', md: 'flex' },
                                                            minHeight: 60,
                                                            '& .MuiTabs-indicator': {
                                                                 height: 3,
                                                                 borderRadius: 99,
                                                                 backgroundColor: Colors.primary.main,
                                                            },
                                                            '& .MuiTabs-flexContainer': { flexWrap: 'nowrap' },
                                                            '& .MuiTabs-scrollButtons': {
                                                                 order: 0,
                                                                 alignSelf: 'center',
                                                            },
                                                       }}
                                                       onChange={(e, newValue) => {
                                                            if (!isScreenToMedium) setTabIndex(newValue);
                                                       }}
                                                  >
                                                       {steps.map((label, index) => (
                                                            <Tab
                                                                 className="checkout-tab"
                                                                 key={index}
                                                                 label={
                                                                      <Typography className="checkout-tab-text" sx={{ fontWeight: 600, textTransform: 'none' }}>
                                                                           {index + 1}. {label}
                                                                      </Typography>
                                                                 }
                                                                 sx={{ minHeight: 60 }}
                                                            />
                                                       ))}
                                                  </Tabs>
                                             </Box>

                                             <Box sx={{ px: { xs: 1, md: 2 }, pb: { xs: 1, md: 2 } }}>
                                                  <TabPanel value={tabIndex} index={0}>
                                                       <UserInfoFormData formName={'user-form-name'} setTab={setTab} tabIndex={0} />
                                                  </TabPanel>

                                                  <TabPanel value={tabIndex} index={1} >
                                                       <Confirmation setTab={setTab} tabIndex={1} />
                                                  </TabPanel>

                                                  <TabPanel value={tabIndex} index={2} >
                                                       <PaymentOptions setTab={setTab} formName='credit-card' tabIndex={2} />
                                                  </TabPanel>
                                             </Box>
                                        </Paper>

                                        <Paper
                                             elevation={0}
                                             sx={{
                                                  borderRadius: 4,
                                                  border: '1px solid #d7deea',
                                                  p: 3,
                                                  background: '#ffffff',
                                                  display: { xs: 'none', lg: 'block' },
                                             }}
                                        >
                                             <Typography sx={{ fontWeight: 700, fontSize: '1.1rem', color: Colors.primary.main }}>
                                                  Informacije
                                             </Typography>
                                             <Stack spacing={2.2} sx={{ mt: 2 }}>
                                                  <Box sx={{ display: 'flex', gap: 1.2, alignItems: 'flex-start' }}>
                                                       <ShieldOutlinedIcon sx={{ color: Colors.primary.main, mt: '2px' }} />
                                                       <Typography variant="body2" color="text.secondary">Kupovina se odvija kroz bezbedan proces i zaštićene korake.</Typography>
                                                  </Box>
                                                  <Box sx={{ display: 'flex', gap: 1.2, alignItems: 'flex-start' }}>
                                                       <LocalShippingOutlinedIcon sx={{ color: Colors.primary.main, mt: '2px' }} />
                                                       <Typography variant="body2" color="text.secondary">Dostava je besplatna za porudžbine iznad 8000 RSD.</Typography>
                                                  </Box>
                                                  <Box sx={{ display: 'flex', gap: 1.2, alignItems: 'flex-start' }}>
                                                       <SupportAgentOutlinedIcon sx={{ color: Colors.primary.main, mt: '2px' }} />
                                                       <Typography variant="body2" color="text.secondary">Tim DAR apoteke je dostupan za pomoć tokom poručivanja.</Typography>
                                                  </Box>
                                             </Stack>
                                        </Paper>
                                   </Box>

                                   {/* <Box sx={{ mt: 3 }}>
                                        <PaymentStrip />
                                   </Box> */}
                              </Box>
                              <SearchBox />

                         </UIProvider>
                    </Stack>
               </Container>

          </ReCaptchaProvider>
     )
}

export default Checkout



