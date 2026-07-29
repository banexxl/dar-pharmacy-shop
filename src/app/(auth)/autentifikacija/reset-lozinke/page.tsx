'use client';

import { Container, Box, Typography } from '@mui/material';
import { ResetPasswordForm } from './reset-password-form';

export default function ResetPasswordPage() {
  return (
    <Container maxWidth="sm" sx={{ py: { xs: 6, md: 10 }, textAlign: 'center' }}>
      <Box>
        <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
          Reset lozinke
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
          Unesite novu lozinku za Vaš nalog.
        </Typography>
        <ResetPasswordForm />
      </Box>
    </Container>
  );
}
