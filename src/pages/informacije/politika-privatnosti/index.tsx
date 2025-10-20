import LoadingWheel from '@/components/loading/loading'
import { UIProvider } from '@/context/ui/ui.context'
import theme, { Colors } from '@/styles/theme'
import { Box, Container, Divider, Link, List, ListItem, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import SearchBox from '@/components/search/search'
import AppDrawer from '@/components/navbar/drawer/drawer'
// removed per-page ThemeProvider; using global provider
import { Seo } from '@/components/seo'

const PrivacyPolicy = () => {



     const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"))

     return (
          <>
               <Seo title={'Politika privatnosti'} description={'Politika privatnosti'} url={'https://www.apoteka-dar.rs/'} />
               <Container
                    maxWidth="xl"
                    sx={{
                         background: "#fff",
                    }}
               >
                    <Stack>
                         <UIProvider>
                              <Box sx={{ mt: '70px' }}>
                                   <Typography marginTop='130px' textAlign='center' fontSize='2rem' paddingTop='20px' fontWeight='bold' >
                                        Politika privatnosti
                                   </Typography>

                                   <Divider sx={{ marginBottom: '30px' }} variant="middle" />

                                   <Typography textAlign='justify' padding='0px 20px' sx={{ textAlignLast: 'left' }}>
                                        LiÄni podaci su informacije koje se neposredno ili posredno odnose ili mogu da se odnose na vaÅ¡u liÄnost. Kao zakonski osnov koji ureÄ‘uje zaÅ¡titu podataka i uslove za obradu vaÅ¡ih podataka primenjujem Zakon o zaÅ¡titi podataka o liÄnosti <Typography fontWeight='bold' sx={{ display: 'inline-block' }}>(&apos;Sl. glasnik RS&apos;, br. 87/2018).</Typography>
                                   </Typography>

                                   <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                        Zdravstvena ustanova: <Typography fontWeight='bold' sx={{ display: 'inline-block' }}> Apotekarska ustanova &rdquo;DAR&rdquo;</Typography>,
                                        sa sediÅ¡tem u ulici<Typography fontWeight='bold' sx={{ display: 'inline-block' }}>Kralja Aleksandra I KaraÄ‘orÄ‘eviÄ‡a 102, lokal 9, 34000 Kragujevac</Typography>,
                                        <Typography fontWeight='bold' sx={{ display: 'inline-block' }}>( u daljem tekstu Apotekarska ustanova &rdquo;DAR&rdquo; ),</Typography>
                                        kao rukovalac podataka, pre prikupljanja i obrade podataka o liÄnosti u skladu sa Älanom 23. Zakona o zaÅ¡titi podtaka o liÄnosti, ovim putem <Typography fontWeight='bold' sx={{ display: 'inline-block' }}>obaveÅ¡tava o uslovima prikupljanja i obrade podataka o liÄnosti.</Typography>
                                   </Typography>

                                   <Typography alignContent='flex-start' variant='h5' padding='0px 20px' textAlign='center' fontWeight='bold' >
                                        Informacije koje prikljupamo
                                   </Typography>

                                   <Typography alignContent='flex-start' variant='h6' padding='0px 20px' fontWeight='bold' >
                                        1. Javni podaci
                                   </Typography>

                                   <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                        MoguÄ‡e je da posetite i koristite naÅ¡ sajt bez otkrivanja VaÅ¡eg identiteta ili nekih drugih podataka koji se odnose na njega. Prilikom posete naÅ¡em veb-sajtu, uzimajuÄ‡i u obzir prirodu Interneta, prikupljaju se podaci koji evidentiraju korisnike, ali sami po sebi nisu dovoljni za identifikaciju odreÄ‘ene osobe i predstavljaju statistiÄke pokazatelje koji se koriste za poboljÅ¡anje kvaliteta veb-sajta. Takve informacije mogu ukljuÄivati ime pretraÅ¾ivaÄa na Internetu, broj poseta, proseÄno vreme provedeno na stranici, tip raÄunara i tehniÄke informacije o konekciji koju korisnik koristi prilikom posete veb-sajtu, kao Å¡to su operativni sistem i isporuÄilac Internet usluga, IP (Internet Protocol) adresa koju dodeljuju provajderi koji su razliÄiti za svakog Internet korisnika kao i sliÄne informacije.
                                   </Typography>

                                   <Typography alignContent='flex-start' variant='h6' padding='0px 20px' fontWeight='bold' >
                                        2. LiÄni podaci
                                   </Typography>

                                   <Typography textAlign='justify' fontWeight='bold' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                        Tipovi podataka o liÄnosti koje koristimo:
                                   </Typography>

                                   <List sx={{ listStyleType: 'num', pl: 6 }}>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} disablePadding>
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  LIÄŒNI PODACI: za kontakt kao Å¡to su ime, prezime, adresa, elektronska poÅ¡ta, broj telefona
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} disablePadding>
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  PODACI O POSLOVNIM KONTAKTIMA: kao Å¡to su adresa privrednog subjekta, poslovna elektronska poÅ¡ta
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} disablePadding>
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  OSETLJIVI LIÄŒNI PODACI: pol, datum roÄ‘enja
                                             </Typography>
                                        </ListItem >
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} disablePadding>
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  PODACI O UGOVORU: kao Å¡to je sadrÅ¾aj ugovora o poslovnoj saradnji
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} disablePadding>
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  INFORMACIJE O PLAÄ†ANJU: kao Å¡to su broj tekuÄ‡eg raÄuna, zahtevi za nadoknadu Å¡tete, plaÄ‡anje obaveza iz ugovora
                                             </Typography>
                                        </ListItem>
                                   </List>

                                   <Typography textAlign='justify' fontWeight='bold' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                        Svrha obrade podataka/ pravni osnov:
                                   </Typography>

                                   <List sx={{ listStyleType: 'num', pl: 6 }}>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} disablePadding>
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  Za pruÅ¾anje usluga: za isporuku robe koju ste kupili kod nas putem www.apoteka-dar.rs on-line prodavnice, potrebno je da imamo VaÅ¡e kontakt podatke, kako bismo Vam isporuÄili robu na Å¾eljenu adresu;
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} disablePadding>
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  IzvrÅ¡avanje zahteva - reÅ¡avanje reklamacija, primedbi: nastojimo da ih reÅ¡imo na odgovoarajuÄ‡i naÄin u skladu sa Zakonom. Kako bismo imali dovoljno informacija da sprovedemo ovaj postupak i donesemo pravilnu odluku, kao i da dostavimo povratnu informaciju u vezi reklamacije â€“ potrebno je da prikupljamo odreÄ‘ene podatke o Vama. TakoÄ‘e, ukoliko Å¾elite povraÄ‡aj novca biÄ‡e neophodno da se popuni propisani formular-takozvani NI obrazac, u koji se unosi vaÅ¡ jmbg, jer tako nalaÅ¾u vaÅ¾eÄ‡i propisi.
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} disablePadding>
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  Ugovaranje â€“ da bismo zakljuÄili ugovor potrebno je da proverimo da li je lice sa kojim stupamo u ugovorni odnos za to ovlaÅ¡Ä‡eno. Isti je sluÄaj sa izvrÅ¡enjem pojedinih ugovornih odredbi od strane lica koja su za to odreÄ‘ena. Ponekad je potrebno da proverimo identitet ovih lica, kako bismo bili sigurni da postupamo na ispravan naÄin. Ove aktivnosti preduzimamo za potrebe postupanja po osnovu ugovora koji smo sklopili sa Vama da bismo ispunili zakonske obaveze.
                                             </Typography>
                                        </ListItem >
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} disablePadding>
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  ObaveÅ¡tenje o ponudama â€“ ako ste se prijavili da povremeno dobijate obaveÅ¡tenja o akcijama i drugim pogodnostima, tom prilikom ste nam podelili neke vase podatke koje moÅ¾emo koristiti za slanje ovih obaveÅ¡tenja â€“ dok Vi to Å¾elite.
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} disablePadding>
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  Preduzimamo mere bezbednosti â€“ kao Å¡to su CCTV kamere i imamo pristup bezbednosnim podacima o naÅ¡im kancelarijskim prostorijama da bismo bili sigurni da su naÅ¡i saradnici, kupci posetioci i imovina zaÅ¡tiÄ‡eni.
                                             </Typography>
                                        </ListItem>
                                   </List>

                                   <Typography fontWeight='bold' padding='20px 20px' textAlign='justify' sx={{ display: 'inline-block' }}>
                                        Apoteka DAR vrÅ¡i obradu odreÄ‘enih podataka o liÄnosti za koje se smatra da su osetljive prirode iz razloga izvrÅ¡avanja obaveza koje imamo na naÄin i u meri u kojoj to propisuje zakon:
                                   </Typography>

                                   <List sx={{ listStyleType: 'circle', pl: 6 }}>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  Podaci o vaÅ¡em zdravstvenom stanju, gde spada evidencija o vaÅ¡em odsustvovanju sa rada iz zdravstvenih razloga; medicinska dokumentacija, lekarski nalazi i sl. radi obrade eventualnih zahteva za naknadu Å¡tete koja se desila u naÅ¡em maloprodajnom objektu ili poslovnom prostoru. NeÄ‡emo evidentirati vaÅ¡e podatke, iz zdravstvenog kartona, osim kada je to izriÄito neophodno. MoguÄ‡e je da Ä‡e ovi podaci biti prosleÄ‘eni naÅ¡oj osiguravajuÄ‡oj kuÄ‡i, radi postupanja po vaÅ¡em zahtevu za naknadu Å¡tete. U sluÄaju da protiv nas pokrenete sudski postupak, predmetni podaci mogu biti dostavljeni na uvid nadleÅ¾nom sudu u toku postupka.
                                             </Typography>
                                        </ListItem>
                                   </List>

                                   <Typography fontWeight='bold' padding='20px 20px' textAlign='justify' sx={{ display: 'inline-block' }}>
                                        Ko ima pristup vaÅ¡im liÄnim podacima?
                                   </Typography>

                                   <Typography paddingLeft='20px' textAlign='justify'>
                                        VaÅ¡e liÄne podatke dostavljamo sledeÄ‡im licima:
                                   </Typography>

                                   <List sx={{ listStyleType: 'circle', pl: 6 }}>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  TreÄ‡im licima koji nastupaju u naÅ¡e ime (obraÄ‘ivaÄima). U ovim sluÄajevima, takva treÄ‡a lica mogu da koriste vaÅ¡e liÄne podatke iskljuÄivo za potrebe koje su gore navedene i iskljuÄivo u skladu sa naÅ¡im instrukcijama
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  Saradnici u sektorima koji se bave gore navedenim uslugama mogu imati pristup vaÅ¡im liÄnim podacima, ali samo kada je to strogo neophodno da bi obavili svoje radne zadatke, i kada je saradnik obavezan da Äuva poverljivost informacija;
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  OsiguravajuÄ‡a druÅ¡tva koja pruÅ¾aju usluge preduzeÄ‡u Apotekarska ustanova DAR i saradnicima
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  TreÄ‡a lica koja su odgovorna za Äuvanje vaÅ¡ih liÄnih podataka, nezavisno od Apotekarska ustanova DAR (to su lica angaÅ¾ovana spolja, nezavisni revizori, advokati, poreski savetnici i sl.)
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  Ukoliko to bude zahtevao zakon ili sudski nalog, na primer organi za sprovoÄ‘enje zakona ili drugi drÅ¾avni organi.
                                             </Typography>
                                        </ListItem>
                                   </List>

                                   <Typography fontWeight='bold' padding='20px 20px' textAlign='justify' sx={{ display: 'inline-block' }}>
                                        Koliko dugo Äuvamo vaÅ¡e liÄne podatke?
                                   </Typography>

                                   <Typography padding='20px 20px' textAlign='justify' sx={{ display: 'inline-block' }}>
                                        VaÅ¡e liÄne podatke Äuvamo odreÄ‘eno vreme dok su potrebni za svrhu obrade, nakon Äega ih briÅ¡emo ili onemoguÄ‡avamo pristup, tj. postaju anonimni. Kriterijumi na osnovu kojih je odreÄ‘eno vreme za koje se podaci Äuvaju su:
                                   </Typography>

                                   <List sx={{ listStyleType: 'circle', pl: 6 }}>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  DuÅ¾ina trajanja vaÅ¡eg ugovornog odnosa;
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  Sve dok imamo uspostavljene odnose sa Vama;
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  Prema zakonskim uslovima koji se primenjuju na nas.
                                             </Typography>
                                        </ListItem>
                                   </List>

                                   <Typography alignContent='flex-start' variant='h5' padding='0px 20px' textAlign='center' fontWeight='bold' >
                                        OBRADA PODATAKA KOD POSETA INTERNET STRANICE
                                   </Typography>

                                   <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                        Prilikom koriÅ¡Ä‡enja odreÄ‘enih funkcionalnosti (aplikacija, zahteva) na naÅ¡em sajtu u kontakt formi, zahteva za ponudu za kupoprodaju robe, zahteva za dobijanje novosti, informacija i promocijaâ€¦
                                        <Typography fontWeight='bold' sx={{ display: 'inline-block' }}>Apotekarska ustanova&rdquo;DAR&rdquo;</Typography>,
                                        obraÄ‘uje vaÅ¡e liÄne podatke (liÄne podatke o identitetu i kontakt informacije) samo ako ste ih dobrovoljno dali na naÅ¡oj internet stranici radi koriÅ¡Ä‡enja naÅ¡ih usluga i proizvoda. Ovi liÄni podaci mogu ukljuÄivati ime, prezime, e-mail, broj telefona i/ili druge kontakt informacije i koristiÄ‡e se u skladu sa politikom privatnosti i svrhom u koju ste ih ostavili.
                                   </Typography>

                                   <Typography padding='0px 20px' fontWeight='bold' textAlign='justify' sx={{ display: 'inline-block' }}>Svrha obrade podataka / pravni osnov: </Typography>

                                   <List sx={{ listStyleType: 'circle', pl: 6 }}>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  IP adresu ureÄ‘aja sa kog je poslat upit i koji ima pristup internetu
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  Datum i vreme pristupa
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  Ime i URL preuzete datoteke
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  Internet stranicu /aplikaciju sa koje se pristupa (referrer URL)
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  PretraÅ¾ivaÄ koji koristite i, ako je potrebno, operativni sistem raÄunara koji podrÅ¾ava internet, kao i ime vaÅ¡eg provajdera
                                             </Typography>
                                        </ListItem>
                                   </List>

                                   <Typography padding='20px 20px' textAlign='justify' sx={{ display: 'inline-block' }}>
                                        Navedene podatke server privremeno Äuva u takozvanoj log datoteci u sledeÄ‡e svrhe:
                                   </Typography>

                                   <List sx={{ listStyleType: 'circle', pl: 6 }}>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  ObezbeÄ‘ivanje uspostavljanja nesmetane veze
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  ObezbeÄ‘ivanje komfornog koriÅ¡Ä‡enja naÅ¡e internet stranice/aplikacije
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  Procena bezbednosti i stabilnosti sistema
                                             </Typography>
                                        </ListItem>
                                   </List>

                                   <Typography padding='0px 20px' textAlign='justify' sx={{ display: 'inline-block' }}>
                                        Pravni osnov za obradu IP adrese je Älan 12, stav 1 taÄka 6), Zakona o zaÅ¡titi podataka o liÄnosti (legitiman interes). NaÅ¡ legitimni interes proizilazi iz gore navede svrhe obrade podataka.
                                   </Typography>

                                   <Typography padding='20px 20px 0px 20px' fontWeight='bold' textAlign='justify' sx={{ display: 'block' }}>Svrha obrade podataka / pravni osnov:
                                        <Typography display='inline'>
                                             Generalno ove podatke ne prenosimo treÄ‡im licima.
                                        </Typography>
                                   </Typography>

                                   <Typography padding='20px 20px 0px 20px' fontWeight='bold' textAlign='justify' sx={{ display: 'block' }}>Rok Äuvanja / kriterijumi za odreÄ‘ivanje roka Äuvanja podataka:
                                        <Typography display='inline'>
                                             Podaci se Äuvaju privremeno i to za vreme posete stranici, a zatim se automatski briÅ¡u. Nakon Å¡to napustite naÅ¡u internet stranicu, podaci o geolokaciji se briÅ¡u.
                                        </Typography>
                                   </Typography>

                                   <Typography padding='20px 20px 0px 20px' fontWeight='bold' textAlign='justify'>KolaÄiÄ‡i:

                                        <Typography sx={{ display: 'inline-flex', textAlign: 'justify' }}>
                                             Na naÅ¡oj internet stranici koristimo takozvane kolaÄiÄ‡e u skladu sa Älanom 12, stav 1, taÄka 6), Zakona o zaÅ¡titi podataka o liÄnosti (legitimni interes). Smatramo da je interes za optimizacijom naÅ¡e internet stranice opravdan u smislu gore pomenute odredbe. KolaÄiÄ‡i su male datoteke koje se Äuvaju na vaÅ¡em ureÄ‘aju (laptop, tablet, smartphone itd.) i to prilikom posete naÅ¡e internet stranice. KolaÄiÄ‡i ne nanose Å¡tetu vaÅ¡em ureÄ‘aju, ne sadrÅ¾e viruse, trojance ili druge zlonamerne softvere. U kolaÄiÄ‡ima se Äuvaju informacije koje se dobijaju u vezi sa ureÄ‘ajem koji koristite. MeÄ‘utim, to ne znaÄi da smo upoznati sa vaÅ¡im identitetom. S jedne strane, koriÅ¡Ä‡enje kolaÄiÄ‡a sluÅ¾i da vam poseta internet stranici bude prijatnija. Na primer, mi koristimo takozvane kolaÄicÌe sesije kako bismo prepoznali da ste odreÄ‘ene delove naÅ¡e stranice veÄ‡ posetili ili da ste veÄ‡ prijavljeni na svom korisniÄkom nalogu. Oni se automatski briÅ¡u nakon Å¡to napustite naÅ¡u internet stranicu. Pored toga, koristimo i privremene kolaÄicÌe koji se odreÄ‘eno vreme skladiÅ¡te na vaÅ¡em ureÄ‘aju. Kada ponovo posetite naÅ¡u internet stranicu, automatski se prepoznaje da ste veÄ‡ bili na stranici i koja podeÅ¡avanja ste postavili, tako da ove radnje neÄ‡ete morati da ponovite.
                                        </Typography>

                                        <Typography sx={{ display: 'inline-flex', textIndent: '20px', textAlign: 'justify' }}>
                                             S druge strane, kolaÄiÄ‡e koristimo kako bismo statistiÄki evidentirali koriÅ¡Ä‡enje naÅ¡e internet stranice, i to u ilju optimizacije ponude i prikaza informacija koje su prilagoÄ‘ene vaÅ¡im interesovanjima. Ovi kolaÄiÄ‡i nam omoguÄ‡avaju da vas automatski prepoznamo kada ponovo posetite naÅ¡u internet stranicu. Ovi kolaÄiÄ‡i se automatski briÅ¡u nakon odreÄ‘enog vremena. VeÄ‡ina pretraÅ¾ivaÄa automatski prihvata kolaÄiÄ‡e. MeÄ‘utim, moÅ¾ete da podesite vaÅ¡ pretraÅ¾ivaÄ tako da se na vaÅ¡em raÄunaru ne Äuvaju kolaÄiÄ‡i ili da se uvek pojavljuje poruka pre nego Å¡to se kreira novi kolaÄiÄ‡. Ipak, potpuno onemoguÄ‡avanje kolaÄiÄ‡a moÅ¾e da znaÄi da ne moÅ¾ete da koristite sve funkcije naÅ¡e internet stranice.
                                        </Typography>

                                   </Typography>

                                   <Typography alignContent='flex-start' variant='h5' padding='20px 20px' textAlign='center' fontWeight='bold' >
                                        OBRADA PODATAKA IZ BEZBEDNOSNIH RAZLOGA (VIDEO NADZOR)
                                   </Typography>

                                   <Typography padding='20px 20px 0px 20px' fontWeight='bold' textAlign='justify' sx={{ display: 'block' }}>Svrha obrade podataka / pravni osnov:
                                        <Typography display='inline'>
                                             VaÅ¡e podatke obraÄ‘ujemo i putem video nadzora koji smo uveli u naÅ¡im prodavnicama i poslovnim prostorijama u cilju vaÅ¡e i naÅ¡e zaÅ¡tite, a na osnovu zakonski opravdanog interesa u cilju zaÅ¡tite imovine, zaposlenih, kupaca I posetilaca a naroÄito za zaÅ¡titu od sledeÄ‡ih identifikovanih rizika:
                                        </Typography>
                                   </Typography>

                                   <List sx={{ listStyleType: 'circle', pl: 6 }}>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  Nedozvoljen pristup u prostore i objekte;
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  IznoÅ¡enje, odnosno otuÄ‘enje i neovlaÅ¡Ä‡eno koriÅ¡Ä‡enje Å¡tiÄ‡enih predmeta;
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  UnoÅ¡enje oruÅ¾ja, eksplozivnih, radioaktivnih i drugih opasnih predmeta i materija;
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  Provale, diverzije i nasilan napad na objekat ili oduzimanje predmeta;
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  NeovlaÅ¡Ä‡en pristup podacima i dokumentaciji;
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  ZaÅ¡tita vozila za transport novca i drugih prevoznih sredstava.
                                             </Typography>
                                        </ListItem>
                                   </List>

                                   <Typography paddingLeft='20px' display='inline'>
                                        Pravni osnov za obradu podataka putem video nadzora je Älan 29 i 30 Zakona o privatnom obezbeÄ‘enju.
                                   </Typography>

                                   <Typography padding='20px 20px 0px 20px' fontWeight='bold' textAlign='justify' sx={{ display: 'block' }}>
                                        Primaoci / kategorije primaoca:
                                        <Typography display='inline'>
                                             Video snimci se neÄ‡e javno objavljivati i ustupati treÄ‡im licima, osim u sluÄajevima kada to predstavlja naÅ¡u zakonsku obavezu ili ovlaÅ¡Ä‡enje. Uvid u video snimke ima naÅ¡ partner koji nam pruÅ¾a uslugu privatnog obezbeÄ‘enja odnosno koji je zaduÅ¾en za fiziÄko i tehniÄko obezbeÄ‘enje naÅ¡ih prodavnica. Dodatno, za potrebe odrÅ¾avanja sistema video nadzora angaÅ¾ovali smo servisera koji moÅ¾e imati uvid u video snimke samo u svrhu obezbeÄ‘ivanja funkcionisanja istog.
                                        </Typography>
                                   </Typography>

                                   <Typography padding='20px 20px 0px 20px' fontWeight='bold' textAlign='justify' sx={{ display: 'block' }}>Rok Äuvanja / kriterijumi za odreÄ‘ivanje roka Äuvanja podataka:
                                        <Typography display='inline'>
                                             Video snimci se Äuvaju 30 dana. IzraÄ‘ene kopije video snimaka se u odreÄ‘enim situacijama Äuvaju duÅ¾e od 30 dana (voÄ‘enje pravnog postupka). Video snimci koji viÅ¡e nisu potrebni se briÅ¡u bez odlaganja (okonÄanje pravnog postupka).
                                        </Typography>
                                   </Typography>

                                   <Typography alignContent='flex-start' variant='h5' padding='20px 20px' textAlign='center' fontWeight='bold' >
                                        OBRADA PODATAKA KOJE NAM DOSTAVLJATE E-MAIL-om
                                   </Typography>

                                   <Typography padding='20px 20px 0px 20px' fontWeight='bold' textAlign='justify' sx={{ display: 'block' }}>
                                        Svrha obrade podataka / pravni osnov:
                                        <Typography display='inline'>
                                             Sa liÄnim podacima, koje nam dostavljate putem kontakt obrasca, putem telefona ili putem e- maila, postupamo naravno poverljivo. VaÅ¡e podatke obraÄ‘ujemo iskljuÄivo u skladu sa utvrÄ‘enom svrhom, a kako bismo odgovorili na vaÅ¡ upit. Pravni osnov za obradu podataka je Älan 12, stav 1 taÄka 6) Zakona o zaÅ¡titi podataka o liÄnosti (legitimni interes). NaÅ¡ i istovremeno vaÅ¡ (legitimni) interes za ovakvu obradu podataka proizilazi iz potrebe da odgovorimo na vaÅ¡a pitanja, ukoliko je neophodno da reÅ¡imo postojeÄ‡e probleme i kako bi time obezbedili vaÅ¡e zadovoljstvo kao naÅ¡eg kupca ili kao korisnika naÅ¡e internet stranice.
                                        </Typography>
                                   </Typography>

                                   <Typography display='block' padding='20px 20px 0px 20px' textAlign='justify' sx={{ textAlignLast: 'left' }}>
                                        Ako uÄestvujete u nekoj od naÅ¡ih anketa, takvo uÄestvovanje je dobrovoljno. Kod anonimnih anketa ne Äuvamo podatke koji omoguÄ‡avaju da zakljuÄimo ko je uÄesnik ankete. ÄŒuvamo samo datum i vreme vaÅ¡eg uÄeÅ¡Ä‡a. Svaki liÄni podatak koji ste nam dali putem ankete smatramo dobrovoljno datim i Äuvamo ih u skladu sa odredbama Zakona o zaÅ¡titi podataka o liÄnosti. Molimo vas da u slobodna polja ne unosite imena ili sliÄne podatke, Å¡to bi nam omoguÄ‡ilo da zakljuÄimo o kome se radi bilo da je reÄ o vama ili drugim licima. U sluÄaju da ste dali saglasnost za sprovoÄ‘enje ankete, pravni osnov za obradu podataka se zasniva na vaÅ¡em pristanku u skladu sa Älanom 12, stav 1, taÄka 1) Zakona o zaÅ¡titi podataka o liÄnosti. U tom sluÄaju, imate pravo da opozovete vaÅ¡u saglasnost u svakom trenutku. Opoziv pristanka ne utiÄe na dopuÅ¡tenost obrade koja je vrÅ¡ena na osnovu pristanka pre opoziva. Detalji o obradi podataka u vezi anketa su regulisani pravilima zaÅ¡tite podataka svake pojedinaÄne ankete.
                                   </Typography>

                                   <Typography padding='20px 20px 0px 20px' fontWeight='bold' textAlign='justify' sx={{ display: 'block' }}>Primaoci / kategorije primaoca:
                                        <Typography display='inline'>
                                             Generalno ne prenosimo podatke treÄ‡im licima. Izuzetno, podatke Ä‡e po naÅ¡em nalogu obraÄ‘ivati naÅ¡i partneri (obraÄ‘ivaÄi). Svi naÅ¡i partneri su izabrani na veoma paÅ¾ljiv naÄin i ugovorom su obavezani na Äuvanje liÄnih podataka u tajnosti, a u skladu sa Älanom 45 Zakona o zaÅ¡titi podataka o liÄnosti. Dodatno, u nekim sluÄajevima se javlja potreba da vaÅ¡e upite prosledimo drugim ugovornim partnerima (npr. dobavljaÄima kod upita u vezi odreÄ‘enih proizvoda), a kako bi oni obradili isti. U tim sluÄajevima upit je prethodno anonimizovan, tako da se ne moÅ¾e utvrditi o kome se radi. Ako bi u konkretnom sluÄaju postojala potreba da se vaÅ¡i liÄni podaci prenesu, mi Ä‡emo vas o tome prethodno obavestiti i traÅ¾iÄ‡emo vaÅ¡u saglasnost. Rezultati naÅ¡ih anketa se naÄelno koriste samo za naÅ¡e potrebe. Generalno ne prosleÄ‘ujemo te podatke treÄ‡im licima, osim ako ste nam za to dali izriÄitu saglasnost.
                                        </Typography>
                                   </Typography>

                                   <Typography padding='20px 20px 0px 20px' fontWeight='bold' textAlign='justify' sx={{ display: 'block' }}>Rok Äuvanja / kriterijumi za odreÄ‘ivanje roka Äuvanja podataka:
                                        <Typography display='inline'>
                                             Sve liÄne podatke koje nam dostavite prilikom postavljanja nekog pitanja (sugestije, pohvale ili kritike) preko ove internet stranice ili putem e-maila, briÅ¡u se ili anonimizuju najkasnije u roku od 90 dana nakon davanja konaÄnog odgovora. Iskustvo nam je pokazalo da se obiÄno nakon 90 dana viÅ¡e ne pojavljuju povratna pitanja u vezi naÅ¡eg odgovora.
                                        </Typography>
                                   </Typography>

                                   <Typography alignContent='flex-start' variant='h5' padding='20px 20px' textAlign='center' fontWeight='bold' >
                                        OBRADA PODATAKA U REKLAMNE SVRHE
                                   </Typography>

                                   <Typography padding='20px 20px 0px 20px' fontWeight='bold' textAlign='justify' sx={{ display: 'block' }}>Svrha obrade podataka / pravni osnov:
                                        <Typography display='inline'>
                                             Uz vaÅ¡u saglasnost beleÅ¾imo vaÅ¡e ponaÅ¡anje kao korisnika naÅ¡e internet stranice i newsletter-a. PraÄ‡enje ponaÅ¡anja korisnika pre svega podrazumeva podatke o odeljcima na kojima ste se zadrÅ¾avali i koje linkove ste koristili. Na taj naÄin kreiramo personalizovane korisniÄke profile sa vaÅ¡im liÄnim podacima i/ili sa podatkom o vaÅ¡oj e-mail adresi kako bismo eventualno naÅ¡e obraÄ‡anje u obliku newsletter-a, on-site reklame i Å¡tampanog materijala bolje prilagodili vaÅ¡im liÄnim interesovanjima, a time poboljÅ¡ali naÅ¡u ponudu.
                                        </Typography>
                                        <Typography display='inline'>
                                             Pravni osnov za gore pomenutu obradu podataka je Älan 12, stav 1, taÄka 6, Zakona o zaÅ¡titi podatka o liÄnosti (legitiman interes) ili Älan 12, stav 1, taÄka 1, Zakona o zaÅ¡titi podataka o liÄnosti (pristanak). Obrada podataka kupaca u naÅ¡e reklamne svrhe ili za reklamne potrebe treÄ‡ih lica smatra se opravdanim interesom. Pravo na prigovor: U svakom trenutku i potpuno besplatno moÅ¾ete da uloÅ¾ite prigovor na obradu podataka u gore pomenute svrhe i to putem svakog kanala komunikacije. Nakon Å¡to uloÅ¾ite prigovor neÄ‡emo viÅ¡e obraÄ‘ivati vaÅ¡e podatke pri Äemu prigovor ne utiÄe na obradu koja je vrÅ¡ena na osnovu pristanka pre prigovora. U tu svrhu je dovoljno da poÅ¡aljete e-mail ili pismo putem poÅ¡te na naÅ¡u kontakt adresu.
                                        </Typography>
                                   </Typography>

                                   <Typography padding='20px 20px 0px 20px' fontWeight='bold' textAlign='justify' sx={{ display: 'block' }}>Primaoci / kategorije primaoca:
                                        <Typography display='inline'>
                                             Generalno ove podatke ne prosleÄ‘ujemo treÄ‡im licima.
                                        </Typography>
                                   </Typography>

                                   <Typography padding='20px 20px 0px 20px' fontWeight='bold' textAlign='justify' sx={{ display: 'block' }}>Rok Äuvanja / kriterijumi za odreÄ‘ivanje roka Äuvanja podataka:
                                        <Typography display='inline'>
                                             Ukoliko opozovete svoj pristanak za individualno oglaÅ¡avanje ili se ne slaÅ¾ete sa odreÄ‘enim promotivnim aktivnostima, vaÅ¡e podatke Ä‡emo obrisati iz odgovarajuÄ‡e mailing liste. Ukoliko uloÅ¾ite prigovor, vaÅ¡a kontakt adresa biÄ‡e blokirana za dalju obradu podataka u reklamne svrhe. Napominjemo da se u izuzetnim sluÄajevima, Äak i nakon prijema vaÅ¡eg prigovora, moÅ¾e dogoditi poneka poÅ¡iljka reklamnog materijala. To je tehniÄki uslovljeno vremenom koje je potrebno za pripremu reklamnog materijala i ne znaÄi da ne poÅ¡tujemo vaÅ¡ prigovor. Hvala vam na razumevanju.
                                        </Typography>
                                   </Typography>

                                   <Typography alignContent='flex-start' variant='h5' padding='20px 20px' textAlign='center' fontWeight='bold' >
                                        OBRADA PODATAKA KOD PRIJAVE ZA NEWSLETTER
                                   </Typography>

                                   <Typography padding='20px 20px 0px 20px' fontWeight='bold' textAlign='justify' sx={{ display: 'block' }}>Svrha obrade podataka / pravni osnov:
                                        <Typography display='inline' textAlign='justify'>
                                             Imate moguÄ‡nost da se na naÅ¡oj internet stranici prijavite za naÅ¡ newsletter. Ako ste pristali da primate naÅ¡ newsletter, koristimo vaÅ¡u e-mail adresu i eventualno vaÅ¡e ime za slanje informacija o proizvodima, promocijama, nagradnim igrama / konkursima, novostima i ponudama prodavnica. Ove podatke Äuvamo i obraÄ‘ujemo u svrhu slanja newslettera. SadrÅ¾aj newslettera ukljuÄuje akcije (ponude, promocije, nagradne igre, itd.) kao i proizvode koji se nalaze na www.apoteka-dar.rs .
                                        </Typography>
                                        <Typography display='block' textAlign='justify'>
                                             Uz vaÅ¡u saglasnost, beleÅ¾imo vaÅ¡e ponaÅ¡anje kao korisnika naÅ¡e internet stranice www.apoteka-dar.rs i newslettera. Ocena ponaÅ¡anja korisnika podrazumeva pre svega podatke o odeljcima na kojima se zadrÅ¾avate i na linkove, koje tamo koristite. Na taj naÄin kreiramo personalizovane korisniÄke profile sa vaÅ¡im liÄnim podacima i/ili sa podatkom o vaÅ¡oj e-mail adresi kako bismo omoguÄ‡ili kreiranje reklamne ponude od strane Apotekarska ustanova DAR u obliku newslettera, i Å¡tampanog materijala, prilagoÄ‘ene vaÅ¡em liÄnom interesovanju i time poboljÅ¡amo naÅ¡u ponudu.
                                        </Typography>
                                        <Typography display='block' textAlign='justify'>
                                             Pravni osnov za obradu podataka prilikom slanja newslettera je vaÅ¡a saglasnost u skladu sa Älanom 12, stav 1, taÄka 1), Zakona o zaÅ¡titi podataka o liÄnosti.
                                        </Typography>
                                        <Typography display='block' textAlign='justify'>
                                             Da bismo obezbedili da prilikom unosa e-mail adrese nije doÅ¡lo do greÅ¡ke, koristimo takozvani double-opt-in postupak. Kada unesete e-mail adresu u polje za registraciju, na istu Ä‡emo vam proslediti link za potvrdu. Samo kada kliknete na ovu potvrdu, vaÅ¡a e-mail adresa Ä‡e biti uneta u naÅ¡u mailing listu.
                                        </Typography>
                                        <Typography display='block' textAlign='justify' fontWeight='bold'>
                                             VaÅ¡u saglasnost za prijem newslettera ili kreiranje personalizovanih korisniÄkih profila moÅ¾ete da opozovete u svakom trenutku. Opoziv pristanka ne utiÄe na dopuÅ¡tenost obrade koja je vrÅ¡ena na osnovu pristanka pre opoziva. To moÅ¾ete uÄiniti tako Å¡to ste se npr. na naÅ¡oj internet stranici odjaviti sa liste za prijem newslettera. Link za odjavu imate na kraju svakog newslettera. Ukoliko opozovete pristanak, obrisaÄ‡emo vaÅ¡e podatke.
                                        </Typography>
                                   </Typography>

                                   <Typography padding='20px 20px 0px 20px' fontWeight='bold' textAlign='justify' sx={{ display: 'block' }}>Primaoci / kategorije primaoca:
                                        <Typography display='inline'>
                                             Ako smo za slanje newslettera angaÅ¾ovali eksterne partnere, oni su obavezani ugovorom u skladu sa Älanom 45 Zakona o zaÅ¡titi podataka o liÄnosti. Svako dalje obelodanjivanje podatka treÄ‡im licima je iskljuÄeno.
                                        </Typography>
                                   </Typography>

                                   <Typography padding='20px 20px 0px 20px' fontWeight='bold' textAlign='justify' sx={{ display: 'block' }}>Rok Äuvanja / kriterijumi za odreÄ‘ivanje roka Äuvanja podataka:
                                        <Typography display='inline'>
                                             Ukoliko opozovete vaÅ¡u saglasnost za naÅ¡ newsletter, obrisaÄ‡emo vaÅ¡e podatke sa odgovarajuÄ‡e mailing liste za slanje newslettera.
                                        </Typography>
                                   </Typography>

                                   <Typography alignContent='flex-start' variant='h5' padding='20px 20px' textAlign='center' fontWeight='bold' >
                                        OBRADA PODATAKA POSLOVNIH PARTNERA
                                   </Typography>

                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify'>Naredne napomene u vezi obrade podataka vaÅ¾e za vas ukoliko ste nas kontaktirali, ukoliko sa nama vodite pregovore u cilju zakljuÄenja ugovora i/ili imate veÄ‡ zakljuÄen ugovor sa nama i ukoliko se u vezi s tim obraÄ‘uju podaci o liÄnosti. Koji podaci se u pojedinaÄnom sluÄaju obraÄ‘uju, zavisi pre svega od ugovorenih usluga. Iz tog razloga neÄ‡e svi delovi ovog odeljka biti relevantni za vas.</Typography>

                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontWeight='bold'>Na koji naÄin prikupljamo vaÅ¡e podatke i koje kategorije podataka obraÄ‘ujemo?</Typography>

                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify'>Podatke generalno prikupljamo direktno od vas. MeÄ‘utim, podatke moÅ¾emo prikupiti i od drugih kompanija, drÅ¾avnih organa ili treÄ‡ih lica, npr. kreditni biro, poreska uprava i sl. Osim toga, liÄne podatke moÅ¾emo da prikupimo i putem naÅ¡ih sistema prijave o moguÄ‡im krÅ¡enjima zakona ili internih smernica. Mogu se obraÄ‘ivati sledeÄ‡i podaci o liÄnosti: liÄni podaci (npr. ime i prezime, adresa i ostali kontakt podaci, datum i mesto roÄ‘enja, kao i drÅ¾avljanstvo), podaci legitimacije i autentifikacije (npr. izvod iz privrednog registra, podaci iz liÄne karte, primer potpisa), podaci u vezi naÅ¡eg poslovnog odnosa (npr. podaci o plaÄ‡anju, podaci o nalozima), podaci o bonitetu, podaci o strukturi kompanije i vlasniÄkoj strukturi, fotografije i video snimci (npr. prilikom isporuke robe), kao i drugi podaci sliÄni sa gore navedenim kategorijama podataka.</Typography>

                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontWeight='bold'>Svrha i pravni osnov obrade podataka</Typography>

                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify'>Obrada u svrhu ispunjenja ugovornih obaveza (Älan 12, stav 1, taÄka 2) Zakona o zaÅ¡titi podataka o liÄnosti). Podaci se obraÄ‘uju radi pripreme zakljuÄenja ugovora, koja prethodi ugovorom odnosu kao i u svrhu ispunjavanja obaveza nakon zakljuÄenja ugovora.</Typography>

                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify'>Obrada u svrhu ispunjenja zakonske obaveza (Älan 12, stav 1, taÄka 3) Zakona o zaÅ¡titi podataka o liÄnosti). Svrha obrade podataka proizilazi, u zavisnosti od pojedinaÄnog sluÄaja, iz zakonskih propisa. Tako na primer, podaci se obraÄ‘uju u svrhu ispunjenja obaveza Äuvanja dokumentacije i u vezi identifikacije, npr. na osnovu propisa za spreÄavanje pranja novca, na osnovu poreske kontrole i prijave i obrade podataka u okviru upita drÅ¾avnih organa.</Typography>

                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify'>Obrada u svrhu ispunjenja legitimnih interesa (Älan 12, stav 1, taÄka 6) Zakona o zaÅ¡titi podataka o liÄnosti). MoÅ¾e da doÄ‘e do potrebe da se liÄni podaci, koje ste stavili na raspolaganje, obraÄ‘uju u okvirima koji prevazilaze prvobitno ispunjenje ugovora. NaÅ¡i legitimni interesi za takvu obradu su izbor odgovarajuÄ‡eg poslovnog partnera, ispunjenje pravnih zahteva, otklanjanje zahteva za odgovornost, kontrola pristupa, razjaÅ¡njavanje moguÄ‡ih prekrÅ¡aja, spreÄavanje kriviÄnih dela i obrada Å¡teta, koje su nastale na osnovu ugovornog odnosa.</Typography>

                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify'>U sluÄaju zakljuÄenja ugovora, u svrhu ispunjenja gore navedenih legitimnih interesa, u pojedinaÄnim sluÄajevima, prikupljamo podatke o vaÅ¡em bonitetu preko kreditnog biroa. Podatke o bonitetu, koje smo dobili od kreditnog biroa, obraÄ‘ujemo u svrhu provere vaÅ¡e kreditne sposobnosti. Kreditni biro Äuva podatke, koje npr. dobijaju od banaka ili kompanija. U te podatke spadaju pre svega, prezime, ime, datum roÄ‘enja, adrese i informacije o istoriji plaÄ‡anja. Informacije o saÄuvanim podacima koji se odnose na vas moÅ¾ete dobiti direktno od kreditnog biroa.</Typography>

                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontWeight='bold'>Ko ima pristup vaÅ¡im podacima?</Typography>

                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify'>Unutar naÅ¡eg zdravstvene ustanove, pristup podacima, koje ste nam stavili na raspolaganje, imaju samo oni sektori kojima su isti neophodni za ispunjenje ugovornih ili zakonskih obaveza ili u svrhu ispunjenja legitimnih interesa. U okviru ugovornog odnosa, angaÅ¾ujemo i druge pruÅ¾aoce usluga, koji mogu da dobiju pristup vaÅ¡im liÄnim podacima. PridrÅ¾avanje propisa o zaÅ¡titi podataka o liÄnosti se u ovim sluÄajevima obezbeÄ‘uje ugovorom.</Typography>

                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontWeight='bold'>Koliko dugo Äuvamo vaÅ¡e podatke?</Typography>

                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify'>LiÄne podatke Äuvamo onoliko koliko je to neophodno za ispunjenje gore navedenih svrha. Pri tome, vodimo raÄuna o zakonskim obavezama Äuvanja, na primer zakonski rok od 5 godina u skladu sa Zakonom o raÄunovodstvu.</Typography>

                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontWeight='bold'>Da li ste u obavezi da nam dostavite vaÅ¡e podatke?</Typography>

                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify'>U okviru naÅ¡eg poslovnog odnosa u obavezi ste da nam dostavite one liÄne podatke, koji su neophodni za zapoÄinjanje, sprovoÄ‘enje i okonÄavanje ugovornog odnosa i za ispunjenje obaveza koje su povezane sa tim, kao i za Äije prikupljanje imamo zakonsku obavezu ili imamo pravo na osnovu legitimnih interesa. Bez tih podataka, po pravilu neÄ‡emo biti u moguÄ‡nosti da zapoÄnemo poslovni odnos sa vama.</Typography>

                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontWeight='bold'>Koja prava imate kao lice na koje se podaci odnose?</Typography>

                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify'>Imate pravo, da na zahtev i besplatno dobijete informacije o vaÅ¡im podacima koje obraÄ‘ujemo. Dodatno, u skladu sa zakonskim uslovima, imate pravo na ispravku i brisanje vaÅ¡ih podataka, pravo na prenosivost podataka, kao i pravo na ograniÄenje obrade. Ukoliko obradu vaÅ¡ih liÄnih podataka vrÅ¡imo na osnovu saglasnosti, u svako doba imate pravo da tu saglasnost opozovete. Opoziv pristanka ne utiÄe na dopuÅ¡tenost obrade koja je vrÅ¡ena na osnovu pristanka pre opoziva. Molimo vas da se u navedenim sluÄajevima obratite pisanim putem ili e-mailom na dole navedenu adresu naÅ¡eg lica zaduÅ¾enog za zaÅ¡titu podataka. Dodatno, ukoliko niste saglasni sa obradom vaÅ¡ih liÄnih podataka, imate moguÄ‡nost da podnesete prituÅ¾bu drÅ¾avnom organu (Poverenik za informacije od javnog znaÄaja i zaÅ¡titu podataka o liÄnosti).</Typography>

                                   <Typography padding='20px 20px 20px 20px' display='block' textAlign='justify' fontWeight='bold'>Odgovorno lice (rukovalac)</Typography>

                                   <Typography display='block' textAlign='justify' padding='0px 20px 20px 20px'>

                                        <Typography display='inline' textAlign='justify'>Odgovorno lice za obradu vaÅ¡ih podataka odnosno rukovalac podataka je apotekarska ustanova </Typography>

                                        <Typography display='inline' fontWeight='bold'>DAR,</Typography>

                                        <Typography display='inline' textAlign='justify' fontWeight='bold'> sa sediÅ¡tem u Kragujevcu, poÅ¡tanski broj 34000, u ulici Kralja Aleksandra I KaraÄ‘orÄ‘eviÄ‡a 102, lokal 9, MB: 66597784 , Tel.</Typography>

                                        <Typography display='inline' textAlign='justify'>
                                             <Link rel='canonical' href={`tel:${+381640172227}`} sx={{ color: Colors.primary }}> +381640172227</Link>
                                        </Typography>

                                        <Typography display='inline' textAlign='justify'>, E-mail: </Typography>

                                        <Typography display='inline' textAlign='justify'>
                                             <Link rel='canonical' href={`mailto:${'maja@apoteka-dar.rs'}`} sx={{ color: Colors.primary }}> maja@apoteka-dar.rs.</Link>
                                        </Typography>
                                   </Typography>

                                   <Typography alignContent='flex-start' variant='h5' padding='20px 20px' textAlign='center' fontWeight='bold' >
                                        OBRADA PODATAKA NA DRUÅ TVENIM MREÅ½AMA
                                   </Typography>

                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify'>Za obradu VaÅ¡ih podatka je delom odgovoran i operater odreÄ‘ene platforme druÅ¡tvene mreÅ¾e. Pored toga, u nekim sluÄajevima smo mi takoÄ‘e i operater platforme i u tom smislu postoji zajedniÄka odgovornost u skladu sa Älanom 43 Zakona. Apotekarska ustanova DAR , upravlja sledeÄ‡im stranicama druÅ¡tvenih mreÅ¾a:</Typography>

                                   <List sx={{ listStyleType: 'disc', pl: 6 }}>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  Facebook
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  Instagram
                                             </Typography>
                                        </ListItem>
                                   </List>

                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontWeight='bold'>1. Odgovornost operatera</Typography>

                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify'>Na obradu podataka od strane operatera platforma druÅ¡tvenih mreÅ¾a (npr. administracija Älanova i deljenje informacija) imamo samo ograniÄen uticaj. Tamo gde moÅ¾emo da utiÄemo i podesimo parametre za obradu VaÅ¡ih podataka i to tako da operater platforme druÅ¡tvenih mreÅ¾a postupa u skladu sa zaÅ¡titom podataka, mi preduzimamo sve mere koje su nam na raspolaganju. MeÄ‘utim, na mnogim mestima ne moÅ¾emo da utiÄemo na obradu podataka operatera, niti znamo koje podatke operater taÄno obraÄ‘uje.</Typography>

                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify'>Operater platforme upravlja celom IT infrastrukturom usluge, pridrÅ¾ava se sopstvenih pravila o zaÅ¡titi podataka i ima sa Vama poseban korisniÄki odnos (ukoliko ste registrovani korisnik usluge druÅ¡tvenih mreÅ¾a). Dodatno, operater je iskljuÄivo odgovoran za sva pitanja u odnosu na podatke VaÅ¡eg korisniÄkog profila, kojima mi kao kompanija nemamo pristup.</Typography>

                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify'>Detaljnije informacije o obradi podataka od strane operatera platforma druÅ¡tvenih mreÅ¾a i o moguÄ‡nostima prigovora moÅ¾ete pronaÄ‡i u njihovim pravilima o zaÅ¡titi podataka:</Typography>

                                   <List sx={{ listStyleType: 'disc' }}>
                                        <ListItem sx={{ display: 'list-item', ml: isScreenToMedium ? '5px' : '50px', fontStyle: 'italic' }} >
                                             <Link rel='canonical' href='https://www.facebook.com/privacy/explanation' target="_blank" style={{ wordBreak: 'break-all' }}>
                                                  Facebook: https://www.facebook.com/privacy/explanation
                                             </Link>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', ml: isScreenToMedium ? '5px' : '50px', fontStyle: 'italic', cursor: 'pointer' }} >
                                             <Link rel='canonical' href='https://help.instagram.com/519522125107875' target="_blank" style={{ wordBreak: 'break-all' }}>
                                                  Instagram: https://help.instagram.com/519522125107875
                                             </Link>
                                        </ListItem>
                                   </List>

                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontWeight='bold'>2. NaÅ¡a odgovornost</Typography>

                                   <Typography padding='20px 20px' fontWeight='bold' textAlign='justify' display='block' >
                                        Svrha obrade podataka / pravni osnov:
                                        <Typography padding='20px 20px 0px 0px' display='inline' textAlign='justify'>Na naÅ¡im stranicama druÅ¡tvenih mreÅ¾a, obraÄ‘ujemo VaÅ¡e podatke u svrhu informisanja potroÅ¡aÄa o ponudama, proizvodima, uslugama, akcijama, nagradnim igrama, bitnim informacijama, novostima u kompaniji, u svrhu interakcije sa posetiocima druÅ¡tvenih mreÅ¾a kao i u svrhu davanja odgovora na postavljena pitanja, pohvale i kritike.</Typography>
                                        <Typography padding='20px 0px' display='block' textAlign='justify'>ZadrÅ¾avamo pravo da obriÅ¡emo sadrÅ¾aje ukoliko je to potrebno. Dodatno, VaÅ¡e podatke odnosno sadrÅ¾aje Ä‡emo podeliti na naÅ¡oj stranici ako to predstavlja funkciju platforme druÅ¡tvene mreÅ¾e. VaÅ¡e podatke obraÄ‘ujemo i u svrhu komuniciranja sa vama.</Typography>
                                        <Typography padding='20px 0px 20px 0px' display='inline' textAlign='justify' fontWeight='bold'>Pravni osnov za obradu VaÅ¡ih podataka</Typography>
                                        <Typography padding='20px 20px 20px 0px' display='inline' textAlign='justify'> je Älan 12 stav 1 taÄka 6 Zakona (legitiman interes). Obrada podataka se vrÅ¡i u interesu ostvarivanja naÅ¡ih odnosa sa javnoÅ¡Ä‡u i komunikacije. Kao Å¡to smo veÄ‡ napomenuli, na onim mestima na kojima nam operater platforme druÅ¡tvene mreÅ¾e pruÅ¾i moguÄ‡nost, vodimo raÄuna da naÅ¡e stranice podesimo u skladu sa zaÅ¡titom podataka.</Typography>
                                   </Typography>

                                   <Typography padding='20px 20px' fontWeight='bold' textAlign='justify' display='block' >
                                        Primaoci / kategorije primaoca:
                                   </Typography>

                                   <Typography padding='0px 20px 0px 20px' display='block' textAlign='justify' >Podatke, koje ste uneli na naÅ¡im stranicama druÅ¡tvenih mreÅ¾a, kao Å¡to su npr. komentari, video snimci, slike, lajkovi, javna obaveÅ¡tenja i sl. objavljuje operater platforme, a mi ih ni u jednom trenutku ne obraÄ‘ujemo u neku drugu svrhu od predviÄ‘ene. ZadrÅ¾avamo pravo da obriÅ¡emo nezakonite sadrÅ¾aje, ukoliko je to potrebno. To je sluÄaj na primer u sluÄaju prekrÅ¡ajnih ili nezakonitih objava, komentara mrÅ¾nje, komentara (eksplicitno seksualnih sadrÅ¾aja) ili priloga (npr. slike ili video snimci), koji izmeÄ‘u ostalog krÅ¡e autorska prava, liÄna prava, predstavljaju kriviÄno delo ili krÅ¡e etiÄka naÄela zdravstvene ustanove Apotekarska ustanova DAR</Typography>
                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >VaÅ¡e sadrÅ¾aje Ä‡emo u datom sluÄaju eventualno podeliti na naÅ¡oj stranici ako to predstavlja funkciju platforme druÅ¡tvene mreÅ¾e. VaÅ¡e podatke obraÄ‘ujemo i u svrhu komuniciranja sa vama. Ukoliko nam putem druÅ¡tvene mreÅ¾e poÅ¡aljete upit, moÅ¾emo da Vas uputimo na druge, bezbedne puteve komunikacije odnosno koji garantuju poverljivost. Imajte na umu da uvek imate moguÄ‡nost da nam poverljive upite poÅ¡aljete putem email adrese navedene u opÅ¡tim informacijama ili putem kontakt obrasca.</Typography>
                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >VaÅ¡e podatke koje nam Å¡aljete poverljivim putem (npr. privatna obaveÅ¡tenja, dopis ili e-mail) generalno ne prosleÄ‘ujemo treÄ‡im licima. U izuzetnim sluÄajevima, pristup VaÅ¡im podacima mogu da imaju naÅ¡i eksterni partneri kojima poveravamo odreÄ‘ene poslove kako bismo usluge koje pruÅ¾amo doveli na najviÅ¡i nivo. U tom sluÄaju radi se o obraÄ‘ivaÄima koji koriste podatke po naÅ¡em nalogu. Svi naÅ¡i partneri su izabrani na veoma paÅ¾ljiv naÄin i ugovorom su obavezani na Äuvanje liÄnih podataka u tajnosti u skladu sa Älanom 45 Zakona.</Typography>
                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >TakoÄ‘e, moÅ¾e postojati potreba da deo VaÅ¡ih poverljivih upita prosledimo ugovornim partnerima (npr. dobavljaÄima kod upita u vezi specifiÄnih proizvoda), a u svrhu obrade VaÅ¡eg upita. MeÄ‘utim, u tim sluÄajevima se upit prethodno anonimizira, tako da treÄ‡e lice ne moÅ¾e da ih dovede ni u kakvu vezu sa Vama. Ukoliko u pojedinaÄnom sluÄaju prosleÄ‘ivanje VaÅ¡ih liÄnih podataka bude neophodno, mi Ä‡emo Vas o tome prethodno obavestiti i zatraÅ¾iÄ‡emo VaÅ¡u saglasnost.</Typography>

                                   <Typography padding='20px 20px' fontWeight='bold' textAlign='justify' display='block' >
                                        Rok Äuvanja / kriterijumi za odreÄ‘ivanje roka Äuvanja podataka:
                                   </Typography>

                                   <Typography padding='0px 20px 0px 20px' display='block' textAlign='justify' >Sve podatke o liÄnosti, koje nam dostavite sa VaÅ¡im upitom (pitanja, sugestije, pohvale ili kritike), briÅ¡emo odnosno podatke bezbedno anonimizujemo najkasnije u roku od 90 dana nakon Å¡to Vam damo konaÄan odgovor. VaÅ¡e podatke Äuvamo 90 dana jer se u pojedinaÄnim sluÄajevima moÅ¾e dogoditi da nas Vi, kao potroÅ¡aÄ, kontaktirate ponovo u vezi odgovora o istom pitanju i tom sluÄaju moramo da imamo moguÄ‡nost da se nadoveÅ¾emo na prethodnu prepisku. Iskustvo nam je pokazalo da se po pravilu posle 90 dana viÅ¡e ne pojavljuju povratna pitanja u vezi naÅ¡ih odgovora.</Typography>
                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >Sve javne objave koje ste postavili na stranici biÄ‡e trajno dostupne, osim ako ih ne obriÅ¡emo prilikom aÅ¾uriranja odreÄ‘ene teme ili usled zakonskog prekrÅ¡aja, krÅ¡enja naÅ¡ih smernica ili pak ako objavu Vi sami obriÅ¡ete.</Typography>
                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >Mi nemamo nikakvu moguÄ‡nost da utiÄemo na brisanje VaÅ¡ih podataka od strane sÃ¢mog operatera. U tom sluÄaju primenjuju se pravila zaÅ¡tite podataka konkretnog operatera.</Typography>


                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontWeight='bold'>Nagradne igre</Typography>

                                   <Typography padding='20px 20px' fontWeight='bold' textAlign='justify' display='block' >
                                        Svrha obrade podataka / pravni osnov:
                                   </Typography>

                                   <Typography padding='0px 20px 0px 20px' display='block' textAlign='justify' >Imate moguÄ‡nost da na naÅ¡oj stranici, preko naÅ¡eg newslettera, na naÅ¡im druÅ¡tvenim mreÅ¾ama ili na sajtu www.apoteka-dar.rs , uÄestvujete u razliÄitim nagradnim igrama. Ukoliko u odreÄ‘enoj nagradnoj igri nije drugaÄije odreÄ‘eno, ili ako nam niste dali drugaÄiju izriÄitu saglasnost, mi Ä‡emo podatke o liÄnosti, koje ste nam dostavili u okviru uÄeÅ¡Ä‡a u nagradnoj igri, obraÄ‘ivati iskljuÄivo u svrhu realizacije nagradne igre (npr. izvlaÄenje/ utvrÄ‘ivanje dobitnika, obaveÅ¡tavanje dobitnika, slanje nagrade, po potrebi anonimno objavljivanje dobitnika). Ukoliko na druÅ¡tvenoj mreÅ¾i koristite VaÅ¡e puno ime i prezime ili ste prepoznatljivi preko fotografija na VaÅ¡em profilu, mi ne moÅ¾emo da iskljuÄimo VaÅ¡u identifikaciju od strane drugih korisnika.</Typography>
                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >Pravni osnov obrade VaÅ¡ih podataka u okviru nagradnih igara je u naÄelu Älan 12 stav 1 taÄka2) (izvrÅ¡enje ugovora) Zakona. U sluÄaju davanja pristanka u okviru nagradne igre, pravni osnov za obradu podataka je saglasnost u skladu sa Älanom 12 stav 1 taÄka 1) Zakona. U tom sluÄaju imate pravo da opozovete pristanak i to u svakom trenutku. Opoziv pristanka ne utiÄe na dopuÅ¡tenost obrade koja je vrÅ¡ena na osnovu pristanka pre opoziva.</Typography>

                                   <Typography padding='20px 20px' fontWeight='bold' textAlign='justify' display='block' >
                                        Primaoci / kategorije primaoca:
                                   </Typography>
                                   <Typography padding='0px 20px 0px 20px' display='block' textAlign='justify' >Podatke prosleÄ‘ujemo treÄ‡im licima samo kada je to neophodno za realizaciju nagradne igre tj. za slanje nagrade (npr. slanje nagrade od strane sponzora nagradne igre ili prosleÄ‘ivanje podataka logistiÄkoj kompaniji) ili ako ste nam za to dali izriÄitu saglasnost. Molimo Vas da imate u vidu da je u nekim sluÄajevima moguÄ‡e uÄeÅ¡Ä‡e u nagradnoj igri na stranicama sa javnim pristupom (npr. na oglasnoj tabli ili preko komentara), tako da i drugi korisnici mogu javno da vide Äinjenicu VaÅ¡eg uÄeÅ¡Ä‡a preko VaÅ¡e interakcije sa nama. U takvim sluÄajevima i drugi na druÅ¡tvenoj mreÅ¾i mogu da imaju saznanje o VaÅ¡oj nagradi. Ukoliko na druÅ¡tvenoj mreÅ¾i koristite VaÅ¡e puno ime i prezime ili ste prepoznatljivi preko fotografija na VaÅ¡em profilu, mi ne moÅ¾emo da iskljuÄimo VaÅ¡u identifikaciju od strane drugih korisnika.</Typography>

                                   <Typography padding='20px 20px' fontWeight='bold' textAlign='justify' display='block' >
                                        Rok Äuvanja / kriterijumi za odreÄ‘ivanje roka Äuvanja podataka:
                                   </Typography>
                                   <Typography padding='0px 20px 0px 20px' display='block' textAlign='justify' >
                                        Po zavrÅ¡etku nagradne igre i objavljivanja pobednika, liÄni podaci uÄesnika se briÅ¡u osim onih podataka o dobitnicima koje smo zakonom duÅ¾ni da Äuvamo prilikom organizovanja nagradne igre. U sluÄaju da je nagrada proizvod sa garancijom, podaci dobitnika se Äuvaju za vreme zakonskog prava na garanciju kako bi se u sluÄaju nedostatka po potrebi naloÅ¾ila popravka ili zamena. Prilikom uÄeÅ¡Ä‡a u nagradnoj igri na druÅ¡tvenoj mreÅ¾i (npr. putem objave ili komentara) mi nemamo nikakve moguÄ‡nosti da utiÄemo na brisanje VaÅ¡ih podataka od strane operatera. U tom sluÄaju primenjuju se pravila zaÅ¡tite podataka operatera.
                                   </Typography>


                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontWeight='bold'>Slanje newslettera</Typography>

                                   <Typography padding='20px 20px' fontWeight='bold' textAlign='justify' display='block' >
                                        Svrha obrade podataka / pravni osnov:
                                   </Typography>

                                   <Typography padding='0px 20px 0px 20px' display='block' textAlign='justify' >Na naÅ¡ newsletter moÅ¾ete da se prijavite i preko druÅ¡tvene mreÅ¾e. Ukoliko ste dali saglasnost za prijem naÅ¡eg newslettera, obraÄ‘ivaÄ‡emo samo podatak o VaÅ¡oj email adresi i po potrebi VaÅ¡e ime da bismo Vam poslali (ako je moguÄ‡e individualne) informacije o proizvodima, akcijama, nagradnim igrama i novostima iz ponude prodavnica kao i o anketama o zadovoljstvu kupaca. Te podatke Äuvamo i obraÄ‘ujemo u svrhu slanja newslettera.SadrÅ¾aji newsletter-a obuhvataju ponude proizvoda, akcijske popuste, nagradne igre itd.</Typography>
                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >Uz VaÅ¡u saglasnost evidentiraÄ‡emo VaÅ¡e ponaÅ¡anje kao korisnika naÅ¡e stranice koja su prikupljena na www.apoteka-dar.rs kao i na naÅ¡em newsletteru. Evaluacija korisniÄkog ponaÅ¡anja obuhvata pre svega kategorije u kojima se kreÄ‡ete na dotiÄnoj stranici tj. newsletteru i koje linkove tamo pozivate. Tom prilikom se kreiraju personalizovani korisniÄki profili koji se vezuje za VaÅ¡u liÄnost i/ili email adresu, kako bi marketinÅ¡ko obraÄ‡anje (pre svega u obliku newsletter-a, reklamnih banera i Å¡tampane reklame) bilo Å¡to viÅ¡e usmereno na VaÅ¡a liÄna interesovanja i kako bi se reklamna ponuda poboljÅ¡ala.</Typography>
                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >Pravni osnov za gore navedene obrade VaÅ¡ih podataka je VaÅ¡a saglasnost u skladu sa Älanom 12 stav 1 taÄka 1) Zakona.</Typography>
                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >Kako bismo bili sigurni da nije doÅ¡lo do greÅ¡ke prilikom unosa email adrese, podesili smo takozvani Double-Opt-In postupak: nakon Å¡to unesete VaÅ¡u email adresu u polje za prijavu, mi Vam Å¡aljemo link za potvrdu. Tek kada kliknete na taj link, VaÅ¡a email adresa se unosi u naÅ¡u mailing listu.</Typography>
                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >VaÅ¡u saglasnost za prijem newslettera, uÄeÅ¡Ä‡e u anketama o zadovoljstvu kupaca i kreiranje personalizovanih korisniÄkih profila moÅ¾ete da opozovete u svako vreme. Link za odjavu moÅ¾ete pronaÄ‡i u ovom tekstu ili na kraju svakog newsletter-a. VaÅ¡om odjavom smatramo da ste opozvali VaÅ¡u saglasnost za kreiranje VaÅ¡eg personalizovanog korisniÄkog profila i prijem newsletter-a. VaÅ¡e korisniÄke podatke tada briÅ¡emo. Opoziv ne utiÄe na dopuÅ¡tenost obrade koja je vrÅ¡ena na osnovu pristanka pre opoziva.</Typography>

                                   <Typography padding='20px 20px' fontWeight='bold' textAlign='justify' display='block' >
                                        Primaoci / kategorije primaoca:
                                   </Typography>
                                   <Typography padding='0px 20px 0px 20px' display='block' textAlign='justify' >
                                        Ukoliko se za slanje newslettera angaÅ¾uju eksterni partneri - obraÄ‘ivaÄi podataka, oni se obavezuju ugovorom u skladu sa Älanom 45 Zakona.
                                   </Typography>

                                   <Typography padding='20px 20px' fontWeight='bold' textAlign='justify' display='block' >
                                        Rok Äuvanja / kriterijumi za odreÄ‘ivanje roka Äuvanja podataka:
                                   </Typography>
                                   <Typography padding='0px 20px 0px 20px' display='block' textAlign='justify' >
                                        Ukoliko opozovete VaÅ¡u saglasnost za prijem naÅ¡eg newslettera, VaÅ¡a email adresa Ä‡e biti blokirana za prijem newslettera. VaÅ¡i podaci Ä‡e Å¡est meseci nakon toga biti obrisani iz odgovarajuÄ‡ih mailing listi. Prilikom prijave na nekoj od druÅ¡tvenih mreÅ¾a mi nemamo nikakve moguÄ‡nosti da utiÄemo na brisanje VaÅ¡ih podataka od strane operatera. U tom sluÄaju se primenjuju pravila zaÅ¡tite podataka konkretnog operatera.
                                   </Typography>


                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontWeight='bold'>
                                        ZajdeniÄka odgovornost, Äl. 43 Zaokna o zaÅ¡titi podataka o liÄnosti
                                   </Typography>
                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >Sa operaterom druÅ¡tvene mreÅ¾e delom postoji odnos u skladu sa Äl. 45 Zakona (zajedniÄka odgovornost):</Typography>
                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >Za metode web praÄ‡enja koje operater platforme druÅ¡tvene mreÅ¾e omoguÄ‡ava, operater i mi smo zajedniÄki odgovorni. Web praÄ‡enje (webtracking) moÅ¾e pritom da usledi i nezavisno od toga da li ste na platformu druÅ¡tvene mreÅ¾e prijavljeni ili registrovani. Kao Å¡to smo veÄ‡ napomenuli, naÅ¾alost samo ograniÄeno moÅ¾emo da utiÄemo na metode web praÄ‡enja operatera, na primer ne moÅ¾emo da ih iskljuÄimo.</Typography>
                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >Pravni osnov za metode web praÄ‡enja je Älan 12 stav 1 taÄka 6 Zakona (legitiman interes). Opravdan i legitiman interes se sastoji u tome da se platforma druÅ¡tvene mreÅ¾e i konkretna fan stranica (fan-page) optimizuju.</Typography>
                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >Ostale informacije o primaocima, tj. kategorijama primaoca, kao i roku Äuvanja, tj. kriterijumima za odreÄ‘ivanje roka Äuvanja moÅ¾ete da pronaÄ‘ete u pravilima zaÅ¡tite podataka operatera platformi. Na ta pravila nemamo nikakav uticaj.</Typography>
                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontWeight='bold'>MogucÌnost za ostvarivanje VaÅ¡eg prava u vezi spreÄavanja ovih metoda web pracÌenja moÅ¾ete pronacÌi u pravilima zaÅ¡tite podataka operatera koje su navedene u taÄki 2. Po ovom pitanju moÅ¾ete da kontaktirate operatere platformi putem kontakt podataka operatera koji su navedeni u njihovim pravilima.</Typography>
                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >U pogledu statistika koje nam operater platforme druÅ¡tvene mreÅ¾e stavlja na raspolaganje, mi samo uslovno moÅ¾emo da utiÄemo na njih i da ih spreÄimo. Ali, vodimo raÄuna da nam se ne dostavljaju nikakve dodatne opcione statistike.</Typography>
                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >Iz svega gore navedenog, molimo Vas da budete svesni Äinjenice da nije moguÄ‡e iskljuÄiti moguÄ‡nost da operater platforme druÅ¡tvene mreÅ¾e koristi podatke sa VaÅ¡eg profila kao i podatke o VaÅ¡em ponaÅ¡anju kako bi na primer ocenio VaÅ¡e navike, liÄne odnose, tendencije i sl. Apotekarska ustanova DAR nema nikakav uticaj na obradu ili prosleÄ‘ivanje VaÅ¡ih podataka od strane operatera druÅ¡tvene mreÅ¾e.</Typography>


                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontWeight='bold'>VaÅ¡a prava</Typography>
                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >U skladu sa Älanom 26 Zakona imate pravo da bez naknade zahtevate informacije odnosno detalje o obradi VaÅ¡ih podataka.</Typography>
                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >Dodatno, pod uslovom da su ispunjeni zakonski uslovi, imate pravo na ispravku (Älan 29Zakona), brisanje (Älan 30 Zakona) kao i pravo na ograniÄenje obrade (Älan 31 Zakona).</Typography>
                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >Ukoliko se obrada VaÅ¡ih podataka zasniva na Älanu 12 stav 1 taÄka 5 ili 6 Zakona, imate pravo da podnesete prigovor na obradu podataka u skladu sa Älanom 37 Zakona. Ukoliko podnesete prigovor, biÄ‡emo u obavezi da prekinemo sa obradom VaÅ¡ih podataka, osim ako predoÄimo da postoje zakonski razlozi za obradu podataka koji preteÅ¾u nad interesima, pravima ili slobodama lica na koja se podaci odnose.</Typography>
                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >Ukoliko ste nam sami dostavili VaÅ¡e podatke, u skladu sa Älanom 36 Zakona imate pravo da te podatke prenese drugom rukovaocu. Po pravilu, na druÅ¡tvenim mreÅ¾ama to pravo moÅ¾ete da ostvarite samo direktno prema operateru druÅ¡tvene mreÅ¾e, jer samo operater ima pristup podacima iz VaÅ¡eg profila.</Typography>
                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >Ukoliko se obrada VaÅ¡ih podataka zasniva na VaÅ¡em pristanku u skladu sa Älanom 12. stav 1. taÄka 1Zakona, imate pravo da opozovete pristanak u svakom trenutku. Opoziv pristanka ne utiÄe na dopuÅ¡tenost obrade koja je vrÅ¡ena na osnovu pristanka pre opoziva.</Typography>
                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >Kako bi ostvarili pomenuta prava, kao i u sluÄaju da imate dodatnih pitanja ili prituÅ¾be molimo Vas da se obratite naÅ¡em licu zaduÅ¾enom za zaÅ¡titu liÄnih podataka putem kontakt podataka navedenih u sledeÄ‡oj taÄki ovog teksta.</Typography>
                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >Pored toga, u skladu sa Älanom 82 Zakona, imate pravo da podnesete prituÅ¾bu drÅ¾avnom organu nadleÅ¾nom za zaÅ¡titu podataka o liÄnosti (Poverenik za informacije od javnog znaÄaja i zaÅ¡titu podataka o liÄnosti).</Typography>
                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >Ukoliko Å¾elite da ostvarite VaÅ¡a prava u vezi konkretne obrade VaÅ¡ih podataka, molimo Vas da nam se obratite. Mi Ä‡emo tada proveriti VaÅ¡ upit (npr. zahtev za obaveÅ¡tenjem ili prigovor) ili Ä‡emo ga po potrebi proslediti nadleÅ¾noj platformi druÅ¡tvene mreÅ¾e, ukoliko je predmet VaÅ¡eg zahteva obrada podataka od strane operatera.</Typography>
                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontWeight='bold'>Kontakt lica zaduÅ¾enog za zaÅ¡titu liÄnih podataka u Apotekarska ustanova DAR :</Typography>
                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' >Ako imate bilo kakvih dodatnih pitanja ili nedoumica u vezi sa obradom VaÅ¡ih podataka, slobodno nas kontaktirajte, a mi Ä‡emo se potruditi da vam pomognemo.</Typography>
                                   <Typography padding='20px 20px 20px 20px' display='block' textAlign='justify' >
                                        U te svrhe, na raspolaganju Vam stoji lice za zaÅ¡titu liÄnih podataka u Apotekarska ustanova DAR koga moÅ¾ete da kontaktirate pisanim putem ili putem emaila: Apotekarska ustanova DAR, Kralja Aleksandra I KaraÄ‘orÄ‘eviÄ‡a 102, lokal 9, 34000 Kragujevac, ZaÅ¡tita liÄnih podataka, E-Mail:
                                        <Typography display='inline'>
                                             <Link rel='canonical' href={`mailto:${'maja@apoteka-dar.rs'}`} sx={{ color: Colors.primary }}> maja@apoteka-dar.rs.</Link>
                                        </Typography>
                                   </Typography>


                                   <Typography alignContent='flex-start' variant='h5' padding='20px 20px' textAlign='center' fontWeight='bold' >
                                        VAÅ A PRAVA
                                   </Typography>

                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontStyle='italic'>1. Pregled</Typography>

                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontWeight='bold' >Pored prava na opoziv vaÅ¡e saglasnosti, ukoliko su ispunjeni zakonski uslovi, imate sledeÄ‡a prava:</Typography>

                                   <List sx={{ listStyleType: 'disc', pl: 6 }}>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  pravo na informisanje o vaÅ¡im liÄnim podacima koje obraÄ‘ujemo, u skladu sa Älanom 26 Zakona o zaÅ¡titi podataka o liÄnosti,
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  pravo na ispravku netaÄnih ili nepotpunih podataka, u skladu sa Älanom 29 Zakona o zaÅ¡titi podataka o liÄnosti,
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  pravo na brisanje vaÅ¡ih saÄuvanih podataka, u skladu sa Älanom 30 Zakona o zaÅ¡titi podataka o liÄnosti,
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  pravo na ograniÄenje obrade podataka, u skladu sa Älanom 31 Zakona o zaÅ¡titi podataka o liÄnosti,
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  pravo na prenosivost podataka, u skladu sa Älanom 36 Zakona o zaÅ¡titi podataka o liÄnosti,
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  pravo na prigovor, u skladu sa Älanom 37 Zakona o zaÅ¡titi podataka o liÄnosti.
                                             </Typography>
                                        </ListItem>
                                   </List>



                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontStyle='italic'>2. Pravo na informisanje u skladu sa Älanom 26 Zakona o zaÅ¡titi podataka o liÄnosti</Typography>
                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontWeight='bold' >U skladu sa Älanom 26 Zakona o zaÅ¡titi podataka o liÄnosti imate pravo da od nas besplatno zahtevate informaciju o tome da li obraÄ‘ujemo vaÅ¡e podatke o liÄnosti, pristup tim podacima, kao i informacije:</Typography>
                                   <List sx={{ listStyleType: 'disc', pl: 6 }}>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  o svrsi obrade;
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  o vrstama podataka o liÄnosti koji se obraÄ‘uju;
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  o primaocima ili vrstama primaoca kojima su podaci o liÄnosti otkriveni ili Ä‡e im biti otkriveni, a posebno primaocima u drugim drÅ¾avama ili meÄ‘unarodnim organizacijama;
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  o predviÄ‘enom roku Äuvanja podataka o liÄnosti, ili ako to nije moguÄ‡e, o kriterijumima za odreÄ‘ivanje tog roka;
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  o postojanju prava da se od rukovaoca ( Apotekarska ustanova DAR ) zahteva ispravka ili brisanje podataka o liÄnosti, prava na ograniÄenje obrade i prava na prigovor na obradu;o pravu da se podnese prituÅ¾ba drÅ¾avnom organu (Poverenik za informacije od javnog znaÄaja i zaÅ¡titu podataka o liÄnosti); o izvoru podataka o liÄnosti (dostupne informacije), ako podaci o liÄnosti nisu prikupljeni od lica na koje se odnose (od vas); o postojanju postupka automatizovanog donoÅ¡enja odluke, ukljuÄujuÄ‡i profilisanje iz Älana 38 stav 1 i 4 Zakona o zaÅ¡titi podataka o liÄnosti, i, najmanje u tim sluÄajevima, svrsishodne informacije o logici koja se pri tome koristi, kao i o znaÄaju i oÄekivanim posledicama te obrade po lice na koje se podaci odnose (po vas).
                                             </Typography>
                                        </ListItem>
                                   </List>
                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify'>
                                        Ako se podaci o liÄnosti prenose u drugu drÅ¾avu ili meÄ‘unarodnu organizaciju, imate pravo da budete informisani o odgovarajuÄ‡im merama zaÅ¡tite koje se odnose na prenos, u skladu sa Älanom 65 Zakona o zaÅ¡titi podataka o liÄnosti.
                                   </Typography>

                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontStyle='italic'>3. Pravo na ispravku u skladu sa Älanom 29 Zakona o zaÅ¡titi podataka o liÄnosti</Typography>
                                   <List sx={{ listStyleType: 'disc', pl: 6 }}>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  Imate pravo da zahtevate da se vaÅ¡i netaÄni podaci o liÄnosti, bez nepotrebnog odlaganja, isprave. U zavisnosti od svrhe obrade, imate pravo da svoje nepotpune podatke o liÄnosti dopunite, Å¡to ukljuÄuje i davanje dodatne izjave.
                                             </Typography>
                                        </ListItem>
                                   </List>



                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontStyle='italic'>4. Pravo na brisanje u skladu sa Älanom 30 Zakona o zaÅ¡titi podataka o liÄnosti</Typography>
                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontWeight='bold' >Imate pravo da zahtevate da se vaÅ¡i podaci o liÄnosti izbriÅ¡u sa naÅ¡e strane u sledeÄ‡im sluÄajevima:</Typography>
                                   <List sx={{ listStyleType: 'disc', pl: 6 }}>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  podaci o liÄnosti viÅ¡e nisu neophodni za ostvarivanje svrhe zbog koje su prikupljeni ili na drugi naÄin obraÄ‘ivani;
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  vi ste opozvali pristanak na osnovu kojeg se obrada vrÅ¡ila, u skladu sa Älanom 12 stav 1 taÄka 1) ili Älanom 17 stav 2 taÄka 1) Zakona o zaÅ¡titi podataka o liÄnosti, a nema drugog pravnog osnova za obradu;
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  kada podnesete prigovor na obradu u skladu sa Älanom 37 stav 1 ili 2 Zakona o zaÅ¡titi podataka o liÄnosti, a nema drugog pravnog osnova za obradu koji preteÅ¾e nad legitimnim interesom, pravom ili slobodom lica na koje se podaci odnose;
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  podaci o liÄnosti su nezakonito obraÄ‘ivani;
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  podaci o liÄnosti moraju biti izbrisani u cilju izvrÅ¡enja naÅ¡ih zakonskih obaveza;
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  podaci o liÄnosti su prikupljeni u vezi sa koriÅ¡Ä‡enjem usluga informacionog druÅ¡tva iz Älana16, stav 1 Zakona o zaÅ¡titi podataka o liÄnosti.
                                             </Typography>
                                        </ListItem>
                                   </List>
                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify'>Ako smo javno objavili podatke o liÄnosti, i ako smo duÅ¾ni da izbriÅ¡emo podatke, mi Ä‡emo preduzeti sve razumne mere, ukljuÄujuÄ‡i i tehniÄke mere, u skladu sa dostupnim tehnologijama i moguÄ‡nostima snoÅ¡enja troÅ¡kova njihove upotrebe, u cilju obaveÅ¡tavanja drugih rukovaoca koji te podatke obraÄ‘uju, da ste podneli zahtev za brisanje svih kopija podataka i upuÄ‡ivanja, odnosno elektronskih veza prema tim podacima.</Typography>



                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontStyle='italic'>5. Pravo na ograniÄavanje obrade u skladu sa Älanom 31 Zakona o zaÅ¡titi podataka o liÄnosti</Typography>
                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontWeight='bold' >Imate pravo da zahtevate da ograniÄimo obradu vaÅ¡ih podataka o liÄnosti ako je ispunjen jedan od sledeÄ‡ih sluÄajeva:</Typography>
                                   <List sx={{ listStyleType: 'disc', pl: 6 }}>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  osporavate taÄnost podataka o liÄnosti, u roku koji nam omoguÄ‡ava proveru taÄnosti podataka o liÄnosti;
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  obrada je nezakonita, a protivite se brisanju podataka o liÄnosti i umesto brisanja zahtevate ograniÄenje upotrebe podataka;
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  rukovaocu (nama) viÅ¡e nisu potrebni podaci o liÄnosti za ostvarivanje svrhe obrade, ali su vama potrebni u cilju podnoÅ¡enja, ostvarivanja ili odbrane pravnog zahteva; ili
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  ste vi podneli prigovor na obradu u skladu sa Älanom 37, stav 1 Zakona o zaÅ¡titi podataka o liÄnosti, a u toku je procenjivanje da li pravni osnov za obradu od strane rukovaoca (nas) preteÅ¾e nad vaÅ¡im interesima.
                                             </Typography>
                                        </ListItem>
                                   </List>

                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontStyle='italic'>6. Pravo na prenosivost podataka u skladu sa Älanom 36 Zaokna o zaÅ¡titi podataka o liÄnosti</Typography>
                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontWeight='bold' >Imate pravo da vaÅ¡e podatke o liÄnosti, koje ste nam prethodno dostavili, primite u strukturisanom, uobiÄajeno koriÅ¡Ä‡enom i elektronski Äitljivom obliku i imate pravo da te podatke prenesete drugom rukovaocu bez ometanja sa naÅ¡e strane, ako su kumulativno ispunjeni sledeÄ‡i uslovi:</Typography>
                                   <List sx={{ listStyleType: 'disc', pl: 6 }}>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} >
                                             <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                                  obrada je zasnovana na pristanku u skladu sa Älanom 12 stav, 1 taÄka 1) ili Älanom 17 stav2, taÄka 1) Zakona o zaÅ¡titi podataka o liÄnosti ili na osnovu ugovora, u skladu sa Älanom 12 stav, 1 taÄka 2) istog Zakona;obrada se vrÅ¡i automatizovano.
                                             </Typography>
                                        </ListItem>
                                   </List>
                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify'>Ovo pravo obuhvata i pravo da vaÅ¡i podaci o liÄnosti budu neposredno preneti drugom rukovaocu direktno sa naÅ¡e strane, pod uslovom da je to tehniÄki izvodljivo.</Typography>

                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontStyle='italic'>7. Pravo na prigovor u skladu sa Älanom 37 Zkaona o zaÅ¡titi podataka o liÄnosti</Typography>
                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify' fontWeight='bold'>Pod uslovima iz Älana 37, stav 1 Zkaona o zaÅ¡titi podataka o liÄnosti, obrada podataka moÅ¾e biti predmet prigovora iz razloga koji zavise od vaÅ¡e konkretne situacije.</Typography>
                                   <Typography padding='20px 20px 0px 20px' display='block' textAlign='justify'>Navedeno opÅ¡te pravo prigovora se odnosi na sve svrhe obrade opisane u ovim pravilima o zaÅ¡titi podataka, koja se obraÄ‘uju na osnovu Älana 12 stav 1, taÄka 6) Zakona o zaÅ¡titi podataka o liÄnosti. Za razliku od prava na prigovor na obradu podataka u komercijalne svrhe (pogledaj taÄku 6), mi smo na osnovu Zakona o zaÅ¡titi podataka o liÄnosti u obavezi da primenjujemo takvo opÅ¡te pravo na prigovor samo ako su razlozi za to od velikog znaÄaja, na primer, potencijalna opasnost po Å¾ivot ili zdravlje. Osim toga, imate moguÄ‡nost da se obratite drÅ¾avnom organu nadleÅ¾nom za zaÅ¡titu podataka o liÄnosti ili licu zaduÅ¾enom za zaÅ¡titu podataka u Apotekarska ustanova DAR</Typography>
                                   <Typography padding='20px' display='block' textAlign='justify'>Ova pravila o zaÅ¡titi liÄnih podataka se odnose na internet stranicu www.apoteka-dar.rs i na obradu podataka od strane nas kao rukovaoca podataka: Apotekarska ustanova DAR, u Kragujevcu, poÅ¡tanski broj 34000, u ulici Kralja Aleksandra I KaraÄ‘orÄ‘eviÄ‡a 102, lokal 9.</Typography>



                              </Box>
                              <SearchBox />
                              <AppDrawer isScreenToMedium={false} />
                         </UIProvider>
                    </Stack>
               </Container >
          </>
     )
}

export default PrivacyPolicy
