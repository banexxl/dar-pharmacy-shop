import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from 'next-auth/providers/email'
import dotenv from 'dotenv'

export const authOptions: NextAuthOptions = {

          providers: [
                    GoogleProvider({
                              clientId: process.env.GOOGLE_CLIENT_ID!,
                              clientSecret: process.env.GOOGLE_CLIENT_SECRET!
                    }),
                    // Passwordless / email sign in
                    EmailProvider({
                              server: process.env.MAIL_SERVER,
                              from: 'Apoteka DAR <no-reply@apoteka-dar.com>'
                    }),
          ],
          callbacks: {
                    async jwt({ token }) {
                              token.userRole = "admin"
                              return token
                    },
          },
          secret: dotenv.config().parsed!.JWT_SECRET
}

export default NextAuth(authOptions)
