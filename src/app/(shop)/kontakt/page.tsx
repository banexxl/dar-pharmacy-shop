'use client';

import { ContactMap } from '@/components/contact/contact-map';
import ContactForm from '@/components/contact/contact-form';
import { Container, Stack, Box, Typography, Link as MuiLink } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SearchBox from '@/components/search/search';

export default function ContactPage() {

  const mapApiKey = process.env.GOOGLE_MAPS_API_KEY!
  const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!

  return (
    <Container maxWidth="xl" sx={{ background: '#fff', py: { xs: 4, md: 6 } }}>
      <Stack spacing={4}>
        <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main', textAlign: 'center' }}>
          Kontakt
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          <Box sx={{ flex: 1 }}>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon color="primary" />
                <Typography>Kralja Aleksandra I Karađorđevića 102, lokal 9, 34000 Kragujevac</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <AccessTimeIcon color="primary" />
                <Typography>Pon - Pet: 08:00 - 20:00, Sub: 08:00 - 15:00</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon color="primary" />
                <MuiLink href="tel:+381346104222">+381 34 610 4222</MuiLink>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon color="primary" />
                <MuiLink href="mailto:maja@apoteka-dar.rs">maja@apoteka-dar.rs</MuiLink>
              </Box>
            </Stack>
            <Box sx={{ mt: 4 }}>
              <ContactForm recaptchaKey={recaptchaKey} />
            </Box>
          </Box>
          <Box sx={{ flex: 1, minHeight: 600 }}>
            <ContactMap mapApiKey={mapApiKey} />
          </Box>
        </Box>
        <SearchBox />
      </Stack>
    </Container>
  );
}
