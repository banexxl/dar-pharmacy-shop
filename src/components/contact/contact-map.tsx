'use client';

import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { Box, CircularProgress } from '@mui/material';
import { Colors } from '@/styles/theme';

export type ContactMapProps = {
     mapApiKey: string;
};

const POSITION = {
     lat: 44.01262879017728,
     lng: 20.912097948648388,
};

export const ContactMap = ({ mapApiKey }: ContactMapProps) => {
     const mapRef = useRef<HTMLDivElement>(null);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState<string | null>(null);

     useEffect(() => {
          if (!mapRef.current || !mapApiKey) {
               setLoading(false);
               setError('API ključ nije dostupan.');
               return;
          }

          const loader = new Loader({
               apiKey: mapApiKey,
               version: 'weekly',
          });

          loader.importLibrary('marker')
               .then(({ AdvancedMarkerElement, Marker }) => {
                    if (AdvancedMarkerElement) {
                         new AdvancedMarkerElement({
                              position: POSITION,
                              Map,
                              title: 'Apoteka DAR',
                         });
                    } else if (Marker) {
                         new Marker({
                              position: POSITION,
                              Map,
                              title: 'Apoteka DAR',
                         });
                    }
               })
               .catch(() => {
                    console.warn('Marker library failed to load');
               });
     }, [mapApiKey]);

     return (
          <Box
               sx={{
                    position: 'relative',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    width: '100%',
                    height: { xs: '300px', md: '100%' },
                    minHeight: { xs: 250, md: 400 },
                    bgcolor: Colors.neutral[100],
               }}
          >
               {loading && (
                    <Box sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                         <CircularProgress sx={{ color: Colors.primary.main }} />
                    </Box>
               )}
               {error && !loading && (
                    <Box sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                         <Box sx={{ textAlign: 'center', color: Colors.neutral[600] }}>{error}</Box>
                    </Box>
               )}
               <Box ref={mapRef} sx={{ width: '100%', height: '100%' }} />
          </Box>
     );
};
