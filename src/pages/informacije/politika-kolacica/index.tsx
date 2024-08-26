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
                              <Box sx={{ mt: '70px' }}>
                                   <Typography marginTop='150px' textAlign='center' fontSize='2rem' paddingTop='20px' fontWeight='bold' >
                                        POLITIKA KOLAČIĆA
                                   </Typography>

                                   <Divider sx={{ marginBottom: '30px' }} variant="middle" />

                                   <Typography textAlign='justify' padding='0px 20px' sx={{ textAlignLast: 'left' }}>
                                        Ovaj sajt koristi sopstvene kolačiće i kolačiće trećih lica za personalizaciju sadržaja i oglasa,
                                        pružanje funkcija društvenih medija i analizu prometa na web stranici.
                                        Naši partneri za društvene mreže, oglašavanje i statističku analizu takođe mogu imati informacije o vašem
                                        korišćenju stranice, koje mogu kombinovati sa ostalim informacijama koje ste im pružili ili koje su
                                        prikupljene od vas prilikom korišćenja usluga koje oni nude.
                                   </Typography>

                                   <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                        Ove informacije imaju za cilј da vam pokažu kako kolačići rade na ovom sajtu i kako možete da ih podesite.
                                   </Typography>

                                   <Typography alignContent='flex-start' variant='h5' padding='0px 20px' textAlign='justify'  >
                                        Dok koristi ovu stranicu, korisnik može prihvatiti upotrebu kolačića koji nisu neophodni za njeno funkcionisanje.
                                        Korisnik u bilo kom trenutku ima mogućnost da spreči postavlјanje kolačića prilikom pristupa stranicama,
                                        odabirom želјenih opcija u okviru rešenja datog uz saglasnost, kao i da ih onemogući odabirom odgovarajuće
                                        opcije u pregledaču. Imajte u vidu da ako je pregledač blokirao upotrebu kolačića, neke usluge i funkcije web
                                        lokacije možda više neće biti dostupne.
                                   </Typography>

                                   <Typography alignContent='flex-start' variant='h3' padding='20px 20px' fontWeight='bold' >
                                        Šta je kolačić?
                                   </Typography>

                                   <Typography alignContent='flex-start' variant='h5' padding='0px 20px' textAlign='justify'  >
                                        Kolačić je tekstualni fajl koji web stranice postavlјaju na vaš uređaj i koji se čuva na vašem uređaju,
                                        kao što su računar, mobilni telefon, tablet, itd. Ti fajlovi se koriste za čuvanje informacija o posetama korisnika,
                                        kao što su jezičke postavke, kolačići koji se koriste za otkrivanje neuspelih pokušaja povezivanja sa web stranicom
                                        i druge opcije, istovremeno vam pomažući da podesite parametre za naredne posete i da učinite stranicu
                                        korisnijom tako što ćete prilagoditi njen sadržaj. Kolačići igraju veoma važnu ulogu u pobolјšanju korisničkog iskustva.
                                   </Typography>

                                   <Typography alignContent='flex-start' variant='h3' padding='20px 20px' fontWeight='bold' >
                                        Kako koristimo kolačiće?
                                   </Typography>

                                   <Typography alignContent='flex-start' variant='h5' padding='0px 20px' textAlign='justify'  >
                                        Saglasnost izražena biranjem opcije Prihvati sve, omogućava instaliranje svih vrsta kolačića na vaš uređaj.
                                        U zavisnosti od toga kako odaberete, Apoteka DAR može dobiti sledeće informacije:
                                   </Typography>

                                   <List>
                                        <ListItem>
                                             <Typography alignContent='flex-start' variant='h5' padding='0px 20px' textAlign='justify'  >
                                                  Pristup web stranici i pregled njenog sadržaja.
                                             </Typography>
                                        </ListItem>
                                        <ListItem>
                                             <Typography alignContent='flex-start' variant='h5' padding='0px 20px' textAlign='justify'  >
                                                  Statistički podaci o korišćenju web stranice.
                                             </Typography>
                                        </ListItem>
                                        <ListItem>
                                             <Typography alignContent='flex-start' variant='h5' padding='0px 20px' textAlign='justify'  >
                                                  Željeni web format za pristup mobilnim uređajima.
                                             </Typography>
                                        </ListItem>
                                        <ListItem>
                                             <Typography alignContent='flex-start' variant='h5' padding='0px 20px' textAlign='justify'  >
                                                  Najnovija pretraživanja izvršena putem usluga na internetu, kao i personalizovani detalјi ovih usluga.
                                             </Typography>
                                        </ListItem>
                                        <ListItem>
                                             <Typography alignContent='flex-start' variant='h5' padding='0px 20px' textAlign='justify'  >
                                                  Pružanje personalizovanog sadržaja s obzirom na aktivnosti na web stranici.
                                             </Typography>
                                        </ListItem>
                                        <ListItem>
                                             <Typography alignContent='flex-start' variant='h5' padding='0px 20px' textAlign='justify'  >
                                                  Potencijalni interes za proizvode.
                                             </Typography>
                                        </ListItem>
                                        <ListItem>
                                             <Typography alignContent='flex-start' variant='h5' padding='0px 20px' textAlign='justify'  >
                                                  Navigaciono ponašanje.
                                             </Typography>
                                        </ListItem>
                                   </List>

                                   <Typography alignContent='flex-start' variant='h3' padding='20px 20px' fontWeight='bold' >
                                        Vrste korišćenih kolačića
                                   </Typography>

                                   <Typography alignContent='flex-start' variant='h5' padding='0px 20px' textAlign='justify'  >
                                        Ova web stranica koristi kolačiće sesije i trajne kolačiće.
                                        Kolačići sesije čuvaju podatke samo dok je korisniku otvoren pregledač,
                                        dok se trajni kolačići čuvaju na korisnikovom uređaju tako da im se može pristupiti i koristiti u više sesija.
                                   </Typography>

                                   <Typography alignContent='flex-start' variant='h3' padding='20px 20px' fontWeight='bold' >
                                        Neophodni kolačići
                                   </Typography>

                                   <Typography alignContent='flex-start' variant='h5' padding='0px 20px' textAlign='justify'  >
                                        Ovi kolačići su neophodni za rad naše web stranice.
                                        Oni vam omogućavaju da koristite glavne karakteristike naše web stranice
                                        (npr. pregled sadržaja stranice, registrovanje preferenci za prikaz rezultata) i obično se javlјaju kao
                                        rezultat izričitog zahteva korisnika (npr. popunjavanje obrasca, izbor jezika upotrebe,
                                        pristup korisničkom računu ili prepoznavanje čestih neuspelih pokušaja potvrde identiteta).
                                        Bez ovih kolačića nećete moći normalno da koristite našu web stranicu.
                                        To su kolačići koje je postavila Apoteka DAR ili treće lice za naš račun, i odnose se samo na rad naše stranice.
                                   </Typography>

                                   <Typography alignContent='flex-start' variant='h3' padding='20px 20px' fontWeight='bold' >
                                        Kolačići za statističku analizu / performanse
                                   </Typography>

                                   <Typography alignContent='flex-start' variant='h5' padding='0px 20px' textAlign='justify'  >
                                        Ovi kolačići nam omogućavaju da brojimo posete i izvore prometa, tako da možemo meriti i
                                        pobolјšati performanse naše web stranice. Pomaže nam da znamo koje su stranice najmanje
                                        popularne i da vidimo kako se posetioci kreću na web stranici. Informacije koje ovi kolačići prikuplјaju su
                                        objedinjene i s toga anonimne.
                                   </Typography>

                                   <Typography alignContent='flex-start' variant='h3' padding='20px 20px' fontWeight='bold' >
                                        Kako se kolačićima upravlјa u pregledaču
                                   </Typography>

                                   <Typography alignContent='flex-start' variant='h5' padding='20px 20px' textAlign='justify'  >
                                        Većina web pregledača automatski prihvata kolačiće, ali obično možete promeniti postavke pregledača da
                                        odbije kolačiće. Ako želite da onemogućite kolačiće, možete to učiniti promenom postavki pregledača.
                                        Međutim, imajte na umu da ako onemogućite kolačiće, nećete moći koristiti sve funkcije našeg sajta.
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