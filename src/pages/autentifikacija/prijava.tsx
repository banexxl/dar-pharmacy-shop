import { UIProvider } from "@/context/ui/ui.context";
import { Box, Container, Stack, TextField, Button, Typography } from "@mui/material";
import SearchBox from "@/components/search/search";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { signIn } from "next-auth/react";
import { Form, Formik } from "formik";
import { userEmailSchema } from "@/schemas/email-form.schema";
import { Seo } from "@/components/seo";
import { useCallback, useMemo, useState } from "react";

// ThemeProvider is applied globally in _app.tsx

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
               <Box className="auth-form-box">
                    <Typography className="auth-title">Ako želite možete se prijaviti.</Typography>
                    <Typography className="auth-text">Ako ne, možete nastaviti kao gost.</Typography>
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
                                   <Button
                                        className="auth-button"
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        type="submit"
                                        disabled={loading} // Ensure this prop is set correctly
                                   >
                                        Prijava
                                   </Button>
                              </Form>
                         )}
                    </Formik>
                    <Box>
                         <Typography className="auth-text">Nemate nalog?</Typography>
                         <Button className="auth-button" href="/registracija" disabled={loading}>
                              Registrujte se
                         </Button>
                    </Box>
               </Box>
          ),
          [handleSubmit, loading] // Only re-render when handleSubmit or loading changes
     );

     return (
          <ReCaptchaProvider reCaptchaKey={process.env.GOOGLE_CAPTCHA_SITE_KEY} useEnterprise>

               <Seo
                    title={"Greska prilikom prijave"}
                    description={"Greska prilikom prijave"}
                    url={"https://www.apoteka-dar.rs/"}
               />
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
                                        Prijava
                                   </Typography>
                                   <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                                        Ako želite, možete se prijaviti. Ako ne, možete nastaviti kao gost.
                                   </Typography>
                                   {SignInForm}
                              </Box>
                              <SearchBox />

                         </UIProvider>
                    </Stack>
               </Container>

          </ReCaptchaProvider>
     );
};

export default SignInPage;
