'use client';

import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import Box from '@mui/material/Box';

export type ContactMapProps = {
     mapApiKey: string;
};

const POSITION = {
     lat: 44.01262879017728,
     lng: 20.912097948648388,
};

export const ContactMap = ({ mapApiKey }: ContactMapProps) => {
     const mapRef = useRef<HTMLDivElement>(null);

     useEffect(() => {
          if (!mapRef.current || !mapApiKey) return;

          const loader = new Loader({
               apiKey: mapApiKey,
               version: 'weekly',
          });

          let map: google.maps.Map | undefined;

          loader
               .load()
               .then(() => {
                    if (!mapRef.current) return;

                    map = new google.maps.Map(mapRef.current, {
                         center: POSITION,
                         zoom: 14,
                    });

                    new google.maps.Marker({
                         position: POSITION,
                         map,
                         title: 'Our location',
                    });
               })
               .catch((error) => {
                    console.error('Failed to load Google Maps:', error);
               });

          return () => {
               if (map) {
                    google.maps.event.clearInstanceListeners(map);
               }
          };
     }, [mapApiKey]);

     return (
          <Box
               ref={mapRef}
               sx={{
                    borderRadius: '10px',
                    overflow: 'hidden',
                    width: {
                         xs: '80%',
                         md: '400px',
                    },
                    height: {
                         xs: '200px',
                         md: '300px',
                    },
               }}
          />
     );
};