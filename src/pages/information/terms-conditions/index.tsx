import LoadingWheel from '@/components/loading/loading'
import { UIProvider } from '@/context/ui/ui.context'
import theme, { Colors } from '@/styles/theme'
import { Box, Container, Divider, Link, List, ListItem, ListItemText, Stack, Typography } from '@mui/material'
import Head from 'next/head'
import { Suspense } from 'react'
import React from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { InferGetStaticPropsType } from 'next'
import SearchBox from '@/components/search/search'
import AppDrawer from '@/components/navbar/drawer/drawer'
import SpinningWheel from '@/components/circularprogress/circular-progress'
import dynamic from 'next/dynamic'

const TermsConditions = (props: InferGetStaticPropsType<typeof getStaticProps>) => {

          const { t } = useTranslation('common')
          const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
                    loading: () => <LoadingWheel isLoading={true} />,
                    ssr: false
          })

          return (
                    <DynamicThemeProvider theme={theme}>
                              <Head>
                                        <title>{t('information.privacy-policy.title')}</title>
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
                                                            <Box sx={{ mt: '70px' }}>
                                                                      <Typography textAlign='center' fontSize='2rem' paddingTop='20px' fontWeight='bold' >
                                                                                {t('information.privacy-policy.title')}
                                                                      </Typography>

                                                                      <Divider sx={{ marginBottom: '30px' }} variant="middle" />

                                                                      <Typography textAlign='justify' padding='0px 20px' sx={{ textAlignLast: 'left' }}>
                                                                                {t('information.privacy-policy.p1')}<Typography fontWeight='bold' sx={{ display: 'inline-block' }}>(&apos;Sl. glasnik RS&apos;, br. 87/2018).</Typography>
                                                                      </Typography>

                                                                      <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                                                                {t('information.privacy-policy.p2')} <Typography fontWeight='bold' sx={{ display: 'inline-block' }}> {t('information.privacy-policy.p3')} &rdquo;DAR&rdquo;</Typography>,
                                                                                {t('information.privacy-policy.p4')} <Typography fontWeight='bold' sx={{ display: 'inline-block' }}>Kralja Aleksandra I Karađorđevića 102, lokal 9, 34000 Kragujevac</Typography>,
                                                                                <Typography fontWeight='bold' sx={{ display: 'inline-block' }}>( {t('information.privacy-policy.p5')} &rdquo;DAR&rdquo; ),</Typography>
                                                                                {t('information.privacy-policy.p6')} <Typography fontWeight='bold' sx={{ display: 'inline-block' }}> {t('information.privacy-policy.p7')}.</Typography>
                                                                      </Typography>

                                                                      <Typography alignContent='flex-start' variant='h5' padding='0px 20px' textAlign='center' fontWeight='bold' >
                                                                                {t('information.privacy-policy.h1')}
                                                                      </Typography>

                                                                      <Typography alignContent='flex-start' variant='h6' padding='0px 20px' fontWeight='bold' >
                                                                                1. {t('information.privacy-policy.h2')}
                                                                      </Typography>

                                                                      <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                                                                {t('information.privacy-policy.p8')}
                                                                      </Typography>

                                                                      <Typography alignContent='flex-start' variant='h6' padding='0px 20px' fontWeight='bold' >
                                                                                2. {t('information.privacy-policy.h3')}
                                                                      </Typography>

                                                                      <Typography textAlign='justify' fontWeight='bold' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                                                                {t('information.privacy-policy.p9')}
                                                                      </Typography>

                                                                      <List sx={{ listStyleType: 'num', pl: 6 }}>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} disablePadding>
                                                                                          <ListItemText>
                                                                                                    {t('information.privacy-policy.p10')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} disablePadding>
                                                                                          <ListItemText>
                                                                                                    {t('information.privacy-policy.p11')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} disablePadding>
                                                                                          <ListItemText>
                                                                                                    {t('information.privacy-policy.p12')}
                                                                                          </ListItemText>
                                                                                </ListItem >
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} disablePadding>
                                                                                          <ListItemText>
                                                                                                    {t('information.privacy-policy.p13')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} disablePadding>
                                                                                          <ListItemText>
                                                                                                    {t('information.privacy-policy.p14')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                      </List>

                                                                      <Typography textAlign='justify' fontWeight='bold' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                                                                {t('information.privacy-policy.p15')}
                                                                      </Typography>

                                                                      <List sx={{ listStyleType: 'num', pl: 6 }}>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} disablePadding>
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p16')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} disablePadding>
                                                                                          <ListItemText>
                                                                                                    {t('information.privacy-policy.p17')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} disablePadding>
                                                                                          <ListItemText>
                                                                                                    {t('information.privacy-policy.p18')}
                                                                                          </ListItemText>
                                                                                </ListItem >
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} disablePadding>
                                                                                          <ListItemText>
                                                                                                    {t('information.privacy-policy.p19')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} disablePadding>
                                                                                          <ListItemText>
                                                                                                    {t('information.privacy-policy.p20')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                      </List>

                                                                      <Typography fontWeight='bold' padding='20px 20px' textAlign='justify' sx={{ display: 'inline-block' }}>{t('information.privacy-policy.p21')}</Typography>

                                                                      <List sx={{ listStyleType: 'circle', pl: 6 }}>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p22')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                      </List>

                                                                      <Typography fontWeight='bold' padding='20px 20px' textAlign='justify' sx={{ display: 'inline-block' }}>{t('information.privacy-policy.p23')}</Typography>

                                                                      <Typography paddingLeft='20px' textAlign='justify'>{t('information.privacy-policy.p24')}</Typography>

                                                                      <List sx={{ listStyleType: 'circle', pl: 6 }}>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p25')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p26')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p27')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p28')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p29')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                      </List>

                                                                      <Typography fontWeight='bold' padding='20px 20px' textAlign='justify' sx={{ display: 'inline-block' }}>{t('information.privacy-policy.p30')}</Typography>

                                                                      <Typography padding='20px 20px' textAlign='justify' sx={{ display: 'inline-block' }}>{t('information.privacy-policy.p31')}</Typography>

                                                                      <List sx={{ listStyleType: 'circle', pl: 6 }}>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p32')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p33')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p34')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                      </List>

                                                                      <Typography alignContent='flex-start' variant='h5' padding='0px 20px' textAlign='center' fontWeight='bold' >
                                                                                {t('information.privacy-policy.p35')}
                                                                      </Typography>

                                                                      <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                                                                {t('information.privacy-policy.p36')}<Typography fontWeight='bold' sx={{ display: 'inline-block' }}>Apotekarska ustanova&rdquo;DAR&rdquo;</Typography>,
                                                                                {t('information.privacy-policy.p37')}
                                                                      </Typography>

                                                                      <Typography padding='0px 20px' fontWeight='bold' textAlign='justify' sx={{ display: 'inline-block' }}>{t('information.privacy-policy.ppo')}</Typography>
                                                            </Box>
                                                            <SearchBox />
                                                            <AppDrawer isScreenToMedium={false} />
                                                  </UIProvider>
                                        </Stack>
                              </Container >
                    </DynamicThemeProvider>
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

export default TermsConditions