import React, { FunctionComponent } from 'react';
import { Button, Container, Grid, TextField, Tooltip, useTheme } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';
import { ThemeProvider } from '@mui/system';
import { clearUserForm, submitUserForm } from '@/store/checkout/user-info-form.slice';
import { IUserFormProps, IUserForm } from '../../../interfaces/checkout/user-form-values.interface';
import { userFormSchema } from '@/schemas/user-form.schema';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import DeleteIcon from '@mui/icons-material/Delete';
import Cart from '@/components/cart/cart';
import useDialogModal from '@/hooks/useDialogModal';
import EmailAndAccountCreation from './user-infoform-data-email'; // Import the new component
import { Box } from '@mui/system';
import toast from 'react-hot-toast';

const UserInfoFormData: FunctionComponent<IUserFormProps> = (props: IUserFormProps) => {

     const theme = useTheme();
     const [CartDialog] = useDialogModal(Cart);
     const cart = useSelector((state: any) => state.persistReduce.cartSliceReducer)
     const userFormSelector = useSelector((state: any) => state.persistReduce.userInfoFormSliceReducer);
     const session = useSession();
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
                              toast.error('Ovaj email je ve  registrovan! Molimo Vas da unesete drugi email, ili nastavite kao gost!', {
                                   position: 'top-center',
                                   duration: 3000
                              });
                         } else if (response.status === 200) {
                              toast.success('Poslat Vam je email za verifikaciju! Molimo Vas da proverite Vaš inbox, i potvrdite Vaš email!', {
                                   position: 'top-center',
                                   duration: 3000
                              });
                         }
                    });
               } catch (error) {
                    console.error('Error:', error);
               }
          }
     };

     return (
          <ThemeProvider theme={theme}>
               <Container disableGutters maxWidth="md" sx={{ px: { xs: 1, sm: 0 } }}>
                    <Formik
                         validateOnMount
                         initialValues={initialUserFormValues}
                         onSubmit={handleSubmit}
                         validationSchema={userFormSchema}
                    >
                         {formik => (
                              <Form>
                                   <Grid
                                        container
                                        spacing={{ xs: 1.5, sm: 2 }}
                                        sx={{
                                             width: '100%',
                                             maxWidth: { xs: '100%', md: 760 },
                                             mx: 'auto',
                                             boxSizing: 'border-box',
                                        }}
                                   >
                                        <Grid size={{ xs: 12, sm: 6 }} sx={{ minWidth: 0 }}>
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

                                        <Grid size={{ xs: 12, sm: 6 }} sx={{ minWidth: 0 }}>
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

                                        <Grid size={{ xs: 12, sm: 6 }} sx={{ minWidth: 0 }}>
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

                                        <Grid size={{ xs: 12, sm: 6 }} sx={{ minWidth: 0 }}>
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

                                        <Grid size={{ xs: 12, sm: 6 }} sx={{ minWidth: 0 }}>
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

                                        <Grid size={{ xs: 12, sm: 6 }} sx={{ minWidth: 0 }}>
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

                                        <Grid size={{ xs: 12, sm: 6 }} sx={{ minWidth: 0 }}>
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
                                        <Grid size={{ xs: 12 }}>
                                             <Box sx={{
                                                  display: 'flex',
                                                  flexWrap: 'wrap',
                                                  [theme.breakpoints.down("sm")]: {
                                                       flexDirection: 'column',
                                                       marginBottom: '80px'
                                                  },
                                                  minHeight: '100px',
                                                  alignItems: 'center',
                                                  justifyContent: 'center',
                                                  width: '100%',
                                                  marginTop: '20px',
                                                  gap: 1.5
                                             }}>
                                                  <Button
                                                       className="CheckoutNextPrevButton"
                                                       endIcon={<DeleteIcon />}
                                                       type='reset'
                                                       sx={{ width: { xs: '100%', sm: 'auto' } }}
                                                       onClick={() => {
                                                            dispatch(clearUserForm())
                                                            formik.setValues(initialUserFormValues);
                                                       }}
                                                  >
                                                       Obriši
                                                  </Button>
                                                  <Tooltip title={cart.length <= 0 ? 'Korpa je prazna' : ''}>
                                                       <Box sx={{ width: { xs: '100%', sm: 'auto' } }}>
                                                            <Button
                                                                 className="CheckoutNextPrevButton"
                                                                 sx={{ width: { xs: '100%', sm: 'auto' } }}
                                                                 onClick={() => handleSubmit(formik.values)}
                                                                 endIcon={<NavigateNextIcon />}
                                                                 disabled={
                                                                      cart.length === 0 ||
                                                                      (
                                                                           session.status === 'authenticated'
                                                                                ? Object.keys(formik.errors).some(
                                                                                     (key) =>
                                                                                          key !== 'email' &&
                                                                                          formik.errors[key as keyof IUserForm] !== undefined
                                                                                )
                                                                                : (formik.errors.email !== 'Ovaj email je već registrovan!' &&
                                                                                     formik.errors.email !== undefined) ||
                                                                                Object.keys(formik.errors).some(
                                                                                     (key) =>
                                                                                          key !== 'email' &&
                                                                                          formik.errors[key as keyof IUserForm] !== undefined
                                                                                )
                                                                      )
                                                                 }
                                                            >
                                                                 Dalje
                                                            </Button>
                                                       </Box>
                                                  </Tooltip>
                                             </Box>
                                        </Grid>
                                   </Grid>
                              </Form>
                         )}
                    </Formik>
               </Container>
               <CartDialog />
          </ThemeProvider >
     );
};

export default UserInfoFormData;
