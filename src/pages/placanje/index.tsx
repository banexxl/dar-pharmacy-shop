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

const Checkout = () => {

     const [tabIndex, setTabIndex] = useState(0)
     const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"))

     const setTab = (tabIndex: number) => {
          setTabIndex(tabIndex)
          return 0
     }

     // mark this page as a checkout page
     useEffect(() => {
          if (typeof window === 'undefined') return;
          (window as any).dataLayer = (window as any).dataLayer || [];
          (window as any).dataLayer.push({
               event: 'pageview',
               pageType: 'checkout',
               path: '/placanje',
          });
     }, []);

     // send step change events
     useEffect(() => {
          if (typeof window === 'undefined') return;
          (window as any).dataLayer = (window as any).dataLayer || [];
          (window as any).dataLayer.push({
               event: 'checkout_step_view',
               checkoutStep: tabIndex + 1,     // 1,2,3
               checkoutStepLabel: ['Address', 'Review', 'Payment'][tabIndex], // optional
          });
     }, [tabIndex]);

     const steps = ["Adresa za dostavu", "Provera korpe", "Nacin placanja"];

     return (
          <ReCaptchaProvider reCaptchaKey={process.env.GOOGLE_CAPTCHA_SITE_KEY} useEnterprise>
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



