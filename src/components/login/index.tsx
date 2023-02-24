import { Dialog, DialogTitle, Slide, Box, IconButton, DialogContent, Typography, Button, TextField, } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "@/styles/theme";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { LoginButton, SwitchLoginRegisterButton } from "@/styles/login";
import GoogleButton from 'react-google-button'
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from 'next/image'



function SlideTransition(props: any) {
          return <Slide direction="down" {...props} />;
}

export default function LoginRegister({ open, onClose }: any) {

          const { data: session } = useSession()

          const theme = useTheme();
          const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"));

          const [inputInfo, setInputInfo] = useState({
                    name: '',
                    email: '',
                    password: ''
          })
          const [isSignUp, setIsSignUp] = useState(false)

          const handleChange = (e: any) => {
                    //da ne izgubimo info prilikom switcha sa login na register i obratno
                    setInputInfo((prevState) => ({
                              ...prevState,
                              [e.target.name]: e.target.value
                    }))
          }


          if (session) {
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
                                                            <Typography>
                                                                      {session.user?.name}

                                                            </Typography>
                                                            {/* <Image src={session.user?.image!} height={200} width={100} alt='image'></Image> */}
                                                            <Button onClick={() => signOut()}>Logout</Button>
                                                  </Box>
                                        </DialogContent>
                              </Dialog >
                    )
          } else {

                    // <Dialog
                    //           TransitionComponent={SlideTransition}
                    //           open={open}
                    //           fullScreen
                    // >
                    //           <DialogTitle
                    //                     sx={{
                    //                               background: Colors.secondary,
                    //                     }}
                    //           >
                    //                     <Box
                    //                               display="flex"
                    //                               alignItems="center"
                    //                               justifyContent={"space-between"}
                    //                     >
                    //                               Prijava
                    //                               <IconButton onClick={onClose}>
                    //                                         <CloseIcon />
                    //                               </IconButton>
                    //                     </Box>
                    //           </DialogTitle>

                    //           <DialogContent>
                    //                     <Box sx={{
                    //                               ml: '50%', mt: '10%', borderRadius: '20px',
                    //                               transform: 'translateX(-50%)',
                    //                               display: 'flex', flexDirection: 'column',
                    //                               width: { xs: '200px', sm: '250px', md: '400px', xl: '600px' },
                    //                               height: { xs: '200px', sm: '250px', md: '400px', xl: '500px' },
                    //                               alignItems: 'center', justifyContent: 'center',
                    //                               boxShadow: '5px 5px 10px #c62828', ":hover": { boxShadow: '10px 10px 20px #c62828' }
                    //                     }}>
                    //                               <Typography variant='h3' sx={{ textAlign: 'center', margin: '20px 20px' }}>
                    //                                         {
                    //                                                   isSignUp ? 'Registruj se' : 'Prijavi se'
                    //                                         }
                    //                               </Typography>

                    //                               {
                    //                                         isSignUp ?
                    //                                                   <TextField value={inputInfo.name} name="name" type='text' placeholder="ime i prezime" sx={{ pb: '20px' }} onChange={(e) => handleChange(e)}></TextField>
                    //                                                   :
                    //                                                   null
                    //                               }

                    //                               <TextField value={inputInfo.email} name="email" type='email' placeholder="email" sx={{ pb: '20px' }} onChange={(e) => handleChange(e)} ></TextField>
                    //                               <TextField value={inputInfo.password} name="password" type='password' placeholder="password" sx={{ pb: '20px' }} onChange={(e) => handleChange(e)} ></TextField>
                    //                               {
                    //                                         isSignUp ? <LoginButton sx={{ mb: '20px' }}>Registruj se</LoginButton>
                    //                                                   : <LoginButton sx={{ mb: '20px' }}>Prijavi se</LoginButton>
                    //                               }

                    //                               {
                    //                                         isSignUp ? <SwitchLoginRegisterButton onClick={() => setIsSignUp(!isSignUp)}>Prijavi se</SwitchLoginRegisterButton> :
                    //                                                   <SwitchLoginRegisterButton onClick={() => setIsSignUp(!isSignUp)}>Registruj se</SwitchLoginRegisterButton>

                    //                               }
                    //                               <GoogleButton
                    //                                         style={{ borderRadius: '10px', backgroundColor: Colors.primary }}
                    //                                         onClick={() => signIn()}
                    //                               />
                    //                     </Box>

                    //           </DialogContent>
                    // </Dialog >
                    signIn()

          }
}