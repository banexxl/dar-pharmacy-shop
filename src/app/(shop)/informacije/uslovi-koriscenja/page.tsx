'use client';

import { Box, Container, Divider, List, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import { Colors } from '@/styles/theme';
import Link from 'next/link';

export default function UsloviKoriscenjaPage() {
  return (
    <Container maxWidth="xl" sx={{ background: '#fff' }}>
      <Stack>
        <Box>
          <Typography marginTop="20px" textAlign="center" fontSize="2rem" fontWeight="bold">
            Uslovi korišćenja
          </Typography>
          <Divider sx={{ marginBottom: '30px' }} variant="middle" />

          <Typography textAlign="justify" padding="0px 20px" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
            Poštovani korisnici, molimo vas da pre korišćenja naših usluga, pažljivo pročitate sledeće uslove. Svaka poseta našem sajtu, kao i kupovina, znači da ste ove uslove pročitali i da se slažete sa njima u celosti.
          </Typography>

          <Typography textAlign="justify" padding="0px 20px" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
            Dobrodošli na internet stranicu Apoteke DAR
          </Typography>

          <Typography textAlign="justify" padding="20px 20px">
            Apotekarska ustanova DAR Kragujevac vam omogućava korišćenje usluga i sadržaja svog portala koje je podložno niže navedenim Uslovima korišćenja. Korišćenjem bilo kog dela portala, smatra se da su korisnici upoznati sa ovim uslovima, kao i da prihvataju korišćenje sadržaja ovog portala isključivo za ličnu upotrebu i na sopstvenu odgovornost.
          </Typography>
          <Typography sx={{ textAlign: 'justify', padding: '20px 20px' }}>
            Apotekarska ustanova DAR Kragujevac svoje cenjene potrošače koji robu kupuju putem internet sajta apoteka-dar.rs obaveštava:
          </Typography>

          <List sx={{ listStyleType: 'num', pl: 6 }}>
            <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.lighter, padding: '0px 20px' }}>
              <ListItemText><Typography textAlign="justify">da se prodaja robe putem internet sajta apoteka-dar.rs obavlja u okviru registrovane delatnosti zdravstvena ustanova Apotekarska ustanova DAR Kragujevac, Kralja Aleksandra I Karađorđevića 102, lokal 9, 34000 Kragujevac, MB: 66597784, PIB: 113127282, tel: 0640172227;</Typography></ListItemText>
            </ListItem>
            <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.lighter, padding: '0px 20px' }}>
              <ListItemText><Typography textAlign="justify">da roba koja se prodaje putem internet sajta apoteka-dar.rs poseduje svojstva potrebna za redovnu upotrebu te vrste robe u skladu sa njenom namenom koja je definisana u Deklaraciji;</Typography></ListItemText>
            </ListItem>
            <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.lighter, padding: '0px 20px' }}>
              <ListItemText><Typography textAlign="justify">da se saobraznost robe ugovoru ISKLJUČIVO utvrđuje prema svojstvima i nameni robe kako je to definisano pripadajućom Deklaracijom;</Typography></ListItemText>
            </ListItem>
            <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.lighter, padding: '0px 20px' }}>
              <ListItemText><Typography textAlign="justify">da je prodajna cena robe naznačena uz svaki artikal;</Typography></ListItemText>
            </ListItem>
            <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.lighter, padding: '0px 20px' }}>
              <ListItemText><Typography textAlign="justify">da se mogućnost kupovine robe uz posebne cenovne pogodnosti i/ili uz posebne prodajne podsticaje (akcijska prodaja), obavlja u skladu sa uslovima koji su objavljeni na internet sajtu apoteka-dar.rs;</Typography></ListItemText>
            </ListItem>
            <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.lighter, padding: '0px 20px' }}>
              <ListItemText><Typography textAlign="justify">da potrošač robu koju kupuje putem internet sajta apoteka-dar.rs može platiti pouzećem gotovinski u trenutku isporuke, platnom karticom, avansnom uplatom putem elektronskog bankarstva ili uplatom u pošti ili banci;</Typography></ListItemText>
            </ListItem>
            <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.lighter, padding: '0px 20px' }}>
              <ListItemText><Typography textAlign="justify">da potrošač prilikom kreiranja narudžbenice pritiskom na taster POŠALJI NARUDŽBINU preuzima obavezu plaćanja naručene robe;</Typography></ListItemText>
            </ListItem>
            <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.lighter, padding: '0px 20px' }}>
              <ListItemText><Typography textAlign="justify">da u slučaju nesaobraznosti robe po ugovoru, potrošač ima pravo da izjavi reklamaciju na način kako je to definisano Pravilnikom o postupanju po reklamaciji potrošača za robu kupljenu putem ONLINE prodavnice, koji se može preuzeti <Link href="/docs/Zahtev_za_reklamaciju.pdf">OVDE.</Link> Obrazac Zahteva za reklamaciju potrošač može pronaći u odeljku Servis - <Link href="/informacije/reklamacije">REKLAMACIJE.</Link></Typography></ListItemText>
            </ListItem>
            <ListItem sx={{ display: 'list-item', fontStyle: 'italic', color: Colors.primary.lighter, padding: '0px 20px' }}>
              <ListItemText><Typography textAlign="justify">da potrošač ima pravo da odustane od ugovora (odustane od kupovine) u roku od 14 dana od dana isporuke, a bez navođenja razloga za odustanak. U slučaju odustanka, potrošač snosi troškove vraćanja robe. Bliža uputstva za odustanak od ugovora potrošač može pronaći u odeljku Servis - <Link href="/informacije/odustanak">PRAVO NA ODUSTAJANJE.</Link></Typography></ListItemText>
            </ListItem>
          </List>

          <Typography textAlign="justify" padding="0px 20px" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Opšte odredbe</Typography>
          <Typography textAlign="justify" padding="20px 20px">Apotekarska ustanova DAR Kragujevac ima autorska prava na sve sadržaje (tekstualne, vizuelne i audio materijale, baze podataka, programerski kod). Neovlašćeno korišćenje bilo kog dela portala, bez dozvole vlasnika autorskih prava, smatra se kršenjem autorskih prava i podložno je tužbi.</Typography>
          <Typography textAlign="justify" padding="20px 20px">Apotekarska ustanova DAR Kragujevac administrira ovu lokaciju iz svojih kancelarija čija je lokacija u Srbiji. Apotekarska ustanova DAR Kragujevac može revidirati ove Uslove bilo kada, ažuriranjem ovog dokumenta.</Typography>

          <Typography textAlign="justify" padding="0px 20px" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Zaštita poverljivih podataka o transakciji</Typography>
          <Typography textAlign="justify" padding="20px 20px">Prilikom unošenja podataka o platnoj kartici, poverljive informacija se prenose putem javne mreže u zaštićenoj (kriptovanoj) formi upotrebom SSL protokola i PKI sistema. Sigurnost podataka prilikom kupovine garantuje procesor platnih kartica. Niti jednog trenutka podaci o platnoj kartici nisu dostupni našem sistemu.</Typography>

          <Typography textAlign="justify" padding="0px 20px" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Povraćaj sredstava</Typography>
          <Typography textAlign="justify" padding="20px 20px">U slučaju vraćanja robe i povraćaja sredstava kupcu koji je prethodno platio nekom od platnih kartica, delimično ili u celosti, a bez obzira na razlog vraćanja, Apoteka DAR je u obavezi da povraćaj vrši isključivo preko VISA, EC/MC, Maestro, Amex i Dina metoda plaćanja.</Typography>

          <Typography textAlign="justify" padding="0px 20px" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Informacije o dostavi</Typography>
          <Typography textAlign="justify" padding="20px 20px">Internet prodavnica apoteka-dar.rs kojom upravlja zdravstvena ustanova Apotekarska ustanova DAR Kragujevac, ima potpisan ugovor sa više kurirskih službi putem kojih se vrši dostava na teritoriji Republike Srbije.</Typography>

          <Typography textAlign="justify" padding="0px 20px" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Rokovi dostave</Typography>
          <Typography textAlign="justify" padding="20px 20px">Od trenutka potvrde narudžbine rok dostave je maksimalno 5 radnih dana. Uobičajeno vreme za dostavu je dva radna dana.</Typography>

          <Typography textAlign="justify" padding="0px 20px" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Pravo na odustajanje</Typography>
          <Typography textAlign="justify" padding="20px 20px" sx={{ fontWeight: 'bold' }}>U skladu sa Zakonom o zaštiti potrošača (Sl.gl.RS br.62/2014), obaveštavamo vas da imate pravo da bez navođenja razloga odustanete od ugovora u roku od 14 dana od dana kada Vam je roba isporučena.</Typography>
          <Typography textAlign="justify" padding="20px 20px">Izjavu o odustanku od ugovora možete preuzeti - <Link href="/docs/Izjava_o_odustanku.pdf">OVDE.</Link></Typography>
          <Typography textAlign="justify" padding="20px 20px">Izjavu je potrebno da odštampate, popunite podatke koji nedostaju, potpišete i pošaljete na adresu: Apotekarska ustanova DAR Kragujevac, Kralja Aleksandra I Karađorđevića 102, lokal 9, 34000 Kragujevac, telefon: <a href="tel:0640172227">0640172227</a></Typography>

          <Typography textAlign="justify" padding="0px 20px" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Reklamacije</Typography>
          <Typography textAlign="justify" padding="20px 20px">Prilikom preuzimanja pošiljke molimo Vas da u prisustvu kurira proverite svoj paket. Ukoliko na njemu ima vidljivih oštećenja paket ne bi trebalo da preuzmete. Pozovite nas telefonom na broj 0640172227 ili pošaljite e-mail na maja@apoteka-dar.rs.</Typography>
          <Typography textAlign="justify" padding="20px 20px">Robu zajedno sa obrascem Zahteva za reklamaciju, koji možete preuzeti <a href="/docs/Zahtev_za_reklamaciju.pdf">OVDE</a>, pošaljite na adresu Apotekarska ustanova DAR, Kragujevac, 34000, Kralja Aleksandra I Karađorđevića 102, lokal 9.</Typography>
        </Box>
      </Stack>
    </Container>
  );
}
