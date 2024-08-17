import { AccountService } from '@/services/accounts.service';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
     if (req.method !== 'POST') {
          return res.status(405).json({ message: 'Method not allowed' });
     }

     const { email } = req.body;

     if (!email || typeof email !== 'string') {
          return res.status(400).json({ message: 'Email is required and must be a string' });
     }

     try {
          const user = await AccountService().getUserByEmail(email);

          if (!user) {
               return res.status(404).json({ message: 'User not found' });
          }

          return res.status(200).json(user);
     } catch (error: any) {
          return res.status(500).json({ message: error.message });
     }
}
