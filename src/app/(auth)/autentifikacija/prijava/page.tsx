'use client';

import { Container, Box, Typography } from '@mui/material';
import { LoginForm } from './login-form';

export default function SignInPage() {
  return (
    <Container maxWidth="sm" sx={{ py: { xs: 6, md: 10 }, textAlign: 'center' }}>
      <Box>
        <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
          Prijava
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
          Ako želite, možete se prijaviti. Ako ne, možete nastaviti kao gost.
        </Typography>
        <LoginForm />
      </Box>
    </Container>
  );
}
