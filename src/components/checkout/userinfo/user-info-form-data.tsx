import { Container, Grid, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Form, Formik, useFormikContext } from 'formik';
import React, { FunctionComponent } from 'react';
import { IUserFormProps, IUserForm } from '../../../interfaces/checkout/user-form-values.interface';
import { userFormSchema } from '@/schemas/user-form.schema';
import { clearUserForm, submitUserForm } from '@/store/checkout/user-info-form.slice'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { PaymentOptionRadio } from '@/styles/checkout/userinfo';
import { CheckoutNextPrevButton, ClearFormButton } from '@/styles/checkout/userinfo'
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import dynamic from 'next/dynamic';
import LoadingWheel from '@/components/loading/loading';
import { useSelector } from "react-redux";
import useDialogModal from '@/hooks/useDialogModal';
import Cart from '@/components/cart/cart';
import { useSession } from 'next-auth/react';
import UserInfoFormEmail from './user-info-form-email';
import sweetalert2 from 'sweetalert2';


const UserInfoFormData: FunctionComponent<IUserFormProps> = (props: IUserFormProps) => {

     const theme = useTheme();
     const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"))
     const userFormSelector = useSelector((state: any) => ({ ...state.persistReduce.userInfoFormSliceReducer }))
     const session = useSession()
     const dispatch = useDispatch()

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

     const [CartDialog, showCartDialog, closeCartDialog] = useDialogModal(Cart)

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
                                        <Grid container spacing={2}>
                                             <Grid item xs={12} sm={6}>
                                                  <TextField
                                                       value={formik.values.name}
                                                       label={"Ime i prezime"}

                                                       name={'name'}
                                                       variant="outlined"
                                                       onChange={formik.handleChange('name')}
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
                                                       label={"Poštanski broj"}
                                                       name={'zipPostalCode'}
                                                       variant="outlined"
                                                       error={formik.touched?.zipPostalCode && !!formik.errors?.zipPostalCode}
                                                       helperText={formik.touched?.zipPostalCode && formik.errors?.zipPostalCode}
                                                       fullWidth
                                                  />
                                             </Grid>

                                             {/* <Typography>
                                                  {JSON.stringify(formik.errors)}
                                             </Typography> */}
                                             <UserInfoFormEmail formik={formik} session={session} />

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

