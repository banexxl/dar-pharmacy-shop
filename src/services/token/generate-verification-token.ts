import { v4 as uuidv4 } from 'uuid';
import { getVerificationTokenByEmail } from './verification-token.service';
import { accountsDBPromise } from '../usersdb-connect';

export const generateVerificationToken = async (email: string) => {
     try {
          // Generate a random token
          const token = uuidv4();
          const expires = new Date().getTime() + 1000 * 60 * 60 * 3; // 3 hours

          // Check if a token already exists for the user
          const existingToken = await getVerificationTokenByEmail(email);

          const client = await accountsDBPromise;
          const db = client.db('ACCOUNTS_DB');
          const collection = db.collection("verification_tokens");

          if (existingToken) {
               await collection.deleteOne({ _id: existingToken._id })
          }

          // Create a new verification token
          const verificationToken = {
               identifier: email,
               token,
               expires: new Date(expires),
          };

          await collection.insertOne(verificationToken);

          return verificationToken;
     } catch (error) {
          console.log(error);
     }
}
