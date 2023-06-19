import LoadingWheel from '@/components/loading/loading'
import AppDrawer from '@/components/navbar/drawer/drawer'
import ProductsFilter from '@/components/products-filter/products-filter'
import SearchBox from '@/components/search/search'
import { UIProvider } from '@/context/ui/ui.context'
import { SignInContainer } from '@/styles/signin/signin'
import theme from '@/styles/theme'
import { Box, Button, CircularProgress, Container, Stack } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const SignInPage = () => {

          const { t } = useTranslation('common')
          const [loading, setLoading] = useState(false)
          //this way next js does not try to render theme provider on server (no hydration error : )
          const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
                    loading: () => <LoadingWheel isLoading={true} />,
                    ssr: false
          })

          return (
                    <DynamicThemeProvider theme={theme}>
                              <Container
                                        disableGutters
                                        maxWidth="lg"
                                        sx={{
                                                  background: "#fff",
                                        }}
                              >
                                        <Stack>
                                                  <UIProvider>
                                                            <SignInContainer>
                                                                      <form onSubmit={(e: any) => console.log(e)}>
                                                                                <Box>
                                                                                          <Button variant="contained" endIcon={<AdminPanelSettingsIcon />} size="large">
                                                                                                    Login as Admin
                                                                                          </Button>
                                                                                </Box>
                                                                                <Box>
                                                                                          <Button type="submit" variant="contained" startIcon={<FcGoogle />} size="large">
                                                                                                    Sign in with Google
                                                                                          </Button>
                                                                                </Box>
                                                                      </form>
                                                            </SignInContainer>
                                                            <SearchBox />
                                                            <AppDrawer isScreenToMedium={false} />
                                                  </UIProvider>
                                        </Stack>
                              </Container>
                    </DynamicThemeProvider >
          )
}

export default SignInPage

export async function getStaticProps({ locale }: any) {

          return {
                    props: {
                              ...(await serverSideTranslations(locale ?? 'sr-RS', ['common'], null, ['en-US', 'sr-RS'])),
                              // ...(await serverSideTranslations(locale ?? 'sr-RS', [
                              //           'common',
                              // ])),
                    },
          }
}