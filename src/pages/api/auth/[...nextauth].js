import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const authoptions = {
  providers: [
    CredentialsProvider({
      name: " Credentials ",

      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter Your Username",
        },
        password: { label: "Password", type: "password" },
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};

module.exports = NextAuth(authoptions);
