import AddressForm from '@/components/checkout/address/address-form'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import AppDrawer from '@/components/navbar/drawer'
import SearchBox from '@/components/search'
import { UIProvider } from '@/context/ui'
import theme from '@/styles/theme'
import { ThemeProvider } from '@emotion/react'
import { Container, Stack, Toolbar } from '@mui/material'
import { InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

const Checkout = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {

          return (
                    <ThemeProvider theme={theme}>
                              <Container
                                        disableGutters
                                        maxWidth="xl"
                                        sx={{
                                                  background: "#fff",
                                        }}
                              >
                                        <Stack>
                                                  <UIProvider>
                                                            <AddressForm formName='addressform'></AddressForm>
                                                            <Toolbar />
                                                            <SearchBox />
                                                            <AppDrawer isScreenToMedium={false} />
                                                  </UIProvider>
                                        </Stack>
                              </Container>
                    </ThemeProvider>
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