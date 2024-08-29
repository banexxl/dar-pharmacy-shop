import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Box, Button, Container, Stack, TextField, Typography } from "@mui/material";
import { UIProvider } from "@/context/ui/ui.context";
import { useRouter } from "next/router";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import DeleteIcon from '@mui/icons-material/Delete';
import { ReCaptchaProvider } from "next-recaptcha-v3";
import LoadingWheel from "@/components/loading/loading";
import dynamic from "next/dynamic";
import theme, { Colors } from "@/styles/theme";
import { Seo } from "@/components/seo";
import { useSession } from "next-auth/react";
import SearchBox from "@/components/search/search";
import AppDrawer from "@/components/navbar/drawer/drawer";
import { RegisterFormBox } from "@/styles/register";
import { CheckoutNextPrevButton, ClearFormButton, PaymentOptionRadio } from "@/styles/checkout/userinfo";
import { IUserForm } from "@/interfaces/checkout/user-form-values.interface";
import { userDataFormSchema } from "@/schemas/user-form.schema";
import sweetalert2 from "sweetalert2";

const UserUpdatePage = () => {
     const [loading, setLoading] = useState(false);
     const router = useRouter();
     const session = useSession()
     const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
          loading: () => <LoadingWheel />,
          ssr: false,
     });

     const handleSubmit = (values: any) => {

          // dispatch(submitUserForm(values))

          try {
               fetch('/api/register', {
                    method: 'PUT',
                    headers: {
                         'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
               }).then(response => {
                    if (response.status === 409) {
                         sweetalert2.fire({
                              title: 'Ne uspešna izmena podataka!',
                              text: 'Molimo Vas da probate opet, ili nas kontaktirajte za pomoć!',
                              icon: 'warning',
                              showConfirmButton: true,
                              confirmButtonText: 'U redu',
                              confirmButtonColor: Colors.primary.main
                         })
                    } else if (response.status === 200) {
                         sweetalert2.fire({
                              title: 'Uspešna izmena podataka!',
                              icon: 'success',
                              showConfirmButton: true,
                              confirmButtonText: 'U redu',
                              confirmButtonColor: Colors.primary.main,
                              didClose: () => {
                                   router.push('/')
                              }
                         })
                    } else if (response.status === 400) {
                         sweetalert2.fire({
                              title: 'Došlo je do greške!',
                              text: 'Molimo Vas da proverite unete podatke, i pokušajte ponovo!',
                              icon: 'error',
                              showConfirmButton: true,
                              confirmButtonText: 'U redu',
                              confirmButtonColor: Colors.primary.main
                         })
                    }
               })

          } catch (error) {
               console.error('Error:', error)
          }

     }
     const initialUserFormValues: IUserForm = {
          name: session.data ? session.data?.user!.name! : '',
          phoneNumber: '',
          streetAddress: '',
          city: '',
          provinceState: '',
          country: '',
          zipPostalCode: '',
          email: session.data ? session.data?.user?.email! : '',
     }

     return (
          <ReCaptchaProvider reCaptchaKey={process.env.GOOGLE_CAPTCHA_SITE_KEY} useEnterprise>
               <DynamicThemeProvider theme={theme}>
                    <Seo title={'Registracija'} description={'Registracija'} url={'https://www.apoteka-dar.rs/'} />
                    <Container
                         disableGutters
                         maxWidth="lg"
                         sx={{
                              background: "#fff",
                         }}
                    >
                         <Stack>
                              <UIProvider>
                                   <RegisterFormBox>
                                        <Formik isInitialValid={false} initialValues={initialUserFormValues} onSubmit={(values: IUserForm) => handleSubmit(values)} validationSchema={userDataFormSchema}>
                                             {
                                                  formik => (
                                                       <Form>
                                                            <Typography variant="h5" component="legend" sx={{ marginBottom: '50px' }} >
                                                                 Molimo Vas da popunite podatke za izmenu podataka
                                                            </Typography>
                                                            <Container
                                                                 sx={{
                                                                      display: 'flex',
                                                                      flexDirection: 'column',
                                                                      gap: '20px',
                                                                      pb: '50px'
                                                                 }}
                                                            >
                                                                 <Box>
                                                                      <Field
                                                                           as={TextField}
                                                                           label="Ime i prezime"
                                                                           name={'name'}
                                                                           value={formik.values.name}
                                                                           onChange={formik.handleChange('name')}
                                                                           onBlur={() => formik.setFieldTouched('name', true)}
                                                                           variant="outlined"
                                                                           error={formik.touched.name && !!formik.errors.name}
                                                                           helperText={formik.touched.name && formik.errors.name}
                                                                           fullWidth
                                                                      />
                                                                 </Box>
                                                                 <Box>
                                                                      <Field
                                                                           as={TextField}
                                                                           value={formik.values.phoneNumber}
                                                                           onChange={formik.handleChange('phoneNumber')}
                                                                           label={"Broj telefona"}
                                                                           name={'phoneNumber'}
                                                                           onBlur={() => formik.setFieldTouched('phoneNumber', true)}
                                                                           variant="outlined"
                                                                           error={formik.touched?.phoneNumber && !!formik.errors?.phoneNumber}
                                                                           helperText={formik.touched?.phoneNumber && formik.errors?.phoneNumber}
                                                                           fullWidth
                                                                      />
                                                                 </Box>
                                                                 <Box>
                                                                      <Field
                                                                           as={TextField}
                                                                           value={formik.values.streetAddress}
                                                                           onChange={formik.handleChange('streetAddress')}
                                                                           onBlur={() => formik.setFieldTouched('streetAddress', true)}
                                                                           label={"Adresa"}
                                                                           name={'streetAddress'}
                                                                           variant="outlined"
                                                                           error={formik.touched?.streetAddress && !!formik.errors?.streetAddress}
                                                                           helperText={formik.touched?.streetAddress && formik.errors?.streetAddress}
                                                                           fullWidth
                                                                      />
                                                                 </Box>
                                                                 <Box>
                                                                      <Field
                                                                           as={TextField}
                                                                           value={formik.values.city}
                                                                           onChange={formik.handleChange('city')}
                                                                           onBlur={() => formik.setFieldTouched('city', true)}
                                                                           label={"Grad"}
                                                                           name={'city'}
                                                                           variant="outlined"
                                                                           error={formik.touched?.city && !!formik.errors?.city}
                                                                           helperText={formik.touched?.city && formik.errors?.city}
                                                                           fullWidth
                                                                      />
                                                                 </Box>
                                                                 <Box>
                                                                      <Field
                                                                           as={TextField}
                                                                           value={formik.values.provinceState}
                                                                           onChange={formik.handleChange('provinceState')}
                                                                           onBlur={() => formik.setFieldTouched('provinceState', true)}
                                                                           label={"Region"}
                                                                           name={'provinceState'}
                                                                           variant="outlined"
                                                                           error={formik.touched?.provinceState && !!formik.errors?.provinceState}
                                                                           helperText={formik.touched?.provinceState && formik.errors?.provinceState}
                                                                           fullWidth
                                                                      />
                                                                 </Box>
                                                                 <Box>
                                                                      <Field
                                                                           as={TextField}
                                                                           value={formik.values.country}
                                                                           onChange={formik.handleChange('country')}
                                                                           onBlur={() => formik.setFieldTouched('country', true)}
                                                                           label={"Država"}
                                                                           name={'country'}
                                                                           variant="outlined"
                                                                           error={formik.touched?.country && !!formik.errors?.country}
                                                                           helperText={formik.touched?.country && formik.errors?.country}
                                                                           fullWidth
                                                                      />
                                                                 </Box>
                                                                 <Box>
                                                                      <Field
                                                                           as={TextField}
                                                                           value={formik.values.zipPostalCode}
                                                                           onChange={formik.handleChange('zipPostalCode')}
                                                                           onBlur={() => formik.setFieldTouched('zipPostalCode', true)}
                                                                           label={"Poštanski broj"}
                                                                           name={'zipPostalCode'}
                                                                           variant="outlined"
                                                                           error={formik.touched?.zipPostalCode && !!formik.errors?.zipPostalCode}
                                                                           helperText={formik.touched?.zipPostalCode && formik.errors?.zipPostalCode}
                                                                           fullWidth
                                                                      />
                                                                 </Box>

                                                                 <Box>
                                                                      <Field
                                                                           as={TextField}
                                                                           value={session.data ? session.data?.user!.email : formik.values.email}
                                                                           disabled={session.data ? true : false}
                                                                           label="Email"
                                                                           name="email"
                                                                           variant="outlined"
                                                                           onBlur={formik.handleBlur}
                                                                           error={formik.touched?.email && !!formik.errors?.email}
                                                                           helperText={formik.touched?.email && formik.errors?.email}
                                                                           onChange={formik.handleChange('email')}
                                                                           fullWidth
                                                                      />
                                                                 </Box>

                                                                 <PaymentOptionRadio theme={theme} sx={{ marginBottom: '50px', width: '50%' }}>
                                                                      <ClearFormButton
                                                                           endIcon={<DeleteIcon />}
                                                                           type='reset'
                                                                           onClick={formik.handleReset}
                                                                      >
                                                                           Obriši
                                                                      </ClearFormButton>
                                                                      <CheckoutNextPrevButton
                                                                           onClick={() => handleSubmit(formik.values)}
                                                                           endIcon={<NavigateNextIcon />}
                                                                           disabled={Object.keys(formik.errors).length > 0 || !formik.isValid || formik.isSubmitting || loading}
                                                                      >
                                                                           Izmeni
                                                                      </CheckoutNextPrevButton>

                                                                 </PaymentOptionRadio>
                                                            </Container>
                                                       </Form>
                                                  )
                                             }
                                        </Formik>
                                   </RegisterFormBox>
                                   <SearchBox />
                                   <AppDrawer isScreenToMedium={false} />
                              </UIProvider>
                         </Stack>
                    </Container>
               </DynamicThemeProvider >
          </ReCaptchaProvider >
     );
};

export default UserUpdatePage;
