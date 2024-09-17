"use client";

import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";
import GoogleAuthProvider from "./GoogleAuthProvider";

export interface IProps {
  children: React.ReactNode;
}

const AuthenticationProvider = ({ children }: IProps) => {
  return (
    <NextAuthSessionProvider>
      <GoogleAuthProvider>{children}</GoogleAuthProvider>
    </NextAuthSessionProvider>
  );
};

export default AuthenticationProvider;
