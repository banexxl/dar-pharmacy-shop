import theme, { Colors } from '@/styles/theme';
import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, ThemeProvider, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React, { ChangeEvent, FunctionComponent, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { initialEmailFormValues, initialUserFormValues, IUserFormProps, IUserForm } from '../../../interfaces/checkout/user-form-values.interface';
import { userFormSchema, userEmailSchema } from '@/schemas/user-form.schema';
import { submitUserForm } from '@/store/checkout/checkout.slice'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { PaymentOptionRadio, ShouldCreateAccountButton } from '@/styles/checkout/userinfo';
import { CheckoutNextPrevButton, ClearFormButton } from '@/styles/checkout/userinfo'
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import dynamic from 'next/dynamic';
import LoadingWheel from '@/components/loading/loading';

const UserInfoForm: FunctionComponent<IUserFormProps> = (props: IUserFormProps) => {

          const { t } = useTranslation('common')
          const [openEmailForm, setOpenEmailForm] = useState(false);
          const dispatch = useDispatch()

          const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
                    loading: () => <LoadingWheel isLoading={true} />,
                    ssr: false
          })

          const handleSubmit = (values: IUserForm) => {
                    dispatch(submitUserForm(values))
                    props.tabIndex === 0 ? props.setTab?.(1) : null
          }

          const onSubmitEmailForm = (email: any) => {
                    console.log(email);
          }

          return (
                    <DynamicThemeProvider theme={theme}>
                              <Container disableGutters maxWidth="md" sx={{ background: "#fff", display: 'flex', flexDirection: 'column', gap: '20px' }}>

                                        <Formik initialValues={initialUserFormValues} onSubmit={(values: IUserForm) => handleSubmit(values)} validationSchema={userFormSchema(t)}>
                                                  {
                                                            formik => (
                                                                      <Form>
                                                                                <Typography variant="h5" component="legend" gutterBottom>
                                                                                          {t('checkout.user-info')}
                                                                                </Typography>
                                                                                <Grid container spacing={2}>
                                                                                          <Grid item xs={12} sm={6}>
                                                                                                    <TextField
                                                                                                              value={formik.values.firstName}
                                                                                                              label={t('userinfo.firstName')}
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
                                                                                                              label={t('userinfo.lastName')}
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
                                                                                                              label={t('userinfo.phoneNumber')}
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
                                                                                                              label={t('userinfo.streetAddress')}
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
                                                                                                              label={t('userinfo.city')}
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
                                                                                                              label={t('userinfo.provinceState')}
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
                                                                                                              label={t('userinfo.country')}
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
                                                                                                              label={t('userinfo.zipPostalCode')}
                                                                                                              name={'zipPostalCode'}
                                                                                                              variant="outlined"
                                                                                                              error={formik.touched?.zipPostalCode && !!formik.errors?.zipPostalCode}
                                                                                                              helperText={formik.touched?.zipPostalCode && formik.errors?.zipPostalCode}
                                                                                                              fullWidth
                                                                                                    />
                                                                                          </Grid>
                                                                                          <PaymentOptionRadio>
                                                                                                    <ClearFormButton endIcon={<DeleteIcon />} type='reset' onClick={() => formik.handleReset()}                                                                                          >
                                                                                                              {t('checkout.clearform')}
                                                                                                    </ClearFormButton>
                                                                                                    <CheckoutNextPrevButton type='submit' endIcon={< NavigateNextIcon />}>
                                                                                                              {t('checkout.nextbutton')}
                                                                                                    </CheckoutNextPrevButton>
                                                                                                    <FormLabel id="demo-controlled-radio-buttons-group">{t('checkout.payment-options')}</FormLabel>
                                                                                                    <RadioGroup
                                                                                                              aria-labelledby="demo-controlled-radio-buttons-group"
                                                                                                              name="controlled-radio-buttons-group"
                                                                                                              value={formik.values.paymentOption}
                                                                                                              onChange={(e: any) => console.log(e)}
                                                                                                              sx={{ display: 'flex', flexDirection: 'row' }}
                                                                                                    >
                                                                                                              <FormControlLabel value="onDelivery" defaultChecked control={<Radio />} label={t('checkout.on-delivery-payment')} />
                                                                                                              <FormControlLabel value="cardPayment" control={<Radio />} label={t('checkout.card-payment')} />
                                                                                                    </RadioGroup>
                                                                                          </PaymentOptionRadio>
                                                                                </Grid>
                                                                      </Form>
                                                            )
                                                  }
                                        </Formik>

                                        <Formik initialValues={initialEmailFormValues} onSubmit={(e: any) => console.log(e)} validationSchema={userEmailSchema(t)} reset>
                                                  {
                                                            formik => (
                                                                      <Form onSubmit={formik.handleSubmit}>
                                                                                <Grid item xs={12} sm={6}>
                                                                                          <ShouldCreateAccountButton onClick={() => setOpenEmailForm(true)} >
                                                                                                    {<Typography>{t('checkout.shouldcreateaccount')}</Typography>}
                                                                                          </ShouldCreateAccountButton>
                                                                                          <Dialog open={openEmailForm}>
                                                                                                    <DialogTitle>Subscribe</DialogTitle>
                                                                                                    <DialogContent>
                                                                                                              <DialogContentText>
                                                                                                                        To subscribe to this website, please enter your email address here. We
                                                                                                                        will send updates occasionally.
                                                                                                              </DialogContentText>
                                                                                                              <TextField
                                                                                                                        value={formik.values.email}
                                                                                                                        onChange={formik.handleChange('email')}
                                                                                                                        label={t('signup.email')}
                                                                                                                        name={'email'}
                                                                                                                        variant="outlined"
                                                                                                                        error={formik.touched?.email && !!formik.errors?.email}
                                                                                                                        helperText={formik.touched?.email && formik.errors?.email}
                                                                                                                        autoFocus
                                                                                                                        margin="dense"
                                                                                                                        id="name"
                                                                                                                        type="email"
                                                                                                                        fullWidth
                                                                                                              />
                                                                                                    </DialogContent>
                                                                                                    <DialogActions>
                                                                                                              <Button onClick={() => setOpenEmailForm(false)}>Cancel</Button>
                                                                                                              <Button type='submit' onClick={() => setOpenEmailForm(false)}>Subscribe</Button>
                                                                                                    </DialogActions>
                                                                                          </Dialog>
                                                                                </Grid>
                                                                      </Form>
                                                            )
                                                  }
                                        </Formik>

                              </Container>
                    </DynamicThemeProvider >
          );
};

export default UserInfoForm

