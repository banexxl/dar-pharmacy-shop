import { CircularProgress, Container, FormControlLabel, Grid, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Form, Formik, FormikContext, useFormikContext } from 'formik';
import React, { FunctionComponent, use, useState } from 'react';
import { IUserFormProps, IUserForm } from '../../../interfaces/checkout/user-form-values.interface';
import { userFormSchema } from '@/schemas/user-form.schema';
import { clearUserForm, submitUserForm } from '@/store/checkout/user-info-form.slice'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { PaymentOptionRadio, ShouldCreateAccountCheckBox } from '@/styles/checkout/userinfo';
import { CheckoutNextPrevButton, ClearFormButton } from '@/styles/checkout/userinfo'
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import dynamic from 'next/dynamic';
import LoadingWheel from '@/components/loading/loading';
import { useSelector } from "react-redux";
import useDialogModal from '@/hooks/useDialogModal';
import InputAdornment from '@mui/material/InputAdornment';
import Cart from '@/components/cart/cart';
import { useSession } from 'next-auth/react';
import sweetalert2 from 'sweetalert2';


const UserInfoFormData: FunctionComponent<IUserFormProps> = (props: IUserFormProps) => {

     const theme = useTheme();
     const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"))
     const [CartDialog, showCartDialog, closeCartDialog] = useDialogModal(Cart)
     const userFormSelector = useSelector((state: any) => ({ ...state.persistReduce.userInfoFormSliceReducer }))
     const session = useSession()
     const dispatch = useDispatch()
     const [loading, setLoading] = useState(false)


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
     })

     const handleSubmit = (values: any) => {

          dispatch(submitUserForm(values))
          props.tabIndex === 0 ? props.setTab?.(1) : null

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
                                   icon: 'warning',
                                   showConfirmButton: false,
                                   timer: 1500
                              })
                         } else if (response.status === 200) {
                              sweetalert2.fire({
                                   title: 'Poslat Vam je email za verifikaciju!',
                                   icon: 'success',
                                   showConfirmButton: false,
                                   timer: 1500
                              })
                         }
                    })

               } catch (error) {
                    console.error('Error:', error)
               }
          }
     }

     const onRegisterAccountCheck = async (email: string) => {
          const response = await fetch('/api/email/check-if-email-exists', {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json',
               },
               body: JSON.stringify({ email }),
          });

          if (response.status === 200) {
               // Email already registered
               return true;
          } else if (response.status === 202) {
               // Email available
               return false;
          } else {
               return null;
          }
     }

     return (
          <DynamicThemeProvider theme={theme}>
               <Container disableGutters maxWidth="md">

                    <Formik initialValues={initialUserFormValues} onSubmit={(values: IUserForm) => handleSubmit(values)} validationSchema={userFormSchema}>
                         {
                              formik => (
                                   <Form>
                                        <Typography variant="h5" component="legend" gutterBottom>
                                             Adresa za dostavu
                                        </Typography>
                                        <Typography>
                                             {JSON.stringify(formik.errors)}
                                        </Typography>
                                        <Grid container spacing={2}>
                                             <Grid item xs={12} sm={6}>
                                                  <TextField
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
                                             </Grid>
                                             <Grid item xs={12} sm={6}>
                                                  <TextField
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
                                             </Grid>
                                             <Grid item xs={12} sm={6}>
                                                  <TextField
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
                                             </Grid>
                                             <Grid item xs={12} sm={6}>
                                                  <TextField
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
                                             </Grid>
                                             <Grid item xs={12} sm={6}>
                                                  <TextField
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
                                             </Grid>
                                             <Grid item xs={12} sm={6}>
                                                  <TextField
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
                                             </Grid>

                                             <Grid item xs={12} sm={6}>
                                                  <TextField
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
                                             </Grid>

                                             {/* <UserInfoFormEmail formik={formik} session={session} /> */}
                                             <Grid item xs={12} sm={6}>

                                                  <TextField
                                                       value={session.data ? session.data?.user!.email : formik.values.email}
                                                       disabled={session.data ? true : false}
                                                       label="Email"
                                                       name="email"
                                                       variant="outlined"
                                                       onBlur={async (e: any) => {
                                                            formik.setFieldValue('email', e.target.value);
                                                            console.log('email', formik.values.email);
                                                            console.log('session', session.data);

                                                            if (e.target.value) {
                                                                 const emailExists = await onRegisterAccountCheck(e.target.value);
                                                                 console.log('shouldCreateAccount', formik.values.shouldCreateAccount);

                                                                 if (emailExists === true && formik.values.shouldCreateAccount) {
                                                                      console.log('emailExists', emailExists);

                                                                      formik.setFieldTouched('email', true); // Mark email as touched
                                                                      formik.setFieldError('email', 'Email već postoji!');
                                                                      // formik.validateForm();
                                                                 } else {
                                                                      formik.validateForm();
                                                                 }
                                                            }
                                                       }}
                                                       error={formik.touched?.email && !!formik.errors?.email}
                                                       helperText={formik.touched?.email && formik.errors?.email}
                                                       onChange={formik.handleChange('email')}
                                                       fullWidth
                                                  />
                                             </Grid>


                                             {!session.data && (
                                                  <Grid item xs={12} sm={6}>
                                                       <FormControlLabel
                                                            sx={{ marginBottom: '10px', width: '100%' }}
                                                            control={
                                                                 <ShouldCreateAccountCheckBox
                                                                      checked={formik.errors.email ? false : formik.values.shouldCreateAccount}
                                                                      onChange={async (e: any) => {
                                                                           formik.setFieldValue('shouldCreateAccount', e.target.checked);

                                                                           if (e.target.checked && formik.values.email) {
                                                                                await onRegisterAccountCheck(formik.values.email).then((res) => {
                                                                                     if (res === false) {
                                                                                          formik.setErrors({ email: 'Email već postoji!' });
                                                                                          // formik.setFieldTouched('email', true);
                                                                                          formik.validateForm();

                                                                                     } else {
                                                                                          formik.validateForm();
                                                                                     }
                                                                                })
                                                                           }
                                                                      }}
                                                                      name={"shouldCreateAccount"}
                                                                      color="primary"
                                                                      disabled={formik.values.email === '' || formik.errors.email ? true : false}
                                                                 />
                                                            }
                                                            label={
                                                                 <Typography sx={{ display: 'inline', textAlign: 'justify', color: 'black' }}>
                                                                      Kreiraj nalog sa navedenim podacima...
                                                                 </Typography>
                                                            }
                                                       />
                                                  </Grid>
                                             )}

                                             <PaymentOptionRadio theme={theme} >
                                                  <ClearFormButton
                                                       endIcon={<DeleteIcon />}
                                                       type='reset'
                                                       onClick={() => {
                                                            formik.handleReset(), dispatch(clearUserForm())
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

                                                  <CheckoutNextPrevButton onClick={() => handleSubmit(formik.values)} endIcon={< NavigateNextIcon />} disabled={!formik.isValid}>
                                                       Dalje
                                                  </CheckoutNextPrevButton>
                                             </PaymentOptionRadio>
                                        </Grid>
                                   </Form>
                              )
                         }
                    </Formik>
               </Container>
               <CartDialog />
          </DynamicThemeProvider >
     );
};

export default UserInfoFormData

