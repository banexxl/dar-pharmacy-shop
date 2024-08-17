import { NextApiRequest, NextApiResponse } from 'next';
import { AccountService } from '@/services/accounts.service';

const RegisterClientApi = async (request: NextApiRequest, response: NextApiResponse) => {

     const { registerClient } = AccountService();

     if (request.method === 'POST') {
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
