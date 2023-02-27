import AddressForm from '@/components/checkout/userinfo/userinfo-form'
import { UIProvider } from '@/context/ui'
import theme, { Colors } from '@/styles/theme'
import { ThemeProvider } from '@emotion/react'
import { Box, Container, Stack, Tab, Tabs } from '@mui/material'
import { InferGetStaticPropsType } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import React, { useState } from 'react'
import TabPanel from '@/styles/checkout/tabpanel'


const Checkout = (props: InferGetStaticPropsType<typeof getStaticProps>) => {

          const { t } = useTranslation('common')
          const [value, setValue] = useState(0);

          const handleChange = (event: React.SyntheticEvent, newValue: number) => {
                    setValue(newValue);
          };

          return (
                    <ThemeProvider theme={theme}>
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
                                                                                <Tab label={t('checkout.user-info')} sx={{ bgcolor: Colors.secondary }} />
                                                                                <Tab label={t('checkout.user-info')} sx={{ bgcolor: Colors.secondary }} />
                                                                      </Tabs>
                                                            </Box>
                                                            <TabPanel value={value} index={0}>
                                                                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                                                                                <AddressForm formName={'addressform'} />

                                                                      </Box>
                                                            </TabPanel>
                                                            <TabPanel value={value} index={2}>
                                                                      {/* <CreditCard values={cardValues} handleChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
                                                                                throw new Error('Function not implemented.')
                                                                      }} /> */}
                                                            </TabPanel>

                                                  </UIProvider>
                                        </Stack>
                              </Container>
                    </ThemeProvider >
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