import React, { FunctionComponent } from 'react';
import { Button, Container, Grid, TextField, Tooltip, useTheme } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '@/lib/auth/hooks';
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
     const { isAuthenticated } = useAuth();
     const dispatch = useDispatch();

     const initialUserFormValues: IUserForm = {
          full_name: userFormSelector.full_name || userFormSelector.name || '',
          street_address: userFormSelector.street_address || userFormSelector.street_address || '',
          phone_number: userFormSelector.phone_number || userFormSelector.phone_number || '',
          city: userFormSelector.city || '',
          province_state: userFormSelector.province_state || userFormSelector.province_state || '',
          country: userFormSelector.country || '',
          zip_postal_code: userFormSelector.zip_postal_code || userFormSelector.zip_postal_code || '',
          email: userFormSelector.email || '',
          should_create_account: false,
     };

     const handleSubmit = (values: any) => {
          dispatch(submitUserForm(values));
          props.tabIndex === 0 ? props.setTab?.(1) : null;

          if (values.should_create_account) {
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
                                                  name="full_name"
                                                  value={formik.values.full_name}
                                                  onChange={formik.handleChange('full_name')}
                                                  onBlur={() => formik.setFieldTouched('full_name', true)}
                                                  variant="outlined"
                                                  error={formik.touched.full_name && !!formik.errors.full_name}
                                                  helperText={formik.touched.full_name && formik.errors.full_name}
                                                  fullWidth
                                             />
                                        </Grid>

                                        <Grid size={{ xs: 12, sm: 6 }} sx={{ minWidth: 0 }}>
                                             <Field
                                                  as={TextField}
                                                  label="Broj telefona"
                                                  name="phone_number"
                                                  value={formik.values.phone_number}
                                                  onChange={formik.handleChange('phone_number')}
                                                  onBlur={() => formik.setFieldTouched('phone_number', true)}
                                                  variant="outlined"
                                                  error={formik.touched.phone_number && !!formik.errors.phone_number}
                                                  helperText={formik.touched.phone_number && formik.errors.phone_number}
                                                  fullWidth
                                             />
                                        </Grid>

                                        <Grid size={{ xs: 12, sm: 6 }} sx={{ minWidth: 0 }}>
                                             <Field
                                                  as={TextField}
                                                  label="Adresa"
                                                  name="street_address"
                                                  value={formik.values.street_address}
                                                  onChange={formik.handleChange('street_address')}
                                                  onBlur={() => formik.setFieldTouched('street_address', true)}
                                                  variant="outlined"
                                                  error={formik.touched.street_address && !!formik.errors.street_address}
                                                  helperText={formik.touched.street_address && formik.errors.street_address}
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
                                                  name="province_state"
                                                  value={formik.values.province_state}
                                                  onChange={formik.handleChange('province_state')}
                                                  onBlur={() => formik.setFieldTouched('province_state', true)}
                                                  variant="outlined"
                                                  error={formik.touched.province_state && !!formik.errors.province_state}
                                                  helperText={formik.touched.province_state && formik.errors.province_state}
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
                                                  name="zip_postal_code"
                                                  value={formik.values.zip_postal_code}
                                                  onChange={formik.handleChange('zip_postal_code')}
                                                  onBlur={() => formik.setFieldTouched('zip_postal_code', true)}
                                                  variant="outlined"
                                                  error={formik.touched.zip_postal_code && !!formik.errors.zip_postal_code}
                                                  helperText={formik.touched.zip_postal_code && formik.errors.zip_postal_code}
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
                                                                           isAuthenticated
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
