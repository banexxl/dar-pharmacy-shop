import { initialEmailFormValues } from '@/interfaces/checkout/user-form-values.interface'
import { ShouldCreateAccountButton } from '@/styles/checkout/userinfo'
import theme from '@/styles/theme'
import { Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField, Typography } from '@mui/material'
import { Form, Formik } from 'formik'
import { useTranslation } from 'next-i18next'
import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import LoadingWheel from '../loading/loading'
import { userEmailSchema } from '@/schemas/email-form.schema'

function CreateAccountForm() {

          const [openEmailForm, setOpenEmailForm] = useState(false);
          const { t } = useTranslation('common')
          const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
                    loading: () => <LoadingWheel isLoading={true} />,
                    ssr: false
          })

          function OpenEmailForm(arg0: boolean): void {
                    throw new Error('Function not implemented.')
          }

          return (
                    <DynamicThemeProvider theme={theme}>
                              <Container disableGutters maxWidth="md" sx={{ background: "#fff", display: 'flex', flexDirection: 'column', gap: '70px' }}>
                                        < Formik initialValues={initialEmailFormValues} onSubmit={(e: any) => console.log(e)} validationSchema={userEmailSchema(t)} reset >
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
                                        </Formik >
                              </Container>
                    </DynamicThemeProvider >
          )
}

export default CreateAccountForm


