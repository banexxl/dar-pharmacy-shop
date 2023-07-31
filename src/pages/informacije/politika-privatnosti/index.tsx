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

const PrivacyPolicy = (props: InferGetStaticPropsType<typeof getStaticProps>) => {

          const { t } = useTranslation('common')
          const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
                    loading: () => <LoadingWheel />,
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

                                                                      <List sx={{ listStyleType: 'circle', pl: 6 }}>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p41')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p42')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p43')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p44')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p45')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                      </List>

                                                                      <Typography padding='20px 20px' textAlign='justify' sx={{ display: 'inline-block' }}>{t('information.privacy-policy.p46')}</Typography>

                                                                      <List sx={{ listStyleType: 'circle', pl: 6 }}>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p47')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p48')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p49')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                      </List>

                                                                      <Typography padding='0px 20px' textAlign='justify' sx={{ display: 'inline-block' }}>{t('information.privacy-policy.p50')}</Typography>

                                                                      <Typography padding='20px 20px 0px 20px' fontWeight='bold' textAlign='justify' sx={{ display: 'block' }}>{t('information.privacy-policy.ppo')}
                                                                                <Typography display='inline'>{t('information.privacy-policy.p51')}</Typography>
                                                                      </Typography>

                                                                      <Typography padding='20px 20px 0px 20px' fontWeight='bold' textAlign='justify' sx={{ display: 'block' }}>{t('information.privacy-policy.prc')}
                                                                                <Typography display='inline'>{t('information.privacy-policy.p52')}</Typography>
                                                                      </Typography>

                                                                      <Typography padding='20px 20px 0px 20px' fontWeight='bold' textAlign='justify'>{t('information.privacy-policy.cookies')}

                                                                                <Typography sx={{ display: 'inline-flex', textAlign: 'justify' }}>{t('information.privacy-policy.p53')}</Typography>

                                                                                <Typography sx={{ display: 'inline-flex', textIndent: '20px', textAlign: 'justify' }}>{t('information.privacy-policy.p54')}</Typography>

                                                                      </Typography>

                                                                      <Typography alignContent='flex-start' variant='h5' padding='20px 20px' textAlign='center' fontWeight='bold' >
                                                                                {t('information.privacy-policy.p55')}
                                                                      </Typography>

                                                                      <Typography padding='20px 20px 0px 20px' fontWeight='bold' textAlign='justify' sx={{ display: 'block' }}>{t('information.privacy-policy.ppo')}
                                                                                <Typography display='inline'>{t('information.privacy-policy.p56')}</Typography>
                                                                      </Typography>

                                                                      <List sx={{ listStyleType: 'circle', pl: 6 }}>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p57')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p58')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p59')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p60')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p61')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p62')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                      </List>

                                                                      <Typography paddingLeft='20px' display='inline'>{t('information.privacy-policy.p63')}</Typography>

                                                                      <Typography padding='20px 20px 0px 20px' fontWeight='bold' textAlign='justify' sx={{ display: 'block' }}>{t('information.privacy-policy.pkp')}
                                                                                <Typography display='inline'>{t('information.privacy-policy.p64')}</Typography>
                                                                      </Typography>

                                                                      <Typography padding='20px 20px 0px 20px' fontWeight='bold' textAlign='justify' sx={{ display: 'block' }}>{t('information.privacy-policy.prc')}
                                                                                <Typography display='inline'>{t('information.privacy-policy.p65')}</Typography>
                                                                      </Typography>

                                                                      <Typography alignContent='flex-start' variant='h5' padding='20px 20px' textAlign='center' fontWeight='bold' >
                                                                                {t('information.privacy-policy.p66')}
                                                                      </Typography>

                                                                      <Typography padding='20px 20px 0px 20px' fontWeight='bold' textAlign='justify' sx={{ display: 'block' }}>{t('information.privacy-policy.ppo')}
                                                                                <Typography display='inline'>{t('information.privacy-policy.p67')}</Typography>
                                                                      </Typography>

                                                                      <Typography display='block' padding='20px 20px 0px 20px' textAlign='justify' sx={{ textAlignLast: 'left' }}>{t('information.privacy-policy.p68')}</Typography>

                                                                      <Typography padding='20px 20px 0px 20px' fontWeight='bold' textAlign='justify' sx={{ display: 'block' }}>{t('information.privacy-policy.pkp')}
                                                                                <Typography display='inline'>{t('information.privacy-policy.p69')}</Typography>
                                                                      </Typography>

                                                                      <Typography padding='20px 20px 0px 20px' fontWeight='bold' textAlign='justify' sx={{ display: 'block' }}>{t('information.privacy-policy.prc')}
                                                                                <Typography display='inline'>{t('information.privacy-policy.p70')}</Typography>
                                                                      </Typography>

                                                                      <Typography alignContent='flex-start' variant='h5' padding='20px 20px' textAlign='center' fontWeight='bold' >
                                                                                {t('information.privacy-policy.p71')}
                                                                      </Typography>

                                                                      <Typography padding='20px 20px 0px 20px' fontWeight='bold' textAlign='justify' sx={{ display: 'block' }}>{t('information.privacy-policy.ppo')}
                                                                                <Typography display='inline'>{t('information.privacy-policy.p72')}</Typography>
                                                                                <Typography display='inline'>{t('information.privacy-policy.p73')}</Typography>
                                                                      </Typography>

                                                                      <Typography padding='20px 20px 0px 20px' fontWeight='bold' textAlign='justify' sx={{ display: 'block' }}>{t('information.privacy-policy.pkp')}
                                                                                <Typography display='inline'>{t('information.privacy-policy.p74')}</Typography>
                                                                      </Typography>

                                                                      <Typography padding='20px 20px 0px 20px' fontWeight='bold' textAlign='justify' sx={{ display: 'block' }}>{t('information.privacy-policy.prc')}
                                                                                <Typography display='inline'>{t('information.privacy-policy.p75')}</Typography>
                                                                      </Typography>

                                                                      <Typography alignContent='flex-start' variant='h5' padding='20px 20px' textAlign='center' fontWeight='bold' >
                                                                                {t('information.privacy-policy.p76')}
                                                                      </Typography>

                                                                      <Typography padding='20px 20px 0px 20px' fontWeight='bold' textAlign='justify' sx={{ display: 'block' }}>{t('information.privacy-policy.ppo')}
                                                                                <Typography display='inline' textAlign='justify'>{t('information.privacy-policy.p77')}</Typography>
                                                                                <Typography display='block' textAlign='justify'>{t('information.privacy-policy.p78')}</Typography>
                                                                                <Typography display='block' textAlign='justify'>{t('information.privacy-policy.p79')}</Typography>
                                                                                <Typography display='block' textAlign='justify'>{t('information.privacy-policy.p80')}</Typography>
                                                                                <Typography display='block' textAlign='justify' fontWeight='bold'>{t('information.privacy-policy.p81')}</Typography>
                                                                      </Typography>

                                                                      <Typography padding='20px 20px 0px 20px' fontWeight='bold' textAlign='justify' sx={{ display: 'block' }}>{t('information.privacy-policy.pkp')}
                                                                                <Typography display='inline'>{t('information.privacy-policy.p82')}</Typography>
                                                                      </Typography>

                                                                      <Typography padding='20px 20px 0px 20px' fontWeight='bold' textAlign='justify' sx={{ display: 'block' }}>{t('information.privacy-policy.prc')}
                                                                                <Typography display='inline'>{t('information.privacy-policy.p83')}</Typography>
                                                                      </Typography>

                                                                      <Typography alignContent='flex-start' variant='h5' padding='20px 20px' textAlign='center' fontWeight='bold' >
                                                                                {t('information.privacy-policy.p84')}
                                                                      </Typography>

                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify'>{t('information.privacy-policy.p85')}</Typography>

                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontWeight='bold'>{t('information.privacy-policy.p86')}</Typography>

                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify'>{t('information.privacy-policy.p87')}</Typography>

                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontWeight='bold'>{t('information.privacy-policy.p88')}</Typography>

                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify'>{t('information.privacy-policy.p89')}</Typography>

                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify'>{t('information.privacy-policy.p90')}</Typography>

                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify'>{t('information.privacy-policy.p91')}</Typography>

                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify'>{t('information.privacy-policy.p92')}</Typography>

                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontWeight='bold'>{t('information.privacy-policy.p93')}</Typography>

                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify'>{t('information.privacy-policy.p94')}</Typography>

                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontWeight='bold'>{t('information.privacy-policy.p95')}</Typography>

                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify'>{t('information.privacy-policy.p96')}</Typography>

                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontWeight='bold'>{t('information.privacy-policy.p97')}</Typography>

                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify'>{t('information.privacy-policy.p98')}</Typography>

                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontWeight='bold'>{t('information.privacy-policy.p99')}</Typography>

                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify'>{t('information.privacy-policy.p100')}</Typography>

                                                                      <Typography padding='20px 20px 20px 20px' display='block' textAlign='justify' fontWeight='bold'>{t('information.privacy-policy.p101')}</Typography>

                                                                      <Typography display='block' textAlign='justify' padding='0px 20px 20px 20px'>

                                                                                <Typography display='inline' textAlign='justify'>{t('information.privacy-policy.p102')}</Typography>

                                                                                <Typography display='inline' fontWeight='bold'>DAR,</Typography>

                                                                                <Typography display='inline' textAlign='justify' fontWeight='bold'>{t('information.privacy-policy.p103')}</Typography>

                                                                                <Typography display='inline' textAlign='justify'>
                                                                                          <Link href={`tel:${+381640172227}`} sx={{ color: Colors.primary }}> +381640172227</Link>
                                                                                </Typography>

                                                                                <Typography display='inline' textAlign='justify'>{t('information.privacy-policy.p104')}</Typography>

                                                                                <Typography display='inline' textAlign='justify'>
                                                                                          <Link href={`mailto:${'maja@apoteka-dar.rs'}`} sx={{ color: Colors.primary }}> maja@apoteka-dar.rs.</Link>
                                                                                </Typography>
                                                                      </Typography>

                                                                      <Typography alignContent='flex-start' variant='h5' padding='20px 20px' textAlign='center' fontWeight='bold' >
                                                                                {t('information.privacy-policy.p105')}
                                                                      </Typography>

                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify'>{t('information.privacy-policy.p106')}</Typography>

                                                                      <List sx={{ listStyleType: 'disc', pl: 6 }}>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p107')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p108')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                      </List>

                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontWeight='bold'>{t('information.privacy-policy.p109')}</Typography>

                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify'>{t('information.privacy-policy.p110')}</Typography>

                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify'>{t('information.privacy-policy.p111')}</Typography>

                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify'>{t('information.privacy-policy.p112')}</Typography>

                                                                      <List sx={{ listStyleType: 'disc', pl: 6 }}>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <Link href='https://www.facebook.com/privacy/explanation' target="_blank">
                                                                                                    {t('information.privacy-policy.p113')}
                                                                                          </Link>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <Link href='https://help.instagram.com/519522125107875' target="_blank">
                                                                                                    {t('information.privacy-policy.p114')}
                                                                                          </Link>
                                                                                </ListItem>
                                                                      </List>

                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontWeight='bold'>{t('information.privacy-policy.p115')}</Typography>

                                                                      <Typography padding='20px 20px' fontWeight='bold' textAlign='justify' display='block' >
                                                                                {t('information.privacy-policy.ppo')}
                                                                                <Typography padding='20px 20px 0px 0px' display='inline' textAlign='justify'>{t('information.privacy-policy.p116')}</Typography>
                                                                                <Typography padding='20px 0px' display='block' textAlign='justify'>{t('information.privacy-policy.p117')}</Typography>
                                                                                <Typography padding='20px 0px 20px 0px' display='inline' textAlign='justify' fontWeight='bold'>{t('information.privacy-policy.p118')}</Typography>
                                                                                <Typography padding='20px 20px 20px 0px' display='inline' textAlign='justify'>{t('information.privacy-policy.p119')}</Typography>
                                                                      </Typography>

                                                                      <Typography padding='20px 20px' fontWeight='bold' textAlign='justify' display='block' >
                                                                                {t('information.privacy-policy.pkp')}
                                                                      </Typography>

                                                                      <Typography padding='0px 20px 0px 20px' display='block' textAlign='justify' >{t('information.privacy-policy.p120')}</Typography>
                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >{t('information.privacy-policy.p121')}</Typography>
                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >{t('information.privacy-policy.p122')}</Typography>
                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >{t('information.privacy-policy.p123')}</Typography>

                                                                      <Typography padding='20px 20px' fontWeight='bold' textAlign='justify' display='block' >
                                                                                {t('information.privacy-policy.prc')}
                                                                      </Typography>

                                                                      <Typography padding='0px 20px 0px 20px' display='block' textAlign='justify' >{t('information.privacy-policy.p124')}</Typography>
                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >{t('information.privacy-policy.p125')}</Typography>
                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >{t('information.privacy-policy.p126')}</Typography>


                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontWeight='bold'>{t('information.privacy-policy.p127')}</Typography>

                                                                      <Typography padding='20px 20px' fontWeight='bold' textAlign='justify' display='block' >
                                                                                {t('information.privacy-policy.ppo')}
                                                                      </Typography>

                                                                      <Typography padding='0px 20px 0px 20px' display='block' textAlign='justify' >{t('information.privacy-policy.p128')}</Typography>
                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >{t('information.privacy-policy.p129')}</Typography>

                                                                      <Typography padding='20px 20px' fontWeight='bold' textAlign='justify' display='block' >
                                                                                {t('information.privacy-policy.pkp')}
                                                                      </Typography>
                                                                      <Typography padding='0px 20px 0px 20px' display='block' textAlign='justify' >{t('information.privacy-policy.p130')}</Typography>

                                                                      <Typography padding='20px 20px' fontWeight='bold' textAlign='justify' display='block' >
                                                                                {t('information.privacy-policy.prc')}
                                                                      </Typography>
                                                                      <Typography padding='0px 20px 0px 20px' display='block' textAlign='justify' >{t('information.privacy-policy.p131')}</Typography>


                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontWeight='bold'>{t('information.privacy-policy.p132')}</Typography>

                                                                      <Typography padding='20px 20px' fontWeight='bold' textAlign='justify' display='block' >
                                                                                {t('information.privacy-policy.ppo')}
                                                                      </Typography>

                                                                      <Typography padding='0px 20px 0px 20px' display='block' textAlign='justify' >{t('information.privacy-policy.p133')}</Typography>
                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >{t('information.privacy-policy.p134')}</Typography>
                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >{t('information.privacy-policy.p135')}</Typography>
                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >{t('information.privacy-policy.p136')}</Typography>
                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >{t('information.privacy-policy.p137')}</Typography>

                                                                      <Typography padding='20px 20px' fontWeight='bold' textAlign='justify' display='block' >
                                                                                {t('information.privacy-policy.pkp')}
                                                                      </Typography>
                                                                      <Typography padding='0px 20px 0px 20px' display='block' textAlign='justify' >{t('information.privacy-policy.p138')}</Typography>

                                                                      <Typography padding='20px 20px' fontWeight='bold' textAlign='justify' display='block' >
                                                                                {t('information.privacy-policy.prc')}
                                                                      </Typography>
                                                                      <Typography padding='0px 20px 0px 20px' display='block' textAlign='justify' >{t('information.privacy-policy.p139')}</Typography>


                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontWeight='bold'>{t('information.privacy-policy.p140')}</Typography>
                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >{t('information.privacy-policy.p141')}</Typography>
                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >{t('information.privacy-policy.p142')}</Typography>
                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >{t('information.privacy-policy.p143')}</Typography>
                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >{t('information.privacy-policy.p144')}</Typography>
                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontWeight='bold'>{t('information.privacy-policy.p145')}</Typography>
                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >{t('information.privacy-policy.p146')}</Typography>
                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >{t('information.privacy-policy.p147')}</Typography>


                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontWeight='bold'>{t('information.privacy-policy.p148')}</Typography>
                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >{t('information.privacy-policy.p149')}</Typography>
                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >{t('information.privacy-policy.p150')}</Typography>
                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >{t('information.privacy-policy.p151')}</Typography>
                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >{t('information.privacy-policy.p152')}</Typography>
                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >{t('information.privacy-policy.p153')}</Typography>
                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >{t('information.privacy-policy.p154')}</Typography>
                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >{t('information.privacy-policy.p155')}</Typography>
                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >{t('information.privacy-policy.p156')}</Typography>
                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontWeight='bold'>{t('information.privacy-policy.p157')}</Typography>
                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >{t('information.privacy-policy.p158')}</Typography>
                                                                      <Typography padding='20px 20px 20px 20px' display='block' textAlign='justify' >
                                                                                {t('information.privacy-policy.p159')}
                                                                                <Typography display='inline'>
                                                                                          <Link href={`mailto:${'maja@apoteka-dar.rs'}`} sx={{ color: Colors.primary }}> maja@apoteka-dar.rs.</Link>
                                                                                </Typography>
                                                                      </Typography>


                                                                      <Typography alignContent='flex-start' variant='h5' padding='20px 20px' textAlign='center' fontWeight='bold' >
                                                                                {t('information.privacy-policy.p160')}
                                                                      </Typography>

                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontStyle='italic'>{t('information.privacy-policy.p161')}</Typography>

                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontWeight='bold' >{t('information.privacy-policy.p162')}</Typography>

                                                                      <List sx={{ listStyleType: 'disc', pl: 6 }}>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p163')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p164')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p165')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p166')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p167')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p168')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                      </List>



                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontStyle='italic'>{t('information.privacy-policy.p169')}</Typography>
                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontWeight='bold' >{t('information.privacy-policy.p170')}</Typography>
                                                                      <List sx={{ listStyleType: 'disc', pl: 6 }}>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p171')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p172')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p173')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p174')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p175')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                      </List>
                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify'>{t('information.privacy-policy.p176')}</Typography>

                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontStyle='italic'>{t('information.privacy-policy.p177')}</Typography>
                                                                      <List sx={{ listStyleType: 'disc', pl: 6 }}>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p178')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                      </List>



                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontStyle='italic'>{t('information.privacy-policy.p179')}</Typography>
                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontWeight='bold' >{t('information.privacy-policy.p180')}</Typography>
                                                                      <List sx={{ listStyleType: 'disc', pl: 6 }}>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p181')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p182')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p183')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p184')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p185')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p186')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                      </List>
                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify'>{t('information.privacy-policy.p187')}</Typography>



                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontStyle='italic'>{t('information.privacy-policy.p188')}</Typography>
                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontWeight='bold' >{t('information.privacy-policy.p189')}</Typography>
                                                                      <List sx={{ listStyleType: 'disc', pl: 6 }}>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p190')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p191')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p192')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p193')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                      </List>

                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontStyle='italic'>{t('information.privacy-policy.p194')}</Typography>
                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontWeight='bold' >{t('information.privacy-policy.p195')}</Typography>
                                                                      <List sx={{ listStyleType: 'disc', pl: 6 }}>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p196')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                      </List>
                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify'>{t('information.privacy-policy.p197')}</Typography>

                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontStyle='italic'>{t('information.privacy-policy.p198')}</Typography>
                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontWeight='bold'>{t('information.privacy-policy.p199')}</Typography>
                                                                      <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify'>{t('information.privacy-policy.p200')}</Typography>
                                                                      <Typography padding='20px' display='block' textAlign='justify'>{t('information.privacy-policy.p201')}</Typography>



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
                              ...(await serverSideTranslations('sr-RS' ?? locale, ['common'], null, ['en-US', 'sr-RS'])),
                              // Will be passed to the page component as props
                    },
          }
}

export default PrivacyPolicy