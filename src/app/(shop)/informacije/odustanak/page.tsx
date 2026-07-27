'use client';

import { Box, Container, Divider, Stack, Typography } from '@mui/material';

export default function OdustanakPage() {
  return (
    <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
      <Stack>
        <Box>
          <Typography variant="h2" textAlign="center" sx={{ fontWeight: 700, mb: 2, mt: '20px' }}>
            Izjava o odustanku
          </Typography>
          <Divider sx={{ marginBottom: '30px' }} variant="middle" />
          <Typography textAlign="justify" padding="20px 20px" sx={{ textAlignLast: 'left' }}>
            Zakon za slučaj prodaje na daljinu ustanovljava pravo kupca, koji se smatra potrošačem (fizičko lice koje proizvod kupuje radi namirenja svojih individualnih potreba, a ne radi obavljanja profesionalne delatnosti), da odustane od ugovora u roku od 14 dana od dana kada mu je proizvod predat. Prilikom odustanka potrošač može, ali ne mora da navede razloge zbog kojih odustaje. Izjava o odustanku od ugovora o prodaji zaključenog na daljinu proizvodi pravno dejstvo od dana kada je poslata AU DAR.
          </Typography>
          <Typography textAlign="justify" padding="20px 20px" sx={{ textAlignLast: 'left' }}>
            U slučaju odustanka od ugovora, potrošač ima pravo na povraćaj novca ili na zamenu za drugi proizvod. Uplaćeni novčani iznos se potrošaču vraća po prijemu proizvoda, i nakon što se utvrdi da je proizvod neoštećen i ispravan. Potrošač je dužan da proizvod vrati bez odlaganja, a najkasnije u roku od 14 dana od dana kada je poslao obrazac za odustanak. Po isteku roka od 14 dana od dana kada je poslao odustanak, proizvod se više ne moze vratiti. Prilikom povraćaja robe obavezno je vratiti u ispravnom i nekorišćenom stanju i originalno neoštećenom pakovanju, pri čemu se mora priložiti i originalni račun.
          </Typography>
          <Typography textAlign="justify" padding="20px 20px" sx={{ textAlignLast: 'left' }}>
            Po prijemu proizvoda, utvrdiće se da li je proizvod ispravan i neoštećen. Potrošač odgovara za neispravnost ili oštećenje proizvoda koji su rezultat neadekvatnog rukovanja proizvodom, tj. potrošač je isključivo odgovoran za umanjenu vrednost proizvoda koja nastane kao posledica rukovanja robom na način koji nije adekvatan, odnosno prevazilazi ono što je neophodno da bi se ustanovili njegova priroda, karakteristike i funkcionalnost. Ukoliko se utvrdi da je nastupila neispravnost ili oštećenje proizvoda krivicom potrošača, odbiće se vraćanje uplaćenog novčanog iznosa i proizvod će mu biti o njegovom trošku. Trgovac je dužan da potrošaču bez odlaganja vrati iznos koji je potrošač platio po osnovu ugovora, a najkasnije u roku od 14 dana od dana prijema izjave o odustanku, a nakon prijema proizvoda. Troškove vraćanja robe i novca snosi potrošač, sem u slučajevima kada potrošač dobije neispravan ili pogrešan artikal.
          </Typography>
          <Typography textAlign="justify" padding="20px 20px" sx={{ textAlignLast: 'left' }}>
            Zakon ne predviđa povrat sledeće robe:{' '}
            <Typography component="span" sx={{ fontWeight: 'bold', ml: '0px' }}>
              robe koja je podložna pogoršanju kvaliteta ili ima kratak rok trajanja zapečaćene robe koja se ne može vratiti zbog zaštite zdravlja ili higijenskih razloga i koja je otpečaćena nakon isporuke.
            </Typography>
          </Typography>
          <Typography textAlign="justify" padding="20px 20px" sx={{ textAlignLast: 'left', fontWeight: 'bold' }}>
            PROCEDURA ZA POVRAĆAJ SREDSTAVA
          </Typography>
          <Typography textAlign="justify" padding="20px 20px" sx={{ textAlignLast: 'left' }}>
            Kontaktirajte nas pozivanjem broja telefona +381 34 610 4222 ili nam na email adresu maja@apoteka-dar.rs pošaljite fotografiju računa, Vaše ime, prezime, broj telefona i broj dinarskog tekućeg računa. Povraćaj sredstava se vrši iskljucivo na gore navedeni način, uplatom na dinarski tekući račun i nije moguće slati novac po kuriru u gotovini. Poručeni artikal, bez prethodnog kontakta i dogovora sa operaterima internet prodaje, koji je gore naveden, ne možete samoinicijativno menjati/zahtevati novac u nekoj od apoteka ili slati na adrese koje su navedene na računu/otpremnici. Svaki takav paket biće vraćen pošiljaocu, o trošku pošiljaoca.
          </Typography>
          <Typography textAlign="justify" padding="20px 20px" sx={{ textAlignLast: 'left', fontWeight: 'bold' }}>
            Izjava o odustanku od ugovora o prodaji zaključenog na daljinu možete preuzeti:{' '}
            <a href="/docs/Izjava_o_odustanku.pdf" download>OVDE!</a>
          </Typography>
          <Box className="contact-info-box">
            <Typography textAlign="justify" sx={{ textAlignLast: 'left', fontWeight: 'bold' }}>
              Adresa:
              <Typography textAlign="justify" padding="20px 20px" sx={{ textAlignLast: 'left' }}>
                Kragujevac, poštanski broj 34000, ulica Kralja Aleksandra I Karadjordjevica, broj 102, lokal 9
              </Typography>
            </Typography>
            <Typography textAlign="justify" sx={{ textAlignLast: 'left', fontWeight: 'bold' }}>
              Telefon:
              <Typography textAlign="justify" padding="20px 20px" sx={{ textAlignLast: 'left' }}>
                +381 34 610 4222
              </Typography>
            </Typography>
            <Typography textAlign="justify" sx={{ textAlignLast: 'left', fontWeight: 'bold' }}>
              Matični broj:
              <Typography textAlign="justify" padding="20px 20px" sx={{ textAlignLast: 'left' }}>
                66597784
              </Typography>
            </Typography>
            <Typography textAlign="justify" sx={{ textAlignLast: 'left', fontWeight: 'bold' }}>
              Poresko identifikacioni broj:
            </Typography>
            <Typography textAlign="justify" padding="20px 20px" sx={{ textAlignLast: 'left' }}>
              113127282
            </Typography>
            <Typography textAlign="justify" sx={{ textAlignLast: 'left', fontWeight: 'bold' }}>
              Poslovno ime preduzetnika:
            </Typography>
            <Typography textAlign="justify" padding="20px 20px" sx={{ textAlignLast: 'left' }}>
              Maja Joksovic PR, privatna praksa, apoteka DAR Kragujevac
            </Typography>
            <Typography textAlign="justify" sx={{ textAlignLast: 'left', fontWeight: 'bold' }}>
              Radno vreme:
            </Typography>
            <Typography textAlign="justify" padding="20px 20px" sx={{ textAlignLast: 'left' }}>
              Radnim danima: 08 - 22h<br />
              Subota: 08 - 22h<br />
              Nedelja: 08 - 20h
            </Typography>
            <Typography textAlign="justify" sx={{ textAlignLast: 'left', fontWeight: 'bold' }}>
              Pretežna delatnost:
            </Typography>
            <Typography textAlign="justify" padding="20px 20px" sx={{ textAlignLast: 'left' }}>
              4773 - trgovina na malo farmaceutskim proizvodima u prodavnicama - apotekama
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
}
