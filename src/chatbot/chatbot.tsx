import React, { useState, useEffect } from "react";
import {
     Fab,
     Drawer,
     Box,
     Typography,
     List,
     ListItem,
     TextField,
     Button,
     IconButton,
} from "@mui/material";
import { Chat as ChatIcon, Close as CloseIcon, Send as SendIcon } from "@mui/icons-material";
import CachedIcon from "@mui/icons-material/Cached";
import { Colors } from "@/styles/theme";
import toast from "react-hot-toast";

type UserInput = {
     question: string;
     contact: string;
};

export default function Chatbot() {
     const [isOpen, setIsOpen] = useState(false);
     const [messages, setMessages] = useState<string[]>([]);
     const [input, setInput] = useState<UserInput>({
          question: "",
          contact: "",
     });
     const [step, setStep] = useState(0); // Tracks conversation progress

     const toggleDrawer = () => {
          setIsOpen(!isOpen);
          if (!isOpen) {
               // Reset state when drawer is opened
               setMessages([
                    "Apoteka DAR: Ćao! 😊",
                    "Apoteka DAR: Kako možemo da vam pomognemo?",
               ]);
               setStep(1);
               setInput({
                    question: "",
                    contact: "",
               });
          }
     };

     const handleSend = () => {

          if (input.question.trim()) {
               setMessages((prev) => [...prev, `Vi: ${input.question}`]);

               if (step === 1) {
                    setStep(2);
                    // User has provided their inquiry
                    setMessages((prev) => [
                         ...prev,
                         `Apoteka DAR: Hvala Vam na poruci... Unesite telefon ili email za kontakt!`,
                    ]);

               }
               if (step === 2) {
                    setStep(3);
                    setMessages((prev) => [
                         ...prev,
                         `Apoteka DAR: Hvala Vam na kontaku. Ako su kontakt podaci validni, neko će Vam se uskoro javiti :)`,
                    ]);
                    sendEmail(input.contact, input.question)
               }
          };
     }
     const sendEmail = async (contact: string, question: string) => {
          const emailSendResponse = await fetch("/api/email/send-chatbot-email-api", {
               method: "POST",
               headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
               },
               body: JSON.stringify({ contact, question })
          })
          emailSendResponse.ok
               ? (() => {
                    toast.success('Poruka poslata!', {
                         position: 'top-center',
                         duration: 3000,
                    });
                    // Wait for 3 seconds before closing the drawer
                    setTimeout(() => {
                         setIsOpen(false);
                    }, 2000);
               })() // Immediately invoke the function to group statements in the ternary
               : toast.error('Poruka nije poslata!', {
                    position: 'top-center',
                    duration: 3000,
               });

     }

     return (
          <>
               <Fab
                    aria-label="chat"
                    style={{ position: "fixed", bottom: 86, right: 16 }}
                    onClick={toggleDrawer}
                    sx={{
                         bgcolor: Colors.primary.light,
                         color: "white",
                         "&:hover": {
                              bgcolor: Colors.primary.dark,
                         },
                    }}
               >
                    <ChatIcon />
               </Fab>
               <Drawer
                    anchor="right"
                    open={isOpen}
                    onClose={toggleDrawer}
                    sx={{
                         backdropFilter: "blur(10px)",
                    }}
                    PaperProps={{
                         sx: {
                              borderRadius: "0px 0px 0px 0px",
                              width: "350px",
                         },
                    }}
               >
                    <Box
                         sx={{
                              height: "100%",
                              display: "flex",
                              flexDirection: "column",
                              backgroundColor: Colors.white,
                         }}
                    >
                         <Box
                              sx={{
                                   p: 2,
                                   borderBottom: 1,
                                   borderColor: "divider",
                                   display: "flex",
                                   justifyContent: "space-between",
                                   alignItems: "center",
                                   backgroundColor: Colors.primary.lighter,
                              }}
                         >
                              <Typography variant="h6">Korisnička podrška</Typography>
                              <IconButton onClick={() => {
                                   setMessages([
                                        "Apoteka DAR: Ćao! 😊",
                                        "Apoteka DAR: Kako možemo da vam pomognemo?",
                                   ])
                                   setInput({
                                        question: "",
                                        contact: "",
                                   })
                                   setStep(1)
                              }
                              }>
                                   <CachedIcon />
                              </IconButton>
                              <IconButton onClick={toggleDrawer}>
                                   <CloseIcon />
                              </IconButton>
                         </Box>
                         <List sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
                              {messages.map((message, index) => (
                                   <ListItem key={index}>
                                        <Typography
                                             variant="body1"
                                             sx={{
                                                  overflowWrap: "break-word",
                                                  wordBreak: "break-word",
                                                  whiteSpace: "pre-wrap",
                                                  textAlign: message.startsWith("Vi") ? "right" : "left",
                                                  color: message.startsWith("Vi") ? Colors.primary.light : Colors.primary.main,
                                             }}
                                        >
                                             {message}
                                        </Typography>
                                   </ListItem>
                              ))}
                         </List>
                         {step <= 3 && (
                              <Box
                                   sx={{
                                        p: 2,
                                        borderTop: 1,
                                        borderColor: "divider",
                                        display: "flex",
                                   }}
                              >
                                   <TextField
                                        fullWidth
                                        variant="outlined"
                                        placeholder={
                                             step === 1
                                                  ? "Postavite nam pitanje..."
                                                  : "Unesite telefon ili email..."
                                        }
                                        value={step === 1 ? input.question : input.contact}
                                        onChange={(e) => setInput((input: UserInput) =>
                                             step === 1
                                                  ? { ...input, question: e.target.value }
                                                  : { ...input, contact: e.target.value }
                                        )}
                                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                        disabled={step === 3}
                                   />
                                   <Button
                                        variant="contained"
                                        endIcon={<SendIcon />}
                                        onClick={handleSend}
                                        sx={{
                                             ml: 1,
                                             bgcolor: Colors.primary.light,
                                        }}
                                        disabled={step === 3}
                                   >
                                        Send
                                   </Button>
                              </Box>
                         )}
                    </Box>
               </Drawer >
          </>
     );
}
