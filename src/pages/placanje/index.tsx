import { UIProvider } from '@/context/ui/ui.context'
import theme, { Colors } from '@/styles/theme'
import { Box, Container, Stack, useMediaQuery, Tabs, Tab, Typography, Stepper, Step, StepLabel } from '@mui/material'
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
                         background: "#fff",
                    }}
               >
                    <Stack>
                         <UIProvider>
                              <Box sx={{
                                   borderBottom: 3,
                                   borderColor: Colors.primary.lighter,
                                   marginTop: isScreenToMedium ? '100px' : '150px',
                              }}>

                                   <Stepper
                                        className="checkout-stepper"
                                        sx={{
                                             display: { md: 'none' }
                                        }}
                                        activeStep={tabIndex}>
                                        {steps.map(label => (
                                             <Step className="checkout-step" key={label}>
                                                  <StepLabel className="checkout-step-label">{label}</StepLabel>
                                             </Step>
                                        ))}
                                   </Stepper>

                                   <Tabs
                                        className="checkout-tabs"
                                        value={tabIndex}
                                        variant={isScreenToMedium ? 'scrollable' : 'standard'}
                                        scrollButtons={isScreenToMedium}
                                        allowScrollButtonsMobile
                                        orientation="horizontal"
                                        sx={{
                                             flexWrap: 'nowrap',
                                             '& .MuiTabs-flexContainer': { flexWrap: 'nowrap' },
                                             '& .MuiTabs-scrollButtons': {
                                                  order: 0,
                                                  alignSelf: 'center',
                                             }
                                        }}
                                        onChange={(e, newValue) => {
                                             if (!isScreenToMedium) setTabIndex(newValue);
                                        }}
                                   >
                                        {steps.map((label, index) => (
                                             <Tab className="checkout-tab" key={index} label={<Typography className="checkout-tab-text">{label}</Typography>} />
                                        ))}
                                   </Tabs>

                                   <TabPanel value={tabIndex} index={0}>
                                        <UserInfoFormData formName={'user-form-name'} setTab={setTab} tabIndex={0} />
                                   </TabPanel>

                                   <TabPanel value={tabIndex} index={1} >
                                        <Confirmation setTab={setTab} tabIndex={1} />
                                   </TabPanel>

                                   <TabPanel value={tabIndex} index={2} >
                                        <PaymentOptions setTab={setTab} formName='credit-card' tabIndex={2} />
                                   </TabPanel>

                                   <PaymentStrip />
                              </Box>
                              <SearchBox />

                         </UIProvider>
                    </Stack>
               </Container>

          </ReCaptchaProvider>
     )
}

export default Checkout



