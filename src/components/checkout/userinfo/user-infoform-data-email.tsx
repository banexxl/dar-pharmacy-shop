import React, { useEffect, useState } from 'react';
import { Grid, TextField, FormControlLabel, Typography, Tooltip, InputAdornment, IconButton } from '@mui/material';
import { useFormikContext, Field } from 'formik';
import theme from '@/styles/theme';
import { Checkbox } from '@mui/material';
import { useAuth } from '@/hooks/useAuth';
import { Customer } from '@/schemas/customer';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const EmailAndAccountCreation: React.FC = () => {

     const { values, errors, touched, handleChange, setFieldValue, validateField } = useFormikContext<Customer & { should_create_account: boolean; password: string }>();
     const { user } = useAuth();
     const [showPassword, setShowPassword] = useState(false);

     // Set the email value from the auth user if it exists
     useEffect(() => {
          if (user?.email && values.email !== user.email) {
               setFieldValue('email', user.email);
          }
     }, [user, values.email, setFieldValue]);

     // Function to handle the email change and validation
     const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement>) => {
          const fieldName = e.target.name;
          const fieldValue = e.target.value;

          if (fieldName === 'email') {
               validateField('email').then(() => {
                    if (errors.email && fieldValue !== '') {
                         setFieldValue('should_create_account', false);
                    }
               });
          }
     };

     return (
          <>
               <Grid size={{ xs: 12, sm: 6 }} sx={{ minWidth: 0 }}>
                    <Field
                         as={TextField}
                         value={values.email.toLowerCase()}
                         disabled={!!user?.email}
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

               {/* Only show the checkbox if the user is not authenticated */}
               {!user?.email && (
                    <Grid size={{ xs: 12, sm: 6 }} sx={{ minWidth: 0 }}>
                         <Tooltip title={errors.email ? errors.email : ''} >
                              <FormControlLabel
                                   sx={{
                                        marginBottom: '10px',
                                        width: '100%',
                                        alignItems: 'flex-start',
                                        mr: 0,
                                        '& .MuiFormControlLabel-label': {
                                             width: '100%'
                                        }
                                   }}
                                   control={
                                        <Checkbox
                                             checked={!!errors.email ? false : !!values.should_create_account}
                                             onChange={(e) => {
                                                  setFieldValue('should_create_account', e.target.checked);
                                                  if (!e.target.checked) {
                                                       setFieldValue('password', '');
                                                  }
                                             }}
                                             name="should_create_account"
                                             sx={{
                                                  '& .MuiSvgIcon-root': {
                                                       color: errors.email ? theme.palette.grey[400] : theme.palette.primary.main,
                                                  }
                                             }}
                                             disabled={
                                                  values.email === '' ||
                                                  Boolean(errors.email)
                                             }

                                        />
                                   }
                                   label={
                                        <Typography sx={{ display: 'inline', textAlign: 'justify', color: 'black', whiteSpace: 'normal', wordBreak: 'break-word' }}>
                                             Kreiraj nalog sa navedenim podacima...
                                        </Typography>
                                   }
                              />
                         </Tooltip>
                    </Grid>
               )}

               {/* Password field — shown when "create account" is checked */}
               {!!values.should_create_account && !user?.email && (
                    <Grid size={{ xs: 12, sm: 6 }} sx={{ minWidth: 0 }}>
                         <TextField
                              fullWidth
                              name="password"
                              label="Lozinka za novi nalog"
                              type={showPassword ? 'text' : 'password'}
                              variant="outlined"
                              value={values.password || ''}
                              onChange={handleChange('password')}
                              onBlur={() => setFieldValue('password', values.password || '', true)}
                              error={!!values.password && !!errors.password}
                              helperText={values.password && errors.password ? errors.password : ''}
                              slotProps={{
                                   input: {
                                        endAdornment: (
                                             <InputAdornment position="end">
                                                  <IconButton
                                                       onClick={() => setShowPassword((s) => !s)}
                                                       edge="end"
                                                       size="small"
                                                       aria-label={showPassword ? 'Sakrij lozinku' : 'Prikaži lozinku'}
                                                  >
                                                       {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                                  </IconButton>
                                             </InputAdornment>
                                        ),
                                   },
                              }}
                         />
                    </Grid>
               )}
          </>
     );
};

export default EmailAndAccountCreation;
