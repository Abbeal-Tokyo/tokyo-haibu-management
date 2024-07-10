import NextAuth from "next-auth/next";
import authOptions from "@/lib/authentication/options";

export default NextAuth(authOptions);
