import theme, { Colors } from '@/styles/theme';
import { Container, FormControlLabel, Grid, Stack, TextField, ThemeProvider, Typography } from '@mui/material';
import { Formik, FormikErrors, FormikTouched } from 'formik';
import React, { ChangeEvent, FunctionComponent, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { UserFormProps, UserFormValues } from '../../../interfaces/checkout/user-form-values.interface';
import { userFormSchema } from '@/schema/user-form.schema';
import { initialUserFormValues } from './userinfo-form-values.initial';
import { CheckoutNextPrevButton, ShouldCreateAccountCheckBox } from '@/styles/checkout';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const AddressForm: FunctionComponent<UserFormProps> = ({ formName = 'user', errors, touched }) => {

          const { t } = useTranslation('common')
          const [shouldCreateAccount, setShouldCreateAccount] = useState(false)
          const submitForm = () => {
                    console.log("aaaaaaa");
          }

          const onShouldCreateAccount = (currentState: boolean) => {
                    setShouldCreateAccount(currentState)
          }

          return (
                    <ThemeProvider theme={theme}>
                              <Container
                                        disableGutters
                                        maxWidth="xl"
                                        sx={{
                                                  background: "#fff",
                                        }}
                              >
                                        <Formik
                                                  enableReinitialize={true}
                                                  validationSchema={userFormSchema(t)}
                                                  initialValues={initialUserFormValues}
                                                  onSubmit={submitForm}
                                        >
                                                  <Stack>
                                                            <Grid container spacing={2}>
                                                                      <Grid item xs={12} sm={6}>
                                                                                <TextField
                                                                                          label={t('address.firstName')}
                                                                                          name={`${formName}.firstName`}
                                                                                          variant="outlined"
                                                                                          error={touched?.firstName && !!errors?.firstName}
                                                                                          helperText={touched?.firstName && errors?.firstName}
                                                                                          fullWidth
                                                                                />
                                                                      </Grid>
                                                                      <Grid item xs={12} sm={6}>
                                                                                <TextField
                                                                                          label={t('address.lastName')}
                                                                                          name={`${formName}.lastName`}
                                                                                          variant="outlined"
                                                                                          error={touched?.lastName && !!errors?.lastName}
                                                                                          helperText={touched?.lastName && errors?.lastName}
                                                                                          fullWidth
                                                                                />
                                                                      </Grid>
                                                                      <Grid item xs={12} sm={6}>
                                                                                <TextField
                                                                                          label={t('address.phonenumber')}
                                                                                          name={`${formName}.phonenumber`}
                                                                                          variant="outlined"
                                                                                          error={touched?.phonenumber && !!errors?.phonenumber}
                                                                                          helperText={touched?.phonenumber && !!errors?.phonenumber}
                                                                                          fullWidth
                                                                                />
                                                                      </Grid>
                                                                      <Grid item xs={12} sm={6}>
                                                                                <TextField
                                                                                          label={t('address.addressLine1')}
                                                                                          name={`${formName}.addressLine1`}
                                                                                          variant="outlined"
                                                                                          error={touched?.addressLine1 && !!errors?.addressLine1}
                                                                                          helperText={touched?.addressLine1 && !!errors?.addressLine1}
                                                                                          fullWidth
                                                                                />
                                                                      </Grid>
                                                                      <Grid item xs={12} sm={6}>
                                                                                <TextField
                                                                                          label={t('address.city')}
                                                                                          name={`${formName}.city`}
                                                                                          variant="outlined"
                                                                                          error={touched?.city && !!errors?.city}
                                                                                          helperText={touched?.city && errors?.city}
                                                                                          fullWidth
                                                                                />
                                                                      </Grid>
                                                                      <Grid item xs={12} sm={6}>
                                                                                <TextField
                                                                                          label={t('address.provinceState')}
                                                                                          name={`${formName}.provinceState`}
                                                                                          variant="outlined"
                                                                                          error={touched?.provinceState && !!errors?.provinceState}
                                                                                          helperText={touched?.provinceState && errors?.provinceState}
                                                                                          fullWidth
                                                                                />
                                                                      </Grid>
                                                                      <Grid item xs={12} sm={6}>
                                                                                <TextField
                                                                                          label={t('address.country')}
                                                                                          name={`${formName}.country`}
                                                                                          variant="outlined"
                                                                                          error={touched?.country && !!errors?.country}
                                                                                          helperText={touched?.country && errors?.country}
                                                                                          fullWidth
                                                                                />
                                                                      </Grid>
                                                                      <Grid item xs={12} sm={6}>
                                                                                <TextField
                                                                                          label={t('address.zipPostalCode')}
                                                                                          name={`${formName}.zipPostalCode`}
                                                                                          variant="outlined"
                                                                                          error={touched?.zipPostalCode && !!errors?.zipPostalCode}
                                                                                          helperText={touched?.zipPostalCode && errors?.zipPostalCode}
                                                                                          fullWidth
                                                                                />
                                                                      </Grid>
                                                                      <Grid item xs={12} sm={6}>
                                                                                <FormControlLabel control={<ShouldCreateAccountCheckBox onChange={(e: ChangeEvent<HTMLInputElement>) => { onShouldCreateAccount(e.target.checked) }} />}
                                                                                          label={<Typography sx={{
                                                                                                    fontFamily: 'inherit', color: Colors.secondary
                                                                                          }}>{t('checkout.shouldcreateaccount')}</Typography>} />
                                                                                <CheckoutNextPrevButton sx={{ maxWidth: '100px' }} endIcon={<NavigateNextIcon />} onClick={() => submitForm()}>
                                                                                          {t('checkout.nextbutton')}
                                                                                </CheckoutNextPrevButton>
                                                                      </Grid>
                                                                      {
                                                                                shouldCreateAccount ?
                                                                                          <Grid item xs={12} sm={6}>
                                                                                                    <TextField
                                                                                                              label={t('signup.email')}
                                                                                                              name={'email'}
                                                                                                              variant="outlined"
                                                                                                              error={touched?.email && !!errors?.email}
                                                                                                              helperText={touched?.email && errors?.email}
                                                                                                              fullWidth
                                                                                                    />
                                                                                          </Grid>
                                                                                          : null
                                                                      }
                                                            </Grid>
                                                  </Stack>
                                        </Formik>
                              </Container>
                    </ThemeProvider>

          );
};

export default AddressForm


