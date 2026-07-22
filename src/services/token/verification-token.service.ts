import { MongoClient, ObjectId } from "mongodb";

export const getVerificationTokenByEmail = async (email: string) => {
     const client: any = await MongoClient.connect(process.env.MONGODB_URI!)
     try {
          const db = client.db('ACCOUNTS_DB');
          const verificationToken = await db.collection("Verification_tokens").findOne({ email: email });

          return verificationToken;
     } catch (error) {
          console.log('getVerificationTokenByEmail failed with: ', error);
     } finally {
          client.close();
     }
}

export const newVerification = async (token: string) => {
     const client: any = await MongoClient.connect(process.env.MONGODB_URI!)

     try {
          const db = client.db('ACCOUNTS_DB');
          const existingToken = await db.collection('Verification_tokens').findOne({ token });

          if (!existingToken) {
               return { error: "Nevalidan/nepostojeći token!" };
          }

          // Check if the token has expired
          const hasExpired = new Date(existingToken.expires) < new Date();
          if (hasExpired) {
               return { error: "Token je istekao!" };
          }

          // Fetch the associated user by email
          const existingUser = await db.collection('Users').findOne({ email: existingToken.identifier });

          if (!existingUser) {
               return { error: "Korisnik nije pronađen!" };
          }

          // Update the user's email verification status
          await db.collection('Users').updateOne(
               { _id: new ObjectId(existingUser._id) },
               {
                    $set: {
                         emailVerified: new Date(),
                         // email: existingToken.identifier - ne znam da li je ovo potrebno
                    }
               }
          );

          // Delete the used verification token
          await db.collection('Verification_tokens').deleteMany({ identifier: existingToken.identifier });

          return { success: "Email uspešno verifikovan" };
     } catch (error) {
          console.error('Error verifying email:', error);
          return { error: "Nešto je pošlo po zlu!" };
     } finally {
          client.close();
     }
};