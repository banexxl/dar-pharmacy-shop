import LoadingWheel from '@/components/loading/loading'
import { UIProvider } from '@/context/ui/ui.context'
import theme, { Colors } from '@/styles/theme'
import { Box, Container, Divider, Link, List, ListItem, Stack, Typography } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import SearchBox from '@/components/search/search'
import AppDrawer from '@/components/navbar/drawer/drawer'
import dynamic from 'next/dynamic'
import { Seo } from '@/components/seo'

const PrivacyPolicy = () => {


     const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
          loading: () => <LoadingWheel />,
          ssr: false
     })

     return (
          <DynamicThemeProvider theme={theme}>
               <Seo title={'Reklamacije'} description={'Reklamacije'} keywords={'apoteka, dar, kragujevac, prirodni proizvodi, zdravlje, rak, tumor, lek, ishrana, priroda'} url={'https://www.apoteka-dar.rs/'} />
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
                                   <Typography marginTop='30px' textAlign='center' fontSize='2rem' paddingTop='20px' fontWeight='bold' >
                                        Politika privatnosti
                                   </Typography>

                                   <Divider sx={{ marginBottom: '30px' }} variant="middle" />

                                   <Typography textAlign='justify' padding='0px 20px' sx={{ textAlignLast: 'left' }}>
                                        Lični podaci su informacije koje se neposredno ili posredno odnose ili mogu da se odnose na vašu ličnost. Kao zakonski osnov koji uređuje zaštitu podataka i uslove za obradu vaših podataka primenjujem Zakon o zaštiti podataka o ličnosti <Typography fontWeight='bold' sx={{ display: 'inline-block' }}>(&apos;Sl. glasnik RS&apos;, br. 87/2018).</Typography>
                                   </Typography>

                                   <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                        Zdravstvena ustanova: <Typography fontWeight='bold' sx={{ display: 'inline-block' }}> Apotekarska ustanova &rdquo;DAR&rdquo;</Typography>,
                                        sa sedištem u ulici<Typography fontWeight='bold' sx={{ display: 'inline-block' }}>Kralja Aleksandra I Karađorđevića 102, lokal 9, 34000 Kragujevac</Typography>,
                                        <Typography fontWeight='bold' sx={{ display: 'inline-block' }}>( u daljem tekstu Apotekarska ustanova &rdquo;DAR&rdquo; ),</Typography>
                                        kao rukovalac podataka, pre prikupljanja i obrade podataka o ličnosti u skladu sa članom 23. Zakona o zaštiti podtaka o ličnosti, ovim putem <Typography fontWeight='bold' sx={{ display: 'inline-block' }}>obaveštava o uslovima prikupljanja i obrade podataka o ličnosti.</Typography>
                                   </Typography>

                                   <Typography alignContent='flex-start' variant='h5' padding='0px 20px' textAlign='center' fontWeight='bold' >
                                        Informacije koje prikljupamo
                                   </Typography>

                                   <Typography alignContent='flex-start' variant='h6' padding='0px 20px' fontWeight='bold' >
                                        1. Javni podaci
                                   </Typography>


                              </Box>
                              <SearchBox />
                              <AppDrawer isScreenToMedium={false} />
                         </UIProvider>
                    </Stack>
               </Container >
          </DynamicThemeProvider>
     )
}

export default PrivacyPolicy