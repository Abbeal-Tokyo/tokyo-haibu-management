import type {
  Account,
  NextAuthOptions,
  Profile,
  Session,
  User,
} from "next-auth";
import type { AdapterUser } from "next-auth/adapters";
import type { JWT } from "next-auth/jwt";
import type { SessionUser } from "@/model/authentication";
import GoogleProvider, { type GoogleProfile } from "next-auth/providers/google";
import { createUserIfDoesntExist } from "@/lib/actions/user";
import { generateInitialToken, refreshAccessToken } from "./token";

const googleProvider = GoogleProvider({
  clientId: process.env.GOOGLE_OAUTH_CLIENT_ID as string,
  clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET as string,
  authorization: {
    params: {
      scope: [
        "https://www.googleapis.com/auth/userinfo.email",
        "https://www.googleapis.com/auth/userinfo.profile",
      ].join(" "),
      access_type: "offline",
      prompt: "select_account",
    },
  },
});

const authOptions: NextAuthOptions = {
  providers: [googleProvider],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60,
    updateAge: 60 * 60,
  },
  callbacks: {
    async signIn(params: {
      account: Account | null;
      profile?: Profile | undefined;
    }) {
      const profile = params.profile as GoogleProfile;
      createUserIfDoesntExist({
        first_name: profile?.given_name,
        last_name: profile.family_name,
        email: profile.email,
      });
      return true;
    },
    async jwt(params: {
      token: JWT;
      user: User | AdapterUser;
      account: Account | null;
      profile?: Profile | undefined;
    }) {
      const { token, account, profile } = params;
      // Initial sign in
      if (account && profile) {
        return generateInitialToken(token, account, profile as GoogleProfile);
      }

      // Return previous token if the access token has not expired yet
      if (Date.now() < (token.expire as number)) {
        return token;
      }

      // Access token has expired, try to update it
      return await refreshAccessToken(token);
    },
    async session(params: { session: Session; token: JWT; trigger: string }) {
      const { session, token } = params;
      session.user = token.user as SessionUser;
      return session;
    },
  },
};

export default authOptions;
