'use strict'

import { NextAuthOptions, Theme } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from 'next-auth/providers/email'
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { accountsDBPromise } from "../../../services/usersdb-connect";
import nodemailer from "nodemailer"
import { AccountService } from "@/services/accounts.service";
import { Colors } from "@/styles/theme";

async function sendVerificationRequest(params: any) {

     const { identifier, url, provider, theme } = params
     const { host } = new URL(url)

     const transport = nodemailer.createTransport({
          host: process.env.EMAIL_SERVER_HOST,
          port: 465,
          secure: true, // true for 465, false for other ports
          priority: "high",
          auth: {
               user: process.env.EMAIL_SERVER_USER, // generated ethereal user
               pass: process.env.EMAIL_SERVER_PASSWORD, // generated ethereal password
          },
          tls: {
               rejectUnauthorized: false,
               servername: process.env.EMAIL_SERVER_HOST,
          }
     })

     const result = await transport.sendMail({
          to: identifier,
          from: provider.from,
          subject: `Prijava na ${host}`,
          html: html({ url, host, theme }),
     })

     const failed = result.rejected.concat(result.pending).filter(Boolean)

     if (failed.length) {
          throw new Error(`Email(s) (${failed.join(", ")}) could not be sent`)
     }
}

/**
 * Email HTML body
 * Insert invisible space into domains from being turned into a hyperlink by email
 * clients like Outlook and Apple mail, as this is confusing because it seems
 * like they are supposed to click on it to sign in.
 *
 * @note We don't add the email address to avoid needing to escape it, if you do, remember to sanitize it!
 */
function html(params: { url: string; host: string; theme: Theme }) {
     const { url, host, theme } = params
     const escapedHost = host.replace(/\./g, "&#8203;.")

     return `
<html>
<head>
     <meta name="viewport" content="width=device-width">
  <style>
    .container {
            background: linear-gradient(70deg, ${Colors.primary.main} 0%, ${Colors.primary.light} 35%, ${Colors.primary.lighter} 100%);
            border-radius: 15px;
            max-width: 300px;
            height: auto;
            margin: 50px auto; /* Added margin for better centering */
            padding: 20px;
            gap: 20px;
            overflow-wrap: break-word;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Optional shadow for better visual */
            justify-content: center;    
        }

        .message {
            text-align: justify;
            margin: 10px 0;
            max-width: 280px;
        }

        a {
            cursor: pointer;
            color: #440101;
            text-decoration: underline;
        }

        h1, h3 {
            text-align: center;
            color: #4c0404;
            max-width: 300px;
        }

        .button-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
            text-align: center;
            margin-left: 80px;
        }

        .button {
            color: #5c0701;
            text-decoration: underline;
            font-size: 16px;
            justify-content: center;
            align-items: center;
            text-align: center;
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

        .footer {
            text-align: center;
            color: #4c0404;
            max-width: 300px;
        }

        .header {
               font-size: 24px;
               text-align: center;
               color: #4c0404;
               max-width: 300px;
        }

        .body {
               font-size: 18px; 
               text-align: center;
               color: #4c0404;
               max-width: 300px;
        }

        strong{
               color: #881111;
        }
  </style>
</head>
<body>
  <div class="container">
    <div class="image-container">
      <img src="https://apoteka-dar.rs/images/home-page/apotekaDar.jpg" alt="DAR image"/>
    </div>
    <div class="header">
      Poslali ste zahteh na prijavu na: <br/><br/> <strong>${escapedHost}</strong><br/><br/>
    </div>
    <div class="body">
      Možete iskoristiti link ispod za prijavu<br/>
    </div>
    <div class="button-container">
      <div class="button">
        <a href="${url}" target="_blank">>>>Prijavi se<<<</a><br/><br/>
      </div>
    </div>
    <div class="footer">
      Ako niste tražili prijavu, ignorišite ovaj email, i posetite našu <a href="https://apoteka-dar.rs">stranicu</a>.
    </div>
  </div>
</body>
</html>
`
}

export const authOptions: NextAuthOptions = {

     adapter: MongoDBAdapter(accountsDBPromise),
     providers: [
          // GoogleProvider({
          //      clientId: process.env.GOOGLE_CLIENT_ID!,
          //      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
          //      // checks: ['none']
          // }),
          // Passwordless / email sign in
          EmailProvider({
               server: {
                    host: process.env.EMAIL_SERVER_HOST,
                    port: 465,
                    auth: {
                         user: process.env.EMAIL_SERVER_USER,
                         pass: process.env.EMAIL_SERVER_PASSWORD,
                    },
               },
               from: process.env.EMAIL_FROM,
               normalizeIdentifier(identifier: string): string {
                    // Get the first two elements only,
                    // separated by `@` from user input.
                    let [local, domain] = identifier.toLowerCase().trim().split("@")
                    // The part before "@" can contain a ","
                    // but we remove it on the domain part
                    domain = domain.split(",")[0]
                    return `${local}@${domain}`

                    // You can also throw an error, which will redirect the user
                    // to the error page with error=EmailSignin in the URL
                    // if (identifier.split("@").length > 2) {
                    //   throw new Error("Only one email allowed")
                    // 
               },
               // generateVerificationToken: async (token: string) => {
               //      return token
               // },
               sendVerificationRequest,
          }),
     ],
     callbacks: {
          async jwt({ token }) {
               token.userRole = "admin"
               return token
          },
          async signIn({ account, profile, email, user }) {
               try {
                    // // Check if the sign-in provider is Google
                    // if (account?.provider === "google") {
                    //      // Check if the Google email is a Gmail account
                    //      if (profile?.email && profile.email.endsWith("@gmail.com")) {
                    //           console.log("Google sign-in with Gmail:", profile.email);

                    //           // Allow sign-in
                    //           return true;
                    //      } else {
                    //           console.log("Google sign-in attempt with non-Gmail email:", profile?.email);

                    //           // Reject sign-in for non-Gmail accounts
                    //           return false;
                    //      }
                    // }

                    // Check if the sign-in provider is Email
                    if (account?.provider === "email") {
                         // Check if the email object and user object are defined
                         if (user?.email) {
                              const userFromDB = await AccountService().getUserByEmail(user.email);
                              console.log("userFromDB", userFromDB.emailVerified);
                              // Allow sign-in if the email is verified
                              return userFromDB.emailVerified ? true : false;
                         } else {
                              console.log("Email sign-in attempt without verification or missing email:", email);

                              // Reject sign-in if verification was not successful or email is missing
                              return false;
                         }
                    } else {
                         console.log("Sign-in with other provider:", account?.provider);
                         return false;
                    }
               } catch (error) {
                    console.error("Error during sign-in:", error);
                    // Return false to deny the sign-in
                    return false;
               }
          },
          async redirect({ url, baseUrl }) {
               // Allow relative URLs or external URLs that match the baseUrl
               if (url.startsWith(baseUrl) || url.startsWith("/")) {
                    return url; // Redirect to the original page if it’s within the same domain
               }
               return baseUrl; // Otherwise, redirect to the base URL (home page)
          },
          async session({ session, user, token }) {
               return session
          }
     },
     pages: {
          signIn: '/auth/signin',
          verifyRequest: '/auth/verify-request',
          error: '/auth/error',
     }
}

export default NextAuth(authOptions)
