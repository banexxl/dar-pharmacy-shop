'use client';

import { Box, Container, Divider, List, ListItem, Stack, Typography } from '@mui/material';

export default function PolitikaKolacicaPage() {
  return (
    <Container maxWidth="xl" sx={{ background: '#fff' }}>
      <Stack>
        <Box>
          <Typography marginTop="20px" textAlign="center" fontSize="2rem" paddingTop="20px" fontWeight="bold">
            POLITIKA KOLAČIĆA
          </Typography>
          <Divider sx={{ marginBottom: '30px' }} variant="middle" />

          <Typography textAlign="justify" padding="0px 20px">
            Ovaj sajt koristi sopstvene kolačiće i kolačiće trećih lica za personalizaciju sadržaja i oglasa,
            pružanje funkcija društvenih medija i analizu prometa na web stranici.
            Naši partneri za društvene mreže, oglašavanje i statističku analizu takođe mogu imati informacije o vašem
            korišćenju stranice, koje mogu kombinovati sa ostalim informacijama koje ste im pružili ili koje su
            prikupljene od vas prilikom korišćenja usluga koje oni nude.
          </Typography>
          <Typography textAlign="justify" padding="20px 20px">
            Ove informacije imaju za cilj da vam pokažu kako kolačići rade na ovom sajtu i kako možete da ih podesite.
          </Typography>
          <Typography variant="h5" padding="0px 20px" textAlign="justify">
            Dok koristi ovu stranicu, korisnik može prihvatiti upotrebu kolačića koji nisu neophodni za njeno funkcionisanje.
            Korisnik u bilo kom trenutku ima mogućnost da spreči postavljanje kolačića prilikom pristupa stranicama,
            odabirom željenih opcija u okviru rešenja datog uz saglasnost, kao i da ih onemogući odabirom odgovarajuće
            opcije u pregledaču. Imajte u vidu da ako je pregledač blokirao upotrebu kolačića, neke usluge i funkcije web
            lokacije možda više neće biti dostupne.
          </Typography>

          <Typography variant="h3" padding="20px 20px" fontWeight="bold">
            Šta je kolačić?
          </Typography>
          <Typography variant="h5" padding="0px 20px" textAlign="justify">
            Kolačić je tekstualni fajl koji web stranice postavljaju na vaš uređaj i koji se čuva na vašem uređaju,
            kao što su računar, mobilni telefon, tablet, itd. Ti fajlovi se koriste za čuvanje informacija o posetama korisnika,
            kao što su jezičke postavke, kolačići koji se koriste za otkrivanje neuspelih pokušaja povezivanja sa web stranicom
            i druge opcije, istovremeno vam pomažući da podesite parametre za naredne posete i da učinite stranicu
            korisnijom tako što ćete prilagoditi njen sadržaj. Kolačići igraju veoma važnu ulogu u poboljšanju korisničkog iskustva.
          </Typography>

          <Typography variant="h3" padding="20px 20px" fontWeight="bold">
            Kako koristimo kolačiće?
          </Typography>
          <Typography variant="h5" padding="0px 20px" textAlign="justify">
            Saglasnost izražena biranjem opcije Prihvati sve, omogućava instaliranje svih vrsta kolačića na vaš uređaj.
            U zavisnosti od toga kako odaberete, Apoteka DAR može dobiti sledeće informacije:
          </Typography>
          <List>
            <ListItem><Typography variant="h5" padding="0px 20px" textAlign="justify">Pristup web stranici i pregled njenog sadržaja.</Typography></ListItem>
            <ListItem><Typography variant="h5" padding="0px 20px" textAlign="justify">Statistički podaci o korišćenju web stranice.</Typography></ListItem>
            <ListItem><Typography variant="h5" padding="0px 20px" textAlign="justify">Željeni web format za pristup mobilnim uređajima.</Typography></ListItem>
            <ListItem><Typography variant="h5" padding="0px 20px" textAlign="justify">Najnovija pretraživanja izvršena putem usluga na internetu, kao i personalizovani detalji ovih usluga.</Typography></ListItem>
            <ListItem><Typography variant="h5" padding="0px 20px" textAlign="justify">Pružanje personalizovanog sadržaja s obzirom na aktivnosti na web stranici.</Typography></ListItem>
            <ListItem><Typography variant="h5" padding="0px 20px" textAlign="justify">Potencijalni interes za proizvode.</Typography></ListItem>
            <ListItem><Typography variant="h5" padding="0px 20px" textAlign="justify">Navigaciono ponašanje.</Typography></ListItem>
          </List>

          <Typography variant="h3" padding="20px 20px" fontWeight="bold">
            Vrste korišćenih kolačića
          </Typography>
          <Typography variant="h5" padding="0px 20px" textAlign="justify">
            Ova web stranica koristi kolačiće sesije i trajne kolačiće.
            Kolačići sesije čuvaju podatke samo dok je korisniku otvoren pregledač,
            dok se trajni kolačići čuvaju na korisnikovom uređaju tako da im se može pristupiti i koristiti u više sesija.
          </Typography>

          <Typography variant="h3" padding="20px 20px" fontWeight="bold">
            Neophodni kolačići
          </Typography>
          <Typography variant="h5" padding="0px 20px" textAlign="justify">
            Ovi kolačići su neophodni za rad naše web stranice.
            Oni vam omogućavaju da koristite glavne karakteristike naše web stranice
            (npr. pregled sadržaja stranice, registrovanje preferenci za prikaz rezultata) i obično se javljaju kao
            rezultat izričitog zahteva korisnika (npr. popunjavanje obrasca, izbor jezika upotrebe,
            pristup korisničkom računu ili prepoznavanje čestih neuspelih pokušaja potvrde identiteta).
            Bez ovih kolačića nećete moći normalno da koristite našu web stranicu.
            To su kolačići koje je postavila Apoteka DAR ili treće lice za naš račun, i odnose se samo na rad naše stranice.
          </Typography>

          <Typography variant="h3" padding="20px 20px" fontWeight="bold">
            Kolačići za statističku analizu / performanse
          </Typography>
          <Typography variant="h5" padding="0px 20px" textAlign="justify">
            Ovi kolačići nam omogućavaju da brojimo posete i izvore prometa, tako da možemo meriti i
            poboljšati performanse naše web stranice. Pomaže nam da znamo koje su stranice najmanje
            popularne i da vidimo kako se posetioci kreću na web stranici. Informacije koje ovi kolačići prikupljaju su
            objedinjene i s toga anonimne.
          </Typography>

          <Typography variant="h3" padding="20px 20px" fontWeight="bold">
            Kako se kolačićima upravlja u pregledaču
          </Typography>
          <Typography variant="h5" padding="20px 20px" textAlign="justify">
            Većina web pregledača automatski prihvata kolačiće, ali obično možete promeniti postavke pregledača da
            odbije kolačiće. Ako želite da onemogućite kolačiće, možete to učiniti promenom postavki pregledača.
            Međutim, imajte na umu da ako onemogućite kolačiće, nećete moći koristiti sve funkcije našeg sajta.
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
}
