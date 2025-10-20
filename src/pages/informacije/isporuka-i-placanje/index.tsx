import LoadingWheel from "@/components/loading/loading";
import { UIProvider } from "@/context/ui/ui.context";
import theme from "@/styles/theme";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";
// removed per-page ThemeProvider; using global provider
import SearchBox from "@/components/search/search";
import AppDrawer from "@/components/navbar/drawer/drawer";
import { Seo } from "@/components/seo";
import Link from "next/link";

const DeliveryAndPaymentPage = () => {


     // ThemeProvider is applied globally in _app.tsx

     return (
          <>
               <Seo title={'Isporuka i plaćanje'} description={'Isporuka i plaćanje'} url={'https://www.apoteka-dar.rs/'} />
               <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
                    <Stack>
                         <UIProvider>

                              <Box sx={{ mt: '70px' }}>
                                   <Typography marginTop='130px' textAlign='center' fontSize='2rem' fontWeight='bold' >
                                        Isporuka i plaćanje
                                   </Typography>

                                   <Divider sx={{ mb: '20px' }} />

                                   <Typography textAlign='left' fontSize='2rem' fontWeight='bold' ml='20px' >
                                        Isporuka
                                   </Typography>
                                   <Typography textAlign='justify' padding='20px 20px'>
                                        Planirano vreme isporuke od trenutka kreiranja porudžbine je{" "}
                                        <Typography component="span" sx={{ textAlignLast: 'left', fontWeight: 'bold', }}>
                                             1-5 radnih dana,{" "}
                                        </Typography>
                                        ne računajući vikend, na teritoriji Republike Srbije, putem kurirske službe Post Express.
                                        Isporuka se ne vrši tokom državnih praznika koji su definisani kao neradni dani, kao ni na adrese u inostranstvu.
                                   </Typography>

                                   <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left', }}>
                                        Dostavu/isporuku za porudžbine do{" "}
                                        <Typography
                                             component="span"
                                             textAlign='justify'

                                             sx={{ textAlignLast: 'left', fontWeight: 'bold', }}
                                        >
                                             8000 dinara plaća kupac. {" "}
                                        </Typography>
                                        Za sve porudžbine preko{" "}
                                        <Typography
                                             component="span"
                                             textAlign='justify'

                                             sx={{ textAlignLast: 'left', fontWeight: 'bold', }}
                                        >
                                             8000 dinara isporuka je besplatna.
                                        </Typography>
                                   </Typography>



                                   <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left', }}>
                                        Za sve ostale detalje cenovnika možete se informisati na stranici Pošte Srbije: {" "}
                                        <Link
                                             href={'http://www.postexpress.rs/struktura/lat/cenovnik/cenovnik-unutrasnji-saobracaj.asp'}
                                             target="_blank"
                                        >
                                             <Typography
                                                  component="span"
                                                  textAlign='justify'
                                                  sx={{ textAlignLast: 'left', fontWeight: 'bold', }}
                                             >
                                                  cenovnik
                                             </Typography>
                                        </Link>.
                                   </Typography>

                                   <Typography marginTop='30px' textAlign='left' fontSize='2rem' fontWeight='bold' ml='20px' >
                                        Plaćanje
                                   </Typography>

                                   <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                        U mogućnosti ste da odaberete:
                                   </Typography>
                                   <Typography textAlign='justify' padding='0px 20px' sx={{ textAlignLast: 'left', fontSize: '1.2rem', fontWeight: 'bold' }}>
                                        1. Plaćanje pouzećem gotovinski, u trenutku isporuke
                                   </Typography>
                                   <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                        Ukoliko ste se odlučili za plaćanje pouzećem prilikom poslednjeg koraka pre potvrde kupovine,
                                        u obavezi ste da paket koji Vam bude dostavljen na adresu platite kuriru na licu mesta.
                                        Imajte u vidu da kurir možda neće imati sitnog novca da Vam vrati kusur,
                                        te se potrudite da imate tačnu sumu za plaćanje koja je navedena u potvrdi porudžbine koji ste dobili.
                                   </Typography>
                                   <Typography textAlign='justify' padding='0px 20px' sx={{ textAlignLast: 'left', fontSize: '1.2rem', fontWeight: 'bold' }}>
                                        2. Plaćanje platnim karticama tokom procesa kupovine na sajtu
                                   </Typography>
                                   <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                        Ukoliko ste se odlučili za plaćanje Vašom platnom karticom (Dina, Visa, Master i Maestro) online,
                                        prilikom poslednjeg koraka pre potvrde kupovine, aplikacija će Vas preusmeriti na sigurnosni link
                                        ChipCard sistema za sigurno plaćanje, gde unosite podatke o svojoj platnoj kartici. Ukupna suma i broj pošiljke su
                                        automatski uneti i ne mogu se menjati.
                                   </Typography>
                                   <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                        Prilikom unošenja podataka o platnoj kartici, poverljive informacija se prenose u zaštićenoj (kriptovanoj) formi.
                                        Sigurnost podataka prilikom kupovine, garantuje prihvatilac platnih kartica, Chip Card, pa se tako
                                        kompletni proces naplate obavlja na stranicama Chip Card-a. Niti jednog trenutka podaci o platnoj kartici nisu dostupni našem sistemu.
                                   </Typography>
                                   <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                        Apotekarskoj ustanovi DAR je zabranjeno prodavanje, naručivanje, obezbeđivanje ili razmena podataka potrošača ili informacija o
                                        platnoj kartici u bilo kojoj formi trećoj strani, sem ako to nije Banka ili nadležni državni organi. Lični i adresni podaci
                                        potrošača koji se predočavaju Apotekarskoj ustanovi DAR prilikom procesa kupovine smatraju se poslovnom tajnom.
                                   </Typography>

                              </Box>
                              <SearchBox />

                         </UIProvider>
                    </Stack>
               </Container>
          </>
     )
}

export default DeliveryAndPaymentPage;
