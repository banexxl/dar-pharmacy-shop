import CheckoutForm from '@/components/checkout'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import AppDrawer from '@/components/navbar/drawer'
import SearchBox from '@/components/search'
import { UIProvider } from '@/context/ui'
import theme from '@/styles/theme'
import { ThemeProvider } from '@emotion/react'
import { Container, Stack } from '@mui/material'
import { NextPage } from 'next'
import React from 'react'

const Checkout: NextPage = () => {

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
                                                            <SearchBox />
                                                            <CheckoutForm />
                                                            <AppDrawer isScreenToMedium={false} />
                                                  </UIProvider>
                                        </Stack>
                              </Container>
                    </ThemeProvider>
          )
}

export default Checkout