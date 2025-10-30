import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import {
     Box,
     Button,
     Container,
     FormControl,
     FormControlLabel,
     Radio,
     RadioGroup,
     Stack,
     TextField,
     Typography,
} from '@mui/material';
import { UIProvider } from '@/context/ui/ui.context';
import { useRouter } from 'next/router';
import { ReCaptchaProvider } from 'next-recaptcha-v3';
import { Seo } from '@/components/seo';
import { useSession } from 'next-auth/react';
import SearchBox from '@/components/search/search';
import { IUserForm } from '@/interfaces/checkout/user-form-values.interface';
import { userDataFormSchema } from '@/schemas/user-form.schema';
import sweetalert2 from 'sweetalert2';
import { Colors } from '@/styles/theme';

const UserUpdatePage = () => {
     const [loading, setLoading] = useState(false);
     const router = useRouter();
     const session = useSession();

     const initialUserFormValues: IUserForm = {
          name: session.data?.user?.name || '',
          phoneNumber: '',
          streetAddress: '',
          city: '',
          provinceState: '',
          country: '',
          zipPostalCode: '',
          email: session.data?.user?.email || '',
          gender: 'male',
     };

     const handleSubmit = async (values: IUserForm) => {
          setLoading(true);
          try {
               const response = await fetch('/api/register', {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(values),
               });
               if (response.status === 200) {
                    await sweetalert2.fire({
                         title: 'Uspešna izmena podataka!',
                         icon: 'success',
                         confirmButtonText: 'U redu',
                         confirmButtonColor: Colors.primary.main,
                    });
                    router.push('/');
               } else if (response.status === 404) {
                    await sweetalert2.fire({
                         title: 'Korisnik nije pronađen!',
                         icon: 'warning',
                         confirmButtonText: 'U redu',
                         confirmButtonColor: Colors.primary.main,
                    });
               } else {
                    await sweetalert2.fire({
                         title: 'Došlo je do greške!',
                         text: 'Proverite unete podatke i pokušajte ponovo.',
                         icon: 'error',
                         confirmButtonText: 'U redu',
                         confirmButtonColor: Colors.primary.main,
                    });
               }
          } catch (err) {
               await sweetalert2.fire({
                    title: 'Greška pri izmeni!',
                    text: 'Pokušajte ponovo kasnije.',
                    icon: 'error',
                    confirmButtonText: 'U redu',
                    confirmButtonColor: Colors.primary.main,
               });
          } finally {
               setLoading(false);
          }
     };

     return (
          <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} useEnterprise>
               <Seo title={'Izmena podataka'} description={'Izmena korisničkih podataka'} url={'https://www.apoteka-dar.rs/'} />
               <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
                    <Stack>
                         <UIProvider>
                              <Box className="register-form-box" sx={{ maxWidth: 900, mx: 'auto', bgcolor: '#fff', p: { xs: 3, md: 4 }, borderRadius: 2, boxShadow: '0 6px 20px rgba(0,0,0,0.08)' }}>
                                   <Typography variant="h4" sx={{ mb: 3, fontWeight: 700, textAlign: 'center' }}>
                                        Izmena korisničkih podataka
                                   </Typography>
                                   <Formik initialValues={initialUserFormValues} validationSchema={userDataFormSchema()} onSubmit={handleSubmit}>
                                        {(formik) => (
                                             <Form>
                                                  <Stack spacing={2} sx={{ maxWidth: 700, mx: 'auto' }}>
                                                       <Field as={TextField} label="Ime i prezime" name="name" variant="outlined" fullWidth error={formik.touched.name && !!formik.errors.name} helperText={formik.touched.name && formik.errors.name} />
                                                       <Field as={TextField} label="Telefon" name="phoneNumber" variant="outlined" fullWidth error={formik.touched.phoneNumber && !!formik.errors.phoneNumber} helperText={formik.touched.phoneNumber && formik.errors.phoneNumber} />
                                                       <Field as={TextField} label="Adresa" name="streetAddress" variant="outlined" fullWidth error={formik.touched.streetAddress && !!formik.errors.streetAddress} helperText={formik.touched.streetAddress && formik.errors.streetAddress} />
                                                       <Field as={TextField} label="Grad" name="city" variant="outlined" fullWidth error={formik.touched.city && !!formik.errors.city} helperText={formik.touched.city && formik.errors.city} />
                                                       <Field as={TextField} label="Region" name="provinceState" variant="outlined" fullWidth error={formik.touched.provinceState && !!formik.errors.provinceState} helperText={formik.touched.provinceState && formik.errors.provinceState} />
                                                       <Field as={TextField} label="Država" name="country" variant="outlined" fullWidth error={formik.touched.country && !!formik.errors.country} helperText={formik.touched.country && formik.errors.country} />
                                                       <Field as={TextField} label="Poštanski broj" name="zipPostalCode" variant="outlined" fullWidth error={formik.touched.zipPostalCode && !!formik.errors.zipPostalCode} helperText={formik.touched.zipPostalCode && formik.errors.zipPostalCode} />
                                                       <TextField label="Email" name="email" value={initialUserFormValues.email} disabled fullWidth />
                                                       <FormControl>
                                                            <RadioGroup row name="gender" value={(formik.values as any).gender as any} onChange={formik.handleChange('gender')}>
                                                                 <FormControlLabel value="male" control={<Radio />} label="Muški" />
                                                                 <FormControlLabel value="female" control={<Radio />} label="Ženski" />
                                                            </RadioGroup>
                                                       </FormControl>
                                                       <Stack direction="row" spacing={2} sx={{ justifyContent: 'center', mt: 2 }}>
                                                            <Button type="reset" variant="outlined" onClick={() => formik.resetForm()} disabled={loading}>Obriši</Button>
                                                            <Button type="submit" variant="contained" disabled={!formik.isValid || formik.isSubmitting || loading}>Sačuvaj</Button>
                                                       </Stack>
                                                  </Stack>
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

export default UserUpdatePage;





