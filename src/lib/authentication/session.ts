import type { CustomSession } from "@/model/authentication";
import { getServerSession } from "next-auth";
import authOptions from "./options";

export const getSession = async () => {
  return (await getServerSession(authOptions)) as CustomSession;
};
