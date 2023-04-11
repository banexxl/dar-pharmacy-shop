import UserInfoForm from '@/components/checkout/userinfo/userinfo-form'
import { UIProvider } from '@/context/ui/ui.context'
import theme, { Colors } from '@/styles/theme'
import { Box, Container, Stack, Step, StepLabel, Stepper, Tab, Tabs } from '@mui/material'
import { InferGetStaticPropsType } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import TabPanel from '@/components/checkout/tab-panel'
import dynamic from 'next/dynamic'
import LoadingWheel from '../../components/loading/loading'
import Payment from '@/components/checkout/payment/payment-form'
import Confirmation from '@/components/checkout/confirmation/confirmation-form'
import { useSelector } from 'react-redux'
import { checkoutSelectors } from '@/store/checkout/checkout.selectors'
import { ICheckoutState } from '@/store/checkout/checkout-state.interface'
import AppDrawer from '@/components/navbar/drawer/drawer'
import SearchBox from '@/components/search/search'
import { CreditCard } from '@/components/checkout/credit-card/credit-card-form'


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
                                                                      <Stepper activeStep={tabIndex}>
                                                                                {steps.map(label => (
                                                                                          <Step key={label}>
                                                                                                    <StepLabel>{label}</StepLabel>
                                                                                          </Step>
                                                                                ))}
                                                                      </Stepper>
                                                                      <Tabs value={tabIndex}>
                                                                                <Tab label={t('checkout.user-info')} sx={{ bgcolor: Colors.secondary }} />
                                                                                <Tab label={t('checkout.payment-info')} sx={{ bgcolor: Colors.secondary }} />
                                                                                <Tab label={t('checkout.card-payment')} sx={{ bgcolor: Colors.secondary }} />
                                                                                <Tab label={t('checkout.confirmation')} sx={{ bgcolor: Colors.secondary }} />
                                                                      </Tabs>
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