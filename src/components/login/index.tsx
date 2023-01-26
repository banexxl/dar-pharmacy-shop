import { Dialog, DialogTitle, Slide, Box, IconButton, DialogContent, Typography, Button, TextField, } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../styles/theme";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { LoginButton, SwitchLoginRegisterButton } from "@/styles/login";
import { useState } from "react";


function SlideTransition(props: any) {
          return <Slide direction="down" {...props} />;
}

export default function LoginRegister({ open, onClose, product }: any) {


          const theme = useTheme();
          const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"));

          const [isSignUp, setIsSignUp] = useState(false)




          return (
                    <Dialog
                              TransitionComponent={SlideTransition}
                              open={open}
                              fullScreen
                    >
                              <DialogTitle
                                        sx={{
                                                  background: Colors.secondary,
                                        }}
                              >
                                        <Box
                                                  display="flex"
                                                  alignItems="center"
                                                  justifyContent={"space-between"}
                                        >
                                                  Prijava
                                                  <IconButton onClick={onClose}>
                                                            <CloseIcon />
                                                  </IconButton>
                                        </Box>
                              </DialogTitle>

                              <DialogContent>
                                        <Box sx={{
                                                  ml: '50%', mt: '10%', borderRadius: '20px',
                                                  transform: 'translateX(-50%)',
                                                  display: 'flex', flexDirection: 'column',
                                                  width: { xs: '200px', sm: '250px', md: '400px', xl: '600px' },
                                                  height: { xs: '200px', sm: '250px', md: '400px', xl: '500px' },
                                                  alignItems: 'center', justifyContent: 'center',
                                                  boxShadow: '5px 5px 10px #c62828', ":hover": { boxShadow: '10px 10px 20px #c62828' }
                                        }}>
                                                  <Typography variant='h3' sx={{ textAlign: 'center', margin: '20px 20px' }}>
                                                            {
                                                                      isSignUp ? 'Registruj se' : 'Prijavi se'
                                                            }
                                                  </Typography>

                                                  {
                                                            isSignUp ?
                                                                      <TextField type='text' placeholder="ime i prezime" sx={{ pb: '20px' }}></TextField>
                                                                      :
                                                                      null
                                                  }

                                                  <TextField type='email' placeholder="email" sx={{ pb: '20px' }}></TextField>
                                                  <TextField type='password' placeholder="password" sx={{ pb: '20px' }}></TextField>
                                                  {
                                                            isSignUp ? <LoginButton sx={{ mb: '20px' }}>Registruj se</LoginButton>
                                                                      : <LoginButton sx={{ mb: '20px' }}>Prijavi se</LoginButton>
                                                  }

                                                  {
                                                            isSignUp ? <SwitchLoginRegisterButton onClick={() => setIsSignUp(!isSignUp)}>Prijavi se</SwitchLoginRegisterButton> :
                                                                      <SwitchLoginRegisterButton onClick={() => setIsSignUp(!isSignUp)}>Registruj se</SwitchLoginRegisterButton>

                                                  }

                                        </Box>
                              </DialogContent>
                    </Dialog >
          );
}
