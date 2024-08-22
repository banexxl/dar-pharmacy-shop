import { accountsDBPromise } from "@/services/usersdb-connect";
import { ObjectId } from "mongodb";

export const getVerificationTokenByEmail = async (email: string) => {
     try {
          const client = await accountsDBPromise;
          const db = client.db('ACCOUNTS_DB');
          const verificationToken = await db.collection("verification_tokens").findOne({ email: email });

          return verificationToken;
     } catch (error) {
          console.log(error);
     }
}

export const getVerificationTokenByToken = async (token: string) => {
     try {
          const client = await accountsDBPromise;
          const db = client.db('ACCOUNTS_DB');
          const verificationToken = await db.collection("verification_tokens").findOne({ token: token });

          return verificationToken;
     } catch (error) {
          console.log(error);
     }
}

export const newVerification = async (token: string) => {
     const client = await accountsDBPromise;
     const db = client.db('ACCOUNTS_DB');

     try {
          // Fetch the existing verification token
          const existingToken = await db.collection('verification_tokens').findOne({ token });

          if (!existingToken) {
               return { error: "Nevalidan/nepostojeći token!" };
          }

          // Check if the token has expired
          const hasExpired = new Date(existingToken.expires) < new Date();
          if (hasExpired) {
               return { error: "Token je istekao!" };
          }

          // Fetch the associated user by email
          const existingUser = await db.collection('users').findOne({ email: existingToken.identifier });

          if (!existingUser) {
               return { error: "Korisnik nije pronađen!" };
          }

          // Update the user's email verification status
          await db.collection('users').updateOne(
               { _id: new ObjectId(existingUser._id) },
               {
                    $set: {
                         emailVerified: new Date(),
                         email: existingToken.identifier
                    }
               }
          );

          // Delete the used verification token
          await db.collection('verification_tokens').deleteOne({ _id: new ObjectId(existingToken._id) });

          return { success: "Email uspešno verifikovan" };
     } catch (error) {
          console.error('Error verifying email:', error);
          return { error: "Nešto je pošlo po zlu!" };
     }
};