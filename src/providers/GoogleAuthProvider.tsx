import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

export interface IProps {
  children: React.ReactNode;
}

const GoogleAuthProvider = ({ children }: IProps) => {
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn("google");
    }
  }, [status]);

  return <>{status === "authenticated" && <>{children}</>}</>;
};

export default GoogleAuthProvider;
