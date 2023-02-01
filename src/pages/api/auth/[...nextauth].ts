import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {

          providers: [
                    GoogleProvider({
                              clientId: process.env.GOOGLE_CLIENT_ID!,
                              clientSecret: process.env.GOOGLE_CLIENT_SECRET!
                    })
          ],
          callbacks: {
                    async jwt({ token }) {
                              token.userRole = "admin"
                              return token
                    },
          },
          secret: process.env.JWT_SECRET
}

export default NextAuth(authOptions)
