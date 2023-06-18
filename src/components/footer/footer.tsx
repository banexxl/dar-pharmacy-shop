import styled from "@emotion/styled";
import { List, ListItemText, Typography, Button, Stack, Container, ListItemButton, ListItemIcon, Box, FormControlLabel, Alert } from "@mui/material"
import { Colors } from "../../styles/theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
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

export default function Footer() {

          const { t } = useTranslation('common');
          const [agreed, setAgreed] = useState(false)
          const [agreedWarning, setAgreedWarning] = useState(false)
          const [WishListDialog, showWishListDialog, closeWishListDialog] = useDialogModal(WishList)
          const [CartDialog, showCartDialog, closeCartDialog] = useDialogModal(Cart)
          const [LoginDialog, showLoginDialog, closeLoginDialog] = useDialogModal(LoginRegister)
          const router = useRouter();

          const handlePrivacyAgreement = (checked: any) => {
                    setAgreed(checked)
          }

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

          const handleSubscribe = (agreedToTerms: boolean) => {
                    !agreedToTerms ? callAlert()
                              :
                              console.log("do subscribe logic")

          }
          return (
                    <FooterContainer>
                              <FooterInfoAccount >
                                        <Box>
                                                  <FooterTitle variant="body1">{t('footer.information')}</FooterTitle>
                                                  <List sx={{ textAlign: 'center', color: Colors.secondary }}>
                                                            <ListItemText>
                                                                      <Link href={"/"} >
                                                                                <Typography lineHeight={2} variant="caption" sx={{ '&:hover': { color: 'white', cursor: 'pointer' } }} onClick={() => router.push("/")}>
                                                                                          {t('footer.home')}
                                                                                </Typography>
                                                                      </Link>
                                                            </ListItemText>
                                                            <ListItemText>
                                                                      <Link href='/information/about-us' >
                                                                                <Typography lineHeight={2} variant="caption" sx={{ '&:hover': { color: 'white', cursor: 'pointer' } }} onClick={() => router.push("/information/about-us")}>
                                                                                          {t('footer.about-us')}
                                                                                </Typography>
                                                                      </Link>
                                                            </ListItemText>
                                                            <ListItemText>
                                                                      <Link href='/information/privacy-policy' onClick={() => router.push("/information/privacy-policy")}>
                                                                                <Typography lineHeight={2} variant="caption" sx={{ '&:hover': { color: 'white', cursor: 'pointer' } }}>
                                                                                          {t('footer.privacy-policy')}
                                                                                </Typography>
                                                                      </Link>
                                                            </ListItemText>
                                                            <ListItemText>
                                                                      <Link href='/information/terms-conditions' onClick={() => router.push("/information/terms-conditions")}>
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
                                        <TwitterIcon />
                                        <InstagramIcon />
                              </FooterSocial>

                              <FooterSubscribe>
                                        <FooterTitle variant="body1">{t('footer.newsletter')}</FooterTitle>
                                        <SubscribeTf
                                                  color="secondary"
                                                  label={t('footer.email')}
                                                  variant="filled"
                                        />
                                        <Button
                                                  startIcon={<SendIcon sx={{ color: Colors.white }} />}
                                                  variant="contained"
                                                  onClick={() => handleSubscribe(agreed)}
                                        >
                                                  {t('footer.subscribe')}
                                        </Button>
                                        <FormControlLabel control={<PrivacyPolicyCheckBox value={agreed} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handlePrivacyAgreement(e.target.checked)} />} label={t('information.privacy-policy.agree')} />
                              </FooterSubscribe>


                              {
                                        agreedWarning && (
                                                  <Alert variant="filled" severity="error" sx={{ position: 'fixed', top: '0px', left: '50%', transform: 'translateX(-50%)', width: '250px' }}>
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
