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

     const { registerClient } = AccountService();

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
     } else {
          return response.status(405).json({ error: 'Method not allowed!' });
     }
};

export default RegisterClientApi;
