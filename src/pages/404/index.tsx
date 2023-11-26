import LoadingWheel from '@/components/loading/loading'
import AppDrawer from '@/components/navbar/drawer/drawer'
import SearchBox from '@/components/search/search'
import { UIProvider } from '@/context/ui/ui.context'
import { Container404, Heading404, StyledButton404, Message404 } from '@/styles/404/404'
import theme from '@/styles/theme'
import { Container, Stack } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const PageNotFount = () => {



          const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
                    loading: () => <LoadingWheel />,
                    ssr: false
          })

          return (
                    <DynamicThemeProvider theme={theme}>
                              <Head>
                                        <title>404</title>
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
                                                            <Container404>
                                                                      <Heading404>404 - Stranica nije pronađena {'\u{1F612}'}</Heading404>
                                                                      <Message404 variant="body1">
                                                                                UPS!....Stranica koju ste zahtevali je u izradi! Možda iznenadi i pojavi se posle osvežavanja stranice {'\u{1F609}'}
                                                                      </Message404>
                                                                      <Link href="/" passHref>
                                                                                <StyledButton404 variant="contained" color="primary">
                                                                                          Nazad na početnu
                                                                                </StyledButton404>
                                                                      </Link>
                                                            </Container404>
                                                            <SearchBox />
                                                            <AppDrawer isScreenToMedium={false} />
                                                  </UIProvider>
                                        </Stack>
                              </Container>
                    </DynamicThemeProvider>
          )
}

export async function getStaticProps({ locale }: any) {
          return {
                    props: {
                              //...(await serverSideTranslations('sr-RS'))
                              // ...(await serverSideTranslations('sr-RS' ?? context.locale, ['common'], null, ['en-US', 'sr-RS'])),
                              // Will be passed to the page component as props
                    },
          }
}


export default PageNotFount