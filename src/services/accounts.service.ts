import { MongoClient } from "mongodb";
import nodemailer from 'nodemailer';
import { transporter } from "./email/email-config";
import { Colors } from "@/styles/theme";
import { generateVerificationToken } from "./token/generate-verification-token";
import bcrypt from 'bcrypt';

export const AccountService = () => {

     const registerClient = async (data: any) => {

          const client: any = await MongoClient.connect(process.env.MONGODB_URI!);

          const verificationTokenObject = await generateVerificationToken(data.email);

          try {
               const db = client.db('ACCOUNTS_DB');

               // Hash the password and remove the confirmPassword from the data
               // const hashedPassword = await bcrypt.hash(data.password, 10);
               // delete data.confirmPassword;

               // Create a new data object with the hashed password
               // const userData = {
               //      ...data,
               //      password: hashedPassword,
               // };


               // Insert or update the user in the 'users' collection
               const insertUserResult = await db.collection('users').updateOne(
                    { email: { $regex: `^${data.email}$`, $options: 'i' } }, // Case-insensitive email check
                    { $setOnInsert: data }, // Only inserts if no document matches the query
                    { upsert: true } // Create a new document if no matching document is found
               );

               const html = `
                                        <html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .container {
            background: linear-gradient(70deg, ${Colors.primary.main} 0%, ${Colors.primary.light} 35%, ${Colors.primary.lighter} 100%);
            border-radius: 15px;
            width: 400px;
            height: auto;
            margin: 50px auto; /* Added margin for better centering */
            padding: 20px;
            gap: 20px;
            overflow-wrap: break-word;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Optional shadow for better visual */
        }

        .message {
            text-align: justify;
            margin: 10px 0;
        }

        a {
            cursor: pointer;
            color: #de2626;
            text-decoration: underline;
        }

        h1, h3 {
            text-align: justify;
        }

        .button-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
        }

        .button {
            color: #e53b2f;
            text-decoration: underline;
            font-size: 16px;
        }

        .image-container {
            text-align: center;
            margin-bottom: 20px; /* Added margin to space out the image from the rest of the content */
        }

        .image-container img {
            width: 100px;
            height: auto;
            border-radius: 50%;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Optional shadow for better visual */
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="image-container">
            <img src="https://apoteka-dar.rs/images/home-page/apotekaDar.jpg" alt="Apoteka DAR">
        </div>
        <h1>Potvrda Vaše email adrese.</h1>
        <h3>${data.email}</h3>
        <p class="message">
            Hvala Vam na uspešnoj registraciji u Apoteku DAR. Ostao je još jedan korak, a to je da potvrdite Vašu email adresu klikom na
            <a href="${process.env.BASE_URL! + '/email/' + verificationTokenObject?.token}" target="_blank">ovaj link</a>.
        </p>
        <div class="button-container">
            <a href="https://apoteka-dar.rs" class="button">Apoteka DAR</a>
        </div>
    </div>
</body>
</html>
`

               if (insertUserResult.upsertedCount > 0) {
                    const mailOptions = {
                         from: process.env.EMAIL_FROM, // sender address
                         to: data.email, // list of receivers
                         subject: 'Potvrdite Vaš email', // Subject line
                         html
                    };

                    const registerUserEmailSendResponse = await transporter.sendMail(mailOptions)
                    console.log('registerUserEmailSendResponse', registerUserEmailSendResponse);

                    return { message: 'Email successfully registered and confirmation sent!', status: 200 };
               } else {
                    return { message: 'Email already registered!', status: 409 };
               }
          } catch (error: any) {
               return { message: error.message, status: 500 };
          } finally {
               await client.close();
          }
     };

     const checkIfEmailExists = async (email: string) => {
          const client: any = await MongoClient.connect(process.env.MONGODB_URI!)

          try {
               const db = client.db('ACCOUNTS_DB');
               const user = await db.collection('users').findOne({ email: email });

               if (user.email !== email) {
                    return { message: 'Email available!', status: 202 };
               } else {
                    return { message: 'Email found!', status: 200 };
               }
          } catch (error: any) {
               return { message: error.message }
          }
          finally {
               await client.close();
          }
     }

     const getUserByEmail = async (email: string) => {
          const client: any = await MongoClient.connect(process.env.MONGODB_URI!);

          try {
               const db = client.db('ACCOUNTS_DB');
               const user = await db.collection('users').findOne({ email });

               return user;
          } catch (error: any) {
               return { message: error.message }
          } finally {
               await client.close();
          }
     }

     const getUserById = async (id: string) => {
          const client: any = await MongoClient.connect(process.env.MONGODB_URI!);

          try {
               const db = client.db('ACCOUNTS_DB');
               const user = await db.collection('users').findOne({ _id: id });

               return user;
          } catch (error: any) {
               return { message: error.message }
          } finally {
               await client.close();
          }
     }

     return {
          getUserByEmail,
          registerClient,
          checkIfEmailExists,
          getUserById
     }
}