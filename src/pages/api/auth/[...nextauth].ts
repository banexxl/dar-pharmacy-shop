import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from 'next-auth/providers/email'
import dotenv from 'dotenv'
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../services/usersdb-connect";

export const authOptions: NextAuthOptions = {

          adapter: MongoDBAdapter(clientPromise),
          providers: [
                    GoogleProvider({
                              clientId: process.env.GOOGLE_CLIENT_ID!,
                              clientSecret: process.env.GOOGLE_CLIENT_SECRET!
                    }),
                    // Passwordless / email sign in
                    EmailProvider({
                              server: {
                                        host: process.env.EMAIL_SERVER_HOST,
                                        port: 587,
                                        auth: {
                                                  user: process.env.EMAIL_SERVER_USER,
                                                  pass: process.env.EMAIL_SERVER_PASSWORD,
                                        },
                              },
                              from: process.env.EMAIL_FROM,
                    }),
          ],
          callbacks: {
                    async jwt({ token }) {
                              token.userRole = "admin"
                              return token
                    },
                    async signIn({ user, account, profile, email, credentials }) {
                              return true
                    },
                    async redirect({ url, baseUrl }) {
                              return baseUrl
                    },
                    async session({ session, user, token }) {
                              return session
                    },
          },
          secret: process.env.JWT_SECRET
}

export default NextAuth(authOptions)
