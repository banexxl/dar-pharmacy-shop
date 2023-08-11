import styled from "@emotion/styled";
import { List, ListItemText, Typography, Button, Stack, Container, ListItemButton, ListItemIcon, Box, FormControlLabel, Alert } from "@mui/material"
import { Colors } from "../../styles/theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { SubscribeTf, FooterTitle, FooterContainer, FooterInfoAccount, FooterSocial, FooterSubscribe, PrivacyPolicyCheckBox } from "../../styles/footer";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import useDialogModal from "@/hooks/useDialogModal";
import WishList from "../wishlist/wishlist";
import Cart from "../cart/cart";
import LoginRegister from "../login/login";
import { useRouter } from "next/router";
import { Form, Formik } from "formik";
import { subscriptionEmailSchema } from "@/schemas/email-form.schema";
import { ISubscribeEmailForm, initialSubscribeEmailFormValues } from "@/interfaces/subscribe/subscription-interface";
import { SubscribeClientService } from "@/pages/api/email/subscribe-user-api";

export default function Footer() {

          const { t } = useTranslation('common');
          const [agreedWarning, setAgreedWarning] = useState(false)
          const [WishListDialog, showWishListDialog, closeWishListDialog] = useDialogModal(WishList)
          const [CartDialog, showCartDialog, closeCartDialog] = useDialogModal(Cart)
          const [LoginDialog, showLoginDialog, closeLoginDialog] = useDialogModal(LoginRegister)

          const callAlert = () => {
                    setAgreedWarning(true)
                    const timeId = setTimeout(() => {
                              // After 3 seconds set the show value to false
                              setAgreedWarning(false)
                    }, 3000)

                    return () => {
                              clearTimeout(timeId)
                    }
          }

          const handleSubmit = async (data: any) => {

                    data.agreedToTerms == false ?
                              callAlert()
                              :
                              await fetch(`pages/api/email/subscribe-user-api/`, {
                                        method: "POST",
                                        body: JSON.stringify(data),
                                        headers: {
                                                  'Content-Type': 'application/json',
                                                  'Access-Control-Allow-Origin': '*',
                                                  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
                                        },
                              })
          }

          return (
                    <FooterContainer>
                              <FooterInfoAccount >
                                        <Box>
                                                  <FooterTitle variant="body1">{t('footer.information')}</FooterTitle>
                                                  <List sx={{ textAlign: 'center', color: Colors.secondary }}>
                                                            <ListItemText>
                                                                      <Link href={"/"} >
                                                                                <Typography lineHeight={2} variant="caption" sx={{ '&:hover': { color: 'white', cursor: 'pointer' } }}>
                                                                                          {t('footer.home')}
                                                                                </Typography>
                                                                      </Link>
                                                            </ListItemText>
                                                            <ListItemText>
                                                                      <Link href='/informacije/o-nama' >
                                                                                <Typography lineHeight={2} variant="caption" sx={{ '&:hover': { color: 'white', cursor: 'pointer' } }}>
                                                                                          {t('footer.about-us')}
                                                                                </Typography>
                                                                      </Link>
                                                            </ListItemText>
                                                            <ListItemText>
                                                                      <Link href='/informacije/politika-privatnosti'>
                                                                                <Typography lineHeight={2} variant="caption" sx={{ '&:hover': { color: 'white', cursor: 'pointer' } }}>
                                                                                          {t('footer.privacy-policy')}
                                                                                </Typography>
                                                                      </Link>
                                                            </ListItemText>
                                                            <ListItemText>
                                                                      <Link href='/informacije/uslovi-koriscenja'>
                                                                                <Typography lineHeight={2} variant="caption" sx={{ '&:hover': { color: 'white', cursor: 'pointer' } }}>
                                                                                          {t('footer.terms-conditions')}
                                                                                </Typography>
                                                                      </Link>
                                                            </ListItemText>
                                                  </List>
                                        </Box>
                                        <Box>
                                                  <FooterTitle variant="body1">{t('footer.my-account')}</FooterTitle>
                                                  <List sx={{ textAlign: 'center', color: Colors.secondary }}>
                                                            <ListItemText onClick={showLoginDialog}>
                                                                      <Typography lineHeight={2} variant="caption" sx={{ '&:hover': { color: 'white', cursor: 'pointer' } }}>
                                                                                {t('footer.login')}
                                                                      </Typography>
                                                            </ListItemText>
                                                            <ListItemText onClick={showCartDialog}>
                                                                      <Typography lineHeight={2} variant="caption" sx={{ '&:hover': { color: 'white', cursor: 'pointer' } }}>
                                                                                {t('footer.cart')}
                                                                      </Typography>
                                                            </ListItemText>
                                                            <ListItemText onClick={showLoginDialog}>
                                                                      <Typography lineHeight={2} variant="caption" sx={{ '&:hover': { color: 'white', cursor: 'pointer' } }}>
                                                                                {t('footer.my-account')}
                                                                      </Typography>
                                                            </ListItemText>
                                                            <ListItemText onClick={showWishListDialog}>
                                                                      <Typography lineHeight={2} variant="caption" sx={{ '&:hover': { color: 'white', cursor: 'pointer' } }}>
                                                                                {t('footer.wishlist')}
                                                                      </Typography>
                                                            </ListItemText>
                                                  </List>
                                        </Box>
                              </FooterInfoAccount>

                              <FooterSocial>
                                        <FacebookIcon />
                                        <InstagramIcon />
                              </FooterSocial>

                              <Formik initialValues={initialSubscribeEmailFormValues} onSubmit={(values: ISubscribeEmailForm) => handleSubmit(values)} validationSchema={subscriptionEmailSchema(t)}>
                                        {
                                                  formik => (
                                                            <Form>

                                                                      <FooterSubscribe>
                                                                                <FooterTitle variant="body1">{t('footer.newsletter')}</FooterTitle>
                                                                                <SubscribeTf
                                                                                          color="secondary"
                                                                                          label={t('footer.email')}
                                                                                          variant="filled"
                                                                                          value={formik.values.email}
                                                                                          onChange={formik.handleChange('email')}
                                                                                          error={formik.touched.email && !!formik.errors.email}
                                                                                          helperText={formik.touched.email && formik.errors.email}
                                                                                />
                                                                                <Button
                                                                                          startIcon={<SendIcon sx={{ color: Colors.white }} />}
                                                                                          variant="contained"
                                                                                          type="submit"
                                                                                //disabled={formik.errors ? true : false}
                                                                                >
                                                                                          {t('footer.subscribe')}
                                                                                </Button>
                                                                                <FormControlLabel
                                                                                          control={<PrivacyPolicyCheckBox checked={formik.values.agreedToTerms} />}
                                                                                          onChange={
                                                                                                    formik.handleChange('agreedToTerms')
                                                                                          }
                                                                                          label={t('information.privacy-policy.agree')}
                                                                                          name="agreedToTerms"
                                                                                />
                                                                      </FooterSubscribe>

                                                            </Form>
                                                  )
                                        }
                              </Formik>
                              {
                                        agreedWarning && (
                                                  <Alert variant="filled" severity="error" sx={{ position: 'fixed', bottom: '0px', left: '50%', transform: 'translateX(-50%)', width: '250px' }}>
                                                            {t('information.privacy-policy.agree-warning')}
                                                  </Alert>
                                        )
                              }
                              <WishListDialog />
                              <CartDialog />
                              <LoginDialog />
                    </FooterContainer >
          );
}
