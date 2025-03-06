import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        return null;
      },
    }),
    
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID || "",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || "",
      
      token: {
        url: "https://graph.facebook.com/oauth/access_token",
        async request(context) {
          const url =
            `https://graph.facebook.com/oauth/access_token` +
            `?code=${context.params.code}` +
            `&client_id=${context.provider.clientId}` +
            `&redirect_uri=${context.provider.callbackUrl}` +
            `&client_secret=${context.provider.clientSecret}`;
          const response = await fetch(url);
          const tokens = await response.json();
          return { tokens };
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (
        account &&
        (account.provider === "google" || account.provider === "facebook")
      ) {
        const { name, email } = user;

        try {
          let payload = {
            email: email,
            name: name,
          };
          let headers = {
            "X-API-KEY": "kapanda-auth-key",
          };
          
          return true;
          
        } catch (error) {
          console.log(error);
        }
      }
      return true;
    },

    async redirect({ url, baseUrl }) {
      // console.log("Redirecting", url, baseUrl);
      if (url.includes("facebook") || url.includes("google")) {
        return Promise.resolve(url);
      }
      return Promise.resolve(baseUrl);
    },
    async session({ session, token, user, trigger }) {
      let account: any = token;
      if (account) {
        session.user = {
          ...session?.user,
          ...account.data.user,
          access_token: account.access_token,
          iat: account.iat,
          exp: account.exp,
          jti: account.jti,
          statusCode: account.statusCode,
          message: account.message,
        };
      }

      return session;
    },
    async jwt({ token, user, account, trigger, profile, session }) {
      
      return { ...token, ...user };
    },
  },
  pages: {
    error: "/auth/login",
    // signIn: "/login/close",
    signIn: "/login",
  },
};
