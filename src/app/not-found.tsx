'use client';

import { Container, Box, Typography, Button } from '@mui/material';

export default function NotFound() {
  return (
    <Container maxWidth="sm" sx={{ py: { xs: 10, md: 16 }, textAlign: 'center' }}>
      <Box>
        <Typography variant="h1" sx={{ fontSize: '6rem', fontWeight: 700, color: 'primary.main' }}>
          404
        </Typography>
        <Typography variant="h5" sx={{ color: 'text.secondary', mb: 4 }}>
          Stranica koju tražite ne postoji.
        </Typography>
        <Button href="/" variant="contained" color="primary">
          Nazad na početnu
        </Button>
      </Box>
    </Container>
  );
}
