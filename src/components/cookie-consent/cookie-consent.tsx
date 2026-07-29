'use client';

import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
  Slide,
} from '@mui/material';
import CookieIcon from '@mui/icons-material/Cookie';
import Link from 'next/link';
import { Colors } from '@/styles/theme';

const CONSENT_KEY = 'cookie_consent';

/**
 * Cookie consent banner.
 * 
 * - If user clicks "Prihvati sve" → stored permanently in localStorage, never shown again.
 * - If user clicks "Samo neophodni" → stored in sessionStorage only, so it reappears next visit.
 * - If no choice made → shows on every page load (via sessionStorage check).
 */
export default function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // If permanently accepted, never show again
    const permanent = localStorage.getItem(CONSENT_KEY);
    if (permanent === 'all') return;

    // If already dismissed this session, don't show again this session
    const sessionDismissed = sessionStorage.getItem(CONSENT_KEY);
    if (sessionDismissed) return;

    // Show after a small delay
    const timer = setTimeout(() => setOpen(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(CONSENT_KEY, 'all');
    sessionStorage.setItem(CONSENT_KEY, 'all');
    setOpen(false);
  };

  const handleEssentialOnly = () => {
    // Only store in sessionStorage — will ask again next visit
    sessionStorage.setItem(CONSENT_KEY, 'essential');
    setOpen(false);
  };

  if (!open) return null;

  return (
    <Slide direction="up" in={open} mountOnEnter unmountOnExit>
      <Paper
        elevation={8}
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          background: 'linear-gradient(135deg, #fff 0%, #fafafa 100%)',
          borderTop: `3px solid ${Colors.primary.main}`,
        }}
      >
        <Container maxWidth="lg" sx={{ py: { xs: 2.5, md: 3 }, px: { xs: 2, md: 4 } }}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 2, md: 3 }}
            alignItems={{ xs: 'stretch', md: 'center' }}
          >
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start', flex: 1 }}>
              <CookieIcon sx={{ color: Colors.primary.main, fontSize: 32, mt: 0.5, flexShrink: 0 }} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: Colors.neutral[900], mb: 0.5 }}>
                  Ovaj sajt koristi kolačiće
                </Typography>
                <Typography variant="body2" sx={{ color: Colors.neutral[700], lineHeight: 1.6 }}>
                  Koristimo kolačiće za autentifikaciju korisnika, analitiku poseta (Google Analytics) i zaštitu od zlonamernog pristupa (reCAPTCHA).
                  Detaljnije informacije možete pronaći u našoj{' '}
                  <Link href="/informacije/politika-kolacica" style={{ color: Colors.primary.main, textDecoration: 'underline' }}>
                    Politici kolačića
                  </Link>.
                </Typography>
              </Box>
            </Box>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1.5}
              sx={{ flexShrink: 0, minWidth: { md: 280 } }}
            >
              <Button
                variant="outlined"
                color="primary"
                onClick={handleEssentialOnly}
                sx={{
                  borderRadius: 2,
                  textTransform: 'none',
                  fontWeight: 600,
                  px: 3,
                  whiteSpace: 'nowrap',
                }}
              >
                Samo neophodni
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleAcceptAll}
                sx={{
                  borderRadius: 2,
                  textTransform: 'none',
                  fontWeight: 600,
                  px: 3,
                  whiteSpace: 'nowrap',
                }}
              >
                Prihvati sve
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Paper>
    </Slide>
  );
}
