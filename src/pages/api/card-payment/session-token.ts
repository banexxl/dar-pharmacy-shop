import { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';

// Helper: base64url encode (RFC 7515 §2)
const base64url = (input: string | Buffer) => {
     return Buffer.from(typeof input === 'string' ? input : input.toString())
          .toString('base64')
          .replace(/\+/g, '-')
          .replace(/\//g, '_')
          .replace(/=+$/, '');
};

const HMACSHA256 = (stringToSign: string, secret: string) => {
     const hmac = crypto.createHmac('sha256', secret);
     hmac.update(stringToSign);
     return hmac.digest();
};

const header = {
     alg: 'HS256',
     typ: 'JWT',
};

const now = Math.floor(Date.now() / 1000); // current timestamp in seconds
const claims = {
     iat: now,              // issued at
     exp: now + 60 * 60,    // expires in 1 hour (3600 seconds)
};

const encodedHeader = base64url(JSON.stringify(header));
const encodedPayload = base64url(JSON.stringify(claims));
const signature = HMACSHA256(`${encodedHeader}.${encodedPayload}`, 'mysecret');
const encodedSignature = base64url(signature);

const jwt = `${encodedHeader}.${encodedPayload}.${encodedSignature}`;

export default async function handler(
     req: NextApiRequest,
     res: NextApiResponse<{ token?: string; error?: string }>
) {
     if (req.method !== 'POST') {
          return res.status(405).json({ error: 'Method Not Allowed' });
     }

     res.status(200).json({ token: jwt });
}
