'use client';

import { Box, Container, Divider, List, ListItem, ListItemIcon, Stack, Typography } from '@mui/material';
import Link from 'next/link';

export default function ReklamacijePage() {
  return (
    <Container maxWidth="xl" sx={{ background: '#fff' }}>
      <Stack>
        <Box>
          <Typography marginTop="20px" textAlign="center" fontSize="2rem" paddingTop="20px" fontWeight="bold">
            REKLAMACIJE
          </Typography>
          <Divider sx={{ marginBottom: '30px' }} variant="middle" />

          <Typography textAlign="justify" padding="0px 20px">
            Potrošač ima pravo na podnošenje prigovora u skladu sa odredbama
            Zakona o zaštiti potrošača i Pravilnika o postupku i načinu rešavanja reklamacija potrošača na robu.
          </Typography>
          <Typography textAlign="justify" padding="20px 20px">
            Potrošač svojim potpisom na dostavnom listu prilikom preuzimanja paketa potvrđuje da je robu primio u ispravnom stanju.
            City Express, u slučaju da je sadržaj pošiljke oštećen, odnosno nepotpun daje rok za reklamaciju od 24h od trenutka kada je potrošač preuzeo pošiljku.
          </Typography>
          <Typography component="div" textAlign="justify" padding="20px 20px" sx={{ textAlign: 'left' }}>
            Zakon ne predviđa povrat sledeće robe:{' '}
            <Typography component="span" fontWeight="bold" sx={{ display: 'inline' }}>
              robe koja je podložna pogoršanju kvaliteta ili ima kratak rok trajanja zapečaćene robe koja se ne može vratiti
              zbog zaštite zdravlja ili higijenskih razloga i koja je otpečaćena nakon isporuke.
            </Typography>
          </Typography>
          <Typography sx={{ display: 'inline-block', textAlign: 'justify', padding: '20px 20px' }}>
            Svoj zahtev za reklamaciju na proizvode kupljene na internet sajtu potrošač može prijaviti AU Apoteka DAR
            upućivanjem email poruke na adresu maja@apoteka-dar.rs. Obavezan deo sadržine Zahteva za reklamacije jeste broj transakcije
            (broj pošiljke koji ste dobili u email poruci prilikom potvrde kupovine) i broj računa po kome je transakcija realizovana.
            AU Apoteka DAR će elektronskim ili pisanim putem potvrditi prijem reklamacije, odnosno saopštiti broj pod kojim je zavedena
            reklamacija u evidenciji primljenih reklamacija i na upućen zahtev odgovoriti saglasno zakonski definisanim rokovima
            (u roku od 8 dana od datuma podnošenja reklamacije), prosleđivanjem reklamacionog lista na email koji je potrošač označio kao
            kontakt u kome će biti sadržana i odluka AU Apoteka DAR o daljem postupanju po pitanju prosleđene reklamacije.
          </Typography>
          <Typography sx={{ display: 'inline-block', textAlign: 'justify', padding: '20px 20px' }}>
            Rok za rešavanje reklamacije ne može da bude duži od 15 dana, odnosno 30 dana za tehničku robu, od dana podnošenja reklamacije.
            Rok za rešavanje reklamacije prekida se kada potrošač primi odgovor prodavca i počinje da teče iznova kada prodavac
            primi izjašnjenje potrošača na odgovor prodavca. Potrošač je dužan da se izjasni na odgovor prodavca najkasnije u roku od tri
            dana od dana prijema odgovora prodavca. Smatraće se da potrošač nije saglasan sa predlogom prodavca ukoliko se ne izjasni u
            roku od tri dana. Ukoliko AU Apoteka DAR iz objektivnih razloga nije u mogućnosti da udovolji zahtevu potrošača u roku koji je
            dogovoren, dužan je da o produžavanju roka za rešavanje reklamacije obavesti potrošača i navede rok u kome će je rešiti, kao i da
            dobije njegovu saglasnost. Produžavanje roka za rešavanje reklamacija moguće je samo jednom.
          </Typography>

          <Typography component="div" sx={{ display: 'inline-block', textAlign: 'justify', padding: '20px 20px' }}>
            Prodavac je, u slučaju da odbije reklamaciju:
            <List>
              <ListItem>
                <ListItemIcon><Typography variant="body1">•</Typography></ListItemIcon>
                dužan da pruži odgovarajuće obaveštenje potrošaču u slučaju odbijanja reklamacije
                (obrazloženje prodavca u slučaju neprihvatanja reklamacije)
              </ListItem>
              <ListItem>
                <ListItemIcon><Typography variant="body1">•</Typography></ListItemIcon>
                dužan da potrošača sveobuhvatno obavesti o mogućnosti rešavanja spora vansudskim putem,
                kao i o nadležnim telima za vansudsko rešavanje potrošačkih sporova
              </ListItem>
            </List>
          </Typography>

          <Typography sx={{ display: 'inline-block', textAlign: 'justify', padding: '20px 20px' }}>
            Ukoliko je potrošač za kupljeni proizvod dobio garanciju i ako se reklamacija izjavljuje nakon proteka
            2 godine od dana kupovine, potrošač je dužan da reklamaciju izjavi davaocu garancije.
          </Typography>
          <Typography sx={{ display: 'inline-block', textAlign: 'justify', padding: '20px 20px' }}>
            AU Apoteka DAR je dužna da isporuči robu koja je saobrazna ugovoru. AU Apoteka DAR je odgovorna za nesaobraznost robe
            ugovoru koja se pojavi u roku od dve godine od dana prelaska rizika na potrošača. Ako nesaobraznost nastane u
            roku od šest meseci od dana prelaska rizika na potrošača, pretpostavlja se da je nesaobraznost postojala u trenutku
            prelaska rizika, osim ako je to u suprotnosti sa prirodom robe i prirodom određene nesaobraznosti.
          </Typography>

          <Typography component="div" sx={{ display: 'inline-block', textAlign: 'justify', padding: '20px 20px' }}>
            U slučaju utvrđene nesaobraznosti i usvajanja reklamacije Potrošač ima pravo da bira između sledećih rešenja:
            <List>
              <ListItem>
                <ListItemIcon><Typography variant="body1">•</Typography></ListItemIcon>
                otklanjanje nesaobraznosti, bez naknade, opravkom ili zamenom kupljene robe za novu
                robu odgovarajuće marke (modela, tipa) ili
              </ListItem>
              <ListItem>
                <ListItemIcon><Typography variant="body1">•</Typography></ListItemIcon>
                umanjenje cene ili raskid ugovora i vraćanje plaćenog iznosa kupoprodajne cene i to u visini
                maloprodajne cene robe na dan kupovine — pod uslovom da otklanjanje nesaobraznosti na
                navedeni način nije moguće ili nije izvršeno ili se ne može izvršiti u primerenom roku ili se ne
                može izvršiti bez značajnijih neugodnosti za Potrošača zbog prirode robe i njene namene ili ukoliko
                bi otklanjanje opravkom ili zamenom predstavljalo nesrazmerno opterećenje za Prodavca.
              </ListItem>
            </List>
          </Typography>

          <Typography sx={{ display: 'inline-block', textAlign: 'justify', padding: '20px 20px' }}>
            Potrošač ima pravo da zahteva zamenu, odgovarajuće umanjenje cene ili da raskine ugovor zbog istog
            ili drugog nedostatka saobraznosti koji se posle prve opravke pojavi, a ponovna opravka je moguća samo
            uz izričitu saglasnost Potrošača. Uzimajući u obzir prirodu robe i svrhu zbog koje je potrošač nabavio, opravka
            ili zamena mora se izvršiti u primerenom roku bez značajnih neugodnosti za Potrošača i uz njegovu saglasnost.
          </Typography>
          <Typography sx={{ display: 'inline-block', textAlign: 'justify', padding: '20px 20px' }}>
            U slučaju reklamacije zbog nesaobraznosti, potrošač može da pošalje robu o trošku trgovca kurirskom službom{' '}
            <Link href="http://www.postexpress.rs/" target="_blank" style={{ fontWeight: 'bold' }}>Post Express</Link> sa kojom imamo ugovorni odnos.
          </Typography>
          <Typography sx={{ display: 'inline-block', textAlign: 'justify', padding: '20px 20px' }}>
            U slučaju vraćanja robe i povraćaja sredstava kupcu koji je prethodno platio nekom od platnih
            kartica, delimično ili u celosti, a bez obzira na razlog vraćanja, apoteka DAR je u
            obavezi da povraćaj vrši isključivo preko VISA, EC/MC i Maestro metoda plaćanja.
          </Typography>

          <Typography textAlign="left" fontSize="1rem" marginLeft="20px" fontWeight="bold">
            OTKLANJANJE NESAOBRAZNOSTI POSLE ISTEKA ZAKONSKOG ROKA
          </Typography>
          <Typography sx={{ display: 'inline-block', textAlign: 'justify', padding: '20px 20px' }}>
            Posle isteka zakonskog roka saobraznosti robe (2 godine), potrošač je sam odgovoran za slanje robe na servis.
            U tom slučaju samo on snosi troškove slanja i primanja robe i troškove popravke.
            AU Apoteka DAR će rado izaći u susret potrošačima i pomoći im oko informacija o dostupnim servisima posle isteka zakonskog perioda saobraznosti.
          </Typography>
          <Typography textAlign="left" fontSize="1rem" marginLeft="20px" marginBottom="50px" fontWeight="bold">
            Reklamacioni list možete preuzeti{' '}
            <Link href="/docs/Zahtev_za_reklamaciju.pdf" target="_blank">ovde.</Link>
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
}
