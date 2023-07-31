import LoadingWheel from '@/components/loading/loading'
import { UIProvider } from '@/context/ui/ui.context'
import theme, { Colors } from '@/styles/theme'
import { Box, Container, Divider, List, ListItem, ListItemText, Stack, Typography } from '@mui/material'
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
import Link from 'next/link'

const TermsConditions = (props: InferGetStaticPropsType<typeof getStaticProps>) => {

          const { t } = useTranslation('common')
          const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
                    loading: () => <LoadingWheel />,
                    ssr: false
          })

          return (
                    <DynamicThemeProvider theme={theme}>
                              <Head>
                                        <title>{t('information.terms-conditions.title')}</title>
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
                                                                                {t('information.terms-conditions.title')}
                                                                      </Typography>

                                                                      <Divider sx={{ marginBottom: '30px' }} variant="middle" />

                                                                      <Typography textAlign='justify' padding='0px 20px' sx={{ textAlignLast: 'left', fontSize: '1.5rem', fontWeight: 'bold' }}>
                                                                                {t('information.terms-conditions.p4')}
                                                                      </Typography>

                                                                      <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                                                                {t('information.terms-conditions.p5')}
                                                                      </Typography>

                                                                      <List sx={{ listStyleType: 'num', pl: 6 }}>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.secondary, textAlign: 'center', padding: '0px 20px 0px 20px' }}>
                                                                                          <ListItemText>
                                                                                                    <Typography textAlign='justify' >
                                                                                                              {t('information.terms-conditions.p6')}
                                                                                                    </Typography>
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.secondary, textAlign: 'center', padding: '0px 20px 0px 20px' }}>
                                                                                          <ListItemText>
                                                                                                    <Typography textAlign='justify' >
                                                                                                              {t('information.terms-conditions.p7')}
                                                                                                    </Typography>
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.secondary, textAlign: 'center', padding: '0px 20px 0px 20px' }}>
                                                                                          <ListItemText>
                                                                                                    <Typography textAlign='justify'>
                                                                                                              {t('information.terms-conditions.p8')}
                                                                                                    </Typography>
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.secondary, textAlign: 'center', padding: '0px 20px 0px 20px' }}>
                                                                                          <ListItemText>
                                                                                                    <Typography textAlign='justify' >
                                                                                                              {t('information.terms-conditions.p9')}
                                                                                                    </Typography>
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.secondary, textAlign: 'center', padding: '0px 20px 0px 20px' }}>
                                                                                          <ListItemText>
                                                                                                    <Typography textAlign='justify' >
                                                                                                              {t('information.terms-conditions.p10')}
                                                                                                    </Typography>
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.secondary, textAlign: 'center', padding: '0px 20px 0px 20px' }}>
                                                                                          <ListItemText>
                                                                                                    <Typography textAlign='justify' >
                                                                                                              {t('information.terms-conditions.p11')}
                                                                                                    </Typography>
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.secondary, textAlign: 'center', padding: '0px 20px 0px 20px' }}>
                                                                                          <ListItemText>
                                                                                                    <Typography textAlign='justify' >
                                                                                                              {t('information.terms-conditions.p12')}
                                                                                                    </Typography>
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.secondary, textAlign: 'center', padding: '0px 20px 0px 20px' }}>
                                                                                          <ListItemText>
                                                                                                    <Typography textAlign='justify' >
                                                                                                              {t('information.terms-conditions.p13')}

                                                                                                    </Typography>
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.secondary, textAlign: 'center', padding: '0px 20px 0px 20px' }}>
                                                                                          <ListItemText>
                                                                                                    <Typography textAlign='justify' >
                                                                                                              {t('information.terms-conditions.p15')}<Link href={''}>OVDE.&nbsp;</Link>
                                                                                                              {t('information.terms-conditions.p16')}<Link href={''}>REKLAMACIJE.</Link>
                                                                                                    </Typography>
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.secondary, textAlign: 'center', padding: '0px 20px 0px 20px' }}>
                                                                                          <ListItemText>
                                                                                                    <Typography textAlign='justify' >
                                                                                                              {t('information.terms-conditions.p17')}<Link href={''}>&nbsp;PRAVO NA ODUSTAJANJE.</Link>
                                                                                                    </Typography>
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                      </List>

                                                                      <Typography textAlign='justify' padding='0px 20px' sx={{ textAlignLast: 'left', fontSize: '1.5rem', fontWeight: 'bold' }}>
                                                                                {t('information.terms-conditions.p18')}
                                                                      </Typography>

                                                                      <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                                                                {t('information.terms-conditions.p19')}
                                                                      </Typography>

                                                                      <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                                                                {t('information.terms-conditions.p20')}
                                                                      </Typography>

                                                                      <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                                                                {t('information.terms-conditions.p21')}
                                                                      </Typography>

                                                                      <Typography textAlign='justify' padding='0px 20px' sx={{ textAlignLast: 'left', fontSize: '1.5rem', fontWeight: 'bold' }}>
                                                                                {t('information.terms-conditions.p22')}
                                                                      </Typography>

                                                                      <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                                                                {t('information.terms-conditions.p23')}
                                                                      </Typography>

                                                                      <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                                                                {t('information.terms-conditions.p24')}
                                                                      </Typography>

                                                                      <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                                                                {t('information.terms-conditions.p25')}
                                                                      </Typography>

                                                                      <Typography textAlign='justify' padding='0px 20px' sx={{ textAlignLast: 'left', fontSize: '1.5rem', fontWeight: 'bold' }}>
                                                                                {t('information.terms-conditions.p26')}
                                                                      </Typography>

                                                                      <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                                                                {t('information.terms-conditions.p27')}
                                                                      </Typography>

                                                                      <Typography textAlign='justify' padding='0px 20px' sx={{ textAlignLast: 'left', fontSize: '1.5rem', fontWeight: 'bold' }}>
                                                                                {t('information.terms-conditions.p28')}
                                                                      </Typography>

                                                                      <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                                                                {t('information.terms-conditions.p29')}
                                                                      </Typography>

                                                                      <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                                                                {t('information.terms-conditions.p30')}
                                                                      </Typography>

                                                                      <Typography textAlign='justify' padding='0px 20px' sx={{ textAlignLast: 'left', fontSize: '1.5rem', fontWeight: 'bold' }}>
                                                                                {t('information.terms-conditions.p31')}
                                                                      </Typography>

                                                                      <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                                                                {t('information.terms-conditions.p32')}
                                                                      </Typography>

                                                                      <Typography textAlign='justify' padding='0px 20px' sx={{ textAlignLast: 'left', fontSize: '1.5rem', fontWeight: 'bold' }}>
                                                                                {t('information.terms-conditions.p33')}
                                                                      </Typography>

                                                                      <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                                                                {t('information.terms-conditions.p34')}
                                                                      </Typography>

                                                                      <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                                                                {t('information.terms-conditions.p35')}
                                                                      </Typography>

                                                                      <Typography textAlign='justify' padding='0px 20px' sx={{ textAlignLast: 'left', fontSize: '1.5rem', fontWeight: 'bold' }}>
                                                                                {t('information.terms-conditions.p36')}
                                                                      </Typography>

                                                                      <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                                                                {t('information.terms-conditions.p38')}
                                                                      </Typography>

                                                                      <Typography textAlign='justify' padding='0px 20px' sx={{ textAlignLast: 'left', fontSize: '1.5rem', fontWeight: 'bold' }}>
                                                                                {t('information.terms-conditions.p39')}
                                                                      </Typography>

                                                                      <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                                                                {t('information.terms-conditions.p40')}
                                                                      </Typography>

                                                                      <Typography textAlign='justify' padding='0px 20px' sx={{ textAlignLast: 'left', fontSize: '1.5rem', fontWeight: 'bold' }}>
                                                                                {t('information.terms-conditions.p41')}
                                                                      </Typography>

                                                                      <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                                                                {t('information.terms-conditions.p42')}
                                                                      </Typography>

                                                                      <Typography textAlign='justify' padding='0px 20px' sx={{ textAlignLast: 'left', fontSize: '1.5rem', fontWeight: 'bold' }}>
                                                                                {t('information.terms-conditions.p43')}
                                                                      </Typography>

                                                                      <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                                                                {t('information.terms-conditions.p44')}
                                                                      </Typography>

                                                                      <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                                                                {t('information.terms-conditions.p45')}
                                                                      </Typography>

                                                                      <Typography textAlign='justify' padding='0px 20px' sx={{ textAlignLast: 'left', fontSize: '1.5rem', fontWeight: 'bold' }}>
                                                                                {t('information.terms-conditions.p46')}
                                                                      </Typography>

                                                                      <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left', fontWeight: 'bold' }}>
                                                                                {t('information.terms-conditions.p47')}
                                                                      </Typography>

                                                                      <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                                                                {t('information.terms-conditions.p48')}<Link href={''}>OVDE.</Link>
                                                                      </Typography>

                                                                      <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                                                                {t('information.terms-conditions.p49')}<a href='tel:0640172227'>0640172227</a>
                                                                      </Typography>

                                                                      <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                                                                {t('information.terms-conditions.p50')}
                                                                      </Typography>

                                                                      <List sx={{ listStyleType: 'num', pl: 6 }}>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.secondary, textAlign: 'center', padding: '0px 20px 0px 20px' }}>
                                                                                          <ListItemText>
                                                                                                    <Typography textAlign='justify' >
                                                                                                              {t('information.terms-conditions.p52')}
                                                                                                    </Typography>
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.secondary, textAlign: 'center', padding: '0px 20px 0px 20px' }}>
                                                                                          <ListItemText>
                                                                                                    <Typography textAlign='justify' >
                                                                                                              {t('information.terms-conditions.p53')}
                                                                                                    </Typography>
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.secondary, textAlign: 'center', padding: '0px 20px 0px 20px' }}>
                                                                                          <ListItemText>
                                                                                                    <Typography textAlign='justify'>
                                                                                                              {t('information.terms-conditions.p54')}
                                                                                                    </Typography>
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.secondary, textAlign: 'center', padding: '0px 20px 0px 20px' }}>
                                                                                          <ListItemText>
                                                                                                    <Typography textAlign='justify' sx={{ fontWeight: 'bold' }}>
                                                                                                              {t('information.terms-conditions.p55')}
                                                                                                    </Typography>
                                                                                                    <Typography textAlign='justify' >
                                                                                                              {t('information.terms-conditions.p56')}
                                                                                                    </Typography>
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.secondary, textAlign: 'center', padding: '0px 20px 0px 20px' }}>
                                                                                          <Typography textAlign='justify' sx={{ fontWeight: 'bold' }}>
                                                                                                    {t('information.terms-conditions.p56b')}
                                                                                          </Typography>
                                                                                          <Typography textAlign='justify' >
                                                                                                    {t('information.terms-conditions.p57')}
                                                                                          </Typography>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.secondary, textAlign: 'center', padding: '0px 20px 0px 20px' }}>
                                                                                          <Typography textAlign='justify' sx={{ fontWeight: 'bold' }}>
                                                                                                    {t('information.terms-conditions.p57b')}
                                                                                          </Typography>
                                                                                          <Typography textAlign='justify' >
                                                                                                    {t('information.terms-conditions.p57c')}
                                                                                          </Typography>
                                                                                </ListItem>
                                                                      </List>

                                                                      <Typography textAlign='justify' padding='0px 20px' sx={{ textAlignLast: 'left', fontSize: '1.5rem', fontWeight: 'bold' }}>
                                                                                {t('information.terms-conditions.p58')}
                                                                      </Typography>

                                                                      <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                                                                {t('information.terms-conditions.p59')}
                                                                      </Typography>

                                                                      <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                                                                {t('information.terms-conditions.p60')}
                                                                      </Typography>

                                                                      <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                                                                {t('information.terms-conditions.p61')}<a href={'/docs/Pravilnik_o_zastiti_potrosaca_i_postupku_resavanja_reklamacija.pdf'} >{t('information.terms-conditions.p64')}</a>
                                                                      </Typography>

                                                                      <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                                                                {t('information.terms-conditions.p62')} <a href={'/docs/Zahtev_za_reklamaciju.pdf'} >{t('information.terms-conditions.p64')}</a>
                                                                                {t('information.terms-conditions.p63')}
                                                                      </Typography>
                                                            </Box>
                                                            <SearchBox />
                                                            <AppDrawer isScreenToMedium={false} />
                                                  </UIProvider>
                                        </Stack>
                              </Container >
                    </DynamicThemeProvider >
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

export default TermsConditions