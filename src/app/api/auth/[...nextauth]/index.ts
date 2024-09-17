import NextAuth from "next-auth/next";
import authOptions from "@/lib/authentication/authOptions";

export default NextAuth(authOptions);
