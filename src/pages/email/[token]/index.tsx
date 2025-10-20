import { Box, Card, Container, Stack, Typography } from "@mui/material";
import { UIProvider } from "@/context/ui/ui.context";
import SearchBox from "@/components/search/search";
import AppDrawer from "@/components/navbar/drawer/drawer";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { Seo } from "@/components/seo";
import { Colors } from "@/styles/theme";

interface VerifyEmailFormProps {
  success?: string;
  error?: string;
}

export default function VerifyEmailForm({ success, error }: VerifyEmailFormProps) {
  const router = useRouter();
  return (
    <>
      <Seo title={'Verifikacija tokena'} description={'Verifikacija tokena'} url={'https://www.apoteka-dar.rs/'} />
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
        <Stack>
          <UIProvider>
            <Box className="contact-box">
              <Box className="contact-info-box">
                {success && (
                  <Box>
                    <Typography className="contact-title">Uspešno ste izvršili registraciju!</Typography>
                    <Box>
                      <Typography>Ako želite, možete da se prijavite</Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          textAlign: 'center',
                          cursor: 'pointer',
                          transition: 'transform 0.2s, color 0.2s',
                          '&:hover': { color: Colors.primary.main, transform: 'scale(1.02)' },
                        }}
                        onClick={() => router.push('/autentifikacija/prijava')}
                      >
                        Ovde
                      </Typography>
                    </Box>
                  </Box>
                )}

                {error && (
                  <Box>
                    <Typography className="contact-title">Greška prilikom verifikacije!</Typography>
                    <Typography className="contact-text" sx={{ display: 'inline-block' }}>
                      {error}
                    </Typography>
                    <Typography className="contact-text">
                      Ako Vam je istekao token ili ste izgubili email za verifikaciju, možete zatražiti novi
                      popunjavanjem registracione forme na sledećem linku:
                    </Typography>
                    <Typography className="contact-text" sx={{ display: 'inline-block', textAlign: 'center' }}>
                      <Link rel='canonical' href="/registracija" style={{ color: Colors.primary.main, textDecoration: 'underline' }}>Registrujte se</Link>
                    </Typography>
                  </Box>
                )}

                {!success && !error && (
                  <Card sx={{ p: 2, borderRadius: 2, background: '#f7f7f7' }}>
                    <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 700 }}>
                      Verifikacija nije uspela, probajte ponovo.
                    </Typography>
                  </Card>
                )}
              </Box>
            </Box>
            <SearchBox />
            <AppDrawer isScreenToMedium={false} />
          </UIProvider>
        </Stack>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const token = query.token as string;

  if (!token) {
    return { props: { error: 'No token provided' } };
  }

  try {
    const response = await fetch(`${process.env.BASE_URL}/api/verify-email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    });
    const data = await response.json();
    if (data.success) {
      return { props: { success: data.success } };
    }
    return { props: { error: data.error || 'Verification failed' } };
  } catch (err) {
    return { props: { error: 'An unexpected error occurred' } };
  }
};

