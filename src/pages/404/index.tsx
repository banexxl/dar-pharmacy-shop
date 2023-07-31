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

          const { t } = useTranslation('common')

          const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
                    loading: () => <LoadingWheel />,
                    ssr: false
          })

          return (
                    <DynamicThemeProvider theme={theme}>
                              <Head>
                                        <title>{t('checkout.title')}</title>
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
                                                                      <Heading404>{t('404.not-found')} {'\u{1F612}'}</Heading404>
                                                                      <Message404 variant="body1">
                                                                                {t('404.message')} {'\u{1F609}'}
                                                                      </Message404>
                                                                      <Link href="/" passHref>
                                                                                <StyledButton404 variant="contained" color="primary">
                                                                                          {t('404.back-to-home')}
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
                              ...(await serverSideTranslations('sr-RS' ?? locale, ['common'], null, ['en-US', 'sr-RS'])),
                              // Will be passed to the page component as props
                    },
          }
}


export default PageNotFount