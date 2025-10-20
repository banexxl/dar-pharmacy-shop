import LoadingWheel from "@/components/loading/loading";
import { UIProvider } from "@/context/ui/ui.context";
import theme from "@/styles/theme";
import { Button, Container, Stack, TextField, Box, Typography } from "@mui/material";
// removed per-page ThemeProvider; using global provider
import SearchBox from "@/components/search/search";
import AppDrawer from "@/components/navbar/drawer/drawer";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { signIn } from "next-auth/react";
import { Form, Formik } from 'formik';
import { userEmailSchema } from "@/schemas/email-form.schema";
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
                                   <Box className="auth-box">
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
                                   <AppDrawer isScreenToMedium={false} />
                              </UIProvider>
                         </Stack>
                    </Container>
               
          </ReCaptchaProvider >
     )
}

export default SignInPage
