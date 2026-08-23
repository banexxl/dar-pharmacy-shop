'use client';

import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Paper,
  Slide,
  Stack,
  Typography,
} from '@mui/material';
import CookieIcon from '@mui/icons-material/Cookie';
import Link from 'next/link';

import { Colors } from '@/styles/theme';

const CONSENT_KEY = 'cookie_consent';

type ConsentValue = 'granted' | 'denied';

interface GoogleConsentSettings {
  ad_storage: ConsentValue;
  analytics_storage: ConsentValue;
  ad_user_data: ConsentValue;
  ad_personalization: ConsentValue;
}

const updateGoogleConsent = (
  consent: GoogleConsentSettings
) => {
  if (typeof window === 'undefined') {
    return;
  }

  if (typeof window.gtag !== 'function') {
    console.warn(
      'Google consent could not be updated because gtag is not ready.'
    );

    return;
  }

  window.gtag('consent', 'update', {
    ad_storage: 'granted',
    analytics_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
  });
};

export default function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const permanentConsent =
      localStorage.getItem(CONSENT_KEY);

    /*
     * The user previously accepted everything.
     * Restore the granted consent state on this page.
     */
    if (permanentConsent === 'all') {
      updateGoogleConsent({
        ad_storage: 'granted',
        analytics_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
      });

      return;
    }

    const sessionConsent =
      sessionStorage.getItem(CONSENT_KEY);

    /*
     * The user selected essential cookies during
     * the current browser session.
     */
    if (sessionConsent === 'essential') {
      updateGoogleConsent({
        ad_storage: 'denied',
        analytics_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      });

      return;
    }

    /*
     * Show the banner when no consent choice exists.
     */
    const timer = window.setTimeout(() => {
      setOpen(true);
    }, 800);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  const handleAcceptAll = () => {
    /*
     * Update Google before closing the banner or
     * navigating away from the current page.
     */
    updateGoogleConsent({
      ad_storage: 'granted',
      analytics_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
    });

    localStorage.setItem(CONSENT_KEY, 'all');
    sessionStorage.setItem(CONSENT_KEY, 'all');

    setOpen(false);
  };

  const handleEssentialOnly = () => {
    updateGoogleConsent({
      ad_storage: 'denied',
      analytics_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });

    /*
     * Store this choice for the current session only.
     * The banner will appear again on a future visit.
     */
    localStorage.removeItem(CONSENT_KEY);
    sessionStorage.setItem(
      CONSENT_KEY,
      'essential'
    );

    setOpen(false);
  };

  return (
    <Slide
      direction="up"
      in={open}
      mountOnEnter
      unmountOnExit
    >
      <Paper
        elevation={8}
        role="dialog"
        aria-label="Podešavanje kolačića"
        sx={{
          position: 'fixed',
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: 9999,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          background:
            'linear-gradient(135deg, #fff 0%, #fafafa 100%)',
          borderTop: `3px solid ${Colors.primary.main}`,
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            py: {
              xs: 2.5,
              md: 3,
            },
            px: {
              xs: 2,
              md: 4,
            },
          }}
        >
          <Stack
            direction={{
              xs: 'column',
              md: 'row',
            }}
            spacing={{
              xs: 2,
              md: 3,
            }}
            alignItems={{
              xs: 'stretch',
              md: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                alignItems: 'flex-start',
                flex: 1,
              }}
            >
              <CookieIcon
                sx={{
                  color: Colors.primary.main,
                  fontSize: 32,
                  mt: 0.5,
                  flexShrink: 0,
                }}
              />

              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 700,
                    color: Colors.neutral[900],
                    mb: 0.5,
                  }}
                >
                  Ovaj sajt koristi kolačiće
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: Colors.neutral[700],
                    lineHeight: 1.6,
                  }}
                >
                  Koristimo kolačiće za autentifikaciju
                  korisnika, analitiku poseta i merenje
                  efikasnosti oglasa, kao i za zaštitu od
                  zlonamernog pristupa. Detaljnije
                  informacije možete pronaći u našoj{' '}
                  <Link
                    href="/informacije/politika-kolacica"
                    style={{
                      color: Colors.primary.main,
                      textDecoration: 'underline',
                    }}
                  >
                    Politici kolačića
                  </Link>
                  .
                </Typography>
              </Box>
            </Box>

            <Stack
              direction={{
                xs: 'column',
                sm: 'row',
              }}
              spacing={1.5}
              sx={{
                flexShrink: 0,
                minWidth: {
                  md: 280,
                },
              }}
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