import { Container, Box, Typography } from '@mui/material';
import type { Metadata } from 'next';
import { RegistrationForm } from './registration-form';

export const metadata: Metadata = {
  title: 'Registracija',
  description: 'Registracija korisnika',
};

export default async function RegisterPage({
  searchParams,
}: {
  searchParams: Promise<{ reason?: string }>;
}) {
  const { reason } = await searchParams;

  return (
    <Container maxWidth="xl" sx={{ background: '#fff' }}>
      <Box sx={{ mt: 8, mb: 6 }}>
        <Typography
          variant="h4"
          sx={{ mb: 3, fontWeight: 700, textAlign: 'center', color: 'primary.main' }}
        >
          Registracija korisnika
        </Typography>
        {reason === 'customer-not-found' && (
          <Typography
            variant="body1"
            sx={{ textAlign: 'center', color: 'warning.main', mb: 3 }}
          >
            Vaš Google nalog nije povezan sa postojećim korisnikom. Molimo
            registrujte se.
          </Typography>
        )}
        <RegistrationForm />
      </Box>
    </Container>
  );
}
