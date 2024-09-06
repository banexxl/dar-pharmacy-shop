import LoadingWheel from "@/components/loading/loading";
import { UIProvider } from "@/context/ui/ui.context";
import theme from "@/styles/theme";
import { Box, Container, Stack, TextField } from "@mui/material";
import dynamic from "next/dynamic";
import SearchBox from "@/components/search/search";
import AppDrawer from "@/components/navbar/drawer/drawer";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { AuthBox, AuthButton, AuthFormBox, AuthText, AuthTitle } from "@/styles/auth/auth";
import { signIn } from "next-auth/react";
import { Form, Formik } from "formik";
import { userEmailSchema } from "@/schemas/email-form.schema";
import { Seo } from "@/components/seo";
import { useCallback, useMemo, useState } from "react";

const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
     loading: () => <LoadingWheel />,
     ssr: false,
});

const SignInPage = () => {
     const [loading, setLoading] = useState(false);

     const handleSubmit = useCallback(async (values: { email: string }) => {
          setLoading(true); // Start loading
          try {
               await signIn("email", { email: values.email, redirect: true, callbackUrl: "/" });
          } catch (error) {
               console.error("Error during sign-in:", error);
          } finally {
               const timeOut = setTimeout(() => {

                    setLoading(false); // Stop loading
               }, 2000);
               clearTimeout(timeOut);
          }
     }, []);

     // Memoize the SignInForm component to prevent unnecessary re-renders
     const SignInForm = useMemo(
          () => (
               <AuthFormBox>
                    <AuthTitle>Ako želite možete se prijaviti.</AuthTitle>
                    <AuthText theme={theme}>Ako ne, možete nastaviti kao gost.</AuthText>
                    <Formik
                         initialValues={{ email: "" }}
                         onSubmit={handleSubmit}
                         validationSchema={userEmailSchema}
                    >
                         {(formik) => (
                              <Form
                                   style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-around",
                                        alignItems: "center",
                                        gap: "30px",
                                   }}
                              >
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
                                        sx={{ width: "300px" }}
                                   />
                                   <AuthButton
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        type="submit"
                                        loading={loading} // Ensure this prop is set correctly
                                   >
                                        Prijava
                                   </AuthButton>
                              </Form>
                         )}
                    </Formik>
                    <Box>
                         <AuthText theme={theme}>Nemate nalog?</AuthText>
                         <AuthButton href="/registracija" disabled={loading}>
                              Registrujte se
                         </AuthButton>
                    </Box>
               </AuthFormBox>
          ),
          [handleSubmit, loading] // Only re-render when handleSubmit or loading changes
     );

     return (
          <ReCaptchaProvider reCaptchaKey={process.env.GOOGLE_CAPTCHA_SITE_KEY} useEnterprise>
               <DynamicThemeProvider theme={theme}>
                    <Seo
                         title={"Greska prilikom prijave"}
                         description={"Greska prilikom prijave"}
                         url={"https://www.apoteka-dar.rs/"}
                    />
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
                                        {SignInForm}
                                   </AuthBox>
                                   <SearchBox />
                                   <AppDrawer isScreenToMedium={false} />
                              </UIProvider>
                         </Stack>
                    </Container>
               </DynamicThemeProvider>
          </ReCaptchaProvider>
     );
};

export default SignInPage;
