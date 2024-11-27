import LoadingWheel from '@/components/loading/loading'
import { UIProvider } from '@/context/ui/ui.context'
import theme, { Colors } from '@/styles/theme'
import { Box, Container, Divider, List, ListItem, ListItemIcon, Stack, Typography, useMediaQuery } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import SearchBox from '@/components/search/search'
import AppDrawer from '@/components/navbar/drawer/drawer'
import dynamic from 'next/dynamic'
import { Seo } from '@/components/seo'
import Link from 'next/link'

const PrivacyPolicy = () => {


     const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
          loading: () => <LoadingWheel />,
          ssr: false
     })

     const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"))

     return (
          <DynamicThemeProvider theme={theme}>
               <Seo title={'Reklamacije'} description={'Reklamacije'} url={'https://www.apoteka-dar.rs/'} />
               <Container
                    disableGutters
                    maxWidth="lg"
                    sx={{
                         background: "#fff",
                    }}
               >
                    <Stack>
                         <UIProvider>
                              <Typography marginTop='150px' textAlign='center' fontSize='2rem' fontWeight='bold' >
                                   DAR Savetnik
                              </Typography>
                              <Box sx={{ ml: isScreenToMedium ? '-50px' : null }}>

                                   <Divider sx={{ marginBottom: '30px' }} variant="middle" />

                                   <List>
                                        <ListItem sx={{ display: 'flex', gap: '20px' }}>
                                             <ListItemIcon sx={{ justifyContent: 'right' }}>•</ListItemIcon>
                                             <Typography textAlign='justify'  >
                                                  AU Apoteka DAR omogućava online uslugu Pitajte DAR savetnika, sa željom da doprinese zdravom načinu života, prevenciji zdravstvenih tegoba, kao i da pruži informacije i podršku u vezi sa terapijom i upotrebom lekova, kozmetike i dijetetskih suplemenata.
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'flex', gap: '20px' }}>
                                             <ListItemIcon sx={{ justifyContent: 'right' }}>•</ListItemIcon>
                                             <Typography textAlign='justify'  >
                                                  Usluga je dostupna putem formulara na {' '}
                                                  <Link href="https://www.apoteka-dar.rs/kontakt" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                                                       linku.
                                                  </Link>
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'flex', gap: '20px' }}>
                                             <ListItemIcon sx={{ justifyContent: 'right' }}>•</ListItemIcon>
                                             <Typography textAlign='justify'  >
                                                  DAR usluga Pitajte DAR savetnika je besplatna i dostupna svim zainteresovanim osobama – korisnicima usluge.
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'flex', gap: '20px' }}>
                                             <ListItemIcon sx={{ justifyContent: 'right' }}>•</ListItemIcon>
                                             <Typography textAlign='justify'  >
                                                  DAR savetnik daje odgovor na postavljeno pitanje u roku od dva radna dana. Molimo vas da proverite mail adresu koju ste naveli prilikom popunjavanja formulara.
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'flex', gap: '20px' }}>
                                             <ListItemIcon sx={{ justifyContent: 'right' }}>•</ListItemIcon>
                                             <Typography textAlign='justify'  >
                                                  Usluga se ne odnosi na probleme ili pitanja koja nisu u vezi sa farmaceutskom zdravstvenom delatnošću.
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'flex', gap: '20px' }}>
                                             <ListItemIcon sx={{ justifyContent: 'right' }}>•</ListItemIcon>
                                             <Typography >
                                                  Da biste dobili adekvatan savet, molimo vas da navedete: <br />
                                             </Typography>
                                        </ListItem>
                                        <List sx={{ ml: '20px' }}>
                                             <ListItem sx={{ display: 'flex', gap: '20px' }}>
                                                  <ListItemIcon sx={{ justifyContent: 'right' }}>•</ListItemIcon>
                                                  <Typography textAlign='justify'  >
                                                       da li imate neku hroničnu bolest (hipertenziju, dijabetes, srčanu aritmiju itd.);
                                                  </Typography>
                                             </ListItem>
                                             <ListItem sx={{ display: 'flex', gap: '20px' }}>
                                                  <ListItemIcon sx={{ justifyContent: 'right' }}>•</ListItemIcon>
                                                  <Typography textAlign='justify'  >
                                                       da li već uzimate neke lekove (tačan naziv leka koji uzimate);
                                                  </Typography>
                                             </ListItem>
                                             <ListItem sx={{ display: 'flex', gap: '20px' }}>
                                                  <ListItemIcon sx={{ justifyContent: 'right' }}>•</ListItemIcon>
                                                  <Typography textAlign='justify'  >
                                                       da li ste alergični na neke lekove (npr. penicilin, acetilsalicilnu kiselinu…);
                                                  </Typography>
                                             </ListItem>
                                             <ListItem sx={{ display: 'flex', gap: '20px' }}>
                                                  <ListItemIcon sx={{ justifyContent: 'right' }}>•</ListItemIcon>
                                                  <Typography textAlign='justify'  >
                                                       da li ste trudni ili dojite;
                                                  </Typography>
                                             </ListItem>
                                             <ListItem sx={{ display: 'flex', gap: '20px' }}>
                                                  <ListItemIcon sx={{ justifyContent: 'right' }}>•</ListItemIcon>
                                                  <Typography textAlign='justify'  >
                                                       vaše godine i pol;
                                                  </Typography>
                                             </ListItem>
                                             <ListItem sx={{ display: 'flex', gap: '20px' }}>
                                                  <ListItemIcon sx={{ justifyContent: 'right' }}>•</ListItemIcon>
                                                  <Typography textAlign='justify'  >
                                                       sve ono što smatrate važnim, a tiče se postavljenog pitanja.
                                                  </Typography>
                                             </ListItem>
                                        </List>
                                        <ListItem sx={{ display: 'flex', gap: '20px' }}>
                                             <ListItemIcon sx={{ justifyContent: 'right' }}>•</ListItemIcon>
                                             <Typography textAlign='justify'  >
                                                  DAR savetnik je dužan da zadrži za sebe sve lične informacije koje je saznao prilikom pružanja usluge.
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'flex', gap: '20px' }}>
                                             <ListItemIcon sx={{ justifyContent: 'right' }}>•</ListItemIcon>
                                             <Typography textAlign='justify'  >
                                                  U okviru usluge, davanje odgovora predstavlja besplatan stručni savet, koji nije obavezujući, već samo pomaže korisniku u donošenju odluke.
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'flex', gap: '20px' }}>
                                             <ListItemIcon sx={{ justifyContent: 'right' }}>•</ListItemIcon>
                                             <Typography textAlign='justify'  >
                                                  Stručni odgovor DAR savetnika je baziran na postavljenom pitanju i raspoloživim informacijama koje šalje korisnik usluge. S tim u vezi, odgovor je informativnog karaktera i nije zamena za posetu lekaru ili farmaceutu.
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'flex', gap: '20px' }}>
                                             <ListItemIcon sx={{ justifyContent: 'right' }}>•</ListItemIcon>
                                             <Typography textAlign='justify'  >
                                                  AU Apoteka DAR ne može postaviti na sajt pitanja i odgovore bez prikladne identifikacije DAR savetnika koji postavljaju odgovore.
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'flex', gap: '20px' }}>
                                             <ListItemIcon sx={{ justifyContent: 'right' }}>•</ListItemIcon>
                                             <Typography textAlign='justify'  >
                                                  Korisnici i pružaoci usluge Pitajte DAR savetnika ne stupaju u pravne odnose i zato korisnici usluga nemaju pravo da dobijene odgovore koriste u druge svrhe.
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'flex', gap: '20px' }}>
                                             <ListItemIcon sx={{ justifyContent: 'right' }}>•</ListItemIcon>
                                             <Typography textAlign='justify'  >
                                                  Korisnici usluge Pitajte DAR savetnika prihvataju korišćenje usluge u skladu sa ovim Pravilnikom.
                                             </Typography>
                                        </ListItem>
                                   </List>

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