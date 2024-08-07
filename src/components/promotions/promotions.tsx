import { Slide } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { MessageText, PromotionsContainer } from "../../styles/promotions";

const messages = [
     "Mala apoteka VELIKOG srca!",
     "Besplatna poštarina za pakete preko 8000 dinara!",
     "Prijavite se na naše vesti i akcije!",
     "Nalazimo se u TC Prostor, Kragujevac!",
     "Kolagen Crux...Na 3 kutije dodatnih 10% popusta!",
     "Kolagen Crux...Na 5 kutija dodatnih 15% popusta!"
];
export default function Promotions() {

     const containerRef = useRef();
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
          <PromotionsContainer ref={containerRef} overflow="hidden">
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
                         <MessageText>
                              {messages[messageIndex]}
                         </MessageText>
                    </Box>
               </Slide>
          </PromotionsContainer>
     );
}
