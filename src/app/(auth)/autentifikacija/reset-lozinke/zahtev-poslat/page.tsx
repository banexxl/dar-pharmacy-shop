'use client';

import { Container, Box, Typography, Button } from '@mui/material';

export default function ResetPasswordRequestSentPage() {
  return (
    <Container maxWidth="sm" sx={{ py: { xs: 8, md: 12 }, textAlign: 'center' }}>
      <Box>
        <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main', mb: 2 }}>
          Proverite Vaš email
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
          Poslali smo Vam link za reset lozinke. Kliknite na link u Vašem
          email-u da biste postavili novu lozinku.
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4 }}>
          Ako niste dobili email, proverite spam folder ili pokušajte ponovo.
        </Typography>
        <Button href="/autentifikacija/prijava" variant="outlined">
          Nazad na prijavu
        </Button>
      </Box>
    </Container>
  );
}
