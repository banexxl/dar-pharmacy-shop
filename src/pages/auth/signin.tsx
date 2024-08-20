import LoadingWheel from "@/components/loading/loading";
import { UIProvider } from "@/context/ui/ui.context";
import theme from "@/styles/theme";
import { Button, Container, Stack, TextField } from "@mui/material";
import dynamic from "next/dynamic";
import SearchBox from "@/components/search/search";
import AppDrawer from "@/components/navbar/drawer/drawer";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { AuthBox, AuthButton, AuthFormBox, AuthText, AuthTitle } from "@/styles/auth/auth";
import { signIn } from "next-auth/react";
import { Form, Formik } from 'formik';
import { userEmailSchema } from "@/schemas/email-form.schema";
import { useRouter } from "next/router";

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
                    <title>Apoteka DAR - Kontakt</title>
                    <meta name="description" content="Apoteka Dar Kragujevac" />
                    <meta name="keywords" content="apoteka, dar, kragujevac" />
                    <meta property="og:title" content="Apoteka DAR" />
                    <meta property="og:description" content="Apoteka Dar Kragujevac" />
                    <meta property="og:image" content="/public/images/home-page/apotekaDar.jpg" />
                    <meta property="og:url" content="https://www.apoteka-dar.rs" />
                    <meta name="twitter:card" content="/public/images/home-page/apotekaDar.jpg" />
                    <meta name="twitter:title" content="Apoteka DAR" />
                    <meta name="twitter:description" content="Apoteka DAR - Kontakt" />
                    <meta name="twitter:image" content="/public/images/home-page/apotekaDar.jpg" />
                    <Container
                         disableGutters
                         maxWidth="lg"
                         sx={{
                              background: "#fff",
                         }}
                    >
                         <Stack>
                              <UIProvider>
                                   <AuthBox theme={theme}>
                                        <AuthFormBox>
                                             <AuthTitle>
                                                  Ako želite možete se prijaviti.
                                             </AuthTitle>
                                             <AuthText theme={theme}>
                                                  Ako ne, možete nastaviti kao gost.
                                             </AuthText>
                                             <Formik initialValues={{ email: '' }} onSubmit={(values: { email: string }) => handleSubmit(values)} validationSchema={userEmailSchema}>
                                                  {
                                                       formik =>
                                                       (
                                                            < Form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', gap: '30px' }}>
                                                                 <TextField
                                                                      value={formik.values.email}
                                                                      onBlur={formik.handleBlur}
                                                                      onChange={formik.handleChange}
                                                                      label="Unesite vaš email"
                                                                      variant="outlined"
                                                                      name="email"
                                                                      error={formik.touched.email && !!formik.errors.email}
                                                                      helperText={formik.touched.email && formik.errors.email}
                                                                      fullWidth
                                                                      sx={{ width: '300px' }}
                                                                 />
                                                                 <AuthButton
                                                                      variant="contained"
                                                                      color="primary"
                                                                      fullWidth
                                                                      type="submit"
                                                                 >
                                                                      Prijava
                                                                 </AuthButton>
                                                            </Form>
                                                       )
                                                  }
                                             </Formik>
                                        </AuthFormBox>
                                   </AuthBox>
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