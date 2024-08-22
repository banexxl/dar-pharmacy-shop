import { AccountService } from "@/services/accounts.service"
import { NextApiRequest, NextApiResponse } from 'next';

const FindClientEmail = async (request: NextApiRequest, response: NextApiResponse) => {
     if (request.method === 'POST') {
          try {
               const emailFound = await AccountService().checkIfEmailIsVerified(request.body);
               if (emailFound!.status === 200) {
                    return response.status(200).json({ error: 'Email already registered!', status: 200 });
               } else {
                    return response.status(202).json({ message: 'Email can be registered!', status: 202 });
               }
          } catch (error) {
               return response.status(500).json({ error: 'Internal server error!' });
          }
     } else {
          return response.status(405).json({ error: 'Method not allowed!' });
     }
};

export default FindClientEmail;
