import { Box, Typography, useMediaQuery } from "@mui/material"
import { useTheme } from "@mui/system"
import Link from "next/link";
import { BannerContainer } from "../../styles/banner"
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import { useState } from "react";
import { Colors } from "@/styles/theme";

export const BannerServices = () => {

     const theme = useTheme();
     const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"))

     const [loading, setLoading] = useState(false)

     return (
          <BannerContainer sx={{ marginTop: '0px' }}>
               <Typography sx={{ fontSize: '2rem', margin: '20px' }}>
                    Usluge i ponuda
               </Typography>
               <Box sx={{ display: 'flex', justifyContent: 'space-around', flexDirection: isScreenToMedium ? 'column' : 'row' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                         <PeopleAltIcon sx={{ color: Colors.primary.main }} />
                         <Typography sx={{ maxWidth: '400px', fontWeight: 'bold', fontSize: isScreenToMedium ? '1.2rem' : '1.8rem' }}>
                              Savetovanje farmaceuta
                         </Typography>
                         <Typography sx={{ maxWidth: '300px', textAlign: 'center', fontSize: isScreenToMedium ? '1rem' : '1.4rem' }}>
                              Stručni farmaceuti pružaju personalizovane savete o lekovima i zdravlju.
                         </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                         <LocalShippingIcon sx={{ color: Colors.primary.main }} />
                         <Typography sx={{ maxWidth: '300px', fontWeight: 'bold', fontSize: isScreenToMedium ? '1.2rem' : '1.8rem' }}>
                              Dostava lekova
                         </Typography>
                         <Typography sx={{ maxWidth: '300px', textAlign: 'center', fontSize: isScreenToMedium ? '1rem' : '1.4rem' }}>
                              Brza i sigurna dostava lekova na kućnu adresu.
                         </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
                         <MedicationLiquidIcon sx={{ color: Colors.primary.main }} />
                         <Typography sx={{ maxWidth: '300px', fontWeight: 'bold', fontSize: isScreenToMedium ? '1.2rem' : '1.8rem' }}>
                              Priprema lekova
                         </Typography>
                         <Typography sx={{ maxWidth: '300px', textAlign: 'center', fontSize: isScreenToMedium ? '1rem' : '1.4rem' }}>
                              Priprema lekova u tečnom obliku.
                         </Typography>
                    </Box>
               </Box>
          </BannerContainer >
     )
}
