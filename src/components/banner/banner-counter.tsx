import { Box, Stack, Typography, useMediaQuery } from "@mui/material"
import { useTheme } from "@mui/system"
import Link from "next/link";
import { BannerContainer } from "../../styles/banner"
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import { useState } from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { Colors } from "@/styles/theme";
import { fShortenNumber } from "@/utils/format-number";

export const BannerCountUp = () => {

     const theme = useTheme();
     const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"))

     const [loading, setLoading] = useState(false)

     const SUMMARY = [
          { name: 'Zadovoljnih potrošača', number: 3000 },
          { name: 'Proizvoda na raspolaganju', number: 5000 },
          { name: 'Procenata kupaca se vraća kod nas', number: 90 },
          { name: 'Poslatih proizvoda', number: 10000 },
     ];

     return (
          <BannerContainer sx={{ marginTop: '0px' }}>
               <Typography sx={{ marginTop: '20px', fontWeight: 'bold', fontSize: isScreenToMedium ? '1.8rem' : '2rem' }}>
                    Naši uspesi
               </Typography>
               <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                    {({ isVisible }: any) => (
                         <Box
                              sx={{
                                   rowGap: 2,
                                   columnGap: 1,
                                   display: 'grid',
                                   textAlign: 'center',
                                   gridTemplateColumns: {
                                        xs: 'repeat(2, 1fr)',
                                        md: 'repeat(4, 1fr)',
                                   },
                                   pt: { xs: 1, md: 5 },
                                   pl: '10px',
                                   pb: '20px',
                              }}
                         >
                              {SUMMARY.map((value) => (
                                   <Stack key={value.name} spacing={1}>
                                        <Typography sx={{ textAlign: 'center', fontSize: isScreenToMedium ? '1rem' : '1.4rem' }}>
                                             <CountUp
                                                  start={value.number / 5}
                                                  end={value.number}
                                                  formattingFn={(newValue: number) => fShortenNumber(newValue)}
                                             />

                                             <Typography
                                                  variant="h4"
                                                  component="span"
                                             >
                                                  +
                                             </Typography>
                                        </Typography>

                                        <Typography sx={{ maxWidth: '300px', textAlign: 'center', fontSize: isScreenToMedium ? '1rem' : '1.4rem' }}>
                                             {value.name}
                                        </Typography>
                                   </Stack>
                              ))}
                         </Box>
                    )}
               </VisibilitySensor>
          </BannerContainer >
     )
}
