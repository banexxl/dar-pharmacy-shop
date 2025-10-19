import { UIProvider } from '@/context/ui/ui.context'
import theme, { Colors } from '@/styles/theme'
import { Box, CircularProgress, Container, Stack, useMediaQuery, Tabs, Tab, Typography, Stepper, Step, StepLabel } from '@mui/material'
import React, { useState } from 'react'
import { TabPanel } from '@/components/checkout/tab-panel'
import dynamic from 'next/dynamic'
import Confirmation from '@/components/checkout/cart-confirmation/cart-confirmation'
import AppDrawer from '@/components/navbar/drawer/drawer'
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

     const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
          loading: () => <CircularProgress />,
          ssr: false
     })

     const steps = ["Adresa za dostavu", "Provera korpe", "Način plaćanja"];

     return (
          <ReCaptchaProvider reCaptchaKey={process.env.GOOGLE_CAPTCHA_SITE_KEY} useEnterprise>
               <DynamicThemeProvider theme={theme}>
                    <Seo title={'Plaćanje/Poručivanje'} description={'Plaćanje/Poručivanje'} url={'https://www.apoteka-dar.rs/'} />
                    <Container
                         disableGutters
                         maxWidth="lg"
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

                                        <Tabs className="checkout-tabs" value={tabIndex}>
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
                                   <AppDrawer isScreenToMedium={false} />
                              </UIProvider>
                         </Stack>
                    </Container>
               </DynamicThemeProvider >
          </ReCaptchaProvider>
     )
}

export default Checkout