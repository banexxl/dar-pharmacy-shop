import { NextApiRequest, NextApiResponse } from 'next';
import { AccountService } from '@/services/accounts.service';
import { IUserForm } from '@/interfaces/checkout/user-form-values.interface';


const isValidUserForm = (data: any): data is IUserForm => {
     return (
          typeof data.name === 'string' && data.name.trim() !== '' &&
          typeof data.streetAddress === 'string' && data.streetAddress.trim() !== '' &&
          typeof data.phoneNumber === 'string' && data.phoneNumber.trim() !== '' &&
          typeof data.city === 'string' && data.city.trim() !== '' &&
          (!data.provinceState || (typeof data.provinceState === 'string' && data.provinceState.trim() !== '')) &&
          typeof data.country === 'string' && data.country.trim() !== '' &&
          typeof data.zipPostalCode === 'string' && data.zipPostalCode.trim() !== '' &&
          typeof data.email === 'string' && data.email.trim() !== ''
     );
};

const RegisterClientApi = async (request: NextApiRequest, response: NextApiResponse) => {
     const { registerClient, updateUserByEmail } = AccountService();

     if (request.method === 'POST') {
          if (!isValidUserForm(request.body)) {
               return response.status(400).json({ error: 'Invalid data provided!' });
          }

          try {
               const registered = await registerClient(request.body);
               if (registered!.message === 'Email already registered!') {
                    return response.status(409).json({ error: 'Email already registered!' });
               } else {
                    return response.status(200).json({ message: 'Email successfully registered!' });
               }
          } catch (error) {
               return response.status(500).json({ error: 'Internal server error!' });
          }
     } else if (request.method === 'PUT') {
          if (!isValidUserForm(request.body)) {
               return response.status(400).json({ error: 'Invalid data provided!' });
          }

          try {
               const updated = await updateUserByEmail(request.body.email, request.body);
               if (updated) {
                    return response.status(200).json({ message: 'User data successfully updated!' });
               } else {
                    return response.status(404).json({ error: 'User not found!' });
               }
          } catch (error) {
               return response.status(500).json({ error: 'Internal server error!' });
          }
     } else {
          return response.status(405).json({ error: 'Method not allowed!' });
     }
};

export default RegisterClientApi;