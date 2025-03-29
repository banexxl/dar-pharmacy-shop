import React, { useEffect } from 'react';
import { Grid, TextField, FormControlLabel, Typography } from '@mui/material';
import { useFormikContext, Field } from 'formik';
import { ShouldCreateAccountCheckBox } from '@/styles/checkout/userinfo';
import { IUserForm } from '../../../interfaces/checkout/user-form-values.interface';
import { useSession } from 'next-auth/react';

const EmailAndAccountCreation: React.FC = () => {

     const { values, errors, touched, handleChange, setFieldValue, validateField } = useFormikContext<IUserForm>();
     const { data: session } = useSession();

     // Set the email value from the session if it exists
     useEffect(() => {
          if (session?.user?.email && values.email !== session.user.email) {
               setFieldValue('email', session.user.email);
          }
     }, [session, values.email, setFieldValue]);

     // Function to handle the email change and validation
     const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement>) => {
          const fieldName = e.target.name;
          const fieldValue = e.target.value;

          if (fieldName === 'email') {
               validateField('email').then(() => {
                    if (errors.email && fieldValue !== '') {
                         setFieldValue('shouldCreateAccount', false);
                    }
               });
          }
     };

     return (
          <>
               <Grid item xs={12} sm={6}>
                    <Field
                         as={TextField}
                         value={values.email.toLowerCase()}
                         disabled={!!session?.user?.email}
                         label="Email"
                         name="email"
                         variant="outlined"
                         onBlur={handleEmailBlur}
                         error={touched.email && !!errors.email}
                         helperText={touched.email && errors.email}
                         onChange={handleChange('email')}
                         fullWidth
                    />
               </Grid>

               {/* Only show the checkbox if the session is not present */}
               {!session?.user?.email && (
                    <Grid item xs={12} sm={6}>
                         <FormControlLabel
                              sx={{ marginBottom: '10px', width: '100%' }}
                              control={
                                   <ShouldCreateAccountCheckBox
                                        checked={!!errors.email ? false : values.shouldCreateAccount}
                                        onChange={handleChange}
                                        name="shouldCreateAccount"
                                        color="primary"
                                        disabled={
                                             values.email === '' ||
                                             Boolean(errors.email)
                                        }
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

export default EmailAndAccountCreation;
