import { Slide, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";

const messages = [
     "Mala apoteka VELIKOG srca!",
     "Besplatna poštarina za pakete preko 8000 dinara!",
     "U slučaju da nemamo proizvod na sajtu,možete poslati Upit na mail",
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
               className="PromotionsContainer"
               ref={containerRef}
               sx={{
                    padding: "20px 0px 20px 0px",
                    '@media (max-width: 900px)': {
                         padding: "20px",
                    },
                    borderRadius: '5px',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                    height: '70px'
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
                              className="MessageText"
                              sx={{
                                   '@media (min-width: 900px)': {
                                        fontSize: "2.2rem",
                                        fontWeight: "bold",
                                   },
                                   '@media (max-width: 900px)': {
                                        fontSize: "1.5rem",
                                   },
                              }}
                         >
                              {messages[messageIndex]}
                         </Typography>
                    </Box>
               </Slide>
          </Box>
     );
}
