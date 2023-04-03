import styled from "@emotion/styled";
import { List, ListItemText, Typography, Button, Stack, Container, ListItemButton, ListItemIcon, Box } from "@mui/material"
import { Colors } from "../../styles/theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { SubscribeTf, FooterTitle } from "../../styles/footer";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import Link from "next/link";

export default function Footer() {

          const [open, setOpen] = useState(true);

          const handleClick = () => {
                    setOpen(!open);
          };

          return (
                    <Box
                              sx={{
                                        background: Colors.shaft,
                                        color: Colors.white,
                                        p: { xs: 4, md: 10 },
                                        pt: 12,
                                        pb: 12,
                                        fontSize: { xs: '12px', md: '14px' }
                              }}
                    >
                              <Box >
                                        <Box>
                                                  <FooterTitle variant="body1">information</FooterTitle>
                                                  <List>
                                                            <ListItemText>
                                                                      <Typography lineHeight={2} variant="caption">
                                                                                About Us
                                                                      </Typography>
                                                            </ListItemText>
                                                            <ListItemText>
                                                                      <Typography lineHeight={2} variant="caption">
                                                                                Order Tracking
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
                                                  <List>
                                                            <ListItemText>
                                                                      <Typography lineHeight={2} variant="caption">
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
                                        <Box>
                                                  <Box
                                                            sx={{
                                                                      mt: 4,
                                                                      color: Colors.dove_gray,
                                                            }}
                                                  >
                                                            <FacebookIcon sx={{ mr: 1 }} />
                                                            <TwitterIcon sx={{ mr: 1 }} />
                                                            <InstagramIcon />
                                                  </Box>
                                        </Box>
                                        <Box>
                                                  <FooterTitle variant="body1">newsletter</FooterTitle>
                                                  <Stack>
                                                            <SubscribeTf
                                                                      color="primary"
                                                                      label="Email address"
                                                                      variant="filled"
                                                            />
                                                            <Button
                                                                      startIcon={<SendIcon sx={{ color: Colors.white }} />}
                                                                      sx={{ mt: 4, mb: 4 }}
                                                                      variant="contained"
                                                            >
                                                                      Subscribe
                                                            </Button>
                                                  </Stack>
                                        </Box>
                              </Box>
                    </Box>
          );
}
