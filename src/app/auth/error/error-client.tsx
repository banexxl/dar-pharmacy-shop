'use client';

import { Box, Container, Typography, Button } from '@mui/material';

const ERROR_MESSAGES: Record<string, string> = {
  'missing-code': 'Nedostaje autorizacioni kod. Pokušajte ponovo.',
  'exchange-failed': 'Autentifikacija nije uspela. Pokušajte ponovo.',
  'user-not-found': 'Korisnik nije pronađen. Pokušajte ponovo.',
  'no-email': 'Vaš nalog nema email adresu. Kontaktirajte podršku.',
  'customer-not-found': 'Nema korisničkog naloga povezanog sa ovim podacima.',
  'account-conflict': 'Ovaj email je već povezan sa drugim nalogom.',
  'account-banned': 'Vaš nalog je suspendovan. Kontaktirajte podršku.',
};

interface Props {
  reason?: string;
}

export function AuthErrorClient({ reason }: Props) {
  const message =
    ERROR_MESSAGES[reason ?? ''] ??
    'Došlo je do greške prilikom prijave. Pokušajte ponovo.';

  return (
    <Container maxWidth="sm" sx={{ py: { xs: 8, md: 12 }, textAlign: 'center' }}>
      <Box>
        <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main', mb: 2 }}>
          Greška prilikom prijave
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
          {message}
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
          <Button href="/autentifikacija/prijava" variant="contained" color="primary">
            Pokušaj ponovo
          </Button>
          <Button href="/" variant="outlined">
            Početna
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
