import type { Session } from "next-auth";
import type { JWT } from "next-auth/jwt";
import type { User } from "./user";

export type SessionUser = User & { token: string };

export type CustomSession = Omit<Session, "user"> & { user?: SessionUser };

export type CustomToken = JWT & { user?: SessionUser };
