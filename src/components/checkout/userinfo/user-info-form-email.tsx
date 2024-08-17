'use strict';

import React, { useEffect, useState } from 'react';
import { Grid, TextField, FormControlLabel, Typography, CircularProgress, InputAdornment } from '@mui/material';
import { FormikProps } from 'formik';
import { ShouldCreateAccountCheckBox } from '@/styles/checkout/userinfo';
import { Colors } from '@/styles/theme';
import { IUserForm } from '@/interfaces/checkout/user-form-values.interface';

interface EmailAndCheckboxProps {
     session: any;
     formik: FormikProps<IUserForm>;
}

const EmailAndCheckbox = ({ formik, session }: EmailAndCheckboxProps) => {

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
               return false;
          } else if (response.status === 202) {
               // Email available
               return true;
          } else {
               return null;
          }
     }

     const handleCheckboxChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
          const checked = e.target.checked;

          formik.setFieldValue('shouldCreateAccount', checked);

          if (checked && formik.values.email) {
               const result = await onRegisterAccountCheck(formik.values.email);
          } else {
               formik.validateForm();
          }
     };

     const handleEmailBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
          const email = e.target.value;
          formik.handleBlur('email');

          if (email) {
               const emailExists = await onRegisterAccountCheck(email);
               if (emailExists === false) {
                    formik.setErrors({ email: 'Email već postoji!' });
               }
          }
     };

     return (
          <>
               <Grid item xs={12} sm={6}>
                    <Typography>
                         {JSON.stringify(formik.errors)}
                    </Typography>
                    <TextField
                         value={session.data ? session.data.user.email : formik.values.email}
                         disabled={session.data ? true : false}
                         label="Email"
                         name="email"
                         variant="outlined"
                         onBlur={handleEmailBlur}
                         error={formik.touched.email && !!formik.errors.email}
                         helperText={formik.touched.email && formik.errors.email ? formik.errors.email : null}
                         onChange={formik.handleChange('email')}
                         fullWidth
                    />
               </Grid>
               {/* {formik.values.shouldCreateAccount && (
                    <>
                         <Grid item xs={12} sm={6}>
                              <TextField
                                   value={formik.values.password}
                                   label="Lozinka"
                                   name="password"
                                   variant="outlined"
                                   type="password"
                                   error={formik.touched.password && !!formik.errors.password}
                                   helperText={formik.touched.password && formik.errors.password ? formik.errors.password : null}
                                   onChange={formik.handleChange('password')}
                                   fullWidth
                                   onBlur={formik.handleBlur}
                              />
                         </Grid>

                         <Grid item xs={12} sm={6}>
                              <TextField
                                   value={formik.values.repeatPassword}
                                   label="Potvrdi lozinku"
                                   name="repeatPassword"
                                   variant="outlined"
                                   type="password"
                                   error={formik.touched.repeatPassword && !!formik.errors.repeatPassword}
                                   helperText={formik.touched.repeatPassword && formik.errors.repeatPassword ? formik.errors.repeatPassword : null}
                                   onChange={formik.handleChange('repeatPassword')}
                                   fullWidth
                                   onBlur={formik.handleBlur}
                              />
                         </Grid>

                    </>
               )} */}

               {!session.data && (
                    <Grid item xs={12} sm={6}>
                         <FormControlLabel
                              sx={{ marginBottom: '10px', width: '100%' }}
                              control={
                                   <ShouldCreateAccountCheckBox
                                        checked={formik.errors.email ? false : formik.values.shouldCreateAccount}
                                        onChange={handleCheckboxChange}
                                        name="shouldCreateAccount"
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
          </>
     );
};

export default EmailAndCheckbox;
