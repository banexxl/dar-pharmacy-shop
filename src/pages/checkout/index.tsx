import AddressForm from '@/components/checkout/address/address-form'
import { CreditCard } from '@/components/checkout/credit-card/credit-card'
import Delivery from '@/components/checkout/delivery/delivery'
import AppDrawer from '@/components/navbar/drawer'
import SearchBox from '@/components/search'
import { UIProvider } from '@/context/ui'
import { CreditCardFormValues } from '@/interfaces/checkout/credit-card-form-values.interface'
import theme from '@/styles/theme'
import { ThemeProvider } from '@emotion/react'
import { Container, Stack, Toolbar } from '@mui/material'
import { InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

const cardValues: CreditCardFormValues = {
          cardNumber: '1111-1111-1111-1111',
          expiryDate: '12/23',
          securityCode: '233'
}

const Checkout = (props: InferGetStaticPropsType<typeof getStaticProps>) => {

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
                                                            <CreditCard formName='creditcard' values={cardValues} handleChange={() => console.log("aaaa")} />
                                                            <Delivery></Delivery>
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