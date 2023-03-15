import AddressForm from '@/components/checkout/userinfo/userinfo-form'
import { UIProvider } from '@/context/ui/ui.context'
import theme, { Colors } from '@/styles/theme'
import { Box, Container, Stack, Step, StepLabel, Stepper, Tab, Tabs } from '@mui/material'
import { InferGetStaticPropsType } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import TabPanel from '@/styles/checkout/tabpanel'
import dynamic from 'next/dynamic'
import LoadingWheel from '../../components/loading/loading'
import Payment from '@/components/checkout/payment/payment'
import Confirmation from '@/components/checkout/confirmation/confirmation'
import { CheckoutProvider, useCheckoutContext } from '@/context/checkout/checkout.context'
import { CheckoutNextPrevButton } from '@/styles/checkout/userinfo'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const Checkout = (props: InferGetStaticPropsType<typeof getStaticProps>) => {

          const { t } = useTranslation('common')
          const [tabIndex, setTabIndex] = useState(0)


          const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
                    loading: () => <LoadingWheel />,
          })

          const steps = ["Shipping address", "Payment details", "Review your order"];

          function getStepContent(step: number) {
                    switch (step) {
                              case 0:
                                        return <AddressForm formName={'addressform'} />;
                              case 1:
                                        return <Payment sameAsShipping={false} />;
                              case 2:
                                        return <Confirmation />;
                              default:
                                        throw new Error("Unknown step");
                    }
          }

          const handleNext = () => {
                    setTabIndex(tabIndex + 1)
          };

          const handleBack = () => {
                    setTabIndex(tabIndex - 1)
          };

          const handleReset = () => {
                    setTabIndex(0)
          };


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
                                                            <Box sx={{ borderBottom: 3, borderColor: Colors.secondary }}>
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
                                                                                <Tab label={t('checkout.confirmation')} sx={{ bgcolor: Colors.secondary }} />
                                                                      </Tabs>
                                                                      <TabPanel value={tabIndex} index={0}>
                                                                                <AddressForm formName={'addressform'} />
                                                                      </TabPanel>
                                                                      <TabPanel value={tabIndex} index={1} >
                                                                                <Payment sameAsShipping={false} />
                                                                                {/* <CreditCard values={cardValues} handleChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
                                                                                          throw new Error('Function not implemented.')
                                                                                }} /> */}
                                                                      </TabPanel>
                                                                      <TabPanel value={tabIndex} index={2} >
                                                                                <Confirmation />
                                                                      </TabPanel>
                                                                      <CheckoutNextPrevButton type='submit' sx={{ maxWidth: '100px' }} endIcon={<NavigateNextIcon />} onClick={() => handleNext()}>
                                                                                {t('checkout.nextbutton')}
                                                                      </CheckoutNextPrevButton>
                                                                      <CheckoutNextPrevButton type='submit' sx={{ maxWidth: '100px' }} startIcon={<NavigateBeforeIcon />} onClick={() => handleBack()}>
                                                                                {t('checkout.previousbutton')}
                                                                      </CheckoutNextPrevButton>
                                                            </Box>

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