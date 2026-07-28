'use client';

import {
     Dialog,
     DialogTitle,
     Box,
     IconButton,
     DialogContent,
     Typography,
     Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LoadingWheel from '../loading/loading';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import SlideTransition from '@/hooks/use-slide-transition';
import { Colors } from '@/styles/theme';
import { useAuth } from '@/lib/auth/hooks';

export default function LoginRegister({ open, onClose }: any) {
     const { user, isAuthenticated, loading: authLoading } = useAuth();
     const [loading, setLoading] = useState(false);
     const router = useRouter();
     const [userData, setUserData] = useState<any>(null);

     useEffect(() => {
          setLoading(true);
          if (user?.email) {
               fetch('/api/users', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: user.email }),
               })
                    .then((response) => response.json())
                    .then((data) => {
                         setLoading(false);
                         if (data) {
                              setUserData(data);
                         }
                    })
                    .catch((error) => {
                         console.error('Error fetching user data:', error);
                         setLoading(false);
                    });
          } else {
               setLoading(false);
          }
          return () => {
               setLoading(false);
          };
     }, [user?.email]);

     useEffect(() => {
          if (open && !isAuthenticated && !authLoading) {
               try {
                    onClose?.();
                    router.push('/autentifikacija/prijava');
               } catch (e) {
                    // ignore navigation errors
               }
          }
     }, [open, isAuthenticated, authLoading, onClose, router]);

     if (!isAuthenticated) {
          return null;
     }

     return (
          <Dialog
               TransitionComponent={SlideTransition}
               open={open}
               onClose={onClose}
               fullWidth
               maxWidth="sm"
               BackdropProps={{
                    sx: {
                         backgroundColor: 'rgba(0,0,0,0.4)',
                         backdropFilter: 'blur(4px)',
                    },
               }}
               PaperProps={{
                    sx: {
                         borderRadius: 3,
                         boxShadow: '0 16px 40px rgba(0,0,0,0.2)',
                         overflow: 'hidden',
                    },
               }}
          >
               <DialogTitle sx={{ px: 3, py: 2, bgcolor: 'rgba(0,0,0,0.02)' }}>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                         <Typography sx={{ fontWeight: 700, color: Colors.primary.main }}>
                              Profil
                         </Typography>
                         <IconButton onClick={onClose} aria-label="Zatvori" sx={{ color: 'text.primary' }}>
                              <CloseIcon />
                         </IconButton>
                    </Box>
               </DialogTitle>
               <DialogContent sx={{ px: 3, py: 3 }}>
                    {loading ? (
                         <LoadingWheel />
                    ) : (
                         <Box
                              sx={{
                                   display: 'flex',
                                   flexDirection: 'column',
                                   alignItems: 'center',
                                   gap: 2,
                              }}
                         >
                              {
                                   user?.user_metadata?.avatar_url && user?.user_metadata?.avatar_url.trim() !== '' ? (
                                        <Image
                                             src={user.user_metadata.avatar_url}
                                             alt="Avatar"
                                             width={96}
                                             height={96}
                                             style={{ borderRadius: 24 }}
                                        />
                                   ) : (
                                        <IconButton sx={{ color: 'text.primary' }}>
                                             <PersonIcon />
                                        </IconButton>
                                   )
                              }
                              <Box
                                   sx={{
                                        display: 'grid',
                                        gridTemplateColumns: 'auto 1fr',
                                        columnGap: 1.5,
                                        rowGap: 1,
                                        alignItems: 'center',
                                        width: '100%',
                                        maxWidth: 480,
                                   }}
                              >
                                   <PersonIcon fontSize="small" />
                                   <Typography>{userData?.name || userData?.full_name || 'Nije dostupno'}</Typography>
                                   <AlternateEmailIcon fontSize="small" />
                                   <Typography>{userData?.email || user?.email}</Typography>
                                   <PhoneInTalkIcon fontSize="small" />
                                   <Typography>{userData?.phone_number || userData?.phone_number || 'Nije dostupno'}</Typography>
                                   <LocationOnIcon fontSize="small" />
                                   <Typography>
                                        {userData?.street_address || userData?.street_address || ''},{' '}
                                        {userData?.city || ''}
                                   </Typography>
                              </Box>
                              <Link rel="canonical" href="/nalog" onClick={onClose} style={{ textDecoration: 'none' }}>
                                   <Typography
                                        sx={{
                                             mt: 1,
                                             textDecoration: 'underline',
                                             cursor: 'pointer',
                                             color: Colors.primary.light,
                                        }}
                                   >
                                        Profil
                                   </Typography>
                              </Link>
                              <Button
                                   variant="contained"
                                   color="primary"
                                   onClick={async () => {
                                        const supabase = (await import('@/lib/supabase/browser')).createClient();
                                        await supabase.auth.signOut();
                                        onClose?.();
                                        router.push('/');
                                        router.refresh();
                                   }}
                                   sx={{ mt: 1 }}
                              >
                                   Odjavi se
                              </Button>
                         </Box>
                    )}
               </DialogContent>
          </Dialog>
     );
}
