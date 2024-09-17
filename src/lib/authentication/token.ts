import type { Account } from "next-auth";
import type { GoogleProfile } from "next-auth/providers/google";
import type { CustomToken, SessionUser } from "@/model/authentication";

const googleTokenUrl = "https://oauth2.googleapis.com/token";

export const generateInitialToken = (
  token: CustomToken,
  account: Account,
  profile: GoogleProfile,
): CustomToken => {
  if (account.access_token) {
    token.email = profile.email;
    token.accessToken = account.access_token;
    token.expire = account.expires_at! * 1000;
    token.refreshToken = account.refresh_token;
    token.user = {
      email: profile.email,
      first_name: profile.given_name,
      last_name: profile.family_name,
      token: account.access_token,
    };
  }
  return token;
};

export const refreshAccessToken = async (
  token: CustomToken,
): Promise<CustomToken> => {
  const options = {
    client_id: process.env.GOOGLE_OAUTH_CLIENT_ID as string,
    client_secret: process.env.GOOGLE_OAUTH_CLIENT_SECRET as string,
    grant_type: "refresh_token",
    refresh_token: token.refreshToken as string,
  };

  try {
    const urlWithParams = googleTokenUrl + "?" + new URLSearchParams(options);
    return await fetch(urlWithParams, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then((refreshedToken) => {
        return {
          ...token,
          accessToken: refreshedToken.access_token,
          expire: (token.expire as number) + refreshedToken.expires_in * 100,
          refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
          user: {
            ...(token.user as SessionUser),
            token: refreshedToken.access_token,
          },
        };
      });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error while requesting token: ", error.response.data);
    throw error;
  }
};
