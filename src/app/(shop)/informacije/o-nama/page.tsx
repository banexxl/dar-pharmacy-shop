'use client';

import { Box, Container, Stack, Typography, Link as MuiLink } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { Colors } from '@/styles/theme';

export default function ONamaPage() {
  return (
    <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
      <Stack>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h2" sx={{ fontWeight: 700, color: Colors.primary.main }}>
            O nama
          </Typography>
          <Typography
            variant="h5"
            sx={{ mt: 1, fontWeight: 700, display: 'inline-block', px: 2, py: 1, borderRadius: 2, bgcolor: Colors.primary.main, color: '#fff' }}
          >
            Naš moto:{' '}
            <Box component="span" sx={{ fontStyle: 'italic', textDecoration: 'underline', fontWeight: 800 }}>
              Radosno srce - pola Zdravlja!
            </Box>
          </Typography>
        </Box>
        <Box sx={{ maxWidth: 900, mx: 'auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="body1">
            Dobrodošli u Apoteku DAR, vašu lokalnu apoteku u srcu Kragujevca, koja se ponosi velikom ponudom prirodnih proizvoda. Naša misija je da vam obezbedimo najkvalitetnije proizvode za zdravlje, koristeći prirodne sastojke koji podržavaju vaše celokupno blagostanje.
          </Typography>
          <Typography variant="body1">
            Naš tim stručnjaka posvećen je pružanju personalizovane usluge i savetovanja, kako bismo osigurali da svaki proizvod koji izaberete bude prilagođen vašim individualnim potrebama. Verujemo u snagu prirode i trudimo se da vam pružimo najbolje iz njenog bogatstva.
          </Typography>
          <Typography variant="body1">
            Bilo da tražite prirodne dodatke ishrani, biljne čajeve, kozmetiku ili proizvode za negu tela, u Apoteci DAR ćete pronaći sve što vam je potrebno za zdrav i uravnotežen život.
          </Typography>
          <Typography variant="body1">
            Posetite nas u Kragujevcu i otkrijte snagu prirodnih rešenja za vaše zdravlje!
          </Typography>
          <Typography variant="h6" sx={{ mt: 3, fontWeight: 700 }}>
            Dostava lekova radnim danima po celoj Srbiji!
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center', fontWeight: 700 }}>
              <AccessTimeIcon color="primary" /> Radno Vreme:
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>Radni dani: od 08 do 22h</Typography>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>Nedelja: od 08 do 20h</Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center' }}>
              <LocationOnIcon color="primary" /> Kralja Aleksnadra Prvog Kardjordjevica 102 lokal 9, u sklopu Tc Prostor., Kragujevac 34000
            </Typography>
          </Box>
          <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <PhoneIcon color="primary" /> <MuiLink href="tel:+381346104222" underline="none" color="inherit">+381 34 610 4222</MuiLink>
            </Typography>
            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <EmailIcon color="primary" /> <MuiLink href="mailto:maja@apoteka-dar.rs" underline="none" color="inherit">maja@apoteka-dar.rs</MuiLink>
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
}
