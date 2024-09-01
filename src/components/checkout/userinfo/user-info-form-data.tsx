import React, { FunctionComponent, useState } from 'react';
import { Container, Grid, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import dynamic from 'next/dynamic';
import { useDispatch, useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';
import sweetalert2 from 'sweetalert2';
import { clearUserForm, submitUserForm } from '@/store/checkout/user-info-form.slice';
import { IUserFormProps, IUserForm } from '../../../interfaces/checkout/user-form-values.interface';
import { userFormSchema } from '@/schemas/user-form.schema';
import { CheckoutNextPrevButton, ClearFormButton, PaymentOptionRadio } from '@/styles/checkout/userinfo';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import DeleteIcon from '@mui/icons-material/Delete';
import LoadingWheel from '@/components/loading/loading';
import Cart from '@/components/cart/cart';
import useDialogModal from '@/hooks/useDialogModal';
import EmailAndAccountCreation from './user-infoform-data-email'; // Import the new component

const UserInfoFormData: FunctionComponent<IUserFormProps> = (props: IUserFormProps) => {
     const theme = useTheme();
     const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"));
     const [CartDialog, showCartDialog] = useDialogModal(Cart);
     const userFormSelector = useSelector((state: any) => ({ ...state.persistReduce.userInfoFormSliceReducer }));
     const session = useSession();
     const [nextEnabled, setNextEnabled] = useState(false);
     const dispatch = useDispatch();

     const initialUserFormValues: IUserForm = {
          name: userFormSelector.name,
          streetAddress: userFormSelector.streetAddress,
          phoneNumber: userFormSelector.phoneNumber,
          city: userFormSelector.city,
          provinceState: userFormSelector.provinceState,
          country: userFormSelector.country,
          zipPostalCode: userFormSelector.zipPostalCode,
          image: userFormSelector.image,
          email: userFormSelector.email,
          shouldCreateAccount: false,
          emailVerified: null
     };

     const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
          loading: () => <LoadingWheel />,
          ssr: false
     });

     const handleSubmit = (values: any) => {
          dispatch(submitUserForm(values));
          props.tabIndex === 0 ? props.setTab?.(1) : null;

          if (values.shouldCreateAccount) {
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
                              });
                         } else if (response.status === 200) {
                              sweetalert2.fire({
                                   title: 'Poslat Vam je email za verifikaciju!',
                                   text: 'Molimo Vas da proverite Vaš inbox, i potvrdite Vaš email!',
                                   icon: 'success',
                                   showConfirmButton: true,
                                   confirmButtonText: 'U redu',
                              });
                         }
                    });
               } catch (error) {
                    console.error('Error:', error);
               }
          }
     };

     return (
          <DynamicThemeProvider theme={theme}>
               <Container disableGutters maxWidth="md">
                    <Formik
                         validateOnMount
                         initialValues={initialUserFormValues}
                         onSubmit={handleSubmit}
                         validationSchema={userFormSchema}
                    >
                         {formik => (
                              <Form>
                                   <Typography variant="h5" component="legend" gutterBottom>
                                        Adresa za dostavu
                                   </Typography>
                                   <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                             <Field
                                                  as={TextField}
                                                  label="Ime i prezime"
                                                  name="name"
                                                  value={formik.values.name}
                                                  onChange={formik.handleChange('name')}
                                                  onBlur={() => formik.setFieldTouched('name', true)}
                                                  variant="outlined"
                                                  error={formik.touched.name && !!formik.errors.name}
                                                  helperText={formik.touched.name && formik.errors.name}
                                                  fullWidth
                                             />
                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                             <Field
                                                  as={TextField}
                                                  label="Broj telefona"
                                                  name="phoneNumber"
                                                  value={formik.values.phoneNumber}
                                                  onChange={formik.handleChange('phoneNumber')}
                                                  onBlur={() => formik.setFieldTouched('phoneNumber', true)}
                                                  variant="outlined"
                                                  error={formik.touched.phoneNumber && !!formik.errors.phoneNumber}
                                                  helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                                                  fullWidth
                                             />
                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                             <Field
                                                  as={TextField}
                                                  label="Adresa"
                                                  name="streetAddress"
                                                  value={formik.values.streetAddress}
                                                  onChange={formik.handleChange('streetAddress')}
                                                  onBlur={() => formik.setFieldTouched('streetAddress', true)}
                                                  variant="outlined"
                                                  error={formik.touched.streetAddress && !!formik.errors.streetAddress}
                                                  helperText={formik.touched.streetAddress && formik.errors.streetAddress}
                                                  fullWidth
                                             />
                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                             <Field
                                                  as={TextField}
                                                  label="Grad"
                                                  name="city"
                                                  value={formik.values.city}
                                                  onChange={formik.handleChange('city')}
                                                  onBlur={() => formik.setFieldTouched('city', true)}
                                                  variant="outlined"
                                                  error={formik.touched.city && !!formik.errors.city}
                                                  helperText={formik.touched.city && formik.errors.city}
                                                  fullWidth
                                             />
                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                             <Field
                                                  as={TextField}
                                                  label="Region"
                                                  name="provinceState"
                                                  value={formik.values.provinceState}
                                                  onChange={formik.handleChange('provinceState')}
                                                  onBlur={() => formik.setFieldTouched('provinceState', true)}
                                                  variant="outlined"
                                                  error={formik.touched.provinceState && !!formik.errors.provinceState}
                                                  helperText={formik.touched.provinceState && formik.errors.provinceState}
                                                  fullWidth
                                             />
                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                             <Field
                                                  as={TextField}
                                                  label="Država"
                                                  name="country"
                                                  value={formik.values.country}
                                                  onChange={formik.handleChange('country')}
                                                  onBlur={() => formik.setFieldTouched('country', true)}
                                                  variant="outlined"
                                                  error={formik.touched.country && !!formik.errors.country}
                                                  helperText={formik.touched.country && formik.errors.country}
                                                  fullWidth
                                             />
                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                             <Field
                                                  as={TextField}
                                                  label="Poštanski broj"
                                                  name="zipPostalCode"
                                                  value={formik.values.zipPostalCode}
                                                  onChange={formik.handleChange('zipPostalCode')}
                                                  onBlur={() => formik.setFieldTouched('zipPostalCode', true)}
                                                  variant="outlined"
                                                  error={formik.touched.zipPostalCode && !!formik.errors.zipPostalCode}
                                                  helperText={formik.touched.zipPostalCode && formik.errors.zipPostalCode}
                                                  fullWidth
                                             />
                                        </Grid>
                                        <EmailAndAccountCreation />
                                        <PaymentOptionRadio theme={theme} >
                                             <ClearFormButton
                                                  endIcon={<DeleteIcon />}
                                                  type='reset'
                                                  onClick={() => {
                                                       formik.validateForm().then(() => {
                                                            // formik.setFieldTouched('email', true);
                                                            formik.setFieldTouched('name', true);
                                                            formik.setFieldTouched('phoneNumber', true);
                                                            formik.setFieldTouched('streetAddress', true);
                                                            formik.setFieldTouched('city', true);
                                                            formik.setFieldTouched('country', true);
                                                            formik.setFieldTouched('zipPostalCode', true);

                                                            dispatch(clearUserForm());
                                                       });
                                                  }}
                                             >
                                                  Obriši
                                             </ClearFormButton>
                                             <CheckoutNextPrevButton
                                                  sx={{ maxWidth: '200px' }}
                                                  // startIcon={<NavigateBeforeIcon />}
                                                  onClick={() => showCartDialog()}>
                                                  Proveri korpu
                                             </CheckoutNextPrevButton>
                                             <CheckoutNextPrevButton
                                                  onClick={() => handleSubmit(formik.values)}
                                                  endIcon={<NavigateNextIcon />}
                                                  disabled={
                                                       session.status === 'authenticated'
                                                            ? // If session is authenticated, disable if there are any errors except email errors
                                                            Object.keys(formik.errors).some(
                                                                 (key) => key !== 'email'
                                                            )
                                                            : // If session is not authenticated, disable if there are any errors except the specific email error
                                                            Object.keys(formik.errors).some(
                                                                 (key) => formik.errors.email !== 'Ovaj email je već registrovan!'
                                                            )
                                                  }
                                             >
                                                  Dalje
                                             </CheckoutNextPrevButton>

                                        </PaymentOptionRadio>
                                   </Grid>
                              </Form>
                         )}
                    </Formik>
               </Container>
               <CartDialog />
          </DynamicThemeProvider>
     );
};

export default UserInfoFormData;
