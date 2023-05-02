import React, { useEffect, useRef, useState } from 'react'
import maplibregl from 'maplibre-gl';
import { ContactContainer, ContactMap } from '@/styles/contact/contact';
import { Colors } from '@/styles/theme';

export type ContactPageProps = {
          mapApiKey: string
}

function Contact(props: ContactPageProps) {

          const mapContainer = useRef(null);
          const map = useRef<maplibregl.Map>();
          const [lat, setLat] = useState(44.01262879017728)
          const [long, setLong] = useState(20.912097948648388)
          const [currentLocation, setCurrentLocation] = useState<GeolocationPosition>()

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

          useEffect(() => {
                    if (map.current) return; //stops map from intializing more than once
                    map.current = new maplibregl.Map({
                              container: mapContainer.current!,
                              style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${props.mapApiKey}`,
                              center: [long, lat],
                              zoom: 18,
                              maplibreLogo: false,
                    });

                    map.current.addControl(new maplibregl.NavigationControl({ showZoom: true, showCompass: true }), 'top-left');
                    new maplibregl.Marker({ color: Colors.primary })
                              .setLngLat([20.912097948648388, 44.01262879017728])
                              .addTo(map.current)

                    return () => {
                              map.current?.remove;
                    }
          });

          return (
                    <ContactContainer>
                              <ContactMap ref={mapContainer} />
                    </ContactContainer>
          )
}

export default Contact