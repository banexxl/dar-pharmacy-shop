import { AddressForm } from '@/components/checkout/address/address-form';
import Delivery from '@/components/checkout/delivery/delivery';
import AppDrawer from '@/components/navbar/drawer';
import SearchBox from '@/components/search';
import { UIProvider } from '@/context/ui';
import theme from '@/styles/theme';
import { Box, Container, Paper, Stack, ThemeProvider } from '@mui/material';
import React, { useEffect } from 'react';

const Checkout = () => {
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
                                                            <AddressForm formName='form' ></AddressForm>
                                                            <Delivery></Delivery>
                                                            <SearchBox />
                                                            <AppDrawer isScreenToMedium={false} />
                                                  </UIProvider>
                                        </Stack>
                              </Container>
                    </ThemeProvider >
          )
};

export default Checkout
