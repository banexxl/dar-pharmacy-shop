import UserInfoForm from '@/components/checkout/userinfo/userinfo-form'
import { UIProvider } from '@/context/ui/ui.context'
import theme, { Colors } from '@/styles/theme'
import { Box, Container, Stack, Step, StepLabel, Stepper, Tab, Tabs, Typography } from '@mui/material'
import { InferGetStaticPropsType } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { TabPanel } from '@/components/checkout/tab-panel'
import dynamic from 'next/dynamic'
import LoadingWheel from '../../components/loading/loading'
import Payment from '@/components/checkout/payment-info/payment-info-form'
import Confirmation from '@/components/checkout/confirmation/confirmation-form'
import { useSelector } from 'react-redux'
import { ICheckoutState } from '@/store/checkout/checkout-state.interface'
import AppDrawer from '@/components/navbar/drawer/drawer'
import SearchBox from '@/components/search/search'
import { CreditCard } from '@/components/checkout/payment-options/payment-options-form'
import { CheckoutTabs, CheckoutTab, CheckoutTabText } from '@/styles/checkout/checkout-tabs'
import { CheckoutStep, CheckoutStepLabel, CheckoutStepper } from '@/styles/checkout/checkout-stepper'


const Checkout = (props: InferGetStaticPropsType<typeof getStaticProps>) => {

          const { t } = useTranslation('common')
          const [tabIndex, setTabIndex] = useState(0)
          const setTab = (tabIndex: number) => {
                    setTabIndex(tabIndex)
                    return 0
          }


          const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
                    loading: () => <LoadingWheel isLoading={true} />,
                    ssr: false
          })

          const steps = [t("checkout.shippingAddress"), t("checkout.payment-info"), t("checkout.card-payment"), t("checkout.confirmation")];

          return (
                    <DynamicThemeProvider theme={theme}>
                              <Head>
                                        <title>{t('checkout.title')}</title>
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
                                                            <Box sx={{ borderBottom: 3, borderColor: Colors.secondary, marginTop: '100px' }}>
                                                                      <CheckoutStepper activeStep={tabIndex}>
                                                                                {steps.map(label => (
                                                                                          <CheckoutStep key={label}>
                                                                                                    <CheckoutStepLabel>{label}</CheckoutStepLabel>
                                                                                          </CheckoutStep>
                                                                                ))}
                                                                      </CheckoutStepper>

                                                                      <CheckoutTabs value={tabIndex} TabIndicatorProps={{ sx: { display: 'none' } }}>
                                                                                <CheckoutTab label={<CheckoutTabText>{t('checkout.user-info')}</CheckoutTabText>} />
                                                                                <CheckoutTab label={<CheckoutTabText>{t('checkout.payment-info')}</CheckoutTabText>} />
                                                                                <CheckoutTab label={<CheckoutTabText>{t('checkout.card-payment')}</CheckoutTabText>} />
                                                                                <CheckoutTab label={<CheckoutTabText>{t('checkout.confirmation')}</CheckoutTabText>} />
                                                                      </CheckoutTabs>

                                                                      <TabPanel value={tabIndex} index={0}>
                                                                                <UserInfoForm formName={'userinfo'} setTab={setTab} tabIndex={0} />
                                                                      </TabPanel>
                                                                      <TabPanel value={tabIndex} index={1} >
                                                                                <Payment sameAsShipping={false} setTab={setTab} formName={'paymentInfo'} tabIndex={1} />
                                                                      </TabPanel>
                                                                      <TabPanel value={tabIndex} index={2} >
                                                                                <CreditCard setTab={setTab} formName='credit-card' tabIndex={2} />
                                                                      </TabPanel>
                                                                      <TabPanel value={tabIndex} index={3} >
                                                                                <Confirmation setTab={setTab} tabIndex={3} />
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
                              ...(await serverSideTranslations(locale, [
                                        'common',
                              ])),
                              // Will be passed to the page component as props
                    },
          }
}

export default Checkout