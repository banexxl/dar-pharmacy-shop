import theme from '@/styles/theme';
import { Container, Grid, TextField, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import React, { FunctionComponent, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { IUserFormProps, IUserForm } from '../../../interfaces/checkout/user-form-values.interface';
import { userFormSchema } from '@/schemas/user-form.schema';
import { clearUserForm, submitUserForm } from '@/store/checkout/user-info-form.slice'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { PaymentOptionRadio } from '@/styles/checkout/userinfo';
import { CheckoutNextPrevButton, ClearFormButton } from '@/styles/checkout/userinfo'
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import dynamic from 'next/dynamic';
import LoadingWheel from '@/components/loading/loading';
import { useSelector } from "react-redux";
import useDialogModal from '@/hooks/useDialogModal';
import Cart from '@/components/cart/cart';

const UserInfoForm: FunctionComponent<IUserFormProps> = (props: IUserFormProps) => {


     const userFormSelector = useSelector((state: any) => ({ ...state.persistReduce.userInfoFormSliceReducer }))
     const initialUserFormValues: IUserForm = {
          firstName: userFormSelector.firstName,
          lastName: userFormSelector.lastName,
          streetAddress: userFormSelector.streetAddress,
          phoneNumber: userFormSelector.phoneNumber,
          city: userFormSelector.city,
          provinceState: userFormSelector.provinceState,
          country: userFormSelector.country,
          zipPostalCode: userFormSelector.zipPostalCode,
          email: userFormSelector.email
     };


     const dispatch = useDispatch()

     const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
          loading: () => <LoadingWheel />,
          ssr: false
     })

     const handleSubmit = (values: any) => {
          dispatch(submitUserForm(values))
          props.tabIndex === 0 ? props.setTab?.(1) : null
     }

     const [CartDialog, showCartDialog, closeCartDialog] = useDialogModal(Cart)

     const onSubmitEmailForm = (email: any) => {
          console.log(email);
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
                                        <Grid container spacing={2}>
                                             <Grid item xs={12} sm={6}>
                                                  <TextField
                                                       value={formik.values.firstName}
                                                       label={"Ime"}
                                                       name={'firstName'}
                                                       variant="outlined"
                                                       onChange={formik.handleChange('firstName')}
                                                       error={formik.touched.firstName && !!formik.errors.firstName}
                                                       helperText={formik.touched.firstName && formik.errors.firstName}
                                                       fullWidth
                                                  />
                                             </Grid>
                                             <Grid item xs={12} sm={6}>
                                                  <TextField
                                                       value={formik.values.lastName}
                                                       onChange={formik.handleChange('lastName')}
                                                       label={"Prezime"}
                                                       name={'lastName'}
                                                       variant="outlined"
                                                       error={formik.touched?.lastName && !!formik.errors?.lastName}
                                                       helperText={formik.touched?.lastName && formik.errors?.lastName}
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
                                             <Grid item xs={12} sm={6}>
                                                  <TextField
                                                       value={formik.values.email}
                                                       onChange={formik.handleChange('email')}
                                                       label={"Email"}
                                                       name={'email'}
                                                       variant="outlined"
                                                       error={formik.touched?.email && !!formik.errors?.email}
                                                       helperText={formik.touched?.email && formik.errors?.email}
                                                       fullWidth
                                                  />
                                             </Grid>
                                             <PaymentOptionRadio theme={theme} >
                                                  <ClearFormButton endIcon={<DeleteIcon />} type='reset' onClick={() => { formik.handleReset(), dispatch(clearUserForm()) }}                                                                                          >
                                                       Obriši
                                                  </ClearFormButton>
                                                  <CheckoutNextPrevButton sx={{ maxWidth: '200px' }} startIcon={<NavigateBeforeIcon />} onClick={() => showCartDialog()}>
                                                       Proveri korpu
                                                  </CheckoutNextPrevButton>
                                                  <CheckoutNextPrevButton type='submit' endIcon={< NavigateNextIcon />}>
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

export default UserInfoForm

