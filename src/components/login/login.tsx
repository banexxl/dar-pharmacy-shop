'use client';

import {
     Box,
     Button,
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
import LoadingWheel from '../loading/loading';
import { useAuth } from '@/hooks/useAuth';
import { Customer } from '@/schemas/customer';

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
          isAuthenticated,
          loading: authLoading,
     } = useAuth();

     const router = useRouter();

     const [userData, setUserData] =
          useState<Customer | null>(null);

     const [loading, setLoading] = useState(false);
     const [avatarLoading, setAvatarLoading] =
          useState(false);

     const [avatarDialogOpen, setAvatarDialogOpen] =
          useState(false);

     const [selectedAvatar, setSelectedAvatar] =
          useState('');

     useEffect(() => {
          if (!user?.email) {
               setUserData(null);
               setSelectedAvatar('');
               setLoading(false);
               return;
          }

          const controller = new AbortController();

          const fetchUserData = async () => {
               try {
                    setLoading(true);

                    const response = await fetch(
                         '/api/users',
                         {
                              method: 'POST',
                              headers: {
                                   'Content-Type':
                                        'application/json',
                              },
                              body: JSON.stringify({
                                   email: user.email,
                              }),
                              signal: controller.signal,
                         }
                    );

                    if (!response.ok) {
                         throw new Error(
                              'Greška prilikom učitavanja korisnika.'
                         );
                    }

                    const data =
                         (await response.json()) as Customer;

                    setUserData(data);
                    setSelectedAvatar(data?.avatar || '');
               } catch (error) {
                    if (
                         error instanceof Error &&
                         error.name === 'AbortError'
                    ) {
                         return;
                    }

                    console.error(
                         'Error fetching user data:',
                         error
                    );
               } finally {
                    if (!controller.signal.aborted) {
                         setLoading(false);
                    }
               }
          };

          void fetchUserData();

          return () => {
               controller.abort();
          };
     }, [user?.email]);

     useEffect(() => {
          if (
               open &&
               !isAuthenticated &&
               !authLoading
          ) {
               onClose?.();
               router.push('/autentifikacija/prijava');
          }
     }, [
          open,
          isAuthenticated,
          authLoading,
          onClose,
          router,
     ]);

     const handleAvatarChange = async (
          avatarUrl: string
     ) => {
          if (!user?.id || avatarLoading) {
               return;
          }

          if (avatarUrl === selectedAvatar) {
               setAvatarDialogOpen(false);
               return;
          }

          try {
               setAvatarLoading(true);

               const supabase = (
                    await import(
                         '@/lib/supabase/browser'
                    )
               ).createClient();

               const { data, error } = await supabase
                    .from('customers')
                    .update({
                         avatar: avatarUrl,
                         updated_at:
                              new Date().toISOString(),
                    })
                    .eq('user_id', user.id)
                    .select('avatar')
                    .single();

               if (error) {
                    throw error;
               }

               const updatedAvatar =
                    data?.avatar || avatarUrl;

               setSelectedAvatar(updatedAvatar);

               setUserData((previous) => {
                    if (!previous) {
                         return previous;
                    }

                    return {
                         ...previous,
                         avatar: updatedAvatar,
                    };
               });

               setAvatarDialogOpen(false);
               router.refresh();
          } catch (error) {
               console.error(
                    'Error updating customer avatar:',
                    error
               );
          } finally {
               setAvatarLoading(false);
          }
     };

     const handleSignOut = async () => {
          try {
               setLoading(true);

               const supabase = (
                    await import(
                         '@/lib/supabase/browser'
                    )
               ).createClient();

               const { error } =
                    await supabase.auth.signOut();

               if (error) {
                    throw error;
               }

               onClose?.();
               router.push('/');
               router.refresh();
          } catch (error) {
               console.error(
                    'Error signing out:',
                    error
               );
          } finally {
               setLoading(false);
          }
     };

     if (!isAuthenticated) {
          return null;
     }

     return (
          <>
               <Dialog
                    TransitionComponent={
                         SlideTransition
                    }
                    open={open}
                    onClose={onClose}
                    fullWidth
                    maxWidth="sm"
                    BackdropProps={{
                         sx: {
                              backgroundColor:
                                   'rgba(0,0,0,0.4)',
                              backdropFilter: 'blur(4px)',
                         },
                    }}
                    PaperProps={{
                         sx: {
                              borderRadius: 3,
                              boxShadow:
                                   '0 16px 40px rgba(0,0,0,0.2)',
                              overflow: 'hidden',
                         },
                    }}
               >
                    <DialogTitle
                         sx={{
                              px: 3,
                              py: 2,
                              bgcolor:
                                   'rgba(0,0,0,0.02)',
                         }}
                    >
                         <Box
                              display="flex"
                              alignItems="center"
                              justifyContent="space-between"
                         >
                              <Typography
                                   sx={{
                                        fontWeight: 700,
                                        color: Colors
                                             .primary.main,
                                   }}
                              >
                                   Profil
                              </Typography>

                              <IconButton
                                   onClick={onClose}
                                   aria-label="Zatvori"
                                   sx={{
                                        color: 'text.primary',
                                   }}
                              >
                                   <CloseIcon />
                              </IconButton>
                         </Box>
                    </DialogTitle>

                    <DialogContent
                         sx={{ px: 3, py: 3 }}
                    >
                         {loading ? (
                              <LoadingWheel />
                         ) : (
                              <Box
                                   sx={{
                                        display: 'flex',
                                        flexDirection:
                                             'column',
                                        alignItems:
                                             'center',
                                        gap: 2,
                                   }}
                              >
                                   <Tooltip title="Promeni avatar">
                                        <IconButton
                                             onClick={() =>
                                                  setAvatarDialogOpen(
                                                       true
                                                  )
                                             }
                                             aria-label="Promeni avatar"
                                             sx={{
                                                  position:
                                                       'relative',
                                                  width: 108,
                                                  height: 108,
                                                  borderRadius: 3,
                                                  border:
                                                       '2px solid',
                                                  borderColor:
                                                       Colors
                                                            .primary
                                                            .main,
                                                  overflow:
                                                       'hidden',
                                                  transition:
                                                       'transform 0.2s ease, box-shadow 0.2s ease',
                                                  '&:hover': {
                                                       transform:
                                                            'scale(1.04)',
                                                       boxShadow:
                                                            '0 8px 24px rgba(0,0,0,0.16)',
                                                  },
                                             }}
                                        >
                                             {selectedAvatar ? (
                                                  <Image
                                                       src={
                                                            selectedAvatar
                                                       }
                                                       alt="Avatar"
                                                       fill
                                                       sizes="108px"
                                                       style={{
                                                            objectFit:
                                                                 'cover',
                                                       }}
                                                  />
                                             ) : (
                                                  <PersonIcon
                                                       sx={{
                                                            fontSize: 56,
                                                       }}
                                                  />
                                             )}
                                        </IconButton>
                                   </Tooltip>

                                   <Typography
                                        variant="caption"
                                        color="text.secondary"
                                        sx={{ mt: -1 }}
                                   >
                                        Kliknite na sliku da
                                        promenite avatar
                                   </Typography>

                                   <Box
                                        sx={{
                                             display: 'grid',
                                             gridTemplateColumns:
                                                  'auto 1fr',
                                             columnGap: 1.5,
                                             rowGap: 1,
                                             alignItems:
                                                  'center',
                                             width: '100%',
                                             maxWidth: 480,
                                        }}
                                   >
                                        <PersonIcon fontSize="small" />

                                        <Typography>
                                             {userData?.full_name || 'Nije dostupno'}
                                        </Typography>

                                        <AlternateEmailIcon fontSize="small" />

                                        <Typography>
                                             {userData?.email ||
                                                  user?.email ||
                                                  'Nije dostupno'}
                                        </Typography>

                                        <PhoneInTalkIcon fontSize="small" />

                                        <Typography>
                                             {userData?.phone_number ||
                                                  'Nije dostupno'}
                                        </Typography>

                                        <LocationOnIcon fontSize="small" />

                                        <Typography>
                                             {[
                                                  userData?.street_address,
                                                  userData?.city,
                                             ]
                                                  .filter(Boolean)
                                                  .join(', ') ||
                                                  'Nije dostupno'}
                                        </Typography>
                                   </Box>

                                   <Link
                                        rel="canonical"
                                        href="/nalog"
                                        onClick={onClose}
                                        style={{
                                             textDecoration:
                                                  'none',
                                        }}
                                   >
                                        <Typography
                                             sx={{
                                                  mt: 1,
                                                  textDecoration:
                                                       'underline',
                                                  cursor: 'pointer',
                                                  color: Colors
                                                       .primary
                                                       .light,
                                             }}
                                        >
                                             Profil
                                        </Typography>
                                   </Link>

                                   <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={
                                             handleSignOut
                                        }
                                        sx={{ mt: 1 }}
                                   >
                                        Odjavi se
                                   </Button>
                              </Box>
                         )}
                    </DialogContent>
               </Dialog>

               <Dialog
                    open={avatarDialogOpen}
                    onClose={() => {
                         if (!avatarLoading) {
                              setAvatarDialogOpen(
                                   false
                              );
                         }
                    }}
                    fullWidth
                    maxWidth="xs"
                    BackdropProps={{
                         sx: {
                              backgroundColor:
                                   'rgba(0,0,0,0.45)',
                              backdropFilter: 'blur(4px)',
                         },
                    }}
                    PaperProps={{
                         sx: {
                              borderRadius: 3,
                         },
                    }}
               >
                    <DialogTitle>
                         <Box
                              display="flex"
                              alignItems="center"
                              justifyContent="space-between"
                         >
                              <Typography
                                   component="span"
                                   fontWeight={700}
                              >
                                   Izaberite avatar
                              </Typography>

                              <IconButton
                                   onClick={() =>
                                        setAvatarDialogOpen(
                                             false
                                        )
                                   }
                                   disabled={avatarLoading}
                                   aria-label="Zatvori"
                              >
                                   <CloseIcon />
                              </IconButton>
                         </Box>
                    </DialogTitle>

                    <DialogContent>
                         <Box
                              sx={{
                                   display: 'flex',
                                   justifyContent:
                                        'center',
                                   flexWrap: 'wrap',
                                   gap: 3,
                                   py: 2,
                              }}
                         >
                              {AVATAR_OPTIONS.map(
                                   (
                                        avatarUrl,
                                        index
                                   ) => {
                                        const isSelected =
                                             selectedAvatar ===
                                             avatarUrl;

                                        return (
                                             <IconButton
                                                  key={
                                                       avatarUrl
                                                  }
                                                  onClick={() =>
                                                       void handleAvatarChange(
                                                            avatarUrl
                                                       )
                                                  }
                                                  disabled={
                                                       avatarLoading
                                                  }
                                                  aria-label={`Izaberite avatar ${index +
                                                       1
                                                       }`}
                                                  sx={{
                                                       position:
                                                            'relative',
                                                       width: 120,
                                                       height: 120,
                                                       borderRadius: 3,
                                                       overflow:
                                                            'hidden',
                                                       border:
                                                            '3px solid',
                                                       borderColor:
                                                            isSelected
                                                                 ? Colors
                                                                      .primary
                                                                      .main
                                                                 : 'transparent',
                                                       opacity:
                                                            avatarLoading &&
                                                                 !isSelected
                                                                 ? 0.6
                                                                 : 1,
                                                       transition:
                                                            'transform 0.2s ease, border-color 0.2s ease',
                                                       '&:hover': {
                                                            transform:
                                                                 'scale(1.05)',
                                                       },
                                                  }}
                                             >
                                                  <Image
                                                       src={
                                                            avatarUrl
                                                       }
                                                       alt={`Avatar ${index +
                                                            1
                                                            }`}
                                                       fill
                                                       sizes="120px"
                                                       style={{
                                                            objectFit:
                                                                 'cover',
                                                       }}
                                                  />
                                             </IconButton>
                                        );
                                   }
                              )}
                         </Box>

                         {avatarLoading && (
                              <Box
                                   sx={{
                                        display: 'flex',
                                        justifyContent:
                                             'center',
                                        pb: 2,
                                   }}
                              >
                                   <LoadingWheel />
                              </Box>
                         )}
                    </DialogContent>
               </Dialog>
          </>
     );
}