import CheckoutForm from '@/components/checkout'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import AppDrawer from '@/components/navbar/drawer'
import SearchBox from '@/components/search'
import { UIProvider } from '@/context/ui'
import theme from '@/styles/theme'
import { ThemeProvider } from '@emotion/react'
import { Container, Stack } from '@mui/material'
import React from 'react'

function Checkout() {

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
                                                            <Navbar />
                                                            <SearchBox />
                                                            <CheckoutForm />
                                                            <Footer />
                                                            <AppDrawer isScreenToMedium={false} />
                                                  </UIProvider>
                                        </Stack>
                              </Container>
                    </ThemeProvider>
          )
}

export default Checkout