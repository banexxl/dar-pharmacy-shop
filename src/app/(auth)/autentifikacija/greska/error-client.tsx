'use client';

import { Container, Box, Typography, Button } from '@mui/material';

interface Props {
  error?: string;
}

export function ErrorPageClient({ error }: Props) {
  return (
    <Container maxWidth="sm" sx={{ py: { xs: 8, md: 12 }, textAlign: 'center' }}>
      <Box>
        <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main', mb: 2 }}>
          Greška prilikom prijave
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
          {error === 'Verification'
            ? 'Link za prijavu je istekao ili je nevažeći. Pokušajte ponovo.'
            : error === 'unauthorized'
              ? 'Vaš nalog nije registrovan. Molimo registrujte se prvo ili kontaktirajte podršku.'
              : 'Došlo je do greške prilikom prijave. Pokušajte ponovo.'}
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
          <Button href={error === 'unauthorized' ? '/registracija' : '/autentifikacija/prijava'} variant="contained" color="primary">
            {
              error === 'unauthorized' ? 'Registrujte se' :
                error === 'Verification' ? 'Pokušaj ponovo' :
                  'Pokušaj ponovo'
            }
          </Button>
          <Button href="/" variant="outlined">
            Početna
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
