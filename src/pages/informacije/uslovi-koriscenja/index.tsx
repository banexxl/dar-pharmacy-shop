import LoadingWheel from '@/components/loading/loading'
import { UIProvider } from '@/context/ui/ui.context'
import theme, { Colors } from '@/styles/theme'
import { Box, Container, Divider, List, ListItem, ListItemText, Stack, Typography } from '@mui/material'
import React from 'react'
import SearchBox from '@/components/search/search'
import AppDrawer from '@/components/navbar/drawer/drawer'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Seo } from '@/components/seo'

const TermsConditions = () => {


     const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
          loading: () => <LoadingWheel />,
          ssr: false
     })

     return (
          <DynamicThemeProvider theme={theme}>
               <Seo title={'Uslovi korišćenja'} description={'Uslovi korišćenja'} url={'https://www.apoteka-dar.rs/'} />
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
                                   <Typography marginTop='130px' textAlign='center' fontSize='2rem' fontWeight='bold' >
                                        Uslovi korišćenja
                                   </Typography>

                                   <Divider sx={{ marginBottom: '30px' }} variant="middle" />

                                   <Typography textAlign='justify' padding='0px 20px' sx={{ textAlignLast: 'left', fontSize: '1.5rem', fontWeight: 'bold' }}>
                                        Poštovani korisnici, molimo vas da pre korišćenja naših usluga, pažljivo pročitate sledeće uslove. Svaka poseta našem sajtu, kao i kupovina, znači da ste ove uslove pročitali i da se slažete sa njima u celosti. Ukoliko su oni za vas neprihvatljivi, molimo vas da ne koristite ovu prezentaciju.
                                   </Typography>

                                   <Typography textAlign='justify' padding='0px 20px' sx={{ textAlignLast: 'left', fontSize: '1.5rem', fontWeight: 'bold' }}>
                                        Dobrodošli na internet stranicu Apoteke DAR
                                   </Typography>

                                   <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                        Apotekarska ustanova DAR Kragujevac vam omogućava korišćenje usluga i sadržaja svog portala koje je podložno niže navedenim Uslovima korišćenja. Uslovi korišćenja se primenjuju na sve sadržaje i usluge www.apoteka-dar.rs. Korišćenjem bilo kog dela portala, smatra se da su korisnici upoznati sa ovim uslovima, kao i da prihvataju korišćenje sadržaja ovog portala isključivo za ličnu upotrebu i na sopstvenu odgovornost
                                   </Typography>
                                   <Typography sx={{ textAlign: 'justify', padding: '20px 20px' }}>
                                        Apotekarska ustanova DAR Kragujevac svoje cenjene potrošače koji robu kupuju putem internet sajta www.apoteka-dar.rs obaveštava:
                                   </Typography>

                                   <List sx={{ listStyleType: 'num', pl: 6 }}>

                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.lighter, textAlign: 'center', padding: '0px 20px 0px 20px' }}>
                                             <ListItemText>
                                                  <Typography textAlign='justify' >
                                                       da se prodaja robe putem internet sajta www.apoteka-dar.rs obavlja u okviru registrovane delatnosti zdravstvena ustanova Apotekarska ustanova DAR Kragujevac, Kralja Aleksandra I Karađorđevića 102, lokal 9, 34000 Kragujevac, MB: 66597784, PIB: 113127282, tel: 0640172227;
                                                  </Typography>
                                             </ListItemText>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.lighter, textAlign: 'center', padding: '0px 20px 0px 20px' }}>
                                             <ListItemText>
                                                  <Typography textAlign='justify'>
                                                       da roba koja se prodaje putem internet sajta www.apoteka-dar.rs poseduje svojstva potrebna za redovnu upotrebu te vrste robe u skladu sa njenom namenom koja je definisana u Deklaraciji;
                                                  </Typography>
                                             </ListItemText>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.lighter, textAlign: 'center', padding: '0px 20px 0px 20px' }}>
                                             <ListItemText>
                                                  <Typography textAlign='justify' >
                                                       da se saobraznost robe ugovoru ISKLJUČIVO utvrđuje prema svojstvima i nameni robe kako je to definisano pripadajućom Deklaracijom;
                                                  </Typography>
                                             </ListItemText>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.lighter, textAlign: 'center', padding: '0px 20px 0px 20px' }}>
                                             <ListItemText>
                                                  <Typography textAlign='justify' >
                                                       da je prodajna cena robe naznačena uz svaki artikal;
                                                  </Typography>
                                             </ListItemText>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.lighter, textAlign: 'center', padding: '0px 20px 0px 20px' }}>
                                             <ListItemText>
                                                  <Typography textAlign='justify' >
                                                       da se mogućnost kupovine robe uz posebne cenovne pogodnosti i/ili uz posebne prodajne podsticaje (akcijska prodaja), obavlja u skladu sa uslovima koji su objavljeni na internet sajtu www.apoteka-dar.rs;
                                                  </Typography>
                                             </ListItemText>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.lighter, textAlign: 'center', padding: '0px 20px 0px 20px' }}>
                                             <ListItemText>
                                                  <Typography textAlign='justify' >
                                                       da potrošač robu koju kupuje putem internet sajta www.apoteka-dar.rs može platiti pouzećem gotovinski u trenutku isporuke, platnom karticom, avansnom uplatom putem elektronskog bankarstva ili uplatom u pošti ili banci;
                                                  </Typography>
                                             </ListItemText>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.lighter, textAlign: 'center', padding: '0px 20px 0px 20px' }}>
                                             <ListItemText>
                                                  <Typography textAlign='justify' >
                                                       da potrošač prilikom kreiranja narudžbenice pritiskom na taster POŠALJI NARUDŽBINU preuzima obavezu plaćanja naručene robe;
                                                  </Typography>
                                             </ListItemText>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.lighter, textAlign: 'center', padding: '0px 20px 0px 20px' }}>
                                             <ListItemText>
                                                  <Typography textAlign='justify' >
                                                       da u slučaju nesaobraznosti robe po ugovoru, potrošač ima pravo da izjavi reklamaciju na način kako je to definisano Pravilnikom o postupanju po reklamaciji potrošača za robu kupljenu putem ONLINE prodavnice, koji se može preuzeti <Link href={'/docs/Zahtev_za_reklamaciju.pdf'}>OVDE.&nbsp;</Link>
                                                       Obrazac Zahteva za reklamaciju potrošač može pronaći u odeljku Servis - <Link href={'/informacije/zahtev-za-reklamaciju'}>REKLAMACIJE.</Link>
                                                  </Typography>
                                             </ListItemText>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.lighter, textAlign: 'center', padding: '0px 20px 0px 20px' }}>
                                             <ListItemText>
                                                  <Typography textAlign='justify' >
                                                       da potrošač ima pravo da odustane od ugovora (odustane od kupovine) u roku od 14 dana od dana isporuke, a bez navođenja razloga za odustanak. U slučaju odustanka, potrošač snosi troškove vraćanja robe. Bliža uputstva za odustanak od ugovora potrošač može pronaći u odeljku Servis - <Link href={'/informacije/pravo-na-odustajanje'}>&nbsp;PRAVO NA ODUSTAJANJE.</Link>
                                                  </Typography>
                                             </ListItemText>
                                        </ListItem>
                                   </List>

                                   <Typography textAlign='justify' padding='0px 20px' sx={{ textAlignLast: 'left', fontSize: '1.5rem', fontWeight: 'bold' }}>
                                        Opšte odredbe
                                   </Typography>

                                   <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                        Apotekarska ustanova DAR Kragujevac ima autorska prava na sve sadržaje (tekstualne, vizuelne i audio materijale, baze podataka, programerski kod). Neovlašćeno korišćenje bilo kog dela portala, bez dozvole vlasnika autorskih prava, smatra se kršenjem autorskih prava i podložno je tužbi.
                                   </Typography>

                                   <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                        Apotekarska ustanova DAR Kragujevac administrira ovu lokaciju iz svojih kancelarija čija je lokacija u Srbiji. Ni na koji način ne izjavljuje da su materijali ili usluge na ovoj lokaciji prikladni ili dostupni za korišćenje izvan Srbije, a pristupanje iz područja gde je njihov sadržaj nezakonit je zabranjeno. Nije dopušteno korišćenje ili izvoz, odnosno uvoz, radi izvoza materijala ili usluga na ovoj lokaciji niti bilo koje kopiranje ili prilagođavanje u suprotnosti sa važećim zakonima ili propisima uključujući, bez ograničenja, izvozne zakone i propise Srbije. Ako odlučite da pristupite ovoj lokaciji izvan Srbije, to radite na sopstvenu inicijativu i smatrate se odgovornim za poštovanje važećih lokalnih zakona. Ovi Uslovi se tumače u skladu sa zakonima Republike Srbije i neće se primenjivati načela o rešavanju neusaglašenosti zakona.
                                   </Typography>

                                   <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                        Apotekarska ustanova DAR Kragujevac može revidirati ove Uslove bilo kada, ažuriranjem ovog dokumenta. Povremeno posećujte ovu stranicu da biste pregledali Uslove koji trenutno važe, zato što su oni za vas obavezujući. Određene odredbe ovih Uslova mogu se zameniti izričito navedenim pravnim obaveštenjima i uslovima dostupnim na određenim stranicama ove lokacije.
                                   </Typography>

                                   <Typography textAlign='justify' padding='0px 20px' sx={{ textAlignLast: 'left', fontSize: '1.5rem', fontWeight: 'bold' }}>
                                        Materijal koji prosleđuje korisnik (komentari i drugi sadržaji)
                                   </Typography>

                                   <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                        Lični podaci koje prosledite sajtu www.apoteka-dar.rs u svrhu dobijanja proizvoda ili usluga biće tretirane u skladu sa našim dokumentom o privatnosti na mreži. Zabranjeno je slanje ili prenošenje na ovu lokaciju ili sa nje bilo kojih nezakonitih, pretećih, uvredljivih, klevetničkih, opscenih, pornografskih ili drugih materijala koji su u suprotnosti s bilo kojim zakonom.
                                   </Typography>

                                   <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                        Apotekarska ustanova DAR Kragujevac na ovoj lokaciji ne želi od vas da prima poverljive ili druge informacije kojima ne može slobodno da raspolaže. Svi materijali, informacije ili druga saopštenja koja prenosite ili šaljete na ovu lokaciju neće se smatrati poverljivim i onima kojima se ne može slobodno raspolagati. Apotekarska ustanova DAR Kragujevac nema nikakve obaveze prema ovim saopštenjima. Naši zaposleni mogu da kopiraju, otkrivaju, distribuiraju, primenjuju ili na drugi način koriste saopštenja i sve podatke, slike, zvukove, tekst i sve ostale materijale u njima sadržane za bilo koje odnosno za sve komercijalne i nekomercijalne svrhe.
                                   </Typography>

                                   <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                        Naravno, u ovu grupu podataka ne spadaju vaši lični podaci. Njih, u skladu sa našom Politikom privatnosti, koristimo samo za internu upotrebu, ne obelodanjujemo niti prosleđujemo trećim licima, već koristimo isključivo za potrebe obrade vaših narudžbenica.
                                   </Typography>

                                   <Typography textAlign='justify' padding='0px 20px' sx={{ textAlignLast: 'left', fontSize: '1.5rem', fontWeight: 'bold' }}>
                                        Veze ka drugim Web lokacijama
                                   </Typography>

                                   <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                        Veze na ovoj lokaciji ka lokacijama samostalnih proizvođača su obezbeđene isključivo da bi vam olakšale rad. Ako budete koristili ove veze, napustićete ovu lokaciju. Apotekarska ustanova DAR Kragujevac nije pregledao sve ove lokacije samostalnih proizvođača i ne kontroliše ih i nije odgovoran za bilo koju od ovih lokacija ili njihov sadržaj. Samim tim, ne podržavamo i ne dajemo nikakve izjave o njima, kao ni o bilo kojim informacijama, softveru ili drugim proizvodima ili materijalima koji se tamo nalaze, ili bilo kojim rezultatima koji se mogu dobiti njihovim korišćenjem. Ako odlučite da pristupite nekoj od Web lokacija samostalnih proizvođača koje su povezane sa ovom lokacijom, to radite isključivo na sopstveni rizik.
                                   </Typography>

                                   <Typography textAlign='justify' padding='0px 20px' sx={{ textAlignLast: 'left', fontSize: '1.5rem', fontWeight: 'bold' }}>
                                        Korisnički forum
                                   </Typography>

                                   <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                        Apotekarska ustanova DAR Kragujevac može, ali nema obavezu da nadgleda ili pregleda bilo koji deo lokacije na kome korisnici prenose ili šalju saopštenja ili komuniciraju isključivo međusobno, uključujući, ali ne ograničavajući se na korisnički forum, kao i sadržaj bilo kog od ovakvih saopštenja. Međutim, Apotekarska ustanova DAR Kragujevac se ne smatra odgovornim za sadržaj bilo kog od navedenih saopštenja, bez obzira proizilazi li ili ne iz zakona o autorskim pravima, kleveti, privatnosti, opscenosti ili drugog. Apotekarska ustanova DAR Kragujevac zadržava pravo da ukloni poruke koje sadrže materijal koji smatramo nepristojnim, klevetničkim, opscenim ili na bilo koji drugi način neprihvatljivim.
                                   </Typography>

                                   <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                        Sve informacije vezane uz transakcije kupac - prodavnica Apotekarska ustanova DAR Kragujevac, smatraju se poslovnom tajnom, i prema njima se treba ophoditi skladno zakonskim propisima Republike Srbije.
                                   </Typography>

                                   <Typography textAlign='justify' padding='0px 20px' sx={{ textAlignLast: 'left', fontSize: '1.5rem', fontWeight: 'bold' }}>
                                        Izjava o konverziji
                                   </Typography>

                                   <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                        Sva plaćanja biće izvršena u lokalnoj valuti Republike Srbije – dinar (RSD). Za informativni prikaz cena u drugim valutama koristi se srednji kurs Narodne Banke Srbije. Iznos za koji će biti zadužena Vaša platna kartica biće izražen u Vašoj lokalnoj valuti kroz konverziju u istu po kursu koji koriste kartičarske organizacije, a koji nama u trenutku transakcije ne može biti poznat. Kao rezultat ove konverzije postoji mogućnost neznatne razlike od originalne cene navedene na našem sajtu.
                                   </Typography>

                                   <Typography textAlign='justify' padding='0px 20px' sx={{ textAlignLast: 'left', fontSize: '1.5rem', fontWeight: 'bold' }}>
                                        Zaštita poverljivih podataka o transakciji
                                   </Typography>

                                   <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                        Prilikom unošenja podataka o platnoj kartici, poverljive informacija se prenose putem javne mreže u zaštićenoj (kriptovanoj) formi upotrebom SSL protokola i PKI sistema, kao trenutno najsavremenije kriptografske tehnologije.
                                   </Typography>

                                   <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                        Sigurnost podataka prilikom kupovine, garantuje procesor platnih kartica, Banca Intesa ad Beograd, pa se tako kompletni proces naplate obavlja na stranicama banke. Niti jednog trenutka podaci o platnoj kartici nisu dostupni našem sistemu
                                   </Typography>

                                   <Typography textAlign='justify' padding='0px 20px' sx={{ textAlignLast: 'left', fontSize: '1.5rem', fontWeight: 'bold' }}>
                                        Povraćaj sredstava
                                   </Typography>

                                   <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                        U slučaju vraćanja robe i povraćaja sredstava kupcu koji je prethodno platio nekom od platnih kartica, delimično ili u celosti, a bez obzira na razlog vraćanja, [upisati IME_PRODAJNOG_MESTA] je u obavezi da povraćaj vrši isključivo preko VISA, EC/MC, Maestro, Amex i Dina metoda plaćanja, što znači da će banka na zahtev prodavca obaviti povraćaj sredstava na račun korisnika kartice
                                   </Typography>

                                   <Typography textAlign='justify' padding='0px 20px' sx={{ textAlignLast: 'left', fontSize: '1.5rem', fontWeight: 'bold' }}>
                                        Informacije o dostavi
                                   </Typography>

                                   <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                        Internet prodavnica www.apoteka-dar.rs kojom upravlja zdravstvena ustanova Apotekarska ustanova DAR Kragujevac, ima potpisan ugovor sa više kurirskih službi putem kojih se vrši dostava na teritoriji Republike Srbije.
                                   </Typography>

                                   <Typography textAlign='justify' padding='0px 20px' sx={{ textAlignLast: 'left', fontSize: '1.5rem', fontWeight: 'bold' }}>
                                        Rokovi dostave
                                   </Typography>

                                   <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                        Nakon što vas služba prodaje kontaktira, dobićete potvrdu naručenih proizvoda na Vašu e-mail adresu koju ste naveli prilikom kreiranja narudžbine. Od tog trenutka rok dostave je maksimalno 5 radnih dana u slučaju plaćanja robe pouzećem ili putem platnih kartica. Za narudžbine čije plaćanje se vrši avansnom uplatom putem elektronskog bankarstva ili uplatom u banci ili pošti, rok za uplatu je 5 dana od dana prijema e-maila sa potvrdom narudžbine, a rok za dostavu je maksimalno 5 radnih dana od trenutka evidentiranja uplate. Uobičajeno vreme za dostavu je dva radna dana.
                                   </Typography>

                                   <Typography textAlign='justify' padding='0px 20px' sx={{ textAlignLast: 'left', fontSize: '1.5rem', fontWeight: 'bold' }}>
                                        Preuzimanje pošiljke
                                   </Typography>

                                   <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                        Kuriri pošiljke donose na adresu za isporuku u periodu od 8-17 h. Molimo Vas da u tom periodu obezbedite da na adresi bude osoba koja može preuzeti pošiljku. Prilikom preuzimanja pošiljke potrebno je da vizuelno pregledate paket da slučajno ne postoje neka vidna oštećenja. Ukoliko primetite da je transportna kutija značajno oštećena i posumnjate da je proizvod možda oštećen, odbijte prijem pošiljke i odmah nas obavestite. Ukoliko je pošiljka naizgled bez oštećenja slobodno je preuzmite i potpišite kuriru adresnicu.
                                   </Typography>

                                   <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                        Kurir svaku pošiljku pokušava da uruči u dva navrata. Uobičajena praksa je da Vas, ukoliko prva isporuka bude neuspešna, kurir pozove na telefon koji ste ostavili prilikom kreiranja narudžbenice i ugovori novi termin za dostavu. Ukoliko Vas i tada ne pronađe na adresi, pošiljka će nam biti vraćena. Po prijemu pošiljke, kontkatiraćemo Vas kako bi ustanovili razlog neuručenja i dogovoriti se o ponovnom slanju.
                                   </Typography>

                                   <Typography textAlign='justify' padding='0px 20px' sx={{ textAlignLast: 'left', fontSize: '1.5rem', fontWeight: 'bold' }}>
                                        Pravo na odustajanje
                                   </Typography>

                                   <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left', fontWeight: 'bold' }}>
                                        U skladu sa Zakonom o zaštiti potrošača (Sl.gl.RS br.62/2014), obaveštavamo vas da imate pravo da bez navođenja razloga odustanete od ugovora u roku od 14 dana od dana kada Vam je roba isporučena.
                                   </Typography>

                                   <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                        Izjavu o odustanku od ugovora možete preuzeti - <Link href={'/docs/Izjava_o_odustanku.pdf'}>OVDE.</Link>
                                   </Typography>

                                   <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                        Izjavu je potrebno da odštampate, popunite podatke koji nedostaju, potpišete (potpišete i pečatirate za pravna lica), i pošaljete na adresu: Apotekarska ustanova DAR Kragujevac, Kralja Aleksandra I Karađorđevića 102, lokal 9, 34000 Kragujevac, telefon: <a href='tel:0640172227'>0640172227</a>
                                   </Typography>

                                   <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                        Takođe, možete nas kontaktirati putem e-maila na maja@apoteka-dar.rs ili pozivom na 0640172227. Naši operateri će vam tražiti informaciju o artiklima koje želite da vratite i broju porudžbine, posle čega će vam stići e-mail sa detaljnim uputstvima za dalje postupanje, kao i sa dokumentom, tj. izjavom.
                                   </Typography>

                                   <List sx={{ listStyleType: 'num', pl: 6 }}>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.lighter, textAlign: 'center', padding: '0px 20px 0px 20px' }}>
                                             <ListItemText>
                                                  <Typography textAlign='justify' >
                                                       Potrošač ostvaruje pravo na odustanak od ugovora zaključenog na daljinu, odnosno izvan poslovnih prostorija izjavom o odustanku od ugovora ukoliko je poslata trgovcu u roku od 14 dana od dana kada je roba dospela u državinu potrošača, odnosno trećeg lica koje je odredio potrošač a koje nije prevoznik.
                                                  </Typography>
                                             </ListItemText>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.lighter, textAlign: 'center', padding: '0px 20px 0px 20px' }}>
                                             <ListItemText>
                                                  <Typography textAlign='justify' >
                                                       Izjava o odustanku od ugovora proizvodi pravno dejstvo od dana kada je poslata trgovcu. Po isteku roka od 14 dana od dana kada je kupac poslao odustanak, proizvod se više ne može vratiti.
                                                  </Typography>
                                             </ListItemText>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.lighter, textAlign: 'center', padding: '0px 20px 0px 20px' }}>
                                             <ListItemText>
                                                  <Typography textAlign='justify' >
                                                       Odustajanjem od ugovora oslobađate se svih obaveza, osim obaveze plaćanja troškova vezanih za slanje robe koja se vraća usled odustanka od ugovora. Proizvodi moraju biti nekorišćeni, neoštećeni i u originalnoj ambalaži, mora biti priložen originalni račun i obrazac- izjava o odustanku od ugovora.
                                                  </Typography>
                                             </ListItemText>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.lighter, textAlign: 'center', padding: '0px 20px 0px 20px' }}>
                                             <ListItemText>
                                                  <Typography textAlign='justify'>
                                                       Po prijemu proizvoda, utvrdiće se da li je proizvod ispravan i neoštećen. Kupac odgovara za neispravnost ili oštećenje proizvoda koji su rezultat neadekvatnog rukovanja proizvodom, tj. kupac je isključivo odgovoran za umanjenu vrednost proizvoda koja nastane kao posledica rukovanja robom na način koji nije adekvatan, odnosno prevazilazi ono što je neophodno da bi se ustanovili njegova priroda, karakteristike i funkcionalnost. Ukoliko se utvrdi da je nastupila neispravnost ili oštećenje proizvoda krivicom kupca, odbiće se vraćanje cene i proizvod će mu biti vraćen na njegov trošak.
                                                  </Typography>
                                             </ListItemText>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.lighter, textAlign: 'center', padding: '0px 20px 0px 20px' }}>
                                             <ListItemText>
                                                  <Typography textAlign='justify' sx={{ fontWeight: 'bold' }}>
                                                       Član 32. Zakona o zaštiti potrošača
                                                  </Typography>
                                                  <Typography textAlign='justify' >
                                                       Ako potrošač ostvari pravo na odustanak od ugovora, smatra se da ugovor nije ni zaključen i nastaju obaveze propisane čl.33 i 34 ovog zakona.
                                                  </Typography>
                                             </ListItemText>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.lighter, textAlign: 'center', padding: '0px 20px 0px 20px' }}>
                                             <Typography textAlign='justify' sx={{ fontWeight: 'bold' }}>
                                                  Član 33. Zakona o zaštiti potrošača
                                             </Typography>
                                             <Typography textAlign='justify' >
                                                  Trgovac je dužan da potrošaču bez odlaganja vrati iznos koji je potrošač platio po osnovu ugovora, a najkasnije u roku od 14 dana od dana prijema izjave o odustanku, a nakon prijema proizvoda. Kod ugovora o prodaji robe koji se zaključuje izvan poslovnih prostorija ili na daljinu, trgovac je dužan da vrati potrošaču sredstva koja je platio po osnovu ugovora kada primi ili preuzme robu koju je po osnovu ugovora isporučio potrošaču, odnosno kada primi dokaz da je potrošač robu poslao trgovcu, bez obzira koju od tih radnji je potrošač prvo preduzeo.
                                             </Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.lighter, textAlign: 'center', padding: '0px 20px 0px 20px' }}>
                                             <Typography textAlign='justify' sx={{ fontWeight: 'bold' }}>
                                                  Član 34. Zakona o zaštiti potrošača
                                             </Typography>
                                             <Typography textAlign='justify' >
                                                  Potrošač je dužan da vrati robu trgovcu ili licu ovlašćenom od strane trgovca, bez odlaganja, a najkasnije u roku od 14 dana od dana kada je poslao obrazac za odustanak. Smatraće se da je roba vraćena u roku ako je potrošač poslao robu pre isteka roka od 14 dana
                                             </Typography>
                                        </ListItem>
                                   </List>

                                   <Typography textAlign='justify' padding='0px 20px' sx={{ textAlignLast: 'left', fontSize: '1.5rem', fontWeight: 'bold' }}>
                                        Reklamacije
                                   </Typography>

                                   <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                        Prilikom preuzimanja pošiljke molimo Vas da u prisustvu kurira proverite svoj paket. Ukoliko na njemu ima vidljivih oštećenja (pocepani delovi i ugnječenje) paket ne bi trebalo da preuzmete. U ovom slučaju molimo Vas da nas pozovete telefonom na broj 0640172227 ili nam pošaljete e-mail sa svojim podacima (ime, prezime, telefon) na adresu maja@apoteka-dar.rs i navedete razlog zbog koga ste odbili da preuzmete paket. U najkraćem mogućem roku obavestićemo Vas o daljem postupanju.
                                   </Typography>

                                   <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                        Ukoliko ste primili pošiljku i nakon otvaranja kutije ustanovili da isporučena roba ne odgovara naručenoj ili podaci na računu nisu odgovarajući, molimo Vas da nas, najkasnije u roku od 24h od trenutka prijema pošiljke, pozovete telefonom na broj 0640172227, ili pošaljete e-mail sa svojim podacima (ime, prezime, telefon) na adresu maja@apoteka-dar.rs i opišete kakav problem imate. U najkraćem mogućem roku obavestićemo Vas o daljem postupanju.
                                   </Typography>

                                   <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                        Ukoliko se na kupljenom proizvodu pojave neusaglašenosti u smislu odredbi Zakona o zaštiti potrošača, molimo Vas da postupite na način definisan Pravilnikom o reklamaciji potrošača za robu kupljenu putem internet prodavnice koji možete preuzeti - <a href={'/docs/Pravilnik_o_zastiti_potrosaca_i_postupku_resavanja_reklamacija.pdf'} >OVDE</a>
                                   </Typography>

                                   <Typography textAlign='justify' padding='20px 20px' sx={{ textAlignLast: 'left' }}>
                                        Robu zajedno sa obrascem Zahteva za reklamaciju, koji možete preuzeti - <a href={'/docs/Zahtev_za_reklamaciju.pdf'} >OVDE</a>
                                        , koju treba da pošaljete na adresu Apotekarska ustanova DAR (sa naznakom za web shop), Kragujevac, poštanski broj 34000, ulica Kralja Aleksandra I Karadjordjevica , broj 102, lokal 9
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

export default TermsConditions