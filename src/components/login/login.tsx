'use client'
import { Dialog, DialogTitle, Box, IconButton, DialogContent, Typography, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
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
import SlideTransition from "@/hooks/use-slide-transition";
import { Colors } from "@/styles/theme";


export default function LoginRegister({ open, onClose }: any) {

     const { data: session } = useSession()
     const [loading, setLoading] = useState(false);

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


     useEffect(() => {
          if (open && !session) {
               try {
                    onClose?.();
                    router.replace('/autentifikacija/prijava');
               } catch (e) {
                    // ignore navigation errors
               }
          }
     }, [open, session]);

     if (!session) {
          return null;
     }

     return (
          <Dialog
               TransitionComponent={SlideTransition}
               open={open}
               onClose={onClose}
               fullWidth
               maxWidth="sm"
               BackdropProps={{ sx: { backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' } }}
               PaperProps={{ sx: { borderRadius: 3, boxShadow: '0 16px 40px rgba(0,0,0,0.2)', overflow: 'hidden' } }}
          >
               <DialogTitle sx={{ px: 3, py: 2, bgcolor: 'rgba(0,0,0,0.02)' }}>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                         <Typography sx={{ fontWeight: 700, color: Colors.primary.main }}>Profil</Typography>
                         <IconButton onClick={onClose} aria-label="Zatvori" sx={{ color: 'text.primary' }}>
                              <CloseIcon />
                         </IconButton>
                    </Box>
               </DialogTitle>
               <DialogContent sx={{ px: 3, py: 3 }}>
                    {loading ? (
                         <LoadingWheel />
                    ) : (
                         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                              <Image
                                   src={session.user?.image! ? session.user?.image! : userData?.gender === 'male' ? '/images/avatars/avatar-marcus-finn.png' : userData?.gender === 'female' ? '/images/avatars/avatar-neha-punita.png' : '/images/avatars/avatar-marcus-finn.png'}
                                   alt={'Avatar'}
                                   width={96}
                                   height={96}
                                   style={{ borderRadius: 24 }}
                              />
                              <Box sx={{ display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: 1.5, rowGap: 1, alignItems: 'center', width: '100%', maxWidth: 480 }}>
                                   <PersonIcon fontSize="small" />
                                   <Typography>{userData?.name}</Typography>
                                   <AlternateEmailIcon fontSize="small" />
                                   <Typography>{userData?.email}</Typography>
                                   <PhoneInTalkIcon fontSize="small" />
                                   <Typography>{userData?.phoneNumber}</Typography>
                                   <LocationOnIcon fontSize="small" />
                                   <Typography>{userData?.streetAddress}, {userData?.city}</Typography>
                              </Box>
                              <Link rel='canonical' href='/nalog'>
                                   <Typography sx={{ mt: 1, textDecoration: 'underline', cursor: 'pointer', color: Colors.primary.light }}>Profil</Typography>
                              </Link>
                              <Button variant="contained" color="primary" onClick={() => signOut()} sx={{ mt: 1 }}>
                                   Odjavi se
                              </Button>
                         </Box>
                    )}
               </DialogContent>
          </Dialog>
     );
}
