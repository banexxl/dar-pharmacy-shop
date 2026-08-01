'use client';

import {
     Box,
     Button,
     CircularProgress,
     Dialog,
     DialogContent,
     DialogTitle,
     IconButton,
     Tooltip,
     Typography,
} from '@mui/material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CloseIcon from '@mui/icons-material/Close';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import SlideTransition from '@/hooks/use-slide-transition';
import { Colors } from '@/styles/theme';
import { useAuth } from '@/hooks/useAuth';

const AVATAR_OPTIONS = [
     '/images/avatars/male.png',
     '/images/avatars/female.png',
];

type LoginRegisterProps = {
     open: boolean;
     onClose: () => void;
};

export default function LoginRegister({
     open,
     onClose,
}: LoginRegisterProps) {
     const {
          user,
          customer,
          isAuthenticated,
          loading: authLoading,
          refreshCustomer,
     } = useAuth();

     const router = useRouter();
     const [avatarLoading, setAvatarLoading] = useState(false);
     const [avatarDialogOpen, setAvatarDialogOpen] = useState(false);
     const [imageLoaded, setImageLoaded] = useState(false);

     // Redirect to login if drawer opened but user not authenticated
     useEffect(() => {
          if (open && !isAuthenticated && !authLoading) {
               onClose?.();
               router.push('/autentifikacija/prijava');
          }
     }, [open, isAuthenticated, authLoading, onClose, router]);

     const avatarSrc = customer?.avatar || '/images/avatars/male.png';

     const handleAvatarChange = async (avatarUrl: string) => {
          if (!user?.id || avatarLoading) return;
          if (avatarUrl === customer?.avatar) {
               setAvatarDialogOpen(false);
               return;
          }

          try {
               setAvatarLoading(true);
               const supabase = (await import('@/services/supabase/browser')).createClient();

               const { error } = await supabase
                    .from('customers')
                    .update({ avatar: avatarUrl, updated_at: new Date().toISOString() })
                    .eq('user_id', user.id);

               if (error) throw error;

               await refreshCustomer();
               setAvatarDialogOpen(false);
               setImageLoaded(false);
          } catch (error) {
               console.error('Error updating customer avatar:', error);
          } finally {
               setAvatarLoading(false);
          }
     };

     const handleSignOut = async () => {
          try {
               const supabase = (await import('@/services/supabase/browser')).createClient();
               await supabase.auth.signOut();
               onClose?.();
               router.push('/');
               router.refresh();
          } catch (error) {
               console.error('Error signing out:', error);
          }
     };

     if (!isAuthenticated) return null;

     return (
          <>
               <Dialog
                    TransitionComponent={SlideTransition}
                    open={open}
                    onClose={onClose}
                    fullWidth
                    maxWidth="sm"
                    BackdropProps={{
                         sx: { backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' },
                    }}
                    PaperProps={{
                         sx: { borderRadius: 3, boxShadow: '0 16px 40px rgba(0,0,0,0.2)', overflow: 'hidden' },
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
                         {authLoading ? (
                              <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
                                   <CircularProgress sx={{ color: Colors.primary.main }} />
                              </Box>
                         ) : (
                              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                                   {/* Avatar */}
                                   <Tooltip title="Promeni avatar">
                                        <IconButton
                                             onClick={() => setAvatarDialogOpen(true)}
                                             aria-label="Promeni avatar"
                                             sx={{
                                                  mt: 2,
                                                  position: 'relative',
                                                  width: 108,
                                                  height: 108,
                                                  borderRadius: 3,
                                                  border: '2px solid',
                                                  borderColor: Colors.primary.main,
                                                  overflow: 'hidden',
                                                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                                  '&:hover': { transform: 'scale(1.04)', boxShadow: '0 8px 24px rgba(0,0,0,0.16)' },
                                             }}
                                        >
                                             {!imageLoaded && (
                                                  <CircularProgress size={28} sx={{ position: 'absolute', color: Colors.primary.main }} />
                                             )}
                                             <Image
                                                  src={avatarSrc}
                                                  alt="Avatar"
                                                  fill
                                                  sizes="108px"
                                                  style={{ objectFit: 'cover', opacity: imageLoaded ? 1 : 0, transition: 'opacity 0.3s' }}
                                                  onLoad={() => setImageLoaded(true)}
                                             />
                                        </IconButton>
                                   </Tooltip>

                                   <Typography variant="caption" color="text.secondary" sx={{ mt: -1 }}>
                                        Kliknite na sliku da promenite avatar
                                   </Typography>

                                   {/* User info */}
                                   <Box sx={{ display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: 1.5, rowGap: 1, alignItems: 'center', width: '100%', maxWidth: 480 }}>
                                        <PersonIcon fontSize="small" />
                                        <Typography>{customer?.full_name || 'Nije dostupno'}</Typography>

                                        <AlternateEmailIcon fontSize="small" />
                                        <Typography>{customer?.email || user?.email || 'Nije dostupno'}</Typography>

                                        <PhoneInTalkIcon fontSize="small" />
                                        <Typography>{customer?.phone_number || 'Nije dostupno'}</Typography>

                                        <LocationOnIcon fontSize="small" />
                                        <Typography>
                                             {[customer?.street_address, customer?.city].filter(Boolean).join(', ') || 'Nije dostupno'}
                                        </Typography>
                                   </Box>

                                   <Link rel="canonical" href="/nalog" onClick={onClose} style={{ textDecoration: 'none' }}>
                                        <Typography sx={{ mt: 1, textDecoration: 'underline', cursor: 'pointer', color: Colors.primary.light }}>
                                             Profil
                                        </Typography>
                                   </Link>

                                   <Button variant="contained" color="primary" onClick={handleSignOut} sx={{ mt: 1 }}>
                                        Odjavi se
                                   </Button>
                              </Box>
                         )}
                    </DialogContent>
               </Dialog>

               {/* Avatar selection dialog */}
               <Dialog
                    open={avatarDialogOpen}
                    onClose={() => { if (!avatarLoading) setAvatarDialogOpen(false); }}
                    fullWidth
                    maxWidth="xs"
                    BackdropProps={{ sx: { backgroundColor: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(4px)' } }}
                    PaperProps={{ sx: { borderRadius: 3 } }}
               >
                    <DialogTitle>
                         <Box display="flex" alignItems="center" justifyContent="space-between">
                              <Typography component="span" fontWeight={700}>Izaberite avatar</Typography>
                              <IconButton onClick={() => setAvatarDialogOpen(false)} disabled={avatarLoading} aria-label="Zatvori">
                                   <CloseIcon />
                              </IconButton>
                         </Box>
                    </DialogTitle>
                    <DialogContent>
                         <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 3, py: 2 }}>
                              {AVATAR_OPTIONS.map((avatarUrl, index) => {
                                   const isSelected = customer?.avatar === avatarUrl;
                                   return (
                                        <IconButton
                                             key={avatarUrl}
                                             onClick={() => void handleAvatarChange(avatarUrl)}
                                             disabled={avatarLoading}
                                             aria-label={`Izaberite avatar ${index + 1}`}
                                             sx={{
                                                  position: 'relative',
                                                  width: 120,
                                                  height: 120,
                                                  borderRadius: 3,
                                                  overflow: 'hidden',
                                                  border: '3px solid',
                                                  borderColor: isSelected ? Colors.primary.main : 'transparent',
                                                  opacity: avatarLoading && !isSelected ? 0.6 : 1,
                                                  transition: 'transform 0.2s ease, border-color 0.2s ease',
                                                  '&:hover': { transform: 'scale(1.05)' },
                                             }}
                                        >
                                             <Image src={avatarUrl} alt={`Avatar ${index + 1}`} fill sizes="120px" style={{ objectFit: 'cover' }} />
                                        </IconButton>
                                   );
                              })}
                         </Box>
                         {avatarLoading && (
                              <Box sx={{ display: 'flex', justifyContent: 'center', pb: 2 }}>
                                   <CircularProgress size={28} sx={{ color: Colors.primary.main }} />
                              </Box>
                         )}
                    </DialogContent>
               </Dialog>
          </>
     );
}
