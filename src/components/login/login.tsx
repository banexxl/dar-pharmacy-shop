import { Dialog, DialogTitle, Slide, Box, IconButton, DialogContent, Typography, Button, TextField, CardMedia, Card, Avatar, CardContent, } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "@/styles/theme";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from 'next/image'
import { useTranslation } from "next-i18next";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';



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
                              background: Colors.primary.lighter,
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
                         <Card
                              sx={{
                                   marginLeft: '50%',
                                   transform: 'translateX(-50%)',
                                   marginTop: '20px',
                                   variant: "outlined",
                                   borderRadius: 15,
                                   padding: '20px',
                                   width: { xs: '300px', lg: '700px' },
                                   height: { xs: '500px', lg: '600px' },
                                   backgroundColor: Colors.dove_gray,
                              }}
                         >

                              <CardMedia sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '50px', gap: '50px' }}>
                                   <Image src={session.user?.image!} alt={"aaa"} width={100} height={100} style={{ borderRadius: '30px' }} />
                                   <CardContent sx={{ alignItems: 'center' }}>
                                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column' }, alignItems: 'center', justifyContent: 'space-between', }}>
                                             <PersonIcon />
                                             <Typography>
                                                  {session.user?.name}
                                             </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column' }, alignItems: 'center', justifyContent: 'space-between', }}>
                                             <AlternateEmailIcon fontSize="small" />
                                             <Typography>
                                                  {session.user?.email}
                                             </Typography>
                                        </Box>
                                        {/* <Box sx={{ display: 'flex', flexDirection: { xs: 'column' }, alignItems: 'center', justifyContent: 'space-between', }}>
                                                                                          <PhoneInTalkIcon fontSize="small" />
                                                                                          <Typography>
                                                                                                    {session.user?.name}
                                                                                          </Typography>
                                                                                </Box>
                                                                                <Box sx={{ display: 'flex', flexDirection: { xs: 'column' }, alignItems: 'center', justifyContent: 'space-between', }}>
                                                                                          <LocationOnIcon fontSize="small" />
                                                                                          <Typography>
                                                                                                    city country
                                                                                          </Typography>
                                                                                </Box> */}
                                   </CardContent>
                                   <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Button onClick={() => signOut()}>Odjavi se</Button>
                                   </Box>
                              </CardMedia>
                         </Card>


                    </DialogContent>
               </Dialog >
          )
     } else {
          signIn()
     }
}