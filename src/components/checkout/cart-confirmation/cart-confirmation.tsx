import CartItem from '@/components/cart/components/cartItem'
import ICartItem from '@/interfaces/cart/cart.interface'
import { cartTotalPriceSelector } from '@/store/cart/cart.selector'
import { Box, TableRow, Typography, Container, Table, TableHead, TableCell, TableBody, Button, TableContainer, IconButton } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { FunctionComponent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IConfirmationProps } from '@/interfaces/checkout/confirmation.interface'
import Link from 'next/link'
import theme, { Colors } from '@/styles/theme'
import { ReCaptcha, useReCaptcha } from 'next-recaptcha-v3'
import Counter from '@/utils/counter'
import { removeAllSingleItems } from '@/store/cart/cart.slice'
import toast from 'react-hot-toast'

export const Confirmation: FunctionComponent<IConfirmationProps> = (props: IConfirmationProps) => {

     const cart = useSelector((state: any) => state.persistReduce.cartSliceReducer)
     const isScreenToMedium = useMediaQuery(theme.breakpoints.down('md'))
     const totalItemPrice: any = useSelector(cartTotalPriceSelector)
     const dispatch = useDispatch()


     const [submitEnabled, setSubmitEnabled] = useState<boolean>(false)
     const { executeRecaptcha, loaded } = useReCaptcha();
     const [token, setToken] = useState<string>('');

     useEffect(() => {
          if (loaded) {
               const generateToken = async () => {
                    const newToken = await executeRecaptcha("form_submit");
                    setToken(newToken);
               };
               generateToken();
          }
     }, [loaded, executeRecaptcha]);

     const handleBack = () => {
          props.tabIndex === 1 ? props.setTab?.(props.tabIndex - 1) : null
     };

     const handleNext = () => {
          props.tabIndex === 1 ? props.setTab?.(props.tabIndex + 1) : null
     };

     return (
          <Container className="CartWrapper" disableGutters sx={{ px: { xs: 1, sm: 0 }, width: '100%', maxWidth: '100%' }}>
               {isScreenToMedium ? (
                    <Box
                         sx={{
                              maxHeight: '60vh',
                              overflowY: 'auto',
                              overflowX: 'hidden',
                              display: 'grid',
                              gap: 1.5,
                              mb: 2,
                         }}
                    >
                         {cart.map((cartItem: ICartItem) => {
                              const baseTotal = (cartItem.count * cartItem.price).toFixed(2)
                              const hasDiscount = cartItem.discount && (cartItem.discount_amount ?? 0) > 0
                              const discountedTotal = (
                                   (cartItem.price - cartItem.price * ((cartItem.discount_amount ?? 0) / 100)) *
                                   cartItem.count
                              ).toFixed(2)

                              return (
                                   <Box
                                        key={cartItem.id}
                                        sx={{
                                             border: `1px solid ${Colors.primary.light}`,
                                             borderRadius: 2,
                                             p: 1.5,
                                             backgroundColor: Colors.white,
                                        }}
                                   >
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                             <Link rel='canonical' href={`/proizvod/${cartItem.slug}`}>
                                                  <Box
                                                       component='img'
                                                       src={cartItem.image_url}
                                                       alt={cartItem.name}
                                                       sx={{
                                                            width: 64,
                                                            height: 64,
                                                            objectFit: 'contain',
                                                            borderRadius: 1,
                                                       }}
                                                  />
                                             </Link>

                                             <Box sx={{ flex: 1, minWidth: 0 }}>
                                                  <Typography
                                                       sx={{
                                                            color: Colors.primary.main,
                                                            fontWeight: 700,
                                                            fontSize: '0.95rem',
                                                            lineHeight: 1.3,
                                                       }}
                                                  >
                                                       {cartItem.name}
                                                  </Typography>
                                                  <Typography
                                                       sx={{
                                                            color: Colors.primary.dark,
                                                            fontSize: '0.8rem',
                                                            mt: 0.25,
                                                       }}
                                                  >
                                                       Kod: {cartItem.id.toString().slice(-8).toUpperCase()}
                                                  </Typography>
                                             </Box>

                                             <IconButton
                                                  onClick={() => {
                                                       toast.success('Proizvod je uklonjen iz korpe', {
                                                            position: 'top-center',
                                                            duration: 1500,
                                                       })
                                                       dispatch(removeAllSingleItems(cartItem.id))
                                                  }}
                                                  sx={{ color: Colors.primary.main }}
                                             >
                                                  <DeleteIcon />
                                             </IconButton>
                                        </Box>

                                        <Box
                                             sx={{
                                                  mt: 1,
                                                  pt: 1,
                                                  borderTop: `1px solid ${Colors.primary.light}`,
                                                  display: 'grid',
                                                  gap: 0.75,
                                             }}
                                        >
                                             <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}>
                                                  <Typography sx={{ color: Colors.primary.dark, fontSize: '0.82rem' }}>
                                                       Pakovanje
                                                  </Typography>
                                                  <Typography sx={{ color: Colors.primary.main, fontSize: '0.82rem', fontWeight: 600 }}>
                                                       {cartItem.quantity} {cartItem.quantity_unit}
                                                  </Typography>
                                             </Box>

                                             <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 1 }}>
                                                  <Typography sx={{ color: Colors.primary.dark, fontSize: '0.82rem' }}>
                                                       Količina
                                                  </Typography>
                                                  <Counter id={cartItem.id} count={cartItem.count}>
                                                       {cartItem.count}
                                                  </Counter>
                                             </Box>

                                             <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}>
                                                  <Typography sx={{ color: Colors.primary.dark, fontSize: '0.82rem' }}>
                                                       Cena sa PDV
                                                  </Typography>
                                                  <Typography sx={{ color: Colors.primary.main, fontSize: '0.82rem', fontWeight: 600 }}>
                                                       {baseTotal} RSD
                                                  </Typography>
                                             </Box>

                                             <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}>
                                                  <Typography sx={{ color: Colors.primary.dark, fontSize: '0.82rem' }}>
                                                       Ukupno sa popustom
                                                  </Typography>
                                                  <Typography
                                                       sx={{
                                                            color: hasDiscount ? Colors.primary.main : Colors.primary.dark,
                                                            fontSize: '0.82rem',
                                                            fontWeight: hasDiscount ? 700 : 600,
                                                       }}
                                                  >
                                                       {hasDiscount
                                                            ? `(-${cartItem.discount_amount}%) ${discountedTotal} RSD`
                                                            : `${baseTotal} RSD`}
                                                  </Typography>
                                             </Box>
                                        </Box>
                                   </Box>
                              )
                         })}
                    </Box>
               ) : (
                    <TableContainer sx={{
                         maxHeight: 'none',
                         overflowY: 'visible',
                         overflowX: 'visible',
                         mb: { xs: 2, md: 0 }
                    }}>
                         <Table size='medium' className="StyledTable">
                              <TableHead className="StyledHeader">
                                   <TableRow>
                                        <TableCell sx={{ width: { xs: 72, md: 88 }, color: Colors.primary.main }}>Slika</TableCell>
                                        <TableCell className="StyledHeaderCell" sx={{ color: Colors.primary.main }}>Naziv</TableCell>
                                        <TableCell className="StyledHeaderCell" sx={{ color: Colors.primary.main }}>Pakovanje</TableCell>
                                        <TableCell className="StyledHeaderCell" sx={{ color: Colors.primary.main }}>Kod</TableCell>
                                        <TableCell className="StyledHeaderCell" sx={{ color: Colors.primary.main }}>Količina</TableCell>
                                        <TableCell className="StyledHeaderCell" sx={{ color: Colors.primary.main }}>Cena sa PDV</TableCell>
                                        <TableCell className="StyledHeaderCell" sx={{ color: Colors.primary.main }}>Ukupno sa popustom</TableCell>
                                        <TableCell className="StyledHeaderCell" sx={{ color: Colors.primary.main }}>Obriši</TableCell>
                                   </TableRow>
                              </TableHead>
                              <TableBody className="StyledTableBody">
                                   {cart.map((cartItem: ICartItem) => (
                                        <CartItem discount={cartItem.discount} key={cartItem.id} count={cartItem.count} id={cartItem.id}
                                             name={cartItem.name} description={cartItem.description} main_category={cartItem.main_category}
                                             available_stock={cartItem.available_stock} ingredients={cartItem.ingredients}
                                             discount_amount={cartItem.discount_amount}
                                             instructions={cartItem.instructions} quantity={cartItem.quantity}
                                             warning={cartItem.warning} image_url={cartItem.image_url} price={cartItem.price}
                                             quantity_unit={cartItem.quantity_unit} media_urls={[]} slug={cartItem.slug} mid_category={cartItem.mid_category ? cartItem.mid_category : ''} sub_category={null} manufacturer_id={null} new_arrival={false} best_seller={false} is_active={false} promoting={false} promotion_text={null} display_on_home={false} created_at={''} updated_at={''} />
                                   ))}
                              </TableBody>
                         </Table>
                    </TableContainer>
               )}
               <Typography sx={{ color: Colors.primary.main }}>
                    {totalItemPrice < 8000 ? `Ukupno sa PDV: ${parseFloat(totalItemPrice).toFixed(2)} RSD` : `Ukupno sa PDV, besplatna dostava: ${parseFloat(totalItemPrice).toFixed(2)} RSD`}
               </Typography>
               <Typography sx={{ color: Colors.primary.main, fontSize: '1rem', textAlign: 'center' }}>
                    PDV uračunat u cenu i nema skrivenih troškova
               </Typography>
               {totalItemPrice < 8000 ? (
                    <Typography>
                         Troškove dostave požete videti {' '}
                         <Link rel='canonical' href='http://www.postexpress.rs/struktura/lat/cenovnik/cenovnik-unutrasnji-saobracaj.asp' target='_blank'>OVDE!</Link>
                    </Typography>
               ) : (
                    <Typography sx={{ color: Colors.primary.main }}>Dostava besplatna</Typography>
               )}
               <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1.5, flexWrap: 'wrap', mt: 1 }}>
                    <Button className="CheckoutNextPrevButton" type='submit' sx={{ maxWidth: '100px', width: { xs: '100%', sm: 'auto' } }} startIcon={<NavigateBeforeIcon />} onClick={() => handleBack()}>
                         Nazad
                    </Button>
                    <Button className="CheckoutNextPrevButton" onClick={() => handleNext()} sx={{ maxWidth: '100px', width: { xs: '100%', sm: 'auto' } }} endIcon={<NavigateNextIcon />} disabled={!submitEnabled}>
                         Dalje
                    </Button>
               </Box>
               <Typography sx={{ color: Colors.primary.main, fontSize: '1.3rem', textAlign: 'center', mt: '30px' }}>
                    Detalje isporuke i plaćanja možete pogledati <Link rel='canonical' href='/informacije/isporuka-i-placanje'>OVDE!</Link>
               </Typography>
               <Typography sx={{ color: Colors.primary.main, fontSize: '1.3rem', textAlign: 'justify', mt: '10px', mb: '30px', maxWidth: '500px' }}>
                    Ako je neki od proizvoda na promociji (npr. kupi 2 dobiješ 3, ili na 3 kutije dobiješ 10% popusta, itd.), popust će biti obračunat prilikom slanja paketa(ne prilikom kreiranja PORUDŽBENICE).
               </Typography>
               <ReCaptcha onValidate={() => { setSubmitEnabled(true) }} action={'form_submit'} reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} />
          </Container>
     )
}

export default Confirmation
