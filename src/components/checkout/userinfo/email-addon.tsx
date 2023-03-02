import { userFormSchema } from '@/schema/user-form.schema'
import { CheckoutNextPrevButton, ClearFormButton, ShouldCreateAccountCheckBox } from '@/styles/checkout/userinfo'
import { Colors } from '@/styles/theme'
import { Box, FormControlLabel, Grid, TextField, Typography } from '@mui/material'
import { Formik } from 'formik'
import { useTranslation } from 'next-i18next'
import React, { ChangeEvent, useState } from 'react'
import { initialUserFormValues } from './userinfo-form-values.initial'

function EmailAddon() {

          const [shouldCreateAccount, setShouldCreateAccount] = useState(false)
          const { t } = useTranslation('common')
          const onShouldCreateAccount = (currentState: boolean) => {
                    setShouldCreateAccount(currentState)
          }

          function onSubmitHandler(): any {
                    throw new Error('Function not implemented.')
          }

          return (
                    <Formik initialValues={initialUserFormValues} onSubmit={() => onSubmitHandler()} validationSchema={userFormSchema(t)} reset>
                              {
                                        formik => (
                                                  <Box sx={{ display: 'flex' }}>
                                                            <FormControlLabel control={
                                                                      <ShouldCreateAccountCheckBox onChange={(e: ChangeEvent<HTMLInputElement>) => { onShouldCreateAccount(e.target.checked) }} />}
                                                                      label={<Typography sx={{
                                                                                fontFamily: 'inherit', color: Colors.secondary
                                                                      }}>{t('checkout.shouldcreateaccount')}</Typography>} />
                                                            {
                                                                      shouldCreateAccount ?
                                                                                <TextField
                                                                                          value={formik.values.email}
                                                                                          onChange={formik.handleChange('email')}
                                                                                          label={t('signup.email')}
                                                                                          name={'email'}
                                                                                          variant="outlined"
                                                                                          error={formik.touched?.email && !!formik.errors?.email}
                                                                                          helperText={formik.touched?.email && formik.errors?.email}
                                                                                />
                                                                                : null
                                                            }
                                                  </Box>
                                        )
                              }
                    </Formik>
          )
}

export default EmailAddon