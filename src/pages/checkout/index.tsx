import AddressForm from '@/components/checkout/userinfo/userinfo-form'
import { UIProvider } from '@/context/ui/ui.context'
import theme, { Colors } from '@/styles/theme'
import { Box, Container, Stack, Tab, Tabs } from '@mui/material'
import { InferGetStaticPropsType } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import React, { useState } from 'react'
import TabPanel from '@/styles/checkout/tabpanel'
import dynamic from 'next/dynamic'
import LoadingWheel from '../../components/loading/loading'
import Payment from '@/components/checkout/payment/payment'
import Confirmation from '@/components/checkout/confirmation/confirmation'
import CheckoutProvider, { useCheckoutContext } from '@/context/checkout/checkout.context'


const Checkout = (props: InferGetStaticPropsType<typeof getStaticProps>) => {

          const { t } = useTranslation('common')
          const [value, setValue] = useState(0);

          const handleChange = (event: React.SyntheticEvent, newValue: number) => {
                    setValue(newValue);
          };

          const { tabIndex, setTabIndex } = useCheckoutContext()
          console.log("tabindex checkout stranici", tabIndex);
          const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
                    loading: () => <LoadingWheel />,
          })


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
                                                            <CheckoutProvider>
                                                                      <Box sx={{ borderBottom: 3, borderColor: Colors.secondary }}>
                                                                                <Tabs value={value} onChange={handleChange}>
                                                                                          <Tab label={t('checkout.user-info')} sx={{ bgcolor: Colors.secondary }} />
                                                                                          <Tab label={t('checkout.payment-info')} sx={{ bgcolor: Colors.secondary }} />
                                                                                          <Tab label={t('checkout.confirmation')} sx={{ bgcolor: Colors.secondary }} />
                                                                                </Tabs>
                                                                                <TabPanel value={value} index={tabIndex} >
                                                                                          <AddressForm formName={'addressform'} />
                                                                                </TabPanel>
                                                                                <TabPanel value={value} index={tabIndex + 1} >
                                                                                          <Payment sameAsShipping={false} />
                                                                                          {/* <CreditCard values={cardValues} handleChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
                                                                                          throw new Error('Function not implemented.')
                                                                                }} /> */}
                                                                                </TabPanel>
                                                                                <TabPanel value={value} index={tabIndex + 2} >
                                                                                          <Confirmation />
                                                                                </TabPanel>
                                                                      </Box>
                                                            </CheckoutProvider>
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