import { Slide, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "@/styles/theme";
import { useEffect, useRef, useState } from "react";

const messages = [
     "Mala apoteka VELIKOG srca!",
     "Besplatna poštarina za pakete preko 8000 dinara!",
     "U slučaju da nemamo proizvod na sajtu, možete pozvati našu apoteku!",
     "Prijavite se na naše vesti i akcije!",
     "Nalazimo se u TC Prostor, Kragujevac!",
     "Kolagen Crux...Na 3 kutije dodatnih 10% popusta!",
     "Kolagen Crux...Na 5 kutija dodatnih 15% popusta!"
];
export default function Promotions() {

     const containerRef = useRef<HTMLDivElement>();
     const [show, setShow] = useState(true);
     const [messageIndex, setMessageIndex] = useState(0);

     useEffect(() => {
          setTimeout(() => {
               setShow(false);
          }, 3000);
          const intervalId = setInterval(() => {
               // get next message
               setMessageIndex((i) => (i + 1) % messages.length);

               // slide the message in
               setShow(true);

               setTimeout(() => {
                    setShow(false);
               }, 3000);
          }, 4000);

          return () => {
               clearInterval(intervalId);
          }
     }, [])

     return (
          <Box
               ref={containerRef}
               sx={{
                    borderRadius: '5px',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                    height: '55px',
                    background: Colors.primary.lighter
               }}
          >
               <Slide
                    direction={show ? "left" : "right"}
                    in={show}
                    container={containerRef.current}
                    timeout={{
                         enter: 500,
                         exit: 100,
                    }}
               >
                    <Box display="flex" justifyContent="center" alignItems="center">
                         <Typography
                              sx={{
                                   '@media (min-width: 900px)': {
                                        fontSize: "2rem",
                                        fontWeight: "bold",
                                        lineHeight: 1.2,
                                   },
                                   '@media (max-width: 900px)': {
                                        fontSize: "1rem",
                                        lineHeight: 1.25,
                                        fontWeight: 600,
                                   },
                                   color: Colors.primary.dark
                              }}
                         >
                              {messages[messageIndex]}
                         </Typography>
                    </Box>
               </Slide>
          </Box>
     );
}
