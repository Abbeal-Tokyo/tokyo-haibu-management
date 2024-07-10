"use client";

import { SessionProvider } from "next-auth/react";

export interface IProps {
  children: React.ReactNode;
}

const AuthenticationProvider = ({ children }: IProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthenticationProvider;
