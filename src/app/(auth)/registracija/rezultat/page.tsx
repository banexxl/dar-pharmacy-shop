import { Container, Box, Typography, Button } from '@mui/material';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Registracija',
  description: 'Rezultat registracije',
};

const MESSAGES: Record<string, string> = {
  success:
    'Uspešna registracija! Ako je email ispravan, proverite vaš inbox za verifikaciju.',
  fail: 'Došlo je do greške pri registraciji. Pokušajte ponovo.',
  exists: 'Korisnik sa ovim emailom već postoji.',
};

export default async function RegisterResultPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;
  const message = MESSAGES[status ?? ''] ?? 'Nepoznat status registracije.';

  return (
    <Container maxWidth="xl" sx={{ background: '#fff' }}>
      <Box sx={{ mt: 8, mb: 6, textAlign: 'center' }}>
        <Typography
          variant="h4"
          sx={{ mb: 3, fontWeight: 700, color: 'primary.main' }}
        >
          {message}
        </Typography>
        {status === 'success' && (
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
            Kada potvrdite email, moći ćete da se prijavite.
          </Typography>
        )}
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
          <Button variant="contained" href="/">
            Nazad na početnu
          </Button>
          {status !== 'success' && (
            <Button variant="outlined" href="/registracija">
              Pokušaj ponovo
            </Button>
          )}
          {status === 'success' && (
            <Button variant="outlined" href="/autentifikacija/prijava">
              Prijava
            </Button>
          )}
        </Box>
      </Box>
    </Container>
  );
}
