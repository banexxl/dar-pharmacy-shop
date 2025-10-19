'use client'

import { UIProvider } from '@/context/ui/ui.context'
import theme, { Colors } from '@/styles/theme'
import { Box, Container, Grid, Stack, TextField, Typography, Button } from '@mui/material'
import dynamic from 'next/dynamic'
import LoadingWheel from '../../components/loading/loading'
import AppDrawer from '@/components/navbar/drawer/drawer'
import SearchBox from '@/components/search/search'
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { Field, Form, Formik } from 'formik'
import { initialUserFormValues, IUserForm } from '@/interfaces/checkout/user-form-values.interface'
import { userFormSchema } from '@/schemas/user-form.schema'
import { useSession } from 'next-auth/react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import DeleteIcon from '@mui/icons-material/Delete';
import sweetalert2 from 'sweetalert2'
import { useRouter } from 'next/router'
import { Seo } from '@/components/seo'
import Link from 'next/link'

const RegisterPage = () => {

     const session = useSession()
     const router = useRouter()
     // const dispatch = useDispatch()

     const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
          loading: () => <LoadingWheel />,
          ssr: false
     })

     session.status === 'authenticated' ? router.push('/') : null

     const handleSubmit = (values: any) => {

          // dispatch(submitUserForm(values))

          try {
               fetch('/api/register', {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
               }).then(response => {
                    if (response.status === 409) {
                         sweetalert2.fire({
                              title: 'Ovaj email je već registrovan!',
                              text: 'Molimo Vas da unesete drugi email, ili nastavite kao gost!',
                              icon: 'warning',
                              showConfirmButton: true,
                              confirmButtonText: 'U redu',
                              confirmButtonColor: Colors.primary.main
                         })
                    } else if (response.status === 200) {
                         sweetalert2.fire({
                              title: 'Poslat Vam je email za verifikaciju!',
                              text: 'Molimo Vas da proverite Vaš inbox, i potvrdite Vaš email!',
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
                                   <Box className="register-form-box">
                                        <Formik isInitialValid={false} initialValues={initialUserFormValues} onSubmit={(values: IUserForm) => handleSubmit(values)} validationSchema={userFormSchema}>
                                             {
                                                  formik => (
                                                       <Form >
                                                            <Typography variant="h5" component="legend" sx={{ marginBottom: '50px' }} >
                                                                 Molimo Vas da popunite podatke za registraciju
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
                                                                 {/* <Typography>
                                                                      {JSON.stringify(formik.errors)}
                                                                 </Typography> */}
                                                                 <Box className="payment-option-radio" sx={{ display: 'flex', flexDirection: 'column', marginBottom: '50px', width: '50%' }}>
                                                                      <Box>
                                                                           <Button
                                                                                className="clear-form-button"
                                                                                endIcon={<DeleteIcon />}
                                                                                type='reset'
                                                                                onClick={formik.handleReset}
                                                                           >
                                                                                Obriši
                                                                           </Button>
                                                                           <Button
                                                                                className="checkout-next-prev-button"
                                                                                onClick={() => handleSubmit(formik.values)}
                                                                                endIcon={<NavigateNextIcon />}
                                                                                disabled={Object.keys(formik.errors).length > 0 || !formik.isValid || formik.isSubmitting}
                                                                           >
                                                                                Dalje
                                                                           </Button>
                                                                      </Box>

                                                                      <Typography variant="h5" component="legend" sx={{ mt: '90px', mb: '30px' }} >
                                                                           Imate nalog? <Link rel='canonical' href="/autentifikacija/prijava" style={{
                                                                                textDecoration: 'underline',
                                                                                color: Colors.primary.light
                                                                           }}>Prijavite se</Link>
                                                                      </Typography>
                                                                 </Box>
                                                            </Container>
                                                       </Form>
                                                  )
                                             }
                                        </Formik>
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

export default RegisterPage