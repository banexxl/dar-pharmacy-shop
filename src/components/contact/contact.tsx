import React, { useEffect, useRef, useState } from 'react'
import maplibregl from 'maplibre-gl';
import { Box } from '@mui/material';
import { ContactContainer, ContactMap } from '@/styles/contact/contact';

function Contact() {

          const mapContainer = useRef(null);
          const map = useRef<maplibregl.Map>();
          const [lat, setLat] = useState(44.01274935)
          const [long, setLong] = useState(20.9116652)
          const [currentLocation, setCurrentLocation] = useState<GeolocationPosition>()

          useEffect(() => {

                    const options = {
                              enableHighAccuracy: true,
                              timeout: 5000,
                              maximumAge: 0
                    };

                    function success(pos: GeolocationPosition) {
                              setCurrentLocation(pos)
                    }

                    function error(err: any) {
                              console.warn(`ERROR(${err.code}): ${err.message}`);
                    }

                    navigator.geolocation.getCurrentPosition(success, error, options);


                    if (map.current) return; //stops map from intializing more than once
                    map.current = new maplibregl.Map({
                              container: mapContainer.current!,
                              style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${'PFj6lLDUt4uTwv8RNixm'}`,
                              center: [long, lat],
                              zoom: 18,
                    });
          });

          return (
                    <ContactContainer>
                              <ContactMap ref={mapContainer} />
                    </ContactContainer>
          )
}

export default Contact