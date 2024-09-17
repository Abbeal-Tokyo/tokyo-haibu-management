"use server";

import { type User, UserStatus, getUserStatusFromString } from "@/model/user";
import prisma from "@/lib/db";

export const createUserIfDoesntExist = async (user: User) => {
  getUserByEmail(user.email).then((res) => {
    if (!res) createUser(user);
  });
};

const getUserByEmail = async (email: string): Promise<User | undefined> => {
  return prisma.users.findUnique({ where: { email: email } }).then((data) => {
    if (data) return parsePrismaUser(data);
    return undefined;
  });
};

const createUser = async (user: User) => {
  const newUser = {
    ...user,
    status: (user.status ?? UserStatus.ACTIVE).toString(),
  };
  await prisma.users.create({ data: newUser });
  console.log("New user created ", { newUser });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parsePrismaUser = (prismaUser: any): User => {
  return {
    first_name: prismaUser.first_name ?? undefined,
    last_name: prismaUser.last_name ?? undefined,
    email: prismaUser.email,
    status: prismaUser.status
      ? getUserStatusFromString(prismaUser.status)
      : undefined,
  };
};
