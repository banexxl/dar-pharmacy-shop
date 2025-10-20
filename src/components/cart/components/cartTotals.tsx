import { cartTotalPriceSelector } from '@/store/cart/cart.selector'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Button, Divider, LinearProgress, Typography } from '@mui/material'
import theme, { Colors } from '@/styles/theme'
import { useRouter } from 'next/router'

interface ICartTotalsProps {
     onClose: () => void
}

const centeredDividerSx = {
     width: '60%',
     border: `1px solid ${theme.palette.primary.main}`,
     my: 2,
     mx: 'auto'
}

function CartTotals({ onClose }: ICartTotalsProps) {
     const totalItemPrice: any = useSelector(cartTotalPriceSelector)
     const cart = useSelector((state: any) => state.persistReduce.cartSliceReducer)
     const router = useRouter()

     return (
          <Box className="StyledTotalsBox" sx={{ mt: { xs: 1.5, md: 2 } }}>
               <Divider sx={centeredDividerSx} />

               {cart.length > 0 ? (
                    <Box className="StyledTotalsPrice">
                         {!isNaN(parseFloat(totalItemPrice)) && parseFloat(totalItemPrice) < 8000 ? (
                              <Box sx={{ textAlign: 'center', alignItems: 'center' }}>
                                   <Typography className="StyledTotalsTitle" sx={{ color: Colors.primary.darker }}>
                                        Ukupno u korpi:
                                   </Typography>
                                   {(parseFloat(totalItemPrice).toFixed(2) + ' RSD')}
                                   <Typography
                                        sx={{
                                             color: Colors.primary.darker,
                                             fontSize: '.8rem',
                                             textAlign: 'center'
                                        }}
                                   >
                                        / na ovaj iznos će biti naplaćena dostava
                                   </Typography>
                                   <Box sx={{ display: 'flex', flexDirection: 'column', mt: 2, alignItems: 'center' }} >
                                        <LinearProgress
                                             variant="determinate"
                                             value={(parseFloat(totalItemPrice) / 8000) * 100}
                                             color="error"
                                             sx={{
                                                  height: '10px',
                                                  borderRadius: '10px',
                                                  flexGrow: 1,
                                                  width: '100px'
                                             }}
                                        />
                                        <Typography sx={{ color: Colors.primary.main, fontSize: '1rem', textAlign: 'center' }}>
                                             PDV uračunat u cenu i nema skrivenih troškova.
                                        </Typography>
                                   </Box>
                              </Box>
                         ) : (
                              <Box sx={{
                                   display: 'flex',
                                   justifyContent: 'center',
                                   flexDirection: 'column',
                                   alignItems: 'center',
                                   width: '100%',
                                   textAlign: 'center',
                                   color: Colors.primary.darker
                              }}>
                                   <Typography className="StyledTotalsTitle" sx={{ color: Colors.primary.darker }}>
                                        Ukupno u korpi:
                                   </Typography>
                                   {(parseFloat(totalItemPrice).toFixed(2) + ' RSD')}
                                   <Typography
                                        sx={{
                                             color: Colors.primary.main,
                                             fontSize: '.8rem',
                                             textAlign: 'center'
                                        }}
                                   >
                                        / besplatna dostava
                                   </Typography>
                                   <Typography sx={{ color: Colors.primary.main, fontSize: '1rem', textAlign: 'center' }}>
                                        PDV uračunat u cenu i nema skrivenih troškova.
                                   </Typography>
                              </Box>
                         )}
                    </Box>
               ) : (
                    <Typography sx={{ color: Colors.primary.main, fontSize: '1rem', textAlign: 'center' }}>
                         Vaša korpa je prazna
                    </Typography>
               )}

               <Box
                    sx={{
                         display: 'flex',
                         flexDirection: 'column',
                         justifyContent: 'center',
                         alignItems: 'center',
                         width: '100%',
                         gap: '8px',
                    }}
               >
                    <Box
                         sx={{
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'center',
                              alignItems: 'center',
                              width: '100%',
                              gap: '8px',
                         }}
                    >
                         <Button onClick={onClose} sx={{ backgroundColor: theme.palette.primary.dark, color: 'white' }}>
                              <Link rel='canonical' href='/'>
                                   Nazad u apoteku
                              </Link>
                         </Button>
                         <Button
                              disabled={parseFloat(totalItemPrice) === 450}
                              onClick={() => router.push('/placanje')}
                              sx={{ backgroundColor: theme.palette.primary.dark, color: 'white' }}
                         >
                              KREIRAJ PORUDŽBENICU
                         </Button>
                    </Box>
               </Box>

               <Divider sx={centeredDividerSx} />
               <Typography sx={{ color: Colors.primary.main, fontSize: '1.3rem', textAlign: 'center', mt: '30px', mb: '30px' }}>
                    Detalje isporuke i plaćanja možete pogledati <Link rel='canonical' href='/informacije/isporuka-i-placanje'>OVDE!</Link>
               </Typography>
               <Divider sx={centeredDividerSx} />
               <Typography sx={{ color: Colors.primary.main, fontSize: '1.3rem', textAlign: 'center', mt: '24px', mb: '24px', maxWidth: '640px', mx: 'auto' }}>
                    Ako je neki od proizvoda na promociji (npr. kupi 2 dobiješ 3, ili na 3 kutije dobiješ 10% popusta, itd.), popust će biti obračunat prilikom slanja paketa(ne prilikom kreiranja PORUDŽBENICE).
               </Typography>
          </Box>
     )
}
export default CartTotals
