// pages/api/verify-email.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { newVerification } from '@/services/token/verification-token.service';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
     if (req.method !== 'POST') {
          return res.status(405).json({ error: 'Method Not Allowed' });
     }

     const { token } = req.body;

     if (!token) {
          return res.status(400).json({ error: 'Token is required' });
     }

     try {
          const result = await newVerification(token);

          if (result.error) {
               return res.status(400).json({ error: result.error });
          }

          return res.status(200).json({ success: result.success });
     } catch (error) {
          console.error('Error in verification:', error);
          return res.status(500).json({ error: 'Internal Server Error' });
     }
}
