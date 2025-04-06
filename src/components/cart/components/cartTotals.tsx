import { cartTotalPriceSelector } from '@/store/cart/cart.selector'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import { StyledTotalsBox, StyledTotalsPrice, StyledTotalsTitle } from '@/styles/cart'
import { Box, Button, Divider, LinearProgress, Typography } from '@mui/material'
import theme, { Colors } from '@/styles/theme'
import { useRouter } from 'next/router'

interface ICartTotalsProps {
     onClose: () => void
}

function CartTotals({ onClose }: ICartTotalsProps) {

     const totalItemPrice: any = useSelector(cartTotalPriceSelector)
     const cart = useSelector((state: any) => state.persistReduce.cartSliceReducer)
     const router = useRouter()

     return (
          <StyledTotalsBox theme={theme}>
               <Divider sx={{ width: '60%', border: `1px solid ${theme.palette.primary.main}`, my: 2 }} />

               {cart.length > 0 ? (
                    <StyledTotalsPrice>
                         {
                              !isNaN(parseFloat(totalItemPrice)) && parseFloat(totalItemPrice) < 8000 ? (
                                   <Box>
                                        <StyledTotalsTitle theme={theme}>
                                             Ukupno u korpi:
                                        </StyledTotalsTitle>
                                        {(parseFloat(totalItemPrice).toFixed(2) + ' RSD')}
                                        <Typography
                                             sx={{
                                                  color: Colors.primary.main,
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
                              )
                                   :
                                   (
                                        <Box sx={{
                                             display: 'flex',
                                             justifyContent: 'space-between',
                                             flexDirection: 'column',
                                             alignItems: 'center',
                                             width: '100%'
                                        }}>
                                             <StyledTotalsTitle theme={theme}>
                                                  Ukupno u korpi:
                                             </StyledTotalsTitle>
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
                                   )
                         }

                    </StyledTotalsPrice>
               ) : (
                    <Typography sx={{ color: Colors.primary.main, fontSize: '1rem', textAlign: 'center' }}>
                         Vaša korpa je prazna
                    </Typography>
               )}

               {/* <Divider sx={{ width: '60%', border: `1px solid ${theme.palette.primary.main}`, my: 2 }} /> */}
               <Box
                    sx={{
                         display: 'flex',
                         flexDirection: 'row',
                         [theme.breakpoints.down('md')]: {
                              flexDirection: 'column',
                         },
                         justifyContent: 'space-between',
                         alignItems: 'center',
                         width: '50%',
                         gap: '5px',
                    }}
               >
                    <Box
                         sx={{
                              display: 'flex',
                              flexDirection: 'row',
                              [theme.breakpoints.down('md')]: {
                                   flexDirection: 'column',
                              },
                              justifyContent: 'space-around',
                              alignItems: 'center',
                              width: '100%',
                              gap: '5px',
                         }}
                    >

                         <Button onClick={onClose} sx={{ backgroundColor: theme.palette.secondary.light }}>
                              <Link rel='canonical' href='/'>
                                   Nazad u apoteku
                              </Link>
                         </Button>
                         <Button
                              disabled={parseFloat(totalItemPrice) === 450}
                              onClick={() => router.push('/placanje')}
                              sx={{ backgroundColor: theme.palette.secondary.light }}
                         >
                              KREIRAJ PORUDŽBENICU
                         </Button>
                    </Box>
               </Box>
               <Divider sx={{ width: '60%', border: `1px solid ${theme.palette.primary.main}`, my: 2 }} />
               <Typography sx={{ color: Colors.primary.main, fontSize: '1.3rem', textAlign: 'center', mt: '30px', mb: '30px' }}>
                    Detalje isporuke i plaćanja možete pogledati <Link rel='canonical' href='/informacije/isporuka-i-placanje'>OVDE!</Link>
               </Typography>
               <Divider sx={{ width: '60%', border: `1px solid ${theme.palette.primary.main}`, my: 2 }} />
               <Typography sx={{ color: Colors.primary.main, fontSize: '1.3rem', textAlign: 'justify', mt: '30px', mb: '30px', maxWidth: '500px' }}>
                    Ako je neki od proizvoda na promociji (npr. kupi 2 dobiješ 3, ili na 3 kutije dobiješ 10% popusta, itd.), popust će biti obračunat prilikom slanja paketa(ne prilikom kreiranja PORUDŽBENICE).
               </Typography>
          </StyledTotalsBox>
     )
}
export default CartTotals

