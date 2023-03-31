import LoadingWheel from '@/components/loading/loading'
import { UIProvider } from '@/context/ui/ui.context'
import theme from '@/styles/theme'
import { Box, Container, Divider, List, ListItem, ListItemText, Stack, Typography } from '@mui/material'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import React from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { InferGetStaticPropsType } from 'next'

const PrivacyPolicy = (props: InferGetStaticPropsType<typeof getStaticProps>) => {

          const { t } = useTranslation('common')

          const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
                    loading: () => <LoadingWheel />,
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
                                                            <Box>
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

                                                                      <List sx={{ listStyleType: 'num', pl: 4 }}>
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

                                                                      <List sx={{ listStyleType: 'num', pl: 4 }}>
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

                                                                      <Typography fontWeight='bold' padding='20px 20px' textAlign='left' sx={{ display: 'inline-block' }}>{t('information.privacy-policy.p21')}</Typography>

                                                                      <List sx={{ listStyleType: 'circle', pl: 4 }}>
                                                                                <ListItem sx={{ display: 'list-item', fontStyle: 'italic' }} >
                                                                                          <ListItemText >
                                                                                                    {t('information.privacy-policy.p22')}
                                                                                          </ListItemText>
                                                                                </ListItem>
                                                                      </List>

                                                                      <Typography fontWeight='bold' padding='20px 20px' textAlign='left' sx={{ display: 'inline-block' }}>{t('information.privacy-policy.p23')}</Typography>

                                                                      <Typography paddingLeft='20px' textAlign='left'>{t('information.privacy-policy.p24')}</Typography>

                                                                      <List sx={{ listStyleType: 'circle', pl: 4 }}>
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

                                                                      <Typography fontWeight='bold' padding='20px 20px' textAlign='left' sx={{ display: 'inline-block' }}>{t('information.privacy-policy.p30')}</Typography>

                                                                      <Typography padding='20px 20px' textAlign='left' sx={{ display: 'inline-block' }}>{t('information.privacy-policy.p31')}</Typography>

                                                                      <List sx={{ listStyleType: 'circle', pl: 4 }}>
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

                                                                      <Typography padding='0px 20px' fontWeight='bold' textAlign='left' sx={{ display: 'inline-block' }}>{t('information.privacy-policy.ppo')}</Typography>

                                                                      <List sx={{ listStyleType: 'circle', pl: 4 }}>
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

                                                                      <Typography padding='20px 20px' textAlign='left' sx={{ display: 'inline-block' }}>{t('information.privacy-policy.p46')}</Typography>

                                                                      <List sx={{ listStyleType: 'circle', pl: 4 }}>
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

                                                                      <Typography padding='0px 20px' textAlign='left' sx={{ display: 'inline-block' }}>{t('information.privacy-policy.p50')}</Typography>

                                                                      <Typography padding='20px 20px 0px 20px' fontWeight='bold' textAlign='left' sx={{ display: 'block' }}>{t('information.privacy-policy.ppo')}
                                                                                <Typography display='inline'>{t('information.privacy-policy.p51')}</Typography>
                                                                      </Typography>

                                                                      <Typography padding='20px 20px 0px 20px' fontWeight='bold' textAlign='left' sx={{ display: 'block' }}>{t('information.privacy-policy.prc')}
                                                                                <Typography display='inline'>{t('information.privacy-policy.p52')}</Typography>
                                                                      </Typography>

                                                                      <Typography padding='20px 20px 0px 20px' fontWeight='bold' textAlign='left'>{t('information.privacy-policy.cookies')}

                                                                                <Typography sx={{ display: 'inline-flex', textAlign: 'justify' }}>{t('information.privacy-policy.p53')}</Typography>

                                                                                <Typography sx={{ display: 'inline-flex', textIndent: '20px', textAlign: 'justify' }}>{t('information.privacy-policy.p54')}</Typography>

                                                                      </Typography>

                                                                      <Typography alignContent='flex-start' variant='h5' padding='20px 20px' textAlign='center' fontWeight='bold' >
                                                                                {t('information.privacy-policy.p55')}
                                                                      </Typography>



                                                                      Svrha obrade podataka / pravni osnov: Vaše podatke obrađujemo i putem video nadzora koji smo uveli u našim prodavnicama i poslovnim prostorijama u cilju vaše i naše zaštite, a na osnovu zakonski opravdanog interesa u cilju zaštite imovine, zaposlenih, kupaca I posetilaca a naročito za zaštitu od sledećih identifikovanih rizika:

                                                                      nedozvoljen pristup u prostore i objekte;
                                                                      iznošenje, odnosno otuđenje i neovlašćeno korišćenje štićenih predmeta;
                                                                      unošenje oružja, eksplozivnih, radioaktivnih i drugih opasnih predmeta i materija;
                                                                      provale, diverzije i nasilan napad na objekat ili oduzimanje predmeta;
                                                                      neovlašćen pristup podacima i dokumentaciji; i
                                                                      zaštita vozila za transport novca i drugih prevoznih sredstava.
                                                                      Pravni osnov za obradu podataka putem video nadzora je član 29 i 30 Zakona o privatnom obezbeđenju.

                                                                      Primaoci / kategorije primaoca: Video snimci se neće javno objavljivati i ustupati trećim licima, osim u slučajevima kada to predstavlja našu zakonsku obavezu ili ovlašćenje. Uvid u video snimke ima naš partner koji nam pruža uslugu privatnog obezbeđenja odnosno koji je zadužen za fizičko i tehničko obezbeđenje naših prodavnica. Dodatno, za potrebe održavanja sistema video nadzora angažovali smo servisera koji može imati uvid u video snimke samo u svrhu obezbeđivanja funkcionisanja istog.

                                                                      Rok čuvanja / kriterijumi za određivanje roka čuvanja podataka: Video snimci se čuvaju 30 dana. Izrađene kopije video snimaka se u određenim situacijama čuvaju duže od 30 dana (vođenje pravnog postupka). Video snimci koji više nisu potrebni se brišu bez odlaganja (okončanje pravnog postupka).



                                                                      OBRADA PODATAKA KOJE NAM DOSTAVLJATE E-MAIL-om
                                                                      Svrha obrade podataka/ pravni osnov: Sa ličnim podacima, koje nam dostavljate putem kontakt obrasca, putem telefona ili putem e- maila, postupamo naravno poverljivo. Vaše podatke obrađujemo isključivo u skladu sa utvrđenom svrhom, a kako bismo odgovorili na vaš upit. Pravni osnov za obradu podataka je član 12, stav 1 tačka 6) Zakona o zaštiti podataka o ličnosti (legitimni interes). Naš i istovremeno vaš (legitimni) interes za ovakvu obradu podataka proizilazi iz potrebe da odgovorimo na vaša pitanja, ukoliko je neophodno da rešimo postojeće probleme i kako bi time obezbedili vaše zadovoljstvo kao našeg kupca ili kao korisnika naše internet stranice.

                                                                      Ako učestvujete u nekoj od naših anketa, takvo učestvovanje je dobrovoljno. Kod anonimnih anketa ne čuvamo podatke koji omogućavaju da zaključimo ko je učesnik ankete. Čuvamo samo datum i vreme vašeg učešća. Svaki lični podatak koji ste nam dali putem ankete smatramo dobrovoljno datim i čuvamo ih u skladu sa odredbama Zakona o zaštiti podataka o ličnosti. Molimo vas da u slobodna polja ne unosite imena ili slične podatke, što bi nam omogućilo da zaključimo o kome se radi bilo da je reč o vama ili drugim licima. U slučaju da ste dali saglasnost za sprovođenje ankete, pravni osnov za obradu podataka se zasniva na vašem pristanku u skladu sa članom 12, stav 1, tačka 1) Zakona o zaštiti podataka o ličnosti. U tom slučaju, imate pravo da opozovete vašu saglasnost u svakom trenutku. Opoziv pristanka ne utiče na dopuštenost obrade koja je vršena na osnovu pristanka pre opoziva. Detalji o obradi podataka u vezi anketa su regulisani pravilima zaštite podataka svake pojedinačne ankete.

                                                                      Primaoci / kategorije primaoca: Generalno ne prenosimo podatke trećim licima. Izuzetno, podatke će po našem nalogu obrađivati naši partneri (obrađivači). Svi naši partneri su izabrani na veoma pažljiv način i ugovorom su obavezani na čuvanje ličnih podataka u tajnosti, a u skladu sa članom 45 Zakona o zaštiti podataka o ličnosti.

                                                                      Dodatno, u nekim slučajevima se javlja potreba da vaše upite prosledimo drugim ugovornim partnerima (npr. dobavljačima kod upita u vezi određenih proizvoda), a kako bi oni obradili isti. U tim slučajevima upit je prethodno anonimizovan, tako da se ne može utvrditi o kome se radi. Ako bi u konkretnom slučaju postojala potreba da se vaši lični podaci prenesu, mi ćemo vas o tome prethodno obavestiti i tražićemo vašu saglasnost.

                                                                      Rezultati naših anketa se načelno koriste samo za naše potrebe. Generalno ne prosleđujemo te podatke trećim licima, osim ako ste nam za to dali izričitu saglasnost.
                                                                      Rok čuvanja / kriterijumi za određivanje roka čuvanja podataka: Sve lične podatke koje nam dostavite prilikom postavljanja nekog pitanja (sugestije, pohvale ili kritike) preko ove internet stranice ili putem e-maila, brišu se ili anonimizuju najkasnije u roku od 90 dana nakon davanja konačnog odgovora. Iskustvo nam je pokazalo da se obično nakon 90 dana više ne pojavljuju povratna pitanja u vezi našeg odgovora.



                                                                      OBRADA PODATAKA U REKLAMNE SVRHE
                                                                      Svrha obrade podataka / pravni osnovi: Uz vašu saglasnost beležimo vaše ponašanje kao korisnika naše internet stranice i newsletter-a. Praćenje ponašanja korisnika pre svega podrazumeva podatke o odeljcima na kojima ste se zadržavali i koje linkove ste koristili. Na taj način kreiramo personalizovane korisničke profile sa vašim ličnim podacima i/ili sa podatkom o vašoj e-mail adresi kako bismo eventualno naše obraćanje u obliku newsletter-a, on-site reklame i štampanog materijala bolje prilagodili vašim ličnim interesovanjima, a time poboljšali našu ponudu.

                                                                      Pravni osnov za gore pomenutu obradu podataka je član 12, stav 1, tačka 6), Zakona o zaštiti podatka o ličnosti (legitiman interes) ili član 12, stav 1, tačka 1), Zakona o zaštiti podataka o ličnosti (pristanak). Obrada podataka kupaca u naše reklamne svrhe ili za reklamne potrebe trećih lica smatra se opravdanim interesom.

                                                                      Pravo na prigovor: U svakom trenutku i potpuno besplatno možete da uložite prigovor na obradu podataka u gore pomenute svrhe i to putem svakog kanala komunikacije. Nakon što uložite prigovor nećemo više obrađivati vaše podatke pri čemu prigovor ne utiče na obradu koja je vršena na osnovu pristanka pre prigovora. U tu svrhu je dovoljno da pošaljete e-mail ili pismo putem pošte na našu kontakt adresu.

                                                                      Primaoci / kategorije primaoca: Generalno ove podatke ne prosleđujemo trećim licima.

                                                                      Rok čuvanja / kriterijumi za određivanje roka čuvanja podataka: Ukoliko opozovete svoj pristanak za individualno oglašavanje ili se ne slažete sa određenim promotivnim aktivnostima, vaše podatke ćemo obrisati iz odgovarajuće mailing liste. Ukoliko uložite prigovor, vaša kontakt adresa biće blokirana za dalju obradu podataka u reklamne svrhe. Napominjemo da se u izuzetnim slučajevima, čak i nakon prijema vašeg prigovora, može dogoditi poneka pošiljka reklamnog materijala. To je tehnički uslovljeno vremenom koje je potrebno za pripremu reklamnog materijala i ne znači da ne poštujemo vaš prigovor. Hvala vam na razumevanju.



                                                                      OBRADA PODATAKA KOD PRIJAVE ZA NEWSLETTER
                                                                      Svrha obrade podataka / pravni osnov: Imate mogućnost da se na našoj internet stranici prijavite za naš newsletter. Ako ste pristali da primate naš newsletter, koristimo vašu e-mail adresu i eventualno vaše ime za slanje informacija o proizvodima, promocijama, nagradnim igrama / konkursima, novostima i ponudama prodavnica. Ove podatke čuvamo i obrađujemo u svrhu slanja newslettera.

                                                                      Sadržaj newslettera uključuje akcije (ponude, promocije, nagradne igre, itd.) kao i proizvode koji se nalaze na www.apotekadar.rs .

                                                                      Uz vašu saglasnost, beležimo vaše ponašanje kao korisnika naše internet stranice www.apotekadar.rs i newslettera. Ocena ponašanja korisnika podrazumeva pre svega podatke o odeljcima na kojima se zadržavate i na linkove, koje tamo koristite. Na taj način kreiramo personalizovane korisničke profile sa vašim ličnim podacima i/ili sa podatkom o vašoj e-mail adresi kako bismo omogućili kreiranje reklamne ponude od strane Apotekarska ustanova “dar" u obliku newslettera, i štampanog materijala, prilagođene vašem ličnom interesovanju i time poboljšamo našu ponudu.

                                                                      Pravni osnov za obradu podataka prilikom slanja newslettera je vaša saglasnost u skladu sa članom 12, stav 1, tačka 1), Zakona o zaštiti podataka o ličnosti.

                                                                      Da bismo obezbedili da prilikom unosa e-mail adrese nije došlo do greške, koristimo takozvani double-opt-in postupak. Kada unesete e-mail adresu u polje za registraciju, na istu ćemo vam proslediti link za potvrdu. Samo kada kliknete na ovu potvrdu, vaša e-mail adresa će biti uneta u našu mailing listu.

                                                                      Vašu saglasnost za prijem newslettera ili kreiranje personalizovanih korisničkih profila možete da opozovete u svakom trenutku. Opoziv pristanka ne utiče na dopuštenost obrade koja je vršena na osnovu pristanka pre opoziva. To možete učiniti tako što ste se npr. na našoj internet stranici odjaviti sa liste za prijem newslettera. Link za odjavu imate na kraju svakog newslettera. Ukoliko opozovete pristanak, obrisaćemo vaše podatke.

                                                                      Primaoci / kategorije primaoca: Ako smo za slanje newslettera angažovali eksterne partnere, oni su obavezani ugovorom u skladu sa članom 45 Zakona o zaštiti podataka o ličnosti. Svako dalje obelodanjivanje podatka trećim licima je isključeno.

                                                                      Rok čuvanja / kriterijumi za određivanje roka čuvanja podataka: Ukoliko opozovete vašu saglasnost za naš newsletter, obrisaćemo vaše podatke sa odgovarajuće mailing liste za slanje newslettera.



                                                                      OBRADA PODATAKA POSLOVNIH PARTNERA
                                                                      Naredne napomene u vezi obrade podataka važe za vas ukoliko ste nas kontaktirali, ukoliko sa nama vodite pregovore u cilju zaključenja ugovora i/ili imate već zaključen ugovor sa nama i ukoliko se u vezi s tim obrađuju podaci o ličnosti. Koji podaci se u pojedinačnom slučaju obrađuju, zavisi pre svega od ugovorenih usluga. Iz tog razloga neće svi delovi ovog odeljka biti relevantni za vas.

                                                                      Na koji način prikupljamo vaše podatke i koje kategorije podataka obrađujemo?

                                                                      Podatke generalno prikupljamo direktno od vas.

                                                                      Međutim, podatke možemo prikupiti i od drugih kompanija, državnih organa ili trećih lica, npr. kreditni biro, poreska uprava i sl. Osim toga, lične podatke možemo da prikupimo i putem naših sistema prijave o mogućim kršenjima zakona ili internih smernica.

                                                                      Mogu se obrađivati sledeći podaci o ličnosti: lični podaci (npr. ime i prezime, adresa i ostali kontakt podaci, datum i mesto rođenja, kao i državljanstvo), podaci legitimacije i autentifikacije (npr. izvod iz privrednog registra, podaci iz lične karte, primer potpisa), podaci u vezi našeg poslovnog odnosa (npr. podaci o plaćanju, podaci o nalozima), podaci o bonitetu, podaci o strukturi kompanije i vlasničkoj strukturi, fotografije i video snimci (npr. prilikom isporuke robe), kao i drugi podaci slični sa gore navedenim kategorijama podataka.

                                                                      Svrha i pravni osnov obrade podataka

                                                                      Obrada u svrhu ispunjenja ugovornih obaveza (član 12, stav 1, tačka 2) Zakona o zaštiti podataka o ličnosti)

                                                                      Podaci se obrađuju radi pripreme zaključenja ugovora, koja prethodi ugovorom odnosu kao i u svrhu ispunjavanja obaveza nakon zaključenja ugovora.

                                                                      Obrada u svrhu ispunjenja zakonske obaveza (član 12, stav 1, tačka 3) Zakona o zaštiti podataka o ličnosti)

                                                                      Svrha obrade podataka proizilazi, u zavisnosti od pojedinačnog slučaja, iz zakonskih propisa. Tako na primer, podaci se obrađuju u svrhu ispunjenja obaveza čuvanja dokumentacije i u vezi identifikacije, npr. na osnovu propisa za sprečavanje pranja novca, na osnovu poreske kontrole i prijave i obrade podataka u okviru upita državnih organa.

                                                                      Obrada u svrhu ispunjenja legitimnih interesa (član 12, stav 1, tačka 6) Zakona o zaštiti podataka o ličnosti)

                                                                      Može da dođe do potrebe da se lični podaci, koje ste stavili na raspolaganje, obrađuju u okvirima koji prevazilaze prvobitno ispunjenje ugovora. Naši legitimni interesi za takvu obradu su izbor odgovarajućeg poslovnog partnera, ispunjenje pravnih zahteva, otklanjanje zahteva za odgovornost, kontrola pristupa, razjašnjavanje mogućih prekršaja, sprečavanje krivičnih dela i obrada šteta, koje su nastale na osnovu ugovornog odnosa.

                                                                      U slučaju zaključenja ugovora, u svrhu ispunjenja gore navedenih legitimnih interesa, u pojedinačnim slučajevima, prikupljamo podatke o vašem bonitetu preko kreditnog biroa. Podatke o bonitetu, koje smo dobili od kreditnog biroa, obrađujemo u svrhu provere vaše kreditne sposobnosti. Kreditni biro čuva podatke, koje npr. dobijaju od banaka ili kompanija. U te podatke spadaju pre svega, prezime, ime, datum rođenja, adrese i informacije o istoriji plaćanja. Informacije o sačuvanim podacima koji se odnose na vas možete dobiti direktno od kreditnog biroa.

                                                                      Ko ima pristup vašim podacima?

                                                                      Unutar našeg zdravstvene ustanove, pristup podacima, koje ste nam stavili na raspolaganje, imaju samo oni sektori kojima su isti neophodni za ispunjenje ugovornih ili zakonskih obaveza ili u svrhu ispunjenja legitimnih interesa. U okviru ugovornog odnosa, angažujemo i druge pružaoce usluga, koji mogu da dobiju pristup vašim ličnim podacima. Pridržavanje propisa o zaštiti podataka o ličnosti se u ovim slučajevima obezbeđuje ugovorom.

                                                                      Koliko dugo čuvamo vaše podatke?

                                                                      Lične podatke čuvamo onoliko koliko je to neophodno za ispunjenje gore navedenih svrha. Pri tome, vodimo računa o zakonskim obavezama čuvanja, na primer zakonski rok od 5 godina u skladu sa Zakonom o računovodstvu.

                                                                      Da li ste u obavezi da nam dostavite vaše podatke?

                                                                      U okviru našeg poslovnog odnosa u obavezi ste da nam dostavite one lične podatke, koji su neophodni za započinjanje, sprovođenje i okončavanje ugovornog odnosa i za ispunjenje obaveza koje su povezane sa tim, kao i za čije prikupljanje imamo zakonsku obavezu ili imamo pravo na osnovu legitimnih interesa. Bez tih podataka, po pravilu nećemo biti u mogućnosti da započnemo poslovni odnos sa vama.

                                                                      Koja prava imate kao lice na koje se podaci odnose?

                                                                      Imate pravo, da na zahtev i besplatno dobijete informacije o vašim podacima koje obrađujemo. Dodatno, u skladu sa zakonskim uslovima, imate pravo na ispravku i brisanje vaših podataka, pravo na prenosivost podataka, kao i pravo na ograničenje obrade. Ukoliko obradu vaših ličnih podataka vršimo na osnovu saglasnosti, u svako doba imate pravo da tu saglasnost opozovete. Opoziv pristanka ne utiče na dopuštenost obrade koja je vršena na osnovu pristanka pre opoziva. Molimo vas da se u navedenim slučajevima obratite pisanim putem ili e-mailom na dole navedenu adresu našeg lica zaduženog za zaštitu podataka. Dodatno, ukoliko niste saglasni sa obradom vaših ličnih podataka, imate mogućnost da podnesete pritužbu državnom organu (Poverenik za informacije od javnog značaja i zaštitu podataka o ličnosti).

                                                                      Odgovorno lice (rukovalac)

                                                                      Odgovorno lice za obradu vaših podataka odnosno rukovalac podataka je zdravstvena ustanova Apotekarska ustanova “dar" , sa sedištem u  kragujevac , Adresa , MB: 08289948 , Tel. 063 5 444 66 , E-mail: online@apotekadar.rs . Na raspolaganju vam stoji i naše lice zaduženo za zaštitu ličnih podataka i to na sledećoj adresi: Apotekarska ustanova “dar" , sa sedištem u  kragujevac ,  , Srbija.



                                                                      OBRADA PODATAKA NA DRUŠTVENIM MREŽAMA
                                                                      Za obradu Vaših podatka je delom odgovoran i operater određene platforme društvene mreže. Pored toga, u nekim slučajevima smo mi takođe i operater platforme i u tom smislu postoji zajednička odgovornost u skladu sa članom 43 Zakona. Apotekarska ustanova “dar" , upravlja sledećim stranicama društvenih mreža:

                                                                      Facebook: https://www.facebook.com/Apoteka-dar-373610286128056/
                                                                      Instagram: https://www.instagram.com/darapoteka/


                                                                      1. Odgovornost operatera
                                                                      Na obradu podataka od strane operatera platforma društvenih mreža (npr. administracija članova i deljenje informacija) imamo samo ograničen uticaj. Tamo gde možemo da utičemo i podesimo parametre za obradu Vaših podataka i to tako da operater platforme društvenih mreža postupa u skladu sa zaštitom podataka, mi preduzimamo sve mere koje su nam na raspolaganju. Međutim, na mnogim mestima ne možemo da utičemo na obradu podataka operatera, niti znamo koje podatke operater tačno obrađuje.

                                                                      Operater platforme upravlja celom IT infrastrukturom usluge, pridržava se sopstvenih pravila o zaštiti podataka i ima sa Vama poseban korisnički odnos (ukoliko ste registrovani korisnik usluge društvenih mreža). Dodatno, operater je isključivo odgovoran za sva pitanja u odnosu na podatke Vašeg korisničkog profila, kojima mi kao kompanija nemamo pristup.

                                                                      Detaljnije informacije o obradi podataka od strane operatera platforma društvenih mreža i o mogućnostima prigovora možete pronaći u njihovim pravilima o zaštiti podataka:

                                                                      Facebook: https://www.facebook.com/privacy/explanatio
                                                                      Instagram: https://help.instagram.com/519522125107875


                                                                      2. Naša odgovornost
                                                                      a) Svrha / pravni osnov obrade podataka:

                                                                      Na našim stranicama društvenih mreža, obrađujemo Vaše podatke u svrhu informisanja potrošača o ponudama, proizvodima, uslugama, akcijama, nagradnim igrama, bitnim informacijama, novostima u kompaniji, u svrhu interakcije sa posetiocima društvenih mreža kao i u svrhu davanja odgovora na postavljena pitanja, pohvale i kritike.

                                                                      Zadržavamo pravo da obrišemo sadržaje ukoliko je to potrebno. Dodatno, Vaše podatke odnosno sadržaje ćemo podeliti na našoj stranici ako to predstavlja funkciju platforme društvene mreže. Vaše podatke obrađujemo i u svrhu komuniciranja sa vama.

                                                                      Pravni osnov za obradu Vaših podataka je član 12 stav 1 tačka 6 Zakona (legitiman interes). Obrada podataka se vrši u interesu ostvarivanja naših odnosa sa javnošću i komunikacije.

                                                                      Na obradu Vaših podataka, koju Kremenac d.o.o. vrši u svrhu komunikacije sa potrošačima, operater ne može da utiče.

                                                                      Kao što smo već napomenuli, na onim mestima na kojima nam operater platforme društvene mreže pruži mogućnost, vodimo računa da naše stranice podesimo u skladu sa zaštitom podataka.

                                                                      b) Primaoci / kategorije primaoca:

                                                                      Podatke, koje ste uneli na našim stranicama društvenih mreža, kao što su npr. komentari, video snimci, slike, lajkovi, javna obaveštenja i sl. objavljuje operater platforme, a mi ih ni u jednom trenutku ne obrađujemo u neku drugu svrhu od predviđene. Zadržavamo pravo da obrišemo nezakonite sadržaje, ukoliko je to potrebno. To je slučaj na primer u slučaju prekršajnih ili nezakonitih objava, komentara mržnje, komentara (eksplicitno seksualnih sadržaja) ili priloga (npr. slike ili video snimci), koji između ostalog krše autorska prava, lična prava, predstavljaju krivično delo ili krše etička načela zdravstvene ustanove Apotekarska ustanova “dar" .

                                                                      Vaše sadržaje ćemo u datom slučaju eventualno podeliti na našoj stranici ako to predstavlja funkciju platforme društvene mreže. Vaše podatke obrađujemo i u svrhu komuniciranja sa vama. Ukoliko nam putem društvene mreže pošaljete upit, možemo da Vas uputimo na druge, bezbedne puteve komunikacije odnosno koji garantuju poverljivost. Imajte na umu da uvek imate mogućnost da nam poverljive upite pošaljete putem email adrese navedene u opštim informacijama ili putem kontakt obrasca.

                                                                      Vaše podatke koje nam šaljete poverljivim putem (npr. privatna obaveštenja, dopis ili e-mail) generalno ne prosleđujemo trećim licima. U izuzetnim slučajevima, pristup Vašim podacima mogu da imaju naši eksterni partneri kojima poveravamo određene poslove kako bismo usluge koje pružamo doveli na najviši nivo. U tom slučaju radi se o obrađivačima koji koriste podatke po našem nalogu. Svi naši partneri su izabrani na veoma pažljiv način i ugovorom su obavezani na čuvanje ličnih podataka u tajnosti u skladu sa članom 45 Zakona.

                                                                      Takođe, može postojati potreba da deo Vaših poverljivih upita prosledimo ugovornim partnerima (npr. dobavljačima kod upita u vezi specifičnih proizvoda), a u svrhu obrade Vašeg upita. Međutim, u tim slučajevima se upit prethodno anonimizira, tako da treće lice ne može da ih dovede ni u kakvu vezu sa Vama. Ukoliko u pojedinačnom slučaju prosleđivanje Vaših ličnih podataka bude neophodno, mi ćemo Vas o tome prethodno obavestiti i zatražićemo Vašu saglasnost.

                                                                      c) Rok čuvanja / kriterijumi za određivanje roka čuvanja:

                                                                      Sve podatke o ličnosti, koje nam dostavite sa Vašim upitom (pitanja, sugestije, pohvale ili kritike), brišemo odnosno podatke bezbedno anonimizujemo najkasnije u roku od 90 dana nakon što Vam damo konačan odgovor. Vaše podatke čuvamo 90 dana jer se u pojedinačnim slučajevima može dogoditi da nas Vi, kao potrošač, kontaktirate ponovo u vezi odgovora o istom pitanju i tom slučaju moramo da imamo mogućnost da se nadovežemo na prethodnu prepisku. Iskustvo nam je pokazalo da se po pravilu posle 90 dana više ne pojavljuju povratna pitanja u vezi naših odgovora.

                                                                      Sve javne objave koje ste postavili na stranici biće trajno dostupne, osim ako ih ne obrišemo prilikom ažuriranja određene teme ili usled zakonskog prekršaja, kršenja naših smernica ili pak ako objavu Vi sami obrišete.

                                                                      Mi nemamo nikakvu mogućnost da utičemo na brisanje Vaših podataka od strane sâmog operatera. U tom slučaju primenjuju se pravila zaštite podataka konkretnog operatera.

                                                                      d) Nagradne igre

                                                                      Svrha / pravni osnov obrade podataka:

                                                                      Imate mogućnost da na našoj stranici, preko našeg newslettera, na našim društvenim mrežama ili na sajtu www.apotekadar.rs , učestvujete u različitim nagradnim igrama. Ukoliko u određenoj nagradnoj igri nije drugačije određeno, ili ako nam niste dali drugačiju izričitu saglasnost, mi ćemo podatke o ličnosti, koje ste nam dostavili u okviru učešća u nagradnoj igri, obrađivati isključivo u svrhu realizacije nagradne igre (npr. izvlačenje/ utvrđivanje dobitnika, obaveštavanje dobitnika, slanje nagrade, po potrebi anonimno objavljivanje dobitnika). Ukoliko na društvenoj mreži koristite Vaše puno ime i prezime ili ste prepoznatljivi preko fotografija na Vašem profilu, mi ne možemo da isključimo Vašu identifikaciju od strane drugih korisnika.

                                                                      Pravni osnov obrade Vaših podataka u okviru nagradnih igara je u načelu član 12 stav 1 tačka2) (izvršenje ugovora) Zakona. U slučaju davanja pristanka u okviru nagradne igre, pravni osnov za obradu podataka je saglasnost u skladu sa članom 12 stav 1 tačka 1) Zakona. U tom slučaju imate pravo da opozovete pristanak i to u svakom trenutku. Opoziv pristanka ne utiče na dopuštenost obrade koja je vršena na osnovu pristanka pre opoziva.

                                                                      Primaoci / kategorije primaoca:

                                                                      Podatke prosleđujemo trećim licima samo kada je to neophodno za realizaciju nagradne igre tj. za slanje nagrade (npr. slanje nagrade od strane sponzora nagradne igre ili prosleđivanje podataka logističkoj kompaniji) ili ako ste nam za to dali izričitu saglasnost. Molimo Vas da imate u vidu da je u nekim slučajevima moguće učešće u nagradnoj igri na stranicama sa javnim pristupom (npr. na oglasnoj tabli ili preko komentara), tako da i drugi korisnici mogu javno da vide činjenicu Vašeg učešća preko Vaše interakcije sa nama. U takvim slučajevima i drugi na društvenoj mreži mogu da imaju saznanje o Vašoj nagradi. Ukoliko na društvenoj mreži koristite Vaše puno ime i prezime ili ste prepoznatljivi preko fotografija na Vašem profilu, mi ne možemo da isključimo Vašu identifikaciju od strane drugih korisnika.

                                                                      Rok čuvanja / kriterijumi za određivanje roka čuvanja:

                                                                      Po završetku nagradne igre i objavljivanja pobednika, lični podaci učesnika se brišu osim onih podataka o dobitnicima koje smo zakonom dužni da čuvamo prilikom organizovanja nagradne igre. U slučaju da je nagrada proizvod sa garancijom, podaci dobitnika se čuvaju za vreme zakonskog prava na garanciju kako bi se u slučaju nedostatka po potrebi naložila popravka ili zamena. Prilikom učešća u nagradnoj igri na društvenoj mreži (npr. putem objave ili komentara) mi nemamo nikakve mogućnosti da utičemo na brisanje Vaših podataka od strane operatera. U tom slučaju primenjuju se pravila zaštite podataka operatera.

                                                                      e) Slanje newslettera

                                                                      Svrha / pravni osnov obrade podataka:

                                                                      Na naš newsletter možete da se prijavite i preko društvene mreže. Ukoliko ste dali saglasnost za prijem našeg newslettera, obrađivaćemo samo podatak o Vašoj email adresi i po potrebi Vaše ime da bismo Vam poslali (ako je moguće individualne) informacije o proizvodima, akcijama, nagradnim igrama i novostima iz ponude prodavnica kao i o anketama o zadovoljstvu kupaca. Te podatke čuvamo i obrađujemo u svrhu slanja newslettera.Sadržaji newsletter-a obuhvataju ponude proizvoda, akcijske popuste, nagradne igre itd.

                                                                      Uz Vašu saglasnost evidentiraćemo Vaše ponašanje kao korisnika naše stranice koja su prikupljena na www.apotekadar.rs kao i na našem newsletteru. Evaluacija korisničkog ponašanja obuhvata pre svega kategorije u kojima se krećete na dotičnoj stranici tj. newsletteru i koje linkove tamo pozivate. Tom prilikom se kreiraju personalizovani korisnički profili koji se vezuje za Vašu ličnost i/ili email adresu, kako bi marketinško obraćanje (pre svega u obliku newsletter-a, reklamnih banera i štampane reklame) bilo što više usmereno na Vaša lična interesovanja i kako bi se reklamna ponuda poboljšala.

                                                                      Pravni osnov za gore navedene obrade Vaših podataka je Vaša saglasnost u skladu sa članom 12 stav 1 tačka 1) Zakona.

                                                                      Kako bismo bili sigurni da nije došlo do greške prilikom unosa email adrese, podesili smo takozvani Double-Opt-In postupak: nakon što unesete Vašu email adresu u polje za prijavu, mi Vam šaljemo link za potvrdu. Tek kada kliknete na taj link, Vaša email adresa se unosi u našu mailing listu.

                                                                      Vašu saglasnost za prijem newslettera, učešće u anketama o zadovoljstvu kupaca i kreiranje personalizovanih korisničkih profila možete da opozovete u svako vreme. Link za odjavu možete pronaći u ovom tekstu ili na kraju svakog newsletter-a. Vašom odjavom smatramo da ste opozvali Vašu saglasnost za kreiranje Vašeg personalizovanog korisničkog profila i prijem newsletter-a. Vaše korisničke podatke tada brišemo. Opoziv ne utiče na dopuštenost obrade koja je vršena na osnovu pristanka pre opoziva.

                                                                      Primaoci / kategorije primaoca:

                                                                      Ukoliko se za slanje newslettera angažuju eksterni partneri - obrađivači podataka, oni se obavezuju ugovorom u skladu sa članom 45 Zakona.

                                                                      Rok čuvanja / kriterijumi za određivanje roka čuvanja:

                                                                      Ukoliko opozovete Vašu saglasnost za prijem našeg newslettera, Vaša email adresa će biti blokirana za prijem newslettera. Vaši podaci će šest meseci nakon toga biti obrisani iz odgovarajućih mailing listi. Prilikom prijave na nekoj od društvenih mreža mi nemamo nikakve mogućnosti da utičemo na brisanje Vaših podataka od strane operatera. U tom slučaju se primenjuju pravila zaštite podataka konkretnog operatera.



                                                                      3. Zajdenička odgovornost, čl. 43 Zaokna o zaštiti podataka o ličnosti
                                                                      Sa operaterom društvene mreže delom postoji odnos u skladu sa čl. 45 Zakona (zajednička odgovornost):

                                                                      Za metode web praćenja koje operater platforme društvene mreže omogućava, operater i mi smo zajednički odgovorni. Web praćenje (webtracking) može pritom da usledi i nezavisno od toga da li ste na platformu društvene mreže prijavljeni ili registrovani. Kao što smo već napomenuli, nažalost samo ograničeno možemo da utičemo na metode web praćenja operatera, na primer ne možemo da ih isključimo.

                                                                      Pravni osnov za metode web praćenja je član 12 stav 1 tačka 6) Zakona (legitiman interes). Opravdan i legitiman interes se sastoji u tome da se platforma društvene mreže i konkretna fan stranica (fan-page) optimizuju.

                                                                      Ostale informacije o primaocima, tj. kategorijama primaoca, kao i roku čuvanja, tj. kriterijumima za određivanje roka čuvanja možete da pronađete u pravilima zaštite podataka operatera platformi. Na ta pravila nemamo nikakav uticaj.

                                                                      Mogućnost za ostvarivanje Vašeg prava u vezi sprečavanja ovih metoda web praćenja možete pronaći u pravilima zaštite podataka operatera koje su navedene u tački 2. Po ovom pitanju možete da kontaktirate operatere platformi putem kontakt podataka operatera koji su navedeni u njihovim pravilima.

                                                                      U pogledu statistika koje nam operater platforme društvene mreže stavlja na raspolaganje, mi samo uslovno možemo da utičemo na njih i da ih sprečimo. Ali, vodimo računa da nam se ne dostavljaju nikakve dodatne opcione statistike.

                                                                      Iz svega gore navedenog, molimo Vas da budete svesni činjenice da nije moguće isključiti mogućnost da operater platforme društvene mreže koristi podatke sa Vašeg profila kao i podatke o Vašem ponašanju kako bi na primer ocenio Vaše navike, lične odnose, tendencije i sl. Apotekarska ustanova “dar" nema nikakav uticaj na obradu ili prosleđivanje Vaših podataka od strane operatera društvene mreže.



                                                                      4. Vaša prava
                                                                      U skladu sa članom 26 Zakona imate pravo da bez naknade zahtevate informacije odnosno detalje o obradi Vaših podataka.

                                                                      Dodatno, pod uslovom da su ispunjeni zakonski uslovi, imate pravo na ispravku (član 29Zakona), brisanje (član 30 Zakona) kao i pravo na ograničenje obrade (član 31 Zakona).

                                                                      Ukoliko se obrada Vaših podataka zasniva na članu 12 stav 1 tačka 5 ili 6 Zakona, imate pravo da podnesete prigovor na obradu podataka u skladu sa članom 37 Zakona. Ukoliko podnesete prigovor, bićemo u obavezi da prekinemo sa obradom Vaših podataka, osim ako predočimo da postoje zakonski razlozi za obradu podataka koji pretežu nad interesima, pravima ili slobodama lica na koja se podaci odnose.

                                                                      Ukoliko ste nam sami dostavili Vaše podatke, u skladu sa članom 36 Zakona imate pravo da te podatke prenese drugom rukovaocu. Po pravilu, na društvenim mrežama to pravo možete da ostvarite samo direktno prema operateru društvene mreže, jer samo operater ima pristup podacima iz Vašeg profila.

                                                                      Ukoliko se obrada Vaših podataka zasniva na Vašem pristanku u skladu sa članom 12. stav 1. tačka 1) Zakona, imate pravo da opozovete pristanak u svakom trenutku. Opoziv pristanka ne utiče na dopuštenost obrade koja je vršena na osnovu pristanka pre opoziva.

                                                                      Kako bi ostvarili pomenuta prava, kao i u slučaju da imate dodatnih pitanja ili pritužbe molimo Vas da se obratite našem licu zaduženom za zaštitu ličnih podataka putem kontakt podataka navedenih u sledećoj tački ovog teksta.

                                                                      Pored toga, u skladu sa članom 82 Zakona, imate pravo da podnesete pritužbu državnom organu nadležnom za zaštitu podataka o ličnosti (Poverenik za informacije od javnog značaja i zaštitu podataka o ličnosti).

                                                                      Ukoliko želite da ostvarite Vaša prava u vezi konkretne obrade Vaših podataka, molimo Vas da nam se obratite. Mi ćemo tada proveriti Vaš upit (npr. zahtev za obaveštenjem ili prigovor) ili ćemo ga po potrebi proslediti nadležnoj platformi društvene mreže, ukoliko je predmet Vašeg zahteva obrada podataka od strane operatera.



                                                                      5. Kontakt lica zaduženog za zaštitu ličnih podataka u Apotekarska ustanova “dar" :
                                                                      Ako imate bilo kakvih dodatnih pitanja ili nedoumica u vezi sa obradom Vaših podataka, slobodno nas kontaktirajte, a mi ćemo se potruditi da vam pomognemo.

                                                                      U te svrhe, na raspolaganju Vam stoji lice za zaštitu ličnih podataka u Apotekarska ustanova “dar" koga možete da kontaktirate pisanim putem ili putem emaila: Apotekarska ustanova “dar",  kragujevac,  , Zaštita ličnih podataka, E-Mail: online@apotekadar.rs .



                                                                      VAŠA PRAVA

                                                                      1. Pregled
                                                                      Pored prava na opoziv vaše saglasnosti, ukoliko su ispunjeni zakonski uslovi, imate sledeća prava:

                                                                      pravo na informisanje o vašim ličnim podacima koje obrađujemo, u skladu sa članom 26 Zakona o zaštiti podataka o ličnosti,
                                                                      pravo na ispravku netačnih ili nepotpunih podataka, u skladu sa članom 29 Zakona o zaštiti podataka o ličnosti,
                                                                      pravo na brisanje vaših sačuvanih podataka, u skladu sa članom 30 Zakona o zaštiti podataka o ličnosti,
                                                                      pravo na ograničenje obrade podataka, u skladu sa članom 31 Zakona o zaštiti podataka o ličnosti,
                                                                      pravo na prenosivost podataka, u skladu sa članom 36 Zakona o zaštiti podataka o ličnosti,
                                                                      pravo na prigovor, u skladu sa članom 37 Zakona o zaštiti podataka o ličnosti.


                                                                      2. Pravo na informisanje u skladu sa članom 26 Zakona o zaštiti podataka o ličnosti
                                                                      U skladu sa članom 26 Zakona o zaštiti podataka o ličnosti imate pravo da od nas besplatno zahtevate informaciju o tome da li obrađujemo vaše podatke o ličnosti, pristup tim podacima, kao i informacije:

                                                                      o svrsi obrade;
                                                                      o vrstama podataka o ličnosti koji se obrađuju;
                                                                      o primaocima ili vrstama primaoca kojima su podaci o ličnosti otkriveni ili će im biti otkriveni, a posebno primaocima u drugim državama ili međunarodnim organizacijama;
                                                                      o predviđenom roku čuvanja podataka o ličnosti, ili ako to nije moguće, o kriterijumima za određivanje tog roka;
                                                                      o postojanju prava da se od rukovaoca ( Apotekarska ustanova “dar" ) zahteva ispravka ili brisanje podataka o ličnosti, prava na ograničenje obrade i prava na prigovor na obradu;o pravu da se podnese pritužba državnom organu (Poverenik za informacije od javnog značaja i zaštitu podataka o ličnosti); o izvoru podataka o ličnosti (dostupne informacije), ako podaci o ličnosti nisu prikupljeni od lica na koje se odnose (od vas); o postojanju postupka automatizovanog donošenja odluke, uključujući profilisanje iz člana 38 stav 1 i 4 Zakona o zaštiti podataka o ličnosti, i, najmanje u tim slučajevima, svrsishodne informacije o logici koja se pri tome koristi, kao i o značaju i očekivanim posledicama te obrade po lice na koje se podaci odnose (po vas).
                                                                      Ako se podaci o ličnosti prenose u drugu državu ili međunarodnu organizaciju, imate pravo da budete informisani o odgovarajućim merama zaštite koje se odnose na prenos, u skladu sa članom 65 Zakona o zaštiti podataka o ličnosti.



                                                                      3. Pravo na ispravku u skladu sa članom 29 Zakona o zaštiti podataka o ličnosti
                                                                      Imate pravo da zahtevate da se vaši netačni podaci o ličnosti, bez nepotrebnog odlaganja, isprave. U zavisnosti od svrhe obrade, imate pravo da svoje nepotpune podatke o ličnosti dopunite, što uključuje i davanje dodatne izjave.



                                                                      4. Pravo na brisanje u skladu sa članom 30 Zakona o zaštiti podataka o ličnosti
                                                                      Imate pravo da zahtevate da se vaši podaci o ličnosti izbrišu sa naše strane u sledećim slučajevima:

                                                                      podaci o ličnosti više nisu neophodni za ostvarivanje svrhe zbog koje su prikupljeni ili na drugi način obrađivani;
                                                                      vi ste opozvali pristanak na osnovu kojeg se obrada vršila, u skladu sa članom 12 stav 1 tačka 1) ili članom 17 stav 2 tačka 1) Zakona o zaštiti podataka o ličnosti, a nema drugog pravnog osnova za obradu;
                                                                      kada podnesete prigovor na obradu u skladu sa članom 37 stav 1 ili 2 Zakona o zaštiti podataka o ličnosti, a nema drugog pravnog osnova za obradu koji preteže nad legitimnim interesom, pravom ili slobodom lica na koje se podaci odnose;
                                                                      podaci o ličnosti su nezakonito obrađivani;
                                                                      podaci o ličnosti moraju biti izbrisani u cilju izvršenja naših zakonskih obaveza;
                                                                      podaci o ličnosti su prikupljeni u vezi sa korišćenjem usluga informacionog društva iz člana16, stav 1 Zakona o zaštiti podataka o ličnosti.
                                                                      Ako smo javno objavili podatke o ličnosti, i ako smo dužni da izbrišemo podatke, mi ćemo preduzeti sve razumne mere, uključujući i tehničke mere, u skladu sa dostupnim tehnologijama i mogućnostima snošenja troškova njihove upotrebe, u cilju obaveštavanja drugih rukovaoca koji te podatke obrađuju, da ste podneli zahtev za brisanje svih kopija podataka i upućivanja, odnosno elektronskih veza prema tim podacima.



                                                                      5. Pravo na ograničavanje obrade u skladu sa članom 31 Zakona o zaštiti podataka o ličnosti
                                                                      Imate pravo da zahtevate da ograničimo obradu vaših podataka o ličnosti ako je ispunjen jedan od sledećih slučajeva:

                                                                      osporavate tačnost podataka o ličnosti, u roku koji nam omogućava proveru tačnosti podataka o ličnosti;
                                                                      obrada je nezakonita, a protivite se brisanju podataka o ličnosti i umesto brisanja zahtevate ograničenje upotrebe podataka;
                                                                      rukovaocu (nama) više nisu potrebni podaci o ličnosti za ostvarivanje svrhe obrade, ali su vama potrebni u cilju podnošenja, ostvarivanja ili odbrane pravnog zahteva; ili
                                                                      ste vi podneli prigovor na obradu u skladu sa članom 37, stav 1 Zakona o zaštiti podataka o ličnosti, a u toku je procenjivanje da li pravni osnov za obradu od strane rukovaoca (nas) preteže nad vašim interesima.


                                                                      6. Pravo na prenosivost podataka u skladu sa članom 36 Zaokna o zaštiti podataka o ličnosti
                                                                      Imate pravo da vaše podatke o ličnosti, koje ste nam prethodno dostavili, primite u strukturisanom, uobičajeno korišćenom i elektronski čitljivom obliku i imate pravo da te podatke prenesete drugom rukovaocu bez ometanja sa naše strane, ako su kumulativno ispunjeni sledeći uslovi:

                                                                      obrada je zasnovana na pristanku u skladu sa članom 12 stav, 1 tačka 1) ili članom 17 stav2, tačka 1) Zakona o zaštiti podataka o ličnosti ili na osnovu ugovora, u skladu sa članom 12 stav, 1 tačka 2) istog Zakona;obrada se vrši automatizovano.
                                                                      Ovo pravo obuhvata i pravo da vaši podaci o ličnosti budu neposredno preneti drugom rukovaocu direktno sa naše strane, pod uslovom da je to tehnički izvodljivo.



                                                                      7. Pravo na prigovor u skladu sa članom 37 Zkaona o zaštiti podataka o ličnosti
                                                                      Pod uslovima iz člana 37, stav 1 Zkaona o zaštiti podataka o ličnosti, obrada podataka može biti predmet prigovora iz razloga koji zavise od vaše konkretne situacije.

                                                                      Navedeno opšte pravo prigovora se odnosi na sve svrhe obrade opisane u ovim pravilima o zaštiti podataka, koja se obrađuju na osnovu člana 12 stav 1, tačka 6) Zakona o zaštiti podataka o ličnosti. Za razliku od prava na prigovor na obradu podataka u komercijalne svrhe (pogledaj tačku 6), mi smo na osnovu Zakona o zaštiti podataka o ličnosti u obavezi da primenjujemo takvo opšte pravo na prigovor samo ako su razlozi za to od velikog značaja, na primer, potencijalna opasnost po život ili zdravlje. Osim toga, imate mogućnost da se obratite državnom organu nadležnom za zaštitu podataka o ličnosti ili licu zaduženom za zaštitu podataka u Apotekarska ustanova “dar" .



                                                                      Ova pravila o zaštiti ličnih podataka se odnose na internet stranicu www.apotekadar.rs i na obradu podataka od strane nas kao rukovaoca podataka:

                                                                      Apotekarska ustanova “dar", ,  kragujevac
                                                            </Box>
                                                  </UIProvider>
                                        </Stack>
                              </Container >
                    </DynamicThemeProvider >
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

export default PrivacyPolicy