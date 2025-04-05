import { Box, Container, Typography, Divider } from '@mui/material';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import ICartItem from '@/interfaces/cart/cart.interface';
import { IUserForm } from '@/interfaces/checkout/user-form-values.interface';

const DeliveryConfirmationPage = () => {
     const cart: ICartItem[] = useSelector((state: any) => state.persistReduce.cartSliceReducer);
     const user: IUserForm = useSelector((state: any) => state.persistReduce.userInfoFormSliceReducer);

     const [deliveryDate, setDeliveryDate] = useState<string>('');

     useEffect(() => {
          const today = new Date();
          setDeliveryDate(today.toLocaleDateString('sr-RS'));
     }, []);

     const transaction = {
          orderNumber: 'ORD-20250405',
          authorizationCode: 'AUTH-XYZ123',
          status: 'Uspešna',
          statusCode: '00',
          transactionNumber: 'TXN-99887766',
          transactionDate: new Date().toLocaleString('sr-RS'),
          amount: cart.reduce((sum, item) => sum + item.price * item.count, 0),
          referenceId: 'REF-112233',
     };

     const merchant = {
          name: 'Apoteka DAR',
          pib: '109876543',
          address: 'Kragujevac, Srbija',
     };

     return (
          <Container maxWidth="md" sx={{ background: '#fff', p: 4, my: 4 }}>
               <Typography variant="h5" gutterBottom>
                    Potvrda o isporuci
               </Typography>

               <Divider sx={{ my: 2 }} />

               <Typography variant="subtitle1">👤 Podaci o korisniku:</Typography>
               <Typography>Ime i prezime: {user.name}</Typography>
               <Typography>Adresa: {user.streetAddress}, {user.zipPostalCode} {user.city}, {user.country}</Typography>
               <Typography>Broj telefona: {user.phoneNumber}</Typography>
               <Typography>Potpis: _________________________</Typography>

               <Divider sx={{ my: 2 }} />

               <Typography variant="subtitle1">📦 Podaci o narudžbini:</Typography>
               {cart.map((item, index) => (
                    <Box key={index} sx={{ mb: 1 }}>
                         <Typography>Naziv: {item.name}</Typography>
                         <Typography>Jedinicna cena: {item.price.toFixed(2)} RSD</Typography>
                         <Typography>Kolicina: {item.count}</Typography>
                         <Typography>Porez: uračunat u cenu</Typography>
                         <Typography>Ukupno: {(item.count * item.price).toFixed(2)} RSD</Typography>
                    </Box>
               ))}
               <Typography fontWeight="bold">
                    Ukupna cena: {transaction.amount.toFixed(2)} RSD
               </Typography>

               <Divider sx={{ my: 2 }} />

               <Typography variant="subtitle1">🏢 Podaci o trgovcu:</Typography>
               <Typography>Naziv: {merchant.name}</Typography>
               <Typography>PIB: {merchant.pib}</Typography>
               <Typography>Adresa: {merchant.address}</Typography>

               <Divider sx={{ my: 2 }} />

               <Typography variant="subtitle1">💳 Podaci o transakciji:</Typography>
               <Typography>Broj narudžbine: {transaction.orderNumber}</Typography>
               <Typography>Autorizacioni kod: {transaction.authorizationCode}</Typography>
               <Typography>Status transakcije: {transaction.status}</Typography>
               <Typography>Kod statusa: {transaction.statusCode}</Typography>
               <Typography>Broj transakcije: {transaction.transactionNumber}</Typography>
               <Typography>Datum transakcije: {transaction.transactionDate}</Typography>
               <Typography>Iznos transakcije: {transaction.amount.toFixed(2)} RSD</Typography>
               <Typography>Referentni ID: {transaction.referenceId}</Typography>

               <Divider sx={{ my: 2 }} />

               <Typography variant="subtitle1">📅 Datum isporuke:</Typography>
               <Typography>{deliveryDate}</Typography>
          </Container>
     );
};

export default DeliveryConfirmationPage;
