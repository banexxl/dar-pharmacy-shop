import AppDrawer from '@/components/navbar/drawer';
import SearchBox from '@/components/search';
import { UIProvider } from '@/context/ui';
import theme from '@/styles/theme';
import { CheckBox } from '@mui/icons-material';
import { Box, Container, Stack, ThemeProvider } from '@mui/material';
import React from 'react'

const CheckoutForm = () => {

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
                                                            <AppDrawer isScreenToMedium={false} />
                                                  </UIProvider>
                                        </Stack>
                              </Container>
                    </ThemeProvider>
          );
}

export default CheckoutForm