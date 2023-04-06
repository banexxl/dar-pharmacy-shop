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

export default function Footer() {

          const { t } = useTranslation();
          const [agreed, setAgreed] = useState(false)
          const [agreedWarning, setAgreedWarning] = useState(false)

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
                                                  <FooterTitle variant="body1">information</FooterTitle>
                                                  <List sx={{ textAlign: 'center', color: Colors.secondary }}>
                                                            <ListItemText>
                                                                      <Typography lineHeight={2} variant="caption">
                                                                                <Link href={"/"}>
                                                                                          Home
                                                                                </Link>
                                                                      </Typography>
                                                            </ListItemText>
                                                            <ListItemText>
                                                                      <Typography lineHeight={2} variant="caption">
                                                                                About Us
                                                                      </Typography>
                                                            </ListItemText>
                                                            <ListItemText>
                                                                      <Typography lineHeight={2} variant="caption">
                                                                                <Link href='/information/privacy-policy'>
                                                                                          Privacy &amp; Policy
                                                                                </Link>
                                                                      </Typography>
                                                            </ListItemText>
                                                            <ListItemText>
                                                                      <Typography lineHeight={2} variant="caption">
                                                                                Terms &amp; Conditions
                                                                      </Typography>
                                                            </ListItemText>
                                                  </List>
                                        </Box>
                                        <Box>
                                                  <FooterTitle variant="body1">my account</FooterTitle>
                                                  <List sx={{ textAlign: 'center', color: Colors.secondary }}>
                                                            <ListItemText>
                                                                      <Typography lineHeight={2} variant="caption" >
                                                                                Login
                                                                      </Typography>
                                                            </ListItemText>
                                                            <ListItemText>
                                                                      <Typography lineHeight={2} variant="caption">
                                                                                My Cart
                                                                      </Typography>
                                                            </ListItemText>
                                                            <ListItemText>
                                                                      <Typography lineHeight={2} variant="caption">
                                                                                My Account
                                                                      </Typography>
                                                            </ListItemText>
                                                            <ListItemText>
                                                                      <Typography lineHeight={2} variant="caption">
                                                                                Wishlist
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
                                        <FooterTitle variant="body1">newsletter</FooterTitle>
                                        <SubscribeTf
                                                  color="secondary"
                                                  label="Email address"
                                                  variant="filled"
                                        />
                                        <Button
                                                  startIcon={<SendIcon sx={{ color: Colors.white }} />}
                                                  variant="contained"
                                                  onClick={() => handleSubscribe(agreed)}
                                        >
                                                  Subscribe
                                        </Button>
                                        <FormControlLabel control={<PrivacyPolicyCheckBox value={agreed} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handlePrivacyAgreement(e.target.checked)} />} label={t('information.privacy-policy.agree')} />
                              </FooterSubscribe>


                              {agreedWarning && (
                                        <Alert variant="filled" severity="error" sx={{ position: 'fixed', top: '0px', left: '50%', transform: 'translateX(-50%)', width: '250px' }}>
                                                  {t('information.privacy-policy.agree-warning')}
                                        </Alert>
                              )}
                    </FooterContainer >
          );
}
