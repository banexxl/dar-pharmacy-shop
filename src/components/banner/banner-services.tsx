import { Box, Typography, useMediaQuery, Container } from "@mui/material";
import { useTheme } from "@mui/system";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import { useState } from "react";
import { Colors } from "@/styles/theme";

export const BannerServices = () => {

     const theme = useTheme();
     const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"));

     const [loading, setLoading] = useState(false);

     return (
          <Box
               sx={{
                    width: '100vw',
                    position: 'relative',
                    left: '50%',
                    right: '50%',
                    marginLeft: '-50vw',
                    marginRight: '-50vw',
                    backgroundColor: Colors.secondary[50],
                    py: { xs: 4, md: 6 },
               }}
          >
               <Container maxWidth="xl">
                    <Typography
                         variant="h2"
                         sx={{
                              fontSize: { xs: '2rem', md: '2.5rem' },
                              fontWeight: 700,
                              color: Colors.primary.main,
                              mb: 3,
                              textAlign: 'center',
                         }}
                    >
                         Usluge i ponuda
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'stretch', gap: 3, flexDirection: isScreenToMedium ? 'column' : 'row' }}>
                         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', px: 2 }}>
                              <PeopleAltIcon sx={{ color: Colors.primary.main }} />
                              <Typography sx={{ maxWidth: '400px', fontWeight: 'bold', fontSize: isScreenToMedium ? '1.2rem' : '1.8rem', mt: 1 }}>
                                   Savetovanje farmaceuta
                              </Typography>
                              <Typography sx={{ maxWidth: '420px', textAlign: 'center', fontSize: isScreenToMedium ? '1rem' : '1.1rem', color: Colors.neutral[700] }}>
                                   Stručni farmaceuti pružaju personalizovane savete o lekovima i zdravlju.
                              </Typography>
                         </Box>
                         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', px: 2 }}>
                              <LocalShippingIcon sx={{ color: Colors.primary.main }} />
                              <Typography sx={{ maxWidth: '400px', fontWeight: 'bold', fontSize: isScreenToMedium ? '1.2rem' : '1.8rem', mt: 1 }}>
                                   Dostava lekova
                              </Typography>
                              <Typography sx={{ maxWidth: '420px', textAlign: 'center', fontSize: isScreenToMedium ? '1rem' : '1.1rem', color: Colors.neutral[700] }}>
                                   Brza i sigurna dostava lekova na kućnu adresu.
                              </Typography>
                         </Box>
                         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', px: 2, mb: { xs: 2, md: 0 } }}>
                              <MedicationLiquidIcon sx={{ color: Colors.primary.main }} />
                              <Typography sx={{ maxWidth: '400px', fontWeight: 'bold', fontSize: isScreenToMedium ? '1.2rem' : '1.8rem', mt: 1 }}>
                                   Priprema lekova
                              </Typography>
                              <Typography sx={{ maxWidth: '420px', textAlign: 'center', fontSize: isScreenToMedium ? '1rem' : '1.1rem', color: Colors.neutral[700] }}>
                                   Priprema lekova u tečnom obliku.
                              </Typography>
                         </Box>
                    </Box>
               </Container>
          </Box>
     );
}

