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
          text: text({ url, host }),
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
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      background: linear-gradient(90deg, ${Colors.primary.main} 0%, ${Colors.primary.light} 35%, ${Colors.primary.lighter} 100%);
      border-radius: 20px;
      margin: 0;
      padding: 0;
      font-family: Helvetica, Arial, sans-serif;
    }
    
    .button-container {
      text-align: center;
      padding: 20px 0;
    }

    .button {
      border-radius: 5px;
      background-color: ${Colors.primary.main};
      transition: transform 0.3s ease, background-color 0.3s ease;
    }

    .button:hover {
      background-color: ${Colors.primary.lighter};
      transform: scale(1.05);
    }

    .button a {
      font-size: 18px;
      color: ${Colors.primary.lighter};
      text-decoration: none;
      border-radius: 5px;
      padding: 10px 20px;
      border: 1px solid ${Colors.primary.lighter};
      display: inline-block;
      font-weight: bold;
      transition: color 0.3s ease, transform 0.3s ease;
    }

    .button a:hover {
      color: ${Colors.primary.main};
      transform: scale(1.1);
    }
  </style>
</head>
<body>
  <div style="text-align: center; padding: 20px 0;">
    <img src="https://apoteka-dar.rs/images/home-page/apotekaDar.jpg" alt="DAR image" style="width: 100px; height: auto; border-radius: 50%;"/>
  </div>
  <table width="100%" border="0" cellspacing="20" cellpadding="0"
    style="max-width: 600px; margin: auto; border-radius: 10px;">
    <tr>
      <td align="center"
        style="padding: 10px 0px; font-size: 22px; color: ${Colors.primary.main};">
        Prijavi se na: <strong>${escapedHost}</strong>
      </td>
    </tr>
    <tr>
      <td align="center" style="padding: 20px 0;">
        <table border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td class="button">
              <a href="${url}" target="_blank">
                Prijavi se
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center"
        style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; color: ${Colors.white};">
        Ako niste tražili prijavu, ignorišite ovaj email.
      </td>
    </tr>
  </table>
</body>
</html>
`
}

/** Email Text body (fallback for email clients that don't render HTML, e.g. feature phones) */
function text({ url, host }: { url: string; host: string }) {
     return `Sign in to ${host}\n${url}\n\n`
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

                              return userFromDB.emailVerified ? true : false;
                         } else {
                              console.log("Email sign-in attempt without verification or missing email:", email);

                              // Reject sign-in if verification was not successful or email is missing
                              return false;
                         }
                    }

                    // In case other providers are added in the future, allow by default
                    console.log("Sign-in with other provider:", account?.provider);
                    return true;

               } catch (error) {
                    console.error("Error during sign-in:", error);

                    // Return false to deny the sign-in
                    return false;
               }
          },
          async redirect({ url, baseUrl }) {
               return baseUrl
          },
          async session({ session, user, token }) {
               return session
          }
     },
     // pages: {
     //           signIn: '/signin'
     // }
}

export default NextAuth(authOptions)
