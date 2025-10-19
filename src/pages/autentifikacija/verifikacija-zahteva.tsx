import LoadingWheel from "@/components/loading/loading";
import { UIProvider } from "@/context/ui/ui.context";
import theme from "@/styles/theme";
import { Button, Container, Stack, TextField, Box, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import SearchBox from "@/components/search/search";
import AppDrawer from "@/components/navbar/drawer/drawer";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { signIn } from "next-auth/react";
import { Form, Formik } from 'formik';
import { userEmailSchema } from "@/schemas/email-form.schema";
import { Seo } from "@/components/seo";

const SignInPage = () => {

     const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
          loading: () => <LoadingWheel />,
          ssr: false
     })

     const handleSubmit = (values: any) => {
          signIn('email', { email: values.email, redirect: true, callbackUrl: '/' })
     }

     return (
          <ReCaptchaProvider reCaptchaKey={process.env.GOOGLE_CAPTCHA_SITE_KEY} useEnterprise>
               <DynamicThemeProvider theme={theme}>
                    <Seo title={'Greska prilikom verifikacije'} description={'Greska prilikom verifikacije'} url={'https://www.apoteka-dar.rs/'} />
                    <Container
                         disableGutters
                         maxWidth="lg"
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
               </DynamicThemeProvider >
          </ReCaptchaProvider >
     )
}

export default SignInPage