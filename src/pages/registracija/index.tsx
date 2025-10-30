import { UIProvider } from '@/context/ui/ui.context';
import { Colors } from '@/styles/theme';
import { Box, Container, Grid, Stack, TextField, Typography, Button, FormControlLabel, Checkbox } from '@mui/material';
import SearchBox from '@/components/search/search';
import AppDrawer from '@/components/navbar/drawer/drawer';
import { ReCaptchaProvider } from 'next-recaptcha-v3';
import { Formik, Form, Field } from 'formik';
import { initialUserFormValues, IUserForm } from '@/interfaces/checkout/user-form-values.interface';
import { userFormSchema } from '@/schemas/user-form.schema';
import { Seo } from '@/components/seo';
import sweetalert2 from 'sweetalert2';

const RegisterPage = () => {
     const handleSubmit = async (values: IUserForm) => {
          try {
               const response = await fetch('/api/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(values),
               });
               if (response.status === 409) {
                    await sweetalert2.fire({
                         title: 'Email je već registrovan',
                         icon: 'warning',
                         confirmButtonText: 'U redu',
                         confirmButtonColor: Colors.primary.main,
                    });
               } else if (response.status === 200) {
                    await sweetalert2.fire({
                         title: 'Poslat je email za verifikaciju',
                         text: 'Proverite inbox i potvrdite svoju email adresu.',
                         icon: 'success',
                         confirmButtonText: 'U redu',
                         confirmButtonColor: Colors.primary.main,
                    });
               } else {
                    await sweetalert2.fire({
                         title: 'Došlo je do greške',
                         text: 'Pokušajte ponovo kasnije.',
                         icon: 'error',
                         confirmButtonText: 'U redu',
                         confirmButtonColor: Colors.primary.main,
                    });
               }
          } catch (err) {
               await sweetalert2.fire({
                    title: 'Greška',
                    text: 'Pokušajte ponovo kasnije.',
                    icon: 'error',
                    confirmButtonText: 'U redu',
                    confirmButtonColor: Colors.primary.main,
               });
          }
     };

     return (
          <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} useEnterprise>
               <Seo title={'Registracija'} description={'Registracija korisnika'} url={'https://www.apoteka-dar.rs/'} />
               <Container maxWidth="xl" sx={{ background: '#fff' }}>
                    <Stack>
                         <UIProvider>
                              <Box className="register-form-box" sx={{ mt: 8, mb: 6 }}>
                                   <Typography variant="h4" sx={{ mb: 3, fontWeight: 700, textAlign: 'center', color: 'primary.main' }}>
                                        Registracija korisnika
                                   </Typography>
                                   <Formik initialValues={initialUserFormValues} validationSchema={userFormSchema()} onSubmit={handleSubmit}>
                                        {(formik) => (
                                             <Form>
                                                  <Grid container spacing={2} sx={{ maxWidth: 900, mx: 'auto' }}>
                                                       <Grid item xs={12} sm={6}>
                                                            <Field as={TextField} label="Ime i prezime" name="name" fullWidth variant="outlined" error={formik.touched.name && !!formik.errors.name} helperText={formik.touched.name && formik.errors.name} />
                                                       </Grid>
                                                       <Grid item xs={12} sm={6}>
                                                            <Field as={TextField} label="Telefon" name="phoneNumber" fullWidth variant="outlined" error={formik.touched.phoneNumber && !!formik.errors.phoneNumber} helperText={formik.touched.phoneNumber && formik.errors.phoneNumber} />
                                                       </Grid>
                                                       <Grid item xs={12}>
                                                            <Field as={TextField} label="Adresa" name="streetAddress" fullWidth variant="outlined" error={formik.touched.streetAddress && !!formik.errors.streetAddress} helperText={formik.touched.streetAddress && formik.errors.streetAddress} />
                                                       </Grid>
                                                       <Grid item xs={12} sm={6}>
                                                            <Field as={TextField} label="Grad" name="city" fullWidth variant="outlined" error={formik.touched.city && !!formik.errors.city} helperText={formik.touched.city && formik.errors.city} />
                                                       </Grid>
                                                       <Grid item xs={12} sm={6}>
                                                            <Field as={TextField} label="Region" name="provinceState" fullWidth variant="outlined" error={formik.touched.provinceState && !!formik.errors.provinceState} helperText={formik.touched.provinceState && formik.errors.provinceState} />
                                                       </Grid>
                                                       <Grid item xs={12} sm={6}>
                                                            <Field as={TextField} label="Država" name="country" fullWidth variant="outlined" error={formik.touched.country && !!formik.errors.country} helperText={formik.touched.country && formik.errors.country} />
                                                       </Grid>
                                                       <Grid item xs={12} sm={6}>
                                                            <Field as={TextField} label="Poštanski broj" name="zipPostalCode" fullWidth variant="outlined" error={formik.touched.zipPostalCode && !!formik.errors.zipPostalCode} helperText={formik.touched.zipPostalCode && formik.errors.zipPostalCode} />
                                                       </Grid>
                                                       <Grid item xs={12}>
                                                            <Field as={TextField} label="Email" name="email" fullWidth variant="outlined" error={formik.touched.email && !!formik.errors.email} helperText={formik.touched.email && formik.errors.email} />
                                                       </Grid>
                                                       <Grid item xs={12}>
                                                            <FormControlLabel control={<Checkbox checked={formik.values.shouldCreateAccount || false} onChange={(_, checked) => formik.setFieldValue('shouldCreateAccount', checked)} />} label="Kreiraj nalog (opciono)" />
                                                       </Grid>
                                                       <Grid item xs={12} sx={{ textAlign: 'center' }}>
                                                            <Button type="reset" variant="outlined" sx={{ mr: 2 }} onClick={() => formik.resetForm()}>Obriši</Button>
                                                            <Button type="submit" variant="contained" disabled={!formik.isValid || formik.isSubmitting}>Registruj se</Button>
                                                       </Grid>
                                                  </Grid>
                                             </Form>
                                        )}
                                   </Formik>
                              </Box>
                              <SearchBox />

                         </UIProvider>
                    </Stack>
               </Container>
          </ReCaptchaProvider>
     );
};

export default RegisterPage;

