'use client';

import { Container, Box, Typography } from '@mui/material';

export function ProfileEditWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
      <Box
        sx={{
          maxWidth: 900,
          mx: 'auto',
          bgcolor: '#fff',
          p: { xs: 3, md: 4 },
          borderRadius: 2,
          boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
        }}
      >
        <Typography
          variant="h4"
          sx={{ mb: 3, fontWeight: 700, textAlign: 'center' }}
        >
          Izmena korisničkih podataka
        </Typography>
        {children}
      </Box>
    </Container>
  );
}
