import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  //!configure one or more authentication provider
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    //add some provider
  ],
  secret: process.env.SECRET,
  pages: {
    signIn: "/auth/signin",
  },
});
