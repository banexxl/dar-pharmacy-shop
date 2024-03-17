import UserInfoForm from '@/components/checkout/userinfo/userinfo-form'
import { UIProvider } from '@/context/ui/ui.context'
import theme, { Colors } from '@/styles/theme'
import { Box, Container, Stack } from '@mui/material'
import { InferGetStaticPropsType } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import React, { useState } from 'react'
import { TabPanel } from '@/components/checkout/tab-panel'
import dynamic from 'next/dynamic'
import LoadingWheel from '../../components/loading/loading'
import Confirmation from '@/components/checkout/confirmation/confirmation-form'
import AppDrawer from '@/components/navbar/drawer/drawer'
import SearchBox from '@/components/search/search'
import { CreditCard } from '@/components/checkout/payment-options/payment-options-form'
import { CheckoutTabs, CheckoutTab, CheckoutTabText } from '@/styles/checkout/checkout-tabs'
import { CheckoutStep, CheckoutStepLabel, CheckoutStepper } from '@/styles/checkout/checkout-stepper'


const Checkout = (props: InferGetStaticPropsType<typeof getStaticProps>) => {


     const [tabIndex, setTabIndex] = useState(0)
     const setTab = (tabIndex: number) => {
          setTabIndex(tabIndex)
          return 0
     }


     const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
          loading: () => <LoadingWheel />,
          ssr: false
     })

     const steps = ["Adresa za dostavu", "Način plaćanje", "Potvrda"];

     return (
          <DynamicThemeProvider theme={theme}>
               <Head>
                    <title>Narudžbenica</title>
               </Head>
               <Container
                    disableGutters
                    maxWidth="lg"
                    sx={{
                         background: "#fff",
                    }}
               >
                    <Stack>
                         <UIProvider>
                              <Box sx={{ borderBottom: 3, borderColor: Colors.primary.lighter, marginTop: '100px' }}>
                                   <CheckoutStepper activeStep={tabIndex}>
                                        {steps.map(label => (
                                             <CheckoutStep key={label}>
                                                  <CheckoutStepLabel>{label}</CheckoutStepLabel>
                                             </CheckoutStep>
                                        ))}
                                   </CheckoutStepper>

                                   <CheckoutTabs value={tabIndex} TabIndicatorProps={{ sx: { display: 'none' } }}>
                                        <CheckoutTab label={<CheckoutTabText>Adresa za dostavu</CheckoutTabText>} />
                                        <CheckoutTab label={<CheckoutTabText>Način plaćanja</CheckoutTabText>} />
                                        <CheckoutTab label={<CheckoutTabText>Potvrda</CheckoutTabText>} />
                                   </CheckoutTabs>

                                   <TabPanel value={tabIndex} index={0}>
                                        <UserInfoForm formName={'userinfo'} setTab={setTab} tabIndex={0} />
                                   </TabPanel>
                                   <TabPanel value={tabIndex} index={1} >
                                        <CreditCard setTab={setTab} formName='credit-card' tabIndex={1} />
                                   </TabPanel>
                                   <TabPanel value={tabIndex} index={2} >
                                        <Confirmation setTab={setTab} tabIndex={2} />
                                   </TabPanel>
                              </Box>
                              <SearchBox />
                              <AppDrawer isScreenToMedium={false} />
                         </UIProvider>
                    </Stack>
               </Container>
          </DynamicThemeProvider >
     )
}


export async function getStaticProps({ locale }: any) {
     return {
          props: {
               //...(await serverSideTranslations('sr-RS'))
               // ...(await serverSideTranslations('sr-RS' ?? context.locale, ['common'], null, ['en-US', 'sr-RS'])),
               // Will be passed to the page component as props
          },
     }
}

export default Checkout