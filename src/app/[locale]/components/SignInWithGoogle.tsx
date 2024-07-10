"use client";

import { signIn } from "next-auth/react";

const SignInWithGoogle = () => {
  return <>{signIn("google")}</>;
};

export default SignInWithGoogle;
