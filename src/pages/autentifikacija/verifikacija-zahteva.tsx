import { UIProvider } from "@/context/ui/ui.context";
import { Button, Container, Stack, TextField, Box, Typography } from "@mui/material";
// removed per-page ThemeProvider; using global provider
import SearchBox from "@/components/search/search";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { signIn } from "next-auth/react";
import { Seo } from "@/components/seo";

const SignInPage = () => {

     // ThemeProvider is applied globally in _app.tsx

     const handleSubmit = (values: any) => {
          signIn('email', { email: values.email, redirect: true, callbackUrl: '/' })
     }

     return (
          <ReCaptchaProvider reCaptchaKey={process.env.GOOGLE_CAPTCHA_SITE_KEY} useEnterprise>

               <Seo title={'Greska prilikom verifikacije'} description={'Greska prilikom verifikacije'} url={'https://www.apoteka-dar.rs/'} />
               <Container
                    maxWidth="xl"
                    sx={{
                         background: "#fff",
                    }}
               >
                    <Stack>
                         <UIProvider>
                              <Box className="auth-box" sx={{ textAlign: 'center', py: { xs: 5, md: 8 }, '& .auth-title, & .auth-text': { display: 'none' } }}>
                                   <Typography variant="h2" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                                        Proverite email
                                   </Typography>
                                   <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                                        Link za prijavu je poslat. Proverite svoj email da dovršite prijavu.
                                   </Typography>
                                   <Box className="auth-form-box">
                                        <Typography className="auth-title">
                                             Email za prijavu je poslat.
                                        </Typography>
                                        <Typography className="auth-text">
                                             Molimo vas da proverite vaš email kako biste završili proces prijave.
                                        </Typography>
                                   </Box>
                              </Box>
                              <SearchBox />

                         </UIProvider>
                    </Stack>
               </Container>

          </ReCaptchaProvider >
     )
}

export default SignInPage
