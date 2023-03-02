import AddressForm from '@/components/checkout/userinfo/userinfo-form'
import { UIProvider } from '@/context/ui'
import theme, { Colors } from '@/styles/theme'
import { Box, Container, Grid, Stack, Tab, Tabs } from '@mui/material'
import { InferGetStaticPropsType } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import React, { useState } from 'react'
import TabPanel from '@/styles/checkout/tabpanel'
import dynamic from 'next/dynamic'
import LoadingWheel from '../../components/loading/loading'
import Payment from '@/components/checkout/payment/payment'
import { CreditCard } from '@mui/icons-material'
import EmailAddon from '@/components/checkout/userinfo/email-addon'


const Checkout = (props: InferGetStaticPropsType<typeof getStaticProps>) => {

          const { t } = useTranslation('common')
          const [value, setValue] = useState(0);

          const handleChange = (event: React.SyntheticEvent, newValue: number) => {
                    setValue(newValue);
          };

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
                                        maxWidth="xl"
                                        sx={{
                                                  background: "#fff",
                                        }}
                              >
                                        <Stack>
                                                  <UIProvider>
                                                            <Box sx={{ borderBottom: 3, borderColor: Colors.secondary }}>
                                                                      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                                                                <Tab label={t('checkout.user-info')} sx={{ bgcolor: Colors.secondary }} />
                                                                                <Tab label={t('checkout.payment-info')} sx={{ bgcolor: Colors.secondary }} />
                                                                                <Tab label={t('checkout.confirmation')} sx={{ bgcolor: Colors.secondary }} />
                                                                      </Tabs>
                                                            </Box>
                                                            <TabPanel value={value} index={0}>
                                                                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                                                                <EmailAddon />
                                                                                <AddressForm formName={'addressform'} />
                                                                      </Box>
                                                            </TabPanel>
                                                            <TabPanel value={value} index={1}>
                                                                      <Payment />
                                                                      {/* <CreditCard values={cardValues} handleChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
                                                                                throw new Error('Function not implemented.')
                                                                      }} /> */}
                                                            </TabPanel>

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