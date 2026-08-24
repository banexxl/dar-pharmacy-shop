'use client';

import { Box, Container, Divider, List, ListItem, Stack, Typography, Link as MuiLink, useMediaQuery } from '@mui/material';
import { Colors } from '@/styles/theme';
import theme from '@/styles/theme';
import Link from 'next/link';

export default function PolitikaPrivatnostiPage() {
  const isScreenToMedium = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container maxWidth="xl" sx={{ background: '#fff' }}>
      <Stack>
        <Box>
          <Typography marginTop="20px" textAlign="center" fontSize="2rem" paddingTop="20px" fontWeight="bold">
            Politika privatnosti
          </Typography>
          <Divider sx={{ marginBottom: '30px' }} variant="middle" />

          <Typography textAlign="justify" padding="0px 20px">
            Lični podaci su informacije koje se neposredno ili posredno odnose ili mogu da se odnose na vašu ličnost. Kao zakonski osnov koji uređuje zaštitu podataka i uslove za obradu vaših podataka primenjujem Zakon o zaštiti podataka o ličnosti <Typography fontWeight="bold" sx={{ display: 'inline-block' }}>(&apos;Sl. glasnik RS&apos;, br. 87/2018).</Typography>
          </Typography>

          <Typography textAlign="justify" padding="20px 20px">
            Zdravstvena ustanova: <Typography fontWeight="bold" sx={{ display: 'inline-block' }}>Apotekarska ustanova &rdquo;DAR&rdquo;</Typography>, sa sedištem u ulici <Typography fontWeight="bold" sx={{ display: 'inline-block' }}>Kralja Aleksandra I Karađorđevića 102, lokal 9, 34000 Kragujevac</Typography>, kao rukovalac podataka, pre prikupljanja i obrade podataka o ličnosti u skladu sa članom 23. Zakona o zaštiti podataka o ličnosti, ovim putem <Typography fontWeight="bold" sx={{ display: 'inline-block' }}>obaveštava o uslovima prikupljanja i obrade podataka o ličnosti.</Typography>
          </Typography>

          <Typography variant="h5" padding="0px 20px" textAlign="center" fontWeight="bold">Informacije koje prikupljamo</Typography>

          <Typography variant="h6" padding="0px 20px" fontWeight="bold">1. Javni podaci</Typography>
          <Typography textAlign="justify" padding="20px 20px">
            Moguće je da posetite i koristite naš sajt bez otkrivanja Vašeg identiteta ili nekih drugih podataka koji se odnose na njega. Prilikom posete našem veb-sajtu, prikupljaju se podaci koji evidentiraju korisnike, ali sami po sebi nisu dovoljni za identifikaciju određene osobe i predstavljaju statističke pokazatelje koji se koriste za poboljšanje kvaliteta veb-sajta.
          </Typography>

          <Typography variant="h6" padding="0px 20px" fontWeight="bold">2. Lični podaci</Typography>
          <Typography textAlign="justify" fontWeight="bold" padding="20px 20px">Tipovi podataka o ličnosti koje koristimo:</Typography>
          <List sx={{ listStyleType: 'num', pl: 6 }}>
            <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} disablePadding>
              <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>LIČNI PODACI: za kontakt kao što su ime, prezime, adresa, elektronska pošta, broj telefona</Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} disablePadding>
              <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>PODACI O POSLOVNIM KONTAKTIMA: kao što su adresa privrednog subjekta, poslovna elektronska pošta</Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} disablePadding>
              <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>OSETLJIVI LIČNI PODACI: pol, datum rođenja</Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} disablePadding>
              <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>PODACI O UGOVORU: kao što je sadržaj ugovora o poslovnoj saradnji</Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} disablePadding>
              <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>INFORMACIJE O PLAĆANJU: kao što su broj tekućeg računa, zahtevi za nadoknadu štete, plaćanje obaveza iz ugovora</Typography>
            </ListItem>
          </List>

          <Typography textAlign="justify" fontWeight="bold" padding="20px 20px">Svrha obrade podataka / pravni osnov:</Typography>
          <List sx={{ listStyleType: 'num', pl: 6 }}>
            <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} disablePadding>
              <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>Za pružanje usluga: za isporuku robe koju ste kupili kod nas putem apoteka-dar.rs on-line prodavnice, potrebno je da imamo Vaše kontakt podatke;</Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} disablePadding>
              <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>Izvršavanje zahteva - rešavanje reklamacija, primedbi: nastojimo da ih rešimo na odgovarajući način u skladu sa Zakonom;</Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} disablePadding>
              <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>Ugovaranje – da bismo zaključili ugovor potrebno je da proverimo da li je lice sa kojim stupamo u ugovorni odnos za to ovlašćeno;</Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} disablePadding>
              <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>Obaveštenje o ponudama – ako ste se prijavili da povremeno dobijate obaveštenja o akcijama i drugim pogodnostima;</Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }} disablePadding>
              <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>Preduzimamo mere bezbednosti – kao što su CCTV kamere kako bismo bili sigurni da su naši saradnici, kupci i imovina zaštićeni.</Typography>
            </ListItem>
          </List>

          <Typography fontWeight="bold" padding="20px 20px" textAlign="justify">Ko ima pristup vašim ličnim podacima?</Typography>
          <Typography paddingLeft="20px" textAlign="justify">Vaše lične podatke dostavljamo: trećim licima koji nastupaju u naše ime (obrađivačima), saradnicima u sektorima kojima je to neophodno, osiguravajućim društvima, nezavisnim revizorima, advokatima, poreskim savetnicima, i nadležnim državnim organima kada to zahteva zakon.</Typography>

          <Typography fontWeight="bold" padding="20px 20px" textAlign="justify">Koliko dugo čuvamo vaše lične podatke?</Typography>
          <Typography padding="20px 20px" textAlign="justify">Vaše lične podatke čuvamo određeno vreme dok su potrebni za svrhu obrade, nakon čega ih brišemo ili onemogućavamo pristup. Kriterijumi: dužina trajanja ugovornog odnosa, dok imamo uspostavljene odnose sa Vama, prema zakonskim uslovima koji se primenjuju na nas.</Typography>

          <Typography variant="h5" padding="20px 20px" textAlign="center" fontWeight="bold">OBRADA PODATAKA KOD POSETA INTERNET STRANICE</Typography>
          <Typography textAlign="justify" padding="20px 20px">
            Prilikom korišćenja određenih funkcionalnosti na našem sajtu, <Typography fontWeight="bold" sx={{ display: 'inline-block' }}>Apotekarska ustanova &rdquo;DAR&rdquo;</Typography> obrađuje vaše lične podatke samo ako ste ih dobrovoljno dali na našoj internet stranici radi korišćenja naših usluga i proizvoda.
          </Typography>

          <Typography variant="h5" padding="20px 20px" textAlign="center" fontWeight="bold">OBRADA PODATAKA IZ BEZBEDNOSNIH RAZLOGA (VIDEO NADZOR)</Typography>
          <Typography padding="20px 20px" textAlign="justify">
            Vaše podatke obrađujemo i putem video nadzora koji smo uveli u našim prodavnicama i poslovnim prostorijama u cilju vaše i naše zaštite. Video snimci se čuvaju 30 dana. Pravni osnov je član 29 i 30 Zakona o privatnom obezbeđenju.
          </Typography>

          <Typography variant="h5" padding="20px 20px" textAlign="center" fontWeight="bold">OBRADA PODATAKA NA DRUŠTVENIM MREŽAMA</Typography>
          <Typography padding="20px 20px" textAlign="justify">
            Apotekarska ustanova DAR upravlja stranicama na Facebook-u i Instagram-u. Detaljnije informacije o obradi podataka od strane operatera platformi:
          </Typography>
          <List sx={{ listStyleType: 'disc' }}>
            <ListItem sx={{ display: 'list-item', ml: isScreenToMedium ? '5px' : '50px', fontStyle: 'italic' }}>
              <MuiLink href="https://www.facebook.com/privacy/explanation" target="_blank" sx={{ wordBreak: 'break-all' }}>Facebook: https://www.facebook.com/privacy/explanation</MuiLink>
            </ListItem>
            <ListItem sx={{ display: 'list-item', ml: isScreenToMedium ? '5px' : '50px', fontStyle: 'italic' }}>
              <MuiLink href="https://help.instagram.com/519522125107875" target="_blank" sx={{ wordBreak: 'break-all' }}>Instagram: https://help.instagram.com/519522125107875</MuiLink>
            </ListItem>
          </List>

          <Typography variant="h5" padding="20px 20px" textAlign="center" fontWeight="bold">VAŠA PRAVA</Typography>
          <Typography padding="20px 20px" textAlign="justify" fontWeight="bold">Pored prava na opoziv vaše saglasnosti, ukoliko su ispunjeni zakonski uslovi, imate sledeća prava:</Typography>
          <List sx={{ listStyleType: 'disc', pl: 6 }}>
            <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }}>
              <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>pravo na informisanje o vašim ličnim podacima (član 26 Zakona)</Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }}>
              <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>pravo na ispravku netačnih ili nepotpunih podataka (član 29 Zakona)</Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }}>
              <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>pravo na brisanje vaših sačuvanih podataka (član 30 Zakona)</Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }}>
              <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>pravo na ograničenje obrade podataka (član 31 Zakona)</Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }}>
              <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>pravo na prenosivost podataka (član 36 Zakona)</Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.main }}>
              <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }}>pravo na prigovor (član 37 Zakona)</Typography>
            </ListItem>
          </List>

          <Typography padding="20px 20px" textAlign="justify" fontWeight="bold">Odgovorno lice (rukovalac)</Typography>
          <Typography padding="20px 20px" textAlign="justify">
            Odgovorno lice za obradu vaših podataka je apotekarska ustanova <Typography display="inline" fontWeight="bold">DAR,</Typography> sa sedištem u Kragujevcu, poštanski broj 34000, u ulici Kralja Aleksandra I Karađorđevića 102, lokal 9, MB: 66597784, Tel.{' '}
            <MuiLink href="tel:+381640172227" sx={{ color: Colors.primary.main }}>+381640172227</MuiLink>, E-mail:{' '}
            <MuiLink href="mailto:maja@apoteka-dar.rs" sx={{ color: Colors.primary.main }}>maja@apoteka-dar.rs</MuiLink>
          </Typography>

          <Typography padding="20px" textAlign="justify">
            Ova pravila o zaštiti ličnih podataka se odnose na internet stranicu apoteka-dar.rs i na obradu podataka od strane nas kao rukovaoca podataka: Apotekarska ustanova DAR, u Kragujevcu, poštanski broj 34000, u ulici Kralja Aleksandra I Karađorđevića 102, lokal 9.
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
}
