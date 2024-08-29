'use client'
import { Dialog, DialogTitle, Slide, Box, IconButton, DialogContent, Typography, Button, TextField, CardMedia, Card, Avatar, CardContent, } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "@/styles/theme";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Image from 'next/image'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LoadingWheel from "../loading/loading";
import { useRouter } from "next/router";
import Link from "next/link";



function SlideTransition(props: any) {
     return <Slide direction="down" {...props} />;
}

export default function LoginRegister({ open, onClose }: any) {

     const { data: session } = useSession()
     const [loading, setLoading] = useState(false);
     const theme = useTheme();

     const router = useRouter();

     const [userData, setUserData] = useState<any>(null);
     useEffect(() => {

          setLoading(true);
          if (session?.user?.email) {
               fetch(`/api/users`, {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                         email: session?.user?.email
                    })
               })
                    .then((response) => response.json())
                    .then((data) => {
                         setLoading(false)

                         if (data) {
                              setUserData(data);
                         }
                    })
                    .catch((error) => {
                         console.error('Error fetching user data:', error);
                    });

          }
          return () => {
               setLoading(false)
          }
     }, [session?.user?.email]);


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
                              {
                                   session ? 'Profil' : 'Prijava'
                              }
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

                              {
                                   loading ?
                                        <LoadingWheel />
                                        :
                                        <CardMedia sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                                             <Image src={session.user?.image! ? session.user?.image! : '/images/avatars/avatar-marcus-finn.png'} alt={"Avatar"} width={100} height={100} style={{ borderRadius: '30px' }} />
                                             <CardContent sx={{ alignItems: 'center' }}>
                                                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column' }, alignItems: 'center', justifyContent: 'space-between', }}>
                                                       <PersonIcon />
                                                       <Typography>
                                                            {userData?.name}
                                                       </Typography>
                                                  </Box>
                                                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column' }, alignItems: 'center', justifyContent: 'space-between', }}>
                                                       <AlternateEmailIcon fontSize="small" />
                                                       <Typography>
                                                            {userData?.email}
                                                       </Typography>
                                                  </Box>
                                                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column' }, alignItems: 'center', justifyContent: 'space-between', }}>
                                                       <PhoneInTalkIcon fontSize="small" />
                                                       <Typography>
                                                            {userData?.phoneNumber}
                                                       </Typography>
                                                  </Box>
                                                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column' }, alignItems: 'center', justifyContent: 'space-between', }}>
                                                       <LocationOnIcon fontSize="small" />
                                                       <Typography>
                                                            {userData?.streetAddress},
                                                            {userData?.city}
                                                       </Typography>
                                                  </Box>
                                                  <Link href='/nalog' >
                                                       <Typography sx={{ marginTop: '20px', textDecoration: 'underline' }}>
                                                            Profil
                                                       </Typography>
                                                  </Link>
                                             </CardContent>
                                             <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                                                  <Button onClick={() => signOut()}>Odjavi se</Button>
                                             </Box>
                                        </CardMedia>
                              }
                         </Card>


                    </DialogContent>
               </Dialog >
          )
     } else {
          router.push('/autentifikacija/prijava')
     }
}